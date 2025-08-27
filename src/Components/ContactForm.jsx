import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="bg-[#fdf6e3] min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl font-bold text-green-800 mb-2">Let’s Connect</h2>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        We’re here to help you on your wellness journey. Reach out to us for any
        questions, product inquiries, or personalized advice.
      </p>

      <div className="flex flex-col md:flex-row border border-gray-500 rounded-lg overflow-hidden max-w-5xl w-full">
        {/* Left Image */}
        <div className="md:w-1/3">
          <img
            src="https://i.ibb.co/PZ5gxVnK/Frame-1171275436.png"
            alt="Herbal Wellness"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-2/3 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vikas Kumar"
                  className="w-full border-b border-gray-300 focus:border-green-700 outline-none py-2"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Your Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="8743414476"
                  className="w-full border-b border-gray-300 focus:border-green-700 outline-none py-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vikass@gmail.com"
                className="w-full border-b border-gray-300 focus:border-green-700 outline-none py-2"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I want to On-board as a Doctor"
                className="w-full border-b border-gray-300 focus:border-green-700 outline-none py-2"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
