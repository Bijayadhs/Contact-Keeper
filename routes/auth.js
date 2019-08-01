const express = require("express");
const router = express.Router();

//GET api/auth private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//POST api/auth public
router.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
