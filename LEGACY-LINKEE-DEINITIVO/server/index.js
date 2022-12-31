const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const path = require("path");
require("dotenv").config();
require("./config/db");

// const hbs = require('hbs');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const auth = require('./middleware/auth');

const cors = require("cors");

const userRouter = require("./routes/users.route");
const sectionRouter = require("./routes/sections.route");
const linkRouter = require("./routes/links.route");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Linkee API");
});

app.use("/api/users", userRouter);
app.use("/api/sections", sectionRouter);
app.use("/api/links", linkRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
