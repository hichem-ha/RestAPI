const express = require("express");
const connectDB = require("./config/connectDB");
require('dotenv').config({ path: './config/.env' })
const userRoutes = require("./routes/user");
const app = express();
const port = process.env.port;

app.use(express.json());
app.use("/api/users", userRoutes);
connectDB();

app.listen(port, console.log(`app is running  on port ${port}`));
