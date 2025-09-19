import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "15mb" })); // allow large base64 frames

connectDB();

app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
