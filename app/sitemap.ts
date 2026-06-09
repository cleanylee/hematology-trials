import { MetadataRoute } from 'next'
import { getTrials } from '@/lib/actions'
import { DISEASE_LANDINGS } from '@/lib/diseases'

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

    // Patient-facing pages: only trials actively recruiting
    const patientTrialUrls = trials
        .filter(t => t.status === 'Recruiting')
        .map(trial => ({
            url: `${baseUrl}/patients/${trial.id}`,
            lastModified: new Date(trial.lastUpdated),
            changeFrequency: 'weekly' as 'weekly',
            priority: 0.7,
        }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/patients`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/diseases`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...DISEASE_LANDINGS.map(d => ({
            url: `${baseUrl}/diseases/${d.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as 'weekly',
            priority: 0.85,
        })),
        ...trialUrls,
        ...patientTrialUrls,
    ]
}
