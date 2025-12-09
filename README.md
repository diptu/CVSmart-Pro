<p align="center">
  <img src="https://img.shields.io/badge/CVSmart%20Pro-AI%20Resume%20OS-4B9CD3?style=for-the-badge&logo=github" />
</p>

<h1 align="center">📄 CVSmart Pro — AI-Powered Resume Intelligence Platform</h1>

<p align="center">Your Career, Supercharged by AI. Build. Improve. Optimize.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Stack-MERN%20%2B%20LLMs-1abc9c?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-In_Development-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>


💡 Tagline
Modern resume intelligence platform that generates CVs, evaluates ATS scores, analyzes job descriptions, scrapes targeted job listings, and provides AI-driven improvement recommendations.

---

## 📖 Table of Contents

1.  [✨ Overview](#-overview)
2.  [🔑 Core Features](#-core-features)
3.  [🏗️ System Architecture](#-system-architecture)
4.  [🧠 AI & ML Microservices](#-ai--ml-microservices)
5.  [🛠️ Tech Stack Deep Dive](#-tech-stack-deep-dive)
6.  [⚙️ Background Processing & Analytics](#-background-processing--analytics)
7.  [🔒 Security & Compliance](#-security--compliance)
8.  [📜 License](#-license)
---

✨ Overview

CVSmart Pro is a full-featured resume optimization SaaS built with the MERN stack and Python AI microservices.

It allows users to:

- Generate CVs from predefined templates
- Evaluate ATS scores against job descriptions
- Receive LLM-powered improvements for each CV section
- Scrape target job listings and optimize CV weekly/monthly
- Get notified about in-demand skills
- Track progress with full analytics dashboard

This project demonstrates production-grade architecture, microservices, AI integrations, automated job pipelines, and clean multi-tenant SaaS design.

---

🔑 Features

### 1. AI-Powered CV Builder
- Create and edit multiple CVs
- Multiple modern templates
- Real-time preview (React + Tailwind)
- Export to PDF or HTML

### 2. ATS Score Analysis
- Python microservice analyzes:
  - keyword matching
  - skill coverage
  - formatting issues
  - section completeness
- Outputs score and improvement recommendations

### 3. LLM Improvement Engine
- AI suggestions per CV section
- Accept/reject workflow
- Auto-update MongoDB
- Supports tones like: professional, concise, leadership-oriented, etc.

### 4. Target Company Job Scraper
- Weekly/monthly scraping
- Supports LinkedIn, Indeed, company career pages
- Detects trending skills

### 5. Analytics Dashboard
- ATS score trends
- Skill gaps
- Job match relevance
- Weekly performance insights

### 6. Additional Features
- Pin top CV
- AI cover letter generator
- Notifications
- Dark/Light theme

---
🛠️ Tech Stack

### Frontend
- React.js (or Next.js)
- TailwindCSS
- Zustand or Redux Toolkit

### Backend (Node.js)
- Express.js
- MongoDB + Mongoose
- Redis + BullMQ (background jobs)
- JWT authentication

### AI & ML Microservices (Python)
- FastAPI
- ATS Score Engine
- LLM Recommendation Engine
- HuggingFace or OpenAI API

### DevOps
- Docker & Docker Compose
- Nginx
- MongoDB Atlas
- GitHub Actions CI/CD
- AWS / Azure / GCP deployment

---
🏗️ Architecture

```yaml
                  Nextjs Frontend
           CV Builder • ATS Dashboard
                      |
                      |
                Express API
    Auth • CV CRUD • ATS Routes • Analytics
                      |
      -------------------------------------
      |                                   |
    MongoDB                          Redis + BullMQ
                                          |
                                          |
                                Python AI Microservices
                           FastAPI LLM + ATS Scoring Engines

```
🧠 AI Microservices
1. ATS Scoring Engine

- NLP extraction

- Keyword/skill matching

- Section analysis

- Weighted scoring rules

2. LLM Recommendation Engine

- Bullet rewriting

- Tone adjustments

- Job-specific tailoring

- Section-by-section improvements

⚙️ Background Jobs:

| Job Name          | Schedule       | Description                       |
| ----------------- | -------------- | --------------------------------- |
| Job Scraper       | Weekly/Monthly | Scrape targeted companies         |
| Trending Skills   | Weekly         | Detect skill patterns in job data |
| Analytics Builder | Daily          | Generate dashboard statistics     |
| Bulk ATS Scoring  | On demand      | Recompute ATS scores              |

## Analytics Dashboard

### Features:

- ATS score history (line chart)

- Skill gap radar chart

- Job match score heatmap

- CV performance summary

- Uses Chart.js or Plotly.js.

🔒 Security

- JWT authentication

- Rate limiting

-  Sanitized LLM prompts

- Validation for all user inputs

- Role-based permissions

- Secure cookies (optional)

📜 License

This project is licensed under the MIT License.
