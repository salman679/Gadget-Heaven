import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

export default function Home() {
  const categories = useLoaderData();
  return (
    <>
      <main className="max-w-screen-xl mx-auto mt-56 px-28 mb-24">
        <h4 className="font-bold text-4xl text-center">
          Explore Cutting-Edge Gadgets
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-12">
          <Categories categories={categories} />

          <div className="md:col-span-4">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
