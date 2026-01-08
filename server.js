app.post("/track", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.json({
      message: "URL missing",
      price: null
    });
  }

  // DEMO price (random)
  const price = Math.floor(Math.random() * 5000) + 500;

  res.json({
    message: "Price tracked successfully (demo)",
    price
  });
});
