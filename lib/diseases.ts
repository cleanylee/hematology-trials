import type { DiseaseCategory } from "@/lib/data";

export interface DiseaseLanding {
    /** URL slug under /patients/. Conventionally the medical abbreviation in caps. */
    slug: string;
    /** Primary Chinese name (used in H1) */
    nameZh: string;
    /** English name with common abbreviations */
    nameEn: string;
    /**
     * DB disease_category enum values that should surface on this landing.
     * Multiple landings can share a category (e.g. AML and MDS both read
     * from "AML-MDS" — so a Menin-inhibitor trial appears on both pages).
     */
    categories: DiseaseCategory[];
    /** Alternate Chinese names + keywords for SEO/meta */
    keywords: string[];
    /** Short blurb used on cards and meta description */
    tagline: string;
    /** Disease overview paragraph */
    intro: string;
    /** Current treatment landscape — drugs, where the field is heading */
    treatmentContext: string;
    /** When categories is empty, surface this message instead of "no trials". */
    noTrialsMessage?: string;
}

export const DISEASE_LANDINGS: DiseaseLanding[] = [
    {
        slug: "AML",
        nameZh: "急性骨髓性白血病",
        nameEn: "Acute Myeloid Leukemia",
        categories: ["AML-MDS"],
        keywords: ["急性骨髓性白血病", "AML", "血癌", "白血病", "FLT3", "Menin", "成大", "臨床試驗"],
        tagline: "急性骨髓性白血病 (AML) — 又稱「血癌」之一，是成人最常見的急性白血病。成大醫院血液科目前進行多項新藥試驗。",
        intro: "急性骨髓性白血病 (Acute Myeloid Leukemia, AML) 是骨髓中骨髓細胞 (myeloid cells) 異常增生的血液癌症，俗稱「血癌」之一。患者骨髓被異常芽細胞 (blast) 取代，無法產生足夠的正常紅血球、白血球和血小板，常見症狀包括嚴重疲倦、容易瘀青或流血、反覆發燒感染。診斷依賴骨髓穿刺切片，並進行細胞遺傳學與分子檢測，這些檢測結果（如 FLT3-ITD、NPM1、IDH1/2、TP53 等突變）決定治療策略與預後。",
        treatmentContext: "AML 治療在過去 10 年大幅進展。FLT3 抑制劑 (Midostaurin、Quizartinib、Gilteritinib) 改善 FLT3 突變病患的預後；IDH1/2 抑制劑針對 IDH 突變病患；Venetoclax (BCL-2 抑制劑) 合併低甲基化藥物已成為不適合密集化療病患的標準治療；Menin-KMT2A 抑制劑 (Bleximenib、Enzomenib) 為 KMT2A 重組或 NPM1 突變患者帶來新希望。成大醫院血液科目前進行多項 AML 第 1 至第 3 期試驗，含新診斷與復發/難治型病患。",
    },
    {
        slug: "MDS",
        nameZh: "骨髓增生不良症候群",
        nameEn: "Myelodysplastic Syndromes",
        categories: ["AML-MDS"],
        keywords: ["骨髓增生不良", "MDS", "Elritercept", "Luspatercept", "Lenalidomide", "成大", "臨床試驗"],
        tagline: "骨髓增生不良症候群 (MDS) — 骨髓造血功能異常的一群疾病，部分會進展為 AML。成大醫院血液科持續引進新型治療試驗。",
        intro: "骨髓增生不良症候群 (Myelodysplastic Syndromes, MDS) 是骨髓造血幹細胞克隆性異常的一群疾病，骨髓雖有細胞但無法產生足夠且正常的紅血球、白血球或血小板，因此常見貧血、感染或出血傾向。MDS 依據 IPSS-R 或 IPSS-M 風險評分系統分為極低度、低度、中度、高度與極高度風險，治療策略依風險分群、染色體變異 (如 del(5q))、輸血依賴程度與身體狀況量身設計。部分高度風險 MDS 會進展為 AML。",
        treatmentContext: "低度與中度風險 MDS 主要目標是改善輸血依賴、減少貧血症狀，常用藥物包括紅血球生成素 (EPO)、Lenalidomide (尤其針對 del(5q))、Luspatercept (TGF-β 配體陷阱) 等。新一代 TGF-β 配體陷阱 Elritercept (KER-050) 正在臨床試驗中。高度與極高度風險 MDS 治療目標則是延緩進展為 AML 與延長存活，使用低甲基化藥物 (Azacitidine、Decitabine)、合併 Venetoclax 或考慮造血幹細胞移植。成大醫院血液科目前進行多項 MDS 臨床試驗。",
    },
    {
        slug: "MM",
        nameZh: "多發性骨髓瘤",
        nameEn: "Multiple Myeloma",
        categories: ["MM"],
        keywords: ["多發性骨髓瘤", "MM", "骨髓瘤", "漿細胞癌", "BCMA", "CD38", "Daratumumab", "成大", "臨床試驗"],
        tagline: "多發性骨髓瘤 (MM) — 漿細胞惡性腫瘤。成大醫院血液科目前進行多項 BCMA、GPRC5D 等新一代標靶藥物試驗。",
        intro: "多發性骨髓瘤 (Multiple Myeloma, MM) 是漿細胞 (plasma cell，一種會產生抗體的免疫細胞) 異常增生的血液癌症，常見症狀包括骨痛、骨折、貧血、腎功能異常、高血鈣與反覆感染（俗稱「CRAB」symptoms）。診斷需綜合骨髓檢查、血液與尿液單株蛋白檢測、影像學 (PET-CT 或 MRI)。診斷時需評估是否適合接受自體幹細胞移植 (Autologous Stem Cell Transplant, ASCT)，這對治療策略影響很大。雖然目前難以完全治癒，但治療選項在過去 10 年大幅進展，多數病患可長期控制疾病、維持良好生活品質。",
        treatmentContext: "蛋白酶體抑制劑 (Bortezomib、Carfilzomib、Ixazomib)、免疫調節劑 (Lenalidomide、Pomalidomide)、抗 CD38 抗體 (Daratumumab、Isatuximab) 的三/四藥組合是目前標準治療。BCMA 標靶療法蓬勃發展：抗體藥物複合體 (如 Belantamab mafodotin)、雙特異性抗體 (如 Elranatamab、Teclistamab)、CAR-T 細胞療法 (Idecabtagene、Ciltacabtagene) 已大幅改變復發/難治型 MM 的治療。GPRC5D 標靶 (Talquetamab、JNJ-87562761) 也已加入新藥行列。成大醫院血液科目前進行多項臨床試驗，含新診斷不適合移植病患、復發/難治型病患、移植後維持治療試驗、抗 CD38 生物相似藥試驗等。",
    },
    {
        slug: "MPN",
        nameZh: "骨髓增生性腫瘤",
        nameEn: "Myeloproliferative Neoplasms",
        categories: ["MPN"],
        keywords: ["骨髓增生性腫瘤", "MPN", "骨髓纖維化", "MF", "原發性血小板增多症", "ET", "真性紅血球增多症", "PV", "JAK", "Ruxolitinib", "成大", "臨床試驗"],
        tagline: "骨髓增生性腫瘤 (MPN) — 涵蓋骨髓纖維化、原發性血小板增多症、真性紅血球增多症。成大醫院血液科進行多項 MPN 第 3 期試驗。",
        intro: "骨髓增生性腫瘤 (Myeloproliferative Neoplasms, MPN) 是一群骨髓造血細胞克隆性增生的疾病，主要包括原發性骨髓纖維化 (Myelofibrosis, MF)、原發性血小板增多症 (Essential Thrombocythemia, ET)、真性紅血球增多症 (Polycythemia Vera, PV)。多數病患帶有 JAK2 V617F、CALR 或 MPL 基因突變。臨床表現依疾病類型而異：ET 患者血小板過高，有血栓或出血風險；PV 患者紅血球過多，常見頭痛、視力模糊、皮膚瘙癢；MF 患者則有貧血、脾腫大、夜間盜汗、體重減輕等症狀。MF 部分病患會進展為 AML。",
        treatmentContext: "JAK 抑制劑 Ruxolitinib 為 MF 與 PV 的主要治療藥物，可改善脾腫大、症狀與整體存活。針對 ET，標準治療包括 Hydroxyurea、Anagrelide。新一代藥物正積極開發：LSD1 抑制劑 Bomedemstat (MK-3543) 在 ET 與 MF 臨床試驗中展現潛力；MDM2 抑制劑 Navtemadlin (KRT-232) 為 Ruxolitinib 反應不佳的 MF 患者提供新選項；BCL-XL 抑制劑 Navitoclax 合併 Ruxolitinib 也在臨床試驗中。成大醫院血液科目前進行多項 MPN 第 3 期試驗。",
    },
    {
        slug: "CML",
        nameZh: "慢性骨髓性白血病",
        nameEn: "Chronic Myeloid Leukemia",
        categories: ["CML"],
        keywords: ["慢性骨髓性白血病", "CML", "費城染色體", "BCR-ABL", "酪胺酸激酶抑制劑", "TKI", "Imatinib", "成大", "臨床試驗"],
        tagline: "慢性骨髓性白血病 (CML) — 由酪胺酸激酶抑制劑 (TKI) 改變預後的血液癌症。成大醫院血液科長期追蹤治療。",
        intro: "慢性骨髓性白血病 (Chronic Myeloid Leukemia, CML) 是骨髓細胞慢性增生的血液癌症，特徵是費城染色體 (Philadelphia chromosome, Ph) 與 BCR-ABL1 融合基因。多數病患診斷時為慢性期 (chronic phase)，疾病進展緩慢，少數會進展至加速期或急性期 (blast crisis)。常見症狀包括疲倦、脾腫大、體重減輕、左上腹不適，部分病患無明顯症狀僅在健檢時發現異常血球數。診斷依靠周邊血液與骨髓的細胞形態、染色體、BCR-ABL1 PCR 檢測。",
        treatmentContext: "酪胺酸激酶抑制劑 (Tyrosine Kinase Inhibitors, TKIs) — 包括第一代 Imatinib、第二代 Dasatinib / Nilotinib / Bosutinib、第三代 Ponatinib，以及 STAMP 抑制劑 Asciminib — 已將 CML 從致命疾病轉變為可長期控制的慢性病。多數慢性期病患可達深度分子緩解 (Deep Molecular Response)，符合條件者甚至可嘗試停藥 (Treatment-Free Remission)。成大醫院血液科長期追蹤治療 CML 病患，如您對相關治療有疑問，歡迎至門診諮詢。",
        noTrialsMessage: "目前成大醫院血液科尚無 CML 招募中試驗。如您對 TKI 治療、停藥嘗試或其他相關問題有疑問，歡迎至門診諮詢。",
    },
    {
        slug: "ALL",
        nameZh: "急性淋巴性白血病",
        nameEn: "Acute Lymphoblastic Leukemia",
        categories: ["ALL"],
        keywords: ["急性淋巴性白血病", "ALL", "血癌", "白血病", "Blinatumomab", "CAR-T", "成大", "臨床試驗"],
        tagline: "急性淋巴性白血病 (ALL) — 淋巴細胞惡性增生的血液癌症。成大醫院血液科進行雙特異性抗體等新藥試驗。",
        intro: "急性淋巴性白血病 (Acute Lymphoblastic Leukemia, ALL) 是淋巴細胞 (lymphoid cells) 異常增生的血液癌症，常見於兒童與青少年，但成人也會發生。依細胞起源分為 B 細胞型與 T 細胞型，並依費城染色體 (Philadelphia chromosome, Ph) 狀態進一步分類為 Ph+ 與 Ph− 兩大群。標準治療以多藥化學治療搭配中樞神經系統預防為主，療程通常較長（誘導、鞏固、維持），部分高風險病患需要造血幹細胞移植。成人 ALL（特別是 ≥55 歲長者）整體存活率仍有改善空間，復發或難治型 ALL 仍是治療挑戰。",
        treatmentContext: "雙特異性抗體 Blinatumomab (CD19 × CD3) 已成為 B 細胞 ALL 的重要治療選項，可特異性引導 T 細胞攻擊白血病細胞，副作用相對較輕，特別適合年長或體弱病患。其他新藥包括抗體藥物複合體 Inotuzumab ozogamicin (anti-CD22)、CAR-T 細胞療法 (Tisagenlecleucel) 等。新一代 T 細胞雙特異性抗體 (如 AZD0486) 也在臨床試驗中。成大醫院血液科目前進行的 ALL 試驗，含新診斷年長 Ph− B-ALL 的 Blinatumomab 合併低強度化療試驗，以及復發/難治型 B-ALL 的 CD19 × CD3 雙特異性抗體第 1/2 期試驗。",
    },
    {
        slug: "CLL",
        nameZh: "慢性淋巴細胞白血病",
        nameEn: "Chronic Lymphocytic Leukemia / Small Lymphocytic Lymphoma",
        categories: ["CLL"],
        keywords: ["慢性淋巴細胞白血病", "CLL", "SLL", "小淋巴球性淋巴瘤", "BTK", "Ibrutinib", "Acalabrutinib", "Venetoclax", "成大", "臨床試驗"],
        tagline: "慢性淋巴細胞白血病 (CLL) — 成人最常見白血病之一。成大醫院血液科進行 BTK 蛋白降解劑等多項試驗。",
        intro: "慢性淋巴細胞白血病 (Chronic Lymphocytic Leukemia, CLL) 是成人最常見的白血病之一，主要發生於中老年人 (中位診斷年齡約 70 歲)，疾病進程相對緩慢。小淋巴球性淋巴瘤 (Small Lymphocytic Lymphoma, SLL) 則是同一種疾病以淋巴結為主要表現的形式。臨床表現可能包括淋巴結腫大、肝脾腫大、貧血、感染傾向，但相當多病患是在健檢時偶然發現淋巴球過高而診斷。並非所有 CLL 患者一診斷就需立刻治療，治療時機依 iwCLL 治療指引（疾病分期、症狀、進展速度）而定。",
        treatmentContext: "BTK 抑制劑改變了 CLL 治療：共價型 (Ibrutinib、Acalabrutinib、Zanubrutinib)、非共價型 (Pirtobrutinib、Nemtabrutinib) 均已上市或進入臨床試驗；BCL-2 抑制劑 Venetoclax 合併抗 CD20 抗體 (Obinutuzumab) 提供時間限定治療方案。對 BTK 抑制劑失效或無法耐受的病患，新一代 BTK 蛋白降解劑 (如 BGB-16673、NX-5948 Bexobrutideg) 利用蛋白降解機制清除 BTK，提供突破性選項。成大醫院血液科目前進行未曾治療的 CLL/SLL 與復發/難治型 CLL/SLL 的多項第 3 期試驗。",
    },
    {
        slug: "Lymphoma",
        nameZh: "淋巴瘤",
        nameEn: "Lymphoma",
        categories: ["Lymphoma"],
        keywords: ["淋巴瘤", "淋巴癌", "Lymphoma", "DLBCL", "瀰漫性大B細胞淋巴瘤", "濾泡性淋巴瘤", "FL", "PTCL", "周邊T細胞淋巴瘤", "Epcoritamab", "成大", "臨床試驗"],
        tagline: "淋巴瘤 (Lymphoma)，俗稱「淋巴癌」 — 涵蓋多種亞型。成大醫院血液科進行 CD20×CD3 雙特異性抗體等試驗。",
        intro: "淋巴瘤 (Lymphoma)，俗稱「淋巴癌」，是淋巴系統的惡性腫瘤，分為何杰金氏淋巴瘤 (Hodgkin Lymphoma) 與非何杰金氏淋巴瘤 (Non-Hodgkin Lymphoma) 兩大類。非何杰金氏淋巴瘤涵蓋瀰漫性大 B 細胞淋巴瘤 (DLBCL，最常見)、濾泡性淋巴瘤 (FL)、邊緣帶淋巴瘤、被套細胞淋巴瘤、伯基特淋巴瘤、周邊 T 細胞淋巴瘤 (PTCL)、大顆粒淋巴球白血病 (LGLL) 等多種亞型，每種亞型治療策略不同。常見症狀包括無痛性淋巴結腫大、發燒、夜間盜汗、體重減輕（合稱「B 症狀」）、疲倦感。",
        treatmentContext: "CD20 × CD3 雙特異性抗體已改變治療策略：Epcoritamab、Odronextamab、AZD0486 (Surovatamig) 等在新診斷與復發/難治型 B 細胞淋巴瘤展現高度療效，部分已在標準治療中佔有一席之地。BTK 抑制劑、CAR-T 細胞療法、抗體藥物複合體 (ADC) 與 EZH2 抑制劑 (Tazemetostat) 也持續推進。針對 T 細胞淋巴瘤，JAK1 抑制劑 (Golidocitinib) 等新藥正在臨床試驗中。成大醫院血液科目前進行多項淋巴瘤臨床試驗，涵蓋多種亞型與治療線數。",
    },
    {
        slug: "AA",
        nameZh: "再生不良性貧血",
        nameEn: "Aplastic Anemia",
        categories: ["AA"],
        keywords: ["再生不良性貧血", "AA", "Aplastic Anemia", "骨髓衰竭", "免疫抑制治療", "ATG", "Eltrombopag", "成大", "臨床試驗"],
        tagline: "再生不良性貧血 (AA) — 骨髓造血功能衰竭的罕見疾病。可透過免疫抑制治療或造血幹細胞移植治療。",
        intro: "再生不良性貧血 (Aplastic Anemia, AA) 是一種骨髓造血幹細胞數量大幅減少、無法產生足夠紅血球、白血球與血小板的疾病，導致全血球減少 (pancytopenia)。臨床上會出現嚴重貧血、容易感染、容易瘀青或流血。原因可分為先天性（如范可尼貧血 Fanconi anemia）與後天性，後天性又可細分為自體免疫攻擊造血幹細胞（最常見）、藥物或化學物質毒性、病毒感染後等。診斷需骨髓穿刺切片，並排除其他疾病（如 MDS、PNH 等）。依嚴重程度分為非嚴重、嚴重 (SAA) 與極嚴重 (VSAA)。",
        treatmentContext: "嚴重 AA 治療有兩大策略：一是異體造血幹細胞移植 (Allogeneic HSCT)，特別適合年輕、有 HLA 相符兄弟姊妹捐贈者的病患；二是免疫抑制治療 (Immunosuppressive Therapy, IST)，標準方案為 anti-thymocyte globulin (ATG) 合併 Cyclosporine，近年加入血小板生成素受體致效劑 Eltrombopag 後，反應率與整體存活均明顯改善。其他支持性治療包括輸血、抗感染藥物、生長因子 (如 G-CSF)。成大醫院血液科持續提供 AA 病患診斷、治療與長期追蹤。如您對治療方案有疑問，歡迎至門診諮詢。",
        noTrialsMessage: "目前成大醫院血液科尚無再生不良性貧血招募中試驗。AA 病患的治療仍以標準免疫抑制治療或造血幹細胞移植為主，如您對治療方案有疑問，歡迎至門診諮詢評估。",
    },
    {
        slug: "HSCT",
        nameZh: "造血幹細胞移植",
        nameEn: "Hematopoietic Stem Cell Transplantation",
        categories: ["GVHD", "HSCT"],
        keywords: ["造血幹細胞移植", "HSCT", "骨髓移植", "Allogeneic", "Autologous", "GVHD", "移植物對抗宿主病", "Ruxolitinib", "成大", "臨床試驗"],
        tagline: "造血幹細胞移植 (HSCT) — 多種血液疾病的根治性治療。成大醫院血液科提供完整移植與後續照護。",
        intro: "造血幹細胞移植 (Hematopoietic Stem Cell Transplantation, HSCT) 是利用健康的造血幹細胞重建受贈者骨髓功能的治療，是許多血液疾病的根治性選項。依幹細胞來源分為自體移植 (Autologous，使用病人自己的幹細胞) 與異體移植 (Allogeneic，使用捐贈者的幹細胞)；依幹細胞採集來源可分為骨髓、周邊血液、臍帶血。常見適應症包括急性白血病 (AML、ALL) 於高風險或復發後、嚴重 MDS、淋巴瘤、多發性骨髓瘤、嚴重再生不良性貧血等。移植前的清髓條件處置 (conditioning regimen) 可分為清髓性 (myeloablative) 與低強度 (reduced-intensity)，依年齡、疾病、共病量身選擇。",
        treatmentContext: "異體移植後最重要的併發症之一是移植物對抗宿主病 (Graft-versus-Host Disease, GVHD)：捐贈者的免疫細胞攻擊受贈者組織，可分為急性 (主要影響皮膚、腸胃道、肝臟) 與慢性 (可影響多個器官，常需長期治療)。一線治療為類固醇，對類固醇難治型 GVHD，新藥已大幅改善預後：JAK 抑制劑 Ruxolitinib 是急性與慢性 GVHD 二線標準治療；Belumosudil (ROCK2 抑制劑) 已上市治療慢性 GVHD；其他選項包括 Ibrutinib、Extracorporeal Photopheresis (ECP) 等。成大醫院血液科提供造血幹細胞移植服務及完整後續追蹤。",
    },
    {
        slug: "PNH",
        nameZh: "陣發性夜間血紅素尿症",
        nameEn: "Paroxysmal Nocturnal Hemoglobinuria",
        categories: ["PNH"],
        keywords: ["陣發性夜間血紅素尿症", "PNH", "溶血性貧血", "C5", "補體抑制劑", "Eculizumab", "Pozelimab", "成大", "臨床試驗"],
        tagline: "陣發性夜間血紅素尿症 (PNH) — 罕見的後天性溶血性疾病。成大醫院血液科進行新一代 C5 補體抑制劑組合試驗。",
        intro: "陣發性夜間血紅素尿症 (Paroxysmal Nocturnal Hemoglobinuria, PNH) 是一種罕見的後天性溶血性疾病。因造血幹細胞發生 PIG-A 基因突變，紅血球表面缺乏 GPI 連結蛋白 (如 CD55、CD59，這些蛋白原本可保護紅血球免受補體攻擊)，導致補體系統異常攻擊紅血球，造成血管內溶血。臨床表現包括血紅素尿（尤其晨尿呈深褐色或可樂色）、貧血、容易疲倦、靜脈血栓 (是 PNH 主要死因)、腹痛、吞嚥困難、勃起功能異常等。未治療的 PNH 病患有顯著血栓風險，預後較差。診斷依賴流式細胞儀檢測 GPI 缺損細胞群 (FLAER 檢測)。",
        treatmentContext: "C5 補體抑制劑徹底改變了 PNH 治療：Eculizumab（首個 C5 抑制劑）與 Ravulizumab（長效型 C5 抑制劑）可大幅減少溶血、輸血需求與血栓風險，已成為 PNH 標準治療。新一代組合療法（如 Pozelimab 合併 siRNA 藥物 Cemdisiran，雙重抑制 C5 表現與功能）正在臨床試驗中，可能進一步改善療效並提供更便利的給藥方式。成大醫院血液科目前進行 PNH 第 3 期試驗，針對未曾接受過補體抑制劑、或停藥已久的患者。",
    },
];

export function findLanding(slug: string): DiseaseLanding | undefined {
    return DISEASE_LANDINGS.find(d => d.slug === slug);
}

/** Build a lookup map: DB disease_category → DiseaseLanding[] (a category can map to many landings). */
export function landingsForCategory(category: DiseaseCategory): DiseaseLanding[] {
    return DISEASE_LANDINGS.filter(d => d.categories.includes(category));
}
