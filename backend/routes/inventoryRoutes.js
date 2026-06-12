const express = require("express");
const router = express.Router();
const supabase = require("../db/supabase");

// GET inventory
router.get("/", async (req, res) => {
  try {
    const { data, error } =
      await supabase
        .from("inventory")
        .select("*");

    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ADD product
router.post("/", async (req, res) => {
  try {
    const {
      name,
      stock,
      threshold,
      vendor,
    } = req.body;

    const { data, error } =
      await supabase
        .from("inventory")
        .insert([
          {
            name,
            stock,
            threshold,
            vendor,
          },
        ])
        .select();

    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// DELETE product
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { error } =
      await supabase
        .from("inventory")
        .delete()
        .eq("id", id);

    if (error) throw error;

    res.json({
      message:
        "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;