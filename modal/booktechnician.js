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
  serviceName: {
    type: String,
    require: true,
  },
  serviceImage: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  cash_on_delavery: {
    type: String,
    require: true,
  },

  reachtime: {
    type: String,
    require: true,
  },
  technicianLocatio: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("booktechnician", bookTechnicianSchema);
