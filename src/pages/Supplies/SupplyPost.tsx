import { useEffect, useState } from "react";
import SuppliCard from "./SuppliCard";
import { Navigate } from "react-router-dom";
import Container from "../../shared/Container/Container";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { IoMdArrowForward } from "react-icons/io";

interface Supply {
  id: number;
  image: string;
  title: string;
  category: string;
  quantity: string;
}

const SupplyPost: React.FC = () => {
  const [supplies, setSupplies] = useState<Supply[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    fetch("suppliesData.json")
      .then((res) => res.json())
      .then((data: Supply[]) => setSupplies(data));
  }, []);

  const handleViewAll = () => {
    setShowAll(true);
  };
  return (
    <Container>
      <SectionTitle heading="Our Top Supplies" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {showAll
          ? supplies.map((supply) => (
              <SuppliCard key={supply.id} supply={supply} />
            ))
          : supplies
              .slice(0, 6)
              .map((supply) => <SuppliCard key={supply.id} supply={supply} />)}
      </div>
      <div className="flex justify-end py-5">
        {!showAll && (
          <button onClick={handleViewAll} className="btn-ghost">
            Show All{" "}
            <span>
              <IoMdArrowForward className="text-xl ml-1" />
            </span>
          </button>
        )}
        {showAll && <Navigate to="/supplies" />}
      </div>
    </Container>
  );
};

export default SupplyPost;
