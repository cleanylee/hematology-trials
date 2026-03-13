import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Replace with your actual domain when deploying
    const baseUrl = 'https://hematology-trials.nckuh.org.tw'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/login/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
