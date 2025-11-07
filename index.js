const express = require("express");
require("dotenv").config();
const contactRoutes = require("./routes/contactsRoutes");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use("/api/contacts", errorHandler, contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
