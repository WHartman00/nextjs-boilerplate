'use client';

import React, { useState } from 'react';

export default function PartnerWithUs() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      name: form.fullName.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.success) {
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000); // hide after 5s
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Host a ThinkFridge at Your Location
        </h1>
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
            'Secure, contactless checkout',
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-50 p-4 rounded-xl shadow-md text-base md:text-lg"
            >
              ✅ {benefit}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-semibold">Partner Inquiry Form</h2>

          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 rounded-lg border border-green-300 bg-green-50 text-green-800 shadow animate-fade-in">
              <span className="text-xl">✅</span>
              <span className="font-medium">
                Thank you! Your inquiry was submitted successfully.
              </span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-lg border border-red-300 bg-red-50 text-red-800 shadow animate-fade-in">
              <span className="text-xl">❌</span>
              <span className="font-medium">
                Oops! Something went wrong. Please try again later.
              </span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="p-3 rounded border w-full"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="p-3 rounded border w-full"
              required
            />
            <input
              name="organization"
              type="text"
              placeholder="Business or Organization"
              className="p-3 rounded border w-full"
            />
            <select name="locationType" className="p-3 rounded border w-full">
              <option>Type of Location</option>
              <option>Office</option>
              <option>Gym</option>
              <option>Campus</option>
              <option>Retail</option>
              <option>Other</option>
            </select>
          </div>

          <textarea
            name="message"
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
