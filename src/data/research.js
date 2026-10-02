/**
 * =======================================================================
 * RESEARCH DATA CONFIGURATION
 * =======================================================================
 * Author: Abdullahi Yusuf Umar
 * Institution: Abubakar Tafawa Balewa University (ATBU), Bauchi, Nigeria
 * Research Center: Centre for Embedded Artificial Intelligence and Smart Energy Systems (CEAISES)
 * 
 * Reusable research project schema with complete authentic research data.
 */

export const researchProfile = {
  summary: "My research investigates the design, optimization, and deployment of lightweight artificial intelligence architectures on resource-constrained embedded and edge platforms. I focus on developing real-time intelligent sensing systems that bridge physical sensory signals (optical, fluidic, kinematic) with edge inference pipelines for industrial quality assurance, energy systems, and clinical healthcare monitoring.",
  keyMetrics: [
    { label: "Research Focus", value: "Edge AI & Real-Time Intelligent Systems" },
    { label: "Core Center", value: "CEAISES, ATBU Bauchi" },
    { label: "Primary Venue", value: "IEEE ICCOMTECH 2026 (Accepted/Presented)" },
    { label: "Undergraduate Distinction", value: "First Class Honours (4.66 / 5.0)" }
  ]
};

export const majorResearchFocus = [
  {
    id: "edge-ai",
    title: "Edge AI & Embedded Intelligence",
    tagline: "Low-latency on-device inference",
    icon: "Cpu",
    description: "Designing lightweight neural networks, decision ensembles, and quantization pipelines (TFLite Dynamic Range, FP16, INT8) for sub-10ms inference on embedded microcomputers without cloud dependency.",
    technologies: ["TensorFlow Lite", "Quantization", "Model Optimization", "Raspberry Pi", "Edge Neural Nets"],
    keywords: ["TensorFlow Lite", "Quantization", "Model Optimization", "Raspberry Pi", "Edge Neural Nets"]
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Pose Estimation",
    tagline: "Human kinematics & skeletal tracking",
    icon: "Eye",
    description: "Spatial-temporal skeletal keypoint extraction (YOLOv8n-Pose) and kinematic feature transformation for clinical monitoring, fall detection, and automated patient diagnostics.",
    technologies: ["YOLOv8n-Pose", "17 Anatomical Keypoints", "Kinematic Analysis", "OpenCV", "Python"],
    keywords: ["YOLOv8n-Pose", "17 Anatomical Keypoints", "Kinematic Analysis", "OpenCV", "Python"]
  },
  {
    id: "intelligent-sensing",
    title: "Intelligent Sensing & Fluid Diagnostics",
    tagline: "Physics-guided data synthesis",
    icon: "Activity",
    description: "Multi-spectral physicochemical liquid analysis (density, refractive index, dielectric constant, optical absorbance, colour) coupled with machine learning for real-time fuel quality verification.",
    technologies: ["Physics-Guided ML", "ASTM Standards", "Optical Sensing", "Ensemble Models", "Lab Validation"],
    keywords: ["Physics-Guided ML", "ASTM Standards", "Optical Sensing", "Ensemble Models", "Lab Validation"]
  },
  {
    id: "healthcare-ai",
    title: "AI in Healthcare & Biomedical Systems",
    tagline: "Assistive healthcare & demographic modeling",
    icon: "HeartPulse",
    description: "Applied machine learning for patient safety monitoring, clinical movement anomaly recognition, and demographic time-series forecasting for healthcare resource planning.",
    technologies: ["Stroke Patient Monitoring", "FallVision Dataset", "Time Series (ARIMA)", "Healthcare Informatics"],
    keywords: ["Stroke Patient Monitoring", "FallVision Dataset", "Time Series (ARIMA)", "Healthcare Informatics"]
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems & Smart Automation",
    tagline: "Hardware-software co-design & IoT",
    icon: "Layers",
    description: "Prototyping microcontroller systems, sensor integration, IP surveillance networks, and intelligent automation systems for industrial and corporate deployments.",
    technologies: ["Microcontrollers", "Sensor Fusion", "CCTV Infrastructure", "Smart Automation", "Hardware Support"],
    keywords: ["Microcontrollers", "Sensor Fusion", "CCTV Infrastructure", "Smart Automation", "Hardware Support"]
  },
  {
    id: "ai-security",
    title: "AI Security & Model Robustness",
    tagline: "Resilient decision boundaries",
    icon: "ShieldCheck",
    description: "Evaluating model generalization, noise perturbation modeling (Gaussian noise injection), and boundary stability in safety-critical edge environments.",
    technologies: ["Noise Emulation", "Adversarial Robustness", "Model Verification", "Sensor Drift Defense"],
    keywords: ["Noise Emulation", "Adversarial Robustness", "Model Verification", "Sensor Drift Defense"]
  }
];

