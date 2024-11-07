import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function ProductCards() {
  const gadgets = useLoaderData();
  const [gadget, setGadget] = useState(gadgets);
  const category = useParams();

  useEffect(() => {
    const filteredGadgets = gadgets.filter((gadget) =>
      category.category ? gadget.category === category.category : gadget
    );

    setGadget(filteredGadgets);
  }, [category, gadgets]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {gadget.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
  );
}
