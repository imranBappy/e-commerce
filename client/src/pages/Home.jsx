import { useState } from "react";
import Bottombar from "../components/Bottombar/Bottombar";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import Products from "../components/Products/Products";

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    console.log(sidebarOpen);
    return (
        <>
            <Navbar setSidebarOpen={setSidebarOpen} />
            <Bottombar />
            <Sidebar sidebarOpen={sidebarOpen} />
            <Header />
            <TrendingProducts />
            <Products/>
        </>
    );
};

export default Home;