const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/college-festival', { useNewUrlParser: true, useUnifiedTopology: true });

// Event Model
const Event = mongoose.model('Event', {
  name: String,
  description: String,
  date: String,
  time: String,
  venue: String,
  prerequisites: String,
});

// Merchandise Model
const Merchandise = mongoose.model('Merchandise', {
  name: String,
  price: String,
  image: String,
});

// API Endpoints
app.get('/api/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.get('/api/merchandise', async (req, res) => {
  const items = await Merchandise.find();
  res.json(items);
});

// Registration Endpoint
app.post('/api/register/:eventId', async (req, res) => {
  const { eventId } = req.params;
  const { name, email, team } = req.body;

  // Send confirmation email
  const transporter = nodemailer.createTransport({ /* SMTP details */ });
  await transporter.sendMail({
    from: 'admin@festival.com',
    to: email,
    subject: 'Event Registration Confirmation',
    text: `You have successfully registered for the event.`
  });

  res.json({ message: 'Registration successful' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
