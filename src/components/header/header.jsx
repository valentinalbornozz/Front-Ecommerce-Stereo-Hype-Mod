import { useState } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-center items-center px-4">
        {/* Logo y Enlaces de navegación */}
        <div className="flex items-center justify-center ">
          <div className="flex items-center ">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="mr-4" />
            </Link>
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-300 font-semibold">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 font-semibold">
                  APPAREL
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 font-semibold">
                  ACCESSORIES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 font-semibold">
                  MUSIC
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Iconos en el centro (para dispositivos grandes) */}
        <div className="hidden md:flex items-center justify-center ml-4 mr-4">
          <button className="text-white hover:text-gray-300">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Iconos en el lado derecho (para dispositivos grandes) */}
        <div className="hidden md:flex items-center justify-center">
          <button className="text-white hover:text-gray-300">
            <FiShoppingBag size={20} />
          </button>
          <button
            onClick={toggleMenu}
            className="hidden ml-4 text-white hover:text-gray-300"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Iconos en el lado derecho (para dispositivos móviles y tabletas) */}
        <div className="flex md:hidden items-center justify-end w-full">
          <button className="text-white hover:text-gray-300">
            <FiSearch size={20} />
          </button>
          <button className="ml-4 text-white hover:text-gray-300">
            <FiShoppingBag size={20} />
          </button>
          <button
            onClick={toggleMenu}
            className="ml-4 text-white hover:text-gray-300"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      <div
        className={`md:hidden bg-black w-full overflow-hidden transition-all duration-300 menu-container ${
          menuOpen ? "open" : ""
        }`}
      >
        <ul className="flex flex-col items-center">
          <li>
            <a
              href="#"
              className="block py-2 text-center hover:text-gray-300 font-semibold"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-center hover:text-gray-300 font-semibold"
            >
              APPAREL
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-center hover:text-gray-300 font-semibold"
            >
              ACCESSORIES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 text-center hover:text-gray-300 font-semibold"
            >
              MUSIC
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
