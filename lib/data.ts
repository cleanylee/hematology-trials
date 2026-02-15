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
    | "Recruiting Completed"
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
