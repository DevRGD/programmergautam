"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenuButton from "../buttons/MobileMenuButton";
import useGlobalState from "@/hooks/useGlobalState";

export default function Header() {
  const { state } = useGlobalState();
  const [underlinePosition, setUnderlinePosition] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const color = state.color;
  const text_color = color["text-color"];
  const bg_color = color["bg-color"];
  const text_light = color["text-light"];
  const bg_light = color["bg-light"];
  const gradient = color["gradient"];
  const links = state.data.links;

  useEffect(() => {
    if (isHovering) {
      const linkElement = document.getElementById(`link-${currentIndex}`);
      if (linkElement) {
        setUnderlineWidth(linkElement.offsetWidth);
        setUnderlinePosition(linkElement.offsetLeft);
      }
    } else {
      setUnderlineWidth(0);
    }
  }, [currentIndex, isHovering]);

  const handleMouseEnter = (index) => {
    setIsHovering(true);
    setCurrentIndex(index);
    const linkElement = document.getElementById(`link-${index}`);
    if (linkElement) {
      setUnderlinePosition(linkElement.offsetLeft);
      setUnderlineWidth(linkElement.offsetWidth);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="md:text-4xl text-2xl font-bold flex justify-center items-center">
          <span className={`p-1 rounded-s-md ${bg_color} ${text_light}`}>Gautam</span>{" "}
          <span className={`p-1 rounded-e-md ${bg_light} ${text_color}`}>Das.</span>
        </Link>

        {/* Menu button for mobile (hidden on larger screens) */}
        <div className="md:hidden">
          <MobileMenuButton bgColor={bg_color} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>

        {/* Navigation for larger screens */}
        <nav className="relative hidden md:flex space-x-4 transition-all duration-300">
          <div
            className={`absolute -bottom-1 left-0 h-[3px] transition-all duration-300 ${bg_color}`}
            style={{ width: underlineWidth, transform: `translateX(${underlinePosition}px)` }}
          />
          {links.map((link, index) => (
            <Link
              key={index}
              id={`link-${index}`}
              href={link.href}
              className={`relative font-semibold secondary-font ${text_color}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Slide-out menu for mobile */}
        <div
          className={`fixed h-screen inset-0 shadow-lg z-40 md:hidden transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } ${bg_light}`}
        >
          <nav className={`flex h-full items-center flex-col p-6 space-y-4 ${text_color} ${gradient} justify-center`}>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-2xl secondary-font font-semibold transition-all duration-300 text_color"
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
