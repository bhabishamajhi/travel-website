const Experience = () => {
  return (
    <section
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabFy-OEsnas9VnHO7nwYd6jedu8fnME7_sg&s=80')",
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto w-full px-6">
      <div className="max-w-xl ml-auto text-white">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          A truly wonderful
          <br />
          experience
        </h2>

        <p className="text-lg md:text-xl text-gray-200 leading-9 mb-8">
          Brilliant for anyone looking to get away from the hustle and
          bustle of city life or detox from their tech for a few days.
          I could have stayed another week!
        </p>

        <p className="text-lg md:text-xl text-gray-200 leading-9 mb-10">
          They really have thought about everything here down to the
          finest details.
        </p>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <span className="bg-green-500 text-white text-xs px-2 py-1">★</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1">★</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1">★</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1">★</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1">★</span>
          </div>

          <span className="text-white text-lg">01 Jan 2023</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Experience;