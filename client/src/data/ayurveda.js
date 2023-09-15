const data = [
    {
        "Name": "Arthritis",
        "Symptoms": [
            "Joint pain",
            "Stiffness",
            "Swelling",
            "Reduced range of motion"
        ],
        "AyurvedicRemedy": [
            "Turmeric"
        ],
        "PharmacologicalProperties": [
            "Anti-inflammatory",
            "Antioxidant",
            "Analgesic"
        ],
        "IntegrationWithModernMedicine": "Turmeric can be used as a supplement alongside anti-arthritis medications for enhanced results. Nonsteroidal anti-inflammatory drugs (NSAIDs) can also be used for pain relief.",
        "ImagePath":"../../../public/item1.jpg"
    },
    {
        "Name": "Asthma",
        "Symptoms": [
            "Shortness of breath",
            "Wheezing",
            "Coughing",
            "Chest tightness"
        ],
        "AyurvedicRemedy": [
            "Licorice root tea",
            "Turmeric with honey",
            "Vasaka (Adhatoda vasica) syrup"
        ],
        "PharmacologicalProperties": [
            "Licorice has anti-inflammatory and bronchodilator effects",
            "Turmeric is anti-inflammatory and supports respiratory health",
            "Vasaka helps in respiratory conditions and acts as an expectorant"
        ],
        "IntegrationWithModernMedicine": "Bronchodilators, corticosteroids, and other prescribed asthma medications can be used alongside Ayurvedic remedies for asthma management."
        ,
        "ImagePath":"../images/item1"
    },
    {
        "Name": "Hypertension",
        "Symptoms": [
            "High blood pressure readings",
            "Headaches",
            "Chest pain",
            "Shortness of breath"
        ],
        "AyurvedicRemedy": [
            "Garlic paste with warm water",
            "Hibiscus tea",
            "Amla (Indian gooseberry) juice"
        ],
        "PharmacologicalProperties": [
            "Garlic has blood pressure-lowering effects",
            "Hibiscus helps regulate blood pressure",
            "Amla is rich in vitamin C and supports heart health"
        ],
        "IntegrationWithModernMedicine": "Antihypertensive medications like ACE inhibitors and diuretics can be used alongside Ayurvedic remedies for blood pressure management."
        ,
        "ImagePath":"../images/item1"
    },
    {
        "Name": "Diabetes",
        "Symptoms": [
            "Increased thirst",
            "Frequent urination",
            "Fatigue",
            "Blurred vision"
        ],
        "AyurvedicRemedy": [
            "Bitter gourd (Momordica charantia) juice",
            "Fenugreek seeds soaked overnight",
            "Cinnamon powder with warm water"
        ],
        "PharmacologicalProperties": [
            "Bitter gourd helps regulate blood sugar levels",
            "Fenugreek seeds improve insulin sensitivity",
            "Cinnamon may enhance insulin function"
        ],
        "IntegrationWithModernMedicine": "Insulin or oral antidiabetic medications prescribed by a healthcare provider should be used alongside Ayurvedic remedies for diabetes management."
        ,
        "ImagePath":"../images/item1"
    },
    {
        "Name": "Digestive Disorders",
        "Symptoms": [
            "Abdominal pain",
            "Bloating",
            "Nausea",
            "Indigestion",
            "Diarrhea or constipation"
        ],
        "AyurvedicRemedy": [
            "Ginger tea with a pinch of rock salt",
            "Triphala churna (a mixture of three fruits) with warm water",
            "Ajwain (carom seeds) with warm water"
        ],
        "PharmacologicalProperties": [
            "Ginger aids digestion and has anti-inflammatory properties",
            "Triphala cleanses the digestive tract and improves digestion",
            "Ajwain helps relieve gas and indigestion"
        ],
        "IntegrationWithModernMedicine": "Proton pump inhibitors (PPIs) and antacids can be used alongside Ayurvedic remedies for digestive relief."
        ,
        "ImagePath":"../images/item1"
    },
    {
        "Name": "Migraines",
        "Symptoms": [
            "Severe headache",
            "Nausea",
            "Vomiting",
            "Sensitivity to light and sound"
        ],
        "AyurvedicRemedy": [
            "Peppermint oil applied on temples",
            "Coriander seeds tea with a pinch of cardamom",
            "Shirodhara (a form of Ayurvedic therapy)"
        ],
        "PharmacologicalProperties": [
            "Peppermint oil has analgesic and soothing properties",
            "Coriander seeds have anti-inflammatory effects",
            "Shirodhara relaxes the nervous system and relieves headaches"
        ],
        "IntegrationWithModernMedicine": "Triptans and nonsteroidal anti-inflammatory drugs (NSAIDs) can be used alongside Ayurvedic remedies for migraine relief."
        ,
        "ImagePath":"../images/item1"
    },
    {
        "Name": "Depression",
        "Symptoms": [
            "Persistent sadness",
            "Loss of interest or pleasure",
            "Changes in appetite or weight",
            "Difficulty sleeping or oversleeping"
        ],
        "AyurvedicRemedy": [
            "St. John's Wort (Hypericum perforatum) supplements",
            "Brahmi (Bacopa monnieri) tea",
            "Meditation and yoga"
        ],
        "PharmacologicalProperties": [
            "St. John's Wort is a natural antidepressant",
            "Brahmi supports the nervous system and reduces depressive symptoms",
            "Meditation and yoga promote mental well-being and reduce stress"
        ],
        "IntegrationWithModernMedicine": "Selective serotonin reuptake inhibitors (SSRIs) or other antidepressant medications prescribed by a healthcare provider should be used alongside Ayurvedic remedies for depression management."
        ,
        "ImagePath":"../images/item1"
    },
    {
        "Name": "Anxiety",
        "Symptoms": [
            "Excessive worrying",
            "Restlessness",
            "Irritability",
            "Muscle tension",
            "Difficulty concentrating"
        ],
        "AyurvedicRemedy": [
            "Ashwagandha (Withania somnifera) capsules",
            "Brahmi (Bacopa monnieri) tea",
            "Meditation and deep breathing exercises"
        ],
        "PharmacologicalProperties": [
            "Ashwagandha is an adaptogenic herb that helps with stress",
            "Brahmi supports the nervous system and reduces anxiety",
            "Meditation and deep breathing promote relaxation"
        ],
        "IntegrationWithModernMedicine": "Selective serotonin reuptake inhibitors (SSRIs) and anxiolytic medications can be used alongside Ayurvedic remedies for anxiety management."
        ,
        "ImagePath":"../images/item1"
    },
    {
        "Name": "Insomnia",
        "Symptoms": [
            "Difficulty falling asleep",
            "Waking up during the night",
            "Feeling tired upon waking"
        ],
        "AyurvedicRemedy": [
            "Warm milk with a pinch of nutmeg",
            "Brahmi (Bacopa monnieri) tea",
            "Massage with sesame oil before sleep"
        ],
        "PharmacologicalProperties": [
            "Nutmeg has sedative properties",
            "Brahmi is known to calm the mind and improve sleep",
            "Sesame oil massage relaxes the nervous system"
        ],
        "IntegrationWithModernMedicine": "Prescription sleep aids and sedatives can be used alongside Ayurvedic remedies for better sleep quality."
    },
    {
        "Name": "Obesity",
        "Symptoms": [
            "Excessive body weight",
            "Increased fat accumulation",
            "Lack of energy"
        ],
        "AyurvedicRemedy": [
            "Triphala churna (a mixture of three fruits) with warm water",
            "Guggul (Commiphora wightii) supplements",
            "Honey and lemon in warm water"
        ],
        "PharmacologicalProperties": [
            "Triphala aids digestion and supports weight management",
            "Guggul helps in fat metabolism and weight reduction",
            "Honey boosts metabolism and aids digestion"
        ],
        "IntegrationWithModernMedicine": "Prescription weight loss medications or bariatric surgery, if recommended by a healthcare provider, can be used alongside Ayurvedic remedies for obesity management."
    },
    {
        "Name": "Chronic Fatigue Syndrome",
        "Symptoms": [
            "Persistent fatigue",
            "Muscle pain",
            "Headaches",
            "Difficulty concentrating"
        ],
        "AyurvedicRemedy": [
            "Ashwagandha (Withania somnifera) supplements",
            "Shatavari (Asparagus racemosus) supplements",
            "Brahmi (Bacopa monnieri) tea"
        ],
        "PharmacologicalProperties": [
            "Ashwagandha helps in reducing fatigue and boosting energy levels",
            "Shatavari supports adrenal health and reduces stress",
            "Brahmi enhances cognitive function and reduces mental fatigue"
        ],
        "IntegrationWithModernMedicine": "Prescribed medications for symptom management can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Allergies",
        "Symptoms": [
            "Sneezing",
            "Runny or stuffy nose",
            "Itchy or watery eyes",
            "Skin rashes"
        ],
        "AyurvedicRemedy": [
            "Neti pot with saline solution",
            "Local honey consumption",
            "Turmeric and black pepper paste"
        ],
        "PharmacologicalProperties": [
            "Neti pot helps in clearing nasal passages and reducing congestion",
            "Local honey consumption may reduce allergy symptoms",
            "Turmeric and black pepper have anti-inflammatory properties"
        ],
        "IntegrationWithModernMedicine": "Antihistamines and corticosteroids can be used alongside Ayurvedic remedies for allergy relief. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Eczema",
        "Symptoms": [
            "Red, itchy, and inflamed skin",
            "Dry or scaly patches",
            "Blisters",
            "Swelling"
        ],
        "AyurvedicRemedy": [
            "Neem oil or paste",
            "Coconut oil with turmeric",
            "Triphala paste"
        ],
        "PharmacologicalProperties": [
            "Neem has antibacterial and anti-inflammatory properties",
            "Coconut oil moisturizes and has anti-inflammatory effects",
            "Triphala supports detoxification and skin health"
        ],
        "IntegrationWithModernMedicine": "Topical corticosteroids and emollients may be prescribed alongside Ayurvedic remedies for eczema treatment. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Psoriasis",
        "Symptoms": [
            "Red patches of skin covered with silvery scales",
            "Itching or burning sensations",
            "Thickened or pitted nails"
        ],
        "AyurvedicRemedy": [
            "Turmeric paste with sesame oil",
            "Aloe vera gel",
            "Guggul (Commiphora wightii) supplements"
        ],
        "PharmacologicalProperties": [
            "Turmeric is anti-inflammatory and supports skin health",
            "Aloe vera has soothing and anti-inflammatory effects",
            "Guggul helps in reducing inflammation and supporting skin health"
        ],
        "IntegrationWithModernMedicine": "Topical corticosteroids, systemic medications, or biologic therapies may be prescribed alongside Ayurvedic remedies for psoriasis treatment. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Acne",
        "Symptoms": [
            "Pimples",
            "Blackheads",
            "Whiteheads",
            "Inflammation",
            "Scarring"
        ],
        "AyurvedicRemedy": [
            "Neem (Azadirachta indica) paste",
            "Turmeric paste with rose water",
            "Triphala churna with honey"
        ],
        "PharmacologicalProperties": [
            "Neem has antibacterial and anti-inflammatory properties",
            "Turmeric is anti-inflammatory and antiseptic",
            "Triphala detoxifies and promotes healthy skin"
        ],
        "IntegrationWithModernMedicine": "Topical antibiotics and retinoids can be used alongside Ayurvedic remedies for acne treatment. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Constipation",
        "Symptoms": [
            "Infrequent bowel movements",
            "Difficulty passing stools",
            "Hard or lumpy stools",
            "Abdominal discomfort"
        ],
        "AyurvedicRemedy": [
            "Triphala churna with warm water",
            "Aloe vera juice",
            "Flaxseeds soaked in water"
        ],
        "PharmacologicalProperties": [
            "Triphala supports digestion and regular bowel movements",
            "Aloe vera has laxative properties and supports gut health",
            "Flaxseeds are high in fiber and promote bowel regularity"
        ],
        "IntegrationWithModernMedicine": "Over-the-counter laxatives or prescribed medications may be used alongside Ayurvedic remedies for constipation relief. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Irritable Bowel Syndrome (IBS)",
        "Symptoms": [
            "Abdominal pain or cramping",
            "Bloating",
            "Diarrhea or constipation",
            "Mucus in stools"
        ],
        "AyurvedicRemedy": [
            "Peppermint oil capsules",
            "Fennel seed tea",
            "Ginger tea"
        ],
        "PharmacologicalProperties": [
            "Peppermint oil relaxes the muscles of the GI tract",
            "Fennel seeds have carminative and digestive properties",
            "Ginger aids digestion and reduces inflammation"
        ],
        "IntegrationWithModernMedicine": "Antispasmodics, fiber supplements, or prescribed medications may be used alongside Ayurvedic remedies for IBS management. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Ulcers",
        "Symptoms": [
            "Abdominal pain",
            "Nausea",
            "Loss of appetite",
            "Bloating"
        ],
        "AyurvedicRemedy": [
            "Licorice root tea",
            "Aloe vera juice",
            "Coconut water"
        ],
        "PharmacologicalProperties": [
            "Licorice has anti-inflammatory and mucosal protective properties",
            "Aloe vera supports gastric health and reduces inflammation",
            "Coconut water helps in rehydration and soothes the stomach lining"
        ],
        "IntegrationWithModernMedicine": "Proton pump inhibitors (PPIs) and antibiotics may be prescribed alongside Ayurvedic remedies for ulcer treatment. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Gastritis",
        "Symptoms": [
            "Stomach pain",
            "Nausea",
            "Vomiting",
            "Loss of appetite"
        ],
        "AyurvedicRemedy": [
            "Coconut water",
            "Fennel seed tea",
            "Aloe vera juice"
        ],
        "PharmacologicalProperties": [
            "Coconut water is soothing and helps rehydrate",
            "Fennel seeds are digestive and anti-inflammatory",
            "Aloe vera supports gastric health and reduces inflammation"
        ],
        "IntegrationWithModernMedicine": "Proton pump inhibitors (PPIs) and antacids can be used alongside Ayurvedic remedies for gastritis. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Hemorrhoids",
        "Symptoms": [
            "Pain or discomfort during bowel movements",
            "Swelling around the anus",
            "Bleeding during bowel movements",
            "Itching or irritation"
        ],
        "AyurvedicRemedy": [
            "Triphala churna with warm water",
            "Aloe vera gel",
            "Sitz bath with Epsom salts"
        ],
        "PharmacologicalProperties": [
            "Triphala supports digestion and relieves constipation",
            "Aloe vera has anti-inflammatory and soothing effects",
            "Epsom salts reduce swelling and discomfort"
        ],
        "IntegrationWithModernMedicine": "Topical treatments, stool softeners, or prescribed medications may be used alongside Ayurvedic remedies for hemorrhoid management. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Liver Disorders",
        "Symptoms": [
            "Jaundice",
            "Fatigue",
            "Abdominal pain",
            "Nausea"
        ],
        "AyurvedicRemedy": [
            "Kutki (Picrorhiza kurroa) supplements",
            "Bhringraj (Eclipta alba) tea",
            "Amla (Indian gooseberry) juice"
        ],
        "PharmacologicalProperties": [
            "Kutki supports liver function and detoxification",
            "Bhringraj aids in liver health and digestion",
            "Amla is rich in antioxidants and supports liver function"
        ],
        "IntegrationWithModernMedicine": "Prescribed medications for liver disorders can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Kidney Stones",
        "Symptoms": [
            "Severe pain in the side and back",
            "Blood in urine",
            "Frequent urination",
            "Nausea and vomiting"
        ],
        "AyurvedicRemedy": [
            "Pashanabheda (Bergenia ligulata) powder",
            "Dandelion root tea",
            "Trikatu churna (a mixture of three spices)"
        ],
        "PharmacologicalProperties": [
            "Pashanabheda helps in dissolving and preventing kidney stones",
            "Dandelion root supports kidney health and diuretic function",
            "Trikatu churna aids digestion and kidney function"
        ],
        "IntegrationWithModernMedicine": "Prescribed medications and medical procedures like lithotripsy can be used alongside Ayurvedic remedies for kidney stone management. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Urinary Tract Infections (UTIs)",
        "Symptoms": [
            "Frequent urination",
            "Burning sensation while urinating",
            "Cloudy or bloody urine",
            "Pelvic pain"
        ],
        "AyurvedicRemedy": [
            "Cranberry juice",
            "Coriander seeds tea",
            "Triphala churna with honey"
        ],
        "PharmacologicalProperties": [
            "Cranberry prevents bacteria from adhering to the urinary tract",
            "Coriander seeds have antibacterial and diuretic properties",
            "Triphala detoxifies and supports urinary health"
        ],
        "IntegrationWithModernMedicine": "Antibiotics prescribed by a healthcare provider should be used alongside Ayurvedic remedies for UTI treatment. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Infertility",
        "Symptoms": [
            "Difficulty conceiving",
            "Irregular menstrual cycles",
            "Hormonal imbalances"
        ],
        "AyurvedicRemedy": [
            "Shatavari (Asparagus racemosus) supplements",
            "Ashwagandha (Withania somnifera) capsules",
            "Kapikacchu (Mucuna pruriens) powder"
        ],
        "PharmacologicalProperties": [
            "Shatavari supports reproductive health and hormonal balance",
            "Ashwagandha reduces stress and enhances fertility",
            "Kapikacchu improves sperm quality and motility"
        ],
        "IntegrationWithModernMedicine": "Fertility treatments, such as assisted reproductive techniques, may be used alongside Ayurvedic remedies for infertility. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Menstrual Disorders",
        "Symptoms": [
            "Irregular periods",
            "Heavy or painful periods",
            "Premenstrual symptoms",
            "Mood swings"
        ],
        "AyurvedicRemedy": [
            "Aloe vera juice",
            "Ginger tea",
            "Triphala churna with honey"
        ],
        "PharmacologicalProperties": [
            "Aloe vera supports menstrual regularity and reduces pain",
            "Ginger has anti-inflammatory and analgesic properties",
            "Triphala helps balance hormones and reduces PMS symptoms"
        ],
        "IntegrationWithModernMedicine": "Hormonal medications and pain relievers can be used alongside Ayurvedic remedies for menstrual disorders. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Polycystic Ovary Syndrome (PCOS)",
        "Symptoms": [
            "Irregular periods",
            "Excess hair growth",
            "Acne",
            "Weight gain"
        ],
        "AyurvedicRemedy": [
            "Shatavari (Asparagus racemosus) supplements",
            "Triphala churna with warm water",
            "Cinnamon powder with honey"
        ],
        "PharmacologicalProperties": [
            "Shatavari supports hormonal balance and ovarian health",
            "Triphala aids in detoxification and hormonal regulation",
            "Cinnamon may help improve insulin sensitivity"
        ],
        "IntegrationWithModernMedicine": "Hormonal medications and insulin-sensitizing agents may be used alongside Ayurvedic remedies for PCOS. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Premenstrual Syndrome (PMS)",
        "Symptoms": [
            "Mood swings",
            "Breast tenderness",
            "Bloating",
            "Headaches"
        ],
        "AyurvedicRemedy": [
            "Chamomile tea",
            "Ginger tea",
            "Yoga and meditation"
        ],
        "PharmacologicalProperties": [
            "Chamomile has calming and anti-inflammatory effects",
            "Ginger reduces nausea and bloating",
            "Yoga and meditation promote relaxation and mental well-being"
        ],
        "IntegrationWithModernMedicine": "Over-the-counter pain relievers and prescribed medications may be used alongside Ayurvedic remedies for PMS relief. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Menopausal Symptoms",
        "Symptoms": [
            "Hot flashes",
            "Night sweats",
            "Mood swings",
            "Irregular periods"
        ],
        "AyurvedicRemedy": [
            "Shatavari (Asparagus racemosus) supplements",
            "Sage tea",
            "Yoga and meditation"
        ],
        "PharmacologicalProperties": [
            "Shatavari supports hormonal balance and relieves menopausal symptoms",
            "Sage contains compounds that help regulate hormonal fluctuations",
            "Yoga and meditation promote relaxation and mental well-being"
        ],
        "IntegrationWithModernMedicine": "Hormone replacement therapy (HRT) or other medications prescribed by a healthcare provider should be used alongside Ayurvedic remedies for menopausal symptom management. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Erectile Dysfunction",
        "Symptoms": [
            "Difficulty achieving or maintaining an erection",
            "Reduced sexual desire",
            "Premature ejaculation"
        ],
        "AyurvedicRemedy": [
            "Ashwagandha (Withania somnifera) supplements",
            "Safed Musli (Chlorophytum borivilianum) supplements",
            "Shilajit (mineral pitch) capsules"
        ],
        "PharmacologicalProperties": [
            "Ashwagandha improves sexual function and libido",
            "Safed Musli supports reproductive health and stamina",
            "Shilajit enhances vitality and sexual performance"
        ],
        "IntegrationWithModernMedicine": "Prescribed medications like PDE5 inhibitors may be used alongside Ayurvedic remedies for erectile dysfunction. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Premature Ejaculation",
        "Symptoms": [
            "Ejaculation that occurs too quickly",
            "Lack of control over ejaculation"
        ],
        "AyurvedicRemedy": [
            "Ashwagandha (Withania somnifera) supplements",
            "Safed Musli (Chlorophytum borivilianum) supplements",
            "Brahmi (Bacopa monnieri) capsules"
        ],
        "PharmacologicalProperties": [
            "Ashwagandha helps in reducing performance anxiety and supports sexual health",
            "Safed Musli improves stamina and endurance",
            "Brahmi reduces anxiety and promotes mental well-being"
        ],
        "IntegrationWithModernMedicine": "Topical anesthetics or prescribed medications may be used alongside Ayurvedic remedies for premature ejaculation. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Anemia",
        "Symptoms": [
            "Fatigue",
            "Weakness",
            "Pale or sallow complexion",
            "Shortness of breath"
        ],
        "AyurvedicRemedy": [
            "Triphala churna with honey",
            "Nettle leaf (Urtica dioica) tea",
            "Sesame seeds with jaggery"
        ],
        "PharmacologicalProperties": [
            "Triphala supports digestion and nutrient absorption",
            "Nettle leaf is rich in iron and supports hemoglobin levels",
            "Sesame seeds are a good source of iron and calcium"
        ],
        "IntegrationWithModernMedicine": "Iron supplements or other prescribed treatments for anemia should be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Hypothyroidism",
        "Symptoms": [
            "Fatigue",
            "Weight gain",
            "Depression",
            "Cold intolerance"
        ],
        "AyurvedicRemedy": [
            "Ashwagandha (Withania somnifera) supplements",
            "Bladderwrack (Fucus vesiculosus) supplements",
            "Triphala churna with warm water"
        ],
        "PharmacologicalProperties": [
            "Ashwagandha supports thyroid function and reduces fatigue",
            "Bladderwrack is a source of iodine and supports thyroid health",
            "Triphala aids digestion and nutrient absorption"
        ],
        "IntegrationWithModernMedicine": "Thyroid hormone replacement therapy or other prescribed treatments for hypothyroidism should be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Hyperthyroidism",
        "Symptoms": [
            "Weight loss",
            "Rapid heartbeat",
            "Nervousness",
            "Excessive sweating"
        ],
        "AyurvedicRemedy": [
            "Bugleweed (Lycopus virginicus) tea",
            "Lemon balm (Melissa officinalis) tea",
            "Triphala churna with honey"
        ],
        "PharmacologicalProperties": [
            "Bugleweed helps regulate thyroid function",
            "Lemon balm has calming effects on the nervous system",
            "Triphala supports digestion and nutrient absorption"
        ],
        "IntegrationWithModernMedicine": "Antithyroid medications, radioactive iodine, or other prescribed treatments for hyperthyroidism should be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Chronic Headaches",
        "Symptoms": [
            "Frequent or persistent headaches",
            "Throbbing or pulsating pain",
            "Sensitivity to light or sound"
        ],
        "AyurvedicRemedy": [
            "Peppermint oil applied on temples",
            "Lavender oil massage on forehead",
            "Ginger tea"
        ],
        "PharmacologicalProperties": [
            "Peppermint oil has analgesic and soothing properties",
            "Lavender oil has calming effects and may relieve headache",
            "Ginger has anti-inflammatory and analgesic properties"
        ],
        "IntegrationWithModernMedicine": "Pain relievers or other prescribed treatments for chronic headaches can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Chronic Back Pain",
        "Symptoms": [
            "Persistent pain in the lower back",
            "Stiffness or limited mobility",
            "Radiating pain down the legs"
        ],
        "AyurvedicRemedy": [
            "Castor oil massage on the affected area",
            "Epsom salt bath",
            "Turmeric paste with warm milk"
        ],
        "PharmacologicalProperties": [
            "Castor oil has anti-inflammatory and analgesic properties",
            "Epsom salt bath can relax muscles and relieve pain",
            "Turmeric is anti-inflammatory and supports pain relief"
        ],
        "IntegrationWithModernMedicine": "Pain relievers, muscle relaxants, or other prescribed treatments for chronic back pain can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Sciatica",
        "Symptoms": [
            "Pain radiating from the lower back down the leg",
            "Numbness or tingling in the leg",
            "Muscle weakness in the affected leg"
        ],
        "AyurvedicRemedy": [
            "Eucalyptus oil massage on the affected area",
            "Triphala churna with warm water",
            "Ashwagandha (Withania somnifera) supplements"
        ],
        "PharmacologicalProperties": [
            "Eucalyptus oil has analgesic and anti-inflammatory properties",
            "Triphala aids digestion and supports nerve health",
            "Ashwagandha reduces inflammation and supports pain relief"
        ],
        "IntegrationWithModernMedicine": "Pain relievers, muscle relaxants, or other prescribed treatments for sciatica can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Fibromyalgia",
        "Symptoms": [
            "Widespread muscle pain and tenderness",
            "Fatigue",
            "Sleep disturbances",
            "Cognitive difficulties"
        ],
        "AyurvedicRemedy": [
            "Ginger tea",
            "Triphala churna with warm water",
            "Ashwagandha (Withania somnifera) supplements"
        ],
        "PharmacologicalProperties": [
            "Ginger has anti-inflammatory and analgesic properties",
            "Triphala aids digestion and supports overall well-being",
            "Ashwagandha reduces fatigue and supports pain relief"
        ],
        "IntegrationWithModernMedicine": "Pain relievers, antidepressants, or other prescribed treatments for fibromyalgia can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Multiple Sclerosis",
        "Symptoms": [
            "Fatigue",
            "Muscle weakness",
            "Difficulty with coordination and balance",
            "Numbness or tingling"
        ],
        "AyurvedicRemedy": [
            "Guggul (Commiphora wightii) supplements",
            "Brahmi (Bacopa monnieri) capsules",
            "Ashwagandha (Withania somnifera) supplements"
        ],
        "PharmacologicalProperties": [
            "Guggul has anti-inflammatory and neuroprotective properties",
            "Brahmi supports the nervous system and cognitive function",
            "Ashwagandha reduces fatigue and supports overall well-being"
        ],
        "IntegrationWithModernMedicine": "Immunomodulatory medications, corticosteroids, or other prescribed treatments for multiple sclerosis can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Rheumatoid Arthritis",
        "Symptoms": [
            "Joint pain and swelling",
            "Stiffness, especially in the morning",
            "Fatigue",
            "Loss of appetite"
        ],
        "AyurvedicRemedy": [
            "Turmeric paste with warm milk",
            "Guggul (Commiphora wightii) supplements",
            "Ashwagandha (Withania somnifera) supplements"
        ],
        "PharmacologicalProperties": [
            "Turmeric is anti-inflammatory and supports joint health",
            "Guggul has anti-inflammatory and analgesic properties",
            "Ashwagandha reduces inflammation and supports overall well-being"
        ],
        "IntegrationWithModernMedicine": "Disease-modifying antirheumatic drugs (DMARDs), corticosteroids, or other prescribed treatments for rheumatoid arthritis can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Osteoporosis",
        "Symptoms": [
            "Brittle and fragile bones",
            "Loss of height over time",
            "Back pain or stooped posture",
            "Fractures that occur easily"
        ],
        "AyurvedicRemedy": [
            "Praval pisti (coral calcium) with honey",
            "Bala (Sida cordifolia) supplements",
            "Ashwagandha (Withania somnifera) supplements"
        ],
        "PharmacologicalProperties": [
            "Praval pisti supports bone health and calcium absorption",
            "Bala aids in strengthening bones and muscles",
            "Ashwagandha supports overall well-being and may help with bone density"
        ],
        "IntegrationWithModernMedicine": "Calcium supplements, bisphosphonates, or other prescribed treatments for osteoporosis can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Chronic Sinusitis",
        "Symptoms": [
            "Nasal congestion",
            "Facial pain or pressure",
            "Discolored nasal discharge",
            "Difficulty breathing through the nose"
        ],
        "AyurvedicRemedy": [
            "Neti pot with saline solution",
            "Eucalyptus oil steam inhalation",
            "Turmeric paste with warm water (internal consumption)"
        ],
        "PharmacologicalProperties": [
            "Neti pot helps clear nasal passages and reduce congestion",
            "Eucalyptus oil has decongestant and anti-inflammatory properties",
            "Turmeric is anti-inflammatory and supports immune function"
        ],
        "IntegrationWithModernMedicine": "Nasal corticosteroids, decongestants, or other prescribed treatments for chronic sinusitis can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Common Colds",
        "Symptoms": [
            "Runny or stuffy nose",
            "Sneezing",
            "Coughing",
            "Sore throat"
        ],
        "AyurvedicRemedy": [
            "Ginger tea with honey",
            "Tulsi (Holy Basil) tea",
            "Cinnamon and honey paste"
        ],
        "PharmacologicalProperties": [
            "Ginger has anti-inflammatory and immune-boosting properties",
            "Tulsi supports the respiratory system and has antimicrobial properties",
            "Cinnamon and honey have antibacterial and soothing effects"
        ],
        "IntegrationWithModernMedicine": "Over-the-counter cold medications, decongestants, or other prescribed treatments for common colds can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Flu",
        "Symptoms": [
            "Fever",
            "Chills",
            "Muscle aches",
            "Fatigue"
        ],
        "AyurvedicRemedy": [
            "Ginger and honey paste",
            "Tulsi (Holy Basil) tea",
            "Cinnamon and black pepper tea"
        ],
        "PharmacologicalProperties": [
            "Ginger has anti-inflammatory and immune-boosting properties",
            "Tulsi supports the respiratory system and has antimicrobial properties",
            "Cinnamon and black pepper have antibacterial and warming effects"
        ],
        "IntegrationWithModernMedicine": "Antiviral medications, pain relievers, or other prescribed treatments for flu can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Tonsillitis",
        "Symptoms": [
            "Sore throat",
            "Difficulty swallowing",
            "Swollen tonsils",
            "Fever"
        ],
        "AyurvedicRemedy": [
            "Licorice root tea",
            "Turmeric and honey paste",
            "Cinnamon and black pepper tea"
        ],
        "PharmacologicalProperties": [
            "Licorice has anti-inflammatory and soothing properties",
            "Turmeric and honey have antibacterial and soothing effects",
            "Cinnamon and black pepper have antibacterial and warming effects"
        ],
        "IntegrationWithModernMedicine": "Antibiotics, pain relievers, or other prescribed treatments for tonsillitis can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Bronchitis",
        "Symptoms": [
            "Cough with mucus",
            "Shortness of breath",
            "Chest discomfort",
            "Fatigue"
        ],
        "AyurvedicRemedy": [
            "Ginger and honey paste",
            "Tulsi (Holy Basil) tea",
            "Eucalyptus oil steam inhalation"
        ],
        "PharmacologicalProperties": [
            "Ginger has anti-inflammatory and expectorant properties",
            "Tulsi supports the respiratory system and has antimicrobial properties",
            "Eucalyptus oil helps clear airways and reduce congestion"
        ],
        "IntegrationWithModernMedicine": "Bronchodilators, expectorants, or other prescribed treatments for bronchitis can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Cough",
        "Symptoms": [
            "Persistent coughing",
            "Sore throat",
            "Hoarseness",
            "Chest discomfort"
        ],
        "AyurvedicRemedy": [
            "Ginger and honey paste",
            "Licorice root tea",
            "Tulsi (Holy Basil) tea"
        ],
        "PharmacologicalProperties": [
            "Ginger has anti-inflammatory and expectorant properties",
            "Licorice has soothing and expectorant properties",
            "Tulsi supports the respiratory system and has antimicrobial properties"
        ],
        "IntegrationWithModernMedicine": "Cough suppressants, expectorants, or other prescribed treatments for cough can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Sinusitis",
        "Symptoms": [
            "Facial pain or pressure",
            "Nasal congestion",
            "Thick, discolored nasal discharge",
            "Cough"
        ],
        "AyurvedicRemedy": [
            "Neti pot with saline solution",
            "Eucalyptus oil steam inhalation",
            "Turmeric paste with warm water (internal consumption)"
        ],
        "PharmacologicalProperties": [
            "Neti pot helps clear nasal passages and reduce congestion",
            "Eucalyptus oil has decongestant and anti-inflammatory properties",
            "Turmeric is anti-inflammatory and supports immune function"
        ],
        "IntegrationWithModernMedicine": "Nasal corticosteroids, decongestants, or other prescribed treatments for sinusitis can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Skin Infections",
        "Symptoms": [
            "Redness",
            "Swelling",
            "Pain or tenderness",
            "Pus or fluid-filled blisters"
        ],
        "AyurvedicRemedy": [
            "Neem (Azadirachta indica) paste",
            "Turmeric and honey paste",
            "Tea tree oil topical application"
        ],
        "PharmacologicalProperties": [
            "Neem has antimicrobial and anti-inflammatory properties",
            "Turmeric and honey have antibacterial and soothing effects",
            "Tea tree oil has antiseptic and wound-healing properties"
        ],
        "IntegrationWithModernMedicine": "Topical antibiotics, antifungal creams, or other prescribed treatments for skin infections can be used alongside Ayurvedic remedies. Consult a healthcare provider for appropriate treatment."
    },
    {
        "Name": "Herpes",
        "Symptoms": [
            "Painful sores or blisters",
            "Itching or burning sensation",
            "Flu-like symptoms",
            "Fatigue"
        ],
        "AyurvedicRemedy": [
            "Lysine supplements",
            "Aloe vera gel",
            "Licorice root topical application"
        ],
        "PharmacologicalProperties": [
            "Lysine may help prevent herpes outbreaks",
            "Aloe vera has soothing and wound-healing properties",
            "Licorice root has antiviral and anti-inflammatory properties"
        ],
        "IntegrationWithModernMedicine": "Antiviral medications prescribed by a healthcare provider should be used alongside Ayurvedic remedies for herpes. Consult a healthcare provider for appropriate treatment."
    }
]
export default data;