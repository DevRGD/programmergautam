"use client";
import { useEffect } from "react";

export default function Notification({ message, type, onClose }) {
  // Automatically close the notification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 p-4 rounded-md shadow-lg text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span className="mr-4">{message}</span>
        <button onClick={onClose} className="text-xl font-bold">
          &times;
        </button>
      </div>
    </div>
  );
}
