import { useEffect, useState } from "react";
import axios from "axios";

const Reservations = () => {
  const [reservations, setReservations] =
    useState([]);

  const fetchReservations = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/reservations`
    );

    setReservations(res.data);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/reservations/${id}`
      );

      alert("Reservation deleted");

      fetchReservations();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        Reservations
      </h1>

      <div className="space-y-4">
        {reservations.map((reservation) => (
          <div
            key={reservation._id}
            className="border p-5 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold text-xl">
                {reservation.fullName}
              </h2>

              <p>{reservation.email}</p>

              <p>
                Guests: {reservation.guests}
              </p>
            </div>

            <button
              onClick={() =>
                handleDelete(reservation._id)
              }
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;