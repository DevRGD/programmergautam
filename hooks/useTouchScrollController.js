import { useRef, useEffect, useCallback } from "react";
import useGlobalState from "@/hooks/useGlobalState";

const useTouchScrollController = ({ sectionRefs }) => {
  const { state, dispatch } = useGlobalState();
  const currentSection = useRef(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const colors = state.data.colors;

  // Dispatch color change for a specific section
  const updateColorsForSection = useCallback(
    (sectionIndex) => {
      dispatch({ type: "SET_COLOR", payload: colors[sectionIndex] });
    },
    [colors, dispatch]
  );

  // Scroll to the next or previous section based on direction
  const scrollToSection = useCallback(
    (direction) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const maxSectionIndex = sectionRefs.current.length - 1;
      let newSectionIndex = currentSection.current;

      if (direction === "down" && newSectionIndex < maxSectionIndex) {
        newSectionIndex++;
      } else if (direction === "up" && newSectionIndex > 0) {
        newSectionIndex--;
      }

      sectionRefs.current[newSectionIndex].scrollIntoView({ behavior: "smooth" });
      updateColorsForSection(newSectionIndex);
      currentSection.current = newSectionIndex;

      setTimeout(() => {
        isScrolling.current = false;
        dispatch({ type: "SET_IS_VISIBLE", payload: true });
      }, 700);
    },
    [sectionRefs, updateColorsForSection, dispatch]
  );

  // Handle scroll event for mouse wheel
  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();
      if (!isScrolling.current) {
        dispatch({ type: "SET_IS_VISIBLE", payload: false });
        event.deltaY > 0 ? scrollToSection("down") : scrollToSection("up");
      }
    },
    [scrollToSection, dispatch]
  );

  // Capture initial touch position for touch scrolling
  const handleTouchStart = useCallback((event) => {
    touchStartY.current = event.touches[0].clientY;
    // No need to dispatch SET_IS_VISIBLE here anymore
  }, []);

  // Handle touch movement to determine scroll direction
  const handleTouchMove = useCallback(
    (event) => {
      event.preventDefault();
      const touchEndY = event.touches[0].clientY;
      const touchDiff = touchStartY.current - touchEndY;

      // Only dispatch SET_IS_VISIBLE: false when the user actually scrolls
      if (!isScrolling.current) {
        if (Math.abs(touchDiff) > 10) {
          // Threshold to ensure a significant movement
          dispatch({ type: "SET_IS_VISIBLE", payload: false });
          touchDiff > 0 ? scrollToSection("down") : scrollToSection("up");
        }
      }
    },
    [scrollToSection, dispatch]
  );

  // Handle keyboard navigation with arrow keys and page up/down
  const handleKeyDown = useCallback(
    (event) => {
      if (isScrolling.current) return;

      const direction = ["ArrowDown", "PageDown"].includes(event.key)
        ? "down"
        : ["ArrowUp", "PageUp"].includes(event.key)
        ? "up"
        : null;

      if (direction) {
        event.preventDefault();
        dispatch({ type: "SET_IS_VISIBLE", payload: false });
        scrollToSection(direction);
      }
    },
    [scrollToSection, dispatch]
  );

  // Initialize and clean up event listeners
  useEffect(() => {
    const eventOptions = { passive: false };

    dispatch({ type: "SET_IS_VISIBLE", payload: true });
    window.addEventListener("wheel", handleScroll, eventOptions);
    window.addEventListener("touchstart", handleTouchStart, eventOptions);
    window.addEventListener("touchmove", handleTouchMove, eventOptions);
    window.addEventListener("keydown", handleKeyDown);

    updateColorsForSection(currentSection.current); // Initial color setup

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
