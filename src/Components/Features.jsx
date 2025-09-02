import React from "react";

const Features = () => {
  return (
    <div className="bg-[#FFF9ED] py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Doctors Choose Us?
        </h2>
        <p className="text-gray-600 mt-3">
          Unlock the Benefits of Smarter Healthcare Management and Patient Care
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-16 space-y-20">
        {/* 1. Instant FREE 5-Mins Call */}
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <img
            src="https://i.ibb.co/dJQ8zdVk/Group-1000006309.png"
            alt="Free Call"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl font-semibold text-green-800">
              Instant FREE 5–Mins Call
            </h3>
            <p className="text-gray-600 mt-2">
              We understand the importance of building trust with your patients.
              That’s why Amrutam offers a free 5–minute call, helping you connect
              instantly and foster lasting patient relationships with ease.
            </p>
          </div>
        </div>

        {/* 2. Forum for Meaningful Connections */}
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="text-center md:text-left max-w-lg order-2 md:order-1">
            <h3 className="text-xl font-semibold text-green-800">
              Forum for Meaningful Connections
            </h3>
            <p className="text-gray-600 mt-2">
              The Amrutam Forum helps you engage with patients, answer questions,
              and share deeper Ayurvedic wisdom through discussions and thoughts.
            </p>
          </div>
          <img
            src="https://i.ibb.co/sp4L9svh/Group-1000006311.png"
            alt="Forum"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg order-1 md:order-2"
          />
        </div>

        {/* 3. Choose Your Session Mode */}
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <img
            src="https://i.ibb.co/c59Fn4x/Group-1000006313.png"
            alt="Session Mode"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl font-semibold text-green-800">
              Choose Your Session Mode
            </h3>
            <p className="text-gray-600 mt-2">
              Connect with patients via Instant Chat, Instant Call, or Schedule
              Video call. Flexible and personalized care for every individual.
            </p>
          </div>
        </div>

        {/* 4. Smart Wallet */}
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="text-center md:text-left max-w-lg order-2 md:order-1">
            <h3 className="text-xl font-semibold text-green-800">Smart Wallet</h3>
            <p className="text-gray-600 mt-2">
              With Amrutam Wallet, you can withdraw payments securely.
              A one-time password is sent during withdrawals for added security.
            </p>
          </div>
          <img
            src="https://i.ibb.co/BHDqSg5h/Group-1000006316.png"
            alt="Wallet"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg order-1 md:order-2"
          />
        </div>

        {/* 5. Flexible Work Timing */}
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <img
            src="https://i.ibb.co/0pGdpDTK/Group-1000006313-1.png"
            alt="Flexible Work"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl font-semibold text-green-800">
              Flexible Work Timing
            </h3>
            <p className="text-gray-600 mt-2">
              Manage your availability easily with the toggle in the doctor’s app.
              Patients can book consultations when you’re free, ensuring a
              stress-free and balanced practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
