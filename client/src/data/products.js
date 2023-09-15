const data = [
  {
    "ProductName": "AyurRelief Syrup",
    "Description": "AyurRelief Syrup is a natural Ayurvedic remedy formulated to provide relief from common cold and cough symptoms. It soothes the throat and supports respiratory health.",
    "Ingredients": [
      "Indian Gooseberry (Amla)",
      "Licorice (Glycyrrhiza glabra)",
      "Ginger (Zingiber officinale)"
    ],
    "Usage": "Take 10 ml of syrup three times a day, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Relieves cough and congestion",
      "Supports respiratory comfort",
      "Boosts immunity"
    ],
    "Packaging": {
      "BottleMaterial": "Glass",
      "BottleSize": "200 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 12.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurHealth Labs",
      "Location": "Kerala, India",
      "Certifications": []
    },
    "Warnings": []
  },
  {
    "ProductName": "AyurDigest Tablets",
    "Description": "AyurDigest Tablets are a blend of traditional Ayurvedic herbs known for their digestive properties. This formulation aims to promote healthy digestion and alleviate digestive discomfort.",
    "Ingredients": [
      "Fennel (Foeniculum vulgare)",
      "Ginger (Zingiber officinale)",
      "Ajwain (Trachyspermum ammi)",
      "Mint (Mentha)"
    ],
    "Usage": "Take 2 tablets after meals, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Promotes healthy digestion",
      "Relieves bloating and gas",
      "Soothes the digestive tract"
    ],
    "Packaging": {
      "BottleMaterial": "HDPE Plastic",
      "BottleSize": "90 tablets"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 15.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurWellness Pvt. Ltd.",
      "Location": "Karnataka, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner if pregnant, nursing, or have a medical condition.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurGlow Face Cream",
    "Description": "AyurGlow Face Cream is an Ayurvedic skincare product crafted to enhance skin radiance and reduce blemishes. It contains a blend of natural ingredients known for their skin-nourishing properties.",
    "Ingredients": [
      "Saffron (Crocus sativus)",
      "Turmeric (Curcuma longa)",
      "Aloe Vera (Aloe barbadensis)",
      "Rose (Rosa)"
    ],
    "Usage": "Apply a small amount to the face and neck, gently massaging into the skin. Use twice daily for best results.",
    "Benefits": [
      "Enhances skin radiance",
      "Reduces blemishes and dark spots",
      "Nourishes and hydrates the skin"
    ],
    "Packaging": {
      "BottleMaterial": "Plastic Jar",
      "BottleSize": "50 grams"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 19.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurBeauty Products Ltd.",
      "Location": "Mumbai, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "For external use only.",
      "Avoid contact with eyes.",
      "Discontinue use if irritation occurs."
    ]
  },
  {
    "ProductName": "AyurSleep Capsules",
    "Description": "AyurSleep Capsules are a natural Ayurvedic remedy formulated to promote healthy sleep patterns. This blend of herbs helps relax the mind and body, aiding in restful sleep.",
    "Ingredients": [
      "Valerian (Valeriana officinalis)",
      "Brahmi (Bacopa monnieri)",
      "Jatamansi (Nardostachys jatamansi)"
    ],
    "Usage": "Take 1 capsule before bedtime, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Promotes restful sleep",
      "Relieves insomnia and anxiety",
      "Calms the nervous system"
    ],
    "Packaging": {
      "BottleMaterial": "HDPE Plastic",
      "BottleSize": "60 capsules"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 17.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurRest Laboratories",
      "Location": "Himachal Pradesh, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner if pregnant, nursing, or have a medical condition.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurJoint Oil",
    "Description": "AyurJoint Oil is an Ayurvedic oil specially formulated for joint and muscle health. It contains a blend of herbs known for their anti-inflammatory and analgesic properties.",
    "Ingredients": [
      "Ashwagandha (Withania somnifera)",
      "Guggul (Commiphora wightii)",
      "Eucalyptus (Eucalyptus globulus)",
      "Camphor (Cinnamomum camphora)"
    ],
    "Usage": "Apply a small amount to the affected joint or muscle and gently massage. Use twice daily for best results.",
    "Benefits": [
      "Relieves joint pain and stiffness",
      "Reduces inflammation",
      "Improves joint mobility"
    ],
    "Packaging": {
      "BottleMaterial": "Glass Bottle",
      "BottleSize": "100 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 14.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurFlex Remedies",
      "Location": "Rajasthan, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "For external use only.",
      "Avoid contact with eyes.",
      "Do not apply to broken skin."
    ]
  },
  {
    "ProductName": "AyurLiver Syrup",
    "Description": "AyurLiver Syrup is a herbal Ayurvedic remedy for liver health. It supports liver detoxification and promotes overall liver function.",
    "Ingredients": [
      "Milk Thistle (Silybum marianum)",
      "Bhringraj (Eclipta alba)",
      "Kutki (Picrorhiza kurroa)"
    ],
    "Usage": "Take 10 ml of syrup twice a day, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Supports liver detoxification",
      "Promotes healthy liver function",
      "Protects the liver from toxins"
    ],
    "Packaging": {
      "BottleMaterial": "Plastic Bottle",
      "BottleSize": "150 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 16.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurLiver Healthcare",
      "Location": "Punjab, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner if pregnant, nursing, or have a medical condition.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurVision Eye Drops",
    "Description": "AyurVision Eye Drops are a natural Ayurvedic solution for eye care. This herbal formula helps relieve eye strain, dryness, and discomfort.",
    "Ingredients": [
      "Rose (Rosa)",
      "Triphala (Amla, Haritaki, Bibhitaki)",
      "Bhringraj (Eclipta alba)"
    ],
    "Usage": "Instill 1-2 drops in each eye as needed, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Relieves eye strain and dryness",
      "Nourishes and refreshes the eyes",
      "Supports overall eye health"
    ],
    "Packaging": {
      "BottleMaterial": "Glass Bottle",
      "BottleSize": "10 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 11.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurVision Remedies",
      "Location": "Uttar Pradesh, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "For external use only.",
      "Do not touch the dropper tip to any surface to avoid contamination.",
      "Discontinue use if irritation occurs."
    ]
  },
  {
    "ProductName": "AyurKidz Syrup",
    "Description": "AyurKidz Syrup is an Ayurvedic syrup formulated for children's health. It supports immunity and promotes overall well-being in growing kids.",
    "Ingredients": [
      "Shatavari (Asparagus racemosus)",
      "Bala (Sida cordifolia)",
      "Tulsi (Ocimum tenuiflorum)"
    ],
    "Usage": "Give 5 ml of syrup twice a day for children aged 3-12 years, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Boosts children's immunity",
      "Promotes growth and development",
      "Enhances overall health"
    ],
    "Packaging": {
      "BottleMaterial": "Plastic Bottle",
      "BottleSize": "120 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 9.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurKids Pharmaceuticals",
      "Location": "Tamil Nadu, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner before use if your child has a medical condition or is taking medications.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurHerb Hair Oil",
    "Description": "AyurHerb Hair Oil is a natural Ayurvedic hair oil formulated to nourish and strengthen hair. It contains a blend of herbs known for their hair-care properties.",
    "Ingredients": [
      "Amla (Indian Gooseberry)",
      "Brahmi (Bacopa monnieri)",
      "Hibiscus (Hibiscus rosa-sinensis)",
      "Neem (Azadirachta indica)"
    ],
    "Usage": "Apply a small amount to the scalp and hair, massaging gently. Leave on for at least 1 hour before washing.",
    "Benefits": [
      "Promotes hair growth",
      "Prevents hair fall",
      "Nourishes the scalp"
    ],
    "Packaging": {
      "BottleMaterial": "Glass Bottle",
      "BottleSize": "200 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 18.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurLocks Pvt. Ltd.",
      "Location": "West Bengal, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "For external use only.",
      "Avoid contact with eyes.",
      "Do not apply to broken skin."
    ]
  },
  {
    "ProductName": "AyurHeart Capsules",
    "Description": "AyurHeart Capsules are an Ayurvedic supplement for heart health. This herbal formulation supports cardiovascular function and overall heart well-being.",
    "Ingredients": [
      "Arjuna (Terminalia arjuna)",
      "Hawthorn (Crataegus monogyna)",
      "Garlic (Allium sativum)",
      "Guggul (Commiphora wightii)"
    ],
    "Usage": "Take 1 capsule twice daily with meals, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Supports heart health",
      "Helps maintain healthy cholesterol levels",
      "Promotes optimal blood circulation"
    ],
    "Packaging": {
      "BottleMaterial": "HDPE Plastic",
      "BottleSize": "90 capsules"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 21.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurHeart Wellness Ltd.",
      "Location": "Uttarakhand, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner before use if you have a heart condition or are taking heart medications.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurSkin Lotion",
    "Description": "AyurSkin Lotion is an Ayurvedic lotion for skin care. This herbal formula helps moisturize and rejuvenate the skin, leaving it soft and supple.",
    "Ingredients": [
      "Sandalwood (Santalum album)",
      "Rose (Rosa)",
      "Aloe Vera (Aloe barbadensis)",
      "Neem (Azadirachta indica)"
    ],
    "Usage": "Apply a generous amount to clean skin and massage gently. Use daily for best results.",
    "Benefits": [
      "Moisturizes and hydrates the skin",
      "Improves skin texture",
      "Soothes irritated skin"
    ],
    "Packaging": {
      "BottleMaterial": "Plastic Bottle",
      "BottleSize": "150 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 14.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurGlow Skincare Products",
      "Location": "Gujarat, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "For external use only.",
      "Avoid contact with eyes.",
      "Discontinue use if irritation occurs."
    ]
  },
  {
    "ProductName": "AyurDigest Tea",
    "Description": "AyurDigest Tea is a herbal Ayurvedic tea blend for digestive health. This tea helps improve digestion and alleviate digestive discomfort.",
    "Ingredients": [
      "Peppermint (Mentha piperita)",
      "Fennel (Foeniculum vulgare)",
      "Cumin (Cuminum cyminum)",
      "Coriander (Coriandrum sativum)"
    ],
    "Usage": "Steep one tea bag in hot water for 5 minutes. Enjoy after meals for best results.",
    "Benefits": [
      "Promotes healthy digestion",
      "Relieves bloating and gas",
      "Soothes the digestive tract"
    ],
    "Packaging": {
      "BoxMaterial": "Cardboard",
      "BoxSize": "25 tea bags"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 7.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurTea Blends",
      "Location": "Himachal Pradesh, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner if pregnant, nursing, or have a medical condition.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurSlim Capsules",
    "Description": "AyurSlim Capsules are an Ayurvedic supplement designed to support weight management and a healthy metabolism. This herbal blend aids in maintaining a balanced weight.",
    "Ingredients": [
      "Garcinia Cambogia (Garcinia gummi-gutta)",
      "Guggul (Commiphora wightii)",
      "Triphala (Amla, Haritaki, Bibhitaki)",
      "Green Tea (Camellia sinensis)"
    ],
    "Usage": "Take 1 capsule twice daily before meals, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Supports weight management",
      "Boosts metabolism",
      "Aids in fat reduction"
    ],
    "Packaging": {
      "BottleMaterial": "HDPE Plastic",
      "BottleSize": "60 capsules"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 24.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurSlim Wellness",
      "Location": "Kerala, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner before use if pregnant, nursing, or have a medical condition.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurFlex Cream",
    "Description": "AyurFlex Cream is an Ayurvedic topical cream formulated to provide relief from joint and muscle discomfort. It contains a blend of herbs known for their soothing properties.",
    "Ingredients": [
      "Boswellia (Boswellia serrata)",
      "Menthol",
      "Eucalyptus (Eucalyptus globulus)",
      "Camphor (Cinnamomum camphora)"
    ],
    "Usage": "Apply a small amount to the affected joint or muscle and gently massage. Use as needed for relief.",
    "Benefits": [
      "Relieves joint and muscle discomfort",
      "Provides a cooling effect",
      "Promotes mobility"
    ],
    "Packaging": {
      "JarMaterial": "Plastic Jar",
      "JarSize": "100 grams"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 13.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurFlex Remedies",
      "Location": "Rajasthan, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "For external use only.",
      "Avoid contact with eyes.",
      "Do not apply to broken skin."
    ]
  },
  {
    "ProductName": "AyurMind Capsules",
    "Description": "AyurMind Capsules are an Ayurvedic supplement designed to support mental clarity and cognitive function. This herbal blend aids in maintaining optimal brain health.",
    "Ingredients": [
      "Brahmi (Bacopa monnieri)",
      "Gotu Kola (Centella asiatica)",
      "Ashwagandha (Withania somnifera)",
      "Shankhpushpi (Convolvulus pluricaulis)"
    ],
    "Usage": "Take 1 capsule twice daily with meals, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Supports mental clarity",
      "Enhances cognitive function",
      "Promotes overall brain health"
    ],
    "Packaging": {
      "BottleMaterial": "HDPE Plastic",
      "BottleSize": "90 capsules"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 19.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurMind Wellness",
      "Location": "Himachal Pradesh, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner before use if pregnant, nursing, or have a medical condition.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  },
  {
    "ProductName": "AyurVitality Elixir",
    "Description": "AyurVitality Elixir is an Ayurvedic herbal tonic that boosts overall vitality and energy. It contains a blend of rejuvenating herbs known for their energy-enhancing properties.",
    "Ingredients": [
      "Shilajit",
      "Safed Musli (Chlorophytum borivilianum)",
      "Ashwagandha (Withania somnifera)",
      "Tribulus (Tribulus terrestris)"
    ],
    "Usage": "Take 10 ml of elixir twice daily with water, or as directed by a healthcare practitioner.",
    "Benefits": [
      "Boosts energy and vitality",
      "Enhances stamina and endurance",
      "Supports overall well-being"
    ],
    "Packaging": {
      "BottleMaterial": "Glass Bottle",
      "BottleSize": "250 ml"
    },
    "Price": {
      "Currency": "USD",
      "Amount": 29.99
    },
    "Availability": "In Stock",
    "ManufacturingDetails": {
      "ManufacturedBy": "AyurVitality Labs",
      "Location": "Uttarakhand, India",
      "Certifications": [
        "ISO 9001:2015",
        "GMP Certified"
      ]
    },
    "Warnings": [
      "Consult a healthcare practitioner before use if pregnant, nursing, or have a medical condition.",
      "Keep out of reach of children.",
      "Store in a cool, dry place."
    ]
  }
]

export default data;