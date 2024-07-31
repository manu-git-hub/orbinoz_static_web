// src/components/ContactForm.js

import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:px-0">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative"
        />
      </div>
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </p>
      </div>
      <form onSubmit={sendEmail} className="mx-auto mt-12 max-w-md sm:mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm"
                >
                  <option>IND</option>
                  <option>US</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 data-[checked]:bg-teal-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-black">
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            type="submit"
            className="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-10 w-40 text-center rounded-full bg-neutral-800 p-2 font-extrabold hover:bg-green-600"
          >
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-32 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-28 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-sky-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-20 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-purple-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-yellow-400"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-blue-600"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 text-center left-2">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
 