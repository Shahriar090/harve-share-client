import Container from "../shared/Container/Container";
import { Link } from "react-router-dom";
import { useGetSuppliesQuery } from "../redux/api/api";

const AllSuplies = () => {
  // after implementing RTK query
  const { data: supplies, isLoading } = useGetSuppliesQuery(undefined);

  if (isLoading) {
    return (
      <div className="h-screen text-4xl font-semibold text-black flex items-center justify-center">
        Loading....
      </div>
    );
  }
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {supplies?.map((supply) => (
          <div
            key={supply._id}
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
              <Link to={`/supply-details/${supply._id}`}>
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
