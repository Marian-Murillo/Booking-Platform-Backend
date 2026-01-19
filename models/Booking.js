import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startDate: Date,
  endDate: Date,
  totalPrice: Number
});

export default mongoose.model("Booking", BookingSchema);
