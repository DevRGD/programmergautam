import { useRef, useEffect, useCallback } from "react";
import useGlobalState from "@/hooks/useGlobalState";

const useTouchScrollController = ({ sectionRefs }) => {
  const { state, dispatch } = useGlobalState();
  const currentSection = useRef(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  // Dispatch color change for a specific section
  const updateColorsForSection = useCallback(
    (sectionIndex) => dispatch({ type: "SET_COLOR", payload: state.data.colors[sectionIndex] }),
    [state.data.colors, dispatch]
  );

  // Scroll to the next or previous section based on direction
  const scrollToSection = useCallback(
    (direction) => {
      if (isScrolling.current) return; // If already scrolling, do nothing
      isScrolling.current = true; // Set scrolling lock to true

      const maxSectionIndex = sectionRefs.current.length - 1;
      let newSectionIndex = currentSection.current;

      // Update the section index based on scroll direction
      if (direction === "down" && newSectionIndex < maxSectionIndex) {
        newSectionIndex++;
      } else if (direction === "up" && newSectionIndex > 0) {
        newSectionIndex--;
      }

      // Smooth scroll to the new section
      sectionRefs.current[newSectionIndex].scrollIntoView({ behavior: "smooth" });

      // Update color and current section index
      updateColorsForSection(newSectionIndex);
      currentSection.current = newSectionIndex;

      // Wait for scroll to finish before resetting scrolling lock
      setTimeout(() => {
        isScrolling.current = false; // Allow next scroll after animation
        dispatch({ type: "SET_IS_VISIBLE", payload: true });
      }, 700); // The timeout should match the smooth scroll duration
    },
    [sectionRefs, updateColorsForSection, dispatch]
  );

  // Handle scroll event for mouse wheel, allow only one section scroll per event
  const handleScroll = useCallback(
    (event) => {
      event.preventDefault(); // Prevent default scroll behavior

      if (!isScrolling.current) {
        dispatch({ type: "SET_IS_VISIBLE", payload: false }); // Hide during scroll
        event.deltaY > 0 ? scrollToSection("down") : scrollToSection("up");
      }
    },
    [scrollToSection, dispatch]
  );

  // Capture initial touch position for touch scrolling
  const handleTouchStart = useCallback((event) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  // Handle touch movement to determine scroll direction, only one section per scroll
  const handleTouchMove = useCallback(
    (event) => {
      event.preventDefault(); // Prevent default touch move behavior
      const touchEndY = event.touches[0].clientY;
      const touchDiff = touchStartY.current - touchEndY;

      // Only scroll if significant touch movement is detected and not already scrolling
      if (!isScrolling.current && Math.abs(touchDiff) > 10) {
        dispatch({ type: "SET_IS_VISIBLE", payload: false });
        touchDiff > 0 ? scrollToSection("down") : scrollToSection("up");
      }
    },
    [scrollToSection, dispatch]
  );

  // Handle keyboard navigation with arrow keys and page up/down
  const handleKeyDown = useCallback(
    (event) => {
      if (isScrolling.current) return; // Prevent scrolling multiple sections at once

      const direction = ["ArrowDown", "PageDown"].includes(event.key)
        ? "down"
        : ["ArrowUp", "PageUp"].includes(event.key)
        ? "up"
        : null;

      // Only prevent default and scroll if the direction is valid
      if (direction) {
        event.preventDefault();
        dispatch({ type: "SET_IS_VISIBLE", payload: false });
        scrollToSection(direction);
      }
    },
    [scrollToSection, dispatch]
  );

  // Simulate a loading progress bar
  const simulateLoadingProgress = useCallback(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      dispatch({ type: "SET_LOADED", payload: progress });

      if (progress >= 100) {
        clearInterval(interval);
        dispatch({ type: "SET_IS_LOADING", payload: false });
        setTimeout(() => dispatch({ type: "SET_IS_VISIBLE", payload: true }), 300);
      }
    }, 20);
  }, [dispatch]);

  // Initialize and clean up event listeners, and simulate loading on first render
  useEffect(() => {
    const eventOptions = { passive: false };

    simulateLoadingProgress(); // Start loading progress on mount

    // Attach event listeners for scroll, touch, and key events
    window.addEventListener("wheel", handleScroll, eventOptions);
    window.addEventListener("touchstart", handleTouchStart, eventOptions);
    window.addEventListener("touchmove", handleTouchMove, eventOptions);
    window.addEventListener("keydown", handleKeyDown);

    // Set initial colors on mount
    updateColorsForSection(currentSection.current);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    handleScroll,
    handleTouchStart,
    handleTouchMove,
    handleKeyDown,
    updateColorsForSection,
    dispatch,
    simulateLoadingProgress,
  ]);

  return null;
};

export default useTouchScrollController;
