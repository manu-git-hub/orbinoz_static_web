// src/components/ServicesPage.js

import React from 'react';
import Service from './Service';
import image1 from '../assets/service1.jpg';
import image2 from '../assets/service2.jpg';
import image3 from '../assets/service3.jpg';
import image4 from '../assets/service4.jpg';

const services = [
  {
    number: '01',
    title: 'Creative Services',
    description: 'Creating compelling content and visuals for marketing campaigns. This includes graphic design, copywriting, video production, and website development.we excel in creating compelling content and visuals that drive impactful marketing campaigns. Our services span graphic design, where we craft visually stunning assets; copywriting, where we produce engaging and persuasive content; video production, where we handle everything from concept to post-production; and website development, where we build user-friendly, responsive sites.',
    image: image1
  },
  {
    number: '02',
    title: 'Advertising and Media Buying',
    description: 'we specialize in planning and executing comprehensive advertising campaigns across a diverse array of media platforms, including TV, radio, print, and online publications. Our expertise encompasses every stage of the campaign process: from strategic planning and creative development to negotiating ad placements and managing budgets. We work diligently to ensure optimal ad placement and visibility, leveraging our industry connections and negotiating skills to secure the best possible rates and positions for your ads.',
    image: image2
  },
  {
    number: '03',
    title: 'Brand Development and Management',
    description: 'we excel in developing robust brand identities, positioning strategies, and comprehensive brand guidelines designed to establish and enhance your brand’s presence in the market. Our process begins with crafting a distinctive brand identity that encapsulates your company’s core values and unique attributes. We then formulate strategic brand positioning to differentiate your brand in a competitive landscape, ensuring that it resonates strongly with your target audience.',
    image: image3
  }
  // {
  //   number: '04',
  //   title: 'Market & Advertise',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',
  //   image: image4
  // }
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto mt-10">
      {services.map((service, index) => (
        <Service
          key={service.number}
          index={index}
          number={service.number}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesPage;
