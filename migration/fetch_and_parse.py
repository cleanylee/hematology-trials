import urllib.request
import json
import re
from html.parser import HTMLParser
from urllib.parse import urljoin

BASE_URL = "http://trials.hematology.tw/"

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.in_link = False
        self.current_href = None
        self.current_text = ""

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.in_link = True
            for attr in attrs:
                if attr[0] == 'href':
                    self.current_href = attr[1]

    def handle_endtag(self, tag):
        if tag == 'a':
            if self.current_href and self.current_text.strip():
                # Filter for the specific category links we saw
                if "臨床試驗" in self.current_text or "Clinical Trial" in self.current_text or "List" in self.current_text: 
                     self.links.append((self.current_href, self.current_text.strip()))
            self.in_link = False
            self.current_href = None
            self.current_text = ""

    def handle_data(self, data):
        if self.in_link:
            self.current_text += data

class TableParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_table = False
        self.in_row = False
        self.in_cell = False
        self.current_row = []
        self.current_cell_text = ""
        self.headers = []
        self.data = []
        self.is_header = False

    def handle_starttag(self, tag, attrs):
        if tag == 'table':
            self.in_table = True
        elif tag == 'tr':
            self.in_row = True
            self.current_row = []
        elif tag in ['td', 'th']:
            self.in_cell = True
            self.current_cell_text = ""
            if tag == 'th':
                self.is_header = True

    def handle_endtag(self, tag):
        if tag == 'table':
            self.in_table = False
        elif tag == 'tr':
            self.in_row = False
            if self.current_row:
                if self.is_header:
                    self.headers = [h.strip() for h in self.current_row if h.strip()]
                    self.is_header = False
                else:
                    # simplistic logic: if we have headers, try to map
                    # if not, just append raw row
                    # Filter out empty rows
                    if any(cell.strip() for cell in self.current_row):
                         self.data.append(self.current_row)
        elif tag in ['td', 'th']:
            self.in_cell = False
            self.current_row.append(self.current_cell_text.strip())

    def handle_data(self, data):
        if self.in_cell:
            self.current_cell_text += data

def fetch_content(url):
    print(f"Fetching {url}...")
    try:
        req = urllib.request.Request(
            url, 
            data=None, 
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        )
        with urllib.request.urlopen(req) as response:
            content = response.read().decode('utf-8')
            print(f"  Fetched {len(content)} bytes.")
            print(f"  Snippet: {content[:200]}")
            return content
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def map_disease_category(raw_cat):
    raw_cat = raw_cat.upper()
    if 'CLL' in raw_cat: return 'CLL'
    if 'ALL' in raw_cat: return 'ALL'
    if 'AML' in raw_cat or 'MDS' in raw_cat: return 'AML-MDS'
    if 'CML' in raw_cat: return 'CML'
    if 'MM' in raw_cat: return 'MM'
    if 'LYMPHOMA' in raw_cat or 'FL' in raw_cat or 'NHL' in raw_cat or 'PTCL' in raw_cat or 'DLBCL' in raw_cat or "DLBLC" in raw_cat: return 'Lymphoma'
    if 'PNH' in raw_cat: return 'PNH'
    if 'ET' in raw_cat or 'MF' in raw_cat: return 'MPN'
    if 'GVHD' in raw_cat: return 'GVHD'
    return 'Others'

def clean_int(val):
    try:
        return int(val.strip())
    except:
        return 0

def main():
    import os
    import sys
    
    # Force utf-8 output
    sys.stdout.reconfigure(encoding='utf-8')
    
    # 1. Try local file first, then URL
    source_file = 'migration/source.html'
    html_content = ""
    
    if os.path.exists(source_file):
        print(f"Reading local file: {source_file}")
        with open(source_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
    else:
        print(f"Local file {source_file} not found. Fetching from {BASE_URL}...")
        html_content = fetch_content(BASE_URL)

    if not html_content:
        print("No content to parse.")
        return

    # 2. Parse tables directly from the content
    print("Parsing tables from content...")
    parser = TableParser()
    parser.feed(html_content)
    
    rows = parser.data
    print(f"Found {len(rows)} total rows.")
    
    processed_trials = []
    
    # Headers based on analysis:
    # 0: Protocol No/Name
    # 1: Diagnosis (Disease Category)
    # 2: Condition (Inclusion Simple?)
    # 3: Mechanism
    # 4: Age (Inclusion Detailed?)
    # 5: Phase
    # 6: Study Drug
    # 7: Control Arm
    # 8: Expected Enrollment
    # 9: Enrolled
    # 10: Screen Fail
    # 11: Remaining
    # 12: Nurse/Tel
    
    for row in rows:
        # Default values
        protocol_no = row[0].strip()
        disease_raw = row[1].strip()
        condition = row[2].strip()
        mechanism = row[3].strip()
        
        age = ""
        phase = ""
        drug = ""
        control = ""
        expected = 0
        enrolled = 0
        remaining = 0
        nurse_info = ""

        if len(row) == 13:
            # Standard case
            age = row[4].strip()
            phase = row[5].strip()
            drug = row[6].strip()
            control = row[7].strip()
            expected = clean_int(row[8])
            enrolled = clean_int(row[9])
            # screen_fail = row[10]
            remaining = clean_int(row[11])
            nurse_info = row[12].strip()
            
        elif len(row) == 12:
            # Missing Age column case
            # Shift indices from 4 onwards by -1 relative to standard
            # 4 -> Phase
            phase = row[4].strip()
            drug = row[5].strip()
            control = row[6].strip()
            expected = clean_int(row[7])
            enrolled = clean_int(row[8])
            # screen_fail = row[9]
            remaining = clean_int(row[10])
            nurse_info = row[11].strip()
            
        else:
            print(f"Skipping row with unexpected length {len(row)}: {row}")
            continue
        nurse_name = ""
        nurse_tel = ""
        
        if "/" in nurse_info:
            parts = nurse_info.split("/")
            nurse_name = parts[0].strip()
            nurse_tel = parts[1].strip()
        else:
            nurse_name = nurse_info
            
        # Mapping
        category = map_disease_category(disease_raw)
        
        # Determine Status
        status = 'Recruiting'
        # User requested all to be Recruiting
        # if remaining <= 0 and expected > 0:
        #      status = 'Active, not recruiting'
        
        trial_obj = {
            "trial_name": protocol_no, # Using Protocol No as name for now as it identifies the trial
            "clinical_trial_number": protocol_no,
            "disease_category": category,
            "inclusion_criteria_simple": condition, # Using Condition column
            "mechanism_of_action": mechanism,
            "inclusion_criteria_detailed": f"Age: {age}\nPhase: {phase}", # Combining extra info
            "study_design": phase,
            "study_drug": drug,
            "control_arm": control,
            "expected_enrollment": expected,
            "already_enrolled": enrolled,
            "study_nurse": nurse_name,
            "contact_tel": nurse_tel,
            "pi": "Unknown", # PI not in table, defaulting
            "status": status,
            "sponsor": "Unknown" # Not in table
        }
        
        processed_trials.append(trial_obj)

    # Save to JSON
    with open('migration/trials_data.json', 'w', encoding='utf-8') as f:
        json.dump(processed_trials, f, ensure_ascii=False, indent=2)
    
    print(f"\nSaved {len(processed_trials)} processed trials to migration/trials_data.json")

if __name__ == "__main__":
    main()