// Alias for backward compatibility
export const researchAreas = majorResearchFocus;

/**
 * FEATURED RESEARCH 1:
 * Master's Thesis & IEEE ICCOMTECH 2026 Paper
 */
export const featuredResearch = {
  id: "petroleum-adulteration",
  title: "Development of an Edge AI Framework for Real-Time Detection of Petroleum Products Adulteration",
  shortTitle: "Edge AI Framework for Petroleum Products Adulteration Detection",
  status: "Accepted & Presented — IEEE ICCOMTECH 2026 (Proceedings Pending)",
  conference: "2026 IEEE International Conference on Computing Technology (ICCOMTECH)",
  conferenceDates: "September 28 – 30, 2026",
  conferenceWebsite: "https://attend.ieee.org/iccomtech-2026/",
  paperRef: "ICCOMTECH2026-102",
  authors: [
    { name: "Abdullahi Yusuf Umar", role: "Lead Researcher", affiliation: "Center for Embedded Artificial Intelligence and Smart Energy Systems (CEAISES), ATBU Bauchi", email: "ayumar.pg@atbu.edu.ng" },
    { name: "Ganiyu A. Bakare", role: "Co-Author / Supervisor", affiliation: "Center for Embedded Artificial Intelligence and Smart Energy Systems (CEAISES), ATBU Bauchi", email: "gbakare@atbu.edu.ng" },
    { name: "Ibrahim A. Dodo Sulaiman", role: "Co-Author / Domain Expert", affiliation: "Department of Petroleum Engineering, ATBU Bauchi", email: "sdibrahim@atbu.edu.ng" }
  ],
  keywords: [
    "Edge AI",
    "Petroleum Products Adulteration",
    "Physics-Guided Dataset",
    "Real-Time Detection",
    "Random Forest",
    "XGBoost",
    "LMT-ANN",
    "Embedded Systems"
  ],
  overview: "Petroleum product adulteration remains a critical challenge in fuel quality assurance, particularly in developing economies where on-site field testing systems are nonexistent or prohibitive. Conventional laboratory detection methods (such as gas chromatography and FTIR spectroscopy) are accurate but expensive, time-intensive, and impossible to deploy at retail dispensing points. This research designs and validates an Edge AI framework capable of real-time multi-fuel classification, purity detection, adulteration level estimation, and adulterant identification on low-cost edge platforms.",
  abstract: "Petroleum products adulteration remains a critical challenge in fuel quality assurance, particularly in developing regions where on-site detection systems are limited. Conventional laboratory-based detection methods and sensor systems are often costly, time-intensive, and unsuitable for deployment at fuel dispensing points. This paper presents an Edge AI framework for real-time detection of adulteration in petrol, diesel, and kerosene, with the objective of developing a low-cost, lightweight, and deployable intelligent system capable of operating under resource-constrained conditions. A physics-guided dataset comprising 5,600 samples was generated using standardized physicochemical properties of petroleum products, with simulated adulteration introduced at 5 to 50% concentration levels and noise injection to emulate real sensor variability. Four machine learning models were implemented for fuel classification, purity detection, adulteration level estimation, and adulterant identification using Random Forest, XGBoost, Artificial neural networks, and ensemble learning techniques. The framework demonstrates 98% accuracy for fuel classification, 92% accuracy with ROC-AUC of 0.95 for purity detection, an R2 value of 0.88 for adulteration level estimation, and 89% accuracy for adulterant classification. Independent laboratory measurements provided physical support for the simulated dataset, while computational analysis showed model sizes of 0.25 to 5.90 MB and inference latencies of 1.51 to 110.13 ms. The models were optimized through feature reduction using importance ranking and controlled polynomial expansion, enabling efficient deployment on edge devices such as Raspberry Pi. The results prove that physics-guided feature synthesis combined with lightweight machine learning models provides an effective basis for real-time petroleum adulteration detection under resource-constrained conditions.",
  sections: {
    problemStatement: {
      title: "The Research Problem & Motivation",
      content: "Adulteration of Premium Motor Spirit (PMS/Petrol), Automotive Gas Oil (AGO/Diesel), and Dual Purpose Kerosene (DPK) causes widespread vehicle engine breakdowns, toxic tailpipe emissions, and billions in economic losses across developing nations. While laboratory techniques like Gas Chromatography and FTIR spectrometry provide definitive chemical assays, they require stationary laboratories, skilled chemists, and days of turnaround time. Commercial gas-sensor systems often suffer from thermal drift and cross-sensitivity. Cloud-based AI systems fail in rural fuel stations due to intermittent internet connectivity. An autonomous, on-device Edge AI framework is essential for real-time verification at point-of-sale terminals."
    },
    objectives: {
      title: "Research Objectives",
      items: [
        "Synthesize a physics-guided multi-fuel adulteration dataset (5,600 samples) incorporating realistic measurement noise and non-linear mixing models across 5% to 50% adulteration concentrations.",
        "Develop lightweight machine learning and hybrid neural architectures targeting four core diagnostic tasks: fuel classification, purity verification, adulteration percentage estimation, and adulterant identification.",
        "Perform empirical laboratory measurement validation at the ATBU Petroleum Engineering Laboratory using commercial fuel samples and standard liquid adulterants.",
        "Optimize and serialize the trained models into lightweight edge-ready formats (TFLite, ONNX, serialized picklers) suitable for sub-100ms inference on resource-constrained embedded hardware such as Raspberry Pi."
      ]
    },
    datasetDetails: {
      title: "Physics-Guided Dataset Synthesis",
      summary: "5,600 samples across petrol, diesel, and kerosene with standardized physicochemical parameters following ASTM specifications.",
      metrics: [
        { label: "Total Samples", value: "5,600" },
        { label: "Feature Dimensions", value: "7 - 8 Physicochemical Features" },
        { label: "Pure Fuel Baseline", value: "64.3% (3,601 samples)" },
        { label: "Adulterated Samples", value: "35.7% (1,999 samples)" },
        { label: "Adulteration Range", value: "5% to 50% v/v" },
        { label: "Adulterant Types", value: "Kerosene, Diesel, Water, Waste Engine Oil, Methanol, Ethanol" },
        { label: "Data Partitioning", value: "70% Training / 15% Validation / 15% Test (Stratified)" }
      ],
      featuresUsed: [
        "Density (g/cm³ at reference temperatures)",
        "Kinematic Viscosity (mm²/s)",
        "Refractive Index (n)",
        "Dielectric Constant (ε)",
        "Optical Sensor / Absorbance Value",
        "Colour Value (Lovibond / ASTM Scale)",
        "Temperature (°C)",
        "Flash Point (°C, where applicable)"
      ]
    },
    modelArchitecture: {
      title: "Model Development & Four-Tier Diagnostic Pipeline",
      tasks: [
        {
          taskName: "Task 1: Fuel Type Classification",
          algorithm: "Random Forest (300 Trees, Gini Impurity)",
          performance: "98.0% Accuracy",
          detail: "Accurately discriminates between PMS (petrol), AGO (diesel), and DPK (kerosene) using multi-spectral and physicochemical signatures with minimal misclassification."
        },
        {
          taskName: "Task 2: Fuel Purity Detection",
          algorithm: "XGBoost Classifier (300 Trees, lr=0.05, max_depth=6)",
          performance: "92.38% Accuracy | ROC-AUC: 0.95",
          detail: "Performs binary decision distinguishing pure fuel from contaminated fuel samples with high true-positive sensitivity and low false-alarm rate."
        },
        {
          taskName: "Task 3: Adulteration Level Estimation",
          algorithm: "Hybrid ANN–XGBoost Regressor (17,409 params + 400 trees)",
          performance: "R² = 0.8783 | MAE = 2.82%",
          detail: "Employs degree-2 polynomial expansion, tapered neural architecture with batch normalization and dropout, combined via ensemble averaging with an XGBoost regressor."
        },
        {
          taskName: "Task 4: Adulterant Identification",
          algorithm: "Multi-Class XGBoost (2,800 trees, lr=0.05, max_depth=6)",
          performance: "89.0% Classification Accuracy",
          detail: "Identifies the specific foreign contaminant added to the base fuel (e.g., kerosene in petrol, waste oil in diesel, industrial alcohols)."
        }
      ]
    },
    computationalAnalysis: {
      title: "Computational Complexity & Edge Suitability",
      description: "Rigorous profiling of storage footprints and inference latencies demonstrates full feasibility for local execution on embedded microcomputers without cloud offloading.",
      tableData: [
        { model: "Random Forest (Fuel Classification)", complexity: "300 trees", latency: "80.17 ms", size: "5.90 MB" },
        { model: "XGBoost (Purity Detection)", complexity: "300 trees", latency: "1.75 ms", size: "0.63 MB" },
        { model: "ANN Regressor (Adulteration Level)", complexity: "17,409 parameters", latency: "91.86 ms", size: "0.25 MB" },
        { model: "Hybrid ANN–XGBoost", complexity: "17,409 params + 400 trees", latency: "110.13 ms", size: "1.74 MB" },
        { model: "XGBoost (Adulterant Classification)", complexity: "2,800 trees", latency: "1.51 ms", size: "3.64 MB" },
        { model: "Overall Framework Range", complexity: "Unified Pipeline", latency: "1.51 – 110.13 ms", size: "0.25 – 5.90 MB" }
      ],
      note: "Hardware Note: Models have been prepared and serialized for edge deployment (TFLite Dynamic Range, Float16, and Float32 models). Physical Raspberry Pi hardware benchmark measurements remain future field work as noted in research project documentation."
    },
    laboratoryValidation: {
      title: "Physical Laboratory Validation",
      venue: "Petroleum Laboratory, Department of Petroleum Engineering, ATBU Bauchi",
      content: "To validate the physical consistency of the simulated physics-guided dataset, real physical fuel samples (PMS, AGO, DPK) were procured and experimentally blended with controlled volumetric fractions (0% to 50% v/v) of kerosene, diesel, water, waste engine oil, methanol, and ethanol on a 200 mL mixture basis. Laboratory measurements of density, viscosity, refractive index, dielectric constant, and colour verified that the simulated dataset faithfully mirrors real chemical-physical blending characteristics."
    },
    figures: [
      {
        id: "fig1",
        src: "/figures/edge_ai_fig1.png",
        title: "System Architecture of the Edge AI Framework",
        caption: "Figure 1: High-level architectural pipeline illustrating physics-guided dataset generation, feature preprocessing, multi-task ML model training, edge optimization, and deployment packaging."
      },
      {
        id: "fig2",
        src: "/figures/edge_ai_fig2.png",
        title: "Confusion Matrix for Fuel Classification",
        caption: "Figure 2: Confusion matrix showing 98% fuel classification accuracy with near-zero confusion between petrol, diesel, and kerosene."
      },
      {
        id: "fig3",
        src: "/figures/edge_ai_fig3.png",
        title: "ROC Curve for Fuel Purity Detection",
        caption: "Figure 3: Receiver Operating Characteristic (ROC) curve showing exceptional discrimination (ROC-AUC = 0.95) for fuel adulteration detection."
      },
      {
        id: "fig4",
        src: "/figures/edge_ai_fig4.png",
        title: "Training & Validation Loss for ANN-XGBoost Regressor",
        caption: "Figure 4: Convergence history demonstrating stable loss minimization without overfitting on the adulteration level estimation task."
      },
      {
        id: "fig5",
        src: "/figures/edge_ai_fig5.png",
        title: "Feature Importance for Adulterant Identification",
        caption: "Figure 5: Feature importance rankings highlighting the dominant physical discriminators (density, refractive index, and optical response) for detecting foreign contaminants."
      }
    ],
    researchContributions: [
      "Development of the first unified Edge AI framework integrating multi-fuel classification, purity detection, continuous percentage estimation, and contaminant identification in a single edge-deployable pipeline.",
      "A novel physics-guided dataset methodology bridging theoretical fluid mixing laws, Gaussian noise emulation, and experimental petroleum laboratory data.",
      "Comprehensive computational complexity benchmarking showing ultra-low latencies (1.51 ms for contaminant classification) and compact memory foot-prints (down to 0.25 MB).",
      "Full serialization into TFLite and edge-ready formats for autonomous deployment at fuel dispensing stations without internet connectivity."
    ]
  }
};

