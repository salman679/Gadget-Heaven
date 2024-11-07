import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Static from "../pages/Static";
import ProductCards from "../components/ProductCards";
import Details from "../pages/Details";
import DashboardLayout from "../layouts/DashboardLayout";
import Wishlist from "../components/Wishlist";
import DashboardCart from "../pages/DashboardCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards />,
            loader: () => fetch("/gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards />,
            loader: () => fetch("/gadgets.json"),
          },
        ],
      },
      {
        path: "/:productId",
        element: <Details />,
        loader: () => fetch(`/gadgets.json`),
      },
      {
        path: "/statistics",
        element: <Static />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/carts",
        element: <DashboardCart />,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
