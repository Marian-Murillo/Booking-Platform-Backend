# Booking-Platform-Backend
# 🏠 Full-Stack Booking Platform (Airbnb Clone)

A full-stack booking platform inspired by Airbnb, built to demonstrate real-world product architecture, authentication, role-based access, and reservation logic.

## 🚀 Live Demo
- Frontend: https://your-vercel-app.vercel.app  
- Backend API: https://your-render-api.onrender.com  

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MongoDB Atlas
- Mongoose ODM

### Deployment
- Frontend: Vercel  
- Backend: Render  

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login with JWT
- Role-based access control (ADMIN vs USER)
- Protected routes on both frontend and backend
- Dynamic navbar based on authentication state and role

### 🏡 Properties (Admin)
- Create, read, update, and delete properties
- Store property details such as:
  - Title
  - Description
  - Location
  - Price per night
  - Images (future enhancement)

### 📅 Booking System
- Interactive calendar with real date selection
- Automatic calculation of:
  - Number of nights
  - Total price
- Validation to prevent booking unavailable dates
- Storage of all reservations in MongoDB
- Relationship between:
  - Users → Bookings → Properties

### 👤 User Dashboard
- “My Bookings” page
- Users can:
  - View their past and upcoming reservations
  - See property details for each booking
  - Navigate directly to the property page

---

## 🧠 What I Learned Building This

- Designing RESTful APIs with Express
- Implementing secure authentication using JWT
- Handling relational data in MongoDB using Mongoose
- Managing protected routes in Next.js
- Working with real-world date logic and availability rules
- Deploying full-stack applications with Vercel and Render

---

## 📂 Project Structure (High Level)
├── routes/
│ ├── auth.js
│ ├── properties.js
│ └── bookings.js
├── models/
│ ├── User.js
│ ├── Property.js
│ └── Booking.js
└── server.js
## 💬 About This Project

This project was built as part of my journey as a Full Stack Developer to demonstrate my ability to build scalable, secure, and user-friendly web applications using modern technologies.

Feel free to reach out if you have any questions or feedback!
### 👩‍💻 Built by **Marian Murillo**
- GitHub: https://github.com/Marian-Murillo
- LinkedIn: https://www.linkedin.com/in/marian-murillo/
