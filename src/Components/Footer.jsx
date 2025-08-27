import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d9d9c1] text-gray-800 py-10 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-green-900 tracking-widest">AMRUTAM</h2>
          <h3 className="text-lg font-semibold text-green-800 mt-4">Get in touch</h3>
          <p className="mt-2 text-gray-700">support@amrutam.global</p>
          <p className="mt-2 text-gray-700">
            Amrutam Pharmaceuticals Pvt Ltd.,<br />
            Chitragupt ganj, Nai Sadak, Lashkar,<br />
            Gwalior - 474001
          </p>
          <p className="mt-2 font-medium">+91 9713171999</p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-800">Information</h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-green-800">About Us</a></li>
            <li><a href="#" className="hover:text-green-800">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-green-800">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-800">Privacy Policy for Mobile App</a></li>
            <li><a href="#" className="hover:text-green-800">Shipping and Return Policy</a></li>
            <li><a href="#" className="hover:text-green-800">International Delivery</a></li>
            <li><a href="#" className="hover:text-green-800">For Business, Hotels and Resorts</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-800">Follow Us</h3>
          <div className="flex space-x-4 mt-4 text-white">
            <a href="#" className="bg-green-800 p-3 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-green-800 p-3 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-green-800 p-3 rounded-full"><FaYoutube /></a>
            <a href="#" className="bg-green-800 p-3 rounded-full"><FaTwitter /></a>
            <a href="#" className="bg-green-800 p-3 rounded-full"><FaLinkedinIn /></a>
            <a href="#" className="bg-green-800 p-3 rounded-full"><FaPinterestP /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
