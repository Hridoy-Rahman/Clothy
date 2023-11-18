import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="max-w-screen-2xl xl:px-28 px-4">
        <nav className="flex justify-between items-center text-gray-600 container md:py-4 pt-6 pb-3">
          <FaSearch className="h-5 w-5 cursor-pointer hidden md:block  hover:text-orange-600"></FaSearch>

          <Link className="">
            <img
              src="https://i.ibb.co/mB2JJbP/Screenshot-2023-11-18-164415.png"
              alt=""
              className="h-16 w-full rounded-2xl"
            />
          </Link>

          <div className="text-lg sm:flex items-center gap-4 hidden">
            <Link className="flex items-center gap-2 no-underline hover:text-orange-600">
              <FaUser></FaUser> Account
            </Link>
            <Link className="flex items-center gap-2 no-underline hover:text-orange-600">
              <FaShoppingBag /> Shopping
            </Link>
          </div>

          {/* For small Devices */}

          <div className='sm:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="h-5 w-5"></FaTimes>
              ) : (
                <FaBars className="h-5 w-5"></FaBars>
              )}
            </button>
          </div>
        </nav>

        {/* Category Menu */}
        <div className="pt-4">
          <ul className="lg:flex justify-between items-center text-gray-600 hidden">
            {navItems.map((navItem) => (
              <li key={navItem.title} className="hover:text-orange-600">
                <Link to={`/`}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Category Menu for Mobile device*/}

    
          <div className="pt-4 sm:hidden">
            <ul className={`bg-gray-200 text-center rounded-xl p-4  text-gray-600 ${isOpen ? '' : 'hidden'}`} >
              {navItems.map((navItem) => (
                <li key={navItem.title} className="hover:text-orange-600">
                  <Link to={`/`}>{navItem.title}</Link>
                </li>
              ))}
            </ul>
          </div>
      </header>
    </div>
  );
};

export default Navbar;
