import { MetadataRoute } from 'next'
import { getTrials } from '@/lib/actions'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://trials.hematology.tw'

    const trials = await getTrials()

    // Include all trials in sitemap so users can find historical/completed trials too.
    // Google will rank active ones higher via the priority field.
    const trialUrls = trials.map((trial) => {
        const isActive = ['Recruiting', 'Active, not recruiting', 'Pending Approval'].includes(trial.status)
        return {
            url: `${baseUrl}/trials/${trial.id}`,
            lastModified: new Date(trial.lastUpdated),
            changeFrequency: (isActive ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
            priority: isActive ? 0.8 : 0.5,
        }
    })

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
