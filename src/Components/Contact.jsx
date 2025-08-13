import React, { useState } from "react";

function Contact() {
  const handleFormSubmit = (formData) => {
    const Obj = Object.fromEntries(formData.entries())
    console.log(Obj)

  }

 
  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-6 text-white">
      <div className="w-full max-w-lg bg-gray-900 rounded-lg p-8 border border-gray-700 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form className="flex flex-col gap-5" action={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 hover:opacity-90 transition-all rounded-lg py-3 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
