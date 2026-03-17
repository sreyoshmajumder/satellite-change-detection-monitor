<div align="center">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 220" width="900" height="220">
  <defs>
    <!-- Deep space background gradient -->
    <radialGradient id="spaceBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%"   stop-color="#050514"/>
      <stop offset="60%"  stop-color="#020210"/>
      <stop offset="100%" stop-color="#000008"/>
    </radialGradient>
    <!-- Neon glow filters -->
    <filter id="glowCyan" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glowMagenta" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glowGreen" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glowOrange" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glowTitle" x="-10%" y="-40%" width="120%" height="180%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Star twinkle gradient -->
    <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%"  stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Space background -->
  <rect width="900" height="220" fill="url(#spaceBg)" rx="14"/>

  <!-- Starfield -->
  <circle cx="45"  cy="18"  r="0.8" fill="#fff" opacity="0.8"/>
  <circle cx="120" cy="35"  r="0.6" fill="#fff" opacity="0.6"/>
  <circle cx="200" cy="12"  r="1.0" fill="#fff" opacity="0.9"/>
  <circle cx="310" cy="28"  r="0.7" fill="#fff" opacity="0.7"/>
  <circle cx="430" cy="8"   r="0.9" fill="#fff" opacity="0.8"/>
  <circle cx="560" cy="22"  r="0.6" fill="#fff" opacity="0.6"/>
  <circle cx="670" cy="14"  r="1.1" fill="#fff" opacity="0.9"/>
  <circle cx="790" cy="30"  r="0.7" fill="#fff" opacity="0.7"/>
  <circle cx="860" cy="10"  r="0.8" fill="#fff" opacity="0.8"/>
  <circle cx="30"  cy="190" r="0.7" fill="#fff" opacity="0.6"/>
  <circle cx="155" cy="205" r="0.9" fill="#fff" opacity="0.8"/>
  <circle cx="280" cy="195" r="0.6" fill="#fff" opacity="0.5"/>
  <circle cx="500" cy="210" r="0.8" fill="#fff" opacity="0.7"/>
  <circle cx="720" cy="198" r="1.0" fill="#fff" opacity="0.9"/>
  <circle cx="850" cy="210" r="0.7" fill="#fff" opacity="0.6"/>
  <circle cx="75"  cy="105" r="0.5" fill="#fff" opacity="0.4"/>
  <circle cx="820" cy="110" r="0.5" fill="#fff" opacity="0.4"/>
  <circle cx="170" cy="145" r="0.6" fill="#fff" opacity="0.5"/>
  <circle cx="740" cy="150" r="0.6" fill="#fff" opacity="0.5"/>

  <!-- Scanning orbit lines (satellite motif) -->
  <ellipse cx="450" cy="110" rx="380" ry="55" fill="none" stroke="#00ffff" stroke-width="0.4" opacity="0.12"/>
  <ellipse cx="450" cy="110" rx="300" ry="38" fill="none" stroke="#ff00ff" stroke-width="0.3" opacity="0.10"/>
  <ellipse cx="450" cy="110" rx="200" ry="22" fill="none" stroke="#39ff14" stroke-width="0.3" opacity="0.10"/>

  <!-- Neon grid lines (scan lines) -->
  <line x1="0"   y1="55"  x2="900" y2="55"  stroke="#00ffff" stroke-width="0.4" opacity="0.15"/>
  <line x1="0"   y1="110" x2="900" y2="110" stroke="#00ffff" stroke-width="0.6" opacity="0.08"/>
  <line x1="0"   y1="165" x2="900" y2="165" stroke="#00ffff" stroke-width="0.4" opacity="0.15"/>
  <line x1="225" y1="0"   x2="225" y2="220" stroke="#ff00ff" stroke-width="0.4" opacity="0.10"/>
  <line x1="450" y1="0"   x2="450" y2="220" stroke="#ff00ff" stroke-width="0.4" opacity="0.10"/>
  <line x1="675" y1="0"   x2="675" y2="220" stroke="#ff00ff" stroke-width="0.4" opacity="0.10"/>

  <!-- Corner bracket — top-left CYAN -->
  <polyline points="6,40 6,6 40,6"   fill="none" stroke="#00ffff" stroke-width="2.5" filter="url(#glowCyan)" stroke-linecap="round"/>
  <!-- Corner bracket — top-right MAGENTA -->
  <polyline points="860,6 894,6 894,40" fill="none" stroke="#ff00ff" stroke-width="2.5" filter="url(#glowMagenta)" stroke-linecap="round"/>
  <!-- Corner bracket — bottom-left GREEN -->
  <polyline points="6,180 6,214 40,214" fill="none" stroke="#39ff14" stroke-width="2.5" filter="url(#glowGreen)" stroke-linecap="round"/>
  <!-- Corner bracket — bottom-right ORANGE -->
  <polyline points="860,214 894,214 894,180" fill="none" stroke="#ff6b00" stroke-width="2.5" filter="url(#glowOrange)" stroke-linecap="round"/>

  <!-- Satellite icon (left) — schematic style -->
  <g transform="translate(68,110)" filter="url(#glowCyan)">
    <!-- Body -->
    <rect x="-12" y="-9" width="24" height="18" fill="none" stroke="#00ffff" stroke-width="1.5" rx="2"/>
    <!-- Solar panels left -->
    <rect x="-36" y="-4" width="20" height="8" fill="#00ffff22" stroke="#00ffff" stroke-width="1"/>
    <line x1="-26" y1="-4" x2="-26" y2="4" stroke="#00ffff" stroke-width="0.6"/>
    <line x1="-31" y1="-4" x2="-31" y2="4" stroke="#00ffff" stroke-width="0.6"/>
    <!-- Solar panels right -->
    <rect x="16" y="-4" width="20" height="8" fill="#00ffff22" stroke="#00ffff" stroke-width="1"/>
    <line x1="26" y1="-4" x2="26" y2="4" stroke="#00ffff" stroke-width="0.6"/>
    <line x1="31" y1="-4" x2="31" y2="4" stroke="#00ffff" stroke-width="0.6"/>
    <!-- Antenna dish -->
    <line x1="0" y1="-9" x2="0" y2="-18" stroke="#00ffff" stroke-width="1.2"/>
    <ellipse cx="0" cy="-20" rx="7" ry="4" fill="none" stroke="#00ffff" stroke-width="1"/>
    <!-- Signal dot -->
    <circle cx="0" cy="-9" r="1.5" fill="#00ffff"/>
  </g>

  <!-- Signal pulse rings from satellite -->
  <circle cx="68" cy="85" r="16" fill="none" stroke="#00ffff" stroke-width="0.8" opacity="0.4"/>
  <circle cx="68" cy="85" r="25" fill="none" stroke="#00ffff" stroke-width="0.5" opacity="0.25"/>

  <!-- Earth icon (right) -->
  <g transform="translate(832,110)" filter="url(#glowGreen)">
    <circle cx="0" cy="0" r="22" fill="#39ff1410" stroke="#39ff14" stroke-width="1.5"/>
    <ellipse cx="0" cy="0" rx="22" ry="10" fill="none" stroke="#39ff14" stroke-width="0.8" opacity="0.6"/>
    <line x1="0" y1="-22" x2="0" y2="22" stroke="#39ff14" stroke-width="0.8" opacity="0.6"/>
    <circle cx="-6" cy="-5" r="4" fill="#39ff1430"/>
    <circle cx="7"  cy="4"  r="5" fill="#39ff1430"/>
    <circle cx="-4" cy="8"  r="3" fill="#39ff1430"/>
  </g>

  <!-- Connection beam between satellite and earth -->
  <line x1="105" y1="100" x2="808" y2="105" stroke="#ff00ff" stroke-width="0.6" stroke-dasharray="4,6" opacity="0.35" filter="url(#glowMagenta)"/>

  <!-- MAIN TITLE — neon cyan -->
  <text x="450" y="80" font-size="30" font-weight="900" text-anchor="middle"
        font-family="'Courier New', Courier, monospace" letter-spacing="3"
        fill="#00ffff" filter="url(#glowTitle)">SATELLITE CHANGE DETECTION</text>

  <!-- Subtitle — neon magenta -->
  <text x="450" y="114" font-size="14.5" font-weight="700" text-anchor="middle"
        font-family="'Courier New', Courier, monospace" letter-spacing="4"
        fill="#ff00ff" filter="url(#glowMagenta)">MONITOR  ·  GLOBAL  SURVEILLANCE  PLATFORM</text>

  <!-- Tagline — neon green -->
  <text x="450" y="144" font-size="11.5" text-anchor="middle"
        font-family="'Courier New', Courier, monospace" letter-spacing="2"
        fill="#39ff14" filter="url(#glowGreen)">Floods  ·  Deforestation  ·  Construction  ·  Live Intelligence</text>

  <!-- Neon divider -->
  <line x1="100" y1="160" x2="800" y2="160" stroke="#00ffff" stroke-width="1" opacity="0.5" filter="url(#glowCyan)"/>

  <!-- Tech pill badges -->
  <rect x="115" y="170" width="68" height="16" rx="8" fill="#00ffff15" stroke="#00ffff" stroke-width="0.9"/>
  <text x="149" y="182" font-size="8.5" text-anchor="middle" fill="#00ffff" font-family="monospace" font-weight="700">React 18</text>

  <rect x="193" y="170" width="58" height="16" rx="8" fill="#ff00ff15" stroke="#ff00ff" stroke-width="0.9"/>
  <text x="222" y="182" font-size="8.5" text-anchor="middle" fill="#ff00ff" font-family="monospace" font-weight="700">Flask 2.3</text>

  <rect x="261" y="170" width="70" height="16" rx="8" fill="#39ff1415" stroke="#39ff14" stroke-width="0.9"/>
  <text x="296" y="182" font-size="8.5" text-anchor="middle" fill="#39ff14" font-family="monospace" font-weight="700">PyTorch ML</text>

  <rect x="341" y="170" width="68" height="16" rx="8" fill="#ff6b0015" stroke="#ff6b00" stroke-width="0.9"/>
  <text x="375" y="182" font-size="8.5" text-anchor="middle" fill="#ff6b00" font-family="monospace" font-weight="700">Leaflet.js</text>

  <rect x="419" y="170" width="82" height="16" rx="8" fill="#bf00ff15" stroke="#bf00ff" stroke-width="0.9"/>
  <text x="460" y="182" font-size="8.5" text-anchor="middle" fill="#bf00ff" font-family="monospace" font-weight="700">Siamese U-Net</text>

  <rect x="511" y="170" width="88" height="16" rx="8" fill="#00ffff15" stroke="#00ffff" stroke-width="0.9"/>
  <text x="555" y="182" font-size="8.5" text-anchor="middle" fill="#00ffff" font-family="monospace" font-weight="700">OpenWeather</text>

  <rect x="609" y="170" width="68" height="16" rx="8" fill="#ff00ff15" stroke="#ff00ff" stroke-width="0.9"/>
  <text x="643" y="182" font-size="8.5" text-anchor="middle" fill="#ff00ff" font-family="monospace" font-weight="700">NewsAPI</text>

  <rect x="687" y="170" width="98" height="16" rx="8" fill="#39ff1415" stroke="#39ff14" stroke-width="0.9"/>
  <text x="736" y="182" font-size="8.5" text-anchor="middle" fill="#39ff14" font-family="monospace" font-weight="700">Hackathon-Ready</text>
