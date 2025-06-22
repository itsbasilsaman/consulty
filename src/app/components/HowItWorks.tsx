import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section section-padding-sm remove-bottom-padding">
      <div className="w-layout-blockcontainer container w-container">
        <div className="how-it-works-wrapper-1">
          <h2 
            data-w-id="990c1f7c-975f-e667-79ca-c36b7530a2e8"
            className="section-title-heading how-it-works-section-title"
          >
            Simple steps get to start Your health journey<br />
          </h2>
          <div 
            data-w-id="b021816f-e802-89c4-b64c-b7e552ffafdb"
            className="how-it-works-cards"
          >
            <div className="how-it-works-card">
              <div className="how-it-works-top">
                <h3>Step <span className="opacity-50">01</span></h3>
                <Link 
                  data-wf--button--variant="border-xs"
                  data-w-id="6140ac12-e782-d67b-bc27-3a3036803ae7" 
                  href="features.html"
                  className="button w-variant-19cbd260-6fc1-672c-8f62-74cfc51c4ad8 w-inline-block"
                >
                  <div className="button-area">
                    <div className="button-text">Explore</div>
                    <div className="button-icon-wrapper">
                      <Image
                        src="/67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="button-right-icon"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="how-it-works-content">
                <h4 className="how-it-works-title">Download the app and connect your devices</h4>
                <p className="how-it-works-p">
                  For access sync Healix with your health wearables for updates.<br />
                </p>
              </div>
            </div>
            
            <div className="how-it-works-card">
              <div className="how-it-works-top">
                <h3>Step <span className="opacity-50">02</span></h3>
                <Link 
                  data-wf--button--variant="border-xs"
                  data-w-id="6140ac12-e782-d67b-bc27-3a3036803ae7" 
                  href="features.html"
                  className="button w-variant-19cbd260-6fc1-672c-8f62-74cfc51c4ad8 w-inline-block"
                >
                  <div className="button-area">
                    <div className="button-text">Explore</div>
                    <div className="button-icon-wrapper">
                      <Image
                        src="/67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="button-right-icon"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="how-it-works-content">
                <h4 className="how-it-works-title">Set your health goals and start monitoring your journey</h4>
                <p className="how-it-works-p">
                  Define your wellness targets for a personalized experience.<br />
                </p>
              </div>
            </div>
            
            <div className="how-it-works-card">
              <div className="how-it-works-top">
                <h3>Step <span className="opacity-50">03</span></h3>
                <Link 
                  data-wf--button--variant="border-xs"
                  data-w-id="6140ac12-e782-d67b-bc27-3a3036803ae7" 
                  href="features.html"
                  className="button w-variant-19cbd260-6fc1-672c-8f62-74cfc51c4ad8 w-inline-block"
                >
                  <div className="button-area">
                    <div className="button-text">Explore</div>
                    <div className="button-icon-wrapper">
                      <Image
                        src="/67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="button-right-icon"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="how-it-works-content">
                <h4 className="how-it-works-title">Track &amp; achieve your desired goal and stay healthy</h4>
                <p className="how-it-works-p">
                  Start monitoring, receive insights, and adjust your habits based on data.<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;