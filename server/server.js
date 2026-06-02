
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();


console.log("Stripe Key from server:", process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.json());

const cabinRoutes = require("./routes/cabinRoutes");
app.use("/api/cabins", cabinRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);

const reservationRoutes = require("./routes/reservationRoutes");
app.use("/api/reservations", reservationRoutes);

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.send("Travel Website API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});