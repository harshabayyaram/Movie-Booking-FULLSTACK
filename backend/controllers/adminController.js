const db = require("../db/db");

const users = (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
}

const userIdDelete = (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', userId, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json({ message: 'User deleted successfully' });
    });
}

const movies = (req, res) => {
    db.query('SELECT * FROM movies', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
}

const movieId = (req, res) => {
    const movieId = req.params.id;
    db.query('DELETE FROM movies WHERE id = ?', movieId, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json({ message: 'Movie deleted successfully' });
    });
}

const userId = (req, res) => {
    const userId = req.params.id;
    db.query('SELECT * FROM users where id= ?', userId, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
}

const managebookings = (req, res) => {
    const sql = 'SELECT u.name AS userName, m.movie_name, m.movie_date, m.movie_time, m.movie_amount FROM users u CROSS JOIN userandmovies um LEFT JOIN movies m ON m.id = um.movieid WHERE u.id = um.userId;'
    db.query(sql, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
}


const addMovie = (req, res) => {
    const sql = "INSERT INTO movies (movie_name, movie_actor, movie_time,movie_date,movie_status,movie_amount,image_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [req.body.movietitle, req.body.movieactor, req.body.movietime, req.body.moviedate, , req.body.moviestatus, req.body.movieamount, req.body.imageurl];
    db.query(sql, values, (err, data) => {
        if (err) {
            //console.log("Error in backend adding movie", err);
            return res.json("error");
        }
        else {
            //console.log("Data moved to movies table from backend");
            return res.json(data);
        }
    });
}

const editmovie = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    // const sql = `UPDATE movies SET movie_name = ?, movie_actor = ?, movie_time = ?, movie_date = ?, movie_status = ?, movie_amount = ?, image_url = ? WHERE id = ?`
    const sql = `UPDATE movies SET movie_name = ?, movie_actor = ?, movie_time = ?, movie_date = ?, movie_status = ?, movie_amount = ?, image_url = ? WHERE id = ?;`
    const values = [req.body.movie_name, req.body.movie_actor, req.body.movie_time, req.body.movie_date, req.body.movie_status, req.body.movie_amount, req.body.image_url, id];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.log("Error in backend editing movie", err);
            return res.json("error");
        }
        else {
            console.log("Data edited in movies table from backend");
            console.log(data,"data in movie edit table");
            return res.json(data);
        }
    });
}
module.exports = {
    users,
    userIdDelete,
    movies,
    movieId,
    userId,
    managebookings,
    addMovie,
    editmovie
}