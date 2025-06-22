import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignUpSection = () => {
  return (
    <section className="sign-in-up-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="sign-in-up-wrapper">
          <div data-w-id="4a3ed907-7429-a709-26b6-242b5c064aea" className="form-block-3">
            <div className="form-logo-title-wrapper">
              <Link href="/" className="w-inline-block">
                <Image
                  src="/67469be284b048fa58eda575/675026836c6747ff377ebffe_logo.svg"
                  loading="lazy"
                  alt=""
                  width={100} // Set appropriate width
                  height={50} // Set appropriate height
                />
              </Link>
              <div className="form-title-wrapper">
                <h3>Create your account</h3>
                <p className="body-text-16">Please fill in your Email and Password to Sign up.</p>
              </div>
            </div>
            <div className="w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form style-2"
                data-wf-page-id="6746b2aced577b9beeb0ebee"
                data-wf-element-id="4a3ed907-7429-a709-26b6-242b5c064af6"
              >
                <div className="input-group style-2">
                  <div className="input-form style-2">
                    <label htmlFor="First-name" className="field-label">
                      First name
                    </label>
                    <input
                      className="text-field style-2 w-input"
                      maxLength={256}
                      name="First-name"
                      data-name="First name"
                      placeholder="First name"
                      type="text"
                      id="First-name"
                      required
                    />
                  </div>
                  <div className="input-form style-2">
                    <label htmlFor="Last-name" className="field-label">
                      Last name
                    </label>
                    <input
                      className="text-field style-2 w-input"
                      maxLength={256}
                      name="Last-name"
                      data-name="Last name"
                      placeholder="Last name"
                      type="text"
                      id="Last-name"
                      required
                    />
                  </div>
                </div>
                <div className="input-form style-2">
                  <label htmlFor="Email-7" className="field-label">
                    Email Address
                  </label>
                  <input
                    className="text-field style-2 w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="your email address"
                    type="email"
                    id="Email-7"
                    required
                  />
                </div>
                <div className="input-form style-2">
                  <label htmlFor="Password-4" className="field-label">
                    Password
                  </label>
                  <input
                    className="text-field style-2 w-input"
                    maxLength={256}
                    name="Password"
                    data-name="Password"
                    placeholder="*************"
                    type="password"
                    id="Password-4"
                    required
                  />
                </div>
                <div className="submit-btn-text">
                  <div className="submit-button sign-in">
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="submit-button-2 button w-button"
                      value="Create account"
                    />
                    <Image
                      src="/67469be284b048fa58eda575/67469be284b048fa58edaa49_arrow-right.svg"
                      loading="lazy"
                      alt=""
                      className="submit-button-icon"
                      width={16} // Set appropriate width
                      height={16} // Set appropriate height
                    />
                  </div>
                  <p className="body-text-16">
                    Don't have an Account?{' '}
                    <Link href="/sign-in" className="text-link">
                      <span>Sign-In here</span>!
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
          <div data-w-id="4a3ed907-7429-a709-26b6-242b5c064b13" className="form-card">
            <div className="form-card-top-section">
              <p className="review-text">
                I can now track my vitals and sleep patterns daily, and Healix has been a game-changer for me it's
                helped me build healthier habits!
              </p>
              <div className="reviewer-info">
                <Image
                  src="/67469be284b048fa58eda575/674b5f6d6067c08a08acc0cf_user-14.png"
                  loading="lazy"
                  alt=""
                  className="image"
                  width={50} // Set appropriate width
                  height={50} // Set appropriate height
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
                width={100} // Set appropriate width
                height={30} // Set appropriate height
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">
        Already have an account?{' '}
        <a href="/sign-in" className="text-primary-600 hover:underline">Sign in</a>
      </p>
      <p className="text-xs text-gray-400 mt-4">
        By signing up, you agree to TaskHub&apos;s Terms of Service and Privacy Policy.
      </p>
    </section>
  );
};

export default SignUpSection;