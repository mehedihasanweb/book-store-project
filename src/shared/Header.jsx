import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../authContextApi/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const [active, setActive] = useState(false);
  const { user, LogOut } = useContext(AuthContext);
  console.log(user);

  // handle sign out
  const handleSignOut = () => {
    LogOut()
      .then(() => {
        toast.success("Sign Out Successful!!");
      })
      .catch(() => {
        toast.error("Sign Out Failed!!");
      });
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between my-6">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="text-4xl font-bold">
          BookStore
        </Link>
        <div className="md:hidden">
          {active ? (
            <IoClose onClick={() => setActive(!active)} className="w-8 h-8" />
          ) : (
            <FaBars onClick={() => setActive(!active)} className="w-8 h-8" />
          )}
        </div>
      </div>

      <ul
        className={`${
          active ? "flex" : "hidden"
        } md:flex md:items-center md:justify-between gap-8 transition-all duration-300 ease-in-out`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border border-green-500 px-3 py-2 rounded-md hover:bg-green-500 hover:text-white font-semibold"
                : "font-semibold"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive
                ? "border border-green-500 px-3 py-2 rounded-md hover:bg-green-500 hover:text-white font-semibold"
                : "font-semibold"
            }
          >
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/page-to-read"
            className={({ isActive }) =>
              isActive
                ? "border border-green-500 px-3 py-2 rounded-md hover:bg-green-500 hover:text-white font-semibold"
                : "font-semibold"
            }
          >
            Page To Read
          </NavLink>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4 md:mt-0">
        {user ? (
          <>
            <h2 className="text-sm font-semibold">{user?.displayName}</h2>
            <NavLink>
              <button
                onClick={handleSignOut}
                className="bg-[#59C6D2] px-3 py-2 text-white rounded-md w-full md:w-auto"
              >
                Sign Out
              </button>
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">
            <button className="bg-[#23BE0A] px-3 py-2 text-white rounded-md w-full md:w-auto">
              Sign In
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
