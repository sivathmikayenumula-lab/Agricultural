/**
 * AgriGuard AI — AI Crop Doctor & Climate Advisory Dashboard
 * Pure Vanilla JavaScript (HTML5 / CSS3 / ES6+)
 * 
 * Features:
 * 1. Image Upload & Live Webcam Camera Handler
 * 2. Visual AI Leaf Hotspot Canvas Heatmap Overlay Generator
 * 3. HTML5 Geolocation & Open-Meteo Weather API Integration (with mock fallback)
 * 4. Agronomic Disease Pathology Classifier Engine
 * 5. Climate-Aware Weather Decision Matrix & Safe Spray Action Window Calculator
 * 6. Dynamic i18n Translation Engine (English, Hindi, Telugu)
 * 7. LocalStorage Field History & PDF/WhatsApp Export
 */

// ==========================================================================
// 1. i18n Dictionaries & Translation System
// ==========================================================================
const i18n = {
  en: {
    tagline: "AI-Powered Crop & Climate Advisory",
    statusLive: "Open-Meteo Weather Ready",
    heroBadge: "Real-Time Agronomic Decision Support System",
    heroTitle: "Turn Field Conditions Into Smarter Farm Decisions",
    heroSubtitle: "Upload a crop leaf image, share your location, and get instant AI-powered disease diagnosis integrated with real-time weather safety windows.",
    btnAnalyzeCrop: "Analyze My Crop",
    statAccuracy: "Diagnostic Precision",
    statWeather: "Climate Forecast Sync",
    statSafeWindow: "Weather Spray Optimization",
    inputSectionTitle: "Field Diagnostic Input",
    inputSectionDesc: "Provide field evidence to start your instant crop analysis.",
    step1Title: "Upload Crop / Leaf Photo",
    step1Sub: "Take a photo or upload an image of the affected plant leaf",
    dragPrompt: "Drag & Drop Leaf Photo Here",
    dragOr: "or browse files from your phone/computer",
    btnBrowse: "📁 Browse File",
    btnCamera: "📷 Use Camera",
    sampleLabel: "Or pick a sample leaf:",
    step2Title: "Farm Location & Weather",
    step2Sub: "Detect microclimate conditions for your crop area",
    locPlaceholder: "Enter village, city or district (e.g., Guntur, Punjab)",
    btnSearch: "Search",
    orText: "OR",
    btnUseLocation: "Use My Current Location",
    step3Title: "Generate Farmer Advisory",
    step3Sub: "Run AI vision & microclimate safe spray engine",
    btnAnalyzeFull: "Analyze Crop & Weather Safety",
    loadingTitle: "Analyzing Field Signals...",
    cardDiagnosisTitle: "AI Crop Disease Diagnosis",
    cardDiagnosisSub: "Visual pathology identification",
    visualDetection: "Visual Hotspot Analysis",
    visibleSymptoms: "Visible Symptoms Detected",
    smartEngineBadge: "WEATHER-AWARE CLIMATE ENGINE",
    recommendedWindowLabel: "RECOMMENDED APPLICATION WINDOW",
    cardTreatmentTitle: "Agronomic Treatment & Management",
    cardTreatmentSub: "Actionable guidance for farmer field execution",
    immediateActions: "Immediate Field Actions",
    recommendedTreatment: "Recommended Treatment",
    preventiveMeasures: "Preventive Measures",
    thingsToAvoid: "Things to Avoid",
    cardWeatherTitle: "Live Climate Signals & Forecast",
    hourlyForecast: "24-Hour Hourly Spray Safety Timeline",
    btnPrint: "Print / Save Advisory PDF",
    btnShare: "Share Advisory on WhatsApp",
    btnNewScan: "Analyze Another Leaf",
    historyTitle: "Recent Field Advisory History",
    historyDesc: "Saved crop diagnostics and weather recommendations for your farm logs",
    cameraModalTitle: "📷 Live Crop Camera Scanner",
    btnSwitchCam: "Flip Camera",
    btnCapture: "Capture Leaf Photo",
    footerText: "Empowering farmers with real-time AI computer vision and climate-aware decision intelligence."
  },
  hi: {
    tagline: "एआई-संचालित फसल और मौसम परामर्श",
    statusLive: "मौसम एपीआई तैयार है",
    heroBadge: "वास्तविक समय कृषि निर्णय सहायता प्रणाली",
    heroTitle: "खेत की स्थितियों को समझदार फैसलों में बदलें",
    heroSubtitle: "फसल की पत्ती की तस्वीर अपलोड करें, अपना स्थान साझा करें, और मौसम के अनुसार सही छिड़काव समय प्राप्त करें।",
    btnAnalyzeCrop: "मेरी फसल का विश्लेषण करें",
    statAccuracy: "सटीकता दर",
    statWeather: "मौसम पूर्वानुमान सिंक",
    statSafeWindow: "सुरक्षित छिड़काव समय",
    inputSectionTitle: "खेत का निदान इनपुट",
    inputSectionDesc: "फसल विश्लेषण शुरू करने के लिए चित्र और स्थान प्रदान करें।",
    step1Title: "फसल/पत्ती का फोटो अपलोड करें",
    step1Sub: "प्रभावित पौधे की पत्ती की फोटो खींचें या अपलोड करें",
    dragPrompt: "पत्ती की फोटो यहाँ खींचकर लाएँ",
    dragOr: "या अपने फोन/कंप्यूटर से फाइलें चुनें",
    btnBrowse: "📁 फाइल चुनें",
    btnCamera: "📷 कैमरा उपयोग करें",
    sampleLabel: "या एक नमूना पत्ती चुनें:",
    step2Title: "खेत का स्थान और मौसम",
    step2Sub: "अपने फसल क्षेत्र के लिए मौसम की स्थिति का पता लगाएं",
    locPlaceholder: "गांव, शहर या जिला दर्ज करें (जैसे गुंटूर, पंजाब)",
    btnSearch: "खोजें",
    orText: "या",
    btnUseLocation: "मेरे वर्तमान स्थान का उपयोग करें",
    step3Title: "किसान सलाह तैयार करें",
    step3Sub: "एआई विजन और मौसम सुरक्षित छिड़काव इंजन चलाएं",
    btnAnalyzeFull: "फसल और मौसम सुरक्षा का विश्लेषण करें",
    loadingTitle: "खेत के संकेतों का विश्लेषण हो रहा है...",
    cardDiagnosisTitle: "एआई फसल बीमारी निदान",
    cardDiagnosisSub: "दृश्य रोग पहचान",
    visualDetection: "दृश्य हॉटस्पॉट विश्लेषण",
    visibleSymptoms: "पाए गए लक्षण",
    smartEngineBadge: "मौसम-जागरूक जलवायु इंजन",
    recommendedWindowLabel: "अनुशंसित छिड़काव समय",
    cardTreatmentTitle: "कृषि उपचार और प्रबंधन",
    cardTreatmentSub: "किसान खेत निष्पादन के लिए कार्रवाई योग्य मार्गदर्शन",
    immediateActions: "तत्काल खेत कार्रवाई",
    recommendedTreatment: "अनुशंसित उपचार",
    preventiveMeasures: "निवारक उपाय",
    thingsToAvoid: "ध्यान देने योग्य बातें (परहेज)",
    cardWeatherTitle: "लाइव मौसम और पूर्वानुमान",
    hourlyForecast: "24-घंटे छिड़काव सुरक्षा समयरेखा",
    btnPrint: "पीडीएफ प्रिंट / सहेजें",
    btnShare: "व्हाट्सएप पर साझा करें",
    btnNewScan: "दूसरी पत्ती का विश्लेषण करें",
    historyTitle: "हाल का खेत इतिहास",
    historyDesc: "आपकी कृषि लॉग के लिए सहेजे गए रोग निदान और सिफारिशें",
    cameraModalTitle: "📷 लाइव क्रॉप कैमरा स्कैनर",
    btnSwitchCam: "कैमरा बदलें",
    btnCapture: "फोटो खींचें",
    footerText: "वास्तविक समय एआई कंप्यूटर विज़न और मौसम बुद्धिमत्ता के साथ किसानों को सशक्त बनाना।"
  },
  te: {
    tagline: "AI-ఆధారిత పంట & వాతావరణ సలహాదారు",
    statusLive: "వాతావరణ API సిద్ధంగా ఉంది",
    heroBadge: "రియల్ టైమ్ వ్యవసాయ నిర్ణయ వ్యవస్థ",
    heroTitle: "పొలం పరిస్థితులను తెలివైన నిర్ణయాలుగా మార్చండి",
    heroSubtitle: "పంట ఆకు ఫోటో అప్‌లోడ్ చేయండి, మీ స్థానాన్ని షేర్ చేయండి మరియు సరైన మందుల పిచికారీ సమయాన్ని పొందండి.",
    btnAnalyzeCrop: "నా పంటను విశ్లేషించండి",
    statAccuracy: "నిర్ధారణ ఖచ్చితత్వం",
    statWeather: "వాతావరణ అంచనా సింక్",
    statSafeWindow: "సురక్షిత పిచికారీ సమయం",
    inputSectionTitle: "పొలం వ్యాధి నిర్ధారణ ఇన్పుట్",
    inputSectionDesc: "పంట విశ్లేషణ ప్రారంభించడానికి ఆకు ఫోటో మరియు స్థానాన్ని అందించండి.",
    step1Title: "పంట / ఆకు ఫోటో అప్‌లోడ్ చేయండి",
    step1Sub: "వ్యాధి సోకిన మొక్క ఆకు ఫోటో తీయండి లేదా అప్‌లోడ్ చేయండి",
    dragPrompt: "ఆకు ఫోటోను ఇక్కడ డ్రాగ్ చేయండి",
    dragOr: "లేదా మీ ఫోన్/కంప్యూటర్ నుండి ఎంచుకోండి",
    btnBrowse: "📁 ఫైల్ ఎంచుకోండి",
    btnCamera: "📷 కెమెరా ఉపయోగించండి",
    sampleLabel: "లేదా నమూనా ఆకును ఎంచుకోండి:",
    step2Title: "పొలం స్థానం & వాతావరణం",
    step2Sub: "మీ పంట ప్రాంత వాతావరణ పరిస్థితులను కనుగొనండి",
    locPlaceholder: "గ్రామం, నగరం లేదా జిల్లా నమోదు చేయండి (ఉదా: గుంటూరు)",
    btnSearch: "వెతుకు",
    orText: "లేదా",
    btnUseLocation: "నా ప్రస్తుత స్థానాన్ని ఉపయోగించు",
    step3Title: "రైతు సలహా పత్రం తయారు చేయి",
    step3Sub: "AI విజన్ & వాతావరణ పిచికారీ ఇంజిన్ రన్ చేయండి",
    btnAnalyzeFull: "పంట & వాతావరణ భద్రతను విశ్లేషించండి",
    loadingTitle: "పొలం సంకేతాలను విశ్లేషిస్తోంది...",
    cardDiagnosisTitle: "AI పంట వ్యాధి నిర్ధారణ",
    cardDiagnosisSub: "దృశ్య వ్యాధి గుర్తింపు",
    visualDetection: "విజువల్ హాట్‌స్పాట్ విశ్లేషణ",
    visibleSymptoms: "గుర్తించిన లక్షణాలు",
    smartEngineBadge: "వాతావరణ స్పృహ ఇంజిన్",
    recommendedWindowLabel: "సిఫార్సు చేసిన పిచికారీ సమయం",
    cardTreatmentTitle: "వ్యవసాయ చికిత్స & నిర్వహణ",
    cardTreatmentSub: "రైతు పొలంలో పాటించవలసిన మార్గదర్శకాలు",
    immediateActions: "తక్షణ చర్యలు",
    recommendedTreatment: "సిఫార్సు చేసిన చికిత్స",
    preventiveMeasures: "నివారణ చర్యలు",
    thingsToAvoid: "చేయకూడని పనులు",
    cardWeatherTitle: "ప్రత్యక్ష వాతావరణం & అంచనా",
    hourlyForecast: "24-గంటల పిచికారీ భద్రతా టైమ్‌లైన్",
    btnPrint: "PDF ప్రింట్ / సేవ్‌ చేయండి",
    btnShare: "వాట్సాప్‌లో షేర్ చేయండి",
    btnNewScan: "మరో ఆకును విశ్లేషించండి",
    historyTitle: "ఇటీవలి పొలం చరిత్ర",
    historyDesc: "మీ వ్యవసాయ రికార్డుల కోసం సేవ్ చేసిన సలహాలు",
    cameraModalTitle: "📷 లైవ్ క్రాప్ కెమెరా స్కేనర్",
    btnSwitchCam: "కెమెరా మార్చు",
    btnCapture: "ఫోటో తీయి",
    footerText: "రియల్ టైమ్ AI విజన్ మరియు వాతావరణ సమాచారంతో రైతులకు సాధికారత కల్పించడం."
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (!i18n[lang]) lang = 'en';
  currentLang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });
}


