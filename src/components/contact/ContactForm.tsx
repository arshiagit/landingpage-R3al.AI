"use client";

import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl text-white font-medium mb-6">Send us a message</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-white mb-2">Company (Optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your company"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="How can we help you?"
          />
        </div>
      </div>
      
      {formStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
          <p className="text-red-400">{errorMessage || 'An error occurred. Please try again.'}</p>
        </div>
      )}
      
      {formStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg">
          <p className="text-green-400">Your message has been sent successfully! We&apos;ll get back to you soon.</p>
        </div>
      )}
      
      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className={`w-full py-3 px-6 bg-primary text-white font-medium rounded-lg transition-all ${
          formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'
        }`}
      >
        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 