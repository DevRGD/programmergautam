import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="p-4 flex justify-between items-center">
      <p className="text-slate-500">© {new Date().getFullYear()} Programmer Gautam.</p>
      <div className="flex space-x-4">
        <Link href="https://github.com/programmergautam" passHref>
          <FaGithub className="text-black" />
        </Link>
        <Link href="https://www.linkedin.com/in/programmergautam/" passHref>
          <FaLinkedin className="text-blue-800" />
        </Link>
        <Link href="https://twitter.com/programmergautam" passHref>
          <FaXTwitter className="text-black" />
        </Link>
        <Link href="https://www.facebook.com/programmergautam" passHref>
          <FaFacebook className="text-blue-600" />
        </Link>
        <Link href="https://www.instagram.com/programmergautam" passHref>
          <FaInstagram className="text-pink-500" />
        </Link>
      </div>
    </footer>
  );
}
