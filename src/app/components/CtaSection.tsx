import Link from 'next/link';
import React from 'react';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="w-layout-blockcontainer container w-container">
        <div data-w-id="fb3077fe-679f-dc43-f3d6-c0fce231764e" className="cta-wrapper">
          <div className="cta-left-block">
            <h2 className="cta-left-text">
              Speak with one of our health tech experts to discover{' '}
              <span className="opacity-50">how Healix can support your wellness journey.</span>
            </h2>
          </div>
          <div className="cta-right-block">
            <p className="opacity-80">
              Start your health journey with Healix today. Your health, your data, your power.
            </p>
            <Link
              data-wf--button--variant="border-lg"
              data-w-id="6140ac12-e782-d67b-bc27-3a3036803ae7"
              href="appointment.html"
              className="button w-variant-25eda676-728b-4b72-26a2-7f9f4d41a3e4 w-inline-block"
            >
              <div className="button-area">
                <div className="button-text">Book your appointment</div>
                <div className="button-icon-wrapper">
                  <img
                    src="67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg"
                    loading="lazy"
                    alt=""
                    className="button-right-icon"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;