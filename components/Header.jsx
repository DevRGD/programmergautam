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

  const links = [
    { name: "Blog", href: "/blog" },
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

  return (
    <header className="bg-transparent fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="md:text-4xl text-2xl font-bold text-white">
          <span className="bg-teal p-1">Gautam</span> <span className="text-teal font-bold">Das.</span>
        </Link>

        {/* Menu button for mobile (hidden on larger screens) */}
        <div className="md:hidden">
          <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>

        {/* Navigation for larger screens */}
        <nav className="relative hidden md:flex space-x-4 transition-all duration-300">
          <div
            className="absolute -bottom-1 left-0 h-[3px] bg-teal transition-all duration-300"
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
              className="relative text-teal font-semibold secondary-font"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Slide-out menu for mobile */}
        <div
          className={`fixed inset-0 bg-black shadow-lg z-40 md:hidden transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-4 text-teal">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-2xl secondary-font font-semibold hover:text-royalblue transition-all duration-300"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
