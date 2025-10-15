# 🧑‍💻 User Guide - Livestream Overlay App

## Backend (Flask)
cd backend
pip install -r requirements.txt
python app.py

Runs on: http://127.0.0.1:5000

## Frontend (React)
cd frontend
npm install
npm start

Runs on: http://localhost:3000

## How to Use
1. Open the app in your browser.
2. Enter RTSP/HTTP video URL.
3. Add overlay details (Name, Text, X, Y).
4. Click Add to display overlay.

## Tech Stack
Frontend: React (Axios + React Player)
Backend: Flask + MongoDB
Communication: REST API (CORS enabled)

