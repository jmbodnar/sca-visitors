var express = require("express");
var router = express.Router();

const {
  visitorSchema,
  Visitor,
  validateVisitor,
} = require("../models/visitor");

router.get("/", async function (req, res, next) {
  const visitors = await Visitor.find().sort("-lastname -firstname");
  res.render("visitors", { visitors });
});

router.post("/", async function (req, res, next) {
  const { error, value } = validateVisitor(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const newVisitor = new Visitor(value);
    const result = await newVisitor.save();
    res.render("visitor", result);
  } catch (err) {
    res.sendStatus(400);
    console.log(new Error(err));
  }
});

module.exports = router;
