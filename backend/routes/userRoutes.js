const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//user
router.put('/editUser/:id', userController.editUser);// edit profile
router.get('/users/:id', userController.userId);// get loggeduser details


//movie
router.get('/selectMovie/:id', userController.selectMovie);//selecting a single movie
router.get('/movies', userController.movies);//get all movies for display


//bookings
router.post("/book-ticket", userController.bookingTicket);
router.get('/userbookings/:id', userController.userbookings);
router.delete('/deletebooking/:userId/:movieId', userController.deletebooking);

//events
router.get('/events', userController.events);

//sports
router.get('/sports', userController.sports);

module.exports = router;