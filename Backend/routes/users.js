const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.get("/profile/:id", function (req, res) {
  var id = req.params.id;

  User.findOne({ _id: id }, function (err, foundUser) {
    date = new Date(foundUser.dob);
    res.send({
      name: foundUser.name.fname + " " + foundUser.name.lname,
      email: foundUser.email,
      gender: foundUser.gender,
      address: foundUser.address.street,
      state: foundUser.address.state,
      city: foundUser.address.city,
      pincode: foundUser.address.pincode,
      dob: date.toDateString(),
      mobile: foundUser.mobile,
    });
  });
});

router.post("/register", function (req, res) {
  User.find({ email: req.body.email }, async function (err, foundUsers) {
    if (foundUsers.length === 0 || !foundUsers) {
      const newUser = new User({
        name: {
          fname: req.body.fname,
          lname: req.body.lname,
        },
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        gender: req.body.gender,
        mobile: req.body.mobile,
        address: {
          street: req.body.address,
          state: req.body.state,
          city: req.body.city,
          pincode: req.body.pincode,
        },
      });

      newUser.save();
      res.send({ valid: true, id: newUser._id });
    } else {
      res.send("User already registered");
    }
  });
});

router.post("/login", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email: email }, async function (err, foundUser) {
    if (err) {
    } else {
      if (foundUser) {
        const isMatch = await bcrypt.compare(password, foundUser.password);
        // const token = await foundUser.generateAuthToken();

        if (isMatch) {
          res.send({ found: true, id: foundUser._id });
          console.log("Successfully logged In");
        } else {
          res.send({ found: "incorrect" });
          console.log("Incorrect user email or password");
        }
      } else {
        res.send({ found: "incorrect" });
        console.log("Incorrect user email or password");
      }
    }
  });
});

module.exports = router;
