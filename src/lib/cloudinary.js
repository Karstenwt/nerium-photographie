// Construit l'URL d'une image Cloudinary
// folder = nom du dossier Cloudinary (ex: "sophie-et-antoine-2025")
// filename = nom du fichier sans extension (ex: "mariee-1")
// options = { width, quality, format }
export function cloudinaryUrl(folder, filename, options = {}) {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const { width = 1200, quality = 'auto', format = 'auto' } = options

  return `https://res.cloudinary.com/${cloud}/image/upload/w_${width},q_${quality},f_${format}/${folder}/${filename}`
}

// Récupère la liste des images d'un dossier via l'API Cloudinary
// À appeler côté serveur uniquement (utilise la clé secrète)
export async function getGalleryImages(folder) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?prefix=${folder}&max_results=500&type=upload`,
    {
      headers: { Authorization: `Basic ${credentials}` },
      next: { revalidate: 60 }, // cache 1 minute
    }
  )

  if (!res.ok) return []

  const data = await res.json()
  return data.resources.map(r => ({
    url: cloudinaryUrl(folder, r.public_id.replace(`${folder}/`, ''), { width: 1200 }),
    urlThumb: cloudinaryUrl(folder, r.public_id.replace(`${folder}/`, ''), { width: 400 }),
    publicId: r.public_id,
  }))
}
