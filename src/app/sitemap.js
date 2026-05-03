export default function sitemap() {
  const baseUrl = 'https://www.nerium-photographie.com'

  return [
    { url: baseUrl,                                                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${baseUrl}/mariage`,                                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`,                                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio/mariage/sophie-et-antonin`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portfolio/mariage/blandine-et-yann`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portfolio/mariage/celine-et-paul`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portfolio/mariage/emilie-et-moussa`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portfolio/mariage/louise-et-nicolas`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portfolio/mariage/marie-et-marc`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portfolio/portrait/portrait-couple`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/portfolio/famille/grossesse-famille`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/a-propos`,                                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`,                                       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${baseUrl}/mentions-legales`,                              lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
