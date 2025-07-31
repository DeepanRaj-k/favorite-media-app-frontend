# 🎬 Favorite Media App

A full-stack web application to manage your favorite Movies and TV Shows.  
Built with **React + Vite + TypeScript + TailwindCSS** for the frontend, and **Node.js + Express + Prisma + MySQL + Zod** for the backend.

---

##  Technology Stack

### Frontend
-  React with Vite + TypeScript
-  TailwindCSS
-  UI: Custom styled (can be replaced with Shadcn UI / Material UI / AntD)
-  Axios for API requests
-  Vercel for deployment

### Backend
- Node.js with Express
-  Prisma (ORM)
-  MySQL
-  Zod (Validation)
-  Deployed on Render

---

## Features

-  Add media (Movies / TV Shows)
-  Paginated table with infinite scroll
-  Fully responsive & clean design
- Schema validation with Zod
- ⚙ API integration using Axios
-  Deployed backend + frontend

---

##  Folder Structure
favorite-media-app/
├── backend/ # Node.js + Express + Prisma
│ ├── index.js
│ └── prisma/
│ ├── schema.prisma
│ └── .env
│
├── frontend/ # React + Vite + TypeScript
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── MediaForm.tsx
│ │ ├── MediaTable.tsx
│ │ └── DeleteModal.tsx
│ ├── types.ts
│ ├── App.tsx
│ └── main.tsx
└── README.md


---

##  Backend Setup (`/backend`)

### Step 1: Install dependencies

```bash
cd backend
npm install

Step 2: Create .env
DATABASE_URL="https://favorite-media-app-1.onrender.com"

Step 3: Prisma setup
npx prisma init
npx prisma migrate dev --name init
npx prisma generate

Step 4: Run server
node index.js

Frontend Setup (/frontend)

Step 1: Install dependencies
cd frontend
npm install

Step 2: Create .env
VITE_API_URL=https://favorite-media-app.onrender.com

Step 3: Run frontend locally
npm run dev

Deployment Instructions
 Backend Deployment on Render
Go to https://render.com

Create New Web Service

Connect your GitHub backend repo

Set Environment Variable:DATABASE_URL =DATABASE_URL="https://favorite-media-app-1.onrender.com"
Set Build Command:npm install && npx prisma generate
Set Start Command:node index.js

Frontend Deployment on Vercel
Go to https://vercel.com

Click Add New Project and import your frontend repo

Set Environment Variable:VITE_API_URL=https://your-backend.onrender.com
Click Deploy

 Live Demo
 Frontend: https://your-frontend.vercel.app

 Backend API: https://your-backend.onrender.com/api/media

 Submission Checklist
 GitHub repository with clean code

 Live frontend on Vercel

 Live backend on Render

 Fully functional CRUD features

 README with setup and deployment

 Author
Deepan Raj K
Frontend Developer from Tanjore, India
 GitHub



---


