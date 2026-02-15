'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Database } from '@/lib/types_db'
import { Trial } from '@/lib/data'

// Transform DB row to Application Trial type
function transformTrial(row: Database['public']['Tables']['trials']['Row']): Trial {
    return {
        id: row.id,
        diseaseCategory: row.disease_category as any,
        trialName: row.trial_name,
        clinicalTrialNumber: row.clinical_trial_number,
        studyDrug: row.study_drug,
        studyDesign: row.study_design || '',
        controlArm: row.control_arm || '',
        sponsor: row.sponsor || '',
        inclusionCriteriaSimple: row.inclusion_criteria_simple || '',
        inclusionCriteriaDetailed: row.inclusion_criteria_detailed || '',
        exclusionCriteriaSimple: row.exclusion_criteria_simple || '',
        exclusionCriteriaDetailed: row.exclusion_criteria_detailed || '',
        expectedEnrollment: row.expected_enrollment || 0,
        alreadyEnrolled: row.already_enrolled || 0,
        studyNurse: row.study_nurse || '',
        contactTel: row.contact_tel || '',
        pi: row.pi,
        note: row.note || '',
        status: row.status as any,
        lastUpdated: row.updated_at || row.created_at,
    }
}

export async function getTrials() {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('trials')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching trials:', error)
        return []
    }

    return data.map(transformTrial)
}

export async function getTrial(id: string) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('trials')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error('Error fetching trial:', error)
        return null
    }

    return transformTrial(data)
}

export async function createTrial(formData: FormData) {
    const supabase = await createClient()

    const trialData = {
        disease_category: formData.get('diseaseCategory') as string,
        trial_name: formData.get('trialName') as string,
        clinical_trial_number: formData.get('clinicalTrialNumber') as string,
        study_drug: formData.get('studyDrug') as string,
        study_design: formData.get('studyDesign') as string,
        control_arm: formData.get('controlArm') as string,
        sponsor: formData.get('sponsor') as string,
        inclusion_criteria_simple: formData.get('inclusionCriteriaSimple') as string,
        inclusion_criteria_detailed: formData.get('inclusionCriteriaDetailed') as string,
        exclusion_criteria_simple: formData.get('exclusionCriteriaSimple') as string,
        exclusion_criteria_detailed: formData.get('exclusionCriteriaDetailed') as string,
        expected_enrollment: Number(formData.get('expectedEnrollment')),
        already_enrolled: Number(formData.get('alreadyEnrolled')),
        study_nurse: formData.get('studyNurse') as string,
        contact_tel: formData.get('contactTel') as string,
        pi: formData.get('pi') as string,
        note: formData.get('note') as string,
        status: formData.get('status') as string,
        updated_at: new Date().toISOString(),
    }

    const { error } = await supabase.from('trials').insert(trialData)

    if (error) {
        console.error('Error creating trial:', error)
        return { error: error.message }
    }

    revalidatePath('/')
    revalidatePath('/admin')
    redirect('/admin')
}

export async function updateTrial(id: string, formData: FormData) {
    const supabase = await createClient()

    const trialData = {
        disease_category: formData.get('diseaseCategory') as string,
        trial_name: formData.get('trialName') as string,
        clinical_trial_number: formData.get('clinicalTrialNumber') as string,
        study_drug: formData.get('studyDrug') as string,
        study_design: formData.get('studyDesign') as string,
        control_arm: formData.get('controlArm') as string,
        sponsor: formData.get('sponsor') as string,
        inclusion_criteria_simple: formData.get('inclusionCriteriaSimple') as string,
        inclusion_criteria_detailed: formData.get('inclusionCriteriaDetailed') as string,
        exclusion_criteria_simple: formData.get('exclusionCriteriaSimple') as string,
        exclusion_criteria_detailed: formData.get('exclusionCriteriaDetailed') as string,
        expected_enrollment: Number(formData.get('expectedEnrollment')),
        already_enrolled: Number(formData.get('alreadyEnrolled')),
        study_nurse: formData.get('studyNurse') as string,
        contact_tel: formData.get('contactTel') as string,
        pi: formData.get('pi') as string,
        note: formData.get('note') as string,
        status: formData.get('status') as string,
        updated_at: new Date().toISOString(),
    }

    const { error } = await supabase
        .from('trials')
        .update(trialData)
        .eq('id', id)

    if (error) {
        console.error('Error updating trial:', error)
        return { error: error.message }
    }

    revalidatePath('/')
    revalidatePath('/admin')
    redirect('/admin')
}

export async function deleteTrial(id: string) {
    const supabase = await createClient()
    const { error } = await supabase.from('trials').delete().eq('id', id)

    if (error) {
        console.error('Error deleting trial:', error)
        return { error: error.message }
    }

    revalidatePath('/')
    revalidatePath('/admin')
}