/**
 * FEATURED RESEARCH 2:
 * MSc Biomedical Edge AI & Stroke Patient Care
 */
export const strokePatientCareResearch = {
  id: "stroke-patient-care",
  title: "Development of a Real-Time Edge AI-Based System for Stroke Patient Care",
  shortTitle: "Edge AI Stroke Patient Care & Fall Detection",
  status: "Dataset Engineering & Pipeline Completed",
  category: "MSc Biomedical AI Research",
  institution: "Centre for Embedded AI & Smart Energy Systems (CEAISES), ATBU Bauchi",
  year: "2025 – 2026",
  overview: "Post-stroke clinical rehabilitation requires continuous, privacy-preserving monitoring to detect accidental falls and abnormal movement kinematics without high-latency cloud transmission. This research engineers a real-time Edge AI pipeline utilizing YOLOv8n-Pose for 17 anatomical skeletal keypoint tracking coupled with spatial-temporal kinematic feature extraction.",
  abstract: "Post-stroke clinical rehabilitation requires continuous, privacy-preserving monitoring to detect accidental falls and abnormal movement kinematics without high-latency cloud transmission. This research engineers a real-time Edge AI pipeline utilizing YOLOv8n-Pose for 17 anatomical skeletal keypoint tracking coupled with spatial-temporal kinematic feature extraction. To support robust learning, a large-scale data engineering pipeline was established using the FallVision dataset, processing 5,864 raw CSV video sequences and synthesizing a 565,477-row master feature matrix across 56 spatial and velocity dimensions. The resulting lightweight pipeline enables sub-second on-device anomaly classification for clinical care environments.",
  focusAreas: [
    "Computer Vision",
    "YOLOv8n-Pose",
    "17 Keypoints",
    "Kinematic Analysis",
    "FallVision Dataset",
    "Edge AI",
    "Biomedical Alerting"
  ],
  datasetEngineering: {
    datasetName: "FallVision Dataset Processing & High-Throughput Engineering",
    summary: "High-throughput data engineering and transformation pipeline synthesizing raw video coordinate CSVs into a standardized, balanced machine learning feature matrix.",
    environment: "Python 3.10 • Google Colab Pro • Pandas • Tqdm",
    rawFilesMetrics: [
      { label: "Raw CSV Files Processed", value: "5,864 CSV Files" },
      { label: "Video Scenarios", value: "Chair Falls, Bed Falls, Standing Falls, ADL (Daily Living)" },
      { label: "Subjects / Participants", value: "Multi-Subject Experimental Cohort" },
      { label: "Coordinate Tracking", value: "17 Skeletal Anatomical Keypoints (x, y, confidence)" }
    ],
    masterDatasetMetrics: [
      { label: "Total Matrix Rows", value: "565,477 Rows" },
      { label: "Feature Dimensions", value: "56 Extracted Biomechanical Features" },
      { label: "Non-Fall ADL Records", value: "319,092 Samples (56.4%)" },
      { label: "Fall Anomaly Records", value: "246,385 Samples (43.6%)" },
      { label: "Kinematic Features", value: "Joint Angles, Trunk Tilt, Velocity Vectors, Acceleration" },
      { label: "Storage Format", value: "Optimized Parquet & Compressed CSV for Low Memory Overhead" }
    ]
  },
  pipelineSteps: [
    { step: "Video Ingestion & Edge Frame Capture", detail: "Low-power camera sensor captures ambient patient movement at 30 FPS in clinical or home care rooms." },
    { step: "17-Keypoint Skeletal Pose Extraction", detail: "YOLOv8n-Pose processes raw frames on-device, extracting normalized (x, y) coordinates and confidence scores for 17 anatomical keypoints." },
    { step: "Biomechanical Motion & Angle Engineering", detail: "Calculates trunk tilt angles, center-of-mass trajectory, descent velocities, and multi-frame displacement vectors." },
    { step: "Low-Latency Edge Anomaly Classifier", detail: "Lightweight quantized decision model evaluates kinematic indicators to distinguish normal activities of daily living (ADL) from sudden fall events in under 20ms." },
    { step: "Immediate On-Device Clinical Alerting", detail: "Dispatches emergency local visual/auditory alerts and triggers low-bandwidth MQTT notifications to medical personnel." }
  ],
  technologies: [
    "Python",
    "YOLOv8n-Pose",
    "Computer Vision",
    "Edge AI",
    "Pandas & Tqdm",
    "Google Colab",
    "Biomedical Engineering",
    "FallVision Dataset"
  ],
  contribution: "Constructed an end-to-end Edge AI skeletal tracking and dataset engineering framework with over 565,000 validated feature instances, establishing a foundation for on-device clinical fall detection and movement assessment without cloud latency or patient privacy compromise."
};

