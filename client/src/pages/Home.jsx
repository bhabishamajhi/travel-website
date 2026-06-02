import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import DiscoverCabins from "../components/DiscoverCabins";
import Inspiration from "../components/Inspiration";
import Experience from "../components/Experience";
import Testimonial from "../components/Testimonial";
import MoreCabins from "../components/MoreCabins";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <DiscoverCabins />
      <Inspiration />
      <Experience />
      <Testimonial />
      <MoreCabins />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;