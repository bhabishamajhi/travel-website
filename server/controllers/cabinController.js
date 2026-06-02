const Cabin = require("../models/Cabin");

const getCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find();
    res.json(cabins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCabinById = async (req, res) => {
  try {
    const cabin = await Cabin.findById(req.params.id);

    if (!cabin) {
      return res.status(404).json({ message: "Cabin not found" });
    }

    res.json(cabin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCabin = async (req, res) => {
  try {
    const cabin = await Cabin.create(req.body);
    res.status(201).json(cabin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!cabin) {
      return res.status(404).json({ message: "Cabin not found" });
    }

    res.json(cabin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findByIdAndDelete(req.params.id);

    if (!cabin) {
      return res.status(404).json({ message: "Cabin not found" });
    }

    res.json({ message: "Cabin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCabins,
  getCabinById,
  createCabin,
  updateCabin,
  deleteCabin,
};