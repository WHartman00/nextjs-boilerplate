'use client';
import React, { useState } from 'react';

export default function PartnerWithUs() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: form.fullName.value,
      email: form.email.value,
      organization: form.organization.value,
      locationType: form.locationType.value,
      message: form.message.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        console.error('Server response:', result.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Fetch error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Partner With ThinkFridge
        </h1>
        <p className="text-lg md:text-xl text-center mb-10">
          Turn your space into a smart retail experience — and earn passive income with zero hassle.
        </p>
        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>We install a smart, refrigerated ThinkFridge at your location.</li>
            <li>Customers tap, take what they want, and walk away — no checkout needed.</li>
            <li>ThinkFridge tracks every sale and restocks automatically.</li>
          </ul>
        </section>
        {/* Revenue Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Earn Without the Effort</h2>
          <p className="text-gray-700 mb-4">
            As a location partner, you receive a percentage of every sale — without lifting a finger.
            We handle installation, restocking, inventory, and maintenance.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Earn revenue from every product sold</li>
            <li>Zero overhead or staffing required</li>
            <li>Fully managed by the ThinkFridge team</li>
            <li>Typical revenue share: <strong>10–15% of gross sales</strong></li>
          </ul>
        </section>
        {/* Ideal Locations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Great Locations for ThinkFridge</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Gyms and fitness centers</li>
            <li>Office buildings</li>
            <li>College campuses</li>
            <li>Co-working spaces</li>
            <li>Industrial parks and warehouses</li>
          </ul>
        </section>
        {/* Call to Action */}
        <p className="text-lg font-semibold text-center mt-10">
          Ready to unlock new revenue for your space?
        </p>
        <p className="text-gray-600 text-center mb-10">
          Fill out the form and our team will be in touch within 48 hours.
        </p>
        {/* Inquiry Form */}
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">Partner Inquiry Form</h2>
          {status === 'success' && (
            <div className="bg-green-100 text-green-800 border border-green-300 px-4 py-3 rounded text-sm">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-100 text-red-800 border border-red-300 px-4 py-3 rounded text-sm">
              ❌ Something went wrong. Please try again later. Check console for details.
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
              <option value="">Type of Location</option>
              <option value="Office">Office</option>
              <option value="Gym">Gym</option>
              <option value="Campus">Campus</option>
              <option value="Retail">Retail</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Tell us about your space or ask a question..."
            className="w-full p-3 rounded border h-28"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}
