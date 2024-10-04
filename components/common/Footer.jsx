import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex text-white sm:space-y-2 space-y-4 w-full bottom-0 fixed justify-end items-end z-10 pb-2 pr-2">
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
    </footer>
  );
}
