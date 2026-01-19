import express from "express";
import Booking from "../models/Booking.js";
import Property from "../models/Property.js";
import { authMiddleware } from "../middleware/auth.js";
const router = express.Router();
function getDatesInRange(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}


router.post("/", authMiddleware, async (req, res) => {
  try {
    const { propertyId, startDate, endDate, totalPrice } = req.body;

    // 1️⃣ Generar todas las fechas entre inicio y fin
    const reservedDates = getDatesInRange(startDate, endDate);

    // 2️⃣ Verificar si ya hay fechas ocupadas
    const property = await Property.findById(propertyId);

    const alreadyBooked = property.unavailableDates.some(date =>
      reservedDates.some(d =>
        new Date(d).toDateString() === new Date(date).toDateString()
      )
    );

    if (alreadyBooked) {
      return res.status(400).json({ message: "Fechas no disponibles" });
    }

    // 3️⃣ Crear booking (👉 AQUÍ ESTÁ LA CLAVE)
    const booking = new Booking({
      property: propertyId,
      user: req.user.id,   // ✅ AHORA SÍ GUARDA EL USUARIO
      startDate,
      endDate,
      totalPrice
    });

    await booking.save();

    // 4️⃣ Bloquear fechas en la propiedad
    await Property.findByIdAndUpdate(propertyId, {
      $push: { unavailableDates: { $each: reservedDates } }
    });

    res.json(booking);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("property", "title images location pricePerNight");

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener reservas" });
  }
});




export default router;
