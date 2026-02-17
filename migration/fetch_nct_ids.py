import json
import requests
import time
import os

# Configuration
INPUT_FILE = 'migration/trials_data.json'
OUTPUT_FILE = 'migration/update_nct_ids.sql'
BASE_URL = "https://clinicaltrials.gov/api/v2/studies"
DELAY_SECONDS = 0.5  # Respect rate limits

def fetch_nct_id(protocol_id, trial_name):
    """
    Searches for an NCT ID using Protocol ID first, then Trial Name.
    """
    # 1. Try searching by Protocol ID
    if protocol_id and protocol_id != "Unknown":
        print(f"Searching for Protocol ID: {protocol_id}...")
        try:
            response = requests.get(
                BASE_URL,
                params={"query.term": protocol_id, "pageSize": 1},
                timeout=10
            )
            if response.status_code == 200:
                data = response.json()
                if data.get('studies'):
                    nct_id = data['studies'][0]['protocolSection']['identificationModule']['nctId']
                    print(f"  -> Found NCT ID: {nct_id}")
                    return nct_id
        except Exception as e:
            print(f"  -> Error searching Protocol ID: {e}")

    # 2. Try searching by Trial Name
    if trial_name:
        
        # Clean up trial name for better search results (remove newlines, extra spaces)
        clean_name = trial_name.replace('\n', ' ').strip()
        print(f"Searching for Trial Name: {clean_name}...")
        
        try:
            response = requests.get(
                BASE_URL,
                params={"query.term": clean_name, "pageSize": 1},
                timeout=10
            )
            if response.status_code == 200:
                data = response.json()
                if data.get('studies'):
                    nct_id = data['studies'][0]['protocolSection']['identificationModule']['nctId']
                    print(f"  -> Found NCT ID (via name): {nct_id}")
                    return nct_id
        except Exception as e:
            print(f"  -> Error searching Trial Name: {e}")

    print("  -> No NCT ID found.")
    return None

def main():
    if not os.path.exists(INPUT_FILE):
        print(f"Error: {INPUT_FILE} not found.")
        return

    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        trials = json.load(f)

    sql_statements = []
    found_count = 0 
    
    print(f"Processing {len(trials)} trials...")

    for trial in trials:
        protocol_id = trial.get('clinical_trial_number')
        trial_name = trial.get('trial_name')
        
        # Skip if we already have an NCT ID (starts with NCT)
        # BUT user wanted to replace, so maybe check if it looks like an NCT ID?
        # Actually proper logic: if current value IS ALREADY an NCT ID, keep it?
        # Only fetch if it DOES NOT look like an NCT ID.
        if protocol_id and protocol_id.upper().startswith('NCT') and len(protocol_id) >= 10:
             print(f"Skipping {trial_name}: Already has NCT ID ({protocol_id})")
             continue

        nct_id = fetch_nct_id(protocol_id, trial_name)
        
        if nct_id:
            found_count += 1
            # Escape single quotes in trial name just in case
            safe_trial_name = trial_name.replace("'", "''")
            
            sql = f"UPDATE public.trials SET clinical_trial_number = '{nct_id}', updated_at = NOW() WHERE trial_name = '{safe_trial_name}';"
            sql_statements.append(sql)
        
        time.sleep(DELAY_SECONDS)

    # Generate SQL File
    header = """-- Update script for Clinical Trial Numbers (NCT IDs)
-- Generated automatically by fetch_nct_ids.py
BEGIN;
"""
    footer = "COMMIT;\n"
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(header)
        for sql in sql_statements:
            f.write(sql + "\n")
        f.write(footer)

    print("-" * 30)
    print(f"Done! Found {found_count}/{len(trials)} NCT IDs.")
    print(f"SQL script written to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
