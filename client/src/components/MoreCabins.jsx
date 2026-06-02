import { Link } from "react-router-dom";
const MoreCabins = () => {
  return (
   
  <div className="bg-[#e8edf2] p-8">
  <section
    className="relative h-screen bg-cover bg-center rounded-2xl"
    style={{
      backgroundImage:
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiaEi56oRC7mwiIc5JHHQP85HOx-DjqneoQ&s=80')",
    }}
  >
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>

  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto w-full px-6">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Nourish the mind, body, and  spirit
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-8">
          Many people find that combination of being in a peaceful natural setting and engaging in activities that nourish the mind, body, and spirit leave them feeling rejuvented and refreshed. 
        </p>
        <br />
        <Link
          to={`/cabins`}
          className="inline-block mt-4 bg-yellow-600 text-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Explore Cabins
        </Link>
      </div>
    </div>
  </div>
  </section>
</div>
  
  );
};

export default MoreCabins;