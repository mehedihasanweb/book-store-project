import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContextApi/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  //   handle create user
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    // validation user password
    if (!/^.{6,}$/.test(password)) {
      return toast.error("Password should be at least six character or longer");
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);

        if (result) {
          // update user display name
          updateProfile(result.user, {
            displayName: name,
          });
        }

        navigate("/");
        toast.success("User created Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center mx-auto">
      <div className="border w-1/2 my-20 bg-gray-100 p-12 rounded-lg">
        <h3 className="text-4xl text-center font-semibold pb-6">
          Create an Account
        </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-xl font-semibold">Your Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border outline-none w-full px-4 py-3 my-3 rounded-md font-semibold text-xl"
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Already have an Account?{" "}
            <Link to="/login" className="text-[#23BE0A] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
