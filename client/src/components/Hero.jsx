const Hero = () => {
  return (
    <section
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images7.alphacoders.com/553/thumb-1920-553107.jpg')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>

  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto w-full px-6">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Leave the office behind
          <br />
          and <span className="text-yellow-400">unwind</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-8">
          Welcome to our cozy cabin nestled in the heart of the mountains!
          Our cabin is the perfect getaway for those seeking peace and
          relaxation in a natural setting.
        </p>

<div className="flex items-center gap-6 mt-10">
  <div className="flex -space-x-3">
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt="Customer 1"
      className="w-12 h-12 rounded-full border-2 border-white object-cover"
    />
    <img
      src="https://randomuser.me/api/portraits/women/44.jpg"
      alt="Customer 2"
      className="w-12 h-12 rounded-full border-2 border-white object-cover"
    />
    <img
      src="https://randomuser.me/api/portraits/men/65.jpg"
      alt="Customer 3"
      className="w-12 h-12 rounded-full border-2 border-white object-cover"
    />
    <img
      src="https://randomuser.me/api/portraits/women/68.jpg"
      alt="Customer 4"
      className="w-12 h-12 rounded-full border-2 border-white object-cover"
    />
    <img
      src="https://randomuser.me/api/portraits/men/75.jpg"
      alt="Customer 5"
      className="w-12 h-12 rounded-full border-2 border-white object-cover"
    />
  </div>

  <div className="flex items-center gap-3">
    <span className="text-green-400 text-xl">★</span>
    <span className="text-white font-medium">Trustpilot</span>

    <div className="flex gap-1">
      <span className="bg-green-500 text-white text-xs px-1.5 py-0.5">★</span>
      <span className="bg-green-500 text-white text-xs px-1.5 py-0.5">★</span>
      <span className="bg-green-500 text-white text-xs px-1.5 py-0.5">★</span>
      <span className="bg-green-500 text-white text-xs px-1.5 py-0.5">★</span>
      <span className="bg-green-500 text-white text-xs px-1.5 py-0.5">★</span>
    </div>

    <span className="text-white font-medium">4.5 / 5</span>
  </div>
</div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;