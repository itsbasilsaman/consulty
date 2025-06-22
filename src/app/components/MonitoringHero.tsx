import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HealthMonitoringHero = () => {
  return (
    <>
      <section className="inner-hero-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="feature-hero-wrapper">
            <div className="feature-hero-left">
              <div className="feature-hero-title-para">
                <h1 className="banner-section-title text-align-left">Explore our health monitoring features</h1>
                <p className="banner-section-p-text _w-400">Discover powerful features that help you monitor and manage your
                  health effortlessly</p>
              </div>
              <Link
                data-wf--button--variant="border-sm"
                href="/appointment"
                className="button w-variant-ac08d2a5-a49c-f69a-dbbf-12535f988a9f w-inline-block"
              >
                <div className="button-area">
                  <div className="button-text">Book Your Appoinment</div>
                  <div className="button-icon-wrapper">
                    <Image
                      src="/67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg"
                      loading="lazy"
                      alt=""
                      className="button-right-icon"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="feature-hero-right">
              <Image
                src="/67469be284b048fa58eda575/674b62b2286577567889cb6b_img-12.png"
                loading="lazy"
                alt=""
                className="feature-hero-image"
                width={500}
                height={500}
              />
              <div className="insight-card-features">
                <div className="insight-card-top-block hero">
                  <div className="insight-card-logo-button">
                    <Image
                      src="/67469be284b048fa58eda575/67480601e163925393a93976_insight.svg"
                      loading="lazy"
                      alt=""
                      className="insight-card-logo"
                      width={20}
                      height={20}
                    />
                    <Link
                      data-wf--button--variant="border-xs"
                      href="/features"
                      aria-current="page"
                      className="button w-variant-19cbd260-6fc1-672c-8f62-74cfc51c4ad8 w-inline-block w--current"
                    >
                      <div className="button-area">
                        <div className="button-text">Explore</div>
                        <div className="button-icon-wrapper">
                          <Image
                            src="/67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg"
                            loading="lazy"
                            alt=""
                            className="button-right-icon"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <h4 className="insight-card-title">Health Monitoring Matters<br /></h4>
                </div>
                <div className="insight-card-bottom-block">
                  <p className="insight-card-p">Studies show that proactive health tracking can reduce chronic health risks by
                    up to</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter-section section-padding-sm remove-bottom-padding">
        <div className="w-layout-blockcontainer container w-container">
          <div className="counter-wrapper">
            <div className="counter-area-content">
              <h3>Healix has everything you need to monitor, track, and improve health.</h3>
              <p className="opacity-80">We believe in a future where everyone can take control of their wellness with tools that
                guide, support, and inspire daily healthy habits.<br /></p>
            </div>
            <div className="counter-item-wrapper-2">
              <div className="counter-item">
                <h2 className="counter-number-2">10000+</h2>
                <p className="counter-p">Thousands of active users wordlwide</p>
              </div>
              <div className="counter-item">
                <h2 className="counter-number-2">80%</h2>
                <p className="counter-p">User Satisfaction rate increased</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthMonitoringHero;