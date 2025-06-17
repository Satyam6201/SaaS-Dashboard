# 🚀 Enhanced SaaS Dashboard

An advanced and responsive **SaaS Dashboard** built using **React.js**, featuring a modern UI, animated sidebar, dark mode support, and powerful data visualizations using **Chart.js**. Perfect for startups, analytics platforms, and admin interfaces.

🔗 **[Live Demo](https://saas-dashboard-teal.vercel.app/)**

---

## ✨ Features

- ⚛️ **React.js** component-driven structure
- 🎨 **Modern UI** with clean, professional, and attractive design
- 🌙 **Dark Mode** with seamless toggle & persistent state
- 🧭 **Animated Sidebar** with smooth transitions powered by Framer Motion
- 📊 **Advanced Charts** with Chart.js (Line, Bar, Pie, Doughnut, Radar, PolarArea)
- 🔐 **Authentication Layout** (Firebase integration ready)
- 🔄 **Persistent User Theme & Layout States** with LocalStorage
- 📱 **Fully Responsive Design** — mobile-first & optimized for tablets, desktops
- 🧩 **Reusable Components** (Widgets, Cards, Charts, Alerts, Loaders)
- 🔥 **Firebase Integration** (Auth, Firestore, Storage - optional)
- 🎯 **Protected Routes** for secure pages
- ⚙️ **Global Theme Context API** for state management
- 🚀 **Lazy Loading** for improved performance
- 🛠️ **Environment Variable Support** for production-ready deployments
- ✅ **SEO Friendly** meta tags & PWA support (optional)

---

## 🧪 Tech Stack

- **React.js** ⚛️
- **Chart.js** + **React-Chartjs-2** 📊
- **Tailwind CSS** 🎨 *(or replace with Custom CSS easily)*
- **Framer Motion** ✨ (for sidebar & UI animations)
- **Firebase** 🔥 (Authentication, Firestore, Storage - optional)
- **React Router DOM** 🔄
- **React Context API** 🌐

---

## 📱 Responsive Design

Designed for all devices:

- 📱 Mobile Phones  
- 📲 Tablets  
- 🖥️ Desktops

---

## 📁 Folder Structure

```bash
saas-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── assets/            # Images, logos, icons
│   ├── components/        # Reusable UI components
│   │   ├── Sidebar.jsx
│   │   ├── Navbar.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Loader.jsx
│   │   └── Widgets.jsx
│   ├── pages/             # Main pages
│   │   ├── Dashboard.jsx
│   │   ├── Reports.jsx
│   │   ├── Users.jsx
│   │   └── Login.jsx
│   ├── charts/            # All Chart components
│   │   ├── LineChart.jsx
│   │   ├── BarChart.jsx
│   │   ├── PieChart.jsx
│   │   └── DoughnutChart.jsx
│   ├── context/           # Theme and Auth Context
│   │   └── ThemeContext.js
│   │   └── AuthContext.js
│   ├── utils/             # Utility functions & constants
│   ├── App.js             # Main App Component
│   ├── index.js           # Entry Point
│   └── styles/            # Global Styling
│       └── global.css
