const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    amount: Number,
    message: String,
    paymentStatus: {
      type: String,
      default: "pending",
    },
    stripeSessionId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);