'use client';

import React, { useState } from 'react';

export default function PartnerWithUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    locationType: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `${form.message}\n\nBusiness: ${form.business}\nLocation Type: ${form.locationType}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', business: '', locationType: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

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
            <div key={index} className="bg-blue-50 p-4 rounded-xl shadow-md text-base md:text-lg">
              ✅ {benefit}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">Partner Inquiry Form</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="p-3 rounded border w-full"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="p-3 rounded border w-full"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              name="business"
              type="text"
              placeholder="Business or Organization"
              className="p-3 rounded border w-full"
              value={form.business}
              onChange={handleChange}
            />
            <select
              name="locationType"
              className="p-3 rounded border w-full"
              value={form.locationType}
              onChange={handleChange}
            >
              <option value="">Type of Location</option>
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
            required
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
          </button>
          {status === 'success' && <p className="text-green-600">Your message was sent successfully!</p>}
          {status === 'error' && <p className="text-red-600">There was an error sending your message.</p>}
        </form>
      </div>
    </div>
  );
}
