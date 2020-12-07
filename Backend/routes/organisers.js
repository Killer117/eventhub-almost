const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Organiser = require("../models/Organiser");
// const jwt = require("jsonwebtoken");

router.post("/login", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  Organiser.findOne({ email: email }, async function (err, foundCompany) {
    if (err) {
      console.log(err);
    } else {
      if (foundCompany) {
        const isMatch = await bcrypt.compare(password, foundCompany.password);

        if (isMatch) {
          res.send({ found: true, id: foundCompany._id });
          console.log("Logged in");
        } else {
          res.send({ found: "incorrect" });
          console.log("Incorrect email or password");
        }
      } else {
        res.send({ found: "incorrect" });
        console.log("Incorrect Company email or password");
      }
    }
  });
});
router.post("/register", function (req, res) {
  Organiser.find(
    { email: req.body.email },
    async function (err, foundOrganisers) {
      if (foundOrganisers.length === 0) {
        const newOrganiser = new Organiser({
          company_name: req.body.name,
          email: req.body.email,
          address: req.body.address,
          password: req.body.password,
          mobile_no: req.body.mobile,
          landline_no: req.body.landline,
          state: req.body.state,
          city: req.body.city,
          pincode: req.body.pincode,
          budget: {
            min: req.body.minPrice,
            max: req.body.maxPrice,
          },
          bio: req.body.bio,
        });

        newOrganiser.save();

        res.send({ valid: true, id: newOrganiser._id });
      } else {
        res.send("Organiser already registered");
      }
    }
  );
});
router.get("/portfolio/:id", (req, res) => {
  var id = req.params.id;
  Organiser.findOne({ _id: id }, (err, foundCompany) => {
    res.send({
      company_name: foundCompany.company_name,
      email: foundCompany.email,
      address: foundCompany.address,
      // password: foundCompany.password,
      mobile_no: foundCompany.mobile_no,
      landline_no: foundCompany.landline_no,
      state: foundCompany.state,
      city: foundCompany.city,
      pincode: foundCompany.pincode,
    });
  });
});

router.post("/portfolio/:section/:id", function (req, res) {
  if (req.params.section === "home") {
    Organiser.findOne({ _id: req.params.id }, function (err, foundOrganiser) {
      if (foundOrganiser) {
        foundOrganiser.portfolio_home.title = req.body.title;
        foundOrganiser.portfolio_home.description = req.body.home_description;
        foundOrganiser.portfolio_home.website = req.body.website;
      }
    });
  } else if (req.params.section === "about") {
    Organiser.findOne({ _id: req.params.id }, function (err, foundOrganiser) {
      if (foundOrganiser) {
        foundOrganiser.portfolio_about.description = req.body.about_description;
      }
    });
  } else if (req.params.section === "services") {
    Organiser.findOne({ _id: req.params.id }, function (err, foundOrganiser) {
      if (foundOrganiser) {
        foundOrganiser.portfolio_services.description =
          req.body.services_description;
      }
    });
  }
});

router.get("/filter", (req, res) => {
  Organiser.find((err, foundOrganiser) => {
    console.log(foundOrganiser);
    res.send(foundOrganiser);
  });
});

module.exports = router;
