const db = require("../db/db");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
    const sql = "INSERT INTO users (name, email, password,role) VALUES (?, ?, ?,'user')";
    const values = [req.body.name, req.body.email, req.body.password];
    db.query(sql, values, (err, data) => {
        if (err) {
            //console.log("Error in backend post", err);
            return res.json("error");
        }
        else {
            //console.log("Data moved to data base from backend");
            return res.json(data);
        }
    });
}

const login = (req, res) => {
    const sql = "SELECT * from users WHERE email=? and password = ?";
    const values = [req.body.email, req.body.password];
    db.query(sql, values, (err, data) => {
        if (err) {
            //console.log("Error in backend post", err);
            return res.json("error");
        }
        else {
            if (data.length > 0) {
                req.session.role = data[0].role;
                //console.log(req.session.name);
                const name = data[0].name;
                const idid = data[0].id;
                //console.log(idid, "idd");//idddddddddddddd printing here
                const token = jwt.sign({ name }, "jwt-secret-token", { expiresIn: '1d' });
                res.cookie('token', token);
                return res.json({ login: true, name: req.session.name, id: data[0].id });//sending to frontend
            } else {
                return res.json({ login: false });
            }
        }
    });
}


const logout = (req, res) => {
    res.clearCookie('token')
    return res.json({ Status: "Success" })
}

module.exports = {
    signup,
    login,
    logout
}