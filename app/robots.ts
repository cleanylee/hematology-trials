import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://trials.hematology.tw'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/login/', '/auth/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
