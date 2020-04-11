const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const visitorSchema = new mongoose.Schema({
  firstname: { type: String, min: 1, max: 125, required: true, trim: true },
  lastname: { type: String, min: 1, max: 125, required: true, trim: true },
  preferredname: { type: String, min: 1, max: 125, trim: true },
  address: { type: String, min: 1, max: 255, required: true, trim: true },
  phone: { type: String, min: 1, max: 125, required: true, trim: true },
  email: { type: String, min: 1, max: 125, required: true, trim: true },
  type: {
    type: String,
    min: 1,
    max: 125,
    required: true,
    trim: true,
    enum: ["faculty", "student", "independent scholar", "staff", "other"],
  },
  affiliation: { type: String, min: 1, max: 255, required: true, trim: true },
  topic: { type: String, min: 1, max: 255, required: true, trim: true },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

function validateVisitor(data) {}

module.exports = { visitorSchema, Visitor, validateVisitor };
