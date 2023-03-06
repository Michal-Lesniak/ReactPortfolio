import React from "react";
import { Link } from "react-scroll";

export const Header = () => {
   return (
    <div className="flex justify-center md:justify-between items-center  text-white bg-blue-800/70 m-auto py-8 lg:text-xl ">
        <div className=" text-amber-300 px-10">
            {"<Michał Leśniak/> "}
        </div>
        <div className="hidden md:flex flex-row px-10 gap-x-5">
            <Link to="home" className="text-emerald-600">{"<Home/>"}</Link>
            <div className="text-fuchsia-600">{"<About/>"}</div>
            <div className="text-sky-600">{"<Work/>"}</div>
            <div className="text-amber-700">{"<Contact/>"}</div>
        </div>
    </div>
   );
}