import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.css";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;