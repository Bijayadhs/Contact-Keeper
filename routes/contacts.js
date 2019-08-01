const express = require("express");
const router = express.Router();

//GET api/contacts private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});
//POST api/contacts private
router.post("/", (req, res) => {
  res.send("Add contacts");
});
//PUT api/contacts/:id private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});
//DELETE api/contacts private
router.delete("/", (req, res) => {
  res.send("Delete contacts");
});

module.exports = router;
