const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

router.get('/selectMovie/:id', userController.selectMovie);
router.post("/book-ticket", userController.bookingTicket);
router.get('/userbookings/:id', userController.userbookings);
router.delete('/deletebooking/:userId/:movieId', userController.deletebooking);
router.get('/events', userController.events);
router.get('/sports', userController.sports);

module.exports = router;