import PropTypes from "prop-types";

export default function BannerHeader({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-screen-xl mx-auto pt-7">
      <h1 className="font-bold text-3xl text-center text-white">{title}</h1>
      <p className="mt-3 text-white max-w-3xl mb-7">{description}</p>
    </div>
  );
}

BannerHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
