const mongoose = require("mongoose");
const contactsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
});

module.exports = mongoose.model("Contact", contactsSchema);
