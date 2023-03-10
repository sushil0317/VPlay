import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLibraryAdd } from "react-icons/md";

const links = [
    {
        icon: <IoHomeOutline />,
        href: "/",
    },
    {
        icon: <MdOutlineLibraryAdd />,
        href: "/",
    },
];
const Leftbar = () => {
    const [active, setActive] = useState<number>(0);
    return (
        <div className="flex flex-col gap-3 py-10">
            {links.map((link, index) => {
                return (
                    <div
                        key={index}
                        className={`${
                            active === index
                                ? "border-l-4 border-purple"
                                : "border-l-4 border-transparent"
                        }`}
                    >
                        <p
                            className={`px-10 py-3 text-3xl transition-all duration-200 ease-in-out ${
                                active === index && "text-purple"
                            }`}
                            onClick={() => {
                                setActive(index);
                            }}
                        >
                            {link.icon}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Leftbar;
