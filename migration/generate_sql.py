import json
import uuid
import datetime

def escape_sql(val):
    if val is None:
        return "NULL"
    if isinstance(val, int):
        return str(val)
    if isinstance(val, str):
        # Escape single quotes
        val = val.replace("'", "''")
        return f"'{val}'"
    return f"'{str(val)}'"

def main():
    try:
        with open('migration/trials_data.json', 'r', encoding='utf-8') as f:
            trials = json.load(f)
    except FileNotFoundError:
        print("migration/trials_data.json not found.")
        return

    sql_statements = []
    
    # 1. Clear existing data (optional, but good for idempotent seed)
    # sql_statements.append("TRUNCATE TABLE public.trials;") 
    # Better not truncate if preserving other data, but user said "moving dataset", 
    # implying they want THIS data.
    # For now, just inserts.
    
    current_time = datetime.datetime.now(datetime.timezone.utc).isoformat()
    
    # User manually added these
    exclude_trials = ["MK-1026-011", "BGB-16673-303", "20190360"]
    
    for trial in trials:
        if trial['trial_name'] in exclude_trials:
            print(f"Skipping existing trial: {trial['trial_name']}")
            continue
            
        trial_id = str(uuid.uuid4())
        
        # Schema columns:
        # id, created_at, updated_at, disease_category, trial_name, clinical_trial_number,
        # study_drug, mechanism_of_action, study_design, control_arm, sponsor,
        # inclusion_criteria_simple, inclusion_criteria_detailed, 
        # exclusion_criteria_simple, exclusion_criteria_detailed,
        # expected_enrollment, already_enrolled, study_nurse, contact_tel, pi,
        # note, status
        
        cols = [
            "id", "created_at", "updated_at", 
            "disease_category", "trial_name", "clinical_trial_number",
            "study_drug", "mechanism_of_action", "study_design", "control_arm",
            "inclusion_criteria_simple", "inclusion_criteria_detailed",
            "expected_enrollment", "already_enrolled",
            "study_nurse", "contact_tel", "pi", "sponsor", "status"
        ]
        
        vals = [
            f"'{trial_id}'", 
            f"'{current_time}'", 
            f"'{current_time}'",
            f"'{trial['disease_category']}'",
            escape_sql(trial['trial_name']),
            escape_sql(trial['clinical_trial_number']),
            escape_sql(trial['study_drug']),
            escape_sql(trial['mechanism_of_action']),
            escape_sql(trial['study_design']),
            escape_sql(trial['control_arm']),
            escape_sql(trial['inclusion_criteria_simple']),
            escape_sql(trial['inclusion_criteria_detailed']),
            str(trial['expected_enrollment']),
            str(trial['already_enrolled']),
            escape_sql(trial['study_nurse']),
            escape_sql(trial['contact_tel']),
            escape_sql(trial['pi']),
            escape_sql(trial['sponsor']),
            f"'{trial['status']}'"
        ]
        
        stmt = f"INSERT INTO public.trials ({', '.join(cols)}) VALUES ({', '.join(vals)});"
        sql_statements.append(stmt)
        
    output_file = 'migration/seed_trials.sql'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("-- Seed data generated from migration\n")
        f.write("BEGIN;\n\n")
        f.write("\n".join(sql_statements))
        f.write("\n\nCOMMIT;")
        
    print(f"Generated {len(sql_statements)} INSERT statements in {output_file}")

if __name__ == "__main__":
    main()
