const SuppliCard = ({ supply }) => {
  const { image, title, category, quantity } = supply;
  return (
    <div className="supply-container w-full shadow-md hover:shadow-orange-600 transition-all duration-300 max-w-lg p-5 cursor-pointer rounded-md bg-white">
      <picture>
        <img src={image} alt="Supply Image" />
      </picture>
      <div className="details font-medium text-black text-lg py-5">
        <p className="">{title}</p>
        <p className="">
          Category : <span>{category}</span>
        </p>
        <p>
          Quantity : <span>{quantity}</span>
        </p>
      </div>
      <div className="details-btn flex justify-end">
        <button className="btn-primary-orange">View Details</button>
      </div>
    </div>
  );
};

export default SuppliCard;
