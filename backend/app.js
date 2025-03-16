const express = require('express');
const { run } = require('./mongodbConnector.js');
const app = express();
const getUsers = require('./users.js');
const getClasses = require('./classes.js');
const getFaqs = require('./faqs.js');
const getReviews = require('./reviews.js');
const getMedia = require('./media.js');
const getMemPlans = require('./membershipplans.js');
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, async () => {
  await run();
  console.log(`Example app listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
  res.send("Hello World");
});

app.get('/home', (req, res) => {
  res.send("home");
});

app.get('/classes', async (req, res) => {
  const classes = await getClasses();
  res.send(classes);
});

app.get('/faqs', async (req, res) => {
  const faqs = await getFaqs();
  res.send(faqs);
});

app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get('/media', async (req, res) => {
  const media = await getMedia();
  res.send(media);
});

app.get('/reviews', async(req, res) => {
  const reviews = await getReviews();
  res.send(reviews);
});

app.get('/memplans', async(req, res) => {
  const memplans = await getMemPlans();
  res.send(memplans);
});