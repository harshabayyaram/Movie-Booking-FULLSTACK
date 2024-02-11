const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// users 
router.get('/users', adminController.users);
router.delete('/users/:id', adminController.userIdDelete);
// router.get('/users/:id', adminController.userId);

//movies 
router.post("/addMovie", adminController.addMovie);
router.get('/movies', adminController.movies);
router.put("/editmovie/:id", adminController.editmovie);
router.delete('/movies/:id', adminController.movieId);

//bookings
router.get('/show-bookings', adminController.showBookings);

module.exports = router;