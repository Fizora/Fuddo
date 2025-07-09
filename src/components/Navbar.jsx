import { useState } from "react";
import {
  LuMenu,
  LuX,
  LuMoon,
  LuSun,
  LuInstagram,
  LuTwitter,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const sidebarVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <header className="fixed bg-white dark:bg-black/20 backdrop-blur-lg top-0 w-full shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="">
          {/* logo */}
          <Link to={"/"} className="dark:text-white logo text-3xl">
            Fuddo.
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          {/* Desktop Menu */}
          {["Showcase"].map((item) => (
            <motion.div key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-black dark:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <a
            href="https://instagram.com/yourphotographer"
            className="dark:text-white"
          >
            <LuInstagram size={20} />
          </a>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-white text-black transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <LuSun /> : <LuMoon />}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden text-black dark:text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </motion.div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white dark:bg-black w-64 h-screen fixed top-0 left-0 px-4 py-16 flex flex-col space-y-4"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {["SHOWCASE", "INSTAGRAM"].map((item) => (
              <motion.div
                key={item}
                variants={menuVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block py-2 text-black dark:text-white transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={() => {
                setDarkMode(!darkMode);
                handleLinkClick();
              }}
              className="p-2 rounded-full bg-gray-200 dark:bg-white text-black dark:text-black transition-colors duration-200 w-fit"
              variants={menuVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <LuSun /> : <LuMoon />}
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
