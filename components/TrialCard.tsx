import Link from "next/link";
import { Trial } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Pill } from "lucide-react";

interface TrialCardProps {
    trial: Trial;
}

export function TrialCard({ trial }: TrialCardProps) {
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

    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                    <Badge variant="outline" className="mb-2">
                        {trial.diseaseCategory}
                    </Badge>
                    <Badge className={getStatusColor(trial.status)}>
                        {trial.status}
                    </Badge>
                </div>
                <CardTitle className="line-clamp-2 text-lg leading-tight">
                    <Link href={`/trials/${trial.id}`} className="hover:underline decoration-primary">
                        {trial.trialName}
                    </Link>
                </CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                    {trial.clinicalTrialNumber}
                    {trial.sponsor && (
                        <>
                            <span>•</span>
                            <span className="truncate max-w-[150px]" title={trial.sponsor}>{trial.sponsor}</span>
                        </>
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-3">
                <div className="space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Pill className="h-4 w-4 shrink-0 text-primary/70" />
                        <span className="font-medium text-foreground">{trial.studyDrug}</span>
                    </div>

                    <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{trial.studyDesign || "No design specified"}</span>
                    </div>
                    {trial.inclusionCriteriaSimple && (
                        <div className="mt-3 pt-3 border-t">
                            <span className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1">Key Inclusion</span>
                            <p className="line-clamp-3 text-xs leading-relaxed">{trial.inclusionCriteriaSimple}</p>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="pt-0 flex flex-col items-start">
                <div className="w-full pt-3 border-t text-xs text-muted-foreground">
                    <div className="mb-2 truncate">PI: {trial.pi}</div>
                    <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Enrolled/ Expected: <span className="font-medium text-foreground">{trial.alreadyEnrolled}/{trial.expectedEnrollment}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
