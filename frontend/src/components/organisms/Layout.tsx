import React from "react";
import Navbar from "../molecules/Navbar";
import Leftbar from "../molecules/Leftbar";
import MainContainer from "../molecules/MainContainer";
import VideoDetail from "./VideoDetail";

const Layout = () => {
    const path = window.location.pathname;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex">
                <Leftbar />
                {path === "/" ? <MainContainer /> : <VideoDetail />}
            </div>
        </div>
    );
};

export default Layout;
