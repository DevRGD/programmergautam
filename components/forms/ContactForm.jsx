"use client";
import { useState } from "react";
import useGlobalState from "@/hooks/useGlobalState";

export default function ContactForm() {
  const { state } = useGlobalState();
  const [activeTab, setActiveTab] = useState("hire");

  return (
    <div className="max-w-96 min-h-fit mx-auto p-4">
      {/* Tabs */}
      <div className="text-nowrap flex justify-center items-center mb-6">
        <button
          onClick={() => setActiveTab("hire")}
          className={`p-2 sm:p-3 flex-1 text-center ${
            activeTab === "hire"
              ? state.color["bg-color"] + " " + state.color["text-light"]
              : state.color["bg-light"] + " " + state.color["text-color"]
          } rounded-l transition-colors duration-1000 secondary-font`}
        >
          Hire Me
        </button>
        <button
          onClick={() => setActiveTab("work")}
          className={`p-2 sm:p-3 flex-1 text-center ${
            activeTab === "work"
              ? state.color["bg-color"] + " " + state.color["text-light"]
              : state.color["bg-light"] + " " + state.color["text-color"]
          } rounded-r transition-colors duration-1000 secondary-font`}
        >
          Work Together
        </button>
      </div>

      {/* Form with sliding animation */}
      <div className="relative">
        <div
          className={`absolute inset-0 transition-all transform ${
            activeTab === "hire" ? "translate-x-0" : "-translate-x-20 opacity-0"
          } w-full duration-1000`}
        >
          <form action="/api/contact" method="POST" className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-sm w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-sm w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-sm w-full resize-none"
              rows="4"
              required
            />
            <button
              type="submit"
              className={`p-3 rounded-sm hover:bg-teal transition duration-1000 secondary-font ${
                state.color["bg-color"] + " " + state.color["text-light"]
              }`}
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          className={`absolute inset-0 transition-all transform ${
            activeTab === "work" ? "translate-x-0" : "translate-x-20 opacity-0"
          } w-full duration-1000`}
        >
          <form action="/api/contact" method="POST" className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-sm w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-sm w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Project"
              className="p-3 border border-gray-300 rounded-sm w-full resize-none"
              rows="4"
              required
            />
            <button
              type="submit"
              className={`p-3 rounded-sm hover:bg-teal-500 transition duration-1000 secondary-font ${
                state.color["bg-color"] + " " + state.color["text-light"]
              }`}
            >
              Start Collaboration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
