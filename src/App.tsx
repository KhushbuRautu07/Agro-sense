import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react';
import { 
  Sprout, Droplets, FlaskConical, Bug, TrendingUp, 
  FileText, BookOpen, Menu, Moon, Sun, ChevronRight, Globe,
  Search, X, CheckCircle2, AlertTriangle, ExternalLink, TrendingDown, Minus,
  Coins, ShieldCheck, Zap, ArrowRight, CloudSun, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
export type Language = 'English' | 'Marathi' | 'Hindi';

interface Translation {
  title: string;
  subtitle: string;
  marketPrices: string;
  cropAdvisor: string;
  irrigation: string;
  soilType: string;
  season: string;
  getRecommendation: string;
  loading: string;
  district: string;
  selectDistrict: string;
  agroSchemes: string;
  pestDetector: string;
  soilHealth: string;
  analyze: string;
  farmArea: string;
  cropCategory: string;
  waterNeed: string;
  litersPerWeek: string;
  smartTip: string;
  viewMore: string;
  organic: string;
  clear: string;
  selectCrop: string;
  selectSoil: string;
  selectSymptom: string;
  chemicalSolution: string;
  active: string;
  applyNow: string;
  open: string;
  latest: string;
  welcomeFarmer: string;
  soilTips: string[];
  irrigationMethod: string;
  waterSavingTips: string;
  lowWater: string;
  mediumWater: string;
  highWater: string;
  sandySoil: string;
  loamySoil: string;
  clayeySoil: string;
  dripIrrigation: string;
  sprinklerIrrigation: string;
  floodIrrigation: string;
  severity: string;
  pestName: string;
  diagnosisResult: string;
  risk: string;
  match: string;
  acres: string;
  high: string;
  medium: string;
  low: string;
  dashboardTitle: string;
  dashboardSubtitle: string;
  marketDesc: string;
  advisorDesc: string;
  pestDesc: string;
  irrigationDesc: string;
  schemesDesc: string;
  soilDesc: string;
  openTool: string;
  backToDashboard: string;
  viewAllSchemes: string;
  per: string;
  marketDisclaimer: string;
  quintal: string;
  errorAnalysis: string;
  errorRecommendation: string;
}

// --- Translations ---
const translations: Record<Language, Translation> = {
  English: {
    title: "Smart Farming ",
    subtitle: "Your Digital Agricultural Advisor",
    marketPrices: "Market Prices",
    cropAdvisor: "Crop Advisor",
    irrigation: "Irrigation Planner",
    soilType: "Soil Type",
    season: "Season",
    getRecommendation: "Get Recommendation",
    loading: "Analyzing...",
    district: "District / City",
    selectDistrict: "Select District",
    agroSchemes: "Agro Schemes",
    pestDetector: "Pest Detector",
    soilHealth: "Soil Health Tips",
    analyze: "Analyze",
    farmArea: "Farm Area (Acres)",
    cropCategory: "Crop Category",
    waterNeed: "Estimated Water Need",
    litersPerWeek: "Liters / Week",
    smartTip: "Smart Tip",
    viewMore: "View More",
    organic: "Organic Solution",
    clear: "Clear",
    selectCrop: "Select Crop",
    selectSoil: "Select Soil Type",
    selectSymptom: "Select Symptoms",
    chemicalSolution: "Chemical Solution",
    active: "Active",
    applyNow: "Apply Now",
    open: "Open",
    latest: "Latest",
    welcomeFarmer: "Hi Farmer! 👋",
    soilTips: [
      "Use organic manure to improve soil texture and fertility.",
      "Rotate crops regularly to maintain nutrient balance and prevent pests.",
      "Test soil every 2 years to understand nutrient deficiencies.",
      "Practice cover cropping to prevent soil erosion during off-seasons.",
      "Avoid excessive use of chemical fertilizers to protect soil microbes.",
      "Maintain proper drainage to prevent waterlogging and root rot.",
      "Add compost or vermicompost to increase organic carbon content."
    ],
    irrigationMethod: "Irrigation Method",
    waterSavingTips: "Water Saving Tips",
    lowWater: "Low Water (Pulses/Oilseeds)",
    mediumWater: "Medium Water (Cotton/Soybean)",
    highWater: "High Water (Sugarcane/Banana)",
    sandySoil: "Sandy (High Drainage)",
    loamySoil: "Loamy (Ideal)",
    clayeySoil: "Clayey (High Retention)",
    dripIrrigation: "Drip Irrigation (Most Efficient)",
    sprinklerIrrigation: "Sprinkler",
    floodIrrigation: "Flood Irrigation (Traditional)",
    severity: "Severity",
    pestName: "Pest Name",
    diagnosisResult: "Diagnosis Result",
    risk: "Risk",
    match: "Match",
    acres: "Acres",
    high: "High",
    medium: "Medium",
    low: "Low",
    dashboardTitle: "Your Farm at a Glance",
    dashboardSubtitle: "Select a tool below to get started with real-time agricultural insights and expert advice.",
    marketDesc: "Check latest mandi rates across Maharashtra districts.",
    advisorDesc: "Get AI-powered crop recommendations based on soil.",
    pestDesc: "Identify pests and get organic/chemical solutions.",
    irrigationDesc: "Plan your water usage based on area and crop type.",
    schemesDesc: "Explore latest government subsidies and benefits.",
    soilDesc: "Tips to maintain and improve your farm soil health.",
    openTool: "Open Tool",
    backToDashboard: "Back to Dashboard",
    viewAllSchemes: "View All Government Schemes",
    per: "per",
    marketDisclaimer: "* Prices are indicative and updated daily from APMC sources.",
    quintal: "Quintal",
    errorAnalysis: "Failed to analyze symptoms. Please try again.",
    errorRecommendation: "Failed to get recommendation. Please try again."
  },
  Marathi: {
    title: "स्मार्ट शेती",
    subtitle: "तुमचा डिजिटल कृषी सल्लागार",
    marketPrices: "बाजार भाव",
    cropAdvisor: "पीक सल्लागार",
    irrigation: "सिंचन नियोजन",
    soilType: "मातीचा प्रकार",
    season: "हंगाम",
    getRecommendation: "शिफारस मिळवा",
    loading: "विश्लेषण करत आहे...",
    district: "जिल्हा / शहर",
    selectDistrict: "जिल्हा निवडा",
    agroSchemes: "कृषी योजना",
    pestDetector: "कीड शोधक",
    soilHealth: "माती आरोग्य टिप्स",
    analyze: "विश्लेषण करा",
    farmArea: "शेत क्षेत्र",
    cropCategory: "पीक श्रेणी",
    waterNeed: "अंदाजे पाण्याची गरज",
    litersPerWeek: "लिटर / आठवडा",
    smartTip: "स्मार्ट टीप",
    viewMore: "अधिक पहा",
    organic: "सेंद्रिय उपाय",
    clear: "पुसा",
    selectCrop: "पीक निवडा",
    selectSoil: "मातीचा प्रकार निवडा",
    selectSymptom: "लक्षणे निवडा",
    chemicalSolution: "रासायनिक उपाय",
    active: "सक्रिय",
    applyNow: "आता अर्ज करा",
    open: "सुरू",
    latest: "नवीनतम",
    welcomeFarmer: "नमस्कार शेतकरी मित्र! 👋",
    soilTips: [
      "मातीचा पोत आणि सुपीकता सुधारण्यासाठी सेंद्रिय खताचा वापर करा.",
      "पोषक तत्वांचे संतुलन राखण्यासाठी आणि कीड रोखण्यासाठी पिकांची फेरपालट करा.",
      "पोषक तत्वांची कमतरता समजून घेण्यासाठी दर २ वर्षांनी माती परीक्षण करा.",
      "हंगामाव्यतिरिक्त मातीची धूप रोखण्यासाठी आच्छादन पिकांचा सराव करा.",
      "मातीतील सूक्ष्मजीवांचे संरक्षण करण्यासाठी रासायनिक खतांचा अतिवापर टाळा.",
      "पाणी साचणे आणि मुळे कुजणे रोखण्यासाठी योग्य निचरा ठेवा.",
      "सेंद्रिय कर्बाचे प्रमाण वाढवण्यासाठी कंपोस्ट किंवा गांडूळ खत टाका."
    ],
    irrigationMethod: "सिंचन पद्धत",
    waterSavingTips: "पाणी बचतीसाठी टिप्स",
    lowWater: "कमी पाणी (कडधान्ये/गळीत धान्ये)",
    mediumWater: "मध्यम पाणी (कापूस/सोयाबीन)",
    highWater: "जास्त पाणी (ऊस/केळी)",
    sandySoil: "रेताड (जास्त निचरा)",
    loamySoil: "लोम (आदर्श)",
    clayeySoil: "चोपण (जास्त ओलावा टिकवणारी)",
    dripIrrigation: "ठिबक सिंचन (सर्वात कार्यक्षम)",
    sprinklerIrrigation: "तुषार सिंचन",
    floodIrrigation: "पारंपारिक सिंचन",
    severity: "तीव्रता",
    pestName: "किडीचे नाव",
    diagnosisResult: "निदान निकाल",
    risk: "धोका",
    match: "जुळणी",
    acres: "एकर",
    high: "जास्त",
    medium: "मध्यम",
    low: "कमी",
    dashboardTitle: "तुमची शेती एका दृष्टीक्षेपात",
    dashboardSubtitle: "रिअल-टाइम कृषी माहिती आणि तज्ञ सल्ल्यासाठी खालील साधन निवडा.",
    marketDesc: "महाराष्ट्र राज्यातील जिल्ह्यांमधील ताज्या बाजार भावांची माहिती घ्या.",
    advisorDesc: "मातीच्या प्रकारानुसार पिकांच्या शिफारसी मिळवा.",
    pestDesc: "किडी ओळखा आणि सेंद्रिय/रासायनिक उपाय मिळवा.",
    irrigationDesc: "क्षेत्रफळ आणि पिकाच्या प्रकारानुसार पाणी वापराचे नियोजन करा.",
    schemesDesc: "शासकीय योजना आणि अनुदानांची माहिती मिळवा.",
    soilDesc: "शेतातील मातीचे आरोग्य सुधारण्यासाठी उपयुक्त टिप्स.",
    openTool: "साधन उघडा",
    backToDashboard: "डॅशबोर्डवर परत जा",
    viewAllSchemes: "सर्व शासकीय योजना पहा",
    per: "प्रति",
    marketDisclaimer: "* किमती सूचक आहेत आणि APMC स्रोतांकडून दररोज अपडेट केल्या जातात.",
    quintal: "क्विंटल",
    errorAnalysis: "लक्षणांचे विश्लेषण करण्यात अपयश आले. कृपया पुन्हा प्रयत्न करा.",
    errorRecommendation: "शिफारस मिळवण्यात अपयश आले. कृपया पुन्हा प्रयत्न करा."
  },
  Hindi: {
    title: "स्मार्ट फार्मिंग",
    subtitle: "आपका डिजिटल कृषि सलाहकार",
    marketPrices: "बाजार भाव",
    cropAdvisor: "फसल सलाहकार",
    irrigation: "सिंचाई योजना",
    soilType: "मिट्टी का प्रकार",
    season: "सीजन",
    getRecommendation: "सिफारिश प्राप्त करें",
    loading: "विश्लेषण कर रहा है...",
    district: "जिला / शहर",
    selectDistrict: "जिला चुनें",
    agroSchemes: "कृषि योजनाएं",
    pestDetector: "कीट डिटेक्टर",
    soilHealth: "मिट्टी स्वास्थ्य टिप्स",
    analyze: "विश्लेषण करें",
    farmArea: "फार्म क्षेत्र",
    cropCategory: "फसल श्रेणी",
    waterNeed: "अनुमानित पानी की आवश्यकता",
    litersPerWeek: "लीटर / सप्ताह",
    smartTip: "स्मार्ट टिप",
    viewMore: "अधिक देखें",
    organic: "जैविक उपाय",
    clear: "साफ करें",
    selectCrop: "फसल चुनें",
    selectSoil: "मिट्टी का प्रकार चुनें",
    selectSymptom: "लक्षण चुनें",
    chemicalSolution: "रासायनिक समाधान",
    active: "सक्रिय",
    applyNow: "अभी आवेदन करें",
    open: "खुला",
    latest: "नवीनतम",
    welcomeFarmer: "नमस्ते किसान भाई! 👋",
    soilTips: [
      "मिट्टी की बनावट और उर्वरता में सुधार के लिए जैविक खाद का उपयोग करें।",
      "पोषक तत्वों का संतुलन बनाए रखने और कीटों को रोकने के लिए नियमित रूप से फसल चक्र अपनाएं।",
      "पोषक तत्वों की कमी को समझने के लिए हर 2 साल में मिट्टी का परीक्षण कराएं।",
      "ऑफ-सीजन के दौरान मिट्टी के कटाव को रोकने के लिए कवर क्रॉपिंग का अभ्यास करें।",
      "मिट्टी के सूक्ष्मजीवों की रक्षा के लिए रासायनिक उर्वरकों के अत्यधिक उपयोग से बचें।",
      "जलभराव और जड़ों के सड़ने को रोकने के लिए उचित जल निकासी बनाए रखें।",
      "जैविक कार्बन सामग्री बढ़ाने के लिए कंपोस्ट या वर्मीकंपोस्ट डालें।"
    ],
    irrigationMethod: "सिंचाई विधि",
    waterSavingTips: "पानी बचाने के टिप्स",
    lowWater: "कम पानी (दलहन/तिलहन)",
    mediumWater: "मध्यम पानी (कपास/सोयाबीन)",
    highWater: "अधिक पानी (गन्ना/केला)",
    sandySoil: "रेतीली (उच्च जल निकासी)",
    loamySoil: "दोमट (आदर्श)",
    clayeySoil: "चिकनी (उच्च प्रतिधारण)",
    dripIrrigation: "ड्रिप सिंचाई (सबसे कुशल)",
    sprinklerIrrigation: "फव्वारा सिंचाई",
    floodIrrigation: "पारंपरिक सिंचाई",
    severity: "तीव्रता",
    pestName: "कीट का नाम",
    diagnosisResult: "निदान परिणाम",
    risk: "जोखिम",
    match: "मैच",
    acres: "एकड़",
    high: "उच्च",
    medium: "मध्यम",
    low: "कम",
    dashboardTitle: "आपकी खेती एक नज़र में",
    dashboardSubtitle: "रीयल-टाइम कृषि जानकारी और विशेषज्ञ सलाह के लिए नीचे एक उपकरण चुनें।",
    marketDesc: "महाराष्ट्र के जिलों में नवीनतम मंडी दरों की जाँच करें।",
    advisorDesc: "मिट्टी के आधार पर फसल की सिफारिशें प्राप्त करें।",
    pestDesc: "कीटों की पहचान करें और जैविक/रासायनिक समाधान प्राप्त करें।",
    irrigationDesc: "क्षेत्र और फसल के प्रकार के आधार पर पानी के उपयोग की योजना बनाएं।",
    schemesDesc: "नवीनतम सरकारी सब्सिडी और लाभों का पता लगाएं।",
    soilDesc: "खेत की मिट्टी के स्वास्थ्य को बनाए रखने और सुधारने के टिप्स।",
    openTool: "उपकरण खोलें",
    backToDashboard: "डैशबोर्ड पर वापस जाएं",
    viewAllSchemes: "सभी सरकारी योजनाएं देखें",
    per: "प्रति",
    marketDisclaimer: "* कीमतें सांकेतिक हैं और APMC स्रोतों से दैनिक रूप से अपडेट की जाती हैं।",
    quintal: "क्विंटल",
    errorAnalysis: "लक्षणों का विश्लेषण करने में विफल। कृपया पुनः प्रयास करें।",
    errorRecommendation: "सिफारिश प्राप्त करने में विफल। कृपया पुनः प्रयास करें।"
  }
};

// --- Constants ---
const SOIL_TYPES = [
  { id: 'black', label: { English: 'Black Soil (Regur)', Marathi: 'काळी माती (रेगूर)', Hindi: 'काली मिट्टी' }, icon: '🪨' },
  { id: 'red', label: { English: 'Red Soil', Marathi: 'लाल माती', Hindi: 'लाल मिट्टी' }, icon: '🧱' },
  { id: 'alluvial', label: { English: 'Alluvial Soil', Marathi: 'गाळाची माती', Hindi: 'जलोढ़ मिट्टी' }, icon: '⏳' },
  { id: 'laterite', label: { English: 'Laterite Soil', Marathi: 'जांभी माती', Hindi: 'लैटेराइट मिट्टी' }, icon: '🧱' },
  { id: 'saline', label: { English: 'Saline/Alkaline Soil', Marathi: 'खारवट/चोपण जमीन', Hindi: 'खारी मिट्टी' }, icon: '🧂' },
  { id: 'coastal', label: { English: 'Coastal Alluvial', Marathi: 'किनारपट्टीची गाळाची जमीन', Hindi: 'तटीय जलोढ़' }, icon: '🏖️' },
  { id: 'forest', label: { English: 'Forest Soil', Marathi: 'वन मृदा', Hindi: 'वन मिट्टी' }, icon: '🌲' },
  { id: 'mountain', label: { English: 'Mountain Soil', Marathi: 'पर्वतीय मृदा', Hindi: 'पर्वतीय मिट्टी' }, icon: '⛰️' }
];

const SEASONS = [
  { id: 'kharif', label: { English: 'Kharif (Monsoon)', Marathi: 'खरीप (पावसाळा)', Hindi: 'खरीफ (मानसून)' }, icon: '🌧️' },
  { id: 'rabi', label: { English: 'Rabi (Winter)', Marathi: 'रब्बी (हिवाळा)', Hindi: 'रबी (सर्दी)' }, icon: '❄️' },
  { id: 'summer', label: { English: 'Summer', Marathi: 'उन्हाळी', Hindi: 'गर्मी' }, icon: '☀️' }
];

const SYMPTOMS = [
  { id: 'yellow_leaves', label: { English: 'Yellow Leaves', Marathi: 'पिवळी पाने', Hindi: 'पीले पत्ते' }, icon: '🍂' },
  { id: 'holes_in_leaves', label: { English: 'Holes in Leaves', Marathi: 'पानांना छिद्रे', Hindi: 'पत्तियों में छेद' }, icon: '🐛' },
  { id: 'white_spots', label: { English: 'White Spots', Marathi: 'पांढरे डाग', Hindi: 'सफेद धब्बे' }, icon: '⚪' },
  { id: 'wilting', label: { English: 'Wilting/Drying', Marathi: 'सुकणे/कोमेजणे', Hindi: 'मुरझाना' }, icon: '🥀' },
  { id: 'stunted_growth', label: { English: 'Stunted Growth', Marathi: 'वाढ खुंटणे', Hindi: 'रुकी हुई वृद्धि' }, icon: '📉' }
];

const CROPS = [
  { id: 'cotton', label: { English: 'Cotton', Marathi: 'कापूस', Hindi: 'कपास' }, icon: '☁️' },
  { id: 'soybean', label: { English: 'Soybean', Marathi: 'सोयाबीन', Hindi: 'सोयाबीन' }, icon: '🫘' },
  { id: 'tur', label: { English: 'Tur/Pigeon Pea', Marathi: 'तूर', Hindi: 'अरहर' }, icon: '🌿' },
  { id: 'onion', label: { English: 'Onion', Marathi: 'कांदा', Hindi: 'प्याज' }, icon: '🧅' },
  { id: 'sugarcane', label: { English: 'Sugarcane', Marathi: 'ऊस', Hindi: 'गन्ना' }, icon: '🎋' },
  { id: 'grapes', label: { English: 'Grapes', Marathi: 'द्राक्षे', Hindi: 'अंगूर' }, icon: '🍇' },
  { id: 'pomegranate', label: { English: 'Pomegranate', Marathi: 'डाळिंब', Hindi: 'अनार' }, icon: '🍎' },
  { id: 'mango', label: { English: 'Mango', Marathi: 'आंबा', Hindi: 'आम' }, icon: '🥭' },
  { id: 'wheat', label: { English: 'Wheat', Marathi: 'गहू', Hindi: 'गेहूं' }, icon: '🌾' },
  { id: 'jowar', label: { English: 'Jowar', Marathi: 'ज्वारी', Hindi: 'ज्वार' }, icon: '🥣' },
  { id: 'bajra', label: { English: 'Bajra', Marathi: 'बाजरी', Hindi: 'बाजरा' }, icon: '🌽' },
  { id: 'turmeric', label: { English: 'Turmeric', Marathi: 'हळद', Hindi: 'हल्दी' }, icon: '🟡' }
];

const DISTRICTS = [
  { English: "Ahmednagar", Marathi: "अहमदनगर", Hindi: "अहमदनगर" },
  { English: "Akola", Marathi: "अकोला", Hindi: "अकोला" },
  { English: "Amravati", Marathi: "अमरावती", Hindi: "अमरावती" },
  { English: "Aurangabad", Marathi: "औरंगाबाद", Hindi: "औरंगाबाद" },
  { English: "Beed", Marathi: "बीड", Hindi: "बीड" },
  { English: "Bhandara", Marathi: "भंडारा", Hindi: "भंडारा" },
  { English: "Buldhana", Marathi: "बुलढाणा", Hindi: "बुलढाणा" },
  { English: "Chandrapur", Marathi: "चंद्रपूर", Hindi: "चंद्रपुर" },
  { English: "Dhule", Marathi: "धुळे", Hindi: "धुले" },
  { English: "Gadchiroli", Marathi: "गडचिरोली", Hindi: "गडचिरोली" },
  { English: "Gondia", Marathi: "गोंदिया", Hindi: "गोंदिया" },
  { English: "Hingoli", Marathi: "हिंगोली", Hindi: "हिंगोली" },
  { English: "Jalgaon", Marathi: "जळगाव", Hindi: "जलगाँव" },
  { English: "Jalna", Marathi: "जालना", Hindi: "जालना" },
  { English: "Kolhapur", Marathi: "कोल्हापूर", Hindi: "कोल्हापुर" },
  { English: "Latur", Marathi: "लातूर", Hindi: "लातूर" },
  { English: "Mumbai", Marathi: "मुंबई", Hindi: "मुंबई" },
  { English: "Nagpur", Marathi: "नागपूर", Hindi: "नागपुर" },
  { English: "Nanded", Marathi: "नांदेड", Hindi: "नांदेड" },
  { English: "Nandurbar", Marathi: "नंदुरबार", Hindi: "नंदुरबार" },
  { English: "Nashik", Marathi: "नाशिक", Hindi: "नाशिक" },
  { English: "Osmanabad", Marathi: "उस्मानाबाद", Hindi: "उस्मानाबाद" },
  { English: "Palghar", Marathi: "पालघर", Hindi: "पालघर" },
  { English: "Parbhani", Marathi: "परभणी", Hindi: "परभणी" },
  { English: "Pune", Marathi: "पुणे", Hindi: "पुणे" },
  { English: "Raigad", Marathi: "रायगड", Hindi: "रायगढ़" },
  { English: "Ratnagiri", Marathi: "रत्नागिरी", Hindi: "रत्नागिरी" },
  { English: "Sangli", Marathi: "सांगली", Hindi: "सांगली" },
  { English: "Satara", Marathi: "सातारा", Hindi: "सतारा" },
  { English: "Sindhudurg", Marathi: "सिंधुदुर्ग", Hindi: "सिंधुदुर्ग" },
  { English: "Solapur", Marathi: "सोलापूर", Hindi: "सोलापुर" },
  { English: "Thane", Marathi: "ठाणे", Hindi: "ठाणे" },
  { English: "Wardha", Marathi: "वर्धा", Hindi: "वर्धा" },
  { English: "Washim", Marathi: "वाशिम", Hindi: "वाशिम" },
  { English: "Yavatmal", Marathi: "यवतमाळ", Hindi: "यवतमाल" }
];

const MOCK_MARKET_PRICES = [
  { commodity: { English: "Onion", Marathi: "कांदा", Hindi: "प्याज" }, price: 2500, unit: "Quintal", trend: 'up' },
  { commodity: { English: "Cotton", Marathi: "कापूस", Hindi: "कपास" }, price: 7200, unit: "Quintal", trend: 'down' },
  { commodity: { English: "Soybean", Marathi: "सोयाबीन", Hindi: "सोयाबीन" }, price: 4800, unit: "Quintal", trend: 'stable' }
];

// --- Local Recommendation Logic ---
const CROP_RECOMMENDATIONS: Record<string, Record<string, any>> = {
  black: {
    kharif: {
      English: { crop: "Cotton", suitability: 95, reason: "Black soil (Regur) is ideal for cotton due to its high moisture retention.", tips: ["Ensure proper drainage", "Use high-quality Bt seeds", "Monitor for pink bollworm"] },
      Marathi: { crop: "कापूस", suitability: 95, reason: "काळी माती (रेगूर) कापसासाठी उत्तम आहे कारण ती ओलावा टिकवून ठेवते.", tips: ["योग्य निचरा सुनिश्चित करा", "उच्च दर्जाचे बीटी बियाणे वापरा", "गुलाबी बोंडअळीवर लक्ष ठेवा"] },
      Hindi: { crop: "कपास", suitability: 95, reason: "काली मिट्टी कपास के लिए आदर्श है क्योंकि यह नमी को अच्छी तरह सोखती है।", tips: ["उचित जल निकासी सुनिश्चित करें", "उच्च गुणवत्ता वाले बीटी बीजों का उपयोग करें", "गुलाबी बोलवर्म की निगरानी करें"] }
    },
    rabi: {
      English: { crop: "Wheat", suitability: 90, reason: "Black soil provides the necessary nutrients for a healthy wheat crop in winter.", tips: ["Timely irrigation is key", "Apply balanced fertilizers", "Watch for rust disease"] },
      Marathi: { crop: "गहू", suitability: 90, reason: "हिवाळ्यात गव्हाच्या पिकासाठी काळी माती आवश्यक पोषक तत्वे पुरवते.", tips: ["वेळेवर सिंचन महत्त्वाचे आहे", "संतुलित खतांचा वापर करा", "तांबेरा रोगावर लक्ष ठेवा"] },
      Hindi: { crop: "गेहूं", suitability: 90, reason: "सर्दियों में गेहूं की फसल के लिए काली मिट्टी आवश्यक पोषक तत्व प्रदान करती है।", tips: ["समय पर सिंचाई महत्वपूर्ण है", "संतुलित उर्वरकों का प्रयोग करें", "रस्ट रोग की निगरानी करें"] }
    },
    summer: {
      English: { crop: "Groundnut", suitability: 80, reason: "With irrigation, black soil can support summer groundnut.", tips: ["Frequent light irrigation", "Control leaf miners", "Harvest at right maturity"] },
      Marathi: { crop: "भुईमूग", suitability: 80, reason: "सिंचनासह, काळी माती उन्हाळी भुईमुगाला आधार देऊ शकते.", tips: ["वारंवार हलके सिंचन", "लीफ मायनर्स नियंत्रित करा", "योग्य पक्वतेवर काढणी करा"] },
      Hindi: { crop: "मूंगफली", suitability: 80, reason: "सिंचाई के साथ, काली मिट्टी गर्मियों की मूंगफली का समर्थन कर सकती है।", tips: ["बार-बार हल्की सिंचाई", "लीफ माइनर्स को नियंत्रित करें", "सही परिपक्वता पर कटाई करें"] }
    }
  },
  red: {
    kharif: {
      English: { crop: "Soybean", suitability: 88, reason: "Red soil is well-drained and suitable for soybean during monsoon.", tips: ["Seed treatment is essential", "Maintain optimum plant population", "Control girdle beetle"] },
      Marathi: { crop: "सोयाबीन", suitability: 88, reason: "लाल माती पाण्याचा निचरा होणारी असून पावसाळ्यात सोयाबीनसाठी योग्य आहे.", tips: ["बीजप्रक्रिया आवश्यक आहे", "रोपांची संख्या योग्य ठेवा", "चक्री भुंग्यावर नियंत्रण ठेवा"] },
      Hindi: { crop: "सोयाबीन", suitability: 88, reason: "लाल मिट्टी अच्छी जल निकासी वाली होती है और मानसून के दौरान सोयाबीन के लिए उपयुक्त है।", tips: ["बीज उपचार आवश्यक है", "पौधों की इष्टतम संख्या बनाए रखें", "गर्डल बीटल को नियंत्रित करें"] }
    },
    rabi: {
      English: { crop: "Jowar", suitability: 82, reason: "Red soil can support Jowar in rabi with supplementary irrigation.", tips: ["Control shoot fly", "Apply organic mulch", "Timely weeding"] },
      Marathi: { crop: "ज्वारी", suitability: 82, reason: "लाल माती पूरक सिंचनासह रब्बीमध्ये ज्वारीला आधार देऊ शकते.", tips: ["खोडमाशी नियंत्रित करा", "सेंद्रिय आच्छादन वापरा", "वेळेवर तण काढणे"] },
      Hindi: { crop: "ज्वार", suitability: 82, reason: "लाल मिट्टी पूरक सिंचाई के साथ रबी में ज्वार का समर्थन कर सकती है।", tips: ["शूट फ्लाई को नियंत्रित करें", "जैविक मल्च का प्रयोग करें", "समय पर निराई"] }
    }
  },
  alluvial: {
    kharif: {
      English: { crop: "Sugarcane", suitability: 92, reason: "Alluvial soil is rich in minerals and supports heavy sugarcane growth.", tips: ["Regular heavy irrigation", "Apply nitrogen-rich fertilizers", "Control shoot borer"] },
      Marathi: { crop: "ऊस", suitability: 92, reason: "गाळाची माती खनिजांनी समृद्ध असते आणि उसाच्या वाढीस मदत करते.", tips: ["नियमित भारी सिंचन करा", "नत्रयुक्त खतांचा वापर करा", "खोडकिडा नियंत्रित करा"] },
      Hindi: { crop: "गन्ना", suitability: 92, reason: "जलोढ़ मिट्टी खनिजों से भरपूर होती है और गन्ने की अच्छी वृद्धि में मदद करती है।", tips: ["नियमित भारी सिंचाई करें", "नाइट्रोजन युक्त उर्वरकों का प्रयोग करें", "शूट बोरर को नियंत्रित करें"] }
    },
    rabi: {
      English: { crop: "Onion", suitability: 90, reason: "Alluvial soil provides excellent texture for bulb development in winter.", tips: ["Maintain consistent moisture", "Control thrips", "Proper curing after harvest"] },
      Marathi: { crop: "कांदा", suitability: 90, reason: "गाळाची माती हिवाळ्यात कांद्याच्या वाढीसाठी उत्कृष्ट पोत प्रदान करते.", tips: ["सतत ओलावा राखा", "थ्रिप्स नियंत्रित करा", "काढणीनंतर योग्य क्युरिंग करा"] },
      Hindi: { crop: "प्याज", suitability: 90, reason: "जलोढ़ मिट्टी सर्दियों में कंद के विकास के लिए उत्कृष्ट बनावट प्रदान करती है।", tips: ["लगातार नमी बनाए रखें", "थ्रिप्स को नियंत्रित करें", "कटाई के बाद उचित क्योरिंग करें"] }
    }
  },
  laterite: {
    kharif: {
      English: { crop: "Mango", suitability: 85, reason: "Laterite soil in Konkan region is world-famous for Alphonso mangoes.", tips: ["Apply organic matter", "Manage irrigation in summer", "Prune regularly"] },
      Marathi: { crop: "आंबा", suitability: 85, reason: "कोकण भागातील जांभी माती हापूस आंब्यासाठी जगप्रसिद्ध आहे.", tips: ["सेंद्रिय पदार्थ टाका", "उन्हाळ्यात सिंचन व्यवस्थापन करा", "नियमित छाटणी करा"] },
      Hindi: { crop: "आम", suitability: 85, reason: "कोंकण क्षेत्र की लैटेराइट मिट्टी अल्फांसो आम के लिए विश्व प्रसिद्ध है।", tips: ["जैविक पदार्थ डालें", "गर्मियों में सिंचाई का प्रबंधन करें", "नियमित छंटाई करें"] }
    }
  }
};

const PEST_DIAGNOSIS: Record<string, Record<string, any>> = {
  cotton: {
    holes_in_leaves: {
      English: { pestName: "American Bollworm", severity: "High", chemicalSolution: "Spray Profenofos 50EC", organicSolution: "Use Neem oil spray (1500 ppm)" },
      Marathi: { pestName: "अमेरिकन बोंडअळी", severity: "जास्त", chemicalSolution: "प्रोफेनोफॉस ५० ईसी ची फवारणी करा", organicSolution: "निंबोळी अर्काचा वापर करा (१५०० पीपीएम)" },
      Hindi: { pestName: "अमेरिकन बोलवर्म", severity: "उच्च", chemicalSolution: "प्रोफेनोफोस 50EC का छिड़काव करें", organicSolution: "नीम के तेल के स्प्रे का उपयोग करें (1500 पीपीएम)" }
    },
    yellow_leaves: {
      English: { pestName: "Jassids", severity: "Medium", chemicalSolution: "Spray Imidacloprid 17.8 SL", organicSolution: "Use Yellow Sticky Traps" },
      Marathi: { pestName: "तुडतुडे", severity: "मध्यम", chemicalSolution: "इमिडाक्लोप्रिड १७.८ एसएल ची फवारणी करा", organicSolution: "पिवळे चिकट सापळे वापरा" },
      Hindi: { pestName: "जैसिड्स", severity: "मध्यम", chemicalSolution: "इमिडाक्लोप्रिड 17.8 SL का छिड़काव करें", organicSolution: "पीले चिपचिपे जाल का उपयोग करें" }
    }
  },
  soybean: {
    yellow_leaves: {
      English: { pestName: "Yellow Mosaic Virus", severity: "Medium", chemicalSolution: "Control Whiteflies with Thiamethoxam", organicSolution: "Use Yellow Sticky Traps" },
      Marathi: { pestName: "पिवळा मोझॅक व्हायरस", severity: "मध्यम", chemicalSolution: "थायमेथोक्समने पांढऱ्या माशीवर नियंत्रण मिळवा", organicSolution: "पिवळे चिकट सापळे वापरा" },
      Hindi: { pestName: "पीला मोज़ेक वायरस", severity: "मध्यम", chemicalSolution: "थियामेथोक्सम के साथ सफेद मक्खियों को नियंत्रित करें", organicSolution: "पीले चिपचिपे जाल का उपयोग करें" }
    },
    wilting: {
      English: { pestName: "Root Rot", severity: "High", chemicalSolution: "Drench with Carbendazim", organicSolution: "Apply Trichoderma viride to soil" },
      Marathi: { pestName: "मूळ कूज", severity: "जास्त", chemicalSolution: "कार्बेन्डाझिमने ड्रेंचिंग करा", organicSolution: "मातीत ट्रायकोडर्मा विरिडी टाका" },
      Hindi: { pestName: "जड़ सड़न", severity: "उच्च", chemicalSolution: "कार्बेन्डाजिम के साथ ड्रेंचिंग करें", organicSolution: "मिट्टी में ट्राइकोडर्मा विरिडी डालें" }
    }
  },
  grapes: {
    white_spots: {
      English: { pestName: "Powdery Mildew", severity: "High", chemicalSolution: "Spray Sulphur 80WP", organicSolution: "Spray Baking Soda solution" },
      Marathi: { pestName: "भुरी रोग", severity: "जास्त", chemicalSolution: "सल्फर ८० डब्ल्यूपी ची फवारणी करा", organicSolution: "बेकिंग सोडा द्रावणाची फवारणी करा" },
      Hindi: { pestName: "पाउडरी मिल्ड्यू", severity: "उच्च", chemicalSolution: "सल्फर 80WP का छिड़काव करें", organicSolution: "बेकिंग सोडा घोल का छिड़काव करें" }
    }
  },
  onion: {
    wilting: {
      English: { pestName: "Onion Thrips", severity: "Medium", chemicalSolution: "Spray Fipronil 5SC", organicSolution: "Use Blue Sticky Traps" },
      Marathi: { pestName: "कांद्यावरील फुलकिडे (थ्रिप्स)", severity: "मध्यम", chemicalSolution: "फिप्रोनिल ५ एससी ची फवारणी करा", organicSolution: "निळे चिकट सापळे वापरा" },
      Hindi: { pestName: "प्याज के थ्रिप्स", severity: "मध्यम", chemicalSolution: "फिप्रोनिल 5SC का छिड़काव करें", organicSolution: "नीले चिपचिपे जाल का उपयोग करें" }
    }
  }
};

const SCHEMES = [
  {
    id: 'pm_kisan',
    title: { English: "PM-Kisan Samman Nidhi", Marathi: "पीएम-किसान सन्मान निधी", Hindi: "पीएम-किसान सम्मान निधि" },
    desc: {
      English: "Direct income support of ₹6,000 per year provided in 3 equal installments of ₹2,000 each. Eligibility: All landholding farmer families with cultivable land in their name. Requirements: Aadhaar must be linked to bank account, and e-KYC must be completed via the portal or CSC. Benefits: Provides liquidity for purchasing seeds, fertilizers, and meeting immediate agricultural expenses.",
      Marathi: "दरवर्षी ६,००० रुपयांचे थेट उत्पन्न सहाय्य ३ समान हप्त्यांमध्ये (प्रत्येकी २,००० रुपये) दिले जाते. पात्रता: ज्यांच्या नावावर लागवडीयोग्य जमीन आहे अशी सर्व जमीनधारक शेतकरी कुटुंबे. आवश्यकता: आधार बँक खात्याशी जोडलेले असावे आणि पोर्टल किंवा CSC द्वारे e-KYC पूर्ण केलेले असावे.",
      Hindi: "प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता 3 समान किश्तों (प्रत्येक ₹2,000) में प्रदान की जाती है। पात्रता: सभी भूमिधारक किसान परिवार जिनके नाम पर कृषि योग्य भूमि है। आवश्यकताएँ: आधार बैंक खाते से जुड़ा होना चाहिए, और पोर्टल या सीएससी के माध्यम से ई-केवाईसी पूरा किया जाना चाहिए।"
    },
    link: "https://pmkisan.gov.in/",
    category: { English: "Income Support", Marathi: "उत्पन्न सहाय्य", Hindi: "आय सहायता" },
    icon: <Coins className="w-4 h-4" />
  },
  {
    id: 'pmfby',
    title: { English: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", Marathi: "प्रधानमंत्री पीक विमा योजना", Hindi: "प्रधानमंत्री फसल बीमा योजना" },
    desc: {
      English: "Comprehensive crop insurance against non-preventable natural risks. Premium: 2% for Kharif, 1.5% for Rabi, and 5% for commercial/horticulture crops. Coverage: Sowing failure, standing crop damage (cyclone, flood), and post-harvest losses (up to 14 days). Claims: Farmers must report damage within 72 hours via the Crop Insurance App.",
      Marathi: "नैसर्गिक जोखमींविरुद्ध सर्वसमावेशक पीक विमा. प्रीमियम: खरीप २%, रब्बी १.५%, आणि व्यावसायिक पिकांसाठी ५%. व्याप्ती: पेरणीतील अपयश, उभ्या पिकाचे नुकसान (चक्रीवादळ, पूर) आणि काढणीनंतरचे नुकसान (१४ दिवसांपर्यंत). दावे: शेतकऱ्यांनी ७२ तासांच्या आत पीक विमा ॲपद्वारे नुकसानीची तक्रार करणे आवश्यक आहे.",
      Hindi: "गैर-निवारणीय प्राकृतिक जोखिमों के खिलाफ व्यापक फसल बीमा। प्रीमियम: खरीफ के लिए 2%, रबी के लिए 1.5% और वाणिज्यिक फसलों के लिए 5%। कवरेज: बुवाई की विफलता, खड़ी फसल का नुकसान (चक्रवात, बाढ़), और कटाई के बाद का नुकसान (14 दिनों तक)। दावे: किसानों को फसल बीमा ऐप के माध्यम से 72 घंटों के भीतर नुकसान की सूचना देनी होगी।"
    },
    link: "https://pmfby.gov.in/",
    category: { English: "Insurance", Marathi: "विमा", Hindi: "बीमा" },
    icon: <ShieldCheck className="w-4 h-4" />
  },
  {
    id: 'mahadbt',
    title: { English: "MahaDBT Farmer Schemes", Marathi: "महाडीबीटी शेतकरी योजना", Hindi: "महाडीबीटी किसान योजना" },
    desc: {
      English: "A single portal for all Maharashtra state subsidies. Key components: 1) Farm Mechanization (subsidy for tractors/rotavators). 2) Irrigation (up to 80% subsidy for drip/sprinkler). 3) Horticulture. Process: Apply online, participate in the lottery, and upload documents (7/12, 8A, Aadhaar) after selection.",
      Marathi: "महाराष्ट्र राज्यातील सर्व अनुदानांसाठी एकच पोर्टल. मुख्य घटक: १) कृषी यांत्रिकीकरण (ट्रॅक्टर/रोटाव्हेटरसाठी अनुदान). २) सिंचन (ठिबक/तुषारसाठी ८०% पर्यंत अनुदान). ३) फलोत्पादन. प्रक्रिया: ऑनलाइन अर्ज करा, लॉटरीत सहभागी व्हा आणि निवडीनंतर कागदपत्रे अपलोड करा.",
      Hindi: "महाराष्ट्र राज्य की सभी सब्सिडी के लिए एक एकल पोर्टल। मुख्य घटक: 1) कृषि यंत्रीकरण (ट्रैक्टर/रोटावेटर के लिए सब्सिडी)। 2) सिंचाई (ड्रिप/स्प्रिंकलर के लिए 80% तक सब्सिडी)। 3) बागवानी। प्रक्रिया: ऑनलाइन आवेदन करें, लॉटरी में भाग लें, और चयन के बाद दस्तावेज अपलोड करें।"
    },
    link: "https://mahadbt.maharashtra.gov.in/",
    category: { English: "Subsidy", Marathi: "अनुदान", Hindi: "सब्सिडी" },
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: 'kusum',
    title: { English: "Kusum Yojana (Solar Pumps)", Marathi: "कुसुम योजना (सौर पंप)", Hindi: "कुसुम योजना (सौर पंप)" },
    desc: {
      English: "Installation of standalone solar pumps. Subsidy: 90% (Central 30%, State 60%) for general category, and 95% for SC/ST farmers. Pump sizes: 3HP, 5HP, and 7.5HP. Benefits: Reliable daytime power for irrigation, zero recurring electricity cost, and reduced carbon footprint.",
      Marathi: "स्वतंत्र सौर पंपांची स्थापना. अनुदान: सामान्य प्रवर्गासाठी ९०% (केंद्र ३०%, राज्य ६०%) आणि SC/ST शेतकऱ्यांसाठी ९५%. पंप आकार: ३HP, ५HP आणि ७.५HP. फायदे: सिंचनासाठी दिवसाची विश्वसनीय वीज, शून्य वीज खर्च आणि कार्बन उत्सर्जन कमी करणे.",
      Hindi: "स्टैंडअलोन सौर पंपों की स्थापना। सब्सिडी: सामान्य श्रेणी के लिए 90% (केंद्रीय 30%, राज्य 60%), और एससी/एसटी किसानों के लिए 95%। पंप आकार: 3HP, 5HP, और 7.5HP। लाभ: सिंचाई के लिए विश्वसनीय दिन की बिजली, शून्य बिजली लागत, और कार्बन फुटप्रिंट में कमी।"
    },
    link: "https://www.mahaurja.com/kusum-yojana",
    category: { English: "Energy", Marathi: "ऊर्जा", Hindi: "ऊर्जा" },
    icon: <Sun className="w-4 h-4" />
  },
  {
    id: 'pocra',
    title: { English: "PoCRA (Nanaji Deshmukh Krishi Sanjivani Prakalp)", Marathi: "पोकरा (नानाजी देशमुख कृषी संजीवनी प्रकल्प)", Hindi: "पोकरा (नानाजी देशमुख कृषि संजीवनी प्रकल्प)" },
    desc: {
      English: "Climate-resilient agriculture project for 15 districts in Marathwada and Vidarbha. Focus: Enhancing soil health, water security, and crop productivity. Supports: Individual benefits (farm ponds, pipes, motors) and community benefits. Funding: Direct Benefit Transfer (DBT) after verification.",
      Marathi: "मराठवाडा आणि विदर्भातील १५ जिल्ह्यांसाठी हवामान-अनुकूल कृषी प्रकल्प. लक्ष: जमिनीचे आरोग्य सुधारणे, पाणी सुरक्षा आणि पीक उत्पादकता. सहाय्य: वैयक्तिक लाभ (शेततळे, पाईप्स, मोटर्स) आणि सामूहिक लाभ. निधी: पडताळणीनंतर थेट लाभ हस्तांतरण (DBT).",
      Hindi: "मराठवाड़ा और विदर्भ के 15 जिलों के लिए जलवायु-अनुकूल कृषि परियोजना। फोकस: मिट्टी के स्वास्थ्य, जल सुरक्षा और फसल उत्पादकता को बढ़ाना। समर्थन: व्यक्तिगत लाभ (खेत तालाब, पाइप, मोटर) और सामुदायिक लाभ। वित्त पोषण: सत्यापन के बाद प्रत्यक्ष लाभ हस्तांतरण (DBT)।"
    },
    link: "https://pocra.maharashtra.gov.in/",
    category: { English: "Climate Resilience", Marathi: "हवामान अनुकूलता", Hindi: "जलवायु लचीलापन" },
    icon: <Sprout className="w-4 h-4" />
  },
  {
    id: 'shettale',
    title: { English: "Magel Tyala Shettale", Marathi: "मागेल त्याला शेततळे", Hindi: "मागेल त्याला खेत तालाब" },
    desc: {
      English: "Maharashtra state scheme providing financial assistance for farm ponds. Subsidy: Up to ₹50,000 for a 30x30x3 meter pond. Eligibility: Farmers with at least 0.60 hectares of land. Goal: To provide protective irrigation during dry spells.",
      Marathi: "शेततळ्यांसाठी आर्थिक सहाय्य देणारी महाराष्ट्र राज्य योजना. अनुदान: ३०x३०x३ मीटर तळ्यासाठी ५०,००० रुपयांपर्यंत. पात्रता: किमान ०.६० हेक्टर जमीन असलेले शेतकरी. ध्येय: पावसाळ्यातील कोरड्या कालावधीत पिकांना संरक्षित सिंचन देणे.",
      Hindi: "खेत तालाबों के लिए वित्तीय सहायता प्रदान करने वाली महाराष्ट्र राज्य योजना। सब्सिडी: 30x30x3 मीटर तालाब के लिए ₹50,000 तक। पात्रता: कम से कम 0.60 हेक्टेयर भूमि वाले किसान। लक्ष्य: शुष्क अवधि के दौरान सुरक्षात्मक सिंचाई प्रदान करना।"
    },
    link: "https://krishi.maharashtra.gov.in/",
    category: { English: "Water Conservation", Marathi: "जलसंधारण", Hindi: "जल संरक्षण" },
    icon: <Droplets className="w-4 h-4" />
  },
  {
    id: 'apghat',
    title: { English: "Gopinath Munde Shetkari Apghat Vima Yojana", Marathi: "गोपीनाथ मुंडे शेतकरी अपघात विमा योजना", Hindi: "गोपीनाथ मुंडे किसान दुर्घटना बीमा योजना" },
    desc: {
      English: "Accident insurance scheme for farmers in Maharashtra. Coverage: ₹2 Lakh for accidental death or permanent disability. Eligibility: All farmers aged 10 to 75 years whose names are on the 7/12 extract. No premium is charged to the farmer; the state government pays the full premium.",
      Marathi: "महाराष्ट्रातील शेतकऱ्यांसाठी अपघात विमा योजना. व्याप्ती: अपघाती मृत्यू किंवा कायमस्वरूपी अपंगत्वासाठी २ लाख रुपये. पात्रता: ७/१२ उताऱ्यावर नाव असलेले १० ते ७५ वर्षे वयोगटातील सर्व शेतकरी. शेतकऱ्याकडून कोणताही प्रीमियम आकारला जात नाही.",
      Hindi: "महाराष्ट्र में किसानों के लिए दुर्घटना बीमा योजना। कवरेज: आकस्मिक मृत्यु या स्थायी विकलांगता के लिए ₹2 लाख। पात्रता: 10 से 75 वर्ष की आयु के सभी किसान जिनका नाम 7/12 उद्धरण पर है। किसान से कोई प्रीमियम नहीं लिया जाता है।"
    },
    link: "https://krishi.maharashtra.gov.in/",
    category: { English: "Accident Insurance", Marathi: "अपघात विमा", Hindi: "दुर्घटना बीमा" },
    icon: <ShieldCheck className="w-4 h-4" />
  },
  {
    id: 'namo_shetkari',
    title: { English: "Namo Shetkari Mahasanman Nidhi Yojana", Marathi: "नमो शेतकरी महासन्मान निधी योजना", Hindi: "नमो शेतकरी महासम्मान निधि योजना" },
    desc: {
      English: "Maharashtra state's additional income support scheme. Benefits: ₹6,000 per year provided in 3 installments, in addition to PM-Kisan. Total benefit: Farmers in Maharashtra receive a total of ₹12,000 per year (₹6k PM-Kisan + ₹6k Namo Shetkari). Eligibility: All farmers eligible for PM-Kisan in Maharashtra.",
      Marathi: "महाराष्ट्र राज्याची अतिरिक्त उत्पन्न सहाय्य योजना. फायदे: पीएम-किसान व्यतिरिक्त वर्षाला ६,००० रुपये ३ हप्त्यांमध्ये दिले जातात. एकूण लाभ: महाराष्ट्रातील शेतकऱ्यांना वर्षाला एकूण १२,००० रुपये मिळतात (६ हजार पीएम-किसान + ६ हजार नमो शेतकरी). पात्रता: महाराष्ट्रातील पीएम-किसानसाठी पात्र असलेले सर्व शेतकरी.",
      Hindi: "महाराष्ट्र राज्य की अतिरिक्त आय सहायता योजना। लाभ: पीएम-किसान के अलावा प्रति वर्ष ₹6,000 3 किश्तों में प्रदान किए जाते हैं। कुल लाभ: महाराष्ट्र के किसानों को प्रति वर्ष कुल ₹12,000 मिलते हैं (6 हजार पीएम-किसान + 6 हजार नमो शेतकरी)। पात्रता: महाराष्ट्र में पीएम-किसान के लिए पात्र सभी किसान।"
    },
    link: "https://nsmn.maharashtra.gov.in/",
    category: { English: "Income Support", Marathi: "उत्पन्न सहाय्य", Hindi: "आय सहायता" },
    icon: <Coins className="w-4 h-4" />
  }
];

// --- Context Setup ---
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translation) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('English');
  const t = (key: keyof Translation) => translations[language][key] || key;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

// --- Components ---

const MarketPricesCard = () => {
  const { t, language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState(DISTRICTS[0].English);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-slate-900 dark:text-white font-black text-2xl flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-500" />
          </div>
          {t('marketPrices')}
        </h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('district')}</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            {DISTRICTS.map((d) => (
              <option key={d.English} value={d.English}>{d[language]}</option>
            ))}
          </select>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {MOCK_MARKET_PRICES.map((item, idx) => (
            <div key={idx} className="py-4 flex items-center justify-between first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.commodity[language]}</p>
                <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">
                  {DISTRICTS.find(d => d.English === selectedCity)?.[language] || selectedCity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-blue-600 dark:text-blue-400">₹{item.price}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{t('per')} {t('quintal')}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium text-center italic">
            {t('marketDisclaimer')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CropAdvisorCard = () => {
  const { t, language } = useLanguage();
  const [district, setDistrict] = useState(DISTRICTS[0].English);
  const [soil, setSoil] = useState('');
  const [season, setSeason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleGetRecommendation = async () => {
    if (!soil || !season || !district) return;
    setLoading(true);
    setError(null);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      const result = CROP_RECOMMENDATIONS[soil]?.[season]?.[language] || 
                    CROP_RECOMMENDATIONS['black']?.['kharif']?.[language]; // Fallback
      
      setRecommendation(result);
    } catch (err: any) {
      console.error("Error getting recommendation:", err);
      setError(t('errorRecommendation'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800"
    >
      <h3 className="text-slate-900 dark:text-white font-black text-2xl flex items-center gap-3 mb-8">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <Sprout className="w-6 h-6 text-emerald-500" />
        </div>
        {t('cropAdvisor')}
      </h3>
      
      {error && (
        <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-2xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <p className="text-xs font-bold text-rose-600 dark:text-rose-400 leading-relaxed">{error}</p>
        </div>
      )}

      {!recommendation ? (
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('district')}</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            >
              {DISTRICTS.map((d) => (
                <option key={d.English} value={d.English}>{d[language]}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('soilType')}</label>
            <select
              value={soil}
              onChange={(e) => setSoil(e.target.value)}
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            >
              <option value="">{t('selectSoil')}</option>
              {SOIL_TYPES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.icon} {s.label[language]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('season')}</label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            >
              <option value="">{t('season')}</option>
              {SEASONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.icon} {s.label[language]}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleGetRecommendation} disabled={loading || !soil || !season || !district} className="w-full py-5 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95">
            {loading ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t('loading')}</> : <><Search className="w-5 h-5" />{t('getRecommendation')}</>}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-8 bg-white dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <Sprout className="w-10 h-10 text-emerald-500" />
            </div>
            <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{recommendation.crop}</h4>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest">
              {recommendation.suitability}% {t('match')}
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">"{recommendation.reason}"</p>
          </div>
          <div className="space-y-3">
            {recommendation.tips.map((tip: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          <button onClick={() => { setSoil(''); setSeason(''); setRecommendation(null); }} className="w-full py-4 text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.3em] hover:text-emerald-500 transition-colors flex items-center justify-center gap-2">
            <X className="w-4 h-4" />{t('clear')}
          </button>
        </div>
      )}
    </motion.div>
  );
};

const PestDetectorCard = () => {
  const { t, language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState(DISTRICTS[0].English);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzeSymptoms = async () => {
    if (!selectedCrop || !selectedSymptom || !selectedCity) return;
    setLoading(true);
    setError(null);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    try {
      const result = PEST_DIAGNOSIS[selectedCrop]?.[selectedSymptom]?.[language] || {
        English: { pestName: "Unknown Condition", severity: "Low", chemicalSolution: "Consult local expert", organicSolution: "Maintain soil health" },
        Marathi: { pestName: "अज्ञात स्थिती", severity: "कमी", chemicalSolution: "स्थानिक तज्ञाचा सल्ला घ्या", organicSolution: "मातीचे आरोग्य राखा" },
        Hindi: { pestName: "अज्ञात स्थिति", severity: "कम", chemicalSolution: "स्थानीय विशेषज्ञ से परामर्श करें", organicSolution: "मिट्टी का स्वास्थ्य बनाए रखें" }
      }[language];
      
      setAnalysis(result);
    } catch (err: any) {
      console.error("Pest analysis failed:", err);
      setError(t('errorAnalysis'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800"
    >
      <h3 className="text-slate-900 dark:text-white font-black text-2xl flex items-center gap-3 mb-8">
        <div className="p-2 bg-rose-500/10 rounded-lg">
          <Bug className="w-6 h-6 text-rose-500" />
        </div>
        {t('pestDetector')}
      </h3>

      {error && (
        <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-2xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <p className="text-xs font-bold text-rose-600 dark:text-rose-400 leading-relaxed">{error}</p>
        </div>
      )}

      {!analysis ? (
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('district')}</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            >
              {DISTRICTS.map((d) => (
                <option key={d.English} value={d.English}>{d[language]}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('selectCrop')}</label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            >
              <option value="">{t('selectCrop')}</option>
              {CROPS.map((crop) => (
                <option key={crop.id} value={crop.id}>
                  {crop.icon} {crop.label[language]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('selectSymptom')}</label>
            <select
              value={selectedSymptom}
              onChange={(e) => setSelectedSymptom(e.target.value)}
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            >
              <option value="">{t('selectSymptom')}</option>
              {SYMPTOMS.map((symptom) => (
                <option key={symptom.id} value={symptom.id}>
                  {symptom.icon} {symptom.label[language]}
                </option>
              ))}
            </select>
          </div>
          <button onClick={analyzeSymptoms} disabled={loading || !selectedCrop || !selectedSymptom} className="w-full py-5 bg-rose-600 text-white font-black rounded-2xl shadow-xl shadow-rose-600/20 hover:bg-rose-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95">
            {loading ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t('loading')}</> : <><Search className="w-5 h-5" />{t('analyze')}</>}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white">{analysis.pestName}</h4>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">{t('diagnosisResult')}</p>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                analysis.severity === 'High' ? 'bg-rose-500/10 text-rose-500' : 
                analysis.severity === 'Medium' ? 'bg-amber-500/10 text-amber-500' : 
                'bg-emerald-500/10 text-emerald-500'
              }`}>
                {analysis.severity === 'High' ? t('high') : analysis.severity === 'Medium' ? t('medium') : t('low')} {t('risk')}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h5 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />{t('chemicalSolution')}
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{analysis.chemicalSolution}</p>
            </div>
            <div className="p-6 bg-emerald-600 text-white rounded-2xl shadow-xl shadow-emerald-600/20">
              <h5 className="text-[10px] font-black text-emerald-200 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />{t('organic')}
              </h5>
              <p className="text-sm text-emerald-50 leading-relaxed font-bold">{analysis.organicSolution}</p>
            </div>
          </div>
          <button onClick={() => { setAnalysis(null); setSelectedCrop(''); setSelectedSymptom(''); }} className="w-full py-4 text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.3em] hover:text-emerald-500 transition-colors flex items-center justify-center gap-2">
            <X className="w-4 h-4" />{t('clear')}
          </button>
        </div>
      )}
    </motion.div>
  );
};

const IrrigationPlannerCard = () => {
  const { t, language } = useLanguage();
  const [area, setArea] = useState('1');
  const [cropType, setCropType] = useState('medium');
  const [soilType, setSoilType] = useState('loamy');
  const [method, setMethod] = useState('drip');

  // Base water need per acre per week
  const baseNeed = cropType === 'high' ? 5000 : cropType === 'medium' ? 3000 : 1500;
  
  // Soil multiplier (Sandy needs more, Clayey needs less)
  const soilMultiplier = soilType === 'sandy' ? 1.2 : soilType === 'clayey' ? 0.8 : 1.0;
  
  // Method multiplier (Drip is efficient, Flood is wasteful)
  const methodMultiplier = method === 'drip' ? 0.7 : method === 'sprinkler' ? 0.9 : 1.3;

  const waterNeed = Math.round(parseFloat(area || '0') * baseNeed * soilMultiplier * methodMultiplier);

  const tips = {
    English: [
      "Use mulch to reduce evaporation by up to 25%.",
      "Water during early morning or late evening to minimize loss.",
      "Regularly check drip lines for leaks or clogs."
    ],
    Marathi: [
      "बाष्पीभवन २५% पर्यंत कमी करण्यासाठी आच्छादनाचा (mulch) वापर करा.",
      "पाण्याचे नुकसान कमी करण्यासाठी पहाटे किंवा उशिरा संध्याकाळी पाणी द्या.",
      "गळती किंवा अडथळ्यांसाठी ठिबक संचाची नियमित तपासणी करा."
    ],
    Hindi: [
      "वाष्पीकरण को 25% तक कम करने के लिए मल्च का उपयोग करें।",
      "नुकसान कम करने के लिए सुबह जल्दी या देर शाम को पानी दें।",
      "लीक या रुकावट के लिए ड्रिप लाइनों की नियमित जांच करें।"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800"
    >
      <h3 className="text-slate-900 dark:text-white font-black text-2xl flex items-center gap-3 mb-8">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Droplets className="w-6 h-6 text-cyan-500" />
        </div>
        {t('irrigation')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('farmArea')} ({t('acres')})</label>
            <input 
              type="number" 
              value={area} 
              onChange={(e) => setArea(e.target.value)} 
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm" 
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('cropCategory')}</label>
            <select 
              value={cropType} 
              onChange={(e) => setCropType(e.target.value)} 
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            >
              <option value="low">{t('lowWater')}</option>
              <option value="medium">{t('mediumWater')}</option>
              <option value="high">{t('highWater')}</option>
            </select>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('soilType')}</label>
            <select 
              value={soilType} 
              onChange={(e) => setSoilType(e.target.value)} 
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            >
              <option value="sandy">{t('sandySoil')}</option>
              <option value="loamy">{t('loamySoil')}</option>
              <option value="clayey">{t('clayeySoil')}</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">{t('irrigationMethod')}</label>
            <select 
              value={method} 
              onChange={(e) => setMethod(e.target.value)} 
              className="w-full p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 font-bold outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            >
              <option value="drip">{t('dripIrrigation')}</option>
              <option value="sprinkler">{t('sprinklerIrrigation')}</option>
              <option value="flood">{t('floodIrrigation')}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-8 bg-cyan-600 text-white rounded-3xl shadow-xl shadow-cyan-600/20 flex flex-col justify-center items-center text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2">{t('waterNeed')}</p>
          <p className="text-6xl font-black">{waterNeed.toLocaleString()} <span className="text-2xl">L</span></p>
          <p className="text-[10px] font-bold mt-2 opacity-80 tracking-widest">{t('litersPerWeek')}</p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
          <h4 className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" /> {t('waterSavingTips')}
          </h4>
          <ul className="space-y-3">
            {tips[language].map((tip, i) => (
              <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed flex gap-2">
                <span className="text-cyan-500">•</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const AgroSchemesCard = () => {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-slate-900 dark:text-white font-black text-2xl flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg">
            <FileText className="w-6 h-6 text-amber-500" />
          </div>
          {t('agroSchemes')}
        </h3>
        <span className="text-[10px] font-black bg-amber-500/10 text-amber-600 px-3 py-1.5 rounded-full uppercase tracking-widest">{t('latest')}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SCHEMES.map((scheme) => (
          <a 
            key={scheme.id} 
            href={scheme.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group p-6 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-lg transition-all shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {scheme.icon}
            </div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/5 px-2 py-1 rounded-md">
                {scheme.category[language]}
              </span>
              <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="font-black text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2 leading-tight">
              {scheme.title[language]}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
              {scheme.desc[language]}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  {t('active')}
                </span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 group-hover:text-amber-500 transition-colors">
                {t('viewMore')} →
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <a 
          href="https://agricoop.nic.in/en/Major_Schemes" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-emerald-600 transition-colors uppercase tracking-[0.2em]"
        >
          {t('viewAllSchemes')} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

const SoilHealthCard = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800"
    >
      <h3 className="text-slate-900 dark:text-white font-black text-2xl flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <FlaskConical className="w-6 h-6 text-indigo-500" />
        </div>
        {t('soilHealth')}
      </h3>
      <div className="space-y-4">
        {t('soilTips').map((tip, idx) => (
          <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="mt-1 p-1 bg-indigo-500/10 rounded-md">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// --- App Content ---
function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTool]);

  const tools = [
    { id: 'advisor', name: t('cropAdvisor'), icon: <Sprout className="w-8 h-8" />, color: 'bg-emerald-500', component: <CropAdvisorCard /> },
    { id: 'pest', name: t('pestDetector'), icon: <Bug className="w-8 h-8" />, color: 'bg-rose-500', component: <PestDetectorCard /> },
    { id: 'irrigation', name: t('irrigation'), icon: <Droplets className="w-8 h-8" />, color: 'bg-cyan-500', component: <IrrigationPlannerCard /> },
    { id: 'schemes', name: t('agroSchemes'), icon: <FileText className="w-8 h-8" />, color: 'bg-amber-500', component: <AgroSchemesCard /> },
    { id: 'soil', name: t('soilHealth'), icon: <FlaskConical className="w-8 h-8" />, color: 'bg-indigo-500', component: <SoilHealthCard /> },
    { id: 'market', name: t('marketPrices'), icon: <TrendingUp className="w-8 h-8" />, color: 'bg-blue-500', component: <MarketPricesCard /> },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#10b98115,transparent)] pointer-events-none" />
      <header className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTool(null)}>
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white leading-none">{t('title')}</h1>
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">{t('subtitle')}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="hidden sm:block bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="English">English (EN)</option>
              <option value="Marathi">Marathi (MR)</option>
              <option value="Hindi">Hindi (HI)</option>
            </select>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="wait">
          {!activeTool ? (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-10"
            >
              {/* New Header Section */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                    {t('welcomeFarmer')}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                    {t('dashboardTitle')}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium mt-2 max-w-xl">
                    {t('dashboardSubtitle')}
                  </p>
                </div>
              </div>

              {/* Tools Grid */}
              <div id="tools-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <motion.button
                    key={tool.id}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTool(tool.id)}
                    className="group relative flex flex-col items-start p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:border-emerald-500/50 dark:hover:border-emerald-500/50 overflow-hidden text-left"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 ${tool.color} opacity-[0.03] rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150`} />
                    <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl transition-transform group-hover:scale-110`}>
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-3 group-hover:text-emerald-600 transition-colors">{tool.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      {tool.id === 'market' && t('marketDesc')}
                      {tool.id === 'advisor' && t('advisorDesc')}
                      {tool.id === 'pest' && t('pestDesc')}
                      {tool.id === 'irrigation' && t('irrigationDesc')}
                      {tool.id === 'schemes' && t('schemesDesc')}
                      {tool.id === 'soil' && t('soilDesc')}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                      {t('openTool')} <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tool-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto"
            >
              <button 
                onClick={() => setActiveTool(null)}
                className="flex items-center gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-8 hover:text-emerald-500 transition-colors"
              >
                <X className="w-4 h-4" /> {t('backToDashboard')}
              </button>
              {tools.find(t => t.id === activeTool)?.component}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 text-center border-t border-slate-200 dark:border-slate-900 mt-12">
        <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">© 2026 Smart Farming Maharashtra</p>
      </footer>
    </div>
  );
}

// --- Root Component ---
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
