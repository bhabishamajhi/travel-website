import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#071214] text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div>
            <h3 className="text-lg font-semibold text-[#ccefdc] mb-6">
              About us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Our story</a></li>
              <li><a href="#">Why us</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ccefdc] mb-6">
              Our cabins
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#">North of London</a></li>
              <li><a href="#">Golden Hideaway</a></li>
              <li><a href="#">Oak Treehouse</a></li>
              <li><a href="#">Acacia Retreat</a></li>
              <li><a href="#">Blue Lagoon</a></li>
            </ul>

            <ul className="space-y-3 text-gray-400 mt-8">
              <li className="font-medium text-white">South of London</li>
              <li><a href="#">Lavender Retreat</a></li>
              <li><a href="#">Butterfly Treehouse</a></li>
              <li><a href="#">Mahogany Hideaway</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ccefdc] mb-6">
              Get inspired
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Explore nature</a></li>
              <li><a href="#">Hiking trails</a></li>
              <li><a href="#">Swimming</a></li>
              <li><a href="#">Fishing</a></li>
              <li><a href="#">Boating</a></li>
              <li><a href="#">Cycling</a></li>
            </ul>

            <ul className="space-y-3 text-gray-400 mt-8">
              <li className="font-medium text-white">Rest, relax and re-set</li>
              <li><a href="#">Spa treatments</a></li>
              <li><a href="#">Hot tubs</a></li>
              <li><a href="#">Nature Trails</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-transparent mb-6">
              Placeholder
            </h3>
            <ul className="space-y-3 text-gray-400 mt-12">
              <li><a href="#">Great food and drink</a></li>
              <li><a href="#">Pubs</a></li>
              <li><a href="#">Restaurants</a></li>
              <li><a href="#">Food markets</a></li>
              <li><a href="#">Picnics</a></li>
            </ul>

            <ul className="space-y-3 text-gray-400 mt-8">
              <li className="font-medium text-white">For you and yours</li>
              <li><a href="#">Solo or a couple</a></li>
              <li><a href="#">Pet friendly</a></li>
              <li><a href="#">Accessible cabins</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ccefdc] mb-6">
              Support
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Complaints Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-[#ccefdc] mb-4">
              Sign up to our Newsletter
            </h3>
            <p className="text-gray-400 leading-8 max-w-xl">
              For a weekly curated collection of 3 things you can watch, read or
              listen to switch off from the busy everyday.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="james@thegiantpeach.com"
              className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-800 outline-none"
            />
            <Link to="/contact" className="bg-[#e8b257] hover:bg-[#dca647] text-black font-semibold px-8 py-4 rounded-lg transition">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-4xl font-bold tracking-tight">
            UNWIND
            <span className="text-[#ccefdc]">CABINS</span>
          </h2>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} UnwindCabins
          </p>

          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#">in</a>
            <a href="#">𝕏</a>
            <a href="#">f</a>
            <a href="#">◎</a>
            <a href="#">▶</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;