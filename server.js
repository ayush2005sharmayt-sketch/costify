app.post("/track", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.json({ message: "URL missing", price: null });
  }

  // DEMO PRICE LOGIC (working)
  const fakePrice = Math.floor(Math.random() * 500) + 100;

  res.json({
    message: "Price fetched successfully",
    price: fakePrice
  });
});
