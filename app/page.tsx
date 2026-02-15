import { getTrials } from '@/lib/actions'
import TrialsDashboardClient from '@/components/TrialsDashboardClient'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const trials = await getTrials()

    return <TrialsDashboardClient trials={trials} />
}
