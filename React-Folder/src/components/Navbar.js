import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthModal from "../Auth/AuthModal";
import brand_name from '../assets/brand-name.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState("login");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!toggle) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, toggle]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
        setIsVisible(true);
      }
    };

    const handleTouchMove = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        event.preventDefault();
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    };
  }, [toggle]);

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (!event.target.closest("button") && !event.target.closest("a")) {
        setIsVisible(true);
      }
    };

    document.addEventListener("click", handleBodyClick);

    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  const toggleMenu = () => {
    setToggle(!toggle);
    setIsDropdownOpen(false);
    setIsVisible(true);
  };

  const openAuthModal = (type) => {
    setAuthModalType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <div>
      <header
        className={`bg-gray-700 text-white fixed top-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } shadow-md`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/">
            <aside className="flex items-center -m-2">
              <img
                src={brand_name}
                alt="logo"
                className="w-32 md:w-32 lg:w-48 rounded-2xl"              
              />
            </aside>
          </Link>
          <nav className="hidden md:flex items-center justify-center space-x-4 -ml-10 flex-grow">
            <Link to="/" className="hover:bg-gray-500 p-2 transition duration-300">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:bg-gray-500 p-2 focus:outline-none transition duration-300">
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-44 bg-gray-700 text-white rounded shadow-lg transition-all duration-300">
                  <Link
                    to="/genetic-analysis"
                    className="block px-4 py-2 hover:bg-gray-800 transition duration-300"
                  >
                    Genetic Analysis
                  </Link>
                  <Link
                    to="/nutrition-plans"
                    className="block px-4 py-2 hover:bg-gray-800 transition duration-300"
                  >
                    Nutrition Plans
                  </Link>
                  <Link
                    to="/consultation"
                    className="block px-4 py-2 hover:bg-gray-800 transition duration-300"
                  >
                    Consultation
                  </Link>
                </div>
              )}
            </div>
            <Link to="/community" className="hover:bg-gray-500 p-2 transition duration-300">
              Community
            </Link>
            <Link to="/about" className="hover:bg-gray-500 p-2 transition duration-300">
              About
            </Link>
            <Link to="/contact" className="hover:bg-gray-500 p-2 transition duration-300">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-x-4">
            {!isLoggedIn && (
              <button
                onClick={() => openAuthModal("login")}
                className="bg-blue-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 focus:outline-none"
              >
                Sign In
              </button>
            )}
            {isLoggedIn && (
              <>
                <Link to="/health-dashboard">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 focus:outline-none">
                    Dashboard
                  </button>
                </Link>
                <Link to="/">
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success("Logged Out");
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-700 focus:outline-none"
                  >
                    Log Out
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex items-center gap-x-2">
            {!isLoggedIn && (
              <button
                onClick={() => openAuthModal("login")}
                className="bg-blue-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 focus:outline-none mr-4"
              >
                Sign In
              </button>
            )}
            {isLoggedIn && (
              <Link to="/health-dashboard">
                <button className="bg-blue-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700 focus:outline-none mr-4">
                  Dashboard
                </button>
              </Link>
            )}
            <button onClick={toggleMenu} className="-m-2">
              {toggle ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 w-1/2 h-full bg-gray-800 text-white transform ${
          toggle ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 pt-16 overflow-y-auto`}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col justify-between h-full">
          <div>
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <FaTimes size={24} />
            </button>
            <nav>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-900 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-900 focus:outline-none transition duration-300"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Services
                  </button>
                  {isDropdownOpen && (
                    <div className="bg-gray-800 text-white rounded shadow-lg pl-2 text-sm transition-all duration-300">
                      <Link
                        to="/genetic-analysis"
                        className="block px-4 py-2 hover:bg-gray-900 transition duration-300"
                        onClick={toggleMenu}
                      >
                        Genetic Analysis
                      </Link>
                      <Link
                        to="/nutrition-plans"
                        className="block px-4 py-2 hover:bg-gray-900 transition duration-300"
                        onClick={toggleMenu}
                      >
                        Nutrition Plans
                      </Link>
                      <Link
                        to="/consultation"
                        className="block px-4 py-2 hover:bg-gray-900 transition duration-300"
                        onClick={toggleMenu}
                      >
                        Consultation
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/community"
                  className="block px-4 py-2 hover:bg-gray-900 transition duration-300"
                  onClick={toggleMenu}
                >
                  Community
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-gray-900 transition duration-300"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-900 transition duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="mb-2 px-4">
              {isLoggedIn && (
                <Link to="/">
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success("Logged Out");
                      toggleMenu();
                    }}
                    className="w-full bg-red-600 text-white py-2 rounded border border-red-700 transition duration-300 hover:bg-red-700"
                  >
                    Log Out
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {isAuthModalOpen && (
          <AuthModal
            isOpen={isAuthModalOpen}
            setIsOpen={setIsAuthModalOpen}
            authModalType={authModalType}
            setAuthModalType={setAuthModalType}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </div>
    );
  };
  
  export default Navbar;
  
