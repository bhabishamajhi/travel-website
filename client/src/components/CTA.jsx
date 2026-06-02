import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYbxY5VQMMkxrSDEJbzIkQDyHp8DMWn3S1Q&s')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>

  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto w-full px-6">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Escape from endless <br /> Zooms calls
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-8">
          Discover the wonders of speaking time offline and away from the office with our 3 day weekend gateaway cabin retreats.
        </p>
        <br />
        <Link
          to={`/cabins`}
          className="inline-block mt-4 bg-yellow-600 text-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Find the perfect getaway
        </Link>
      </div>
    </div>
  </div>
</section>
  );
};

export default CTA;