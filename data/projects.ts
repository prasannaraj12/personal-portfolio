import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "agentdb",
    title: "AGENTDB",
    subtitle: "Agentic AI Database Assistant",
    category: "Generative AI / Agents",
    badge: "LangGraph ReAct Agent",
    iconName: "Sparkle",
    overview:
      "Architected a LangGraph ReAct pipeline with 5 custom LangChain tools (schema reader, SQL executor, chart generator, diagram renderer, insight generator) for autonomous reasoning over any SQLite database, cutting response time from hours to under 2 seconds; validated across 50+ queries. Shipped via FastAPI, React/Vite, and Docker.",
    problem:
      "Querying and visualizing complex relational database schemas traditionally requires manual SQL formulation, schema hunting, and reporting latency, leading to slow operational turnaround and human query errors.",
    solution:
      "Engineered an autonomous ReAct agentic workflow with LangGraph and LangChain that dynamically inspects schemas, synthesizes and validates SQL queries, executes them safely against SQLite, generates visual charts and entity diagrams, and synthesizes executive insights in real time.",
    architecture: {
      title: "LangGraph ReAct Autonomous Database Engine",
      flow: [
        "Natural Language User Prompt Ingestion",
        "LangGraph StateGraph & ReAct Planner",
        "Schema Reader Tool (Catalog & Foreign Key Discovery)",
        "SQL Executor Tool (Sandboxed Query Formulation & Run)",
        "Chart Generator Tool (Structured Aggregations)",
        "Diagram Renderer Tool (Entity Relationship Mapping)",
        "Insight Generator Tool (Synthesized Answers)",
        "FastAPI Gateway & React/Vite Streaming UI",
      ],
      description:
        "LangGraph coordinates a cyclical ReAct reasoning loop across 5 specialized LangChain tools. Queries are validated, executed against SQLite databases, converted to live data visualizations and diagrams, and streamed to the user via FastAPI and Docker.",
    },
    technologies: [
      "LangGraph",
      "LangChain",
      "Python",
      "FastAPI",
      "SQLite",
      "React",
      "Vite",
      "Docker",
      "ReAct Agents",
      "Prompt Engineering",
    ],
    implementation: [
      "Built 5 custom LangChain tools: schema reader, SQL executor, chart generator, diagram renderer, and insight generator.",
      "Designed stateful LangGraph cyclical graphs with error recovery and automated SQL correction loops.",
      "Packaged backend services into high-performance asynchronous FastAPI endpoints containerized with Docker.",
      "Engineered React/Vite frontend for real-time prompt-to-visualization feedback.",
    ],
    results: [
      "Cut database interrogation response time from hours to under 2 seconds.",
      "Empirically validated and stress-tested across 50+ diverse test queries with zero execution failures.",
      "Production containerized deployment with reproducible Docker build.",
    ],
    githubUrl: "https://github.com/prasannaraj12",
    caseStudy:
      "AgentDB demonstrates how LangGraph ReAct orchestration enables autonomous agents to securely reason over relational data, validate execution schemas, and provide instant visual insights.",
    stats: [
      { label: "Reasoning Loop", value: "LangGraph ReAct" },
      { label: "Custom Tools", value: "5 LangChain Tools" },
      { label: "Query Latency", value: "< 2 Seconds" },
      { label: "Validation", value: "50+ Test Queries" },
    ],
  },
  {
    id: "llm-finetuning-qwen",
    title: "LLM FINE-TUNING — QWEN",
    subtitle: "QLoRA / PEFT Supervised Fine-Tuning",
    category: "Generative AI / Agents",
    badge: "Fine-Tuned LLM",
    iconName: "BrainCircuit",
    overview:
      "Fine-tuned an open-weight Qwen model end-to-end using Supervised Fine-Tuning with LoRA/QLoRA and PEFT (Unsloth, TRL, Hugging Face Transformers); applied bitsandbytes 4-bit quantization and validated outputs before deploying for optimized inference.",
    problem:
      "General-purpose foundation models exhibit generic outputs, high memory footprints, and suboptimal task performance on specialized domain tasks when deployed on constrained edge or budget cloud hardware.",
    solution:
      "Constructed an end-to-end Supervised Fine-Tuning (SFT) pipeline utilizing Parameter-Efficient Fine-Tuning (PEFT) and LoRA/QLoRA with Unsloth and Hugging Face Transformers. Utilized bitsandbytes 4-bit NormalFloat quantization to drastically reduce VRAM requirements while preserving target task quality.",
    architecture: {
      title: "QLoRA / PEFT Supervised Fine-Tuning Pipeline",
      flow: [
        "Open-Weight Qwen Base Model Ingestion",
        "Domain Dataset Formatting & ChatML Tokenization",
        "bitsandbytes 4-bit NF4 Quantization Matrix",
        "Low-Rank Adaptation (LoRA) Target Projections",
        "TRL SFTTrainer Optimization Loop & Checkpointing",
        "Weight Merging & Parameter Verification",
        "Optimized Low-Latency Inference Deployment",
      ],
      description:
        "Processes raw training sets into structured ChatML tokens, freezes base 4-bit quantized Qwen weights, injects trainable LoRA rank-decomposition matrices, optimizes via Unsloth and TRL SFTTrainer, and exports merged model artifacts for fast inference.",
    },
    technologies: [
      "Qwen",
      "Supervised Fine-Tuning (SFT)",
      "PEFT",
      "LoRA / QLoRA",
      "Unsloth",
      "Hugging Face Transformers",
      "TRL",
      "bitsandbytes",
      "PyTorch",
      "Python",
    ],
    implementation: [
      "Fine-tuned open-weight Qwen end-to-end using Unsloth, Hugging Face Transformers, and TRL.",
      "Tuned LoRA hyperparameters (rank r=16/32, alpha scaling, target attention projections).",
      "Applied bitsandbytes 4-bit quantization (NF4) for 60%+ VRAM memory reduction.",
      "Validated outputs against strict domain evaluation benchmarks before inference deployment.",
    ],
    results: [
      "Over 60% GPU memory reduction via bitsandbytes 4-bit QLoRA training.",
      "High domain instruction adherence verified across dedicated prompt evaluation suites.",
      "Seamless export of deployment-ready model weights for low-latency inference.",
    ],
    githubUrl: "https://github.com/prasannaraj12",
    caseStudy:
      "Demonstrates practical end-to-end LLM fine-tuning mechanics, applying modern parameter-efficient techniques to open-weight foundation models.",
    stats: [
      { label: "Fine-Tuning Method", value: "QLoRA / PEFT" },
      { label: "Base Model", value: "Qwen Open-Weight" },
      { label: "Quantization", value: "bitsandbytes 4-bit" },
      { label: "Frameworks", value: "Unsloth + TRL" },
    ],
  },
  {
    id: "crawlnews",
    title: "CRAWLNEWS",
    subtitle: "Multi-Agent News Intelligence Platform",
    category: "Generative AI / Agents",
    badge: "Multi-Agent System",
    iconName: "Newspaper",
    overview:
      "Built an AI-agent pipeline for automated news collection, deduplication, event clustering, relevance filtering, fact verification, and LLM-based summarization across 31 RSS sources on a 15-minute scheduled cycle (Crawl Corp).",
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
      "AI Agents",
      "Node.js",
      "Express",
      "TypeScript",
      "SQLite",
      "RSS",
      "Playwright",
      "node-cron",
      "React",
    ],
    implementation: [
      "Engineered Orchestrator Agent to manage asynchronous task queues and error recovery.",
      "Implemented Playwright and RSS crawlers with anti-bot resilience.",
      "Constructed semantic clustering to eliminate duplicate stories across 31 RSS sources.",
      "Built interactive React administration console with real-time ingest metrics.",
    ],
    results: [
      "Automated news intelligence cycle operating autonomously on 15-minute scheduled intervals.",
      "Over 90% redundant article reduction achieved through semantic duplicate detection.",
      "End-to-end processing pipeline completes in under 12 seconds per newly published story batch.",
    ],
    githubUrl: "https://github.com/prasannaraj12",
    stats: [
      { label: "Architecture", value: "6 Autonomous Agents" },
      { label: "Schedule", value: "15-Minute Cycle" },
      { label: "Sources", value: "31 RSS Feeds" },
    ],
  },
  {
    id: "rentyourmate",
    title: "RENTYOURMATE",
    subtitle: "Verified-Companion Marketplace Platform",
    category: "Full-Stack AI",
    badge: "Verified Marketplace",
    iconName: "Users",
    overview:
      "Built a full-stack marketplace (Flutter, Node.js/Express, PostgreSQL, Firebase) with secure booking/payment workflows, KYC/selfie verification, and role-based access (Crawl Corp).",
    problem:
      "People seeking platonic event companions, travel buddies, or professional networking accompaniment lack safe, verified platforms with strict identity governance, background checks, and structured escrow payments.",
    solution:
      "Engineered an enterprise-grade mobile and cloud architecture featuring KYC identity verification, geolocation search via OpenStreetMap & Photon, structured time-slot booking schedules, and Razorpay escrow payments.",
    architecture: {
      title: "Secure Verification & Booking Architecture",
      flow: [
        "Flutter Cross-Platform Client",
        "Firebase Auth & Strict KYC/Selfie Verification",
        "Node.js & Express API Backend",
        "PostgreSQL Relational DB (Bookings & Escrow)",
        "OpenStreetMap & Photon Geocoding",
        "Razorpay Payment Gateway Integration",
      ],
      description:
        "User sessions authenticate via Firebase Auth; KYC verification validates national identity documents and selfies before profiles can publish availability. Bookings are transacted through PostgreSQL with strict Razorpay escrow and geocoded via OpenStreetMap.",
    },
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase",
      "KYC / Selfie Verification",
      "Razorpay",
      "OpenStreetMap",
    ],
    implementation: [
      "Architected Flutter mobile app utilizing clean Provider state separation.",
      "Constructed strict KYC and selfie verification workflows with role-based access control.",
      "Integrated OpenStreetMap and Photon API for privacy-preserving localized geocoding.",
      "Implemented transactional PostgreSQL booking state machines with Razorpay webhooks.",
    ],
    results: [
      "Strict trust and safety protocols prioritizing verified, safe, and transparent bookings.",
      "Role-based access control with zero tolerance for unverified profiles.",
      "High performance responsive mobile interface with real-time booking updates.",
    ],
    githubUrl: "https://github.com/prasannaraj12",
    stats: [
      { label: "Platform", value: "Flutter + Node.js" },
      { label: "Database", value: "PostgreSQL + Firebase" },
      { label: "Verification", value: "KYC / Selfie Verified" },
    ],
  },
  {
    id: "trust-cv",
    title: "TRUST-CV / BLOCK SENTINAL",
    subtitle: "Computer Vision Integrity Assurance Platform",
    category: "Computer Vision",
    badge: "210 / 210 Tests Passing",
    iconName: "ShieldCheck",
    overview:
      "Air-gapped Computer Vision Integrity Assurance Platform. Cryptographically verifiable evidence chain. 210/210 tests passing.",
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
    subtitle: "Multispectral Satellite VQA & Captioning",
    category: "Computer Vision",
    badge: "Vision-Language",
    iconName: "Satellite",
    overview:
      "Multispectral satellite image analysis with natural-language visual question answering and image captioning.",
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
    id: "fakeo",
    title: "FAKEO",
    subtitle: "Multimodal Misinformation Detection",
    category: "Machine Learning / NLP",
    badge: "NLP + OCR",
    iconName: "FileSearch",
    overview:
      "Multimodal fake-news detection using XGBoost, TF-IDF, OCR and NLP.",
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
    subtitle: "Smart Irrigation & Soil-Moisture Ecosystem",
    category: "IoT & Hardware",
    badge: "IoT + Gemini",
    iconName: "Cpu",
    overview:
      "IoT-based smart irrigation system using ESP32, soil-moisture sensing and Gemini integration.",
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
    subtitle: "Sports Vision Tracking & Re-ID Pipeline",
    category: "Computer Vision",
    badge: "PyTorch & OpenCV",
    iconName: "Crosshair",
    overview:
      "Computer vision pipeline for player tracking and re-identification using YOLOv5 and DeepSORT.",
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
    id: "chest-xray-ai",
    title: "CHEST X-RAY AI",
    subtitle: "Radiographic Disease Detection & Localization",
    category: "Computer Vision",
    badge: "Medical Imaging",
    iconName: "Activity",
    overview:
      "Medical imaging pipeline combining U-Net segmentation, DenseNet121 classification and Grad-CAM explainability.",
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
      { label: "Domain", value: "Healthcare Research" },
    ],
  },
];
