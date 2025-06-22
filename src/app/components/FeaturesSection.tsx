"use client";

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="features-section section-padding-sm remove-bottom-padding">
      <div className="w-layout-blockcontainer container w-container">
        <div className="features-wrapper">
          <div className="section-title">
            <h2 className="section-title-heading">Features designed for your health journey<br /></h2>
            <p className="section-title-p _w-500">
              Healix is designed to help you track and understand your health to make
              informed decisions for a healthier lifestyle.<br />
            </p>
          </div>
          <div className="feature-card-wrapper">
            <div className="feature-card-list">
              <div className="feature-card _1">
                <div className="feature-card-content">
                  <h4 className="feature-card-title">Get answers to your health questions<br /></h4>
                  <p className="feature-card-para">Healix encourages users to stay active.<br /></p>
                </div>
                <div className="feature-card-image _1">
                  <Image
                    src="/67469be284b048fa58eda575/674c20018ab05d1879bdf852_img-13.png"
                    width={410}
                    height={410}
                    alt=""
                    className="feature-card-single-image"
                  />
                </div>
              </div>
              <div className="feature-card _2">
                <div className="feature-card-content">
                  <h4 className="feature-card-title">Find answers to all your health concerns<br /></h4>
                  <p className="feature-card-para">Healix inspires users to maintain activity<br /></p>
                </div>
                <div className="feature-card-image _2">
                  <Image
                    src="/67469be284b048fa58eda575/674c23c68dfb7342930d3401_img-14.png"
                    width={968}
                    height={968}
                    alt=""
                    className="feature-card-single-image _2"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 422.609375px, 38vw"
                  />
                </div>
              </div>
            </div>
            <div className="feature-card-list">
              <div className="feature-card _3">
                <div className="feature-card-content">
                  <h4 className="feature-card-title"><strong>Find solutions to your health inquiries</strong><br /></h4>
                  <p className="feature-card-para">Healix motivates users to stay active.<br /></p>
                </div>
                <div className="feature-card-image-group _1">
                  <div className="feature-card-image _3">
                    <Image
                      src="/67469be284b048fa58eda575/6755b6b3c9989275ef879c8e_img-13.png"
                      width={410}
                      height={410}
                      alt=""
                      className="feature-card-single-image"
                    />
                  </div>
                  <div className="feature-card-image _4">
                    <Image
                      src="/67469be284b048fa58eda575/6755b6b24ef606132010d23e_img-16.png"
                      width={410}
                      height={410}
                      alt=""
                      className="feature-card-single-image"
                    />
                  </div>
                </div>
              </div>
              <div className="feature-card _4">
                <div className="feature-card-content">
                  <h4 className="feature-card-title"><strong>Discover answers to your health concerns</strong><br /></h4>
                  <p className="feature-card-para">Healix helps users embrace an active life.<br /></p>
                </div>
                <div className="feature-card-image _5">
                  <Image
                    src="/67469be284b048fa58eda575/6755b74bd95765831746174b_img-17.png"
                    width={410}
                    height={410}
                    alt=""
                    className="feature-card-single-image _3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}