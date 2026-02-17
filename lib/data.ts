export type DiseaseCategory =
    | "AML-MDS"
    | "ALL"
    | "CLL"
    | "CML"
    | "MM"
    | "Lymphoma"
    | "MPN"
    | "PNH"
    | "GVHD"
    | "Others";

export type TrialStatus =
    | "Pending Approval"
    | "Recruiting"
    | "On Hold"
    | "Active, not recruiting"
    | "Trial Completed"
    | "Terminated";

export interface Trial {
    id: string;
    diseaseCategory: DiseaseCategory;
    trialName: string;
    clinicalTrialNumber: string; // clinicaltrial.gov ID
    studyDrug: string; // Name and mechanism
    mechanismOfAction: string;
    studyDesign: string; // RCT, Single arm, etc.
    controlArm: string;
    sponsor: string;
    inclusionCriteriaSimple: string;
    inclusionCriteriaDetailed: string;
    exclusionCriteriaSimple: string;
    exclusionCriteriaDetailed: string;
    expectedEnrollment: number;
    alreadyEnrolled: number;
    studyNurse: string;
    contactTel: string;
    pi: string; // Principal Investigator
    note: string;
    status: TrialStatus;
    lastUpdated: string;
}

export const getCategoryColor = (category: DiseaseCategory): string => {
    switch (category) {
        case "AML-MDS": return "bg-rose-50 text-rose-700 border-rose-200";
        case "ALL": return "bg-indigo-50 text-indigo-700 border-indigo-200";
        case "CLL": return "bg-emerald-50 text-emerald-700 border-emerald-200";
        case "CML": return "bg-cyan-50 text-cyan-700 border-cyan-200";
        case "MM": return "bg-violet-50 text-violet-700 border-violet-200";
        case "Lymphoma": return "bg-amber-50 text-amber-700 border-amber-200";
        case "MPN": return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
        case "PNH": return "bg-lime-50 text-lime-700 border-lime-200";
        case "GVHD": return "bg-slate-50 text-slate-700 border-slate-200";
        default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
};
