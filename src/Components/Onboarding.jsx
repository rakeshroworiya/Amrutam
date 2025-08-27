import React from "react";

const Onboarding = () => {
  return (
    <div className="bg-[#FFF9ED] py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Our Circle of Care
        </h2>
        <p className="text-gray-600 mt-3">
          Becoming a part of Amrutam is simple
        </p>
      </div>

      {/* Steps + Image */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Steps */}
        <div className="space-y-6">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-green-800">
              Step 1: Get your referral code
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Contact us to receive your unique referral code.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-green-800">
              Step 2: Register on Amrutam
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Sign up on the Amrutam Doctors app or website to join our network.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-green-800">
              Step 3: Complete KYC
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Fill in details and upload documents for verification.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-green-800">
              Step 4: Start consulting
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Once verified, begin offering consultations and helping patients.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center ">
          <img
            src="https://i.ibb.co/gLmB1LhN/Group-1000006305.png"
            alt="Onboarding"
            className="w-[400px] md:w-[500px] relative"
          />
          <img src="https://i.ibb.co/QvbcKwtL/final-1-1.png" alt="" className="absolute w-100 mt-10" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-12">
        <button className="px-6 py-2 bg-green-800 text-white rounded-md font-medium">
          Consultations
        </button>
        <button className="px-6 py-2 border border-green-800 text-green-800 rounded-md font-medium">
          Payment withdrawal
        </button>
        <button className="px-6 py-2 border border-green-800 text-green-800 rounded-md font-medium">
          Schedule
        </button>
      </div>

      {/* Mobile Screens */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Value Your Practice */}
        <div>
          <h4 className="mt-4 font-semibold text-green-800">
            Value Your Practice
          </h4>
          <img
            src="https://i.ibb.co/sdxKmw3J/iphone-15.png"
            alt="Value Your Practice"
            className="mx-auto w-40 md:w-52"
          />
        </div>

        {/* Today’s Healing Journey */}
        <div>
          <img
            src="https://i.ibb.co/wFbS7YQj/iphone-15-2.png"
            alt="Appointments"
            className="mx-auto w-40 md:w-52"
          />
          <h4 className="mt-4 font-semibold text-green-800">
            Today’s Healing Journey
          </h4>
        </div>

        {/* Consultation Details */}
        <div>
          <h3 className="mt-4 font-semibold text-green-800">
            Consultation Details
          </h3>
          <img
            src="https://i.ibb.co/CsQKSnsz/iphone-15-1.png"
            alt="Consultation Details"
            className="mx-auto w-40 md:w-52"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-green-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-900 transition">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
