# 🌿 Studio Nesa – Handmade Product Showcase Website

**Live Site:** [https://studionesa.com](https://studionesa.com)

Studio Nesa is a minimal, multilingual React web application built to showcase handmade jewelry and craft products by Vanesa. The platform provides a clean, elegant UI with light/dark mode, image gallery modals, and a custom contact system powered by Firebase Firestore.

---

## ✨ Features

- 🖼️ **Product Gallery** with multilingual names & descriptions (`en`, `lv`, `ru`)
- 💬 **Contact Modal** for inquiries (stored in Firestore, admin-managed)
- 📱 Fully **responsive** design across desktop and mobile
- 🌓 **Dark/Light Mode** toggle
- 🛠️ Custom-built **Admin Panel** to view/delete contact messages
- 🌍 **SEO-ready** structure with Helmet and sitemap/robots.txt
- 🚀 **CI/CD enabled** with Vercel & GitHub

---

## 🧰 Tech Stack

- **Frontend:** React + TypeScript + Vite
- **State/Localization:** `react-i18next`
- **Database:** Firebase Firestore
- **Hosting & CI/CD:** Vercel + GitHub
- **Styling:** CSS Modules (no Tailwind)
- **Routing:** React Router DOM

---

## 🧑‍💻 Developer Experience

- 📦 Clean modular structure for scalability
- 📁 Static and dynamic product loading support
- 🔐 Admin logic secured by email check (Firebase Auth)
- 💌 Message dashboard with read status & delete option
- 🔄 Internationalized UI via JSON translation files

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/atakankaracali/studio-nesa-frontend
cd studio-nesa-frontend
npm install
npm run dev
```

You’ll need to set up your own firebase.ts config to use contact submission and admin panel.

##  Created by
Atakan Karacali
Frontend Developer · atakankaracali.com
