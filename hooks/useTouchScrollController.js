import { useRef, useEffect, useCallback } from "react";

const useTouchScrollController = ({ sectionRefs, colors, dispatch }) => {
  const currentSection = useRef(0); // Track the current section index
  const isScrolling = useRef(false); // Prevent multiple scrolls
  const touchStartY = useRef(0); // Store the initial Y position of touch

  const updateColorsForSection = useCallback(
    (sectionIndex) => {
      const newColors = colors[sectionIndex]; // Get the color object for the section
      setTimeout(() => {
        dispatch({ type: "SET_COLORS", payload: newColors }); // Update the global state
      }, 300);
    },
    [colors, dispatch] // Memoize function with colors and dispatch as dependencies
  );

  const scrollToSection = useCallback(
    (direction) => {
      if (isScrolling.current) return; // Prevent multiple scrolls at once
      isScrolling.current = true; // Lock scrolling

      if (direction === "down") {
        if (currentSection.current < sectionRefs.current.length - 1) {
          currentSection.current++;
          sectionRefs.current[currentSection.current].scrollIntoView({ behavior: "smooth" });
          updateColorsForSection(currentSection.current);
        }
      } else if (direction === "up") {
        if (currentSection.current > 0) {
          currentSection.current--;
          sectionRefs.current[currentSection.current].scrollIntoView({ behavior: "smooth" });
          updateColorsForSection(currentSection.current);
        }
      }

      setTimeout(() => {
        isScrolling.current = false; // Unlock scrolling after a delay
      }, 700); // Adjust the delay to match the scrolling animation duration
    },
    [sectionRefs, updateColorsForSection]
  );

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault(); // Prevent default scrolling behavior
      if (event.deltaY > 0) {
        scrollToSection("down");
      } else {
        scrollToSection("up");
      }
    },
    [scrollToSection]
  );

  const handleTouchStart = useCallback((event) => {
    touchStartY.current = event.touches[0].clientY; // Store initial touch Y position
  }, []);

  const handleTouchMove = useCallback(
    (event) => {
      event.preventDefault();
      const touchEndY = event.touches[0].clientY;
      const touchDiff = touchStartY.current - touchEndY;

      if (touchDiff > 0) {
        scrollToSection("down");
      } else {
        scrollToSection("up");
      }
    },
    [scrollToSection]
  );

  // Attach key events
  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowDown":
        case "PageDown":
          event.preventDefault();
          scrollToSection("down");
          break;
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          scrollToSection("up");
          break;
        default:
          break;
      }
    },
    [scrollToSection]
  );

  useEffect(() => {
    const options = { passive: false };

    // Attach wheel, touch, and key events
    window.addEventListener("wheel", handleScroll, options);
    window.addEventListener("touchstart", handleTouchStart, options);
    window.addEventListener("touchmove", handleTouchMove, options);
    window.addEventListener("keydown", handleKeyDown);

    updateColorsForSection(currentSection.current); // Set initial colors based on the first section

    return () => {
      // Clean up event listeners
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove, handleKeyDown, updateColorsForSection]);

  return null;
};

export default useTouchScrollController;
