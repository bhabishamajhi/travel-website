import SectionTitle from "./SectionTitle.jsx";
const Testimonial = () => {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <SectionTitle
          title="Get ready to unwind"
          subtitle="A cabin getaway can be a wonderful way to relax and reconnect with nature. Many cabin rentals are located in beautiful, secluded areas, surrounded by trees and other natural beauty. Linktext"
          linkText="Learn more"
        />
        <div>
          <iframe
  src="https://www.youtube.com/embed/m2vLdk5KbL8?autoplay=1&mute=1&loop=1&playlist=m2vLdk5KbL8"
  title="Cabin Video"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="w-full h-[500px] rounded-2xl"
/>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;