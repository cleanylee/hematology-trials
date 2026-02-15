export type DiseaseCategory =
    | "AML"
    | "ALL"
    | "MM"
    | "Lymphoma"
    | "PNH"
    | "MPN"
    | "GVHD"
    | "Other";

export type TrialStatus = "Recruiting" | "On Hold" | "Completed" | "Terminated";

export interface Trial {
    id: string;
    diseaseCategory: DiseaseCategory;
    trialName: string;
    clinicalTrialNumber: string; // clinicaltrial.gov ID
    studyDrug: string; // Name and mechanism
    studyDesign: string; // RCT, Single arm, etc.
    controlArm: string;
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

// MOCK_TRIALS removed in favor of Supabase
