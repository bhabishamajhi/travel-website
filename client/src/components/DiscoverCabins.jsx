import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "./SectionTitle";
import CabinCard from "./CabinCard";

const DiscoverCabins = () => {
  const [cabins, setCabins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/cabins`
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
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Discover our idyllic countryside cabins"
          subtitle="Fully equipped kitchens and bathrooms, heated floors, and beautiful natural surroundings."
          linkText="View all cabins"
          linkTo="/cabins"
        />

        {loading && (
          <p className="text-center text-gray-500 mt-10">
            Loading cabins...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-10">
            {error}
          </p>
        )}

        {!loading && !error && cabins.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No cabins found.
          </p>
        )}

        {!loading && !error && cabins.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {cabins.slice(0, 3).map((cabin) => (
              <CabinCard
                key={cabin._id || cabin.id}
                cabin={cabin}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DiscoverCabins;