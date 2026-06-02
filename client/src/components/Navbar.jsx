import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
  <span className="text-green-900">UNWIND</span>
  <span className="text-black">CABINS</span>
</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/cabins">Our Cabins</Link>

          <Link to="/inspiration">Get Inspired</Link>

          <Link to="/gift-stay">Gift a Stay</Link>

          <Link to="/about">About Us</Link>
        </ul>

        <div className="w-10 h-10 rounded-full border flex items-center justify-center">
          <Link to="/login">
          👤
          </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;