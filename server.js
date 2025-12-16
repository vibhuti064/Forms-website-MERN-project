const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// 1. Connect to MongoDB
// Make sure MongoDB is running in the background!
mongoose.connect('mongodb://127.0.0.1:27017/myWebsiteDB')
    .then(() => console.log("✅ Database Connected Successfully"))
    .catch((err) => console.error("❌ Database Error:", err));

// 2. Middleware (Helpers)
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Tells server to serve HTML files from 'public' folder

// 3. Define Database Schemas (Blueprints)
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const BookingSchema = new mongoose.Schema({
    name: String,
    date: String,
    time: String
});

// 4. Create Models
const Contact = mongoose.model('Contact', ContactSchema);
const User = mongoose.model('User', UserSchema);
const Booking = mongoose.model('Booking', BookingSchema);

// 5. API Routes (The endpoints your forms will talk to)

// Handle Contact Form
app.post('/submit-contact', async (req, res) => {
    try {
        const newData = new Contact(req.body);
        await newData.save();
        res.json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving data" });
    }
});

// Handle Signup Form
app.post('/submit-signup', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ message: "Signup successful!" });
    } catch (error) {
        res.status(500).json({ message: "Error signing up" });
    }
});

// Handle Booking Form
app.post('/submit-booking', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.json({ message: "Booking confirmed!" });
    } catch (error) {
        res.status(500).json({ message: "Error booking" });
    }
});

// 6. Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});