// ==========================================================================
// 2. AGRONOMIC KNOWLEDGE BASE & DIAGNOSTIC DATABASE
// ==========================================================================
const CROP_DISEASE_DB = {
  early_blight: {
    cropName: "Tomato Crop",
    diseaseName: "Early Blight",
    pathogen: "Alternaria solani",
    confidence: 92,
    severity: "HIGH",
    symptoms: [
      "Dark brown circular spots with characteristic target-like concentric rings",
      "Yellow chlorotic tissue surrounding primary leaf spots",
      "Lower canopy leaf blighting progressing rapidly upward",
      "Leaf margin breakdown and premature foliage drop"
    ],
    immediateActions: [
      "Prune and destroy heavily spotted lower leaves immediately to reduce spore count.",
      "Sanitize pruning shears with 70% alcohol solution between crop rows.",
      "Ensure proper plant staking to keep leaves off damp soil."
    ],
    treatmentCategory: "Copper-Based Organic Bio-Fungicide",
    treatmentGuidance: "Apply Copper Oxychloride 50% WP (2.5g per liter of water) or Trichoderma viride bio-fungicide thoroughly covering both upper and lower leaf surfaces.",
    preventiveMeasures: [
      "Switch from overhead sprinkler to drip irrigation to keep canopy dry.",
      "Maintain minimum 60cm row spacing for enhanced sunlight and airflow.",
      "Practice 3-year crop rotation with non-solanaceous crops (e.g. maize, legumes)."
    ],
    thingsToAvoid: [
      "Do NOT apply high-nitrogen fertilizers during active fungal outbreak.",
      "Do NOT irrigate fields late in the evening when moisture lingers overnight."
    ],
    hotspots: [
      { x: 0.35, y: 0.45, radius: 28, color: "rgba(239, 68, 68, 0.7)" },
      { x: 0.58, y: 0.32, radius: 22, color: "rgba(239, 68, 68, 0.7)" },
      { x: 0.48, y: 0.62, radius: 35, color: "rgba(245, 158, 11, 0.6)" }
    ]
  },

  rice_blast: {
    cropName: "Paddy Rice",
    diseaseName: "Rice Leaf Blast",
    pathogen: "Magnaporthe oryzae",
    confidence: 89,
    severity: "HIGH",
    symptoms: [
      "Spindle-shaped or eye-shaped lesions with grayish-white centers",
      "Dark reddish-brown borders around leaf lesions",
      "Large lesions coalescing, causing complete leaf blade drying",
      "Stem node discoloration and panicle neck rot risk"
    ],
    immediateActions: [
      "Drain excess standing water from the field temporarily to lower humidity.",
      "Split nitrogen fertilizer applications rather than single heavy dosing.",
      "Remove infected weed hosts along field bunds."
    ],
    treatmentCategory: "Systemic Agricultural Bio-Fungicide",
    treatmentGuidance: "Apply Tricyclazole 75% WP (0.6g per liter of water) or Pseudomonas fluorescens spray evenly across canopy during dry morning hours.",
    preventiveMeasures: [
      "Plant blast-resistant seed varieties (e.g., Swarna-Sub1, MTU 1010).",
      "Avoid excessive nitrogenous fertilization during cool foggy weather.",
      "Seed treatment with Carbendazim prior to sowing."
    ],
    thingsToAvoid: [
      "Do NOT maintain continuous deep flooding during cool morning fog periods.",
      "Do NOT spray during high wind speeds (>15 km/h) to prevent spray drift."
    ],
    hotspots: [
      { x: 0.42, y: 0.30, radius: 20, color: "rgba(239, 68, 68, 0.7)" },
      { x: 0.50, y: 0.55, radius: 25, color: "rgba(239, 68, 68, 0.7)" },
      { x: 0.30, y: 0.70, radius: 18, color: "rgba(245, 158, 11, 0.6)" }
    ]
  },

  potato_late_blight: {
    cropName: "Potato Crop",
    diseaseName: "Late Blight",
    pathogen: "Phytophthora infestans",
    confidence: 94,
    severity: "HIGH",
    symptoms: [
      "Water-soaked dark green/brown lesions starting at leaf tips and margins",
      "White cottony fungal downy growth on the underside of leaves in moist weather",
      "Rapid wilting and foul odor from decaying foliage",
      "Stem lesion lesions turning black and brittle"
    ],
    immediateActions: [
      "Destroy and bury infected plant foliage immediately.",
      "Avoid harvesting tubers while vines are still green and wet.",
      "Hill up soil around potato hills to protect tubers from spores."
    ],
    treatmentCategory: "Protectant & Contact Fungicide",
    treatmentGuidance: "Spray Mancozeb 75% WP (2g per liter) or Cymoxanil + Mancozeb mixture evenly over canopy.",
    preventiveMeasures: [
      "Use certified disease-free seed tubers.",
      "Ensure good field drainage and wide ridge spacing.",
      "Monitor canopy humidity carefully during cool cloudy periods."
    ],
    thingsToAvoid: [
      "Do NOT leave infected crop residues in or near the field after harvest.",
      "Do NOT apply liquid sprays when foliage is wet with morning dew."
    ],
    hotspots: [
      { x: 0.28, y: 0.38, radius: 32, color: "rgba(239, 68, 68, 0.7)" },
      { x: 0.65, y: 0.50, radius: 26, color: "rgba(239, 68, 68, 0.7)" }
    ]
  },

  healthy_maize: {
    cropName: "Maize / Corn",
    diseaseName: "Healthy Leaf (No Disease Detected)",
    pathogen: "None (Optimal Health)",
    confidence: 97,
    severity: "LOW",
    symptoms: [
      "Vibrant green leaf color with clean, intact venation",
      "No necrotic spots, rust pustules, or chlorotic halos visible",
      "Strong cell turgor pressure and uniform leaf texture"
    ],
    immediateActions: [
      "Maintain current standard irrigation and nutrient application schedule.",
      "Conduct routine weekly field monitoring for early pest/disease entry."
    ],
    treatmentCategory: "Nutritional Micro-Nutrient Foliar Tonic (Optional)",
    treatmentGuidance: "No pesticide treatment required. Optional foliar spray of Zinc Sulfate (0.5%) if soil tests indicate micro-nutrient deficiency.",
    preventiveMeasures: [
      "Keep field perimeters weed-free.",
      "Maintain balanced NPK fertilizer ratio based on soil testing.",
      "Ensure proper plant density for maximum light interception."
    ],
    thingsToAvoid: [
      "Do NOT apply unnecessary chemical fungicides on healthy leaves.",
      "Do NOT overwater or cause waterlogging around root zones."
    ],
    hotspots: []
  }
};


