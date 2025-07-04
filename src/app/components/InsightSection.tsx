import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const InsightSection = () => {
  return (
    <section data-w-id="7e3679ab-6136-b481-d308-7feaceb0a8e2" className="insight-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="insight-wrapper">
          <div className="insight-title">
            <h2 className="insight-title-text">
              Studies show that proactive health tracking can reduce chronic <span className="opacity-50">health risks by up to 78%</span>
            </h2>
          </div>
          <div className="insight-banner">
            <div className="insight-left-block">
              <div className="insight-card">
                <div className="insight-card-top-block">
                  <div className="insight-card-logo-button">
                    <Image
                      src="/67469be284b048fa58eda575/67480601e163925393a93976_insight.svg"
                      alt=""
                      className="insight-card-logo"
                      width={32}
                      height={32}
                    />
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
                            alt=""
                            className="button-right-icon"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <h4 className="insight-card-title">Health Monitoring Matters<br /></h4>
                </div>
                <div className="insight-card-bottom-block">
                  <p className="insight-card-p">
                    Studies show that proactive health tracking can reduce chronic health risks by up to
                  </p>
                  <div className="insight-counter-box">
                    <h3 className="insight-counter-text">78%</h3>
                    <Image
                      src="/67469be284b048fa58eda575/6748071e6774c9d5172580b6_menu.svg"
                      alt=""
                      className="insight-dot-image"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="insight-tag-list">
              <div 
                data-wf--tag-item--variant="style-2" 
                className="tag-item w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441"
              >
                <p className="tag-item-text w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441">Rehabilitation</p>
              </div>
              <div 
                data-wf--tag-item--variant="style-2" 
                className="tag-item w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441"
              >
                <p className="tag-item-text w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441">Healthcare</p>
              </div>
              <div 
                data-wf--tag-item--variant="style-2" 
                className="tag-item w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441"
              >
                <p className="tag-item-text w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441">Monitoring</p>
              </div>
              <div 
                data-wf--tag-item--variant="style-2" 
                className="tag-item w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441"
              >
                <p className="tag-item-text w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441">Technology</p>
              </div>
              <div 
                data-wf--tag-item--variant="style-2" 
                className="tag-item w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441"
              >
                <p className="tag-item-text w-variant-1b16d4b4-7b4c-e8a6-f47d-51ec18ab7441">Personalized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;