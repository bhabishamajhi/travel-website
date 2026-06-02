import ExperienceCard from "../components/ExperienceCard";
import experiences from "../data/experiences";

const Inspiration = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      <section
        className="relative text-white py-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-gray-200 mb-4">
            Adventure • Nature • Experiences
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Inspiration
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Discover unforgettable destinations, outdoor adventures,
            peaceful retreats, and unique travel experiences designed
            to inspire your next escape into nature.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black">
            Inspiration For Your Next Getaway
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mt-4 mb-6"></div>

          <p className="text-gray-600 max-w-3xl">
            From mountain adventures to lakeside retreats and cozy
            countryside escapes, explore our carefully curated travel
            experiences and find your perfect getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Inspiration;