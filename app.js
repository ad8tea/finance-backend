const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const auth = require("./middleware/authMiddleware");
const recordRoutes = require("./routes/recordRoutes");
app.use("/records", recordRoutes);

app.get("/protected", auth, (req, res) => {
  res.json({ message: "You are authorized", user: req.user });
});

module.exports = app;