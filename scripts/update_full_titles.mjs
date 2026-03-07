import { createClient } from '@supabase/supabase-js';

// Configuration - replace these with your actual Supabase credentials if running locally
// Or the script will try to use environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_KEY';

if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseKey === 'YOUR_SUPABASE_KEY') {
    console.error('Error: Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchTrialFullTitle(nctId) {
    if (!nctId || !nctId.startsWith('NCT')) return null;

    try {
        console.log(`Fetching title for ${nctId}...`);
        const response = await fetch(`https://clinicaltrials.gov/api/v2/studies/${nctId}`);
        if (!response.ok) {
            console.error(`Failed to fetch ${nctId}: ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        return data.protocolSection?.identificationModule?.officialTitle || null;
    } catch (error) {
        console.error(`Error fetching ${nctId}:`, error);
        return null;
    }
}

async function updateExistingTrials() {
    // 1. Get all trials that don't have a full title yet
    const { data: trials, error } = await supabase
        .from('trials')
        .select('id, clinical_trial_number, full_title')
        .or('full_title.is.null,full_title.eq.""');

    if (error) {
        console.error('Error fetching trials from database:', error);
        return;
    }

    console.log(`Found ${trials.length} trials to update.`);

    for (const trial of trials) {
        const fullTitle = await fetchTrialFullTitle(trial.clinical_trial_number);

        if (fullTitle) {
            console.log(`Updating ${trial.clinical_trial_number} with title: ${fullTitle.substring(0, 50)}...`);
            const { error: updateError } = await supabase
                .from('trials')
                .update({ full_title: fullTitle })
                .eq('id', trial.id);

            if (updateError) {
                console.error(`Error updating trial ${trial.id}:`, updateError);
            } else {
                console.log(`Successfully updated ${trial.clinical_trial_number}`);
            }
        } else {
            console.log(`No title found for ${trial.clinical_trial_number}`);
        }

        // Add a small delay to be nice to the API
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('Update complete.');
}

updateExistingTrials();
