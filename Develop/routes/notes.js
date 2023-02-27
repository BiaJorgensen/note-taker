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
    const { title, text, id } = req.body;
    const generateId = uuidv4()

    const newNote = {
        title,
        text,
        id: generateId
    }

    const readNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    readNotes.push(newNote);
    const noteString = JSON.stringify(readNotes);

    fs.writeFileSync('./db/db.json', noteString);
    res.json(newNote)

} );

router.delete('/api/notes/:id', (req, res) => {
    const readNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const notDeletedNotes = readNotes.filter(note => note.id !== req.params.id)
    const noteString = JSON.stringify(notDeletedNotes);
    fs.writeFileSync('./db/db.json', noteString);
    res.json(`${req.params.id} has been deleted`)
    
    
})

module.exports = router