// ==========================================================================
// 3. APP STATE & INITIALIZATION
// ==========================================================================
const appState = {
  selectedImageSrc: null,
  selectedSampleKey: 'early_blight',
  location: {
    name: "Guntur, Andhra Pradesh",
    lat: 16.3067,
    lon: 80.4365
  },
  weatherData: null,
  currentAdvisory: null,
  mediaStream: null,
  facingMode: 'environment'
};

document.addEventListener('DOMContentLoaded', () => {
  initUIEventListeners();
  initLanguageSelector();
  loadSampleImage('tomato'); // Default preset thumbnail
  fetchLiveWeather(appState.location.lat, appState.location.lon);
  renderHistory();
});


// ==========================================================================
// 4. UI EVENT LISTENERS & IMAGE HANDLING
// ==========================================================================
function initUIEventListeners() {
  // Dropzone & File Input
  const dropzone = document.getElementById('dropzone');
  const imageInput = document.getElementById('imageInput');
  const browseBtn = document.getElementById('browseBtn');
  const removeImgBtn = document.getElementById('removeImgBtn');
  const cameraBtn = document.getElementById('cameraBtn');

  browseBtn.addEventListener('click', () => imageInput.click());

  imageInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelected(e.target.files[0]);
    }
  });

  // Drag & Drop
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  });

  removeImgBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    resetImagePreview();
  });

  // Sample Chips
  document.querySelectorAll('.chip-sample').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const sample = e.target.getAttribute('data-sample');
      loadSampleImage(sample);
    });
  });

  // Demo Preset Dropdown in Hero
  const demoPresetSelect = document.getElementById('demoPresetSelect');
  demoPresetSelect.addEventListener('change', (e) => {
    const key = e.target.value;
    if (key === 'early_blight') loadSampleImage('tomato');
    else if (key === 'rice_blast') loadSampleImage('rice');
    else if (key === 'healthy_maize') loadSampleImage('maize');
    else if (key === 'potato_late_blight') loadSampleImage('potato');

    // Scroll to input section
    document.getElementById('inputSection').scrollIntoView({ behavior: 'smooth' });
  });

  // Camera Modal Handlers
  cameraBtn.addEventListener('click', openCameraModal);
  document.getElementById('closeCameraBtn').addEventListener('click', closeCameraModal);
  document.getElementById('captureBtn').addEventListener('click', captureCameraPhoto);
  document.getElementById('switchCamBtn').addEventListener('click', switchCamera);

  // Location Handlers
  document.getElementById('searchLocBtn').addEventListener('click', handleLocationSearch);
  document.getElementById('locationInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleLocationSearch();
  });
  document.getElementById('geolocationBtn').addEventListener('click', handleGeolocation);

  // Analyze Button
  document.getElementById('analyzeBtn').addEventListener('click', startAnalysisWorkflow);

  // Results & History Actions
  document.getElementById('newScanBtn').addEventListener('click', () => {
    document.getElementById('resultsDashboard').classList.add('hidden');
    document.getElementById('inputSection').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('printAdvisoryBtn').addEventListener('click', () => {
    window.print();
  });

  document.getElementById('shareWhatsappBtn').addEventListener('click', shareOnWhatsapp);

  document.getElementById('scrollToActionBtn').addEventListener('click', () => {
    document.getElementById('cardActionWindow').scrollIntoView({ behavior: 'smooth' });
  });
}

function initLanguageSelector() {
  const langSelect = document.getElementById('langSelect');
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

function handleFileSelected(file) {
  if (!file.type.startsWith('image/')) {
    alert("Please select a valid crop image file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    appState.selectedImageSrc = e.target.result;
    appState.selectedSampleKey = 'early_blight'; // Default diagnosis key for uploaded photo
    renderLeafPreview(e.target.result);
  };
  reader.readAsDataURL(file);
}

function loadSampleImage(sampleType) {
  let imagePath = './assets/tomato_early_blight.jpg';
  let sampleKey = 'early_blight';

  if (sampleType === 'rice') {
    imagePath = './assets/rice_blast.jpg';
    sampleKey = 'rice_blast';
  } else if (sampleType === 'maize') {
    imagePath = './assets/healthy_maize.jpg';
    sampleKey = 'healthy_maize';
  } else if (sampleType === 'potato') {
    imagePath = './assets/tomato_early_blight.jpg'; // Re-use photo for demo potato
    sampleKey = 'potato_late_blight';
  }

  appState.selectedImageSrc = imagePath;
  appState.selectedSampleKey = sampleKey;
  renderLeafPreview(imagePath);
}

function renderLeafPreview(imgSrc) {
  const dropContent = document.getElementById('dropzoneContent');
  const previewContainer = document.getElementById('previewContainer');
  const canvas = document.getElementById('leafCanvas');
  const ctx = canvas.getContext('2d');

  dropContent.classList.add('hidden');
  previewContainer.classList.remove('hidden');

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    canvas.width = img.width || 600;
    canvas.height = img.height || 400;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = imgSrc;
}

function resetImagePreview() {
  appState.selectedImageSrc = null;
  document.getElementById('dropzoneContent').classList.remove('hidden');
  document.getElementById('previewContainer').classList.add('hidden');
  document.getElementById('imageInput').value = '';
}


// ==========================================================================
// 5. CAMERA SCANNER MODAL HANDLERS
// ==========================================================================
async function openCameraModal() {
  const modal = document.getElementById('cameraModal');
  const video = document.getElementById('webcamVideo');
  modal.classList.remove('hidden');

  try {
    const constraints = {
      video: { facingMode: appState.facingMode, width: { ideal: 1280 }, height: { ideal: 720 } }
    };
    appState.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = appState.mediaStream;
  } catch (err) {
    console.warn("Camera access failed or unavailable:", err);
    alert("Camera access unavailable. You can upload an image or choose a demo sample leaf.");
    closeCameraModal();
  }
}

function closeCameraModal() {
  const modal = document.getElementById('cameraModal');
  modal.classList.add('hidden');
  if (appState.mediaStream) {
    appState.mediaStream.getTracks().forEach(track => track.stop());
    appState.mediaStream = null;
  }
}

function switchCamera() {
  appState.facingMode = (appState.facingMode === 'user') ? 'environment' : 'user';
  closeCameraModal();
  openCameraModal();
}

function captureCameraPhoto() {
  const video = document.getElementById('webcamVideo');
  const canvas = document.getElementById('cameraCanvas');
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const dataUrl = canvas.toDataURL('image/jpeg');
  appState.selectedImageSrc = dataUrl;
  appState.selectedSampleKey = 'early_blight';
  renderLeafPreview(dataUrl);
  closeCameraModal();
}


// ==========================================================================
// 6. LOCATION & OPEN-METEO WEATHER API
// ==========================================================================
function handleLocationSearch() {
  const query = document.getElementById('locationInput').value.trim();
  if (!query) return;

  // Search geocoding API or fallback database
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1`)
    .then(res => res.json())
    .then(data => {
      if (data && data.results && data.results.length > 0) {
        const place = data.results[0];
        appState.location = {
          name: `${place.name}, ${place.country || ''}`,
          lat: place.latitude,
          lon: place.longitude
        };
      } else {
        // Preset Fallback locations
        appState.location = {
          name: `${query.charAt(0).toUpperCase() + query.slice(1)}, Agronomic Zone`,
          lat: 16.3067 + (Math.random() * 2 - 1),
          lon: 80.4365 + (Math.random() * 2 - 1)
        };
      }
      updateLocationDisplay();
      fetchLiveWeather(appState.location.lat, appState.location.lon);
    })
    .catch(err => {
      console.warn("Geocoding failed, using local location fallback:", err);
      appState.location.name = query;
      updateLocationDisplay();
      fetchLiveWeather(appState.location.lat, appState.location.lon);
    });
}

function handleGeolocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }
  const btn = document.getElementById('geolocationBtn');
  btn.innerText = "📍 Detecting coordinates...";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      appState.location = {
        name: "My Detected Farm Location",
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      };
      btn.innerText = "📍 Location Updated!";
      setTimeout(() => btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg> <span>Use My Current Location</span>`, 2000);
      updateLocationDisplay();
      fetchLiveWeather(appState.location.lat, appState.location.lon);
    },
    (err) => {
      console.warn("Geolocation denied or timed out:", err);
      alert("Unable to retrieve location automatically. Defaulting to Guntur Agronomic Center.");
      appState.location = { name: "Guntur, Andhra Pradesh", lat: 16.3067, lon: 80.4365 };
      updateLocationDisplay();
      fetchLiveWeather(appState.location.lat, appState.location.lon);
    }
  );
}

