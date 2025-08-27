import React from "react";
import { FaLeaf, FaDollarSign, FaPhone, FaWallet } from "react-icons/fa";

const PromoBanner = () => {
  return (
    <div className="bg-[#FFF4DC] flex flex-col md:flex-row items-center justify-around px-10 py-12">
      {/* Left Section */}
      <div className="max-w-lg space-y-6">
        <h2 className="text-3xl font-bold text-green-800">
          Get Started Today – <br /> Download the App Now!
        </h2>
        <p className="text-gray-700">
          Simplify consultations, manage patients, and grow your practice—all in
          one place.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow">
            <FaLeaf className="text-green-600 text-xl" />
            <span className="text-gray-800 text-sm">
              Build Trust and Community with Forum
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow">
            <FaDollarSign className="text-green-600 text-xl" />
            <span className="text-gray-800 text-sm">
              Earn More with Pay Per Conversation
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow">
            <FaPhone className="text-green-600 text-xl" />
            <span className="text-gray-800 text-sm">
              Attract Patients with 5-Minute Free Call
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow">
            <FaWallet className="text-green-600 text-xl" />
            <span className="text-gray-800 text-sm">
              Instant Access to Your Earnings with Wallet
            </span>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex gap-4 mt-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-12"
          />
        </div>
      </div>

      {/* Right Section (Phone Mockup) */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://i.ibb.co/C5pqjRw1/Group-1000006299.png"
          alt="App Screenshot"
          className="max-w-sm drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default PromoBanner;
