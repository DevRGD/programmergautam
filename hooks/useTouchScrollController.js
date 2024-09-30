import { useRef, useEffect, useCallback } from "react";

const useTouchScrollController = ({ sectionRefs, colors, dispatch }) => {
  const currentSection = useRef(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  // Update colors for the specified section
  const updateColorsForSection = useCallback(
    (sectionIndex) => {
      const newColors = colors[sectionIndex];
      dispatch({ type: "SET_COLORS", payload: newColors });
    },
    [colors, dispatch]
  );

  // Scroll to the specified section
  const scrollToSection = useCallback(
    (direction) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      let newSectionIndex = currentSection.current;
      if (direction === "down" && currentSection.current < sectionRefs.current.length - 1) {
        newSectionIndex++;
      } else if (direction === "up" && currentSection.current > 0) {
        newSectionIndex--;
      }

      sectionRefs.current[newSectionIndex].scrollIntoView({ behavior: "smooth" });
      updateColorsForSection(newSectionIndex);
      currentSection.current = newSectionIndex;

      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    },
    [sectionRefs, updateColorsForSection]
  );

  // Handle scroll events
  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();
      if (!isScrolling.current) {
        event.deltaY > 0 ? scrollToSection("down") : scrollToSection("up");
      }
    },
    [scrollToSection]
  );

  // Handle touch start event
  const handleTouchStart = useCallback((event) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  // Handle touch move event
  const handleTouchMove = useCallback(
    (event) => {
      event.preventDefault();
      const touchEndY = event.touches[0].clientY;
      const touchDiff = touchStartY.current - touchEndY;

      if (!isScrolling.current) {
        touchDiff > 0 ? scrollToSection("down") : scrollToSection("up");
      }
    },
    [scrollToSection]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowDown":
        case "PageDown":
          event.preventDefault();
          if (!isScrolling.current) scrollToSection("down");
          break;
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          if (!isScrolling.current) scrollToSection("up");
          break;
        default:
          break;
      }
    },
    [scrollToSection]
  );

  // Initialize and clean up event listeners
  useEffect(() => {
    const options = { passive: false };

    window.addEventListener("wheel", handleScroll, options);
    window.addEventListener("touchstart", handleTouchStart, options);
    window.addEventListener("touchmove", handleTouchMove, options);
    window.addEventListener("keydown", handleKeyDown);

    // Set initial colors on the first load
    updateColorsForSection(currentSection.current);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove, handleKeyDown, updateColorsForSection]);

  return null;
};

export default useTouchScrollController;
