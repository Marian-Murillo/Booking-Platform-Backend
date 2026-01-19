import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import bookingRoutes from "./routes/BookingRoutes.js";
// general config
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
// routes 
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/bookings", bookingRoutes);

// mongo db connection 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conected"))
  .catch(err => console.log(err));

// default route /
app.get("/", (req, res) => {
  res.send("Backend runing 🚀");
});
// port for backend 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));


