const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// CORS setup
const corsOptions = {
  origin: 'https://portfolio-shruti-vawt.vercel.app', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Schema and Model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});
  
const Contact = mongoose.model('Contact', contactSchema);

// API Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('Error:', err);  // Log the error
    res.status(500).json({ error: 'Failed to process the request', details: err.message });
  }
});

// Deployment setup for Vercel
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Backend API!');
});

// Export the app for Vercel
module.exports = app; 

// Start the server locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
