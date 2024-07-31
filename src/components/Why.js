// src/components/Why.js

import React from 'react';

const cardData = [
  {
    title: 'Expertise in Every Facet of Marketing:',
    description: ' From initial branding exercises to successful product relaunches, we cover the entire spectrum of marketing activities. Our team combines creativity with data-driven insights to ensure your brand not only stands out but also achieves tangible results.',
    icon: 'https://cdn.lordicon.com/tdrtiskw.json' // Increase icon (filled)
  },
  {
    title: 'Collaborative Approach:',
    description: 'We believe in the power of collaboration. Our dedicated team works closely with you to understand your goals, challenges, and aspirations. This partnership ensures that our solutions are not only aligned with your vision but also resonate deeply with your audience.',
    icon: 'https://cdn.lordicon.com/zpxybbhl.json' // Assignment icon (filled)
  },
  {
    title: 'Tailored Solutions:',
    description: ' There’s no one-size-fits-all approach at Orbinoiz Media. We believe in delivering solutions that are specifically tailored to meet your business objectives. Whether you need to refresh your brand identity, launch a new campaign, or optimize your digital presence, we have the expertise to make it happen.',
    icon:'https://cdn.lordicon.com/qtqvorle.json'// Custom icon (filled)
  },
  {
    title: 'Proven Track Record:',
    description: 'Our success is measured by the success of our clients. Over the years, we’ve helped numerous brands achieve significant growth and visibility in their respective markets. Our track record speaks for itself.',
    icon: 'https://cdn.lordicon.com/jvucoldz.json' // Custom icon (filled)
  }
];

const Why = () => {
  return (
    <section className="flex flex-col items-center min-h-screen gap-12 px-4 py-16 mt-24 bg-gray-100">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          At Orbinoz Media, we are dedicated to providing top-notch marketing solutions that drive results. Here's why we stand out in the crowded marketplace:
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden text-center relative transition-all duration-500 hover:translate-y-2 w-full sm:w-80 md:w-96 h-[40vh] bg-neutral-50 rounded-lg shadow-xl flex flex-col items-center justify-evenly gap-4 p-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto">
              <lord-icon
                src={card.icon}
                trigger="loop"
                colors="primary:#121331,secondary:#800080" // Change color to purple
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl">{card.title}</span>
              <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-700">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base sm:text-lg text-center text-gray-700 max-w-2xl mx-auto mt-8 px-4">
        Choosing Orbinoz Media means choosing a partner who is dedicated to propelling your brand forward in today’s competitive landscape. Get in touch with us today to discover how we can help you achieve your marketing goals with creativity, strategy, and precision.
      </p>
    </section>
  );
};

export default Why;
