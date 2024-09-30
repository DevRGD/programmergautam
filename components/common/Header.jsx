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
          <span className={`p-1 rounded-s-sm ${state.color["bg-color"]} ${state.color["text-light"]}`}>Gautam</span>{" "}
          <span className={`p-1 rounded-e-sm ${state.color["bg-light"]} ${state.color["text-color"]}`}>Das.</span>
        </Link>

        {/* Menu button for mobile (hidden on larger screens) */}
        <div className="md:hidden">
          <MobileMenuButton bgColor={state.color["bg-color"]} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>

        {/* Navigation for larger screens */}
        <nav className="relative hidden md:flex space-x-4 transition-all duration-300">
          <div
            className={`absolute -bottom-1 left-0 h-[3px] transition-all duration-300 ${state.color["bg-color"]}`}
            style={{ width: underlineWidth, transform: `translateX(${underlinePosition}px)` }}
          />
          {state?.data?.links.map((link, index) => (
            <Link
              key={index}
              id={`link-${index}`}
              href={link.href}
              className={`relative font-semibold secondary-font ${state.color["text-color"]}`}
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
          } ${state.color["bg-light"]}`}
        >
          <nav
            className={`flex h-full items-center flex-col p-6 space-y-4 ${state.color["text-color"]} ${state.color["gradient"]} justify-center`}
          >
            {state?.data?.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-2xl secondary-font font-semibold transition-all duration-300"
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
