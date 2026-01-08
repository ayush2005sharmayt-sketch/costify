const express = require("express");
const app = express();

app.use(express.json());

app.post("/track", (req, res) => {
  res.json({
    message: "Price fetched successfully",
    price: 299
  });
});

app.get("/", (req, res) => {
  res.send("Costify backend running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
