
import { Trial } from "@/lib/data";

interface TrialCardProps {
    trial: Trial;
    onClick?: () => void;
}

export function TrialCard({ trial, onClick }: TrialCardProps) {
    const statusColors = {
        Recruiting: "bg-green-100 text-green-800 border-green-200",
        "On Hold": "bg-yellow-100 text-yellow-800 border-yellow-200",
        Completed: "bg-blue-100 text-blue-800 border-blue-200",
        Terminated: "bg-red-100 text-red-800 border-red-200",
    };

    return (
        <div
            onClick={onClick}
            className="group relative flex flex-col justify-between space-y-4 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md cursor-pointer"
        >
            <div className="space-y-2">
                <div className="flex items-start justify-between">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                        {trial.diseaseCategory}
                    </div>
                    <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${statusColors[trial.status]
                            }`}
                    >
                        {trial.status}
                    </span>
                </div>
                <h3 className="font-semibold leading-none tracking-tight text-xl group-hover:underline decoration-primary/50 underline-offset-4">
                    {trial.trialName}
                </h3>
                <p className="text-sm text-muted-foreground">{trial.clinicalTrialNumber}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="font-medium text-muted-foreground">Study Drug</p>
                    <p>{trial.studyDrug}</p>
                </div>
                <div>
                    <p className="font-medium text-muted-foreground">PI</p>
                    <p>{trial.pi}</p>
                </div>
                <div className="col-span-2">
                    <p className="font-medium text-muted-foreground">Inclusion (Simple)</p>
                    <p className="line-clamp-2">{trial.inclusionCriteriaSimple}</p>
                </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-muted-foreground border-t">
                <div>Enrolled: {trial.alreadyEnrolled} / {trial.expectedEnrollment}</div>
                <div>Nurse: {trial.studyNurse}</div>
            </div>
        </div>
    );
}
