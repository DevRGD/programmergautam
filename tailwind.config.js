/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: "#4169E1",
        seagreen: "#2E8B57",
        // pink: "#FFC0CB",
        red: "#FF6347",
        teal: "#008080",
        magenta: "#FF00FF",
        purple: "#800080",
        lavender: "#E6E6FA",
      },
      backgroundImage: {
        "gradient-light": "radial-gradient(circle, rgba(65,105,225,0.5) 0%, rgba(65,105,225,0) 50%)",
        "gradient-seagreen": "radial-gradient(circle, rgba(46,139,87,0.5) 0%, rgba(46,139,87,0) 50%)",
        "gradient-pink": "radial-gradient(circle, rgba(255,192,203,0.5) 0%, rgba(255,192,203,0) 50%)",
        "gradient-red": "radial-gradient(circle, rgba(255,99,71,0.5) 0%, rgba(255,99,71,0) 50%)",
        "gradient-teal": "radial-gradient(circle, rgba(0,128,128,0.5) 0%, rgba(0,128,128,0) 50%)",
        "gradient-magenta": "radial-gradient(circle, rgba(255,0,255,0.5) 0%, rgba(255,0,255,0) 50%)",
        "gradient-purple": "radial-gradient(circle, rgba(128,0,128,0.5) 0%, rgba(128,0,128,0) 50%)",
        "gradient-lavender": "radial-gradient(circle, rgba(230,230,250,0.5) 0%, rgba(230,230,250,0) 50%)",
      },
    },
  },
  plugins: [],
};
