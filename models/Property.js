import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: String,
  description: String,
  pricePerNight: Number,
  location: String,
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  unavailableDates: [Date]
});

export default mongoose.model("Property", PropertySchema);
