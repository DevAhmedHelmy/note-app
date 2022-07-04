var router = require('express').Router();
var noteController = require('../controllers/noteController');

router.get("/notes", noteController.getAllNotes);
router.post("/notes/create", noteController.createNote);
router.get('/notes/show/:id', noteController.getNote);
router.put('/notes/update/:id', noteController.updateNote);
router.delete('/notes/delete/:id', noteController.deleteNote);


module.exports = router;