/**
 * =======================================================================
 * PROJECTS CONFIGURATION
 * =======================================================================
 * Authentic software, research, and engineering projects.
 */

export const projectsData = [
  {
    id: "edge-ai-petroleum",
    title: "Edge AI Framework for Petroleum Products Adulteration Detection",
    category: "research-ai",
    featured: true,
    badge: "MSc Featured Research & IEEE Paper",
    shortDescription: "An on-device Edge AI framework combining physics-guided dataset synthesis, multi-task machine learning, and TFLite model optimization for real-time fuel quality verification.",
    fullDescription: "A complete computational and experimental research project developed at the Centre for Embedded Artificial Intelligence and Smart Energy Systems (CEAISES), ATBU Bauchi. The system diagnoses petroleum adulteration across petrol, diesel, and kerosene using 7-8 physicochemical features (density, refractive index, viscosity, dielectric constant, optical response, colour, temperature). Includes a four-tier architecture achieving 98% fuel classification, 92.38% purity detection, R² of 0.8783 for adulteration percentage, and 89% adulterant identification, with edge inference latency between 1.51 ms and 110.13 ms.",
    objectives: [
      "Real-time adulteration detection on resource-constrained embedded platforms.",
      "Physics-guided dataset generation (5,600 samples) with realistic measurement noise.",
      "Lightweight TFLite dynamic range, Float16, and Float32 models for edge deployment.",
      "Physical experimental verification at ATBU Petroleum Engineering Laboratory."
    ],
    myContribution: "Lead researcher: formulated the physics-guided dataset methodology, engineered feature preprocessing pipelines, trained and optimized Random Forest, XGBoost, and ANN-XGBoost hybrid models, performed computational profiling, and authored the research paper accepted at IEEE ICCOMTECH 2026.",
    technologies: [
      "Python",
      "TensorFlow / Keras",
      "TFLite",
      "XGBoost",
      "Scikit-Learn",
      "Pandas / NumPy",
      "Edge AI",
      "Physics-Guided ML",
      "Embedded Systems"
    ],
    status: "Completed / Accepted for IEEE Publication",
    githubUrl: null,
    researchLink: "#research",
    publicationLink: "#publications",
    image: "/figures/edge_ai_fig1.png",
    imageAlt: "System Architecture of Edge AI Petroleum Adulteration Framework",
    tags: ["Edge AI", "Embedded AI", "Machine Learning", "Energy Systems"]
  },
  {
    id: "stroke-patient-care",
    title: "Real-Time Edge AI-Based System for Stroke Patient Care & Fall Detection",
    category: "research-ai",
    featured: true,
    badge: "MSc Biomedical AI & Computer Vision",
    shortDescription: "A real-time edge computer vision framework using YOLOv8n-Pose for 17 human keypoint tracking and kinematic feature extraction to identify patient falls.",
    fullDescription: "An Edge AI biomedical monitoring framework addressing patient safety during stroke recovery. The pipeline extracts 17 spatial skeletal keypoints per frame using YOLOv8n-Pose and feeds kinematic angle and velocity indicators to lightweight classifiers. Includes high-throughput data processing across the FallVision dataset (5,864 CSV files; 565,477 master feature records with 56 extracted variables) in Python, Pandas, and Google Colab.",
    objectives: [
      "Real-time patient kinematic monitoring and fall anomaly detection.",
      "Pose estimation and skeletal tracking using lightweight YOLOv8n-Pose.",
      "High-throughput keypoint CSV dataset processing and normalization.",
      "Low-latency on-device alerting for clinical care environments."
    ],
    myContribution: "Postgraduate researcher: developed the computer vision keypoint extraction pipeline, processed and normalized 5,864 FallVision CSV files into a 565k-row master training dataset, engineered skeletal angle/velocity features, and built the edge detection pipeline.",
    technologies: [
      "Python",
      "YOLOv8n-Pose",
      "Computer Vision",
      "Edge AI",
      "Pandas & Tqdm",
      "Google Colab",
      "FallVision Dataset",
      "Biomedical Engineering"
    ],
    status: "Research Pipeline Implemented",
    githubUrl: null,
    researchLink: "#research",
    publicationLink: null,
    image: null,
    tags: ["Edge AI", "Computer Vision", "Pose Estimation", "Healthcare AI"]
  },
  {
    id: "hausa-translator-ai",
    title: "HausaTranslatorAI: English-to-Hausa Translation System",
    category: "software",
    featured: true,
    badge: "Open Source Software Project",
    shortDescription: "A Python-based English-to-Hausa translation system leveraging custom translation memory, linguistic dataset processing, and responsive web & desktop interfaces.",
    fullDescription: "An open-source linguistic software engineering project designed to facilitate accessible English-to-Hausa translation. Built around a curated English-Hausa parallel dataset (master_dataset.csv) and translation memory architecture, the repository features clean modular Python code (translator.py, app.py), comprehensive dataset preprocessing scripts, and both desktop GUI and web-based frontend interfaces.",
    architecture: [
      "dataset/master_dataset.csv — Curated English-Hausa parallel linguistic corpus",
      "translation_memory/ — Hash-indexed phrase-matching cache for consistent output",
      "gui/ — Desktop user interface components",
      "app.py & translator.py — Core translation engine and web interface logic"
    ],
    objectives: [
      "Provide an accessible, lightweight offline-capable English-to-Hausa translation tool.",
      "Curate and structure an authentic English-Hausa translation corpus.",
      "Implement translation memory mechanisms for consistent phrase matching.",
      "Provide both desktop GUI and web-based frontend interfaces."
    ],
    myContribution: "Sole developer: collected and processed the English-to-Hausa translation dataset, architected the translation memory logic, implemented the core Python translation engine, developed both web and GUI components, and published the open-source repository on GitHub.",
    technologies: [
      "Python",
      "Translation Memory",
      "Dataset Processing",
      "Flask / Web Interface",
      "Tkinter GUI",
      "Git & GitHub"
    ],
    status: "Active Open-Source Project",
    githubUrl: "https://github.com/Chana165/HausaTranslatorAI",
    researchLink: null,
    publicationLink: null,
    image: null,
    tags: ["Python", "Language Tech", "Open Source", "Software Engineering"]
  },
  {
    id: "childbirth-prediction-system",
    title: "Childbirth Rate Prediction System Using Time Series Analysis",
    category: "software-research",
    featured: true,
    badge: "First-Class BSc Project & Published Paper",
    shortDescription: "A healthcare demographic forecasting system implementing ARIMA time series models to predict regional childbirth trends, built with C# and SQLite.",
    fullDescription: "Developed as a First-Class Honours undergraduate capstone and subsequently published in the International Journal of Research Publication and Reviews (IJRPR). The system analyzes 5 years of historical monthly delivery records (2020–2024) from the Yobe State Specialist Hospital Damaturu using ARIMA time series forecasting to forecast hospital maternity demand and assist administrators with resource and bed allocation.",
    objectives: [
      "Automate demographic childbirth rate forecasting for maternal healthcare management.",
      "Implement ARIMA statistical modeling with stationarity differencing and moving averages.",
      "Deliver an intuitive desktop software system with SQLite local persistence and Bunifu UI components."
    ],
    myContribution: "Lead researcher & developer: conducted data collection at Yobe State Specialist Hospital, performed time series statistical modeling, engineered the C# desktop software, and co-authored the journal publication.",
    technologies: [
      "C#",
      ".NET Framework",
      "ARIMA Modeling",
      "SQLite",
      "Bunifu UI",
      "Time Series Analysis"
    ],
    status: "Published & Deployed for Hospital Case Study",
    githubUrl: null,
    researchLink: "#publications",
    publicationLink: "/papers/IJRPR50316.pdf",
    image: "/assets/childbirth_rate.png",
    imageAlt: "Childbirth Rate Prediction System Infographic and Visualizations",
    tags: ["Time Series", "Healthcare Tech", "C#", "ARIMA"]
  },
  {
    id: "yobe-youth-platform",
    title: "Yobe Youth Alliance Movement Forum Platform",
    category: "software",
    featured: false,
    badge: "Web Platform Development",
    shortDescription: "A community engagement and communication web platform facilitating youth collaboration, digital forums, and civic initiatives across Yobe State.",
    fullDescription: "A full-featured community web platform built to empower youth collaboration, event announcements, and civic engagement. Features user authentication, discussion threads, event scheduling, and administrative moderation controls.",
    objectives: [
      "Facilitate digital communication and community organizing.",
      "Provide secure user accounts, forum discussions, and notification channels."
    ],
    myContribution: "Full stack developer: designed database schema, implemented server-side logic in PHP, designed responsive frontend interfaces, and managed deployment.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5 / CSS3",
      "Bootstrap"
    ],
    status: "Completed",
    githubUrl: null,
    researchLink: null,
    publicationLink: null,
    image: null,
    tags: ["Web Development", "PHP", "MySQL", "Community"]
  },
  {
    id: "chanabyte-automation",
    title: "Chanabyte Technologies: Embedded Systems & Smart Automation Deployments",
    category: "engineering",
    featured: false,
    badge: "Commercial / Technical Engineering",
    shortDescription: "Field deployments of intelligent CCTV surveillance, smart automation, sensor monitoring, and IT hardware solutions for corporate and institutional clients.",
    fullDescription: "Practical engineering implementations conducted under Chanabyte Technologies (CAC-registered). Projects span intelligent sensing installations, CCTV surveillance networks, hardware diagnostics, microcontroller automation, and technical training in computing and robotics.",
    objectives: [
      "Deliver reliable intelligent security, smart sensing, and network infrastructure.",
      "Provide practical hands-on technical training in computing, data analysis, and robotics."
    ],
    myContribution: "Founder & Lead Technical Consultant: system design, field hardware deployment, client technical support, and curriculum instruction.",
    technologies: [
      "Embedded Systems",
      "Sensor Integration",
      "CCTV & Surveillance",
      "Network Engineering",
      "Smart Automation"
    ],
    status: "Ongoing Enterprise Operations",
    githubUrl: null,
    researchLink: null,
    publicationLink: null,
    image: null,
    tags: ["Embedded Systems", "IoT", "Automation", "Technical Support"]
  }
];

export const projectCategories = [
  { key: "all", label: "All Projects" },
  { key: "research-ai", label: "AI & Research" },
  { key: "software", label: "Software & Open Source" },
  { key: "engineering", label: "Embedded & Engineering" }
];
