import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="relative w-full max-w-screen-2xl mx-auto h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* overlay div start */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      {/* overlay div end */}

      <div className="absolute top-[30%] lg:left-[8%] pl-2 lg:pl-0">
        <div className="contents space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-8xl text-white font-semibold">
            Donate{" "}
          </h1>
          <span className="text-xl md:text-2xl lg:text-4xl text-white font-medium">
            For A Better World
          </span>
          <p className="text-white font-medium max-w-2xl">
            Welcome to our Food Distribution and Supplies Management System!
            Here, we connect surplus resources with those who need them most.
            Join us in our mission to make access to nutritious meals and
            essential supplies a reality for every community.
          </p>
          <div className="buttons flex flex-col lg:flex-row gap-5 w-fit">
            <button className="btn-primary-orange">Donate Now</button>
            <button className="btn-outline">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
