const express = require('express');
const { run } = require('./mongodbConnector.js');
const app = express();
const { createUser, getUsers, updateUser, deleteUser } = require('./users.js');
const { createClass, getClasses, updateClass, deleteClass } = require('./classes.js');
const { createFaq, getFaqs, updateFaq, deleteFaq } = require('./faqs.js');
const { createReview, getReviews, updateReview, deleteReview } = require('./reviews.js');
const { createMedia, getMedias, updateMedia, deleteMedia } = require('./media.js');
const { createMemPlan, getMemPlans, updateMemPlan, deleteMemPlan } = require('./membershipplans.js');
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, async () => {
  await run();
  console.log(`Example app listening on port ${PORT}`);
});


// HTTP methods for users
app.post('/users', async (req, res) => {
  const data = req.body;
  const users = await createUser(data);
  res.send(users);
});
app.get('/users', async (req, res) => {
  const users = await getUsers();
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


// HTTP methods for classes
app.post('/classes', async (req, res) => {
  const data = req.body;
  const classes = await createClass(data);
  res.send(classes);
});
app.get('/classes', async (req, res) => {
  const classes = await getClasses();
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


// HTTP methods for faqs
app.post('/faqs', async (req, res) => {
  const data = req.body;
  const faqs = await createFaq(data);
  res.send(faqs);
});
app.get('/faqs', async (req, res) => {
  const faqs = await getFaqs();
  res.send(faqs);
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


// HTTP methods for reviews
app.post('/reviews', async (req, res) => {
  const data = req.body;
  const review = await createReview(data);
  res.send(review);
});
app.get('/reviews', async (req, res) => {
  const reviews = await getReviews();
  res.send(reviews);
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


// HTTP methods for media
app.post('/media', async (req, res) => {
  const data = req.body;
  const media = await createMedia(data);
  res.send(media);
});
app.get('/media', async (req, res) => {
  const medias = await getMedias();
  res.send(medias);
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


// HTTP methods for membershipplans
app.post('/memplans', async (req, res) => {
  const data = req.body;
  const memplan = await createMemPlan(data);
  res.send(memplan);
});
app.get('/memplans', async (req, res) => {
  const memplans = await getMemPlans();
  res.send(memplans);
});
app.put('/memplans/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const memplan = await updateMemPlan(id, data);
  res.send(memplan);
});
app.delete('/memplans/:id', async (req, res) => {
  const id = req.params.id;
  const memplan = await deleteMemPlan(id, data);
  res.send(memplan);
});