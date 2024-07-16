import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;