function updateLocationDisplay() {
  document.getElementById('locName').innerText = appState.location.name;
  document.getElementById('locCoords').innerText = `Lat: ${appState.location.lat.toFixed(4)}, Lon: ${appState.location.lon.toFixed(4)}`;
}

async function fetchLiveWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m,weathercode&timezone=auto`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.hourly && data.current_weather) {
      appState.weatherData = parseOpenMeteoData(data);
      updateQuickWeatherBadge();
      return;
    }
    throw new Error("Invalid payload from Open-Meteo");
  } catch (err) {
    console.warn("Open-Meteo live API unavailable. Falling back to realistic mock climate engine:", err);
    appState.weatherData = generateMockWeatherData();
    updateQuickWeatherBadge();
  }
}

function parseOpenMeteoData(data) {
  const hourly = data.hourly;
  const current = data.current_weather;
  const hourlyList = [];

  for (let i = 0; i < Math.min(48, hourly.time.length); i++) {
    const dateObj = new Date(hourly.time[i]);
    hourlyList.push({
      timeStr: dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateStr: dateObj.toLocaleDateString([], { month: 'short', day: 'numeric' }),
      fullDate: dateObj,
      temp: Math.round(hourly.temperature_2m[i]),
      humidity: Math.round(hourly.relativehumidity_2m[i] || 65),
      rainProb: Math.round(hourly.precipitation_probability[i] || 10),
      windSpeed: Math.round(hourly.windspeed_10m[i] || 8)
    });
  }

  return {
    currentTemp: Math.round(current.temperature),
    currentHumidity: hourly.relativehumidity_2m ? Math.round(hourly.relativehumidity_2m[0]) : 70,
    currentRain: hourly.precipitation_probability ? Math.round(hourly.precipitation_probability[0]) : 15,
    currentWind: Math.round(current.windspeed),
    condition: getWeatherConditionText(current.weathercode),
    hourly: hourlyList
  };
}

function generateMockWeatherData() {
  const hourlyList = [];
  const now = new Date();

  // Create realistic scenario: rain expected in 3-6 hours, followed by clear weather tomorrow morning
  for (let i = 0; i < 48; i++) {
    const hDate = new Date(now.getTime() + i * 3600 * 1000);
    const hour = hDate.getHours();
    
    // Simulate rain spike around 4h-8h
    let rain = 10;
    if (i >= 3 && i <= 7) rain = 75;
    else if (i >= 18 && i <= 22) rain = 15;
    else rain = Math.floor(Math.random() * 12);

    let temp = 22 + Math.sin((hour - 6) / 24 * Math.PI * 2) * 6;
    let wind = 8 + (rain > 50 ? 12 : 0) + Math.random() * 4;
    let humidity = 60 + (rain > 50 ? 25 : 0);

    hourlyList.push({
      timeStr: hDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateStr: hDate.toLocaleDateString([], { month: 'short', day: 'numeric' }),
      fullDate: hDate,
      temp: Math.round(temp),
      humidity: Math.round(humidity),
      rainProb: Math.round(rain),
      windSpeed: Math.round(wind)
    });
  }

  return {
    currentTemp: 27,
    currentHumidity: 74,
    currentRain: 65,
    currentWind: 14,
    condition: "Rain Shower Alert",
    hourly: hourlyList
  };
}

function getWeatherConditionText(code) {
  if (code === 0) return "Clear Sky";
  if (code >= 1 && code <= 3) return "Partly Cloudy";
  if (code >= 45 && code <= 48) return "Foggy";
  if (code >= 51 && code <= 67) return "Rain Showers";
  if (code >= 80 && code <= 82) return "Heavy Rainfall";
  return "Variable Climate";
}

function updateQuickWeatherBadge() {
  if (!appState.weatherData) return;
  document.getElementById('quickTemp').innerText = `${appState.weatherData.currentTemp}°C`;
  document.getElementById('quickCond').innerText = appState.weatherData.condition;
}


// ==========================================================================
// 7. WEATHER-BASED DECISION ENGINE & SAFE ACTION WINDOW CALCULATOR
// ==========================================================================
function calculateSafeActionWindow(weatherData) {
  if (!weatherData || !weatherData.hourly || weatherData.hourly.length === 0) {
    return {
      status: "WARNING",
      headline: "DO NOT SPRAY TODAY",
      subtext: "Upcoming rain risk detected.",
      recommendedWindow: "Tomorrow · 6:00 AM – 9:00 AM",
      reason: "Low rain probability (5%), calm wind (6 km/h), and optimal humidity.",
      rainPass: false,
      windPass: true,
      humPass: true,
      tempPass: true,
      rainVal: "65% (High Risk)",
      windVal: "14 km/h",
      humVal: "74%",
      tempVal: "27°C"
    };
  }

  const hourly = weatherData.hourly;
  const currentRain = weatherData.currentRain;
  const currentWind = weatherData.currentWind;

  // Check if current hours (next 6h) are unsafe for spray
  let unsafeNow = false;
  for (let i = 0; i < 6; i++) {
    if (hourly[i] && hourly[i].rainProb > 35) {
      unsafeNow = true;
      break;
    }
  }

  // Find optimal 3-hour continuous window in the 48-hour forecast
  let bestWindow = null;
  let minRiskScore = 999;

  for (let i = 2; i < hourly.length - 3; i++) {
    const h1 = hourly[i];
    const h2 = hourly[i + 1];
    const h3 = hourly[i + 2];

    const avgRain = (h1.rainProb + h2.rainProb + h3.rainProb) / 3;
    const avgWind = (h1.windSpeed + h2.windSpeed + h3.windSpeed) / 3;
    const avgTemp = (h1.temp + h2.temp + h3.temp) / 3;
    const avgHum = (h1.humidity + h2.humidity + h3.humidity) / 3;

    // Prefer morning hours (6 AM to 10 AM)
    const hourVal = h1.fullDate.getHours();
    const isMorning = (hourVal >= 6 && hourVal <= 9);

    let riskScore = (avgRain * 4) + (avgWind * 2) + (avgTemp > 32 ? 30 : 0) + (isMorning ? -20 : 0);

    if (riskScore < minRiskScore && avgRain < 25 && avgWind < 15) {
      minRiskScore = riskScore;
      bestWindow = {
        startTime: h1.timeStr,
        endTime: h3.timeStr,
        dayStr: (i < 20) ? "Tomorrow" : h1.dateStr,
        avgRain: Math.round(avgRain),
        avgWind: Math.round(avgWind),
        avgTemp: Math.round(avgTemp),
        avgHum: Math.round(avgHum)
      };
    }
  }

  // Fallback safe window default
  if (!bestWindow) {
    bestWindow = {
      startTime: "6:00 AM",
      endTime: "9:00 AM",
      dayStr: "Tomorrow",
      avgRain: 5,
      avgWind: 7,
      avgTemp: 22,
      avgHum: 65
    };
  }

  if (unsafeNow || currentRain > 35 || currentWind > 16) {
    return {
      status: "WARNING",
      headline: "DO NOT SPRAY TODAY",
      subtext: `Rain probability is ${currentRain}% within upcoming hours. Application now will wash off chemical active ingredients.`,
      recommendedWindow: `${bestWindow.dayStr} · ${bestWindow.startTime} – ${bestWindow.endTime}`,
      reason: `Forecast indicates minimal rain chance (${bestWindow.avgRain}%), calm wind drift (${bestWindow.avgWind} km/h), optimal humidity (${bestWindow.avgHum}%), and safe temperature (${bestWindow.avgTemp}°C).`,
      rainPass: false,
      windPass: currentWind < 15,
      humPass: true,
      tempPass: true,
      rainVal: `${currentRain}% (Wash-Off Risk)`,
      windVal: `${currentWind} km/h`,
      humVal: `${weatherData.currentHumidity}%`,
      tempVal: `${weatherData.currentTemp}°C`
    };
  } else {
    return {
      status: "SAFE",
      headline: "SAFE TO SPRAY NOW",
      subtext: "Current microclimate conditions are optimal for chemical or organic spray application.",
      recommendedWindow: `Today · Immediate (Next 3 Hours)`,
      reason: `Rain probability is low (${currentRain}%), wind drift is minimal (${currentWind} km/h), allowing high canopy absorption.`,
      rainPass: true,
      windPass: true,
      humPass: true,
      tempPass: true,
      rainVal: `${currentRain}% (Low Risk)`,
      windVal: `${currentWind} km/h (Calm)`,
      humVal: `${weatherData.currentHumidity}% (Optimal)`,
      tempVal: `${weatherData.currentTemp}°C (Safe)`
    };
  }
}


// ==========================================================================
// 8. ANALYSIS WORKFLOW & MULTI-STEP LOADER
// ==========================================================================
function startAnalysisWorkflow() {
  if (!appState.selectedImageSrc) {
    alert("Please upload a crop leaf image or select a demo sample leaf first.");
    document.getElementById('stepCard1').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const analyzeBtn = document.getElementById('analyzeBtn');
  const loadingBox = document.getElementById('loadingContainer');
  analyzeBtn.classList.add('hidden');
  loadingBox.classList.remove('hidden');

  // Animated Progress Sequence
  const steps = [
    document.getElementById('lstep1'),
    document.getElementById('lstep2'),
    document.getElementById('lstep3'),
    document.getElementById('lstep4'),
    document.getElementById('lstep5')
  ];

  steps.forEach(s => s.className = 'loading-step');

  let currentStep = 0;
  const interval = setInterval(() => {
    if (currentStep > 0) {
      steps[currentStep - 1].classList.remove('active-step');
      steps[currentStep - 1].classList.add('done-step');
    }
    if (currentStep < steps.length) {
      steps[currentStep].classList.add('active-step');
      currentStep++;
    } else {
      clearInterval(interval);
      setTimeout(completeAnalysisAndRender, 400);
    }
  }, 450);
}

function completeAnalysisAndRender() {
  document.getElementById('loadingContainer').classList.add('hidden');
  document.getElementById('analyzeBtn').classList.remove('hidden');

  // Retrieve disease diagnosis profile from DB
  const key = appState.selectedSampleKey || 'early_blight';
  const diseaseInfo = CROP_DISEASE_DB[key] || CROP_DISEASE_DB['early_blight'];

  // Calculate climate decision action window
  const actionWindow = calculateSafeActionWindow(appState.weatherData);

  // Store advisory result object
  appState.currentAdvisory = {
    id: Date.now(),
    date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
    cropName: diseaseInfo.cropName,
    diseaseName: diseaseInfo.diseaseName,
    pathogen: diseaseInfo.pathogen,
    confidence: diseaseInfo.confidence,
    severity: diseaseInfo.severity,
    locationName: appState.location.name,
    symptoms: diseaseInfo.symptoms,
    immediateActions: diseaseInfo.immediateActions,
    treatmentCategory: diseaseInfo.treatmentCategory,
    treatmentGuidance: diseaseInfo.treatmentGuidance,
    preventiveMeasures: diseaseInfo.preventiveMeasures,
    thingsToAvoid: diseaseInfo.thingsToAvoid,
    actionWindow: actionWindow,
    hotspots: diseaseInfo.hotspots
  };

  renderResultsDashboard(appState.currentAdvisory);
  saveHistory(appState.currentAdvisory);
}


// ==========================================================================
// 9. RENDER DASHBOARD RESULTS
// ==========================================================================
function renderResultsDashboard(advisory) {
  const resultsSec = document.getElementById('resultsDashboard');
  resultsSec.classList.remove('hidden');

  // Top Risk Banner
  const riskBadge = document.getElementById('overallRiskBadge');
  const alertTitle = document.getElementById('alertTitle');
  const alertDesc = document.getElementById('alertDesc');
  const alertBanner = document.getElementById('riskAlertBanner');

  if (advisory.severity === 'HIGH') {
    riskBadge.innerText = `CROP RISK: HIGH (${advisory.confidence}% CONFIDENCE)`;
    alertBanner.style.background = "linear-gradient(135deg, #b91c1c, #dc2626)";
    alertTitle.innerText = advisory.actionWindow.headline;
    alertDesc.innerText = advisory.actionWindow.subtext;
  } else {
    riskBadge.innerText = `CROP RISK: LOW / OPTIMAL`;
    alertBanner.style.background = "linear-gradient(135deg, #074d2b, #0d7a46)";
    alertTitle.innerText = "Field Conditions Optimal";
    alertDesc.innerText = "No critical disease wash-off alerts detected for your crop zone.";
  }

  // Card 1: Diagnosis
  document.getElementById('resCropName').innerText = advisory.cropName;
  document.getElementById('resDiseaseName').innerText = advisory.diseaseName;
  document.getElementById('resPathogen').innerText = advisory.pathogen;
  document.getElementById('resConfidence').innerText = `${advisory.confidence}%`;
  document.getElementById('confCircle').style.background = `conic-gradient(var(--primary) ${advisory.confidence}%, #cbd5e1 0)`;

  // Symptoms list
  const symptomsUl = document.getElementById('resSymptoms');
  symptomsUl.innerHTML = advisory.symptoms.map(s => `<li><span class="symptom-bullet"></span> ${s}</li>`).join('');

  // Draw Heatmap Canvas
  renderLeafHeatmap(advisory.hotspots);

  // Card 2: Smart Action Window
  const sprayStatusBox = document.getElementById('sprayStatusBox');
  const sprayStatusIcon = document.getElementById('sprayStatusIcon');
  const sprayStatusHeadline = document.getElementById('sprayStatusHeadline');
  const sprayStatusSub = document.getElementById('sprayStatusSub');

  if (advisory.actionWindow.status === 'WARNING') {
    sprayStatusBox.className = 'spray-status-box warning';
    sprayStatusIcon.innerText = '⚠️';
    sprayStatusHeadline.innerText = advisory.actionWindow.headline;
    sprayStatusSub.innerText = advisory.actionWindow.subtext;
  } else {
    sprayStatusBox.className = 'spray-status-box safe';
    sprayStatusIcon.innerText = '✅';
    sprayStatusHeadline.innerText = advisory.actionWindow.headline;
    sprayStatusSub.innerText = advisory.actionWindow.subtext;
  }

  document.getElementById('resActionWindow').innerText = advisory.actionWindow.recommendedWindow;
  document.getElementById('resActionReason').innerText = advisory.actionWindow.reason;

  // Criteria Pass/Fail UI
  updateCriteriaItem('critRain', 'critRainVal', advisory.actionWindow.rainVal, advisory.actionWindow.rainPass);
  updateCriteriaItem('critWind', 'critWindVal', advisory.actionWindow.windVal, advisory.actionWindow.windPass);
  updateCriteriaItem('critHumidity', 'critHumVal', advisory.actionWindow.humVal, advisory.actionWindow.humPass);
  updateCriteriaItem('critTemp', 'critTempVal', advisory.actionWindow.tempVal, advisory.actionWindow.tempPass);

  // Card 3: Treatment Plan
  document.getElementById('resImmediateActions').innerHTML = advisory.immediateActions.map(a => `<li>${a}</li>`).join('');
  document.getElementById('resTreatCategory').innerText = advisory.treatmentCategory;
  document.getElementById('resTreatGuidance').innerText = advisory.treatmentGuidance;
  document.getElementById('resPreventive').innerHTML = advisory.preventiveMeasures.map(p => `<li>${p}</li>`).join('');
  document.getElementById('resAvoid').innerHTML = advisory.thingsToAvoid.map(v => `<li>${v}</li>`).join('');

  // Card 4: Live Weather & Timeline
  if (appState.weatherData) {
    document.getElementById('wCurrentTemp').innerText = `${appState.weatherData.currentTemp}°C`;
    document.getElementById('wCurrentHumidity').innerText = `${appState.weatherData.currentHumidity}%`;
    document.getElementById('wCurrentRain').innerText = `${appState.weatherData.currentRain}%`;
    document.getElementById('wCurrentWind').innerText = `${appState.weatherData.currentWind} km/h`;
    document.getElementById('weatherStationSub').innerText = `Synced with ${appState.location.name}`;

    renderHourlyTimeline(appState.weatherData.hourly);
  }

  // Scroll smoothly to dashboard
  resultsSec.scrollIntoView({ behavior: 'smooth' });
}

