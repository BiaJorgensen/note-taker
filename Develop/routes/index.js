const express = require('express');
// Import our modular routers for /notes
const notesRouter = require('./notes');

const app = express();
// Using notes router with /api/notes endpoint added
app.use('/api/notes', notesRouter)

module.exports = app