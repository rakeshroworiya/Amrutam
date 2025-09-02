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
          {[
            {
              step: "Step 1: Get your referral code",
              desc: "Contact us to receive your unique referral code.",
            },
            {
              step: "Step 2: Register on Amrutam",
              desc: "Sign up on the Amrutam Doctors app or website to join our network.",
            },
            {
              step: "Step 3: Complete KYC",
              desc: "Fill in details and upload documents for verification.",
            },
            {
              step: "Step 4: Start consulting",
              desc: "Once verified, begin offering consultations and helping patients.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-sm bg-white text-center md:text-left"
            >
              <h3 className="font-semibold text-green-800">{item.step}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <img
            src="https://i.ibb.co/gLmB1LhN/Group-1000006305.png"
            alt="Onboarding"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
          <img
            src="https://i.ibb.co/QvbcKwtL/final-1-1.png"
            alt="overlay"
            className="absolute w-70 md:w-40 lg:w-100 bottom-0 "
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
        <button className="px-6 py-2 bg-green-800 text-white rounded-md font-medium w-full md:w-auto">
          Consultations
        </button>
        <button className="px-6 py-2 border border-green-800 text-green-800 rounded-md font-medium w-full md:w-auto">
          Payment withdrawal
        </button>
        <button className="px-6 py-2 border border-green-800 text-green-800 rounded-md font-medium w-full md:w-auto">
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
