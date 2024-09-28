"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuButton from "./MenuButton";

export default function Header() {
  const [underlinePosition, setUnderlinePosition] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Control visibility of the navbar
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimeout, setHideTimeout] = useState(null); // Track timeout for hiding

  const links = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    if (isHovering) {
      setUnderlineWidth(document.getElementById(`link-${currentIndex}`).offsetWidth);
      setUnderlinePosition(document.getElementById(`link-${currentIndex}`).offsetLeft);
    } else {
      setUnderlineWidth(0);
    }
  }, [currentIndex, isHovering]);

  const handleMouseEnter = (index) => {
    setIsHovering(true);
    setCurrentIndex(index);
    const linkElement = document.getElementById(`link-${index}`);
    setUnderlinePosition(linkElement.offsetLeft);
    setUnderlineWidth(linkElement.offsetWidth);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll for showing and hiding navbar on scroll up/down
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Only hide/show navbar if scroll height is greater than 100
    if (currentScrollY < 100) {
      setIsVisible(true); // Always visible when less than 100
      resetHideTimeout(); // Reset timeout to ensure it doesn't hide
      return;
    }

    if (currentScrollY < lastScrollY) {
      // Scrolling up, show navbar
      setIsVisible(true);
      resetHideTimeout(); // Reset the hide timeout on scroll up
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down, hide navbar
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  const resetHideTimeout = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    // Hide the navbar after 3 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    setHideTimeout(timeout);
  };

  useEffect(() => {
    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Reset hide timer on user interaction (hover or scroll)
    window.addEventListener("mousemove", resetHideTimeout);
    window.addEventListener("touchstart", resetHideTimeout); // For mobile

    resetHideTimeout(); // Initial timeout

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", resetHideTimeout);
      window.removeEventListener("touchstart", resetHideTimeout);
    };
  }, [lastScrollY, hideTimeout]);

  return (
    <header
      className={`p-4 px-10 flex justify-between items-center sticky top-0 left-0 bg-transparent text-nowrap transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      onMouseEnter={() => setIsVisible(true)} // Ensure it reappears when hovered
      onMouseLeave={handleMouseLeave} // Auto-hide after 3 seconds of mouse leave
    >
      {/* Logo */}
      <h1 className="text-4xl font-extrabold text-teal">
        Gautam <span className="text-4xl text-royalblue">Das.</span>
      </h1>

      {/* Menu button for mobile (hidden on larger screens) */}
      <div className="md:hidden">
        <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>

      {/* Navigation for larger screens */}
      <nav className="relative hidden md:flex space-x-4 transition-all duration-300">
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-royalblue transition-all duration-300"
          style={{
            width: underlineWidth,
            transform: `translateX(${underlinePosition}px)`,
          }}
        />
        {links.map((link, index) => (
          <Link
            key={index}
            id={`link-${index}`}
            href={link.href}
            className="relative secondary-font hover:text-royalblue"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Slide-out menu for mobile */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-black text-white flex flex-col space-y-4 p-8 md:hidden transition-transform duration-300 ease-in-out">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="block p-4 hover:text-royalblue" onClick={closeMenu}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
