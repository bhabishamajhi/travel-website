import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const CabinDetails = () => {
  const { id } = useParams();

  const [cabin, setCabin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCabin = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/cabins/${id}`
        );

        setCabin(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCabin();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading cabin...
      </div>
    );
  }

  if (!cabin) {
    return (
      <div className="text-center py-20">
        Cabin not found.
      </div>
    );
  }

  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      <div className="h-[70vh] overflow-hidden">
        <img
          src={cabin.image}
          alt={cabin.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold mb-6 text-black">
              {cabin.title}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              📍 {cabin.location}
            </p>

            <p className="text-gray-700 leading-8">
              {cabin.description}
            </p>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Amenities
              </h2>

              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <p>✓ Free WiFi</p>
                <p>✓ Kitchen</p>
                <p>✓ Parking</p>
                <p>✓ Heating</p>
                <p>✓ Hot Water</p>
                <p>✓ Mountain View</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-10">
              <h3 className="text-4xl font-bold mb-4 text-black">
                ${cabin.price}
              </h3>

              <p className="text-gray-500 mb-8">
                per night
              </p>

              <Link
                to={`/reservations/${cabin._id}`}
                className="inline-block mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold"
              >
                Reserve Now
              </Link>

              <div className="mt-8 text-gray-600 space-y-3">
                <p>👥 4 Guests</p>
                <p>🛏 2 Bedrooms</p>
                <p>🚿 1 Bathroom</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CabinDetails;