const express = require('express');
const router = express.Router();
const publicController = require("../controllers/publicController.js")


//get movies
router.get('/movies', publicController.movies);

//get sports


//get events


module.exports = router;