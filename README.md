VAIDYA AI – Hospital Command Center

🚑 An Agentic AI system that helps hospitals prepare before patient surges happen.

Vaidya AI is built to solve one of the biggest problems in Indian healthcare —
unpredictable patient overload during festivals, pollution spikes, and outbreaks.

Instead of reacting after chaos begins, Vaidya AI allows hospitals to:

predict tomorrow’s demand,

plan staffing,

monitor supplies,

alert patients,

and track AI decisions in real-time.

🧠 What Vaidya AI Does

Vaidya AI works like a hospital control tower, using multiple AI agents that collaborate to prepare hospitals for critical days.

Core Capabilities
📈 Surge Prediction Agent

Predicts OPD, ER, and ICU patient load based on:

festival days,

AQI (pollution),

historical hospital data.

Outputs:

predicted patient count

department-level risk: LOW / MEDIUM / HIGH

👥 Staffing Planner Agent

Automatically recommends:

additional doctors,

nurses,

department-wise staff planning.

Based on predicted demand and current staff availability.

📦 Supply Monitoring Agent

Tracks:

oxygen

ICU beds

medicines

masks and consumables

Raises alerts when stock levels become dangerous.

🗣 Advisory Agent (Text & Voice)

Generates patient and staff advisories:

multilingual alerts

emergency awareness messages

automated voice calls for high-risk situations

🔍 Agent Activity Log

Displays:

what each AI agent decided,

when it ran,

and why.

Ensures transparency and auditability.

🏥 Why Vaidya AI Matters

Hospitals today:

prepare manually

react too late

rely on guesswork

Vaidya AI introduces:
✅ early warnings
✅ data-driven decision-making
✅ automation where humans struggle
✅ readiness instead of panic

🧩 Architecture Overview
Input Data  
   ↓  
Surge Prediction Agent  
   ↓  
Staffing Planner Agent  
   ↓  
Supply Monitoring Agent  
   ↓  
Advisory Agent  
   ↓  
Unified Hospital Plan + AI Logs


All AI agents return insights via one unified API:
POST /api/v1/plan

🚀 How to Run Locally
Backend
pip install -r requirements.txt
uvicorn backend.main:app --reload


API will be available at:
http://localhost:8000

Frontend

Powered by a Lovable UI template.
Deployed app (if available):
🔗 https://vaidya-ai-agent.vercel.app

🧪 Sample API Request
{
  "date": "2025-11-29",
  "city": "Mumbai",
  "is_festival": true,
  "aqi": 420,
  "recent_load": {
    "opd": 150,
    "er": 50,
    "icu": 20
  },
  "current_staff": {
    "opd": 5,
    "er": 3,
    "icu": 3
  },
  "inventory": [
    {
      "item_name": "N95_masks",
      "current_stock": 500,
      "min_required": 800,
      "reorder_level": 600,
      "unit": "pieces"
    }
  ]
}

✅ Response Includes

Surge forecast

Staffing plan

Supply alerts

Multilingual advisories

AI agent logs

Risk summary

All in ONE response.

🛠 Tech Stack (Summary)

Python

FastAPI

Machine Learning (forecasting logic)

Rule-based AI planning

NLP (advisory generation)

Lovable (UI)

REST APIs

👥 Team

Built by Team Bright Sparks at MumbaiHacks 2025.

🌟 Future Scope

Radiology AI integration (X-ray, CT, MRI)

Disease outbreak heatmaps

Government health system integration

Fully automated emergency preparedness systems

📫 Contact

For collaboration or queries:

📧 Email: [Your email]
📍 MumbaiHacks 2025

🔥 Final Note

Vaidya AI doesn't predict illness.
It predicts hospital strain before it happens.
