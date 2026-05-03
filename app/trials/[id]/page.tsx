import { getTrial } from '@/lib/actions'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Metadata, ResolvingMetadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Edit } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

// Map status to badge color variants
const getStatusColor = (status: string) => {
    switch (status) {
        case 'Recruiting': return 'bg-green-100 text-green-800 hover:bg-green-100/80';
        case 'Pending Approval': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80';
        case 'Active, not recruiting': return 'bg-blue-100 text-blue-800 hover:bg-blue-100/80';
        case 'Trial Completed': return 'bg-gray-100 text-gray-800 hover:bg-gray-100/80';
        case 'Terminated': return 'bg-red-100 text-red-800 hover:bg-red-100/80';
        case 'On Hold': return 'bg-orange-100 text-orange-800 hover:bg-orange-100/80';
        default: return 'bg-gray-100 text-gray-800 hover:bg-gray-100/80';
    }
}

export const dynamic = 'force-dynamic'

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params
    const trial = await getTrial(id)

    if (!trial) {
        return {
            title: 'Trial Not Found',
            description: 'The requested clinical trial could not be found.',
        }
    }

    // Build a clean, descriptive sentence — not the buggy "Phase ${diseaseCategory}" version
    const descParts = [
        `${trial.diseaseCategory} clinical trial at NCKUH`,
        trial.studyDrug && `studying ${trial.studyDrug}`,
        trial.sponsor && `sponsored by ${trial.sponsor}`,
        trial.status && `(${trial.status})`,
    ].filter(Boolean).join(' ')

    const inclusionSnippet = trial.inclusionCriteriaSimple
        ? ` Key inclusion: ${trial.inclusionCriteriaSimple.slice(0, 150)}${trial.inclusionCriteriaSimple.length > 150 ? '...' : ''}`
        : ''

    const description = (descParts + '.' + inclusionSnippet).slice(0, 300)

    return {
        title: `${trial.trialName}${trial.studyDrug ? ' — ' + trial.studyDrug : ''}`,
        description,
        alternates: {
            canonical: `/trials/${id}`,
        },
        openGraph: {
            title: `${trial.trialName} | NCKUH Hematology Trials`,
            description,
            url: `/trials/${id}`,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${trial.trialName} | NCKUH Hematology Trials`,
            description,
        },
    }
}

export default async function TrialPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const trial = await getTrial(id)

    if (!trial) {
        return notFound()
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Map internal status to schema.org MedicalStudyStatus
    // https://schema.org/MedicalStudyStatus
    const statusMap: Record<string, string> = {
        'Recruiting': 'Recruiting',
        'Active, not recruiting': 'ActiveNotRecruiting',
        'Pending Approval': 'NotYetRecruiting',
        'On Hold': 'Suspended',
        'Trial Completed': 'Completed',
        'Terminated': 'Terminated',
    }

    // JSON-LD structured data for the trial — helps Google show rich results for medical studies
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalStudy',
        name: trial.trialName,
        description: trial.fullTitle || trial.studyDrug,
        url: `https://trials.hematology.tw/trials/${id}`,
        identifier: trial.clinicalTrialNumber,
        studySubject: {
            '@type': 'MedicalCondition',
            name: trial.diseaseCategory,
        },
        studyDesign: trial.studyDesign,
        status: statusMap[trial.status] || 'ActiveNotRecruiting',
        sponsor: trial.sponsor ? {
            '@type': 'Organization',
            name: trial.sponsor,
        } : undefined,
        studyLocation: {
            '@type': 'Hospital',
            name: 'National Cheng Kung University Hospital',
            alternateName: '國立成功大學醫學院附設醫院',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tainan',
                addressCountry: 'TW',
            },
        },
        healthCondition: trial.diseaseCategory,
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container py-8 space-y-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Link>

                    {user && (
                        <Link
                            href={`/admin/trials/${id}/edit`}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4"
                        >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Trial
                        </Link>
                    )}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{trial.trialName}</h1>
                        {trial.fullTitle && (
                            <p className="text-lg text-muted-foreground mt-2 leading-relaxed">
                                {trial.fullTitle}
                            </p>
                        )}
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
        </>
    )
}
