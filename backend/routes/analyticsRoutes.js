const express = require("express");
const router = express.Router();
const supabase = require("../db/supabase");

// GET Analytics
router.get("/", async (req, res) => {
  try {
    const { data, error } =
      await supabase
        .from("inventory")
        .select("*");

    if (error) throw error;

    const totalProducts =
      data.length;

    const lowStock =
      data.filter(
        (item) =>
          Number(item.stock) <=
          Number(item.threshold)
      ).length;

    const healthyStock =
      data.filter(
        (item) =>
          Number(item.stock) >
          Number(item.threshold)
      ).length;

    const criticalItems =
      data.filter(
        (item) =>
          Number(item.stock) <
          Number(item.threshold) *
            0.5
      ).length;

    res.json({
      totalProducts,
      lowStock,
      healthyStock,
      criticalItems,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;