// SupplyDetails.tsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../shared/Container/Container";

interface Supply {
  id: number;
  image: string;
  title: string;
  category: string;
  quantity: string;
  description: string;
}

const SupplyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [supply, setSupply] = useState<Supply | null>(null);

  useEffect(() => {
    fetch("../../public/suppliesData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundSupply = data.find(
          (item: Supply) => item.id === parseInt(id)
        );
        setSupply(foundSupply);
      });
  }, [id]);

  if (!supply) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="supply-details flex flex-col lg:flex-row gap-5 lg:gap-0 p-5 cursor-pointer rounded-md bg-white shadow-lg">
          <div className="img flex-[1]">
            <picture>
              <img src={supply.image} alt="Supply Image" />
            </picture>
          </div>
          <div className="details flex-[1] font-medium text-black space-y-5">
            <p>
              <span className="font-bold">Item Name </span> : {supply.title}
            </p>
            <p>
              <span className="font-bold"> Category</span> : {supply.category}
            </p>
            <p>
              <span className="font-bold">Quantity</span> : {supply.quantity}
            </p>
            <p>
              <span className="font-bold">Description</span> :{" "}
              {supply.description}
            </p>
            <div className="details-btn">
              <Link to={`supply-details/${id}`}>
                {" "}
                <button className="btn-primary-orange">Donate Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupplyDetails;
