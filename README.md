# MarsMeta Assignment — Profile Manager

A full-stack MERN application to create, view, edit, and delete user profiles. Built with React 19 + Vite on the frontend and Express + MongoDB on the backend.

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 19, Vite, React Router v7, Axios  |
| Backend   | Node.js, Express 5, Mongoose 9          |
| Database  | MongoDB (via MongoDB Atlas)             |
| Styling   | Plain CSS                               |
| Icons     | react-icons (fa6)                       |
| Deploy    | Render (backend), Vite preview (client) |

---

## Project Structure

```
MarsMeta-Assignment/
├── client/                        # React frontend
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── api/
│   │   │   └── profileApi.jsx     # Axios API calls
│   │   ├── components/
│   │   │   └── ProfileCard.jsx    # Single profile card UI
│   │   ├── pages/
│   │   │   ├── ProfilePage.jsx    # Lists all profiles
│   │   │   ├── AddProfile.jsx     # Create new profile form
│   │   │   └── EditProfile.jsx    # Edit existing profile form
│   │   ├── styles/
│   │   │   └── Navbar.css
│   │   ├── navbar.jsx
│   │   ├── App.jsx                # Routes setup
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                        # Express backend
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controller/
│   │   └── profileController.js   # CRUD logic
│   ├── models/
│   │   └── profile.js             # Mongoose schema
│   ├── routes/
│   │   └── profileRoutes.js       # API routes
│   ├── server.js                  # Entry point
│   └── package.json
│
└── package.json                   # Root dependencies
```

---

## Features

- View all profiles in a responsive card grid
- Add a new profile with full details
- Edit an existing profile (pre-filled form)
- Delete a profile with confirmation
- Profile fields: name, title, description, phone, email, location, photo, LinkedIn, GitHub, Instagram
- Skeleton loading state while profiles are being fetched
- Empty state when no profiles exist
- Duplicate email prevention on create and update

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- npm

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/MarsMeta-Assignment.git
cd MarsMeta-Assignment
```

---

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/marsmeta?retryWrites=true&w=majority
PORT=5000
```

Start the server:

```bash
node server.js
```

The API will be running at `http://localhost:5000`

---

### 3. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

The client will be running at `http://localhost:5173`

---

### 4. Connect Frontend to Backend

The API base URL is set in `client/src/api/profileApi.jsx`:

```js
const API = axios.create({
  baseURL: "https://marsmeta-assignment.onrender.com/api/profiles",
});
```

For local development, change it to:

```js
baseURL: "http://localhost:5000/api/profiles"
```

---

## API Endpoints

Base URL: `/api/profiles`

| Method | Endpoint   | Description            |
|--------|------------|------------------------|
| GET    | `/`        | Get all profiles       |
| GET    | `/:id`     | Get single profile     |
| POST   | `/`        | Create new profile     |
| PUT    | `/:id`     | Update profile by ID   |
| DELETE | `/:id`     | Delete profile by ID   |

---

## Profile Schema

| Field       | Type   | Required | Notes                        |
|-------------|--------|----------|------------------------------|
| name        | String | Yes      | Trimmed                      |
| title       | String | Yes      | Trimmed                      |
| description | String | Yes      |                              |
| phone       | String | Yes      |                              |
| email       | String | Yes      | Unique                       |
| location    | String | Yes      |                              |
| photo       | String | No       | Defaults to Unsplash image   |
| linkedin    | String | No       | Defaults to `""`             |
| github      | String | No       | Defaults to `""`             |
| instagram   | String | No       | Defaults to `""`             |

Timestamps (`createdAt`, `updatedAt`) are added automatically.

---

## Sample Profile Data

Use this JSON to seed your database via Postman or Thunder Client (`POST /api/profiles`):

```json
[
  {
    "name": "Aryan Mehta",
    "title": "Full Stack Developer",
    "description": "Building scalable web apps with React and Node.js.",
    "phone": "+91 98765 43210",
    "email": "aryan.mehta@gmail.com",
    "location": "Bangalore, India",
    "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "linkedin": "https://linkedin.com/in/aryanmehta",
    "github": "https://github.com/aryanmehta",
    "instagram": "https://instagram.com/aryanmehta"
  },
  {
    "name": "Priya Sharma",
    "title": "UI/UX Designer",
    "description": "Crafting clean, user-first interfaces for SaaS products.",
    "phone": "+91 91234 56789",
    "email": "priya.sharma@gmail.com",
    "location": "Mumbai, India",
    "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    "linkedin": "https://linkedin.com/in/priyasharma",
    "github": "https://github.com/priyasharma",
    "instagram": "https://instagram.com/priyasharma"
  }
]
```

---

## Deployment

### Backend — Render

1. Push `server/` to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variable: `MONGO_URI=your_atlas_uri`

### Frontend — Vercel / Netlify

1. Set `baseURL` in `profileApi.jsx` to your Render backend URL
2. Run `npm run build` inside `client/`
3. Deploy the `dist/` folder to Vercel or Netlify

---

## Scripts

### Server

```bash
node server.js        # Start server
```

### Client

```bash
npm run dev           # Start dev server
npm run build         # Production build
npm run preview       # Preview production build
npm run lint          # Run ESLint
```

---

## Environment Variables

| Variable    | Location         | Description              |
|-------------|------------------|--------------------------|
| `MONGO_URI` | `server/.env`    | MongoDB Atlas connection string |
| `PORT`      | `server/.env`    | Server port (default: 5000)     |

---

## License

This project was built as part of a MarsMeta assignment. All rights reserved.
