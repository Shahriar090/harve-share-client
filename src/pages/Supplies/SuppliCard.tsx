import { Link } from "react-router-dom";

interface Supply {
  id: number;
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: number;
}

interface SuppliCardProps {
  supply: Supply;
}

const SuppliCard: React.FC<SuppliCardProps> = ({ supply }) => {
  const { _id, image, title, category, quantity } = supply;
  console.log(supply);
  return (
    <div className="supply-container w-full shadow-md  max-w-lg p-5 cursor-pointer rounded-md bg-white">
      <picture>
        <img src={image} alt="Supply Image" />
      </picture>
      <div className="details font-normal text-black text-lg py-5">
        <p className="">{title}</p>
        <p className="">
          Category : <span>{category}</span>
        </p>
        <p>
          Available Quantity : <span>{quantity}</span>
        </p>
      </div>
      <div className="details-btn flex justify-end">
        <Link to={`supply-details/${_id}`}>
          {" "}
          <button className="btn-primary-orange">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SuppliCard;
