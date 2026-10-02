# Abdullahi Yusuf Umar — Academic, Research & Technology Portfolio

> **Official Personal Academic & Research Portfolio Website**  
> Computer Science Graduate (First Class Honours, GPA: 4.66/5.0) & MSc Embedded Artificial Intelligence Researcher  
> Specializing in Edge AI, Intelligent Sensing, Computer Vision, and Real-Time Intelligent Systems.

---

## 🚀 Overview

This website is a modern, high-performance, responsive academic and research portfolio designed specifically for:
- PhD and fully funded doctoral scholarship applications
- Academic collaborations and university research laboratory recruitment
- IEEE conference and research dissemination
- Professional technology consulting and software engineering opportunities
- Centralized showcase of verified publications, projects, certifications, and technical proficiencies

Built with **React 19**, **Vite 8**, **Vanilla CSS Design System**, and **Lucide React**.

---

## 📂 Project Architecture

```
AbdullahiPortfolio/
├── public/
│   ├── assets/
│   │   ├── profile.jpg          # Professional portrait photograph
│   │   └── childbirth_rate.png  # Research infographic for published paper
│   ├── certificates/
│   │   ├── ieee_membership.jpg   # IEEE Student Membership Certificate image
│   │   ├── isac_membership.jpg   # ISAC Regular Membership Certificate image
│   │   └── MEMIEEE500.pdf        # IEEE Membership Official PDF
│   ├── figures/
│   │   ├── edge_ai_fig1.png     # Figure 1: Edge AI System Architecture
│   │   ├── edge_ai_fig2.png     # Figure 2: Confusion Matrix (98% accuracy)
│   │   ├── edge_ai_fig3.png     # Figure 3: ROC Curve (ROC-AUC 0.95)
│   │   ├── edge_ai_fig4.png     # Figure 4: Training & Validation Loss Curves
│   │   └── edge_ai_fig5.png     # Figure 5: Feature Importance Rankings
│   ├── papers/
│   │   ├── ICCOMTECH2026-102.pdf # IEEE ICCOMTECH 2026 Paper Acceptance Letter
│   │   └── IJRPR50316.pdf        # Published Journal Paper PDF (IJRPR 2025)
│   └── CV_ABDULLAHI_YUSUF_UMAR.pdf # Downloadable Curriculum Vitae
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation with dark/light mode toggle
│   │   ├── Hero.jsx             # Hero with verified portrait, badges, and CTAs
│   │   ├── ResearchFocus.jsx    # Core research pillars and domains
│   │   ├── Research.jsx         # MSc Research Highlights (Petroleum & Stroke Care)
│   │   ├── Publications.jsx     # Peer-reviewed journal & IEEE conference papers
│   │   ├── Projects.jsx         # Software, open-source, and engineering systems
│   │   ├── About.jsx            # Academic biography & quick credentials table
│   │   ├── Education.jsx        # Academic timeline (First Class BSc & MSc In View)
│   │   ├── Experience.jsx       # Research appointments, Chanabyte Tech & leadership
│   │   ├── Skills.jsx           # Categorized technical competencies & tools
│   │   ├── Certificates.jsx     # IEEE/ISAC memberships & credentials gallery
│   │   ├── AcademicProfiles.jsx # Verified cards for GitHub, LinkedIn, Scholar, ORCID
│   │   ├── Contact.jsx          # Direct email, phone, location, and dispatch form
│   │   ├── Footer.jsx           # Dynamic copyright, quick links & back-to-top
│   │   ├── ImageModal.jsx       # Full-resolution lightbox preview modal
│   │   └── SocialIcons.jsx      # Native SVG brand icons (GitHub, LinkedIn, etc.)
│   ├── data/
│   │   ├── profile.js           # Personal bio, affiliation, contact & profile links
│   │   ├── research.js          # Core research areas, datasets & detailed metrics
│   │   ├── publications.js      # Published papers & accepted conference proceedings
│   │   ├── projects.js          # Software projects, repositories & architectures
│   │   ├── education.js         # Degree programs, institutions, GPA & topics
│   │   ├── experience.js        # Professional appointments, leadership & awards
│   │   ├── skills.js            # Categorized skills, proficiencies & tool tags
│   │   ├── certificates.js      # Certificates, credentials & society memberships
│   │   └── index.js             # Central data exporter
│   ├── styles/
│   │   └── index.css            # Complete design system tokens (Dark & Light modes)
│   ├── App.jsx                  # Main application composition
│   └── main.jsx                 # Application entry point
├── index.html                   # SEO metadata, Open Graph, and Google Fonts
├── package.json                 # Project dependencies and build scripts
└── vite.config.js               # Vite configuration
```

---

## 🛠️ Local Development & Running the Site

### Prerequisites
- Node.js (v18 or higher recommended; developed on Node.js v24.21.0)
- npm (v10 or higher)

