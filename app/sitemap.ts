import { MetadataRoute } from 'next'
import { getTrials } from '@/lib/actions'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Replace with your actual domain when deploying
    const baseUrl = 'https://hematology-trials.nckuh.org.tw'

    // Get all trials to generate dynamic URLs
    const trials = await getTrials()

    // Filter only active trials for the sitemap
    const activeTrials = trials.filter(trial =>
        ['Recruiting', 'Active, not recruiting', 'Pending Approval'].includes(trial.status)
    )

    const trialUrls = activeTrials.map((trial) => ({
        url: `${baseUrl}/trials/${trial.id}`,
        lastModified: new Date(trial.lastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...trialUrls,
    ]
}
