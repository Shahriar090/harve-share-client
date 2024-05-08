import { useEffect, useState } from "react";
import Container from "../shared/Container/Container";
import { Link } from "react-router-dom";

interface Supply {
  id: number;
  image: string;
  title: string;
  category: string;
  quantity: string;
}

const AllSuplies = () => {
  const [supplies, setSupplies] = useState<Supply[]>([]);
  useEffect(() => {
    fetch("suppliesData.json")
      .then((res) => res.json())
      .then((data) => setSupplies(data));
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {supplies.map((supply) => (
          <div
            key={supply.id}
            className="supply-container w-full shadow-md hover:shadow-orange-600 transition-all duration-300 max-w-lg p-5 cursor-pointer rounded-md bg-white"
          >
            <picture>
              <img src={supply.image} alt="Supply Image" />
            </picture>
            <div className="details font-medium text-black text-lg py-5">
              <p className="">{supply.title}</p>
              <p className="">
                Category : <span>{supply.category}</span>
              </p>
              <p>
                Quantity : <span>{supply.quantity}</span>
              </p>
            </div>
            <div className="details-btn flex justify-end">
              <Link to={`/supply-details/${supply.id}`}>
                {" "}
                <button className="btn-primary-orange">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllSuplies;