/**
 * Array of research projects for listing, filtering, and modal exploration
 */
export const selectedResearchProjects = [
  {
    id: "petroleum-adulteration",
    title: featuredResearch.title,
    shortTitle: featuredResearch.shortTitle,
    category: "MSc Thesis Research",
    status: featuredResearch.status,
    year: "2025 – 2026",
    summary: featuredResearch.overview,
    abstract: featuredResearch.abstract,
    problemStatement: featuredResearch.sections.problemStatement.content,
    objectives: featuredResearch.sections.objectives.items,
    methodology: "The system integrates physics-guided dataset generation following ASTM liquid specifications, multi-task supervised training, and edge serialization. Four supervised models were trained on 7-8 physicochemical features (density, viscosity, refractive index, dielectric constant, optical sensor, colour value, temperature). Random Forest (300 trees) was used for fuel classification; XGBoost (300 trees) for purity detection; a hybrid ANN–XGBoost regressor (17,409 params + 400 trees) for adulteration percentage; and multiclass XGBoost (2,800 trees) for adulterant identification. Models were quantized into TFLite formats for edge microcomputers.",
    technologies: [
      "Python",
      "TensorFlow / Keras",
      "TFLite",
      "XGBoost",
      "Random Forest",
      "Scikit-Learn",
      "Pandas & NumPy",
      "Edge AI",
      "ASTM Standards"
    ],
    contribution: "Delivered the first unified Edge AI framework capable of simultaneous fuel classification (98%), purity detection (92.38%, ROC-AUC 0.95), continuous adulteration estimation (R² 0.8783, MAE 2.82%), and adulterant classification (89%) with ultra-low latency (1.51 ms to 110 ms) and compact storage footprints (0.25 MB to 5.9 MB). Validated physically at the ATBU Petroleum Engineering Laboratory.",
    publications: [
      {
        title: "Development of an Edge AI Framework for Real-Time Detection of Petroleum Products Adulteration",
        venue: "2026 IEEE International Conference on Computing Technology (ICCOMTECH)",
        status: "Accepted & Presented — Proceedings Publication Pending",
        ref: "ICCOMTECH2026-102",
        link: "https://attend.ieee.org/iccomtech-2026/",
        pdfUrl: "/papers/ICCOMTECH2026-102.pdf"
      }
    ],
    figures: featuredResearch.sections.figures,
    documents: [
      {
        title: "Official IEEE Paper Acceptance Letter",
        fileUrl: "/papers/ICCOMTECH2026-102.pdf",
        type: "PDF Document"
      }
    ],
    links: [
      {
        label: "IEEE ICCOMTECH 2026 Portal",
        url: "https://attend.ieee.org/iccomtech-2026/"
      }
    ]
  },
  {
    id: "stroke-patient-care",
    title: strokePatientCareResearch.title,
    shortTitle: strokePatientCareResearch.shortTitle,
    category: strokePatientCareResearch.category,
    status: strokePatientCareResearch.status,
    year: strokePatientCareResearch.year,
    summary: strokePatientCareResearch.overview,
    abstract: strokePatientCareResearch.abstract,
    problemStatement: "Post-stroke patients face severe risks from unwitnessed falls and movement degeneration. Conventional surveillance compromises privacy and cloud AI incurs unacceptable latency. A local on-device Edge AI vision pipeline guarantees instantaneous fall detection while preserving patient dignity.",
    objectives: [
      "Real-time patient kinematic monitoring and fall anomaly detection on edge compute hardware.",
      "Skeletal pose estimation and tracking utilizing lightweight YOLOv8n-Pose across 17 anatomical keypoints.",
      "High-throughput data engineering across 5,864 FallVision CSV files into a 565k-row master training dataset.",
      "Derivation of spatial-temporal biomechanical indicators (tilt angles, velocity anomalies) for clinical alerting."
    ],
    methodology: "The system ingests video streams on edge compute units, extracts (x, y) coordinates and confidence scores for 17 anatomical keypoints using YOLOv8n-Pose, and transforms them into biomechanical motion vectors. High-throughput data processing was implemented in Python, Pandas, and Tqdm on Google Colab, aggregating 5,864 CSV files into a 565,477 × 56 master feature matrix (319,092 non-fall and 246,385 fall records across chair, bed, and standing scenarios).",
    technologies: strokePatientCareResearch.technologies,
    contribution: strokePatientCareResearch.contribution,
    publications: [],
    figures: [],
    documents: [],
    links: []
  }
];

