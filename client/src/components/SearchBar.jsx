const SearchBar = () => {
  return (
    <div className="max-w-6xl mx-auto -mt-16 relative z-20 bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
      <input className="border border-white bg-gray-300 p-3 rounded-lg text-black" placeholder="I want to go"/>
      <input className="border border-white bg-gray-300 p-3 rounded-lg text-black" placeholder="Check in" />
      <input className="border border-white bg-gray-300 p-3 rounded-lg text-black" placeholder="Check out" />
      <input className="border border-white bg-gray-300 p-3 rounded-lg text-black" placeholder="Travellers" />
      <button className="bg-green-800 text-white rounded-lg px-6 py-3">
        Find available cabins
      </button>
    </div>
  );
};

export default SearchBar;