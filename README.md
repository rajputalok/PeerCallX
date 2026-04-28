# PeerCallX

PeerCallX is a full-stack video call and chat application built with React, Vite, Express, Socket.IO, and MongoDB. It includes user authentication, activity history, live peer-to-peer video/audio communication, screen sharing, and in-call messaging.

## Repository Structure

- `backend/`
  - `src/app.js` - Express server entrypoint and Socket.IO server setup
  - `src/controllers/` - backend logic for sockets and user operations
  - `src/models/` - MongoDB schemas for users and meetings
  - `src/routes/` - API routes for user auth and activity history
- `frontend/`
  - `src/` - React app source code
  - `src/pages/` - app pages including authentication and video meeting UI
  - `src/contexts/` - authentication context provider
  - `src/utils/` - helper utilities for routing and auth
  - `frontend/package.json` - frontend dependencies and scripts

## Key Features

- User registration and login
- Video/audio chat using WebRTC and Socket.IO signaling
- Screen sharing controls
- In-call chat messaging
- Activity history tracking per user
- Basic user interface with Material UI components

## Tech Stack

- Frontend: React, Vite, Material UI, Socket.IO Client
- Backend: Express, Socket.IO, MongoDB, Mongoose
- Authentication: username/password flows
- Real-time communication: WebRTC + Socket.IO

## Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd PeerCallX
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside `backend/` with at least the following:

```env
MONGO_URL=<your-mongodb-connection-string>
PORT=8000
```

If you deploy the backend elsewhere, update `frontend/src/environment.js` to point to the correct backend URL.

## Running Locally

### Backend

```bash
cd backend
npm run dev
```

This starts the backend API and Socket.IO server on `http://localhost:8000` by default.

### Frontend

```bash
cd frontend
npm run dev
```

Open the local Vite URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

### Backend

- `npm run dev` - Start backend with `nodemon`
- `npm start` - Start backend with Node
  
### Frontend

- `npm run dev` - Start Vite development server
- `npm run build` - Build production assets

## API Endpoints

- `POST /api/v1/users/login` - Log in a user
- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/add_to_activity` - Add activity history
- `GET /api/v1/users/get_all_activity` - Retrieve user history

## Notes

- The frontend currently toggles backend environment based on `frontend/src/environment.js`.
- WebRTC requires camera/microphone permissions from the browser.
- For deployment, make sure `MONGO_URL` and production backend URLs are configured correctly.

## Live Link
https://peercallx-frontend.onrender.com/
