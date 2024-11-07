import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayouts() {
  return (
    <>
      <div className=" bg-neutral-100">
        <Toaster />
        {/* main area */}
        <div className="min-h-[calc(100vh - 800px)]">
          <Outlet />
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}
