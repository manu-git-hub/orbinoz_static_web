// src/components/Testimonials.js

import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-20 bg-gray-100 py-20 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">"The marketing team at this company is amazing! They helped us grow our business significantly."</p>
          <p className="font-bold">- Client A</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">"Their SEO services are top-notch. Our website's traffic has increased dramatically."</p>
          <p className="font-bold">- Client B</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">"We love the content they create for us. It's always engaging and on-brand."</p>
          <p className="font-bold">- Client C</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
