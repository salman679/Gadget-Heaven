import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "../components/DetailsBanner";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Details() {
  const [gadget, setGadget] = useState();
  const gadgets = useLoaderData();

  const params = useParams();

  useEffect(() => {
    const gadgetItem = gadgets.find(
      (gadget) => gadget.product_id === params.productId
    );

    setGadget(gadgetItem);
  }, [gadgets, params]);

  return (
    <>
      <Header />
      <DetailsBanner gadget={gadget} />
    </>
  );
}
