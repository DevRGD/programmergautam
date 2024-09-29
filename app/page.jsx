"use client";
import React, { useEffect, useRef, useCallback } from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useGlobalContext } from "@/hooks/globalState"; // Importing the custom hook

export default function Home() {
  const { dispatch } = useGlobalContext(); // Use context to dispatch color changes
  const sectionRefs = useRef([]); // Array to hold section refs
  const currentSection = useRef(0); // Track the current section index
  const isScrolling = useRef(false); // Prevent multiple scrolls

  // Array of color objects for each section
  const colors = [
    {
      "text-color": "text-tealwave", // Text color for teal
      "bg-color": "bg-tealwave", // Background color for teal
      "text-light": "text-teal-50", // Lighter teal for text highlight
      "bg-light": "bg-teal-50", // Light teal for background contrast
      gradient: "bg-gradient-teal", // Gradient background for teal
    },
    {
      "text-color": "text-royalplum", // Text color for royal plum
      "bg-color": "bg-royalplum", // Background color for royal plum
      "text-light": "text-purple-50", // Lighter purple for text highlight
      "bg-light": "bg-purple-50", // Light purple for background contrast
      gradient: "bg-gradient-plum", // Gradient background for royal plum
    },
    {
      "text-color": "text-oceanbreeze", // Text color for ocean
      "bg-color": "bg-oceanbreeze", // Background color for ocean
      "text-light": "text-sky-50", // Lighter sky blue for text highlight
      "bg-light": "bg-sky-50", // Light sky blue for background contrast
      gradient: "bg-gradient-ocean", // Gradient background for ocean
    },
    {
      "text-color": "text-crimsonflare", // Text color for crimson
      "bg-color": "bg-crimsonflare", // Background color for crimson
      "text-light": "text-rose-50", // Lighter rose for text highlight
      "bg-light": "bg-rose-50", // Light rose for background contrast
      gradient: "bg-gradient-crimson", // Gradient background for crimson
    },
    {
      "text-color": "text-saffronburst", // Text color for saffron
      "bg-color": "bg-saffronburst", // Background color for saffron
      "text-light": "text-orange-50", // Lighter orange for text highlight
      "bg-light": "bg-orange-50", // Light orange for background contrast
      gradient: "bg-gradient-saffron", // Gradient background for saffron
    },
    {
      "text-color": "text-orchidbloom", // Text color for orchid
      "bg-color": "bg-orchidbloom", // Background color for orchid
      "text-light": "text-pink-50", // Lighter pink for text highlight
      "bg-light": "bg-pink-50", // Light pink for background contrast
      gradient: "bg-gradient-orchid", // Gradient background for orchid
    },
    {
      "text-color": "text-lemonzest", // Text color for lemon
      "bg-color": "bg-lemonzest", // Background color for lemon
      "text-light": "text-yellow-50", // Lighter yellow for text highlight
      "bg-light": "bg-yellow-50", // Light yellow for background contrast
      gradient: "bg-gradient-lemon", // Gradient background for lemon
    },
  ];

  const updateColorsForSection = (sectionIndex) => {
    const newColors = colors[sectionIndex]; // Get the color object for the section
    setTimeout(() => {
      dispatch({ type: "SET_COLORS", payload: newColors }); // Update the global state
    }, 300);
  };

  const scrollToSection = useCallback((direction) => {
    if (isScrolling.current) return; // Prevent multiple scrolls at once

    isScrolling.current = true; // Set scrolling to true

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
        updateColorsForSection(currentSection.current); // Update the color based on the section
      }
    }

    // Reset scrolling after a short delay to allow for smooth scroll
    setTimeout(() => {
      isScrolling.current = false;
    }, 700); // Adjust the delay as needed for smoother experience
  }, []);

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault(); // Prevent default scrolling behavior

      if (event.deltaY > 0) {
        // Scroll down
        scrollToSection("down");
      } else {
        // Scroll up
        scrollToSection("up");
      }
    },
    [scrollToSection]
  );

  const handleKeyDown = useCallback(
    (event) => {
      // Check for arrow keys or page up/down keys
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault(); // Prevent default key behavior
        scrollToSection("down");
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault(); // Prevent default key behavior
        scrollToSection("up");
      }
    },
    [scrollToSection]
  );

  useEffect(() => {
    // Attach the scroll and keydown event listeners

    const options = { passive: false };
    window.addEventListener("wheel", handleScroll, options);
    window.addEventListener("keydown", handleKeyDown);

    // Set initial colors based on the first section
    updateColorsForSection(currentSection.current);

    return () => {
      // Clean up event listeners
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleScroll, handleKeyDown]); // Dependencies now include the callback functions

  return (
    <>
      <section ref={(el) => (sectionRefs.current[0] = el)} className="h-screen">
        <About />
      </section>
      <section ref={(el) => (sectionRefs.current[1] = el)} className="h-screen">
        <Skills />
      </section>
      <section ref={(el) => (sectionRefs.current[2] = el)} className="h-screen">
        <Projects />
      </section>
      <section ref={(el) => (sectionRefs.current[3] = el)} className="h-screen">
        <Contact />
      </section>
    </>
  );
}
