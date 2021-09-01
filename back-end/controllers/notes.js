const Note = require('../models/note')

const getAllNotes = (req, res) => {
	Note.find({}).then(notes => {
		res.json(notes.map(note => note.toJSON()))
	})
}

const getNote = (req, res, next) => {
	Note.findById(req.params.id)
		.then(note => {
			if (note) {
				res.json(note.toJSON())
			} else {
				res.status(404).end()
			}
		})
		.catch(error => next(error))
}

const newNote = (req, res, next) => {
	const body = req.body
	const note = new Note({
		content: body.content,
		important: body.important || false,
		date: new Date(),
	})
	note.save()
		.then(savedNote => {
			res.json(savedNote.toJSON())
		})
		.catch(error => next(error))
}

const deleteNote = (req, res, next) => {
	Note.findByIdAndRemove(req.params.id)
		.then(() => {
			res.status(204).end()
		})
		.catch(error => next(error))
}

const updateNote = (req, res, next) => {
	const body = req.body
	const note = {
		content: body.content,
		important: body.important,
	}
	Note.findByIdAndUpdate(req.params.id, note, { new: true })
		.then(updatedNote => {
			res.json(updatedNote.toJSON())
		})
		.catch(error => next(error))
}

module.exports = {
	getAllNotes,
	getNote,
	newNote,
	deleteNote,
	updateNote
}