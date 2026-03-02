# 🌍 Global Satellite Monitor

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org)
[![Flask](https://img.shields.io/badge/Flask-2.3-green.svg)](https://flask.palletsprojects.com)

Detect **illegal construction, deforestation, floods** by clicking satellite maps. Fetches **live weather/news** + ML change detection. Built for hackathons!


**Live coords → Weather + News + Flood alerts!**

## 🚀 Features
- 🛰️ **Google Satellite Maps** (Leaflet + react-leaflet)
- 🌤️ **Live Weather** (OpenWeatherMap API)
- 📰 **Local News** (NewsAPI)
- 🚨 **Flood Risk Detection** (rain + news correlation)
- 🧠 **ML Ready** (Siamese U-Net integration placeholder)
- 📱 **Responsive** + Glassmorphism UI

## 🛠 Tech Stack
| Frontend | Backend | APIs/ML |
|----------|---------|---------|
| React 18 | Flask 2.3 | OpenWeather, NewsAPI |
| Leaflet 1.9 | PyTorch (Siamese) | Google Satellite Tiles |
| CSS3 Animations | CORS + dotenv | OSCD/WHU Datasets ready |

## 📋 Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
# Add keys to .env
python app.py  # http://localhost:5000

Frontend

bash
cd frontend
npm install
npm start  # http://localhost:3000

Click map → Live data! (Mock if no keys)
API Keys (Free)

    OpenWeatherMap (60 calls/min)

    NewsAPI (1000 calls/day)

📁 Folder Structure

satellite-change-detection-monitor/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env
└── frontend/
    ├── public/index.html
    ├── src/
    │   ├── App.js
    │   └── App.css
    └── package.json

## **Push to GitHub Steps (VS Code Terminal)**
```bash
git init
git add .
git commit -m "Initial commit: Full satellite monitor app"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/satellite-change-detection-monitor.git
git push -u origin main

### Made by Sreyosh Majumder 
