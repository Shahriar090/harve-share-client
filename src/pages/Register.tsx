import { Link } from "react-router-dom";
import Container from "../shared/Container/Container";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
const Register = () => {
  return (
    <div className="flex items-center justify-center">
      <Container>
        <div className="login-container flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
          <div className="details flex-[1] space-y-5">
            <h1 className="font-normal text-3xl">Get In Touch With Us</h1>
            {/* bar div start */}
            <div className="w-16 h-1 rounded-full bg-[#FF4800]"></div>
            {/* bar div end */}
            <p className="max-w-lg">
              Our mission is to create a vibrant community where individuals
              like you can discover high-quality, locally sourced food while
              supporting local growers. Join us in our commitment to promote
              healthy living, sustainable agriculture, and community engagement.
              Together, we can make a difference one harvest at a time.
            </p>

            <div className="socials flex gap-5 text-lg text-[#FF4800]">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaPinterestP />
              <FaTwitter />
            </div>
            <div className="contact space-y-2">
              <div className="phone flex items-center gap-2">
                <span className="text-lg text-[#FF4800]">
                  <FaPhoneAlt />
                </span>{" "}
                <p>+88 01543398678</p>
              </div>
              <div className="email flex items-center gap-2">
                <span className="text-lg text-[#FF4800]">
                  <MdAlternateEmail />
                </span>{" "}
                <p>harveshare@gmail.com</p>
              </div>
              <div className="location flex items-center gap-2">
                <span className="text-lg text-[#FF4800]">
                  <FaLocationArrow />
                </span>{" "}
                <p>Street 06, North Khulshi, Chattogram</p>
              </div>
            </div>
          </div>
          <div className="form flex-[1] bg-[#EDF3F5] p-8 w-full">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
              />

              <div className="submit-btn flex justify-center">
                <button type="submit" className="btn-primary-orange w-fit">
                  Register
                </button>
              </div>
            </form>

            <span className="text-xs">
              Already have an account?{" "}
              <Link className="text-blue-500" to={"/login"}>
                Login
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
