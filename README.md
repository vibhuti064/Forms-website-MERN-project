# 📝 Form Creation Website (MERN / MEN Stack)

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)

A dynamic web application designed to demonstrate the handling of multiple form types (Authentication, Contact, Booking, Survey, Payment) using a robust backend. The project features a clean HTML/CSS frontend connected to a Node.js & Express server that stores all user submissions in a MongoDB database.

---

## 🌟 Key Features

### 🔹 Form Types Supported
* **User Authentication:** Secure Signup and Login forms with data validation.
* **Contact Form:** Users can submit inquiries which are stored in the database.
* **Booking System:** A specialized form to capture booking details (Name, Date, Time).
* **Survey Form:** Collects user feedback and ratings.
* **Payment Simulation:** A UI for processing mock payment details.

### 🔹 Technical Highlights
* **Dynamic Data Handling:** JavaScript logic dynamically routes data to different API endpoints based on the form ID.
* **No-Reload Submissions:** Uses `fetch` API for asynchronous data submission (AJAX-style), preventing page reloads.
* **Database Integration:** Mongoose schemas define the structure for storing contacts, users, and bookings efficiently.
* **Responsive UI:** Clean CSS styling for a user-friendly experience across devices.

---

## 🛠️ Tech Stack

### Frontend
* **HTML5:** Structure of the web pages.
* **CSS3:** Custom styling for forms and layout.
* **JavaScript (Vanilla):** Client-side logic for form handling and API requests.

### Backend
* **Node.js:** Runtime environment for the server.
* **Express.js:** Web framework for routing and handling HTTP requests.
* **MongoDB:** NoSQL database for storing form data.
* **Mongoose:** ODM library for schema definition and database interaction.

---

## 📂 Project Structure

```text
Forms-website-MERN-project/
├── public/                 # Static Frontend Files
│   ├── css/                # Stylesheets (style.css)
│   ├── js/                 # Client-side Scripts (script.js, formHandler.js)
│   ├── index.html          # Homepage
│   ├── contact.html        # Contact Form
│   ├── login.html          # Login Form
│   ├── signup.html         # Signup Form
│   ├── booking.html        # Booking Form
│   └── survey.html         # Survey Form
├── server.js               # Main Backend Entry Point (API Routes)
├── package.json            # Project Metadata & Dependencies
└── README.md               # Project Documentation

---
```


## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites
* [Node.js](https://nodejs.org/) installed.
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally.

