const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let history = {};

app.get("/", (req, res) => {
  res.send("Costify backend running");
});

app.post("/track", (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.json({ message: "URL missing", price: null });
    }

    const price = Math.floor(Math.random() * 5000) + 500;

    if (!history[url]) history[url] = [];
    history[url].push({
      price,
      date: new Date()
    });

    res.json({
      message: "Price tracked successfully (demo)",
      price
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/history", (req, res) => {
  const url = req.query.url;
  res.json(history[url] || []);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
