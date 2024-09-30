import { useRef, useEffect, useCallback } from "react";
import useGlobalState from "@/hooks/useGlobalState";

const useTouchScrollController = ({ sectionRefs }) => {
  const { state, dispatch } = useGlobalState();
  const currentSection = useRef(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const colors = state.data.colors;

  // Update colors for the specified section
  const updateColorsForSection = useCallback(
    (sectionIndex) => {
      const newColor = colors[sectionIndex];
      dispatch({ type: "SET_COLOR", payload: newColor });
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

      // Reset scrolling after 700ms and set visibility to true again
      setTimeout(() => {
        isScrolling.current = false;
        dispatch({ type: "SET_IS_VISIBLE", payload: true });
      }, 700);
    },
    [sectionRefs, updateColorsForSection, dispatch]
  );

  // Handle scroll events
  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();
      if (!isScrolling.current) {
        dispatch({ type: "SET_IS_VISIBLE", payload: false }); // Hide during scroll
        event.deltaY > 0 ? scrollToSection("down") : scrollToSection("up");
      }
    },
    [scrollToSection, dispatch]
  );

  // Handle touch start event
  const handleTouchStart = useCallback(
    (event) => {
      touchStartY.current = event.touches[0].clientY;
      dispatch({ type: "SET_IS_VISIBLE", payload: false }); // Hide during touch start
    },
    [dispatch]
  );

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
          if (!isScrolling.current) {
            dispatch({ type: "SET_IS_VISIBLE", payload: false }); // Hide during keypress
            scrollToSection("down");
          }
          break;
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          if (!isScrolling.current) {
            dispatch({ type: "SET_IS_VISIBLE", payload: false }); // Hide during keypress
            scrollToSection("up");
          }
          break;
        default:
          break;
      }
    },
    [scrollToSection, dispatch]
  );

  // Initialize and clean up event listeners
  useEffect(() => {
    const options = { passive: false };

    // Dispatch visible on first load
    dispatch({ type: "SET_IS_VISIBLE", payload: true });

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
  }, [handleScroll, handleTouchStart, handleTouchMove, handleKeyDown, updateColorsForSection, dispatch]);

  return null;
};

export default useTouchScrollController;
