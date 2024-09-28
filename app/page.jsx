"use client";
import { useEffect, useRef } from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  const sectionRefs = useRef([]); // Array to hold section refs
  const currentSection = useRef(0); // Track the current section index
  const isScrolling = useRef(false); // Prevent multiple scrolls

  const handleScroll = (event) => {
    // Prevent default scroll behavior
    event.preventDefault();

    // Ensure that scrolling is not already in progress
    if (isScrolling.current) return;

    isScrolling.current = true; // Set scrolling to true

    // Determine scroll direction
    if (event.deltaY > 0) {
      // Scrolling down
      if (currentSection.current < sectionRefs.current.length - 1) {
        currentSection.current++;
        sectionRefs.current[currentSection.current].scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scrolling up
      if (currentSection.current > 0) {
        currentSection.current--;
        sectionRefs.current[currentSection.current].scrollIntoView({ behavior: "smooth" });
      }
    }

    // Reset scrolling after a short delay
    setTimeout(() => {
      isScrolling.current = false; // Allow scrolling again
    }, 700); // Adjust the delay as needed for smoother experience
  };

  useEffect(() => {
    // Attach the scroll event listener as non-passive
    const options = { passive: false };
    window.addEventListener("wheel", handleScroll, options);

    return () => {
      // Clean up the event listener
      window.removeEventListener("wheel", handleScroll);
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
