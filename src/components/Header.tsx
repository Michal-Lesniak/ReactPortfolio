import React from "react";
import { Link } from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";




export const Header = (props:any) => {

  
    return (
        <div onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} className="sticky top-0 group w-full h-full">
            <div className="hidden group-hover:flex justify-center md:justify-between items-center text-white bg-neutral-800 py-3 md:py-8 lg:text-xl m-auto shadow-lg">
                <div className="text-cyan hidden md:flex px-10 text-3xl font-extrabold text-center text-shadow">
                    Michał Leśniak 
                </div>
                <div className="rounded-full flex flex-row px-10 gap-x-5">
                    {/* <Link to="home" spy={true} smooth={true} duration={500} className="text-gray hover:text-cyan">{"<Home/>"}</Link> */}
                    <Link offset={-50} to="about" spy={true} smooth={true} duration={500} className="text-gray hover:text-cyan">{"<About/>"}</Link>
                    <Link to="work" spy={true} smooth={true} duration={500} className="text-gray hover:text-cyan">{"<Work/>"}</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} className="text-gray hover:text-cyan">{"<Contact/>"}</Link>
                </div>
            </div>
            <div className="group-hover:hidden flex justify-center py-4">
                <button className="text-cyan">
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
        </div>

    );
}

// bg-gray-800 