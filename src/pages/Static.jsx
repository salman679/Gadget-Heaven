import { useLoaderData } from "react-router-dom";
import BannerHeader from "../components/BannerHeader";
import Chart from "../components/Chart";

export default function Static() {
  const data = useLoaderData();

  return (
    <>
      <div className="bg-purple-600">
        <BannerHeader
          title={"Statistics"}
          description={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-28 py-6">
        <h4 className="font-bold text-lg">WishList</h4>

        <div
          className="bg-white rounded-2xl p-7 mt-6 mb-24"
          style={{ height: "450px" }}
        >
          <Chart data={data} />
        </div>
      </div>
    </>
  );
}
