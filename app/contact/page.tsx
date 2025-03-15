"use client";

import React from 'react';
import ContactForm from '@/src/components/contact/ContactForm';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden pt-24 pb-20">
      <div className="max-w-screen-xl mx-auto md:px-0 px-6">
        <div className="text-center mb-12">
          <div className="w-fit max-w-fit px-8 py-1.5 bg-black border border-solid border-white/20 rounded-full text-sm text-white mx-auto">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-white">
            Get in <span className="bg-gradient-to-b from-white to-purple_600 text-transparent bg-clip-text">Touch</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have questions about our AI solutions? Ready to transform your business with cutting-edge technology? 
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl p-8">
            <ContactForm />
          </div>
          
          <div className="flex flex-col space-y-8">
            <div className="bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl p-8">
              <h3 className="text-2xl text-white font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">arshia@r3al.ai</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#2753FD]/10 border border-solid border-primary/25 rounded-2xl p-8">
              <h3 className="text-2xl text-white font-medium mb-4">Our Mission</h3>
              <p className="text-gray-300">
                At R3al.AI, we're dedicated to making advanced AI accessible and effective for businesses of all sizes. 
                Our team is committed to providing solutions that adapt to your specific needs and drive real results.
              </p>
            </div>
            
            <Image 
              src="/assets/images/contact-illustration.svg" 
              alt="Contact Illustration"
              width={500}
              height={300}
              className="w-full rounded-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
} 