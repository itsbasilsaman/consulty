import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section section-padding-sm">
      <div className="w-layout-blockcontainer container w-container">
        <div className="testimonial-wrapper">
          <h2
            data-w-id="23e7c1f6-d76d-7ace-8c83-51cbe520796a"
            className="section-title-heading testimonial"
          >
            Trusted by thousands worldwide
          </h2>
          <div
            data-w-id="8355b463-3896-30a1-d1d9-f80f31700323"
            className="testimonial-item-wrapper"
          >
            <div className="testimonial-item">
              <div className="testimonial-review-wrapper">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/67469be284b048fa58eda575/674b5c4cd50b5fd22bec4ea8_star%20icon.svg"
                    loading="lazy"
                    alt=""
                    className="testimonial-review-icon"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="testimonial-content-wrapper">
                <h4 className="testimonial-content-heading">
                  Healix has been a game-changer for me.
                </h4>
                <p className="testimonial-content-para">
                  I can now track my vitals and sleep patterns daily, and Healix has
                  been a game-changer for me it&apos;s helped me build healthier habits! <br />
                </p>
              </div>
              <div className="reviewer-info">
                <Image
                  src="/67469be284b048fa58eda575/674b5f6edd188bc887381e6e_user-13.png"
                  loading="lazy"
                  alt=""
                  className="image"
                  width={50}
                  height={50}
                />
                <div className="reviewr-name-position">
                  <p className="reviwer-name">Brooklyn Simmons</p>
                  <p className="reviwer-position">Product Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-review-wrapper">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/67469be284b048fa58eda575/674b5c4cd50b5fd22bec4ea8_star%20icon.svg"
                    loading="lazy"
                    alt=""
                    className="testimonial-review-icon"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="testimonial-content-wrapper">
                <h4 className="testimonial-content-heading">
                  I love the doctor chat feature!<br />
                </h4>
                <p className="testimonial-content-para">
                  Getting expert advice on my health questions without leaving home has
                  been incredibly convenient and I loved it so much!<br />
                </p>
              </div>
              <div className="reviewer-info">
                <Image
                  src="/67469be284b048fa58eda575/674b5f6d6067c08a08acc0cf_user-14.png"
                  loading="lazy"
                  alt=""
                  className="image"
                  width={50}
                  height={50}
                />
                <div className="reviewr-name-position">
                  <p className="reviwer-name">Arlene McCoy<br /></p>
                  <p className="reviwer-position">Product Designer<br /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;