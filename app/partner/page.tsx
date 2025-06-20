import React from 'react';

export default function PartnerWithUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Host a ThinkFridge at Your Location</h1>
        <p className="text-lg md:text-xl text-center mb-10">
          Boost satisfaction and convenience with a smart, self-service fridge tailored to your space.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            'Increase employee satisfaction',
            '24/7 food access without staff',
            'No upfront cost for hosts',
            'Fresh, healthy meals daily',
            'Smart data to personalize menu',
            'Secure, contactless checkout'
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-50 p-4 rounded-xl shadow-md text-base md:text-lg"
            >
              ✅ {benefit}
            </div>
          ))}
        </div>

        <form className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">Partner Inquiry Form</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded border w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded border w-full"
              required
            />
            <input
              type="text"
              placeholder="Business or Organization"
              className="p-3 rounded border w-full"
            />
            <select className="p-3 rounded border w-full">
              <option>Type of Location</option>
              <option>Office</option>
              <option>Gym</option>
              <option>Campus</option>
              <option>Retail</option>
              <option>Other</option>
            </select>
          </div>
          <textarea
            placeholder="Tell us about your space or ask a question..."
            className="w-full p-3 rounded border h-28"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
