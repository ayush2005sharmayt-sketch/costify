const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple health check
app.get("/", (req, res) => {
  res.json({ status: "Costify backend is running" });
});

// Dummy price fetch endpoint (learning purpose)
app.post("/track", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "Product URL is required" });
  }

  // ⚠️ Learning project: real scraping nahi kar rahe
  // Static demo response
  const fakePrice = Math.floor(Math.random() * 5000) + 1000;

  res.json({
    productUrl: url,
    currentPrice: fakePrice,
    currency: "INR",
    fetchedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Costify backend running on port ${PORT}`);
});
