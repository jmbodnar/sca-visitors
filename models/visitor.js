const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const visitorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    minlength: 1,
    maxlength: 125,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    minlength: 1,
    maxlength: 125,
    required: true,
    trim: true,
  },
  preferredname: { type: String, minlength: 1, maxlength: 125, trim: true },
  address: {
    type: String,
    minlength: 1,
    maxlength: 255,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    minlength: 1,
    maxlength: 125,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    minlength: 1,
    maxlength: 125,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    minlength: 1,
    maxlength: 125,
    required: true,
    trim: true,
    enum: ["faculty", "student", "independent scholar", "staff", "other"],
  },
  affiliation: { type: String, min: 1, max: 255, required: true, trim: true },
  topic: { type: String, min: 1, max: 255, required: true, trim: true },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

function validateVisitor(data) {
  const schema = Joi.object({
    firstname: Joi.string().min(1).max(125).required().trim(),
    lastname: Joi.string().min(1).max(125).required().trim(),
    preferredname: Joi.string().trim(),
    address: Joi.string().min(5).max(125).trim(),
    phone: Joi.string().min(5).max(50).required().trim(),
    email: Joi.string().required().trim(),
    type: Joi.string().min(5).max(255).required().trim(),
    affiliation: Joi.string().min(1).max(255).required().trim(),
    topic: Joi.string().min(1).max(255).required().trim(),
    address: Joi.string().min(15).max(255).required().trim(),
  });

  return schema.validate(data);
}

module.exports = { visitorSchema, Visitor, validateVisitor };
