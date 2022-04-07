const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://serviceproviderapp:serviceproviderapp@cluster0.qtgdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

module.exports = mongoose;
