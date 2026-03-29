# Digital CV Platform 🚀

A premium, interactive Digital CV and Portfolio platform built with **React** and **Firebase**.
Seamlessly generate, edit, and share your professional web-based curriculum vitae with integrated **Google Gemini 2.5 Flash Vision AI** for automated, multi-modal PDF parsing.

![Digital CV Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Firestore%20%7C%20Auth%20%7C%20Hosting-FFCA28?logo=firebase)
![Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini%20Vision-4285F4?logo=google)

## ✨ Features

* **AI Auto-Parsing**: Forget manual data entry. Upload any standard or image-flattened PDF (like Canva resumes), and the **Gemini 2.5 Flash** multi-modal engine will visually extract and mathematically map your entire CV directly into your dashboard.
* **Real-Time Interactive Dashboard**: Create, Update, and Delete your Work Experience, Education, Projects, and Skills. Firebase `onSnapshot` listeners ensure lightning-fast UI updates.
* **Flawless Mobile Responsive UI**: Styled with premium glassmorphism bounds, CSS grids, and rigorous `@media` queries guaranteeing a 100% native edge-to-edge feel on tablets and smartphones.
* **Shareable Public Links & QR Generation**: Automatically resolve the cleanest canonical public URL (`your-domain.com/username` or `your-domain.com/uid`) with dynamic QR code generation.
* **Smart Visitor Layouts**: When a guest opens your shared link, the CV naturally detects them and natively expands all accordion grids for immediate, friction-less scroll reading.
* **Print-to-PDF Ready**: Specially designed `@media print` queries strip all glass UI widgets and automatically convert your web portfolio into a clean, minimalist A4-ready document.

## 🛠 Tech Stack

* **Frontend**: React.js, React Router DOM, Styled-Components (CSS-in-JS).
* **Backend**: Firebase Authentication, Cloud Firestore (NoSQL).
* **AI Processing**: Google Generative AI (Gemini 2.5 Flash), `pdfjs-dist` (Canvas PDF Rendering).
* **Hosting**: Google Firebase Edge CDN.

## 🚀 Running Locally

### 1. Requirements
Ensure you have Node.js and npm installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and supply your Firebase and Gemini credentials:

```env
REACT_APP_FIREBASE_API_KEY="..."
REACT_APP_FIREBASE_AUTH_DOMAIN="..."
REACT_APP_FIREBASE_PROJECT_ID="..."
REACT_APP_FIREBASE_STORAGE_BUCKET="..."
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="..."
REACT_APP_FIREBASE_APP_ID="..."

REACT_APP_GEMINI_API_KEY="..."
```

### 4. Start the Application
```bash
npm start
```
The application will bundle and run on `http://localhost:3000`.

## 🌐 Deployment
This project is configured for **Firebase Hosting**.
To push modifications to the live Edge network:
```bash
npm run build
firebase deploy --only hosting
```

---
*Architected and polished for a premium professional presence.*
