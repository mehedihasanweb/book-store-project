import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContextApi/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { singInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
      .then(() => {
        // console.log(result);
        toast.success("login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className="flex justify-center mx-auto">
      <div className="border w-1/2 my-20 bg-gray-100 p-12 rounded-lg">
        <h3 className="text-4xl text-center font-semibold pb-6">
          Please Login
        </h3>
        <form onSubmit={handleLogin}>
          <div>
            <label className="text-xl font-semibold">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="border outline-none w-full px-4 py-3 my-3 rounded-md font-semibold text-xl"
            />
          </div>
          <div>
            <label className="text-xl font-semibold">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border outline-none w-full px-4 py-3 my-3 rounded-md font-semibold text-xl"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#23BE0A] text-xl font-semibold text-white w-1/2 py-2 rounded-lg hover:bg-[#28ae14] transition-all duration-500">
              Login
            </button>
          </div>
        </form>
        <div className="mt-6">
          <p>
            Do not have an Account?{" "}
            <Link to="/register" className="text-[#23BE0A] font-semibold">
              Please Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
