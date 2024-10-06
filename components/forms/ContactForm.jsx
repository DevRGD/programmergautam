"use client";
import { useState } from "react";
import email from "@/utils/email";
import useGlobalState from "@/hooks/useGlobalState";
import Notification from "@/components/common/Notification";

export default function ContactForm() {
  const { state } = useGlobalState();
  const [activeTab, setActiveTab] = useState("hire");
  const [notification, setNotification] = useState(null);
  const [setsending, setSetsending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSetsending(true);
    const formData = new FormData(e.target);
    const data = { name: formData.get("name"), email: formData.get("email"), message: formData.get("message") };

    try {
      await email(data);
      setNotification({ message: "Message sent successfully!", type: "success" });
      setSetsending(false);
      e.target.reset();
    } catch (error) {
      setSetsending(false);
      setNotification({ message: "Failed to send message. Try again later.", type: "error" });
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 text-lg">
      {/* Tabs */}
      <div className="flex justify-center items-center mb-6">
        <button
          onClick={() => setActiveTab("hire")}
          className={`p-3 flex-1 text-center ${
            activeTab === "hire"
              ? `${state?.color?.["bg-color"]} ${state?.color?.["text-light"]}`
              : `${state?.color?.["bg-light"]} ${state?.color?.["text-color"]}`
          } rounded-l-sm transition-colors duration-300 capitalize`}
        >
          Hire Me
        </button>
        <button
          onClick={() => setActiveTab("work")}
          className={`p-3 flex-1 text-center ${
            activeTab === "work"
              ? `${state?.color?.["bg-color"]} ${state?.color?.["text-light"]}`
              : `${state?.color?.["bg-light"]} ${state?.color?.["text-color"]}`
          } rounded-r-sm transition-colors duration-300 capitalize`}
        >
          Work Together
        </button>
      </div>

      {/* Form with sliding and fading animation */}
      <div className="relative h-auto">
        {/* Hire Me Form */}
        <div
          className={`absolute inset-0 transition-all transform ${
            activeTab === "hire"
              ? "translate-x-0 opacity-100 z-10 pointer-events-auto"
              : "translate-x-10 opacity-0 z-0 pointer-events-none"
          } w-full duration-700 ease-in-out`}
        >
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
              className={`p-3 rounded-sm transition-colors duration-300 ${
                state?.color?.["bg-color"] + " " + state?.color?.["text-light"]
              }`}
            >
              {setsending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Work Together Form */}
        <div
          className={`absolute inset-0 transition-all transform ${
            activeTab === "work"
              ? "translate-x-0 opacity-100 z-10 pointer-events-auto"
              : "-translate-x-10 opacity-0 z-0 pointer-events-none"
          } w-full duration-700 ease-in-out`}
        >
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
              className={`p-3 rounded-sm transition-colors duration-300 ${
                state?.color?.["bg-color"] + " " + state?.color?.["text-light"]
              }`}
            >
              {setsending ? "Sending..." : "Start Collaboration"}
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
      )}
    </div>
  );
}
