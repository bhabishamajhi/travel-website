const ExperienceCard = ({ experience }) => {
  const { image, category, title, description } = experience;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
          {category}
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-7 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;