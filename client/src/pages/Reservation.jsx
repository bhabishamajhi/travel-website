import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Reservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:5000/api/reservations",
      {
        ...formData,
        cabinId: id,
      }
    );

    alert("Reservation Successful 🎉");

    navigate("/");
  } catch (error) {
    console.log(error);

    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen bg-[#f8f5f0] py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-3">
          Reserve Your Cabin
        </h1>

        <p className="text-gray-500 mb-8">
          Cabin ID: {id}
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
            required
          />

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2">
                Check In
              </label>

              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full border p-4 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2">
                Check Out
              </label>

              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full border p-4 rounded-lg"
                required
              />
            </div>
          </div>

          <input
            type="number"
            name="guests"
            placeholder="Guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full border p-4 rounded-lg"
            min="1"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;