import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function MainLayouts() {
  const location = useLocation();

  const cssStyleForHome = location.pathname === "/";

  return (
    <>
      <Helmet>
        <title>Home | GadgetHeaven</title>
      </Helmet>
      <Toaster />
      <div className={`${cssStyleForHome ? "p-7" : ""}  bg-neutral-100`}>
        <div
          className={`${
            cssStyleForHome
              ? "max-w-screen-2xl rounded-3xl h-[695px] bg-purple-600 mx-auto block "
              : ""
          }`}
        >
          <Header
            logoColor={`${cssStyleForHome ? "text-white" : "text-black"}`}
            linkColor={`${
              cssStyleForHome
                ? "text-white"
                : "text-gray-600 hover:text-gray-700"
            }`}
          />
          {cssStyleForHome && <Banner />}
        </div>

        {/* main area */}
        <div className="min-h-[calc(100vh - 800px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
