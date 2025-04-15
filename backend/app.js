const express = require('express');
const cors = require('cors');
const { run } = require('./mongodbConnector.js');
const app = express();

const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('./users.js');
const { createClass, getClasses, getClassById, updateClass, deleteClass } = require('./classes.js');
const { createFaq, getFaqs, getFaqById, updateFaq, deleteFaq } = require('./faqs.js');
const { createReview, getReviews, getReviewById, updateReview, deleteReview } = require('./reviews.js');
const { createMedia, getMedias, getMediaById, updateMedia, deleteMedia } = require('./media.js');
const { createMemPlan, getMemPlans, getMemPlanById, updateMemPlan, deleteMemPlan } = require('./membershipplans.js');
const { loginUser } = require('./login.js');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.listen(PORT, async () => {
  await run();
  console.log(`Example app listening on port ${PORT}`);
});

app.post('/users', async (req, res) => {
  const data = req.body;
  const users = await createUser(data);
  res.send(users);
});

app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const users = await getUserById(id);
  res.send(users);
});

app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const users = await updateUser(id, data);
  res.send(users);
});

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const users = await deleteUser(id);
  res.send(users);
});

app.post('/classes', async (req, res) => {
  const data = req.body;
  const classes = await createClass(data);
  res.send(classes);
});

app.get('/classes', async (req, res) => {
  const classes = await getClasses();
  res.send(classes);
});

app.get('/classes/:id', async (req, res) => {
  const id = req.params.id;
  const classes = await getClassById(id);
  res.send(classes);
});

app.put('/classes/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const classes = await updateClass(id, data);
  res.send(classes);
});

app.delete('/classes/:id', async (req, res) => {
  const id = req.params.id;
  const classes = await deleteClass(id);
  res.send(classes);
});

app.post('/faqs', async (req, res) => {
  const data = req.body;
  const faqs = await createFaq(data);
  res.send(faqs);
});

app.get('/faqs', async (req, res) => {
  const faqs = await getFaqs();
  res.send(faqs);
});

app.get('/faqs/:id', async (req, res) => {
  const id = req.params.id;
  const faq = await getFaqById(id);
  res.send(faq);
});

app.put('/faqs/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const faqs = await updateFaq(id, data);
  res.send(faqs);
});

app.delete('/faqs/:id', async (req, res) => {
  const id = req.params.id;
  const faqs = await deleteFaq(id);
  res.send(faqs);
});

app.post('/reviews', async (req, res) => {
  const data = req.body;
  const review = await createReview(data);
  res.send(review);
});

app.get('/reviews', async (req, res) => {
  const reviews = await getReviews();
  res.send(reviews);
});

app.get('/reviews/:id', async (req, res) => {
  const id = req.params.id;
  const review = await getReviewById(id);
  res.send(review);
});

app.put('/reviews/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const review = await updateReview(id, data);
  res.send(review);
});

app.delete('/reviews/:id', async (req, res) => {
  const id = req.params.id;
  const review = await deleteReview(id);
  res.send(review);
});

app.post('/media', async (req, res) => {
  const data = req.body;
  const media = await createMedia(data);
  res.send(media);
});

app.get('/media', async (req, res) => {
  const medias = await getMedias();
  res.send(medias);
});

app.get('/media/:id', async (req, res) => {
  const id = req.params.id;
  const media = await getMediaById(id);
  res.send(media);
});

app.put('/media/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const media = await updateMedia(id, data);
  res.send(media);
});

app.delete('/media/:id', async (req, res) => {
  const id = req.params.id;
  const media = await deleteMedia(id);
  res.send(media);
});

app.post('/memplans', async (req, res) => {
  const data = req.body;
  const memplan = await createMemPlan(data);
  res.send(memplan);
});

app.get('/memplans', async (req, res) => {
  const memplans = await getMemPlans();
  res.send(memplans);
});

app.get('/memplans/:id', async (req, res) => {
  const id = req.params.id;
  const memplan = await getMemPlanById(id);
  res.send(memplan);
});

app.put('/memplans/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const memplan = await updateMemPlan(id, data);
  res.send(memplan);
});

app.delete('/memplans/:id', async (req, res) => {
  const id = req.params.id;
  const memplan = await deleteMemPlan(id);
  res.send(memplan);
});

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const result = await loginUser(email, password);
  res.send(result);
});

app.post(
  '/contact',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject,
      text: `From: ${name} <${email}>\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  }
);
