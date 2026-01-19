router.post("/", authMiddleware, async (req, res) => {
  const { propertyId, startDate, endDate } = req.body;

  const reservation = new Reservation({
    user: req.user.id,
    property: propertyId,
    startDate,
    endDate,
  });

  await reservation.save();
  res.json(reservation);
});
