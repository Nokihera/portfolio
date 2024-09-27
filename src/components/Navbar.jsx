import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";

const Navbar = () => {
  const navBarEl = [
    { 
      id: 1, 
      name: "Home", 
      link: "/"
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 4,
      name: "Projects",
      link: "/projects",
    },
  ];

  return (
    <nav className="bg-[#1f2937] shadow-lg">  {/* Solid navy-like color */}
      <ul className="flex justify-between items-center gap-6 py-4 px-8">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-14" />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-6">
          {navBarEl.map((item) => (
            <li key={item.id} className="group">
              <Link
                to={item.link}
                className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
