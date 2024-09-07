import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
