import { useGetSuppliesQuery } from "../../redux/api/api";
import SuppliCard from "./SuppliCard";
import { useNavigate } from "react-router-dom";
import Container from "../../shared/Container/Container";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { IoMdArrowForward } from "react-icons/io";

const SupplyPost: React.FC = () => {
  const navigate = useNavigate();
  const { data: supplies, isError, isLoading } = useGetSuppliesQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !supplies) {
    return <div>Error fetching supplies data.</div>;
  }

  const suppliesToShow = supplies.slice(0, 6);

  const handleShowAll = () => {
    navigate("/supplies");
  };

  return (
    <Container>
      <SectionTitle heading="Our Top Supplies" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {suppliesToShow?.map((supply) => (
          <SuppliCard key={supply._id} supply={supply} />
        ))}
      </div>
      <div className="flex justify-end py-5">
        {supplies.length > 6 && (
          <button onClick={handleShowAll} className="btn-ghost">
            Show All{" "}
            <span>
              <IoMdArrowForward className="text-xl ml-1" />
            </span>
          </button>
        )}
      </div>
    </Container>
  );
};

export default SupplyPost;
