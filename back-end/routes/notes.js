const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notes')

router.get('/', notesController.getAllNotes)
router.post('/', notesController.newNote)

router.get('/:id', notesController.getNote)
router.delete('/:id', notesController.deleteNote)
router.put('/:id', notesController.updateNote)

module.exports = router