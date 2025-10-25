const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
