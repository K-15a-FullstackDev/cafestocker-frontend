# CafeStocker – Frontend

Small-cafe inventory tracker to avoid stockouts. Owners add items, set low-stock thresholds, and track quantities.  
When an item drops to/below its threshold, it’s highlighted in the UI. (Backend optionally sends SMS alerts.)

> This repo is the **React (CRA)** frontend. The API lives in the `cafestocker-backend` repo.



## ✨ Features
- Add / list / edit / delete inventory items
- Low-stock visual highlight (quantity ≤ threshold)
- Configurable API base URL via `.env`
- Simple, clean 2020-era stack (React 16 + CRA + axios)

---

## 🧰 Tech Stack 
- **React 16 (Create React App)**
- **axios** for API calls
- **react-router-dom@5** (reserved for future routing)
- Backend target: **Node.js (Express)** + **MySQL** (`mysql2`), optional **Twilio** for SMS

---
