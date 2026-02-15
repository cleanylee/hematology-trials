import { getTrials } from '@/lib/actions'
import { TrialsDashboardClient } from '@/components/TrialsDashboardClient'
import { Microscope } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const trials = await getTrials()

    return (
        <main className="min-h-screen bg-background">
            <div className="border-b bg-card">
                <div className="container py-4 md:py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Microscope className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                                成大醫院血液科臨床試驗
                            </h1>
                            <span className="text-muted-foreground text-lg">
                                NCKUH Hematology Trial Dashboard
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-8 max-w-7xl mx-auto">
                <TrialsDashboardClient trials={trials} />
            </div>
        </main>
    )
}
