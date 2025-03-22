import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 py-15 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500">Beauty Bliss</h2>
          <p className="mt-2 text-gray-600">
            Discover the best beauty products curated just for you!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">Shop</a></li>
            <li><a href="#" className="hover:text-pink-500">About Us</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Beauty Bliss. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
