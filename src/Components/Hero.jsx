import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FFF9ED] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-[#FFF9ED]">
        <h1 className="text-2xl font-bold text-green-800 tracking-widest">AMRUTAM</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-green-800 cursor-pointer">About Us</li>
          <li className="hover:text-green-800 cursor-pointer">Onboarding</li>
          <li className="hover:text-green-800 cursor-pointer">FAQ</li>
          <li className="hover:text-green-800 cursor-pointer">Testimonials</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-16">
        {/* Left Text */}
        <div className="max-w-lg space-y-6">
          <p className="text-sm text-gray-600">Namaste, Welcome to Amrutam</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Join Amrutam –{" "}
            <span className="text-green-800">Grow Your Practice</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Connect with more patients, set your own schedule, and grow your
            Ayurvedic practice effortlessly.
          </p>
          <button className="bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-900 transition">
            Join Now
          </button>

          {/* Stats */}
          <div className="flex space-x-10 pt-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">500+</h3>
              <p className="text-sm text-gray-600">Average Active Users</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">40+</h3>
              <p className="text-sm text-gray-600">Average daily free calls</p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative mt-10 md:mt-0">
          {/* Doctors Image */}
          <img
            src="https://i.ibb.co/5hHZKQxD/Group-1000006298.png"
            alt="Doctors"
            className="w-[400px] md:w-[500px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
