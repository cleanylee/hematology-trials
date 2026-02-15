import { getTrial } from '@/lib/actions'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Map status to badge color variants
const getStatusColor = (status: string) => {
    switch (status) {
        case 'Recruiting': return 'bg-green-100 text-green-800 hover:bg-green-100/80';
        case 'Pending Approval': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80';
        case 'Recruiting Completed': return 'bg-blue-100 text-blue-800 hover:bg-blue-100/80';
        case 'Trial Completed': return 'bg-gray-100 text-gray-800 hover:bg-gray-100/80';
        case 'Terminated': return 'bg-red-100 text-red-800 hover:bg-red-100/80';
        case 'On Hold': return 'bg-orange-100 text-orange-800 hover:bg-orange-100/80';
        default: return 'bg-gray-100 text-gray-800 hover:bg-gray-100/80';
    }
}

export const dynamic = 'force-dynamic'

export default async function TrialPage({
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
        <div className="container py-8 space-y-6 max-w-4xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </Link>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{trial.trialName}</h1>
                    <div className="flex flex-wrap gap-2 mt-2 items-center text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">{trial.diseaseCategory}</span>
                        <span>•</span>
                        <span>{trial.clinicalTrialNumber}</span>
                        <span>•</span>
                        <span>Last updated: {new Date(trial.lastUpdated).toLocaleDateString()}</span>
                    </div>
                </div>
                <Badge className={getStatusColor(trial.status)}>
                    {trial.status}
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Study Design</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground">Study Drug</h4>
                                    <p>{trial.studyDrug}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground">Mechanism of Action</h4>
                                    <p>{trial.mechanismOfAction || "-"}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground">Sponsor</h4>
                                    <p>{trial.sponsor || "-"}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground">Design</h4>
                                    <p>{trial.studyDesign || "-"}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground">Control Arm</h4>
                                    <p>{trial.controlArm || "-"}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Criteria</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">Inclusion Criteria</h3>
                                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                                    <p className="mb-2 font-medium">{trial.inclusionCriteriaSimple}</p>
                                    <p className="text-muted-foreground whitespace-pre-wrap">{trial.inclusionCriteriaDetailed}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Exclusion Criteria</h3>
                                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                                    <p className="mb-2 font-medium">{trial.exclusionCriteriaSimple}</p>
                                    <p className="text-muted-foreground whitespace-pre-wrap">{trial.exclusionCriteriaDetailed}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {trial.note && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Notes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="whitespace-pre-wrap text-sm">{trial.note}</p>
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Enrollment</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span>Progress</span>
                                        <span className="font-medium">
                                            {trial.alreadyEnrolled} / {trial.expectedEnrollment}
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary"
                                            style={{
                                                width: `${Math.min(((trial.alreadyEnrolled || 0) / (trial.expectedEnrollment || 1)) * 100, 100)}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-sm text-muted-foreground">Principal Investigator</h4>
                                <p>{trial.pi}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm text-muted-foreground">Study Nurse</h4>
                                <p>{trial.studyNurse || "-"}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm text-muted-foreground">Contact Tel</h4>
                                <p>{trial.contactTel || "-"}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
