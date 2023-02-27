const router = require('express').Router();
// const path = require('path');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')


router.get('/api/notes', (req, res) => {
    const readNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(readNotes)
});


router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        // id: uuidv4(),
    }

    const readNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    readNotes.push(newNote);
    const noteString = JSON.stringify(readNotes);

    fs.writeFileSync('./db/db.json', noteString);
    res.json(newNote)

} )

module.exports = router

