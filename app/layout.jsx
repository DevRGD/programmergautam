import "./globals.css";
import { Inter, Caveat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const handwriting = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Programmer Gautam | Freelance Full Stack Developer",
  description:
    "Experienced Freelance Full Stack Developer skilled in MERN stack, building scalable web applications using React, Next.js, Node.js, and MongoDB.",
  openGraph: {
    title: "Programmer Gautam | Full Stack Developer",
    description: "Portfolio of Programmer Gautam, showcasing skills, experience, and projects.",
    url: "https://programmergautam.vercel.app/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Full Stack Developer Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${handwriting.className}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
