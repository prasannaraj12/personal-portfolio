import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "trust-cv",
    title: "TRUST-CV / BLOCK SENTINAL",
    subtitle: "Offline Computer Vision Integrity Assurance Platform",
    category: "Computer Vision",
    badge: "210 / 210 Tests Passing",
    iconName: "ShieldCheck",
    overview:
      "An offline, air-gapped computer vision platform engineered to guarantee cryptographic evidence integrity, tamper detection, and deterministic verification for sensitive remote sensing and visual datasets.",
    problem:
      "Sensitive remote sensing visual assets and mission-critical computer vision models are vulnerable to silent data tampering, man-in-the-middle attacks, and environmental image degradation, especially in air-gapped or offline critical infrastructure.",
    solution:
      "Built an air-gapped integrity assurance engine that couples perceptual hashing, cryptographic block verification, and offline CV heuristics to validate forensic provenance without requiring external cloud connectivity.",
    architecture: {
      title: "Air-Gapped Cryptographic Pipeline",
      flow: [
        "Raw Visual Ingestion",
        "Air-Gapped Perceptual Hashing",
        "Cryptographic Digest Generation",
        "Feature-Space Invariance Check",
        "Deterministic Block Verification",
        "Signed Forensic Attestation",
      ],
      description:
        "Processes images through an air-gapped perimeter, computes deterministic perceptual and SHA digests, validates neural representation invariance, and outputs cryptographic certificates of evidence integrity.",
    },
    technologies: [
      "Computer Vision",
      "Remote Sensing",
      "Cryptographic Verification",
      "Air-Gapped Systems",
      "Python",
      "OpenCV",
      "PyTorch",
      "Automated Testing",
    ],
    implementation: [
      "Designed an offline verification harness with zero external socket dependencies.",
      "Engineered perceptual hash invariance testing against noise, compression, and affine transforms.",
      "Achieved 210 / 210 unit and integration tests passing in hardened deterministic test suites.",
      "Generated cryptographic tamper-evident audit trails for satellite and forensic feeds.",
    ],
    results: [
      "210 / 210 comprehensive test suite passing with 100% deterministic reproducibility.",
      "Zero telemetry leakage verified across air-gapped offline test cycles.",
      "Sub-second verification latency for multi-megabyte high-resolution imagery.",
    ],
    githubUrl: "https://github.com",
    caseStudy:
      "TRUST-CV demonstrates how cryptographic guarantees and deep computer vision can co-exist in sovereign, mission-critical infrastructure where cloud verification is strictly prohibited.",
    stats: [
      { label: "Deterministic Tests", value: "210 / 210" },
      { label: "Verification Latency", value: "< 240ms" },
      { label: "Network Requirement", value: "0 Kbps (Offline)" },
    ],
  },
  {
    id: "satquery-ai",
    title: "SATQUERY AI",
    subtitle: "AI Satellite Image Analysis via Natural Language Queries",
    category: "Computer Vision",
    badge: "Vision-Language",
    iconName: "Satellite",
    overview:
      "A multimodal vision-language system that allows remote sensing analysts and researchers to query complex multispectral satellite imagery using natural conversational language.",
    problem:
      "Multispectral satellite data is notoriously complex, requiring domain knowledge in geographic information systems (GIS) and manual band analysis to identify environmental changes, land cover, and infrastructure.",
    solution:
      "Engineered an end-to-end vision-language pipeline adapting BigEarthNet with a custom MultiSpectralStem and ResNet-18 backbone, enabling Visual Question Answering (VQA) and automated captioning over multimodal satellite bands.",
    architecture: {
      title: "Multispectral Vision-Language Architecture",
      flow: [
        "Multispectral Satellite Band Ingestion",
        "Custom MultiSpectralStem Feature Extractor",
        "ResNet-18 Backbone Representation",
        "Cross-Attention Multimodal Fusion",
        "Natural Language Query Tokenizer",
        "Visual Question Answering & Caption Head",
      ],
      description:
        "Fuses multispectral surface reflectance data via a specialized input stem into deep convolutional representations, aligning visual spatial tokens with dense text queries for accurate classification and description.",
    },
    technologies: [
      "Remote Sensing",
      "BigEarthNet Adaptation",
      "MultiSpectralStem",
      "ResNet-18",
      "Vision-Language Processing",
      "Visual Question Answering",
      "Image Captioning",
      "PyTorch",
    ],
    implementation: [
      "Adapted BigEarthNet multispectral imagery across Sentinel bands.",
      "Engineered MultiSpectralStem to ingest variable band dimensions beyond standard RGB.",
      "Integrated ResNet-18 as a lightweight, deployable visual encoder.",
      "Trained VQA and captioning decoders to answer structural questions on land use and terrain.",
    ],
    results: [
      "Accurate multi-class remote sensing classification directly mapped to natural language responses.",
      "Significantly lowered the barrier for non-GIS experts to inspect terrain anomalies.",
      "Efficient parameter footprint suitable for local edge inference.",
    ],
    githubUrl: "https://github.com",
    stats: [
      { label: "Backbone", value: "ResNet-18 + MultiStem" },
      { label: "Dataset Adaptation", value: "BigEarthNet" },
      { label: "Tasks", value: "VQA + Captioning" },
    ],
  },
  {
    id: "crawlnews",
    title: "CRAWLNEWS",
    subtitle: "Full-Stack AI News Intelligence & Verification Platform",
    category: "Generative AI / Agents",
    badge: "Multi-Agent System",
    iconName: "Newspaper",
    overview:
      "An automated multi-agent news intelligence platform that orchestrates ingestion, deduplication, AI relevance filtering, fact verification, and categorization into an actionable executive dashboard.",
    problem:
      "Information overload, sensationalism, and repetitive syndicated news feeds overwhelm analysts, making real-time verification and unbiased summarization labor-intensive.",
    solution:
      "Architected a distributed multi-agent pipeline where specialized autonomous workers collaborate to harvest RSS feeds, detect duplicates via semantic embeddings, verify facts, summarize core takeaways, and stream updates via an Express API gateway.",
    architecture: {
      title: "Distributed Multi-Agent Ingestion & Synthesis Pipeline",
      flow: [
        "React Web App",
        "Express API Gateway",
        "Orchestrator Agent",
        "News Collection Agent (RSS / Playwright)",
        "Duplicate Detection Agent (Semantic Cosine)",
        "AI Relevance Filter",
        "Fact Verification Agent",
        "Categorization & Summarization Agent",
        "Admin Dashboard & SQLite Storage",
      ],
      description:
        "The Orchestrator Agent schedules node-cron scraping cycles. Raw articles flow through Playwright scrapers, duplicate deduplication filters, fact verification checks, and automated summarization before storing clean structured feeds in SQLite.",
    },
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "SQLite",
      "RSS",
      "Playwright",
      "node-cron",
      "AI Agents",
      "React",
    ],
    implementation: [
      "Engineered Orchestrator Agent to manage asynchronous task queues and error recovery.",
      "Implemented Playwright and RSS crawlers with anti-bot resilience.",
      "Constructed semantic clustering to eliminate duplicate stories across 50+ wire sources.",
      "Built interactive React administration console with real-time ingest metrics.",
    ],
    results: [
      "Over 90% redundant article reduction achieved through semantic duplicate detection.",
      "End-to-end processing pipeline completes in under 12 seconds per newly published story batch.",
      "Self-healing worker processes with automated node-cron error retries.",
    ],
    githubUrl: "https://github.com",
    stats: [
      { label: "Architecture", value: "6 Autonomous Agents" },
      { label: "Redundancy Filter", value: "Semantic Dedup" },
      { label: "Runtime", value: "Node.js + TypeScript" },
    ],
  },
  {
    id: "fakeo",
    title: "FAKEO",
    subtitle: "AI-Powered Multimodal Fake News Detection Platform",
    category: "Machine Learning / NLP",
    badge: "NLP + OCR",
    iconName: "FileSearch",
    overview:
      "An automated misinformation identification platform combining classical machine learning, TF-IDF vectorization, named entity recognition, and optical character recognition to scrutinize claims in articles and digital screenshots.",
    problem:
      "Viral misinformation spreads rapidly through forged screenshots, modified headline images, and hyper-partisan text snippets that evade simple keyword-based blacklist filters.",
    solution:
      "Engineered a unified hybrid pipeline utilizing XGBoost models trained on stylistic and linguistic indicators, coupled with pytesseract OCR for screenshot text extraction and spaCy for named entity verification.",
    architecture: {
      title: "Hybrid OCR + NLP Misinformation Classifier",
      flow: [
        "Raw Text or Image Screenshot Upload",
        "pytesseract OCR Text Extraction",
        "spaCy Named Entity Recognition (NER)",
        "TF-IDF Statistical Lexical Modeling",
        "XGBoost Gradient-Boosted Classifier",
        "Confidence & Attribution Score Generation",
      ],
      description:
        "Extracts text from screenshots via pytesseract OCR, identifies entity claims via spaCy, computes linguistic TF-IDF distributions, and passes dense features into a fine-tuned XGBoost ensemble served via Flask.",
    },
    technologies: [
      "XGBoost",
      "TF-IDF",
      "NLP",
      "OCR",
      "pytesseract",
      "spaCy",
      "Flask",
      "joblib",
      "Python",
    ],
    implementation: [
      "Trained and tuned XGBoost classifier on verified misinformation benchmarks.",
      "Integrated pytesseract for automated bounding-box OCR on social media screenshots.",
      "Employed spaCy NER to cross-reference entities against known factual registries.",
      "Packaged trained model artifacts using joblib for low-latency Flask API endpoints.",
    ],
    results: [
      "Robust detection across adversarial headline variations.",
      "Unified processing pipeline capable of handling both raw text articles and image-based social memes.",
      "Selected as a standout winning project at the SRIT Hackathon by Team Revolutionary.",
    ],
    githubUrl: "https://github.com",
    stats: [
      { label: "Classifier", value: "XGBoost + TF-IDF" },
      { label: "OCR Engine", value: "pytesseract" },
      { label: "NER Framework", value: "spaCy" },
    ],
  },
  {
    id: "urbanbloom-ai",
    title: "URBANBLOOM AI",
    subtitle: "AI-Driven Smart Greenery & Intelligent Irrigation Ecosystem",
    category: "IoT & Hardware",
    badge: "IoT + Gemini AI",
    iconName: "Cpu",
    overview:
      "An intelligent urban horticulture and automated irrigation hardware system combining microcontrollers, soil moisture telemetry, and Google Gemini AI for adaptive plant health diagnostics and water conservation.",
    problem:
      "Urban gardening and vertical farming often suffer from inconsistent manual watering, plant disease oversight, and excessive water wastage in arid environments.",
    solution:
      "Designed a connected hardware-software ecosystem uniting ESP32 and Arduino microcontrollers with capacitive moisture probes, driving automated relays while feeding environmental sensor streams to a Gemini-powered mobile diagnostic app.",
    architecture: {
      title: "Edge Telemetry & Cloud AI Architecture",
      flow: [
        "Soil Moisture & Ambient Sensors",
        "Arduino UNO & ESP32-WROOM-32 Controller",
        "Low-Latency Relay & DC Motor Actuation",
        "Telemetry WiFi Stream to Cloud",
        "Gemini Vision & Reasoning Engine",
        "React Native Mobile App & Web UI",
      ],
      description:
        "Sensors capture moisture and temperature; ESP32 executes local threshold actuation with DC motor water pumps, while streaming telemetry to a React Native interface backed by Gemini for predictive watering schedules.",
    },
    technologies: [
      "Arduino UNO",
      "ESP32-WROOM-32",
      "Soil Moisture Sensor",
      "Relay Module",
      "DC Motor",
      "React Native",
      "Gemini AI",
      "Web UI",
      "C++ / Embedded",
    ],
    implementation: [
      "Wrote embedded C++ firmware for ESP32 and Arduino UNO with failsafe relay watchdogs.",
      "Constructed closed-loop PID-style threshold irrigation preventing root rot.",
      "Integrated Gemini API for image-based leaf health diagnosis and disease mitigation tips.",
      "Built clean cross-platform React Native and Web dashboard for telemetry visualization.",
    ],
    results: [
      "Demonstrated at ADVAYA 2K25, highlighting intelligent resource conservation.",
      "Up to 40% estimated water efficiency improvement compared to conventional timed sprinklers.",
      "Reliable dual-core telemetry streaming under variable WiFi conditions.",
    ],
    githubUrl: "https://github.com",
    stats: [
      { label: "Hardware", value: "ESP32 + Arduino UNO" },
      { label: "Actuation", value: "Relay + DC Pump" },
      { label: "AI Backend", value: "Gemini AI" },
    ],
  },
  {
    id: "player-reid",
    title: "PLAYER RE-IDENTIFICATION",
    subtitle: "Computer Vision Sports Analytics & Spatial Tracking System",
    category: "Computer Vision",
    badge: "PyTorch & OpenCV",
    iconName: "Crosshair",
    overview:
      "A deep learning computer vision pipeline designed for real-time player detection, visual feature re-identification, and trajectory tracking across complex sports broadcast footage.",
    problem:
      "Frequent player occlusions, rapid jersey color overlap, camera pan jitter, and scale variations cause standard bounding box trackers to lose identity associations and scramble tracking trajectories.",
    solution:
      "Integrated YOLOv5 object detection with DeepSORT deep metric learning embeddings and spatial Kalman filters to maintain persistent player tracklets across long multi-camera video sequences.",
    architecture: {
      title: "DeepSORT + YOLOv5 Visual Tracking Pipeline",
      flow: [
        "Broadcast Video Frame Ingestion",
        "YOLOv5 High-Confidence Player Detection",
        "Deep Metric Visual Feature Extraction",
        "Cosine Distance Association Matrix",
        "Kalman Filter Spatial State Prediction",
        "Persistent Re-ID Trajectory Annotation",
      ],
      description:
        "YOLOv5 detects candidate players; bounding crops are passed into deep appearance encoders to compute re-ID feature vectors. Hungarian algorithm and Kalman filters reconcile tracks across occlusions.",
    },
    technologies: [
      "YOLOv5",
      "DeepSort",
      "OpenCV",
      "PyTorch",
      "Python",
      "Computer Vision",
      "Metric Learning",
    ],
    implementation: [
      "Trained custom detector heads on athletic movement and sport jerseys.",
      "Fine-tuned DeepSORT appearance feature extractor to withstand rotational occlusions.",
      "Optimized OpenCV rendering pipeline for high frame-rate video overlay.",
      "Implemented tracklet recovery heuristics for players exiting and re-entering camera view.",
    ],
    results: [
      "Substantially mitigated ID-switch errors during dense player huddles and collisions.",
      "Real-time processing capability on consumer-grade GPU hardware.",
      "Accurate velocity and heat-map spatial telemetry exports.",
    ],
    githubUrl: "https://github.com",
    stats: [
      { label: "Detector", value: "YOLOv5" },
      { label: "Tracker", value: "DeepSORT" },
      { label: "Framework", value: "PyTorch / OpenCV" },
    ],
  },
  {
    id: "rentyourmate",
    title: "RENTYOURMATE",
    subtitle: "Trusted Companion Marketplace Platform",
    category: "Full-Stack AI",
    badge: "Verified Marketplace",
    iconName: "Users",
    overview:
      "A verified companion marketplace engineered around trust, safety, privacy, and structured bookings for shared activities, events, and professional accompaniment. (Note: strictly NOT a dating platform).",
    problem:
      "People seeking platonic event companions, travel buddies, or professional networking accompaniment lack safe, verified platforms with strict identity governance, background checks, and structured escrow payments.",
    solution:
      "Engineered an enterprise-grade mobile and cloud architecture featuring KYC identity verification, geolocation search via OpenStreetMap & Photon, structured time-slot booking schedules, and Razorpay escrow payments.",
    architecture: {
      title: "Secure Verification & Booking Architecture",
      flow: [
        "Flutter Cross-Platform Client",
        "Firebase Auth & Strict KYC Verification",
        "Node.js & Express API Backend",
        "PostgreSQL Relational DB (Bookings & Escrow)",
        "OpenStreetMap & Photon Geocoding",
        "Razorpay Payment Gateway Integration",
      ],
      description:
        "User sessions authenticate via Firebase Auth; KYC verification validates national identity documents before profiles can publish availability. Bookings are transacted through PostgreSQL with strict Razorpay escrow and geocoded via OpenStreetMap.",
    },
    technologies: [
      "Flutter",
      "Provider State Management",
      "Firebase Auth",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Razorpay",
      "OpenStreetMap",
      "Photon",
    ],
    implementation: [
      "Architected Flutter mobile app utilizing clean Provider state separation.",
      "Constructed strict KYC credential upload and manual review workflow.",
      "Integrated OpenStreetMap and Photon API for privacy-preserving localized geocoding.",
      "Implemented transactional PostgreSQL booking state machines with Razorpay webhooks.",
    ],
    results: [
      "Strict trust and safety protocols prioritizing verified, safe, and transparent bookings.",
      "Zero tolerance for unverified profiles, enforcing platform compliance.",
      "High performance responsive mobile interface with real-time booking updates.",
    ],
    githubUrl: "https://github.com",
    stats: [
      { label: "Platform", value: "Flutter + Node.js" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Compliance", value: "Strict KYC Verified" },
    ],
  },
  {
    id: "chest-xray-ai",
    title: "CHEST X-RAY AI (SACHIN LUNG)",
    subtitle: "AI Chest X-Ray Disease Detection & Localization System",
    category: "Computer Vision",
    badge: "Medical AI Research",
    iconName: "Activity",
    overview:
      "A clinical research AI system designed for radiographic disease classification, pulmonary lesion localization, and visual interpretability via Grad-CAM saliency heatmaps.",
    problem:
      "Deep learning models in healthcare often suffer from black-box opacity, creating hesitation among clinicians who need interpretable visual evidence alongside classification scores.",
    solution:
      "Built a dual-architecture research pipeline uniting DenseNet121 for multi-label pathology classification with U-Net segmentation for anatomical lung masking and Grad-CAM for gradient-weighted visual explanations.",
    architecture: {
      title: "Radiological Classification & Saliency Pipeline",
      flow: [
        "DICOM / High-Res Radiograph Ingestion",
        "U-Net Lung Field Anatomical Segmentation",
        "DenseNet121 Deep Pathology Classification",
        "Grad-CAM Gradient Saliency Generation",
        "Clinician Interpretability Heatmap Overlay",
        "Automated Structured Research Report Draft",
      ],
      description:
        "Input radiographs undergo anatomical normalization via U-Net. DenseNet121 extracts deep spatial pathology representations, while Grad-CAM backpropagates gradients to generate interpretable visual localization heatmaps.",
    },
    technologies: [
      "U-Net",
      "DenseNet121",
      "Grad-CAM",
      "PyTorch",
      "OpenCV",
      "Medical Image Processing",
      "Report Generation",
    ],
    implementation: [
      "Trained DenseNet121 convolutional networks on normalized chest radiograph datasets.",
      "Constructed Grad-CAM visualization hooks to verify model attention on genuine pathological lesions.",
      "Engineered automated drafting tools generating structured radiologic observation templates.",
      "Applied strict evaluation metrics: sensitivity, specificity, and ROC-AUC.",
    ],
    results: [
      "High visual interpretability with verifiable Grad-CAM attention alignment.",
      "Clear distinction of pulmonary findings aiding academic and research review.",
      "Presents strictly as an educational and research AI tool without unverified clinical claims.",
    ],
    githubUrl: "https://github.com",
    stats: [
      { label: "Architecture", value: "DenseNet121 + U-Net" },
      { label: "Explainability", value: "Grad-CAM Heatmaps" },
      { label: "Domain", value: "Healthcare AI Research" },
    ],
  },
];
