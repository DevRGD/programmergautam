export default function MenuButton({ bgColor, toggleMenu, isMenuOpen }) {
  return (
    <button onClick={toggleMenu} className="md:hidden p-2 relative w-10 h-10 z-50" aria-label="Toggle menu">
      <div
        className={`absolute top-1/2 left-0 w-full h-1 ${bgColor} transition-all duration-300 ease-in-out  ${
          isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 right-0 h-1 ${bgColor} transition-all duration-300 ease-in-out  ${
          isMenuOpen ? "-rotate-45 translate-y-0 w-full" : "translate-y-1.5 w-3/4"
        }`}
      ></div>
    </button>
  );
}
