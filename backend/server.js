require("dotenv").config();

console.log(
  process.env.SUPABASE_KEY?.slice(0, 20)
);

const express = require("express");
const cors = require("cors");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventoryRoutes);

app.get("/", (req, res) => {
  res.send("Inventory AI Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );

  console.log(
    "SUPABASE URL:",
    process.env.SUPABASE_URL
  );
});