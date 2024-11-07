import { NavLink, Outlet } from "react-router-dom";
import BannerHeader from "../components/BannerHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

function DashboardLayout() {
  return (
    <>
      <div className="bg-neutral-100">
        <Toaster />
        <Header
          linkColor={"text-gray-600 hover:text-gray-700"}
          logoColor={"text-black"}
        />

        <div className="bg-purple-600">
          <BannerHeader
            title={"Dashboard"}
            description={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />

          <div className="flex items-center gap-2 justify-center pb-7">
            <NavLink
              to="/dashboard/carts"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-white rounded-full font-bold text-purple-600 border border-white px-16 py-2"
                    : "bg-purple-600 rounded-full font-medium text-white border border-white px-16 py-2"
                }`
              }
            >
              Cart
            </NavLink>

            <NavLink
              to={"/dashboard/wishlist"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-white rounded-full font-bold text-purple-600 border border-white px-16 py-2"
                    : "bg-purple-600 rounded-full font-medium text-white border border-white px-16 py-2"
                }`
              }
            >
              Wishlist
            </NavLink>
          </div>
        </div>

        <Outlet />

        <Footer />
      </div>
    </>
  );
}

export default DashboardLayout;