### 1. Installation
Open your terminal in the project directory:
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Vite will output the local development address:
```
  VITE v8.3.2  ready in 1295 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
Open **`http://localhost:5173/`** in Google Chrome or your preferred browser.

### 3. Build for Production
To generate an optimized, minified production build:
```bash
npm run build
```
The compiled production bundle will be saved to the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## ✏️ Content Management: How to Update Your Portfolio

This website uses a **data-driven architecture**. You never need to touch the React component files to update your content—simply edit the corresponding file in `src/data/`:

### A. How to Add a New Project
1. Open `src/data/projects.js`.
2. Add a new object to the `projectsData` array:
   ```javascript
   {
     id: "my-new-project",
     title: "Project Title",
     category: "research-ai", // "research-ai" | "software" | "engineering"
     featured: true,
     badge: "Special Recognition / Tag",
     shortDescription: "Brief 1-2 sentence summary.",
     fullDescription: "Detailed explanation of the project.",
     objectives: ["Objective 1", "Objective 2"],
     myContribution: "Your specific contribution and role.",
     technologies: ["Python", "TensorFlow", "Edge AI"],
     status: "Completed",
     githubUrl: "https://github.com/Chana165/your-repo",
     researchLink: null,
     publicationLink: null,
     image: null,
     tags: ["AI", "Edge"]
   }
   ```
3. Save the file. Vite will automatically update the page.

### B. How to Add a New Publication
1. Open `src/data/publications.js`.
2. Add a new entry to the `publicationsData` array:
   ```javascript
   {
     id: "new-paper-2026",
     category: "published", // "published" | "accepted"
     badge: "Published Journal Paper",
     type: "Journal Paper",
     title: "Paper Title",
     authorsText: "Abdullahi Yusuf Umar, Co-Author 1, Co-Author 2",
     venue: "Journal / Conference Name",
     volume: "Vol. X, Issue Y, pp. 100-110",
     year: "2026",
     statusNote: "Peer-reviewed and published.",
     paperUrl: "https://doi.org/...",
     pdfUrl: "/papers/your_paper.pdf", // Place PDF in public/papers/
     pdfLabel: "Download Paper PDF",
     abstract: "Abstract paragraph...",
     tags: ["Edge AI", "Computer Vision"]
   }
   ```

### C. How to Add a Certificate
1. Place the certificate image (JPG/PNG) into `public/certificates/`.
2. Open `src/data/certificates.js`.
3. Add a new entry to the `certificatesData` array:
   ```javascript
   {
     id: "cert-new",
     title: "Certificate Name",
     issuer: "Issuing Organization",
     issueDate: "2026",
     category: "certification",
     credentialId: "OPTIONAL_ID",
     image: "/certificates/your_cert.jpg",
     pdfUrl: null,
     description: "Description of the credential..."
   }
   ```

### D. How to Update Social / Academic Profile Links
1. Open `src/data/profile.js`.
2. Locate the `socialLinks` object:
   ```javascript
   socialLinks: {
     github: "https://github.com/Chana165",
     linkedin: "https://www.linkedin.com/in/abdullahi-yusuf-umar-7446922a2",
     googleScholar: "https://scholar.google.com/citations?user=YOUR_ID", // Paste URL here
     orcid: "https://orcid.org/0009-0000-0000-0000",                     // Paste URL here
     ieeeCollabratec: ""
   }
   ```

### E. How to Replace Your CV
1. Replace `public/CV_ABDULLAHI_YUSUF_UMAR.pdf` with your updated CV PDF (keeping the same filename).
2. If your filename changes, update the filename in `src/data/profile.js`:
   ```javascript
   assets: {
     cvPdf: "/YOUR_NEW_CV_FILENAME.pdf",
     cvFileName: "CV_Abdullahi_Yusuf_Umar.pdf"
   }
   ```

### F. How to Replace Your Profile Photograph
1. Save your new photo as `public/assets/profile.jpg` (high-resolution square portrait recommended, 600×600 or larger).
2. The website will automatically update across the hero, about, and metadata sections.

---

## 🌐 Deploying to Production

The project is structured as a static frontend bundle compatible with any modern static web host.

### Deploying to Vercel
1. Push your repository to GitHub (`https://github.com/Chana165/...`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the `dist/` folder, or connect to your GitHub repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

### Custom Domain
Once you register your domain (e.g. `abdullayusufumar.com`), add the domain in your Vercel or Netlify project settings and point your DNS `CNAME` or `A` records according to host instructions.

---

## 🔒 Privacy & Data Authenticity Notice

- All publications, degrees, research metrics, and organizational roles displayed in this portfolio are sourced directly from official institutional records, verified certificates, and conference acceptance documentation.
- Private registration numbers and private residential addresses are excluded to ensure security and privacy.
- No placeholder or fabricated data has been used.
