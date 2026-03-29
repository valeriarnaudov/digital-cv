# 🌐 Digital CV Workspace

A modern, highly interactive, and premium Data-Control Dashboard built on **React** and **Firebase**, designed to dynamically manage, present, and export a professional Digital Curriculum Vitae. 

With full CRUD (Create, Read, Update, Delete) capability out-of-the-box, it transforms static resumes into living, breathing data structures that persist flawlessly and visually stun the viewer.

---

## 🚀 Core Features

* **Real-time WebSockets (Firestore onSnapshot)**: Instantaneous DOM updates without manual refreshes. Any changes to the database (adding, editing, or deleting a CV entry) automatically trigger a real-time reactive repaint of the frontend.
* **Premium Glassmorphic UI**: Beautiful semi-transparent frosted glass design methodology spanning across the main layouts, input forms, buttons, and section dividers.
* **Multi-Modal AI Auto-Parsing**: Fully integrated with Google's **Gemini 2.5 Flash Vision API**. Users can upload their CVs as an image or a flattened PDF. The built-in pipeline natively renders the PDF via `pdfjs-dist` into a high-res image canvas and sends it to the Vision model to perfectly perform OCR and extract all nested data directly into structured Firebase entries.
* **Instant Edit & Hydration Pipelines**: No clunky modals. Native `Edit` icons seamlessly transform entries into identical, data-hydrated inline forms. 
* **Print-to-PDF Optimized**: Hand-crafted `@media print` directives guarantee 1-to-1 visual conversion when printing or saving as a traditional PDF file from the browser. Interactive elements (like Edit/Delete buttons and File Uploaders) safely disappear from the physical print.
* **QR Routing**: Integrated QR code linking directly to the live deployed CV representation.

---

## 🛠 Tech Stack

* **Frontend Engine**: React 18, React DOM
* **Global & Scoped Styling**: `styled-components` (CSS-in-JS logic)
* **Backend Database**: Google Firebase Cloud Firestore
* **Authentication**: Firebase Authentication
* **Artificial Intelligence**: Google Gemini 2.5 Flash API
* **PDF Engine**: `pdfjs-dist` (Native Web-Worker Canvas rendering)
* **Feedback / Notifications**: `react-toastify`
* **Icons**: `react-icons`

---

## 📂 Architecture & Clean Code

The codebase is strictly segregated into highly predictive modules:

* `/components/Sections/`: Top-level orchestrators managing the array iterations.
* `/components/SingleElements/`: Extracted single-view entities housing the `EntryCard` and interactive Edit toggles.
* `/components/Forms/`: Scalable Input layouts hooked up to unified generic endpoints.
* `/components/Uploads/`: Next-Generation LLM Vision pipeline encapsulating complex API logic.
* `/styles/`: Standalone atomic styled components preserving pure styling abstraction outside of logic files.
* `/services/dataServices.js`: Unified data layer abstracting all WebSockets (`onSnapshot`) and API Mutations (`setDoc`, `updateDoc`, `deleteDoc`).

---

## ⚙️ Installation & Setup

1. **Clone the repository.**
2. **Install all dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
3. **Establish Firebase & Gemini Keys:**
   Create a `.env` file at the root of the project and populate the following secrets:
   \`\`\`env
   REACT_APP_FIREBASE_API_KEY=...
   REACT_APP_FIREBASE_AUTH_DOMAIN=...
   REACT_APP_FIREBASE_PROJECT_ID=...
   REACT_APP_FIREBASE_STORAGE_BUCKET=...
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
   REACT_APP_FIREBASE_APP_ID=...
   REACT_APP_GEMINI_API_KEY=...
   \`\`\`
4. **Boot the application:**
   \`\`\`bash
   npm run start
   \`\`\`

---
*Built with passion, robust modern frameworks, and next-gen AI implementation.*
