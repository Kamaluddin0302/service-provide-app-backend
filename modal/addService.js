const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    require: true,
  },
  serviceDetail: {
    type: String,
    require: true,
  },
  serviceImage: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("services", serviceSchema);
