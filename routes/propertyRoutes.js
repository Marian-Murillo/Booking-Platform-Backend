import express from "express";
import Property from "../models/Property.js";
import { authMiddleware, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// CREAR PROPIEDAD → SOLO ADMIN
router.post("/", authMiddleware, adminOnly, async (req, res) => {
  const property = new Property({
    ...req.body,
    owner: req.user.id
  });

  await property.save();
  res.json(property);
});

// OBTENER TODAS (pública)
router.get("/", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;
