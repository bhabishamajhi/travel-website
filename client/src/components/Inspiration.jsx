import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";
import experiences from "../data/experiences";

const Inspiration = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Inspiration for your next getaway"
          subtitle="We've curated some amazing experiences to help you find you next getaway."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;