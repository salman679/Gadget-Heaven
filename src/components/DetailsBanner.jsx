import BannerHeader from "./BannerHeader";
import DetailsCard from "./DetailsCard";
import PropTypes from "prop-types";

export default function DetailsBanner({ gadget }) {
  return (
    <div className="bg-purple-600 min-h-screen relative mb-72">
      <BannerHeader
        title={"Product Details"}
        description={
          " Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <DetailsCard gadget={gadget} />
    </div>
  );
}

DetailsBanner.propTypes = {
  gadget: PropTypes.object,
};
