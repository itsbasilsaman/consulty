import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignInSection = () => {
  return (
    <section className="sign-in-up-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="sign-in-up-wrapper">
          <div data-w-id="01400444-dc4a-9166-dd12-789f4c889958" className="form-block-3">
            <div className="form-logo-title-wrapper">
              <Link href="/" className="w-inline-block">
                <Image
                  src="/67469be284b048fa58eda575/675026836c6747ff377ebffe_logo.svg"
                  loading="lazy"
                  alt=""
                  className="image-2"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="form-title-wrapper">
                <h3>Welcome Back!<br /></h3>
                <p className="body-text-16">Please fill in your Email and Password to Sign In.<br /></p>
              </div>
            </div>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form style-2"
                data-wf-page-id="6746b1972aaa201fbcaea6d5" data-wf-element-id="1775161f-dfe3-6244-eb4f-3271edaea800">
                <div className="input-form style-2">
                  <label htmlFor="Email-5" className="field-label">Email Address</label>
                  <input
                    className="text-field style-2 w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="Your Email Address"
                    type="email"
                    id="Email-5"
                    required
                  />
                </div>
                <div className="input-form style-2">
                  <label htmlFor="Password" className="field-label">Password</label>
                  <input
                    className="text-field style-2 w-input"
                    maxLength={256}
                    name="Password"
                    data-name="Password"
                    placeholder="*************"
                    type="password"
                    id="Password"
                    required
                  />
                </div>
                <div className="input-form style-2">
                  <label htmlFor="Confirm-Password" className="field-label">Confirm Password</label>
                  <input
                    className="text-field style-2 w-input"
                    maxLength={256}
                    name="Confirm-Password"
                    data-name="Confirm Password"
                    placeholder="*************"
                    type="password"
                    id="Confirm-Password"
                    required
                  />
                </div>
                <div className="submit-btn-text">
                  <div className="submit-button sign-in">
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="submit-button-2 button w-button"
                      value="Sign in"
                    />
                    <Image
                      src="/67469be284b048fa58eda575/67469be284b048fa58edaa49_arrow-right.svg"
                      loading="lazy"
                      alt=""
                      className="submit-button-icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="body-text-16">
                    Don&apos;t have an Account?{' '}
                    <Link href="/sign-up" className="text-link">
                      <span>Sign-Up here</span>!
                    </Link>
                  </p>
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div data-w-id="8f2fccd2-783a-7c74-12e6-fd605e399994" className="form-card">
            <div className="form-card-top-section">
              <p className="review-text">
                I can now track my vitals and sleep patterns daily, and Healix has been a
                game-changer for me it's helped me build healthier habits!
              </p>
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
                  <p className="reviwer-name-2">Brooklyn Simmons</p>
                  <p className="reviwer-position-2">Product Manager</p>
                </div>
              </div>
            </div>
            <div className="brand-logo-wrapper">
              <Image
                src="/67469be284b048fa58eda575/675024389a9971ca548c9c63_brand-logo.png"
                loading="lazy"
                alt=""
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">
        Don&apos;t have an account?{' '}
        <a href="/sign-up" className="text-primary-600 hover:underline">Sign up</a>
      </p>
      <p className="text-xs text-gray-400 mt-4">
        By signing in, you agree to TaskHub&apos;s Terms of Service and Privacy Policy.
      </p>
    </section>
  );
};

export default SignInSection;