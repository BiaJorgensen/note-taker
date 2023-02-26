const express = require('express');
const path = require('path');
const app = express();
const api = require('../Develop/routes/notes')


app.use(express.static('public'));
app.use(api)



// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for main page (using wildcard)
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(3000)