import React, { useState } from "react";
import logo from "../assets/BISHWAS.png";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link to="/">
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded">
            Home
          </li>
        </Link>

        <Link  to="/About">
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded">
            About Us
          </li>
        </Link>
        <Link  to="/Services">
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded">
            Services
          </li>
        </Link>
       {/* <Link to="/Projects">
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded">
            Project
          </li>
        </Link> */}
        <Link  to="/Carer">
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded">
            Careers
          </li>
        </Link>
        <Link  to="/Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:rounded">
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="bg-slate-900">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span>
            <img
              className="h-10 w-10 bg-gray-300 rounded-full inline-block"
              src={logo}
              alt="logo"
            />
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10 ">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link  to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link  to="/About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  About Us
                </li>
              </Link>
              <Link  to="/Services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Services
                </li>
              </Link>
             {/* <Link  to="/Projects">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Project
                </li>
              </Link> */}
              <Link  to="/Carer">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Careers
                </li>
              </Link>
              <Link to="/Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          {click && content}
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
