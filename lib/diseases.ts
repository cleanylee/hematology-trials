import type { DiseaseCategory } from "@/lib/data";

export interface DiseaseLanding {
    /** URL slug — used in /diseases/[slug] */
    slug: string;
    /** Primary Chinese name (used in H1) */
    nameZh: string;
    /** English name with common abbreviations */
    nameEn: string;
    /** DB disease_category enum values that map to this landing page */
    categories: DiseaseCategory[];
    /** Alternate Chinese names + keywords for SEO/meta */
    keywords: string[];
    /** 1-2 sentence intro shown on cards and at top of detail */
    tagline: string;
    /** Body paragraphs — first paragraph is the disease overview, the rest go below H2 sections */
    intro: string;
    treatmentContext: string;
}

export const DISEASE_LANDINGS: DiseaseLanding[] = [
    {
        slug: "aml-mds",
        nameZh: "急性骨髓性白血病 (AML) 與骨髓增生不良症候群 (MDS)",
        nameEn: "Acute Myeloid Leukemia / Myelodysplastic Syndromes",
        categories: ["AML-MDS"],
        keywords: ["急性骨髓性白血病", "AML", "血癌", "白血病", "骨髓增生不良", "MDS", "成大", "臨床試驗"],
        tagline: "急性骨髓性白血病（俗稱「血癌」之一）與骨髓增生不良症候群在成大血液科的招募中試驗，涵蓋 FLT3、Menin、BCL-2 等新一代標靶治療。",
        intro: "急性骨髓性白血病 (Acute Myeloid Leukemia, AML) 是骨髓中骨髓細胞異常增生的血液癌症，俗稱「血癌」之一。患者體內無法產生足夠正常的紅血球、白血球和血小板，常見症狀包括嚴重疲倦、容易瘀青或流血、發燒和反覆感染。骨髓增生不良症候群 (Myelodysplastic Syndromes, MDS) 則是骨髓造血功能異常的一群疾病，部分患者會演變為 AML。兩者均為血液腫瘤科核心治療領域，治療需依風險分群、基因突變特徵與身體狀況量身設計。",
        treatmentContext: "近年來標靶治療與抗體新藥蓬勃發展：FLT3 抑制劑（如 Quizartinib）大幅改善 FLT3 突變病患預後；Menin-KMT2A 抑制劑（如 Bleximenib、Enzomenib）為 KMT2A 重組或 NPM1 突變患者帶來新希望；BCL-2 抑制劑、IDH1/2 抑制劑也已加入治療陣容。針對 MDS，新型 TGF-β 配體陷阱（如 Elritercept）正在改變輸血依賴患者的治療選項。成大醫院血液科目前正在進行多項相關臨床試驗，涵蓋新診斷與復發/難治型病患。",
    },
    {
        slug: "all",
        nameZh: "急性淋巴性白血病 (ALL)",
        nameEn: "Acute Lymphoblastic Leukemia",
        categories: ["ALL"],
        keywords: ["急性淋巴性白血病", "ALL", "血癌", "白血病", "成大", "臨床試驗"],
        tagline: "急性淋巴性白血病在成大血液科的招募中試驗，含雙特異性抗體與 T 細胞療法。",
        intro: "急性淋巴性白血病 (Acute Lymphoblastic Leukemia, ALL) 是淋巴細胞異常增生的血液癌症，常見於兒童與年輕成人，但中老年人也會發生。依細胞起源分為 B 細胞型與 T 細胞型，並依費城染色體 (Philadelphia chromosome, Ph) 狀態進一步分類。標準治療以多藥化學治療為主，但成人病患（特別是 ≥55 歲）整體存活率仍有改善空間，復發或難治型 ALL 是治療的重要挑戰。",
        treatmentContext: "雙特異性抗體（如 Blinatumomab、AZD0486）已成為 B 細胞 ALL 的重要治療選項，可特異性引導 T 細胞攻擊白血病細胞；抗體藥物複合體與 CAR-T 細胞療法持續推進。成大醫院血液科目前進行的 ALL 試驗，含新診斷年長 Ph- B-ALL 的 Blinatumomab 合併低強度化療，以及復發/難治型 B-ALL 的 CD19 × CD3 雙特異性抗體第 1/2 期試驗。",
    },
    {
        slug: "cll",
        nameZh: "慢性淋巴細胞白血病 (CLL) 與小淋巴球性淋巴瘤 (SLL)",
        nameEn: "Chronic Lymphocytic Leukemia / Small Lymphocytic Lymphoma",
        categories: ["CLL"],
        keywords: ["慢性淋巴細胞白血病", "CLL", "SLL", "小淋巴球性淋巴瘤", "血癌", "白血病", "成大", "臨床試驗"],
        tagline: "慢性淋巴細胞白血病在成大血液科的招募中試驗，含新一代 BTK 抑制劑與蛋白降解劑。",
        intro: "慢性淋巴細胞白血病 (Chronic Lymphocytic Leukemia, CLL) 是成人最常見的白血病之一，主要發生於中老年人，疾病進程相對緩慢。小淋巴球性淋巴瘤 (Small Lymphocytic Lymphoma, SLL) 則是同一種疾病在淋巴結為主要表現的形式。治療時機依 iwCLL 治療指引而定，並非所有患者一診斷就需立刻治療。",
        treatmentContext: "BTK 抑制劑（共價型 Ibrutinib、Acalabrutinib，非共價型 Nemtabrutinib）和 BCL-2 抑制劑（Venetoclax）已重新定義 CLL 治療。對 BTK 抑制劑失效或無法耐受的病患，新一代 BTK 蛋白降解劑（如 BGB-16673、NX-5948 Bexobrutideg）提供突破性選項。成大醫院血液科目前進行未曾治療的 CLL/SLL 與復發/難治型 CLL/SLL 的多項第 3 期試驗。",
    },
    {
        slug: "myeloma",
        nameZh: "多發性骨髓瘤 (MM)",
        nameEn: "Multiple Myeloma",
        categories: ["MM"],
        keywords: ["多發性骨髓瘤", "MM", "骨髓瘤", "漿細胞癌", "成大", "臨床試驗"],
        tagline: "多發性骨髓瘤在成大血液科的招募中試驗，涵蓋 BCMA、GPRC5D、CD38 等新一代標靶。",
        intro: "多發性骨髓瘤 (Multiple Myeloma, MM) 是漿細胞 (plasma cell) 異常增生的血液癌症，常見症狀包括骨痛、骨折、貧血、腎功能異常、高血鈣與反覆感染。診斷時可依是否適合接受自體幹細胞移植 (Autologous Stem Cell Transplant, ASCT) 分為兩大群，治療策略也不同。雖然目前難以治癒，但治療選項在過去 10 年大幅進展，多數病患可長期控制疾病。",
        treatmentContext: "蛋白酶體抑制劑、免疫調節劑、抗 CD38 抗體（如 Daratumumab）的三/四藥組合已是標準治療。BCMA 標靶療法蓬勃發展，含抗體藥物複合體（如 Belantamab mafodotin）、雙特異性抗體（如 Elranatamab）、CAR-T 細胞療法；GPRC5D（如 Talquetamab、JNJ-87562761）也已加入新藥行列。成大醫院血液科目前進行多項臨床試驗，含新診斷不適合移植病患、復發/難治型病患、生物相似藥試驗，以及移植後維持治療試驗。",
    },
    {
        slug: "lymphoma",
        nameZh: "淋巴瘤 (Lymphoma)",
        nameEn: "Lymphoma",
        categories: ["Lymphoma"],
        keywords: ["淋巴瘤", "淋巴癌", "Lymphoma", "DLBCL", "瀰漫性大B細胞淋巴瘤", "濾泡性淋巴瘤", "FL", "PTCL", "成大", "臨床試驗"],
        tagline: "淋巴瘤（俗稱「淋巴癌」）在成大血液科的招募中試驗，涵蓋 B 細胞、T 細胞淋巴瘤各亞型。",
        intro: "淋巴瘤 (Lymphoma)，俗稱「淋巴癌」，是淋巴系統的惡性腫瘤，分為何杰金氏淋巴瘤 (Hodgkin Lymphoma) 與非何杰金氏淋巴瘤 (Non-Hodgkin Lymphoma) 兩大類。非何杰金氏淋巴瘤涵蓋瀰漫性大 B 細胞淋巴瘤 (DLBCL)、濾泡性淋巴瘤 (FL)、邊緣帶淋巴瘤、被套細胞淋巴瘤、周邊 T 細胞淋巴瘤 (PTCL)、大顆粒淋巴球白血病 (LGLL) 等多種亞型，每種亞型治療策略不同。常見症狀包括無痛性淋巴結腫大、發燒、夜間盜汗、體重減輕。",
        treatmentContext: "CD20 × CD3 雙特異性抗體已改變治療策略：Epcoritamab、Odronextamab、AZD0486 (Surovatamig) 等藥物在新診斷與復發/難治型 B 細胞淋巴瘤展現高度療效。BTK 抑制劑、CAR-T 細胞療法、抗體藥物複合體 (ADC) 與 EZH2 抑制劑 (Tazemetostat) 也持續推進。針對 T 細胞淋巴瘤，JAK1 抑制劑 (Golidocitinib) 等新藥正在臨床試驗中。成大醫院血液科目前進行多項淋巴瘤臨床試驗，涵蓋多種亞型與治療線數。",
    },
    {
        slug: "mpn",
        nameZh: "骨髓增生性腫瘤 (MPN)",
        nameEn: "Myeloproliferative Neoplasms",
        categories: ["MPN"],
        keywords: ["骨髓增生性腫瘤", "MPN", "骨髓纖維化", "MF", "原發性血小板增多症", "ET", "真性紅血球增多症", "PV", "成大", "臨床試驗"],
        tagline: "骨髓增生性腫瘤（含骨髓纖維化、原發性血小板增多症、真性紅血球增多症）在成大血液科的招募中試驗。",
        intro: "骨髓增生性腫瘤 (Myeloproliferative Neoplasms, MPN) 是一群骨髓造血細胞克隆性增生的疾病，主要包括原發性骨髓纖維化 (Myelofibrosis, MF)、原發性血小板增多症 (Essential Thrombocythemia, ET)、真性紅血球增多症 (Polycythemia Vera, PV)。臨床表現依疾病類型而異，可能有貧血、脾腫大、血栓、出血、瘙癢、夜間盜汗、體重減輕等症狀。多數病患帶有 JAK2、CALR 或 MPL 基因突變。",
        treatmentContext: "JAK 抑制劑 (Ruxolitinib) 為主要治療藥物之一，可改善脾腫大、症狀與整體存活。新一代藥物如 LSD1 抑制劑 (Bomedemstat) 正在 ET 與 MF 臨床試驗中；MDM2 抑制劑 (Navtemadlin) 在 Ruxolitinib 反應不佳的 MF 患者中提供新選項；BCL-XL 抑制劑 (Navitoclax) 也已加入試驗陣容。成大醫院血液科目前進行多項 MPN 第 3 期試驗。",
    },
    {
        slug: "pnh",
        nameZh: "陣發性夜間血紅素尿症 (PNH)",
        nameEn: "Paroxysmal Nocturnal Hemoglobinuria",
        categories: ["PNH"],
        keywords: ["陣發性夜間血紅素尿症", "PNH", "溶血性貧血", "成大", "臨床試驗"],
        tagline: "陣發性夜間血紅素尿症 (PNH) 在成大血液科的招募中試驗，含新一代 C5 補體抑制劑組合療法。",
        intro: "陣發性夜間血紅素尿症 (Paroxysmal Nocturnal Hemoglobinuria, PNH) 是一種罕見的後天性溶血性疾病。因造血幹細胞發生 PIG-A 基因突變，紅血球表面缺乏抗補體蛋白，導致補體系統異常攻擊紅血球。臨床表現包括血紅素尿（尤其晨尿）、貧血、容易疲倦、靜脈血栓、腹痛、吞嚥困難等。未治療的 PNH 病患有顯著血栓風險。",
        treatmentContext: "C5 補體抑制劑（Eculizumab、Ravulizumab）已大幅改善 PNH 治療，可顯著減少溶血、輸血需求與血栓風險。新一代組合療法（如 Pozelimab 合併 Cemdisiran）正在臨床試驗中。成大醫院血液科目前進行 PNH 相關第 3 期試驗，針對未曾接受過補體抑制劑、或停藥已久的患者。",
    },
    {
        slug: "cml",
        nameZh: "慢性骨髓性白血病 (CML)",
        nameEn: "Chronic Myeloid Leukemia",
        categories: ["CML"],
        keywords: ["慢性骨髓性白血病", "CML", "血癌", "白血病", "成大", "臨床試驗"],
        tagline: "慢性骨髓性白血病的治療資訊與成大血液科服務。",
        intro: "慢性骨髓性白血病 (Chronic Myeloid Leukemia, CML) 是骨髓細胞慢性增生的血液癌症，特徵是費城染色體 (Philadelphia chromosome) 與 BCR-ABL1 融合基因。多數病患為慢性期 (chronic phase)，疾病進程緩慢，少數會進展至加速期或急性期。常見症狀包括疲倦、脾腫大、體重減輕，部分病患無明顯症狀僅在健檢時發現異常血球數。",
        treatmentContext: "酪胺酸激酶抑制劑 (Tyrosine Kinase Inhibitors, TKIs) — 包括 Imatinib、Dasatinib、Nilotinib、Bosutinib、Ponatinib、Asciminib — 已將 CML 從致命疾病轉變為可長期控制的慢性病，多數病患可達深度分子緩解，部分甚至可嘗試停藥。成大醫院血液科持續追蹤與治療 CML 病患。如您對相關治療有疑問，歡迎至門診諮詢。",
    },
    {
        slug: "gvhd",
        nameZh: "移植物對抗宿主病 (GVHD)",
        nameEn: "Graft-versus-Host Disease",
        categories: ["GVHD"],
        keywords: ["移植物對抗宿主病", "GVHD", "造血幹細胞移植", "成大", "臨床試驗"],
        tagline: "造血幹細胞移植後 GVHD 的治療資訊與成大血液科服務。",
        intro: "移植物對抗宿主病 (Graft-versus-Host Disease, GVHD) 是異體造血幹細胞移植 (Allogeneic HSCT) 後常見的併發症，由捐贈者免疫細胞攻擊受贈者組織所致，可分為急性 GVHD（皮膚、腸胃道、肝臟）與慢性 GVHD（多器官受影響）。預防與治療 GVHD 是移植成功的關鍵之一。",
        treatmentContext: "類固醇仍為一線標準治療，類固醇難治型 (steroid-refractory) GVHD 的二線選擇近年大幅進展：Ruxolitinib (JAK 抑制劑) 已成為急性與慢性 GVHD 的重要選項，Belumosudil、Ibrutinib 等也已加入慢性 GVHD 治療。成大醫院血液科持續提供造血幹細胞移植後追蹤與 GVHD 治療。如您對相關治療有疑問，歡迎至門診諮詢。",
    },
];

export function findLanding(slug: string): DiseaseLanding | undefined {
    return DISEASE_LANDINGS.find(d => d.slug === slug);
}
