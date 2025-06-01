import React from "react";
import Footer from './Footer';

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-6 md:p-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-600">We’d love to hear from you!</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info & Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600">Reach out to us for reservations, inquiries, or assistance.</p>
          </div>

          <div>
            <p><strong>📍 Address:</strong> 123 Paradise Lane, Dream City, Island</p>
            <p><strong>📞 Phone:</strong> +1 (234) 567-8901</p>
            <p><strong>✉️ Email:</strong> info@dreamstay.com</p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241318.11609807302!2d72.7410991701756!3d19.08219783974495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a19a6bdf9%3A0x6a2dbedf3c3b7aef!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1717153800000!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg border"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
