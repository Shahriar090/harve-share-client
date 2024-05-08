import { useEffect, useState } from "react";
import SuppliCard from "./SuppliCard";
import { Navigate } from "react-router-dom";
import Container from "../../shared/Container/Container";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const SupplyPost = () => {
  const [supplies, setSupplies] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("suppliesData.json")
      .then((res) => res.json())
      .then((data) => setSupplies(data));
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
      <div className="flex justify-center py-5">
        {!showAll && (
          <button onClick={handleViewAll} className="btn-primary">
            Show All
          </button>
        )}
        {showAll && <Navigate to="/all-supplies" />}
      </div>
    </Container>
  );
};

export default SupplyPost;
