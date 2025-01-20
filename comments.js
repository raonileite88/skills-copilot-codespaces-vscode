// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for DELETE /comments
// 5. Create a route for PUT /comments
// 6. Create a route for PATCH /comments
// 7. Create a route for OPTIONS /comments
// 8. Create a route for HEAD /comments
// 9. Create a route for GET /comments/:id
// 10. Create a route for POST /comments/:id
// 11. Create a route for DELETE /comments/:id
// 12. Create a route for PUT /comments/:id
// 13. Create a route for PATCH /comments/:id
// 14. Create a route for OPTIONS /comments/:id
// 15. Create a route for HEAD /comments/:id

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.json(comments.getComments());
});

app.delete('/comments', (req, res) => {
  comments.deleteComments();
  res.json(comments.getComments());
});

app.put('/comments', (req, res) => {
  const { comments: newComments } = req.body;
  comments.updateComments(newComments);
  res.json(comments.getComments());
});

app.patch('/comments', (req, res) => {
  const { comments: newComments } = req.body;
  comments.updateComments(newComments);
  res.json(comments.getComments());
});

app.options('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.head('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  res.json(comments.getComment(id));
});

app.post('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { comment } =