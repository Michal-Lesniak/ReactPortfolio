import React from "react";
import { Link } from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";




export const Header = () => {
    return (
        <div className="sticky top-0 group w-full h-full">
            <div className=" rounded-full w-[100px] md:rounded-none hidden group-hover:flex justify-center md:justify-between items-center text-white bg-blue-800/70 py-8 lg:text-xl m-auto">
                <div className="hidden md:flex text-amber-300 px-10">
                    {"<Michał Leśniak/> "}
                </div>
                <div className="flex flex-row px-10 gap-x-5">
                    <Link to="home" className="text-emerald-600">{"<Home/>"}</Link>
                    <div className="text-fuchsia-600">{"<About/>"}</div>
                    <div className="text-sky-600">{"<Work/>"}</div>
                    <div className="text-amber-700">{"<Contact/>"}</div>
                </div>
            </div>
            <div className="group-hover:hidden flex justify-center py-4">
                <button className="text-white">
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
        </div>

    );
}