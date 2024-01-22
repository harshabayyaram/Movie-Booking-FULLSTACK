const db = require("../db/db");

const selectMovie = (req, res) => {
    const movieId = req.params.id;
    //console.log("select movie id", req.params.id);
    db.query('SELECT * FROM movies WHERE id = ?', movieId, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            //console.log(error, "getting error while selecting one movie backend");
            return;
        }
        res.json(results);
        //console.log(results, "NO error whiileselecting one movie");
    });
}

const bookingTicket = (req, res) => {
    const sql = "INSERT INTO userandmovies (userId, movieId) VALUES (?, ?)";
    //console.log("data got in book ticket " + req.body[0] + req.body[1]);
    const values = [req.body[0], req.body[1]];
    db.query(sql, values, (err, data) => {
        if (err) {
            //console.log("Error book ticket sending from server", err);
            return res.json("error");
        }
        else {
            //console.log("ticket data moved to the backed with userID and movieID");
            return res.json(data);
        }
    });
}

const userbookings = (req, res) => {
    const userId = req.params.id;
    //console.log(req.params.id);

    const getUserBookingsQuery = `
      SELECT u.id AS userId, m.id AS movieId, m.movie_name AS movieName, m.movie_date AS date, m.movie_time AS time
      FROM users u
      JOIN userandmovies um ON u.id = um.userId
      JOIN movies m ON um.movieid = m.id
      WHERE u.id = ${userId}
    `;

    db.query(getUserBookingsQuery, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching user bookings' });
        } else {
            res.json(results);
        }
    });
}

const deletebooking = (req, res) => {
    const { userId, movieId } = req.params;
    //console.log(req.params, "dafad");

    const deleteBookingQuery = `
      DELETE FROM userandmovies
      WHERE userId = ${userId} AND movieid = ${movieId}
    `;

    db.query(deleteBookingQuery, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error deleting booking BE' });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'No matching booking found to delete' });
            } else {
                res.json({ message: `Booking with ID ${movieId} deleted successfully` });
            }
        }
    });
}

const events = (req, res) => {
    db.query('SELECT * FROM events', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
}

const sports = (req, res) => {
    db.query('SELECT * FROM sports', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
}

module.exports = {
    selectMovie,
    bookingTicket,
    userbookings,
    deletebooking,
    events,
    sports
}