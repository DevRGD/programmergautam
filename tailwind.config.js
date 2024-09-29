/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimsonflare: "#DC143C",
        saffronburst: "#FF7700",
        lemonzest: "#FFD700",
        tealwave: "#008080",
        oceanbreeze: "#1C80D1",
        royalplum: "#6A0DAD",
        orchidbloom: "#B309AD",
      },
      backgroundImage: {
        "gradient-crimson": "radial-gradient(circle, rgba(220,20,60,0.6) 0%, rgba(220,20,60,0) 50%)", // Crimson Flare
        "gradient-saffron": "radial-gradient(circle, rgb(255, 119, 0,0.6) 0%, rgba(255,165,0,0) 50%)", // Saffron Burst
        "gradient-lemon": "radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,215,0,0) 50%)", // Lemon Zest
        "gradient-teal": "radial-gradient(circle, rgba(0,128,128,0.6) 0%, rgba(0,128,128,0) 50%)", // Teal Wave
        "gradient-ocean": "radial-gradient(circle, rgb(28, 128, 209,0.6) 0%, rgba(70,130,180,0) 50%)", // Ocean Breeze
        "gradient-plum": "radial-gradient(circle, rgba(106,13,173,0.6) 0%, rgba(106,13,173,0) 50%)", // Royal Plum
        "gradient-orchid": "radial-gradient(circle, rgb(179, 9, 173,0.6) 0%, rgba(218,112,214,0) 50%)", // Orchid Bloom
      },
    },
  },
  plugins: [],
};
