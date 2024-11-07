import { Link } from "react-router-dom";
import bgBanner from "../assets/banner.jpg";

export default function Banner() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-9">
        <h1 className="font-bold text-5xl text-center text-white max-w-4xl leading-[65px]">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="mt-5 text-white max-w-3xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link
          to={"/dashboard/carts"}
          className="mt-6 px-7 py-3 bg-white text-purple-600 rounded-full font-bold text-lg"
        >
          Shop Now
        </Link>
      </div>

      <div className="mx-52 mt-9 border-2 p-5 bg-white bg-opacity-30 h-[450px] border-white rounded-3xl">
        <img
          className="bg-banner rounded-lg w-full h-full object-cover"
          src={bgBanner}
          alt="banner"
        />
      </div>
    </>
  );
}
