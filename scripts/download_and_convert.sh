#!/bin/bash
set -e

RESULTS_FILE="/tmp/gallery_results.json"
BASE_DIR="/Users/karsten/nerium-photographie/public/assets/images/portfolio"
QUALITY=60
MAX_WIDTH=2400

# Parse gallery results and download + convert each image
python3 << 'PYEOF'
import json, os, subprocess, sys
from concurrent.futures import ThreadPoolExecutor, as_completed

with open("/tmp/gallery_results.json") as f:
    results = json.load(f)

base_dir = "/Users/karsten/nerium-photographie/public/assets/images/portfolio"

def download_and_convert(args):
    gallery_name, idx, media_url, output_dir = args
    
    # Build the high-res URL (w_2400 for good quality)
    if '~mv2' in media_url:
        full_url = f"https://static.wixstatic.com/media/{media_url}/v1/fit/w_2400,h_2400,q_90/{media_url}"
    else:
        full_url = f"https://static.wixstatic.com/media/{media_url}"
    
    # Download as jpg first
    jpg_path = os.path.join(output_dir, f"temp_{idx:03d}.jpg")
    avif_path = os.path.join(output_dir, f"{gallery_name}-{idx:02d}.avif")
    
    if os.path.exists(avif_path):
        return f"  SKIP {avif_path} (already exists)"
    
    try:
        # Download
        result = subprocess.run(
            ["curl", "-s", "-L", "-o", jpg_path, full_url],
            capture_output=True, timeout=30
        )
        
        if not os.path.exists(jpg_path) or os.path.getsize(jpg_path) < 1000:
            return f"  FAIL download {gallery_name}-{idx:02d}"
        
        # Convert to AVIF using avifenc
        result = subprocess.run(
            ["avifenc", "--min", "20", "--max", "35", "-s", "6", jpg_path, avif_path],
            capture_output=True, timeout=60
        )
        
        if os.path.exists(avif_path) and os.path.getsize(avif_path) > 100:
            os.remove(jpg_path)
            size_kb = os.path.getsize(avif_path) / 1024
            return f"  OK {gallery_name}-{idx:02d}.avif ({size_kb:.0f}KB)"
        else:
            return f"  FAIL convert {gallery_name}-{idx:02d}: {result.stderr.decode()[:100]}"
    except Exception as e:
        if os.path.exists(jpg_path):
            os.remove(jpg_path)
        return f"  ERROR {gallery_name}-{idx:02d}: {str(e)[:100]}"

tasks = []
for gallery_name, gallery_data in results.items():
    output_dir = os.path.join(base_dir, gallery_name)
    os.makedirs(output_dir, exist_ok=True)
    
    media_urls = gallery_data.get('mediaUrls', [])
    total = gallery_data.get('totalItemsCount', len(media_urls))
    
    print(f"\n=== {gallery_name}: {len(media_urls)} images to process ===")
    
    # Remove old files
    for f in os.listdir(output_dir):
        if f.endswith('.avif'):
            os.remove(os.path.join(output_dir, f))
            
    for idx, media_url in enumerate(media_urls, 1):
        tasks.append((gallery_name, idx, media_url, output_dir))

print(f"\nTotal images to download and convert: {len(tasks)}")
print("Starting parallel downloads (8 threads)...\n")

completed = 0
with ThreadPoolExecutor(max_workers=8) as executor:
    futures = {executor.submit(download_and_convert, task): task for task in tasks}
    for future in as_completed(futures):
        result = future.result()
        completed += 1
        if completed % 20 == 0 or 'FAIL' in result or 'ERROR' in result:
            print(f"[{completed}/{len(tasks)}] {result}")

print(f"\nDone! {completed} images processed.")

# Final count
for gallery_name in results:
    output_dir = os.path.join(base_dir, gallery_name)
    count = len([f for f in os.listdir(output_dir) if f.endswith('.avif')])
    print(f"  {gallery_name}: {count} AVIF files")
PYEOF
