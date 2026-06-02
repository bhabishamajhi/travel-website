const express = require("express");
const router = express.Router();

const {
  getCabins,
  getCabinById,
  createCabin,
  updateCabin,
  deleteCabin,
} = require("../controllers/cabinController");

router.get("/", getCabins);
router.get("/:id", getCabinById);
router.post("/", createCabin);
router.put("/:id", updateCabin);
router.delete("/:id", deleteCabin);

module.exports = router;