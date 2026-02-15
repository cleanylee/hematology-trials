export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            trials: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string | null
                    disease_category: string
                    trial_name: string
                    clinical_trial_number: string
                    study_drug: string
                    study_design: string | null
                    control_arm: string | null
                    inclusion_criteria_simple: string | null
                    inclusion_criteria_detailed: string | null
                    exclusion_criteria_simple: string | null
                    exclusion_criteria_detailed: string | null
                    expected_enrollment: number | null
                    already_enrolled: number | null
                    study_nurse: string | null
                    contact_tel: string | null
                    pi: string
                    note: string | null
                    status: string
                }
                Insert: {
                    id?: string
                    created_at?: string
                    updated_at?: string | null
                    disease_category: string
                    trial_name: string
                    clinical_trial_number: string
                    study_drug: string
                    study_design?: string | null
                    control_arm?: string | null
                    inclusion_criteria_simple?: string | null
                    inclusion_criteria_detailed?: string | null
                    exclusion_criteria_simple?: string | null
                    exclusion_criteria_detailed?: string | null
                    expected_enrollment?: number | null
                    already_enrolled?: number | null
                    study_nurse?: string | null
                    contact_tel?: string | null
                    pi: string
                    note?: string | null
                    status?: string
                }
                Update: {
                    id?: string
                    created_at?: string
                    updated_at?: string | null
                    disease_category?: string
                    trial_name?: string
                    clinical_trial_number?: string
                    study_drug?: string
                    study_design?: string | null
                    control_arm?: string | null
                    inclusion_criteria_simple?: string | null
                    inclusion_criteria_detailed?: string | null
                    exclusion_criteria_simple?: string | null
                    exclusion_criteria_detailed?: string | null
                    expected_enrollment?: number | null
                    already_enrolled?: number | null
                    study_nurse?: string | null
                    contact_tel?: string | null
                    pi?: string
                    note?: string | null
                    status?: string
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            disease_category:
            | "AML"
            | "ALL"
            | "MM"
            | "Lymphoma"
            | "PNH"
            | "MPN"
            | "GVHD"
            | "Other"
            trial_status: "Recruiting" | "On Hold" | "Completed" | "Terminated"
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
