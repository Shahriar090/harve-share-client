import { topSixDonors } from "../data/TopSixDonorData";
import Container from "../shared/Container/Container";

import donorBg from "../assets/donor-bg.png";
const TopSixDonor = () => {
  return (
    <div
      className="border-t relative w-full max-w-screen-2xl mx-auto bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${donorBg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <Container>
        <div className="flex justify-between items-center flex-col lg:flex-row gap-5 lg:gap-0">
          <div className="texts space-y-3 z-[50]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
              Meet Our Top Six Contributors{" "}
            </h1>
            <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
            <p className="max-w-xl text-slate-100 font-medium">
              We proudly present the voices of our top contributors, whose
              unwavering support transcends boundaries to alleviate hunger and
              nourish communities. While our focus lies in food distribution, we
              are immensely grateful to individuals whose philanthropic spirit
              extends beyond, enriching lives in diverse ways. From medical
              essentials to baby care products and beyond, these extraordinary
              donors consistently prioritize holistic well-being.
              <br /> Explore their testimonials, each a testament to the
              profound impact of generosity across various spheres of need. With
              immersive animations and user-friendly sliders, delve into the
              stories of compassion that define our collective mission. Join us
              as we celebrate the compassion and generosity that fuel our
              efforts to create a world where no one goes hungry
            </p>
            <div className="pt-3">
              <button className="btn-primary-orange">Read More</button>
            </div>
          </div>
          <div className="slider">
            <div className="carousel carousel-center max-w-lg space-x-1  bg-gray-300 rounded-box">
              {topSixDonors?.map((donor) => (
                <div key={donor.id} className="carousel-item flex-col relative">
                  <img src={donor.image} className=" w-full h-[500px]" />
                  <div className="details absolute bottom-0  w-full bg-black bg-opacity-40 py-2">
                    <p className="text-white text-xl text-center font-medium">
                      {donor.name}
                    </p>
                    <p className="text-white text-lg text-center font-normal">
                      <span>Profession</span> : {donor.profession}
                    </p>
                    <p className="text-white text-lg text-center font-normal">
                      <span>Total Donation</span> : {donor.totalDonation}{" "}
                      <span>Times</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopSixDonor;
