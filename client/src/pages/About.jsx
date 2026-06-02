import { Link } from "react-router-dom";

const values = [
  {
    id: 1,
    title: "Nature First",
    description:
      "Our cabins are thoughtfully located to help guests reconnect with nature while respecting and preserving the environment.",
  },
  {
    id: 2,
    title: "Comfort & Luxury",
    description:
      "Every cabin is designed with modern comforts, premium amenities, and cozy interiors for a relaxing experience.",
  },
  {
    id: 3,
    title: "Memorable Experiences",
    description:
      "We believe travel should create lasting memories, meaningful connections, and unforgettable adventures.",
  },
];

const stats = [
  {
    id: 1,
    value: "50+",
    label: "Premium Cabins",
  },
  {
    id: 2,
    value: "10K+",
    label: "Happy Guests",
  },
  {
    id: 3,
    value: "100%",
    label: "Nature Inspired",
  },
  {
    id: 4,
    value: "4.9★",
    label: "Guest Rating",
  },
];

const About = () => {
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
            Nature • Comfort • Adventure
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About Us
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            We create unforgettable countryside escapes where comfort,
            luxury, and nature come together to provide exceptional
            experiences for every traveler.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black">
            Our Story
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mt-4 mb-6"></div>

          <p className="text-gray-600 max-w-4xl leading-relaxed">
            What started as a simple dream of creating peaceful retreats
            in beautiful natural surroundings has grown into a collection
            of carefully designed cabins that welcome travelers from all
            over the world.
            <br />
            <br />
            Our mission is to provide a place where guests can escape the
            stress of everyday life, reconnect with nature, and enjoy
            quality time with family, friends, or themselves. Every cabin
            is thoughtfully crafted to combine modern luxury with the
            beauty of the outdoors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200"
            alt="Cabin in nature"
            className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
          />

          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Why Choose Us?
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              We believe every getaway should be more than just a stay.
              It should be an experience that inspires relaxation,
              adventure, and meaningful memories.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✓ Handpicked scenic locations</li>
              <li>✓ Modern amenities and luxury interiors</li>
              <li>✓ Family-friendly and pet-friendly options</li>
              <li>✓ Easy booking and flexible stays</li>
              <li>✓ Exceptional guest support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-4">
            Our Values
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-[#f8f5f0] rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <h3 className="text-4xl font-bold text-black mb-2">
                  {stat.value}
                </h3>

                <p className="text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Next Escape?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Explore our collection of beautiful cabins and discover the
            perfect destination for your next adventure.
          </p>

          <Link
          to={`/cabins`}
          className="inline-block mt-4 bg-yellow-600 text-black px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Explore Cabins
        </Link>
        </div>
      </section>
    </div>
  );
};

export default About;