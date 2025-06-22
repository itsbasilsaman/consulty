import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="header">
      <div className="w-layout-blockcontainer container w-container">
        <div 
          data-w-id="be61f925-d3a9-be49-f008-b802122495b1" 
          data-animation="default" 
          data-collapse="medium"
          data-duration="400" 
          data-easing="ease" 
          data-easing2="ease" 
          role="banner" 
          className="navbar w-nav"
        >
          <div className="navbar-wrapper _1">
            <div className="navbar-logo-menu">
              <Link href="/" aria-current="page" className="navbar-brand-header w-nav-brand w--current">
                <Image 
                  src="/Logo.svg" 
                  alt=""
                  width={100}
                  height={50}
                  className="navbar-brand-header-logo"
                  priority
                />
              </Link>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li data-w-id="54e4ff0d-8f8a-6ceb-1ee7-8ab6c7be1e2f" className="dropdown-list-item">
                    <div data-hover="true" data-delay="0" className="nav-dropdown w-dropdown">
                      <div className="nav-dropdown-toggle w-dropdown-toggle">
                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                        <div className="menu-dropdown-text">all pages</div>
                      </div>
                      <nav className="nav-dropdown-list w-dropdown-list">
                        <div className="mega-menu">
                          <div className="menu-item-list">
                            <div className="menu-items">
                              <Link href="/" className="nav-dropdown-link w-dropdown-link w--current">home</Link>
                              <Link href="/pricing" className="nav-dropdown-link w-dropdown-link">Pricing</Link>
                              <Link href="/about-us" className="nav-dropdown-link w-dropdown-link">about</Link>
                              <Link href="/features" className="nav-dropdown-link w-dropdown-link">Features</Link>
                              <Link href="/testimonials" className="nav-dropdown-link w-dropdown-link">testimonials</Link>
                              <Link href="/appointment" className="nav-dropdown-link w-dropdown-link">appointment</Link>
                            </div>
                            <div className="menu-items">
                              <Link href="/blog" className="nav-dropdown-link w-dropdown-link">Blog</Link>
                              <Link href="/blog/using-healix-to-manage-your-diet" className="nav-dropdown-link w-dropdown-link">Blog Details</Link>
                              <Link href="/product" className="nav-dropdown-link w-dropdown-link">Product</Link>
                              <Link href="/product/templateflow-wall-canvas" className="nav-dropdown-link w-dropdown-link">Product Details</Link>
                              <Link href="/contact" className="nav-dropdown-link w-dropdown-link">contact</Link>
                              <Link href="/changelog" className="nav-dropdown-link w-dropdown-link">changelog</Link>
                            </div>
                            <div className="menu-items">
                              <Link href="/privacy-policy" className="nav-dropdown-link w-dropdown-link">Privacy</Link>
                              <Link href="/terms" className="nav-dropdown-link w-dropdown-link">Terms</Link>
                              <Link href="/sign-in" className="nav-dropdown-link w-dropdown-link">sign in</Link>
                              <Link href="/sign-up" className="nav-dropdown-link w-dropdown-link">sign up</Link>
                              <Link href="/license" className="nav-dropdown-link w-dropdown-link">License</Link>
                              <Link href="/styleguide" className="nav-dropdown-link w-dropdown-link">Styleguide</Link>
                              <Link href="/404" className="nav-dropdown-link w-dropdown-link">404</Link>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="list-item"><Link href="/features" className="nav-link">features</Link></li>
                  <li className="list-item"><Link href="/pricing" className="nav-link">pricing</Link></li>
                  <li className="list-item"><Link href="/testimonials" className="nav-link">reviews</Link></li>
                </ul>
              </nav>
            </div>
            <div className="navbar-button">
              <Link 
                data-wf--button--variant="link" 
                data-w-id="6140ac12-e782-d67b-bc27-3a3036803ae7"
                href="/sign-in" 
                className="button w-variant-1d37e4ee-5ab8-1fee-b0e2-2cebd93e548b w-inline-block"
              >
                <div className="button-area">
                  <div className="button-text w-variant-1d37e4ee-5ab8-1fee-b0e2-2cebd93e548b">login</div>
                  <div className="button-icon-wrapper">
                    <Image 
                      src="/67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg" 
                      alt=""
                      width={16}
                      height={16}
                      className="button-right-icon"
                    />
                  </div>
                </div>
              </Link>
              <Link 
                data-wf--button--variant="primary-sm" 
                data-w-id="6140ac12-e782-d67b-bc27-3a3036803ae7"
                href="/appointment" 
                className="button w-inline-block"
              >
                <div className="button-area">
                  <div className="button-text">Get Started For Free</div>
                  <div className="button-icon-wrapper">
                    <Image 
                      src="/67469be284b048fa58eda575/67469be284b048fa58edab3a_cheveron-right-white.svg" 
                      alt=""
                      width={16}
                      height={16}
                      className="button-right-icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="menu-button w-nav-button">
              <div 
                data-is-ix2-target="1" 
                className="menu-button-icon" 
                data-w-id="be61f925-d3a9-be49-f008-b802122495d5"
                data-animation-type="lottie"
                data-src="https://cdn.prod.website-files.com/67469be284b048fa58eda575/67469be284b048fa58eda597_dark%20icon.json"
                data-loop="0" 
                data-direction="1" 
                data-autoplay="0" 
                data-renderer="svg" 
                data-default-duration="2.36"
                data-duration="0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}