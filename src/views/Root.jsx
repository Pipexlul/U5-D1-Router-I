import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

// Views
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
