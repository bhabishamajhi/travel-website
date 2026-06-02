import { Link }from "react-router-dom";

const giftBenefits = [
  {
    id: 1,
    title: "Perfect for Any Occasion",
    description:
      "Celebrate birthdays, anniversaries, weddings, holidays, or simply surprise someone special with a memorable getaway.",
  },
  {
    id: 2,
    title: "Flexible Experience",
    description:
      "Recipients can choose the cabin and dates that best fit their schedule and travel preferences.",
  },
  {
    id: 3,
    title: "Beautiful Destinations",
    description:
      "Give the gift of nature, comfort, and relaxation in stunning countryside locations.",
  },
  {
    id: 4,
    title: "Instant Delivery",
    description:
      "Gift cards can be delivered digitally, making them perfect even for last-minute presents.",
  },
  {
    id: 5,
    title: "Luxury Accommodation",
    description:
      "Our cabins feature premium amenities, cozy interiors, and unforgettable surroundings.",
  },
  {
    id: 6,
    title: "Memories That Last",
    description:
      "Create experiences and memories that will be cherished long after the trip ends.",
  },
];

const GiftStay = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      <section
        className="relative text-white py-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-gray-200 mb-4">
            Gift • Relaxation • Memories
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Gift a Stay
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Share the gift of relaxation, adventure, and unforgettable
            experiences. Treat your loved ones to a countryside escape
            they'll remember forever.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black">
            Give the Perfect Getaway
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mt-4 mb-6"></div>

          <p className="text-gray-600 max-w-3xl">
            Looking for a meaningful gift? Our cabin stay gift cards
            allow friends and family to escape into nature, relax in
            luxury accommodations, and create unforgettable memories.
            It's the perfect present for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-8"
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Surprise Someone?
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Purchase a gift card today and give someone the opportunity
            to enjoy a relaxing escape surrounded by nature and comfort.
          </p>
          <Link
  to="/buy-gift-card"
  className="inline-block mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold"
>
  Buy Gift Card
</Link>

        </div>
      </section>
    </div>
  );
};

export default GiftStay;