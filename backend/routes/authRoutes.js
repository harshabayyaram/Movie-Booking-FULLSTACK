const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController")
const jwt = require("jsonwebtoken");;


const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ ERROR: "YOU ARE NOT AUTHENTICATED" });
    } else {
        jwt.verify(token, "jwt-secret-token", (err, decoded) => {
            if (err) {
                return res.json({ ERROR: "TOKEN IS NOT CORRECT" });
            } else {
                req.name = decoded.name;
                next();
            }
        });
    }
};

router.get("/", verifyUser, (req, res) => {
    //console.log(req.cookies);
    if (req.session.role) {
        return res.json({ valid: true, role: req.session.role, token: req.cookies.token })
    } else {
        return res.json({ valid: false })
    }
})

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);



module.exports = router;