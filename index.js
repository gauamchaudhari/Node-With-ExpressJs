const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbConnection");
const contactRoutes = require("./routes/contactsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const errorHandler = require("./middleware/errorHandler");

connectDB();
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", usersRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