</svg>

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-49.0%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-21.7%25-3776AB?style=flat-square&logo=python&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-25.6%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Flask](https://img.shields.io/badge/Flask-2.3-000000?style=flat-square&logo=flask&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-Siamese%20U--Net-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=flat-square&logo=leaflet&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeatherMap-Live%20API-EB6E4B?style=flat-square)
![NewsAPI](https://img.shields.io/badge/NewsAPI-Live%20Feed-9B59B6?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Status](https://img.shields.io/badge/Status-Hackathon--Ready-00FF88?style=flat-square)

</div>

---

> **Satellite Change Detection Monitor** is a full-stack geospatial intelligence platform that detects **floods, illegal construction, and deforestation** in real time. Click any location on a live Google Satellite map to instantly pull **live weather data**, **local news feeds**, **flood risk scoring**, and **AI-powered change detection** via a Siamese U-Net deep learning model — all in one sleek, glassmorphism-styled dashboard.

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🏗️ System Architecture](#-system-architecture)
- [🔄 End-to-End Data Flow](#-end-to-end-data-flow)
- [🧠 Siamese U-Net ML Architecture](#-siamese-u-net-ml-architecture)
- [🚨 Flood Risk Detection Engine](#-flood-risk-detection-engine)
- [🎨 Frontend Architecture](#-frontend-architecture)
- [⚙️ Backend Architecture](#-backend-architecture)
- [🔌 API Integration Design](#-api-integration-design)
- [📐 UI Component Layout](#-ui-component-layout)
- [🗂️ File Structure](#-file-structure)
- [🛠️ Installation & Setup](#-installation--setup)
- [▶️ How to Run](#-how-to-run)
- [🔑 Key Code Walkthrough](#-key-code-walkthrough)
- [🗃️ Datasets & Model Training](#-datasets--model-training)
- [🚀 Roadmap & Extensions](#-roadmap--extensions)
- [🤝 Contributing](#-contributing)

---

## ✨ Features

| Feature | Description |
|:---|:---|
| 🛰️ **Google Satellite Tiles** | Full-resolution satellite imagery via Leaflet + Google Maps tile API |
| 🖱️ **Click-to-Analyse** | Click any coordinate on the map → instant multi-source intelligence |
| 🌤️ **Live Weather** | Real-time conditions, rainfall, humidity, wind via OpenWeatherMap API |
| 📰 **Local News Feed** | Geo-targeted news articles for the clicked region via NewsAPI |
| 🚨 **Flood Risk Score** | Rain + elevation + news correlation → automated flood risk alert |
| 🧠 **Siamese U-Net ML** | Deep learning change detection comparing before/after satellite patches |
| 🏗️ **Construction Detection** | Identify new structures via pixel-level change masks |
| 🌿 **Deforestation Alerts** | NDVI-based vegetation loss detection |
| 🎨 **Glassmorphism UI** | Premium frosted-glass dark UI with CSS3 animations |
| 📱 **Fully Responsive** | Adapts seamlessly across desktop, tablet, and mobile |
| 🧪 **Mock Mode** | Runs fully without API keys using realistic mock responses |

---

## 🏗️ System Architecture

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║          SATELLITE CHANGE DETECTION MONITOR — SYSTEM ARCHITECTURE              ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                  ║
║  ┌───────────────────────────────────────────────────────────────────────────┐  ║
║  │                     FRONTEND  (React 18 + Leaflet)                        │  ║
║  │                                                                           │  ║
║  │  ┌──────────────────────────────────────────────────────────────────┐    │  ║
║  │  │  App.js  — Root component, state manager, layout orchestrator    │    │  ║
║  │  │                                                                  │    │  ║
║  │  │  ┌─────────────────────┐   ┌───────────────────────────────┐   │    │  ║
║  │  │  │   MapPanel           │   │     InfoPanel (Sidebar)       │   │    │  ║
║  │  │  │                     │   │                               │   │    │  ║
║  │  │  │  • Leaflet map      │   │  • WeatherCard                │   │    │  ║
║  │  │  │  • Google sat tiles │   │  • NewsCard                   │   │    │  ║
║  │  │  │  • Click handler    │   │  • FloodRiskCard              │   │    │  ║
║  │  │  │  • Marker layer     │   │  • ChangeDetectionCard        │   │    │  ║
║  │  │  │  • Change mask      │   │  • CoordinatesDisplay         │   │    │  ║
║  │  │  └─────────────────────┘   └───────────────────────────────┘   │    │  ║
║  │  └──────────────────────────────────────────────────────────────────┘    │  ║
║  └─────────────────────────────────┬─────────────────────────────────────────┘  ║
║                                    │  fetch() — HTTP/REST                        ║
║                                    │  localhost:5000/api/...                     ║
║                                    ▼                                             ║
║  ┌───────────────────────────────────────────────────────────────────────────┐  ║
║  │                     BACKEND  (Python Flask 2.3)  app.py                   │  ║
║  │                                                                           │  ║
║  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐  │  ║
║  │  │POST /analyze │  │GET /weather  │  │GET /news     │  │POST /detect │  │  ║
║  │  │              │  │              │  │              │  │             │  │  ║
║  │  │Orchestrates  │  │Proxies       │  │Proxies       │  │Runs Siamese │  │  ║
║  │  │all sub-calls │  │OpenWeather   │  │NewsAPI with  │  │U-Net on     │  │  ║
║  │  │Returns       │  │with lat/lng  │  │geo query     │  │image pair   │  │  ║
║  │  │unified JSON  │  │              │  │              │  │             │  │  ║
║  │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬────┘  │  ║
║  │         └─────────────────┴──────────────────┴──────────────────┘       │  ║
║  │                           Flood Risk Scorer                              │  ║
║  │              (rain + news keyword + elevation → risk level)              │  ║
║  └──────────────┬────────────────────────────────┬────────────────────────┘  ║
║                 │                                │                             ║
║                 ▼                                ▼                             ║
║  ┌──────────────────────────┐    ┌────────────────────────────────────────┐   ║
║  │   EXTERNAL APIs          │    │   ML MODEL LAYER  (PyTorch)            │   ║
║  │                          │    │                                        │   ║
║  │  • OpenWeatherMap API    │    │  Siamese U-Net for change detection    │   ║
║  │  • NewsAPI               │    │  Input:  (before, after) image pairs   │   ║
║  │  • Google Satellite Tiles│    │  Output: binary change mask            │   ║
║  │  • Elevation API (opt.)  │    │  Trained on: OSCD / WHU-CD datasets    │   ║
║  └──────────────────────────┘    └────────────────────────────────────────┘   ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```

---

## 🔄 End-to-End Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        COMPLETE REQUEST → RESPONSE FLOW                         │
└─────────────────────────────────────────────────────────────────────────────────┘

  USER CLICKS MAP AT (lat, lng)
        │
        │  e.g.  lat: 25.594, lng: 85.137  (Patna, Bihar)
        ▼
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  STEP 1 — COORDINATE CAPTURE  (App.js)                                  │
  │  Leaflet click event fires → { lat, lng } extracted                    │
  │  Marker placed on map at clicked location                               │
  │  Loading spinner shown in InfoPanel                                     │
  │  POST /api/analyze  { lat, lng }  dispatched to Flask                  │
  └──────────────────────────────────────┬──────────────────────────────────┘
                                         │
                                         ▼
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  STEP 2 — PARALLEL DATA FETCH  (app.py)                                 │
  │                                                                         │
  │  Flask receives { lat, lng } → fires 3 parallel requests:              │
  │                                                                         │
  │   ┌──────────────────────────────────────────────────────────────────┐ │
  │   │  Thread A: OpenWeatherMap                                        │ │
  │   │  GET api.openweathermap.org/data/2.5/weather                    │ │
  │   │  ?lat={lat}&lon={lng}&appid={KEY}&units=metric                  │ │
  │   │  → temp, feels_like, humidity, rain_1h, wind_speed, description │ │
  │   └──────────────────────────────────────────────────────────────────┘ │
  │                                                                         │
  │   ┌──────────────────────────────────────────────────────────────────┐ │
  │   │  Thread B: NewsAPI                                               │ │
  │   │  GET newsapi.org/v2/everything                                  │ │
  │   │  ?q={city_name}&sortBy=publishedAt&pageSize=5                   │ │
  │   │  → title, description, url, source, publishedAt                │ │
  │   └──────────────────────────────────────────────────────────────────┘ │
  │                                                                         │
  │   ┌──────────────────────────────────────────────────────────────────┐ │
  │   │  Thread C: Reverse Geocoding                                     │ │
  │   │  Nominatim / Google Geocoding → city, district, state, country  │ │
  │   └──────────────────────────────────────────────────────────────────┘ │
  └──────────────────────────────────────┬──────────────────────────────────┘
                                         │
                                         ▼
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  STEP 3 — FLOOD RISK SCORING  (app.py)                                  │
  │                                                                         │
  │  flood_score = 0                                                        │
  │  if rain_1h > 5mm:    score += 40   # heavy rainfall                  │
  │  if rain_1h > 20mm:   score += 30   # extreme rainfall                │
  │  if humidity > 90:    score += 10   # high saturation                 │
  │  if "flood" in news:  score += 20   # news signal                     │
  │  if elevation < 50m:  score += 10   # low-lying area (if elev. avail) │
  │                                                                         │
  │  risk_level = "EXTREME" if score > 80                                  │
  │             = "HIGH"    if score > 60                                  │
  │             = "MEDIUM"  if score > 40                                  │
  │             = "LOW"     if score > 20                                  │
  │             = "SAFE"    otherwise                                       │
  └──────────────────────────────────────┬──────────────────────────────────┘
                                         │
                                         ▼
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  STEP 4 — ML CHANGE DETECTION  (app.py → PyTorch)                       │
  │                                                                         │
  │  Fetch satellite image patch at (lat, lng) for T1 and T2 dates         │
  │  Preprocess: resize to 256×256, normalise pixel values to [0,1]        │
  │  Run Siamese U-Net: (img_T1, img_T2) → change_mask                    │
  │  Compute:  changed_px / total_px × 100 = change_percentage             │
  │  Classify: FLOOD / CONSTRUCTION / DEFORESTATION / NO_CHANGE            │
  └──────────────────────────────────────┬──────────────────────────────────┘
                                         │
                                         ▼
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  STEP 5 — UNIFIED RESPONSE → FRONTEND                                   │
  │                                                                         │
  │  {                                                                      │
  │    coordinates: { lat, lng, city, country },                           │
  │    weather:     { temp, humidity, rain_1h, wind, description },        │
  │    news:        [{ title, source, url, publishedAt }, ...],            │
  │    floodRisk:   { score, level, factors },                             │
  │    mlResult:    { changePercent, classification, maskUrl }             │
  │  }                                                                      │
  └──────────────────────────────────────┬──────────────────────────────────┘
                                         │
                                         ▼
  INFOPANEL RENDERS:  WeatherCard  +  NewsCard  +  FloodRiskCard  +  MLCard
```

---

## 🧠 Siamese U-Net ML Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    SIAMESE U-NET — CHANGE DETECTION MODEL                       │
└─────────────────────────────────────────────────────────────────────────────────┘

  WHAT IS A SIAMESE NETWORK?
  ─────────────────────────────────────────────────────────────────────────────
  Two identical encoder branches with shared weights, each processing one
  satellite image. Difference features extracted → decoder produces change mask.

  INPUT:
  ┌────────────────────┐     ┌────────────────────┐
  │  Image T1 (Before) │     │  Image T2 (After)   │
  │  256 × 256 × 3     │     │  256 × 256 × 3      │
  │  RGB satellite     │     │  RGB satellite      │
  └─────────┬──────────┘     └──────────┬──────────┘
            │                           │
            ▼                           ▼
  ┌─────────────────────────────────────────────────────┐
  │         SHARED ENCODER BRANCH  (ResNet-34)          │
  │                                                     │
  │  Block 1: Conv3×3 → BN → ReLU → MaxPool            │
  │  64 feature maps → 128×128                          │
  │           │                           │             │
  │  Block 2: Conv3×3 × 2 → BN → ReLU                  │
  │  128 feature maps → 64×64                           │
  │           │                           │             │
  │  Block 3: Conv3×3 × 2 → BN → ReLU                  │
  │  256 feature maps → 32×32                           │
  │           │                           │             │
  │  Block 4: Conv3×3 × 2 → BN → ReLU                  │
  │  512 feature maps → 16×16                           │
  └──────────────────┬──────────────────────────────────┘
          F_T1       │       F_T2   (per-level features)
                     ▼
  ┌─────────────────────────────────────────────────────┐
  │         DIFFERENCE MODULE                           │
  │                                                     │
  │  ΔF = |F_T1 - F_T2|   (absolute difference)        │
  │  Or   concat(F_T1, F_T2) → 1×1 Conv                │
  └──────────────────┬──────────────────────────────────┘
                     ▼
  ┌─────────────────────────────────────────────────────┐
  │         U-NET DECODER  (skip connections)           │
  │                                                     │
  │  UpConv → concat(skip) → Conv3×3 × 2               │
  │  512 → 256 → 128 → 64 feature maps                  │
  │  Resolution: 16×16 → 32×32 → 64×64 → 128×128       │
  └──────────────────┬──────────────────────────────────┘
                     ▼
  ┌─────────────────────────────────────────────────────┐
  │         OUTPUT HEAD                                 │
  │                                                     │
  │  Conv1×1 → Sigmoid                                  │
  │  256 × 256 × 1  →  binary change mask              │
  │  Pixel = 1: CHANGED   Pixel = 0: UNCHANGED         │
  └─────────────────────────────────────────────────────┘

  CHANGE TYPE CLASSIFICATION:
  ─────────────────────────────────────────────────────────────────────────────
  change_mask + spectral_diff → classify as one of:
  ┌────────────────┬──────────────────────────────────────────────────────┐
  │  Class         │  Detection Signal                                    │
  ├────────────────┼──────────────────────────────────────────────────────┤
  │  🌊 FLOOD       │  Large water-body expansion, blue-ish spectral shift │
  │  🏗️ CONSTRUCTION│  New impervious surfaces, grey/brown pixel change    │
  │  🌿 DEFORESTATION│  Vegetation index (NDVI) decrease, green→brown      │
  │  ✅ NO_CHANGE   │  Change mask < 2% of area                           │
  └────────────────┴──────────────────────────────────────────────────────┘

  TRAINING DATASETS:
  ─────────────────────────────────────────────────────────────────────────────
  • OSCD (Onera Satellite Change Detection)  — 24 city pairs, Sentinel-2
  • WHU-CD  (Wuhan University)               — 0.2m aerial images, 32,207 pairs
  • LEVIR-CD                                 — building change, 637 image pairs
```

---

## 🚨 Flood Risk Detection Engine

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                       FLOOD RISK SCORING ALGORITHM                              │
└─────────────────────────────────────────────────────────────────────────────────┘

  MULTI-SIGNAL FUSION:
  ─────────────────────────────────────────────────────────────────────────────

  Signal 1 — RAINFALL (from OpenWeatherMap)
  ┌──────────────────────────────────────────────────────────────────────┐
  │  rain_1h  < 2mm   → +0   (dry / light drizzle)                      │
  │  rain_1h  2–5mm   → +15  (moderate rain)                            │
  │  rain_1h  5–20mm  → +40  (heavy rain — flood watch)                 │
  │  rain_1h  >20mm   → +70  (extreme rain — flood warning)             │
  └──────────────────────────────────────────────────────────────────────┘

  Signal 2 — HUMIDITY (from OpenWeatherMap)
  ┌──────────────────────────────────────────────────────────────────────┐
  │  humidity < 70%   → +0   (normal)                                   │
  │  humidity 70–85%  → +5   (elevated)                                 │
  │  humidity > 85%   → +10  (saturated — ground absorption reduced)    │
  └──────────────────────────────────────────────────────────────────────┘

  Signal 3 — NEWS KEYWORDS (from NewsAPI)
  ┌──────────────────────────────────────────────────────────────────────┐
  │  keywords: ["flood", "waterlogging", "inundation",                  │
  │             "rescue", "evacuation", "submerged"]                    │
  │  match found in titles/descriptions → +20                           │
  └──────────────────────────────────────────────────────────────────────┘

  Signal 4 — ML CHANGE DETECTION
  ┌──────────────────────────────────────────────────────────────────────┐
  │  Siamese U-Net classifies "FLOOD" → +25                             │
  │  Change mask > 30% of area        → +15                             │
  └──────────────────────────────────────────────────────────────────────┘

  FINAL RISK LEVEL:
  ┌─────────────────────────────────────────────────────────────────────┐
  │  Score   0–20  →  🟢 SAFE      (routine monitoring)                │
  │  Score  21–40  →  🟡 LOW       (watch conditions)                  │
  │  Score  41–60  →  🟠 MEDIUM    (issue advisory)                    │
  │  Score  61–80  →  🔴 HIGH      (activate response)                 │
  │  Score   >80   →  🔴 EXTREME   (emergency alert)                   │
  └─────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Frontend Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    REACT COMPONENT TREE  (CRA — React 18)                       │
└─────────────────────────────────────────────────────────────────────────────────┘

  index.js
  └── <App />                                    ← Root, global state & layout
      │   state: { selectedCoords, analysisData,
      │            isLoading, activeLayer, error }
      │
      ├── <MapPanel />                           ← Left: 65% width
      │   ├── <MapContainer>                     │  react-leaflet wrapper
      │   │   ├── <TileLayer>                    │  Google satellite tiles URL
      │   │   ├── <Marker>                       │  Selected location pin
      │   │   ├── <ChangeOverlayLayer>           │  ML change mask overlay
      │   │   └── onClick → handleCoordClick()  │  Main map interaction
      │   └── <LayerToggleBar>                   │  Switch: Satellite/Street/NDVI
      │
      └── <InfoPanel />                          ← Right: 35% width
          ├── <CoordinatesCard>                  │  lat/lng + city/country
          ├── <WeatherCard>                      │  Temp, rain, humidity, wind
          │   └── <WeatherIcon>                  │  Animated weather icon
          ├── <FloodRiskCard>                    │  Score gauge + risk badge
          │   └── <RiskGauge>                    │  SVG arc gauge component
          ├── <MLResultCard>                     │  Change %, class, mask thumb
          │   └── <ChangeMaskThumb>              │  Miniature mask preview
          └── <NewsCard>                         │  Latest 5 geo-targeted articles
              └── <NewsItem × 5>                │  Title, source, time, link
```

---

## ⚙️ Backend Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                     FLASK BACKEND  (app.py)  — API ROUTES                       │
└─────────────────────────────────────────────────────────────────────────────────┘

  POST  /api/analyze
  ├── Body:   { lat: float, lng: float }
  ├── Action: Orchestrate all sub-calls in parallel (ThreadPoolExecutor)
  └── Return: unified JSON { weather, news, floodRisk, mlResult, coords }

  GET   /api/weather?lat=&lng=
  ├── Proxies: api.openweathermap.org/data/2.5/weather
  ├── Adds:   OPENWEATHER_API_KEY from .env
  └── Return: { temp, feels_like, humidity, rain_1h, wind_speed, description }

  GET   /api/news?lat=&lng=
  ├── Reverse geocodes lat/lng → city name
  ├── Proxies: newsapi.org/v2/everything?q={city}&pageSize=5
  └── Return: [{ title, description, url, source, publishedAt }, ...]

  POST  /api/detect
  ├── Body:   { imageT1: base64, imageT2: base64 }
  ├── Decodes base64 → PIL Images → numpy arrays
  ├── Runs:   siamese_unet.predict(img1, img2)
  └── Return: { changePercent, classification, maskBase64 }

  ENV VARIABLES  (.env):
  ─────────────────────────────────────────────────────────────────────────────
  OPENWEATHER_API_KEY=your_key_here          # free tier: 60 calls/min
  NEWS_API_KEY=your_key_here                 # free tier: 1000 calls/day
  FLASK_PORT=5000
  FLASK_ENV=development
  MODEL_PATH=./models/siamese_unet.pth       # PyTorch weights file
  CORS_ORIGIN=http://localhost:3000
```

---

## 🔌 API Integration Design

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                       EXTERNAL API INTEGRATION MAP                              │
└─────────────────────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────────────────┐
  │  OpenWeatherMap  — Current Weather                                       │
  │                                                                          │
  │  GET api.openweathermap.org/data/2.5/weather                            │
  │      ?lat={lat}&lon={lng}&appid={KEY}&units=metric                      │
  │                                                                          │
  │  Response fields used:                                                   │
  │  weather[0].description  →  "heavy rain"                                │
  │  main.temp               →  32.4°C                                      │
  │  main.humidity           →  89%                                          │
  │  rain["1h"]              →  12.3mm                                       │
  │  wind.speed              →  7.2 m/s                                      │
  │  name                    →  "Patna"                                      │
  └──────────────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────────────────┐
  │  NewsAPI  — Geo-Targeted News                                            │
  │                                                                          │
  │  GET newsapi.org/v2/everything                                          │
  │      ?q={city_name}                                                     │
  │      &sortBy=publishedAt                                                │
  │      &pageSize=5                                                        │
  │      &apiKey={KEY}                                                      │
  │                                                                          │
  │  Response fields used:                                                   │
  │  articles[].title         →  Article headline                           │
  │  articles[].description   →  Article summary                            │
  │  articles[].url           →  Link to full article                       │
  │  articles[].source.name   →  "The Hindu", "NDTV", etc.                  │
  │  articles[].publishedAt   →  ISO 8601 timestamp                         │
  └──────────────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────────────────┐
  │  Google Satellite Tiles  — Map Imagery                                   │
  │                                                                          │
  │  Tile URL: https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}          │
  │  Loaded via Leaflet TileLayer — no API key for basic access             │
  │  High-res satellite imagery updated every ~1–3 years for most regions  │
  └──────────────────────────────────────────────────────────────────────────┘

  FREE TIER LIMITS:
  ┌─────────────────────┬────────────────────┬──────────────────────────────┐
  │  API                │  Free Tier Limit   │  Notes                       │
  ├─────────────────────┼────────────────────┼──────────────────────────────┤
  │  OpenWeatherMap     │  60 calls/min      │  Current weather (free)      │
  │  NewsAPI            │  1,000 calls/day   │  Developer plan (free)       │
  │  Google Sat Tiles   │  Unlimited         │  Tile CDN, no key needed     │
  │  Nominatim Geocode  │  1 req/sec         │  OSM reverse geocoding       │
  └─────────────────────┴────────────────────┴──────────────────────────────┘
```

---

## 📐 UI Component Layout

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         FULL UI WIREFRAME                                        │
└─────────────────────────────────────────────────────────────────────────────────┘

  ┌────────────────────────────────────────────────────────────────────────────┐
  │  🛰️  SATELLITE CHANGE DETECTION MONITOR           [⚙ Settings] [🌙 Dark]  │
  │  ─────────────────────────────────────────────────────────────────────     │
  │                                                                            │
  │  ┌──────────────────────────────────────┐  ┌──────────────────────────┐  │
  │  │         SATELLITE MAP                │  │      ANALYSIS PANEL      │  │
  │  │     (Leaflet — 65% width)            │  │     (35% width)          │  │
  │  │                                      │  │                          │  │
  │  │  ┌────────────────────────────────┐  │  │  📍 25.5941° N, 85.137° E│  │
  │  │  │                                │  │  │  Patna, Bihar, India     │  │
  │  │  │  [Google Satellite Imagery]    │  │  │                          │  │
  │  │  │                                │  │  │  ┌──────────────────┐   │  │
  │  │  │    📍 (clicked marker)         │  │  │  │ 🌤️ WEATHER        │   │  │
  │  │  │                                │  │  │  │ 32°C  Humidity 89%│   │  │
  │  │  │  ██████ (change mask overlay)  │  │  │  │ Rain: 12.3mm/hr  │   │  │
  │  │  │                                │  │  │  │ Wind: 7.2 m/s    │   │  │
  │  │  └────────────────────────────────┘  │  │  └──────────────────┘   │  │
  │  │                                      │  │                          │  │
  │  │  [🛰 Satellite] [🗺 Street] [🌿 NDVI]│  │  ┌──────────────────┐   │  │
  │  │                                      │  │  │ 🚨 FLOOD RISK     │   │  │
  │  │  Click anywhere on the map to        │  │  │ Score: 72 / 100  │   │  │
  │  │  analyse that location.              │  │  │ ████████░░ HIGH  │   │  │
  │  │                                      │  │  └──────────────────┘   │  │
  │  └──────────────────────────────────────┘  │                          │  │
  │                                            │  ┌──────────────────┐   │  │
  │                                            │  │ 🧠 ML DETECTION   │   │  │
  │                                            │  │ Change: 34.7%    │   │  │
  │                                            │  │ Class: 🌊 FLOOD   │   │  │
  │                                            │  │ [mask thumbnail] │   │  │
  │                                            │  └──────────────────┘   │  │
  │                                            │                          │  │
  │                                            │  ┌──────────────────┐   │  │
  │                                            │  │ 📰 LOCAL NEWS     │   │  │
  │                                            │  │ • Bihar floods.. │   │  │
  │                                            │  │ • Patna rescue.. │   │  │
  │                                            │  │ • NDRF deployed. │   │  │
  │                                            │  └──────────────────┘   │  │
  │                                            └──────────────────────────┘  │
  └────────────────────────────────────────────────────────────────────────────┘
```

---

## 🗂️ File Structure

```
satellite-change-detection-monitor/
│
├── 🐍 app.py                      ← Flask backend — all API routes
│   ├── POST /api/analyze           │  Master orchestrator
│   ├── GET  /api/weather           │  OpenWeatherMap proxy
│   ├── GET  /api/news              │  NewsAPI proxy
│   ├── POST /api/detect            │  Siamese U-Net inference
│   └── flood_score()              │  Multi-signal risk scorer
│
├── ⚛️  App.js                     ← React root component
│   ├── MapPanel                   │  Leaflet map + interaction
│   ├── InfoPanel                  │  Weather/News/ML sidebar
│   └── handleCoordClick()        │  Main click → API → render
│
├── 🎨 App.css                     ← Glassmorphism UI styles
│   ├── .glass-card {}             │  backdrop-filter: blur(12px)
│   ├── .flood-gauge {}            │  SVG arc risk gauge
│   ├── .change-mask {}            │  ML overlay styles
│   └── @keyframes pulse {}        │  Alert animations
│
├── 🌐 index.js                    ← React app entry (ReactDOM.render)
├── 🌐 index.html                  ← HTML template with meta tags
├── 🎨 index.css                   ← Global resets and base styles
│
├── 🧪 App.test.js                 ← Jest unit tests for App component
├── 🧪 setupTests.js               ← Testing Library setup
├── 📊 reportWebVitals.js          ← Core web vitals reporting
│
├── 📦 package.json                ← React deps (react-leaflet, leaflet, axios)
├── 📦 package-lock.json           ← Dependency lockfile
├── 📋 requirements.txt            ← Python deps (flask, torch, PIL, requests)
│
├── 🔒 .env                        ← API keys (not committed)
├── 🚫 .gitignore                  ← Ignores node_modules, .env, __pycache__
├── 🖼️  logo.svg / logo192.png / logo512.png  ← PWA icons
├── 📋 manifest.json               ← PWA manifest
├── 🤖 robots.txt                  ← SEO crawl config
└── 📖 README.md                   ← You are here!
```

---

## 🛠️ Installation & Setup

**Prerequisites:** Node.js 18+ · Python 3.9+ · npm · pip

### Step 1 — Clone the Repository

```bash
git clone https://github.com/sreyoshmajumder/satellite-change-detection-monitor.git
cd satellite-change-detection-monitor
```

### Step 2 — Configure Environment Variables

```bash
cp .env .env.local      # or edit .env directly

# Required keys (free tier sufficient):
OPENWEATHER_API_KEY=your_openweathermap_key
NEWS_API_KEY=your_newsapi_key
FLASK_PORT=5000
CORS_ORIGIN=http://localhost:3000
```

> 💡 **No API keys?** The app runs in **Mock Mode** automatically — realistic fake data fills all panels so you can demo without any keys.

### Get Free API Keys

| API | Sign Up Link | Free Tier |
|:---|:---|:---|
| OpenWeatherMap | [openweathermap.org/api](https://openweathermap.org/api) | 60 calls/min |
| NewsAPI | [newsapi.org](https://newsapi.org/) | 1,000 calls/day |

### Step 3 — Install Backend Dependencies

```bash
pip install -r requirements.txt
```

**Key Python packages:**

| Package | Purpose |
|:---|:---|
| `flask` | HTTP API server |
| `flask-cors` | Cross-origin handling |
| `python-dotenv` | ENV variable loading |
| `requests` | External API calls |
| `torch` + `torchvision` | Siamese U-Net inference |
| `Pillow` | Image preprocessing |
| `numpy` | Array operations |

### Step 4 — Install Frontend Dependencies

```bash
npm install
```

**Key JS packages:**

| Package | Purpose |
|:---|:---|
| `react` + `react-dom` | UI framework |
| `leaflet` + `react-leaflet` | Interactive satellite map |
| `axios` | HTTP client for API calls |
| `@testing-library/react` | Unit testing |

---

## ▶️ How to Run

### Terminal 1 — Start Flask Backend

```bash
python app.py
# Server starts at: http://localhost:5000
# Watch for: "Satellite Monitor Backend running on port 5000"
```

### Terminal 2 — Start React Frontend

```bash
npm start
# App opens at: http://localhost:3000
```

```
Clone ──► Add API keys ──► pip install ──► python app.py ──► npm start ──► Click map!
  ↓              ↓               ↓               ↓                ↓             ↓
git clone    .env file        installs       Flask API       React app     Live intel
the repo    OPENWEATHER_      Python         ready at        opens at      appears
            NEWS_API_KEY      packages       port 5000       port 3000     instantly!
```

---

## 🔑 Key Code Walkthrough

### Map Click Handler — `App.js`

```javascript
const handleMapClick = async (e) => {
  const { lat, lng } = e.latlng;
  setSelectedCoords({ lat, lng });
  setIsLoading(true);
  setError(null);

  try {
    const response = await axios.post('http://localhost:5000/api/analyze', { lat, lng });
    setAnalysisData(response.data);
  } catch (err) {
    // Graceful fallback to mock data
    setAnalysisData(generateMockData(lat, lng));
  } finally {
    setIsLoading(false);
  }
};
```

### Flask Orchestrator — `app.py`

```python
from concurrent.futures import ThreadPoolExecutor
import requests, os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data    = request.get_json()
    lat, lng = data['lat'], data['lng']

    with ThreadPoolExecutor(max_workers=3) as executor:
        future_weather = executor.submit(fetch_weather, lat, lng)
        future_news    = executor.submit(fetch_news,    lat, lng)
        future_geocode = executor.submit(reverse_geocode, lat, lng)

    weather = future_weather.result()
    news    = future_news.result()
    location = future_geocode.result()

    flood_risk = compute_flood_risk(weather, news)
    ml_result  = run_change_detection(lat, lng)  # Siamese U-Net

    return jsonify({
        'coordinates': { 'lat': lat, 'lng': lng, **location },
        'weather'    : weather,
        'news'       : news,
        'floodRisk'  : flood_risk,
        'mlResult'   : ml_result,
    })
```

### Flood Risk Scorer — `app.py`

```python
def compute_flood_risk(weather, news):
    score = 0
    factors = []

    rain = weather.get('rain_1h', 0)
    if rain > 20:
        score += 70; factors.append(f"Extreme rainfall: {rain}mm/hr")
    elif rain > 5:
        score += 40; factors.append(f"Heavy rainfall: {rain}mm/hr")
    elif rain > 2:
        score += 15; factors.append(f"Moderate rainfall: {rain}mm/hr")

    humidity = weather.get('humidity', 0)
    if humidity > 85:
        score += 10; factors.append(f"High humidity: {humidity}%")

    flood_keywords = ["flood","inundation","waterlogging","rescue","submerged"]
    news_text = " ".join([a['title'] for a in news]).lower()
    if any(kw in news_text for kw in flood_keywords):
        score += 20; factors.append("Flood-related news detected")

    levels = [(80,"EXTREME"),(60,"HIGH"),(40,"MEDIUM"),(20,"LOW"),(0,"SAFE")]
    level  = next(lvl for threshold, lvl in levels if score >= threshold)

    return { 'score': min(score, 100), 'level': level, 'factors': factors }
```

### Siamese U-Net Inference — `app.py`

```python
import torch
from torchvision import transforms
from PIL import Image
import numpy as np

model = None

def load_model():
    global model
    model_path = os.getenv('MODEL_PATH', './models/siamese_unet.pth')
    if os.path.exists(model_path):
        model = SiameseUNet()
        model.load_state_dict(torch.load(model_path, map_location='cpu'))
        model.eval()

def run_change_detection(lat, lng):
    if model is None:
        return mock_ml_result()   # graceful fallback

    img_t1 = fetch_satellite_patch(lat, lng, date='before')
    img_t2 = fetch_satellite_patch(lat, lng, date='after')

    transform = transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.ToTensor(),
        transforms.Normalize([0.5]*3, [0.5]*3)
    ])

    t1 = transform(img_t1).unsqueeze(0)
    t2 = transform(img_t2).unsqueeze(0)

    with torch.no_grad():
        mask = model(t1, t2).squeeze().numpy()

    change_pct = float((mask > 0.5).mean() * 100)
    class_name  = classify_change(mask, img_t1, img_t2)

    return { 'changePercent': round(change_pct, 2),
             'classification': class_name,
             'maskBase64': encode_mask(mask) }
```

---

## 🗃️ Datasets & Model Training

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    SUPPORTED TRAINING DATASETS                                  │
├─────────────────────────────────────────┬───────────────────────────────────────┤
│  Dataset                                │  Description                          │
├─────────────────────────────────────────┼───────────────────────────────────────┤
│  OSCD (Onera Satellite CD)             │  24 city pairs, Sentinel-2, 13 bands  │
│  WHU-CD (Wuhan University)             │  0.2m aerial, 32,207 image pairs       │
│  LEVIR-CD                              │  Building change, 637 pairs, 1024px   │
│  S2Looking                            │  Side-looking SAR + optical pairs      │
│  Custom India Sentinel-2              │  Download via Google Earth Engine      │
└─────────────────────────────────────────┴───────────────────────────────────────┘

  Training command (once model & data ready):
  python train.py --dataset OSCD --epochs 100 --batch 8 --lr 0.0001
```

---

## 🚀 Roadmap & Extensions

```
Planned and community-suggested features:
─────────────────────────────────────────────────────────────────────────────────

  🕐 HISTORICAL TIME-LAPSE
      Slider to scrub through years of satellite imagery
      Animate deforestation / urbanisation over time

  🌍 MULTI-SPECTRAL ANALYSIS
      Use Sentinel-2 13-band imagery for NDVI, NDWI, NBR indices
      Better vegetation and water body detection

  📡 REAL-TIME SENTINEL DATA
      Copernicus Open Access Hub API → freshest available imagery
      Auto-trigger analysis when new pass available

  📲 MOBILE PWA
      Push notifications for flood alerts in saved locations
      Offline tile caching for field use

  🗄️ ALERT HISTORY DATABASE
      PostgreSQL + TimescaleDB → store all detections with timestamps
      Analytics dashboard: floods per year, hotspot map

  🤝 MULTI-USER COLLABORATION
      Named monitoring zones shared across teams
      Alert subscriptions with email/SMS/webhook delivery
```

---

## 🤝 Contributing

Contributions are warmly welcome — especially model improvements!

```bash
# 1. Fork the repository

# 2. Create a feature branch
git checkout -b feature/historical-timelapse

# 3. Commit your changes
git commit -m "✨ Add Sentinel-2 historical time-lapse slider"

# 4. Push and open a Pull Request
git push origin feature/historical-timelapse
```

---

## 📚 References

- [OpenWeatherMap API](https://openweathermap.org/api)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [Leaflet.js + react-leaflet](https://react-leaflet.js.org/)
- [OSCD Dataset — Daudt et al. (2018)](https://rcdaudt.github.io/oscd/)
- [WHU-CD Dataset — Ji et al. (2018)](https://study.rsgis.whu.edu.cn/pages/download/)
- [Siamese U-Net — Fully Convolutional Siamese Networks for Change Detection](https://arxiv.org/abs/1810.08462)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [PyTorch Documentation](https://pytorch.org/docs/)

---

## 📜 License

MIT License — free to use, modify, and distribute with attribution.

---

*"The Earth is always changing. Our job is to watch."*

**Built with 🛰️ satellites and 🧠 deep learning by [sreyoshmajumder](https://github.com/sreyoshmajumder)**
