import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Pooja Deshmukh",
      title: "BAMS",
      rating: 4,
      img: "https://i.ibb.co/RMmfGtY/Ellipse-2282.png",
      text: "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
    },
    {
      id: 2,
      name: "Dr. Rajesh Iyer",
      title: "Ayurvedic Practitioner",
      rating: 4,
      img: "https://i.ibb.co/RMmfGtY/Ellipse-2282.png",
      text: "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."
    },
    {
      id: 3,
      name: "Dr. Ananya Sharma",
      title: "BAMS",
      rating: 4,
      img: "https://i.ibb.co/RMmfGtY/Ellipse-2282.png",
      text: "As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products."
    }
  ];

  return (
    <div className="bg-[#FFF9ED] py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What other Ayurvedic Doctors are Saying
        </h2>
        <p className="text-gray-600 mt-3">
          Trusted by experts — Hear what Ayurvedic doctors say about Amrutam!
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#FEEFCB] p-6 rounded-lg shadow-sm"
          >
            {/* Doctor Info */}
            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full border border-gray-300"
              />
              <div>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.title}</p>
                {/* Rating */}
                <div className="flex text-yellow-500 text-sm mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < t.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 mt-4 text-sm leading-relaxed">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
