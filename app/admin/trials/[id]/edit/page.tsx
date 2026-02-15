import { getTrial } from '@/lib/actions'
import { AdminTrialForm } from '@/components/AdminTrialForm'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function EditTrialPage({
    params,
}: {
    params: { id: string }
}) {
    const { id } = await params
    const trial = await getTrial(id)

    if (!trial) {
        return notFound()
    }

    return (
        <div className="container py-8 space-y-6 max-w-3xl mx-auto">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Edit Trial</h1>
                <p className="text-muted-foreground">
                    Update the details for this clinical trial.
                </p>
            </div>
            <AdminTrialForm initialData={trial} isEditing />
        </div>
    )
}
