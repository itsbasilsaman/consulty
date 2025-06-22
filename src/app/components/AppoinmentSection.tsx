"use client";

import { useState, useRef, useEffect } from 'react';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <section ref={sectionRef} className="inner-hero-section bg-white py-16">
      <div className="container mx-auto px-4 w-full">
        <div className="appointment-wrapper max-w-6xl mx-auto">
          <div 
            data-animate
            className="banner-section-title-wrapper mb-12 transition-all duration-700 ease-out translate-y-6 opacity-0"
          >
            <h1 className="banner-section-title appointment text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Book an appointment<br />
            </h1>
          </div>
          
          <div className="appointment-form-content grid md:grid-cols-2 gap-12">
            <div 
              data-animate
              className="appointment-form-block transition-all duration-700 ease-out delay-100 translate-y-6 opacity-0"
            >
              {formStatus === 'success' ? (
                <div className="w-full p-6 bg-green-50 text-green-700 rounded-lg">
                  Thank you! Your submission has been received!
                </div>
              ) : formStatus === 'error' ? (
                <div className="w-full p-6 bg-red-50 text-red-700 rounded-lg">
                  Oops! Something went wrong while submitting the form.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="form space-y-6"
                >
                  <div className="input-group grid md:grid-cols-2 gap-6">
                    <div className="input-form style-1">
                      <label htmlFor="fullName" className="field-label block text-gray-700 mb-2 font-medium">
                        Full name *
                      </label>
                      <input
                        className="text-field style-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        name="fullName"
                        placeholder="Enter your full name"
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-form style-1">
                      <label htmlFor="email" className="field-label block text-gray-700 mb-2 font-medium">
                        <strong>Email address *</strong>
                      </label>
                      <input
                        className="text-field style-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        name="email"
                        placeholder="Enter your email address"
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="input-form style-1">
                    <label htmlFor="company" className="field-label block text-gray-700 mb-2 font-medium">
                      Company *
                    </label>
                    <input
                      className="text-field style-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      name="company"
                      placeholder="Enter your company name"
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="input-form style-1">
                    <label htmlFor="subject" className="field-label block text-gray-700 mb-2 font-medium">
                      Subject *
                    </label>
                    <input
                      className="text-field style-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      name="subject"
                      placeholder="Enter your subject"
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="input-form style-1 textarea-input-form">
                    <label htmlFor="message" className="field-label block text-gray-700 mb-2 font-medium">
                      <strong>Message *</strong>
                    </label>
                    <textarea
                      required
                      placeholder="Write your message here"
                      id="message"
                      name="message"
                      rows={5}
                      className="textarea w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <div className="submit-button">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="button w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div 
              data-animate
              className="appointment-content-wrapper transition-all duration-700 ease-out delay-200 translate-y-6 opacity-0"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of booking an appointment with Healix</h3>
              
              <div className="appointment-content-list space-y-8">
                <div 
                  className="appointment-list-item p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
                  onMouseEnter={(e) => e.currentTarget.classList.add('scale-[1.02]')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('scale-[1.02]')}
                >
                  <h4 className="appointment-subtitle text-xl font-semibold text-gray-800 mb-3">
                    Expert Healthcare at Your Fingertips
                  </h4>
                  <p className="appointment-para text-gray-600">
                    Connect with top doctors from the comfort of your home. Access personalized
                    medical advice tailored to your health history from the comfort and current needs.
                  </p>
                </div>
                
                <div 
                  className="appointment-list-item p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
                  onMouseEnter={(e) => e.currentTarget.classList.add('scale-[1.02]')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('scale-[1.02]')}
                >
                  <h4 className="appointment-subtitle text-xl font-semibold text-gray-800 mb-3">
                    Secure and Private Consultations
                  </h4>
                  <p className="appointment-para text-gray-600">
                    Enjoy peace of mind knowing your personal health information is protected.
                    All communications and data shared during your appointment are encrypted and confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}