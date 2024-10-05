"use client";
import { useState } from "react";
import useGlobalState from "@/hooks/useGlobalState";

export default function ContactForm() {
  const { state } = useGlobalState();
  const [activeTab, setActiveTab] = useState("hire");

  return (
    <div className="max-w-fit min-h-fit mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-4 text-nowrap">
        <button
          onClick={() => setActiveTab("hire")}
          className={`p-2 flex-1 text-center ${
            activeTab === "hire" ? "bg-royalblue text-white" : "bg-gray-100 text-gray-700"
          } rounded-l transition-colors duration-300`}
        >
          Hire Me
        </button>
        <button
          onClick={() => setActiveTab("work")}
          className={`p-2 flex-1 text-center ${
            activeTab === "work" ? "bg-royalblue text-white" : "bg-gray-100 text-gray-700"
          } rounded-r transition-colors duration-300`}
        >
          Work Together
        </button>
      </div>

      {/* Form with sliding animation */}
      <div className="relative">
        <div
          className={`absolute inset-0 transition-all transform ${
            activeTab === "hire" ? "translate-x-0" : "-translate-x-20 opacity-0"
          } w-full duration-500`}
        >
          <form action="/api/contact" method="POST" className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded"
              rows="4"
              required
            />
            <button type="submit" className="p-2 bg-royalblue text-white rounded hover:bg-teal">
              Send Message
            </button>
          </form>
        </div>

        <div
          className={`absolute inset-0 transition-all transform ${
            activeTab === "work" ? "translate-x-0" : "translate-x-20 opacity-0"
          } w-full duration-500`}
        >
          <form action="/api/contact" method="POST" className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Project"
              className="p-2 border border-gray-300 rounded"
              rows="4"
              required
            />
            <button type="submit" className="p-2 bg-teal-600 text-white rounded hover:bg-teal">
              Start Collaboration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
