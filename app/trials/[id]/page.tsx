import { getTrial } from '@/lib/actions'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function TrialPage({ params }: { params: { id: string } }) {
    // Await params as required in newer Next.js versions if applicable, but for safety in generic version:
    // In Next.js 15 params is async, so we await it
    const { id } = await params
    const trial = await getTrial(id)

    if (!trial) {
        return notFound()
    }

    // The rest of the component rendering...
    // I will copy the previous UI but populate with `trial`
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        &larr; Back to Dashboard
                    </Link>
                </div>

                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">{trial.trialName}</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">{trial.clinicalTrialNumber}</p>
                            </div>
                            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${trial.status === "Recruiting" ? "bg-green-100 text-green-800" :
                                trial.status === "On Hold" ? "bg-yellow-100 text-yellow-800" :
                                    "bg-gray-100 text-gray-800"
                                }`}>
                                {trial.status}
                            </span>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Disease Category</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.diseaseCategory}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Study Drug</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.studyDrug}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Study Design</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.studyDesign}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Control Arm</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.controlArm}</dd>
                            </div>
                            {/* Criteria Section */}
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5 bg-gray-50/50">
                                <dt className="text-sm font-medium text-gray-500">Inclusion Criteria (Summary)</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.inclusionCriteriaSimple}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5 bg-gray-50/50">
                                <dt className="text-sm font-medium text-gray-500">Inclusion Criteria (Detailed)</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-wrap">{trial.inclusionCriteriaDetailed}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5 bg-gray-50/50">
                                <dt className="text-sm font-medium text-gray-500">Exclusion Criteria (Summary)</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.exclusionCriteriaSimple}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5 bg-gray-50/50">
                                <dt className="text-sm font-medium text-gray-500">Exclusion Criteria (Detailed)</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-wrap">{trial.exclusionCriteriaDetailed}</dd>
                            </div>

                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Enrollment</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.alreadyEnrolled} / {trial.expectedEnrollment}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Principal Investigator</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.pi}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Study Nurse</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.studyNurse} ({trial.contactTel})</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Note</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{trial.note}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{new Date(trial.lastUpdated).toLocaleDateString()}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
