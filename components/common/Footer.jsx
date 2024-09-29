import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-10 flex flex-col-reverse sm:flex-row justify-between items-center text-white space-y-2 fixed w-full bottom-0 z-50">
      {/* Copyright Section */}
      <p className="text-center sm:text-left">© {new Date().getFullYear()} Gautam Das</p>

      {/* Social Icons Section */}
      <div className="flex space-x-4 sm:space-x-2 justify-center sm:justify-end">
        {/* Github */}
        <Link href="https://github.com/programmergautam" passHref target="_blank" rel="noopener noreferrer">
          <div className="p-2 transition-transform transform hover:scale-125">
            <FaGithub className="text-xl text-black" />
          </div>
        </Link>

        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/programmergautam/" passHref target="_blank" rel="noopener noreferrer">
          <div className="p-2 transition-transform transform hover:scale-125">
            <FaLinkedin className="text-xl text-blue-700" />
          </div>
        </Link>

        {/* Twitter */}
        <Link href="https://twitter.com/programmergautam" passHref target="_blank" rel="noopener noreferrer">
          <div className="p-2 transition-transform transform hover:scale-125">
            <FaXTwitter className="text-xl text-black" />
          </div>
        </Link>

        {/* Facebook */}
        <Link href="https://www.facebook.com/programmergautam" passHref target="_blank" rel="noopener noreferrer">
          <div className="p-2 transition-transform transform hover:scale-125">
            <FaFacebook className="text-xl text-blue-600" />
          </div>
        </Link>

        {/* Instagram */}
        <Link href="https://www.instagram.com/programmergautam" passHref target="_blank" rel="noopener noreferrer">
          <div className="p-2 transition-transform transform hover:scale-125">
            <FaInstagram className="text-xl text-rose-700" />
          </div>
        </Link>
      </div>
    </footer>
  );
}
