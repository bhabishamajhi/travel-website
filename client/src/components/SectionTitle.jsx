import { Link } from "react-router-dom";

const SectionTitle = ({
  title,
  subtitle,
  linkText,
  linkTo,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
      <div>
        <h2 className="text-xxl font-extrabold text-black">
          {title}
        </h2>

        <div className="w-40 h-1 bg-yellow-500 mb-4"></div>

        {subtitle && (
          <p className="text-black mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {linkText && (
        <Link
          to={linkTo}
          className="mt-4 md:mt-0 text-black underline font-medium hover:text-gray-600 transition"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;