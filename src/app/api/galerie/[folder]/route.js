import { NextResponse } from 'next/server'

// API route : GET /api/galerie/[folder]
// Retourne la liste des images d'un dossier Cloudinary
export async function GET(request, { params }) {
  const { folder } = await params

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json({ images: [] })
  }

  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?prefix=${folder}&max_results=500&type=upload`,
      {
        headers: { Authorization: `Basic ${credentials}` },
        next: { revalidate: 60 },
      }
    )

    if (!res.ok) return NextResponse.json({ images: [] })

    const data = await res.json()
    const images = data.resources.map(r => {
      const filename = r.public_id.replace(`${folder}/`, '')
      return {
        url: `https://res.cloudinary.com/${cloudName}/image/upload/w_1200,q_auto,f_auto/${r.public_id}`,
        urlThumb: `https://res.cloudinary.com/${cloudName}/image/upload/w_400,q_auto,f_auto/${r.public_id}`,
        publicId: r.public_id,
        filename,
      }
    })

    return NextResponse.json({ images })
  } catch {
    return NextResponse.json({ images: [] })
  }
}
