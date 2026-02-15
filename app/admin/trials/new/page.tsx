import { AdminTrialForm } from "@/components/AdminTrialForm";

export default function NewTrialPage() {
    return (
        <div className="container py-8 space-y-6 max-w-3xl mx-auto">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Add New Trial</h1>
                <p className="text-muted-foreground">Fill in the details for a new clinical trial.</p>
            </div>
            <AdminTrialForm />
        </div>
    );
}