export const futureResearchInterests = [
  {
    topic: "Neuromorphic & Ultra-Low-Power Edge Intelligence",
    description: "Investigating spike-based computing and sub-milliwatt neural architectures for persistent sensing in off-grid IoT and environmental monitoring devices."
  },
  {
    topic: "Physics-Informed Neural Networks (PINNs) in Fluid Diagnostics",
    description: "Incorporating fluid-dynamic equations and chemical thermodynamics directly into neural loss functions for enhanced accuracy in liquid characterization."
  },
  {
    topic: "Privacy-Preserving Multi-Modal Clinical Edge AI",
    description: "Combining lightweight on-device vision with radar and non-invasive acoustic sensors for contactless, highly reliable patient monitoring in intensive care units."
  },
  {
    topic: "Adversarial Robustness in Safety-Critical Cyber-Physical Systems",
    description: "Developing self-healing edge neural architectures that autonomously detect, isolate, and compensate for sensor drift and adversarial sensor perturbations."
  }
];

export const conferencesData = [
  {
    id: "iccomtech-2026",
    conference: "2026 IEEE International Conference on Computing Technology (ICCOMTECH)",
    shortName: "IEEE ICCOMTECH 2026",
    dates: "September 28 – 30, 2026",
    role: "Paper Presenter & Lead Author",
    session: "Artificial Intelligence & Machine Learning (AI/ML) Technical Session",
    paperTitle: "Development of an Edge AI Framework for Real-Time Detection of Petroleum Products Adulteration",
    authors: "Abdullahi Yusuf Umar, Ganiyu A. Bakare, Ibrahim A. Dodo Sulaiman",
    status: "Accepted & Presented — Proceedings Publication Pending",
    ref: "ICCOMTECH2026-102",
    acceptanceLetterUrl: "/papers/ICCOMTECH2026-102.pdf",
    conferenceWebsite: "https://attend.ieee.org/iccomtech-2026/",
    description: "Peer-reviewed presentation on physics-guided dataset generation and lightweight machine learning models for on-device multi-fuel quality diagnostics."
  }
];
