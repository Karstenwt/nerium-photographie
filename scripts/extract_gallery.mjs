import puppeteer from 'puppeteer';

const galleries = [
  { url: 'https://www.nerium-photographie.com/photo-grossesse-famille', name: 'grossesse-famille' },
  { url: 'https://www.nerium-photographie.com/portrait-couple', name: 'portrait-couple' },
];

async function extractGalleryItems(page, gallery) {
  console.log(`\n=== Processing: ${gallery.name} (${gallery.url}) ===`);
  
  await page.goto(gallery.url, { waitUntil: 'networkidle2', timeout: 30000 });
  
  // Wait for the gallery to load
  await page.waitForSelector('[id^="pro-gallery"]', { timeout: 10000 }).catch(() => {});
  
  // Extract gallery data from the page's embedded JSON
  const data = await page.evaluate(() => {
    const scripts = document.querySelectorAll('script:not([src])');
    for (const script of scripts) {
      try {
        const json = JSON.parse(script.textContent);
        if (json?.appsWarmupData?.['14271d6f-ba62-d045-549b-ab972ae1f70e']) {
          const appData = json.appsWarmupData['14271d6f-ba62-d045-549b-ab972ae1f70e'];
          // Find the gallery data key
          for (const [key, value] of Object.entries(appData)) {
            if (key.endsWith('_galleryData') && value.items) {
              return {
                compId: key.replace('_galleryData', ''),
                totalItemsCount: value.totalItemsCount,
                initialItems: value.items.map(item => ({
                  itemId: item.itemId,
                  mediaUrl: item.mediaUrl,
                  orderIndex: item.orderIndex,
                  width: item.metaData?.width,
                  height: item.metaData?.height,
                  fileName: item.metaData?.fileName,
                  title: item.metaData?.title,
                  alt: item.metaData?.alt,
                })),
              };
            }
          }
        }
      } catch (e) {}
    }
    return null;
  });
  
  if (!data) {
    console.log(`  ERROR: Could not find gallery data`);
    return { name: gallery.name, items: [], totalItemsCount: 0 };
  }
  
  console.log(`  Found ${data.initialItems.length}/${data.totalItemsCount} initial items (comp: ${data.compId})`);
  
  if (data.totalItemsCount <= data.initialItems.length) {
    return { name: gallery.name, items: data.initialItems, totalItemsCount: data.totalItemsCount };
  }
  
  // We need to scroll to load more items, or intercept the API calls
  // Let's scroll the gallery to trigger loading all items
  const allMediaUrls = new Set(data.initialItems.map(i => i.mediaUrl));
  
  // Intercept network requests to capture gallery item API calls
  const allItems = [...data.initialItems];
  
  // Scroll down repeatedly to trigger loading more items
  let previousCount = allMediaUrls.size;
  let scrollAttempts = 0;
  const maxScrollAttempts = 50;
  
  while (allMediaUrls.size < data.totalItemsCount && scrollAttempts < maxScrollAttempts) {
    await page.evaluate(() => {
      const gallery = document.querySelector('[id^="pro-gallery-container"]');
      if (gallery) {
        gallery.scrollTop += 2000;
      }
      window.scrollBy(0, 2000);
    });
    
    await new Promise(r => setTimeout(r, 1000));
    
    // Check for new images
    const newUrls = await page.evaluate(() => {
      const imgs = document.querySelectorAll('[id^="pro-gallery"] img[src*="wixstatic"]');
      return Array.from(imgs).map(img => {
        const src = img.src || img.dataset.src || '';
        const match = src.match(/5b92e9_[a-f0-9]{32}~mv2\.\w+/);
        return match ? match[0] : null;
      }).filter(Boolean);
    });
    
    for (const url of newUrls) {
      allMediaUrls.add(url);
    }
    
    if (allMediaUrls.size === previousCount) {
      scrollAttempts++;
    } else {
      scrollAttempts = 0;
      previousCount = allMediaUrls.size;
    }
    
    process.stdout.write(`\r  Loaded ${allMediaUrls.size}/${data.totalItemsCount} images...`);
  }
  
  console.log(`\n  Final count: ${allMediaUrls.size} images`);
  
  return { 
    name: gallery.name, 
    mediaUrls: Array.from(allMediaUrls), 
    totalItemsCount: data.totalItemsCount,
    items: data.initialItems
  };
}

async function main() {
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 10000 });
  
  const results = {};
  
  for (const gallery of galleries) {
    try {
      const result = await extractGalleryItems(page, gallery);
      results[gallery.name] = result;
    } catch (err) {
      console.log(`  ERROR processing ${gallery.name}: ${err.message}`);
    }
  }
  
  // Save results
  const fs = await import('fs');
  fs.writeFileSync('/tmp/gallery_results.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to /tmp/gallery_results.json');
  
  await browser.close();
}

main().catch(console.error);
