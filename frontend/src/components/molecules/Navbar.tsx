import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import Input from "../atoms/Input";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between w-full p-10">
            <div className="flex items-center gap-3">
                <img src="/mylogo.png" alt="" className="object-contain w-20" />
                <span className="text-3xl font-bold font-gothic">VPlay</span>
            </div>
            <div className="flex items-center justify-end flex-1 gap-8 ">
                <div className="relative w-1/3">
                    <Input
                        type="text"
                        placeholder="Search..."
                        isIcon={true}
                        FullWidth={true}
                        className=""
                    />
                    <FiSearch
                        className="absolute text-2xl left-2 top-5 "
                        color="gray"
                    />
                </div>
                <div>
                    <MdNotificationsActive size={25} />
                </div>
                <button className="underline" onClick={() => navigate("/auth")}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
