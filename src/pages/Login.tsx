import Container from "../shared/Container/Container";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <div className="form bg-[#EDF3F5] p-8 w-full max-w-2xl mx-auto lg:mt-20">
        <form className="flex flex-col gap-5">
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
              Login
            </button>
          </div>
        </form>

        <span className="text-xs">
          New Here?{" "}
          <Link className="text-blue-500" to={"/register"}>
            Register
          </Link>
        </span>
      </div>
    </Container>
  );
};

export default Login;
