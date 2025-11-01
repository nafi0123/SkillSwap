import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and About */}
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={Logo} alt="SkillSwap logo" className="h-10 w-10" />
              <span className="font-semibold text-white text-xl tracking-tight">
                SkillSwap
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empower your skills. Connect with learners and professionals around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#00C896] mb-3 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#00C896] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:text-[#00C896] transition-colors"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#00C896] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#00C896] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-[#00C896] mb-3 text-lg">
              Follow Us
            </h3>
            <div className="flex gap-4 text-[#00C896] text-lg">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          <p>
            Built with <span className="text-[#00C896] font-semibold">React</span> 💚
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
