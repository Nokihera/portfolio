import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuBtn, setMobileMenuBtn] = useState(false);

  const handleClickMobileMenuBtn = () => {
    setMobileMenuBtn(!mobileMenuBtn);
  };

  const [navBarEl, setNavBarEl] = useState(
    [
      { id: 1, name: "Home", link: "/", isActive: true},
      { id: 2, name: "About", link: "/about", isActive: false},
      { id: 3, name: "Projects", link: "/projects", isActive: false},
      { id: 4, name: "Contact", link: "/contact", isActive: false},
    ]
  )
  const clickNavEl = (id)=>{
    setNavBarEl(navBarEl.map((el)=>el.id === id ? {...el, isActive: true} : {...el, isActive: false}))
  }

  return (
    <nav className="bg-[#1f2937] shadow-lg sticky top-0">
      <ul className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-14" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden inline-block relative z-20">
          <button onClick={handleClickMobileMenuBtn}>
            {mobileMenuBtn ? (
              <FaTimes size={24} className="text-white transition-transform duration-300 ease-in-out transform rotate-90" />
            ) : (
              <FiMenu size={24} className="text-white transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Half-Screen Mobile Menu */}
        <div
          className={`${
            mobileMenuBtn
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } fixed top-0 right-0 h-full w-[50vw] bg-[#273c5a] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-6 md:hidden z-10`}
        >
          {navBarEl.map((item) => (
            <li key={item.id} className="list-none">
              <Link
                to={item.link}
                onClick={() => {setMobileMenuBtn(false); clickNavEl(item.id);}} // Close menu on item click
                className={`text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:underline  ${item.isActive ? 'text-yellow-400 underline' : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </div>

        {/* Desktop Navigation Links */}
        <div className="md:flex hidden gap-6">
          {navBarEl.map((item) => (
            <li key={item.id} className="list-none group">
              <Link
                onClick={() => clickNavEl(item.id)}
                to={item.link}
                className={`text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-yellow-400 hover:underline ${item.isActive ? 'text-yellow-400 underline' : ''}`}
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
