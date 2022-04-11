const mongoose = require("mongoose");

const bookTechnicianSchema = new mongoose.Schema({
  detail: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  uid: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("booktechnician", bookTechnicianSchema);
