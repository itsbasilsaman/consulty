import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-wrapper">
          <div data-w-id="5f391e59-60c8-9d8e-6404-450c32b4aef8" className="footer-top-block">
            <div id="w-node-f4fab60c-8493-c494-3a09-03e6223231a3-223231a0" className="footer-left-block">
              <Link href="/" aria-current="page" className="footer-logo-wrapper w-nav-brand w--current">
                <Image
                  loading="lazy"
                  src="/67469be284b048fa58eda575/6746de5b1392b2c3ecb2c7ad_logo-large.svg"
                  alt=""
                  className="footer-logo"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
            <div className="footer-right-block">
              <div className="footer-widget">
                <Link href="about-us.html" className="footer-link">
                  about
                </Link>
                <Link href="blog.html" className="footer-link">
                  blogs
                </Link>
              </div>
              <div className="footer-widget">
                <Link href="contact.html" className="footer-link">
                  contact us
                </Link>
                <Link href="license.html" className="footer-link">
                  license
                </Link>
              </div>
              <div className="footer-widget">
                <Link href="privacy-policy.html" className="footer-link">
                  Privacy Policy
                </Link>
                <Link href="terms.html" className="footer-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <div data-w-id="98ad6086-a2b3-3ca8-0a70-2909c5875d71" className="footer-bottom-block">
            <p className="copyright">
              Copyright © 2024 Healix. All Rights Reserved.
              <br />
            </p>
            <div className="social-icons">
              <a
                data-w-id="2b6c8a42-922e-8b96-679c-d70d48aa5fbe"
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-inline-block"
              >
                <Image
                  src="/67469be284b048fa58eda575/6746e1f9828217d5124d163c_twitter.svg"
                  loading="lazy"
                  alt=""
                  className="footer-icon-normal"
                  width={24}
                  height={24}
                />
                <Image
                  src="/67469be284b048fa58eda575/6746e1f9d7203f19c1da1048_twitter2.svg"
                  loading="lazy"
                  alt=""
                  className="footer-icon-hover"
                  width={24}
                  height={24}
                />
              </a>
              <a
                data-w-id="2b6c8a42-922e-8b96-679c-d70d48aa5fc4"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-inline-block"
              >
                <Image
                  src="/67469be284b048fa58eda575/6746e1f9b7223f2b93b0b888_facebook.svg"
                  loading="lazy"
                  alt=""
                  className="footer-icon-normal"
                  width={24}
                  height={24}
                />
                <Image
                  src="/67469be284b048fa58eda575/6746e1f99f13703937b7636d_facebook2.svg"
                  loading="lazy"
                  alt=""
                  className="footer-icon-hover"
                  width={24}
                  height={24}
                />
              </a>
              <a
                data-w-id="2b6c8a42-922e-8b96-679c-d70d48aa5fc1"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-inline-block"
              >
                <Image
                  src="/67469be284b048fa58eda575/6746e1f92e3bc56134e6bde0_linkedin.svg"
                  loading="lazy"
                  alt=""
                  className="footer-icon-normal"
                  width={24}
                  height={24}
                />
                <Image
                  src="/67469be284b048fa58eda575/6746e1fa8b3edfa8d0693b29_linkedin2.svg"
                  loading="lazy"
                  alt=""
                  className="footer-icon-hover"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;