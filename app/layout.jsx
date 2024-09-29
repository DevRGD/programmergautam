import "./globals.css";
import { Caveat } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { GlobalStateProvider } from "@/hooks/globalState";

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
  metadataBase: new URL("https://programmergautam.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <GlobalStateProvider>
      <html lang="en" className={`${handwriting.className} scroll-smooth`}>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </GlobalStateProvider>
  );
}
