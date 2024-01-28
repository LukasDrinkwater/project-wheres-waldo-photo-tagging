const express = require("express");

const index = express.Router();

index.get("/", (req, res) => {
  res.json({ name: "frodo" });
});

module.exports = index;
