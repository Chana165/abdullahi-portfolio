/**
 * =======================================================================
 * PUBLICATIONS & RESEARCH PAPERS CONFIGURATION
 * =======================================================================
 * IMPORTANT: Strictly verified against official documents in workspace.
 * No fabricated DOIs, publication dates, or bibliographic items.
 */

export const publicationsData = [
  {
    id: "iccomtech-2026",
    category: "accepted", // "published" | "accepted" | "in_review" | "working_paper"
    badge: "Accepted / Presented — Proceedings Publication Pending",
    type: "Conference Paper",
    title: "Development of an Edge AI Framework for Real-Time Detection of Petroleum Products Adulteration",
    authors: [
      { name: "Abdullahi Yusuf Umar", isPrimary: true, affiliation: "CEAISES, ATBU Bauchi" },
      { name: "Ganiyu A. Bakare", isPrimary: false, affiliation: "CEAISES, ATBU Bauchi" },
      { name: "Ibrahim A. Dodo Sulaiman", isPrimary: false, affiliation: "Dept of Petroleum Engineering, ATBU Bauchi" }
    ],
    authorsText: "Abdullahi Yusuf Umar, Ganiyu A. Bakare, and Ibrahim A. Dodo Sulaiman",
    venue: "2026 IEEE International Conference on Computing Technology (ICCOMTECH)",
    venueShort: "IEEE ICCOMTECH 2026",
    session: "Artificial Intelligence & Machine Learning (AI/ML) Technical Session",
    year: "2026",
    dates: "September 28 – 30, 2026",
    location: "IEEE Conference",
    statusNote: "Official acceptance letter ref: ICCOMTECH2026-102. Paper presented; final publication in IEEE conference proceedings is pending.",
    doi: null, // Left null - not fabricated
    paperUrl: "https://attend.ieee.org/iccomtech-2026/",
    pdfUrl: "/papers/ICCOMTECH2026-102.pdf", // Official acceptance letter PDF
    pdfLabel: "View Acceptance Letter",
    abstract: "Petroleum products adulteration remains a critical challenge in fuel quality assurance, particularly in developing regions where on-site detection systems are limited. Conventional laboratory-based detection methods and sensor systems are often costly, time-intensive, and unsuitable for deployment at fuel dispensing points. This paper presents an Edge AI framework for real-time detection of adulteration in petrol, diesel, and kerosene, operating under resource-constrained conditions using physics-guided dataset synthesis, Random Forest, XGBoost, and lightweight neural models.",
    tags: ["Edge AI", "Petroleum Adulteration", "Physics-Guided ML", "Real-Time Systems", "IEEE ICCOMTECH"]
  },
  {
    id: "ijrpr-2025",
    category: "published",
    badge: "Published Peer-Reviewed Journal Paper",
    type: "Journal Paper",
    title: "Childbirth Rate Prediction System Based on Time Series Analysis",
    authors: [
      { name: "Abdullahi Yusuf Umar", isPrimary: true, affiliation: "Yobe State University" },
      { name: "Dr. Adamu Abdullahi Garba", isPrimary: false, affiliation: "Yobe State University" },
      { name: "Dr. Audu Musa Mabu", isPrimary: false, affiliation: "Yobe State University" },
      { name: "Mr. Ibrahim Bukar Dauba", isPrimary: false, affiliation: "Yobe State University" }
    ],
    authorsText: "Abdullahi Yusuf Umar, Dr. Adamu Abdullahi Garba, Dr. Audu Musa Mabu, and Mr. Ibrahim Bukar Dauba",
    venue: "International Journal of Research Publication and Reviews (IJRPR)",
    venueShort: "IJRPR, Vol. 6, Issue 7",
    volume: "Vol. 6, Issue 7, pp. 2355–2360",
    issn: "2582-7421",
    year: "2025",
    month: "July 2025",
    statusNote: "Published paper from undergraduate B.Sc. First Class research.",
    doi: null, // Left null as not assigned in document
    paperUrl: "https://www.ijrpr.com",
    pdfUrl: "/papers/IJRPR50316.pdf",
    pdfLabel: "Download Paper PDF",
    infographicUrl: "/assets/childbirth_rate.png",
    abstract: "Prediction of childbirth rates using time series analysis is a critical task in healthcare resource allocation. This work developed a computerized prediction system using the waterfall software engineering lifecycle and monthly childbirth records from the Yobe State Specialist Hospital Damaturu across five years (2020 to 2024). An ARIMA model was implemented with C# and SQLite to forecast childbirth trends (predicting 2,659 in 2025, 2,709 in 2026, and 2,721 in 2027 births), aiding maternal health administrators in resource planning.",
    tags: ["Time Series Analysis", "ARIMA", "Healthcare Informatics", "C# / SQLite", "IJRPR Journal"]
  }
];

export const publicationCategories = [
  { key: "all", label: "All Works" },
  { key: "accepted", label: "Accepted / Presented" },
  { key: "published", label: "Published Journals" }
];
