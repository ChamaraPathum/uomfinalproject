const mongoose = require("mongoose");
const schema = mongoose.Schema;
const studentschema = new schema(
  {
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },

  cardHolderName: {
    type: String,
    required: true,
  },

  cardNumber: {
    type: String,
    required: true,
  },

  expiryDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },


},
{timestamps:true}
);

const student = mongoose.model("Student", studentschema);

module.exports = student;
