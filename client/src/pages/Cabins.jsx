import { useEffect, useState } from "react";
import axios from "axios";
import CabinCard from "../components/CabinCard";

const Cabins = () => {
  const [cabins, setCabins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/cabins"
        );

        setCabins(
          Array.isArray(res.data)
            ? res.data
            : res.data.cabins || []
        );
      } catch (err) {
        console.error("Error fetching cabins:", err);
        setError("Failed to load cabins.");
      } finally {
        setLoading(false);
      }
    };

    fetchCabins();
  }, []);

  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      <section className="text-white py-24" style={{
  backgroundImage:
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uxIVZRLb5KGK3YzTahlho_dBvDG1-l1zLg&s')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}>
  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent h-100"></div>
  
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-white mb-4">
            Nature • Comfort • Luxury
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Cabins
          </h1>
           <p className=" tracking-[1px] text-white mb-4">
            Experience the ultimate blend of nature, comfort, and luxury in our exquisite cabins. Nestled in breathtaking locations, each cabin offers a unique escape where you can unwind and reconnect with the beauty of the outdoors. Whether you're seeking a romantic getaway, a family retreat, or a solo adventure, our cabins provide the perfect sanctuary for your next vacation.
          </p>


        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black">
            Discover Your Perfect Stay
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mt-4 mb-6"></div>

          <p className="text-gray-600 max-w-3xl">
            Browse our collection of premium cabins surrounded
            by forests, lakes, mountains and breathtaking
            countryside landscapes.
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-500 py-10">
            Loading cabins...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 py-10">
            {error}
          </p>
        )}

        {!loading && !error && cabins.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No cabins found.
          </p>
        )}

        {!loading && !error && cabins.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">
                {cabins.length} cabins available
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cabins.map((cabin) => (
                <CabinCard
                  key={cabin._id || cabin.id}
                  cabin={cabin}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Cabins;