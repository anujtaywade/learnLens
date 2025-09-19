const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "15mb" }));

// DB connection
const connectDB = require("./config/db");
connectDB();

app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
