import { getTrials } from '@/lib/actions'
import AdminDashboardClient from '@/components/AdminDashboardClient'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
    const trials = await getTrials()

    return <AdminDashboardClient trials={trials} />
}
