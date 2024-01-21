const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");


router.get('/users', adminController.users);
router.delete('/users/:id', adminController.userIdDelete);
router.get('/movies', adminController.movies);
router.delete('/movies/:id', adminController.movieId);
router.get('/users/:id', adminController.userId);
router.get('/managebookings', adminController.managebookings);
router.post("/addMovie", adminController.addMovie);
router.put("/editmovie/:id", adminController.editmovie);

module.exports = router;