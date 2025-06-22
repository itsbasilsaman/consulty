'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('[data-animate]');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);
    setIsError(false);

    // Simulate form submission
    setTimeout(() => {
      const shouldError = Math.random() > 0.8; // 20% chance of error for demo
      if (shouldError) {
        setIsError(true);
      } else {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    }, 1000);
  };

  return (
    <>
      <section className="inner-hero-section" ref={sectionRef}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="contact-wrapper-1">
            <div 
              data-animate
              className="contact-inner-left-block transition-all duration-500 ease-out translate-y-6 opacity-0"
            >
              <h1 className="banner-section-title hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300">
                We're here to help you on your journey.
              </h1>
              <p className="section-title-p contact group">
                Want to learn more about Healix, our support team is ready to help.
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </p>
            </div>
            <div 
              data-animate
              className="contact-inner-right-block transition-all duration-500 ease-out translate-y-6 opacity-0 delay-100"
            >
              <div className="form-block-2 w-form">
                <form
                  onSubmit={handleSubmit}
                  name="email-form"
                  data-name="Email Form"
                  id="email-form"
                  className="form space-y-6"
                >
                  <div className="input-form style-1">
                    <label htmlFor="F.-Name" className="field-label">Full name *</label>
                    <input
                      className="text-field style-1 w-input focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      maxLength={256}
                      name="fullName"
                      placeholder="Enter your full name"
                      type="text"
                      id="F.-Name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-form style-1">
                    <label htmlFor="Email-Address" className="field-label">Email address *</label>
                    <input
                      className="text-field style-1 w-input focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      maxLength={256}
                      name="email"
                      placeholder="Enter your full address"
                      type="email"
                      id="Email-Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-form style-1">
                    <label htmlFor="Phone" className="field-label">Phone*</label>
                    <input
                      className="text-field style-1 w-input focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      maxLength={256}
                      name="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                      id="Phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-form style-1 textarea-input-form">
                    <label htmlFor="Message-5" className="field-label"><strong>Message *</strong></label>
                    <textarea
                      required
                      placeholder="Write your message here"
                      maxLength={5000}
                      id="Message-5"
                      name="message"
                      className="textarea w-input focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="submit-button contact">
                    <button
                      type="submit"
                      className="submit-button button w-button flex items-center gap-2 hover:gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
                    >
                      Send your message
                      <img
                        src="/arrow-right.svg"
                        loading="lazy"
                        alt=""
                        className="submit-button-icon"
                      />
                    </button>
                  </div>
                </form>

                {isSubmitted && (
                  <div className="w-form-done mt-4 p-4 bg-green-100 text-green-700 rounded-lg animate-fadeIn">
                    Thank you! Your submission has been received!
                  </div>
                )}
                {isError && (
                  <div className="w-form-fail mt-4 p-4 bg-red-100 text-red-700 rounded-lg animate-fadeIn">
                    Oops! Something went wrong while submitting the form.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-padding-sm">
        <div className="w-layout-blockcontainer container w-container">
          <div className="contact-wrapper-2 grid md:grid-cols-2 gap-8">
            <div
              className="contact-content-block"
            >
              <div className="contact-top-text">
                <h3 className="group">
                  General Inquiries
                  <span className="block w-0 group-hover:w-full h-0.5 bg-primary-500 transition-all duration-300 mt-1"></span>
                </h3>
                <p className="hover:text-gray-700 transition-colors duration-300">
                  Interested in learning more about TaskHub? Our sales team is here to provide you with a tailored demo.
                </p>
              </div>
              <div className="contact-list-wrapper mt-6 space-y-4">
                <div className="contact-item p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  <p className="contact-item-title font-medium">Business & Partnerships</p>
                  <a
                    href="mailto:partnerships@healix.com"
                    className="contact-item-link text-primary-600 hover:text-primary-800 transition-colors duration-300"
                  >
                    partnerships@healix.com
                  </a>
                </div>
                <div className="contact-item p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  <p className="contact-item-title font-medium">Press & Media</p>
                  <a
                    href="mailto:media@healix.com"
                    className="contact-item-link text-primary-600 hover:text-primary-800 transition-colors duration-300"
                  >
                    media@healix.com
                  </a>
                </div>
              </div>
            </div>

            <div
              className="contact-content-block"
            >
              <div className="contact-top-text">
                <h3 className="group">
                  Customer Support
                  <span className="block w-0 group-hover:w-full h-0.5 bg-primary-500 transition-all duration-300 mt-1"></span>
                </h3>
                <p className="hover:text-gray-700 transition-colors duration-300">
                  We're here to help! Whether you have a question about TaskHub's features, need assistance.
                </p>
              </div>
              <div className="contact-list-wrapper mt-6 space-y-4">
                <div className="contact-item p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  <p className="contact-item-title font-medium">Customer Support Email</p>
                  <a
                    href="mailto:support@healix.com"
                    className="contact-item-link text-primary-600 hover:text-primary-800 transition-colors duration-300"
                  >
                    support@healix.com
                  </a>
                </div>
                <div className="contact-item p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  <p className="contact-item-title font-medium">Phone Support</p>
                  <a
                    href="tel:+1(800)123-4567"
                    className="contact-item-link text-primary-600 hover:text-primary-800 transition-colors duration-300"
                  >
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}