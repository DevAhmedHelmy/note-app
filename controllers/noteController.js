var generator = require("../utilities/generator");
var store = require("../utilities/memoryStorage");
var noteModel = require("../models/noteModel");

const getAllNotes = (req, res) => {
  var values = store.getValues(store.store);
  res.status(200).send(JSON.stringify(values));
};
const getNote = (req, res) => {
  var values = store.getValues(store.store);
  res.status(200).send(JSON.stringify(values));
};
const createNote = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  if (!title || !content) {
    return res.status(400).send("Please provide a title and content.");
  }
  var Note = new noteModel.Note(
    generator.generator,
    title,
    content,
    "user",
    new Date(),
    new Date()
  );
  store.store.setItem(Note.id, JSON.stringify(Note));
  return res.status(201).send("Note created");
};
const updateNote = (req, res) => {
  const noteId = parseInt(req.params.id);
  const title = req.body.title;
  const content = req.body.content;
  if (!noteId) {
    return res.status(400).send("Please provide a note id.");
  }

  if (!title || !content) {
    return res.status(400).send("Please provide a title and content.");
  }

  var noteItem = store.store.getItem(noteId);
  if (!noteItem) {
    return res.status(404).send("Note not found.");
  }

  var Note = new noteModel.Note(
    noteId,
    title,
    content,
    "user",
    new Date(),
    new Date()
  );
  store.store.setItem(noteId, JSON.stringify(Note));
  return res.status(201).send("Note updated");
};
const deleteNote = (req, res) => {
  const noteId = parseInt(req.params.id);
  if (!noteId) {
    return res.status(400).send("Please provide a note id.");
  }
  var noteItem = store.store.getItem(noteId);
  if (!noteItem) {
    return res.status(404).send("Note not found.");
  }
  store.store.removeItem(noteId);
  return res.status(200).send("Note deleted");
};
module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