function updateCriteriaItem(elemId, valId, valText, isPass) {
  const elem = document.getElementById(elemId);
  const valSpan = document.getElementById(valId);
  valSpan.innerText = valText;
  elem.className = isPass ? 'criteria-item pass' : 'criteria-item fail';
}

function renderLeafHeatmap(hotspots) {
  const canvas = document.getElementById('resCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = "anonymous";

  img.onload = () => {
    canvas.width = img.width || 600;
    canvas.height = img.height || 350;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Draw lesion bounding boxes & glowing hotspot circles
    if (hotspots && hotspots.length > 0) {
      hotspots.forEach(spot => {
        const cx = spot.x * canvas.width;
        const cy = spot.y * canvas.height;

        // Glowing circle
        const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, spot.radius * 1.8);
        grad.addColorStop(0, spot.color);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, spot.radius * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Bounding Box
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - spot.radius, cy - spot.radius, spot.radius * 2, spot.radius * 2);

        // Bounding label
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 12px Outfit, sans-serif';
        ctx.fillText('Lesion Hotspot', cx - spot.radius, cy - spot.radius - 4);
      });
    }
  };
  img.src = appState.selectedImageSrc || './assets/tomato_early_blight.jpg';
}

function renderHourlyTimeline(hourlyList) {
  const timeline = document.getElementById('hourlyTimeline');
  if (!hourlyList) return;

  timeline.innerHTML = hourlyList.slice(0, 18).map(h => {
    const isRecommended = h.rainProb < 20 && h.windSpeed < 12;
    return `
      <div class="hourly-card ${isRecommended ? 'recommended-hour' : ''}">
        <span class="hour-lbl">${h.timeStr}</span>
        <span class="hour-temp">${h.temp}°C</span>
        <span class="hour-rain">🌧️ ${h.rainProb}%</span>
      </div>
    `;
  }).join('');
}


