import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { NavLink } from "react-router-dom";

export const Navigation = () => {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    }

    return (
        <div className='flex items-center gap-5 md:gap-0'>
            {/* Hamburger Menu */}
            <button onClick={toggleSideBarOpen}>
                <img className="pt-1 md:hidden" src="../../src/assets/icon-menu.svg" alt="" />
            </button>
            {
                sideBarOpen && (
                    <Sidebar toggleSideBarOpen={toggleSideBarOpen} />
                )
            }
            {/* Logo */}
            <img src={`../../src/assets/logo.png`} className="w-11 bg-blue-600" alt="" />
            {/* Sections */}
            <div id="sections" className='hidden md:flex items-center pt-1 gap-6 text-dark-grayish-blue'>
                <NavLink to={"/"} className={(link)=> link.isActive ? "text-blue-400": ""}>
                    Products
                </NavLink>
                <NavLink to={"/auth"} className={(link)=> link.isActive ? "text-blue-400": ""}>
                    Account
                </NavLink>
                <NavLink to={"/contact"} className={(link)=> link.isActive ? "text-blue-400": ""}>
                    Contact
                </NavLink>
              
                {/* <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a> */}
            </div>
        </div>
    )
}
