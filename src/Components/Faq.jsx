import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is Amrutam?", answer: "Amrutam is a global wellness platform that connects practitioners and users." },
    { question: "How does Amrutam help me grow as a practitioner?", answer: "Amrutam helps by offering visibility, community support, and tools to grow your practice." },
    { question: "How do I become a part of Amrutam Doctor?", answer: "You can join by registering and submitting your documents through the Amrutam platform." },
    { question: "What is Amrutam Global as a platform?", answer: "Amrutam Global is a space for wellness practitioners and users to connect and collaborate." },
    { question: "What documents do I need to provide?", answer: "Basic ID, medical certificates, and relevant documents are required." },
    { question: "Is there a fee to join Amrutam?", answer: "Currently, Amrutam may or may not charge based on plan type. Please check the platform for details." },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fff8e6] min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base text-center">
          Find quick answers to common questions to help you navigate the app and its features easily.
        </p>

        {/* FAQ Section */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button
                className="flex justify-between items-center w-full text-base sm:text-lg font-medium text-gray-800"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="text-green-700 text-lg sm:text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="mt-8 w-full sm:w-auto bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