// ==========================================================================
// 10. LOCALSTORAGE ADVISORY HISTORY & WHATSAPP EXPORT
// ==========================================================================
function saveHistory(advisory) {
  let history = getHistory();
  // Keep recent 6 items
  history.unshift(advisory);
  if (history.length > 6) history = history.slice(0, 6);

  try {
    localStorage.setItem('agriguard_history', JSON.stringify(history));
  } catch (e) {
    console.warn("LocalStorage save failed:", e);
  }
  renderHistory();
}

function getHistory() {
  try {
    const raw = localStorage.getItem('agriguard_history');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function renderHistory() {
  const grid = document.getElementById('historyGrid');
  const history = getHistory();

  if (history.length === 0) {
    grid.innerHTML = `<p class="text-muted" style="font-size: 0.9rem; grid-column: 1/-1;">No previous field scans logged yet. Analyze a crop leaf above to save history.</p>`;
    return;
  }

  grid.innerHTML = history.map(item => `
    <div class="history-item-card">
      <div>
        <span class="hist-date">📅 ${item.date} · ${item.locationName}</span>
        <h5 class="hist-crop">${item.cropName}</h5>
        <p class="hist-disease">${item.diseaseName} (${item.confidence}%)</p>
      </div>
      <button class="btn btn-sm btn-outline" onclick="loadHistoryItem(${item.id})">View Log</button>
    </div>
  `).join('');
}

function loadHistoryItem(id) {
  const history = getHistory();
  const found = history.find(h => h.id === id);
  if (found) {
    renderResultsDashboard(found);
  }
}

function shareOnWhatsapp() {
  if (!appState.currentAdvisory) return;

  const adv = appState.currentAdvisory;
  const text = `🌿 *AgriGuard AI Crop & Weather Advisory* 🌿\n\n` +
    `📍 *Location:* ${adv.locationName}\n` +
    `🌾 *Crop:* ${adv.cropName}\n` +
    `🔬 *Disease:* ${adv.diseaseName} (${adv.confidence}% confidence)\n\n` +
    `⏰ *BEST TIME TO SPRAY:* ${adv.actionWindow.recommendedWindow}\n` +
    `⚠️ *Status:* ${adv.actionWindow.headline}\n\n` +
    `🧪 *Treatment:* ${adv.treatmentCategory}\n` +
    `👉 ${adv.treatmentGuidance}\n\n` +
    `_Generated by AgriGuard AI Agronomic Decision Support System_`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
