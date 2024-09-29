"use client";
import { useEffect, useRef } from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const sectionRefs = useRef([]); // Array to hold section refs
  const currentSection = useRef(0); // Track the current section index
  const isScrolling = useRef(false); // Prevent multiple scrolls

  const scrollToSection = (direction) => {
    if (isScrolling.current) return; // Prevent multiple scrolls at once

    isScrolling.current = true; // Set scrolling to true

    if (direction === "down") {
      if (currentSection.current < sectionRefs.current.length - 1) {
        currentSection.current++;
        sectionRefs.current[currentSection.current].scrollIntoView({ behavior: "smooth" });
      }
    } else if (direction === "up") {
      if (currentSection.current > 0) {
        currentSection.current--;
        sectionRefs.current[currentSection.current].scrollIntoView({ behavior: "smooth" });
      }
    }

    // Reset scrolling after a short delay to allow for smooth scroll
    setTimeout(() => {
      isScrolling.current = false;
    }, 700); // Adjust the delay as needed for smoother experience
  };

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent default scrolling behavior

    if (event.deltaY > 0) {
      // Scroll down
      scrollToSection("down");
    } else {
      // Scroll up
      scrollToSection("up");
    }
  };

  const handleKeyDown = (event) => {
    // Check for arrow keys or page up/down keys
    if (event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault(); // Prevent default key behavior
      scrollToSection("down");
    } else if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault(); // Prevent default key behavior
      scrollToSection("up");
    }
  };

  useEffect(() => {
    // Attach the scroll and keydown event listeners
    const options = { passive: false };
    window.addEventListener("wheel", handleScroll, options);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Clean up event listeners
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
