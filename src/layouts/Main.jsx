import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Main;
