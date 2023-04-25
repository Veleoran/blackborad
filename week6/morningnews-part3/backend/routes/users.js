const express = require("express");
const router = express.Router();

const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

// Add your routes here
router.post("/signup", (req, res) => {

    if (!checkBody(req.body, ["username", "password"])) {
        res.json({ result: false, error: " Missing or empty fields"});
        return;
    }
    
// Ceck if user is already registered
User.findOne({ username: req.body.username }) .then(data => {
    if (data === null) {

        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
        });

        newUser.save().then(() => {
            res.json({ result: true });
        });
    } else {
        res.json({ result: false, error: "User already exists" });
    }
});
});
    


router.post("/signin", (req, res) => {
    //check if signin data is valid 
    if (!checkBody(req.body, ["username", "password"])) {
        res.json({ result: false, error: " Missing or empty fields"});
        return;
    }
    
User.findOne({ username: res.body.username, password: req.body.password}) .then(data => {
   if (data) {
    res.json({ result: true });

   } else {
// user was not found in DB
res.json({ result: false, error: "User not found" })
 }
})


});
module.exports = router;
