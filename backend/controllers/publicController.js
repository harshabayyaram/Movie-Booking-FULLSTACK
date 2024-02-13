const db = require("../db/db");

const movies = (req, res) => {
    db.query('SELECT * FROM movies', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(results);
    });
}

module.exports = {
    movies
}