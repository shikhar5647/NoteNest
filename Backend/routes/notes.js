const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');

//ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async(req, res) => {
    const notes = Notes.find({ user: req.user.id });
    res.json(notes);
});


module.exports = router;