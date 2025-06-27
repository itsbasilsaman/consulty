import Link from 'next/link';
import Image from 'next/image';
import { useThemeQuery, useToggleThemeMutation } from '../theme-query';

export default function Header() {

  const {data: theme} = useThemeQuery();
  const toggleThemeMutation = useToggleThemeMutation();

  return (
    <div className="header" style={{ background: 'var(--background)', color: 'var(--text)' }}>
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
                   
                  <li className="list-item"><Link href="/consult" className="nav-link">Talk to Doctor</Link></li>
                  <li className="list-item"><Link href="/labtest-packages" className="nav-link">Labtest & Packages</Link></li>
                  <li className="list-item"><Link href="/health-tips" className="nav-link">Health Tips </Link></li>
                  <li className="list-item"><Link href="/offers" className="nav-link">Offers</Link></li>
                </ul>
              </nav>
            </div>
            <div className="navbar-button">
            <button
          onClick={() => toggleThemeMutation.mutate(theme)}
          aria-label="Toggle light/dark mode"
          className="mr-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-yellow-500 dark:text-gray-200 transition"
        >
          {theme === 'light' ? (
            // Sun icon
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <g stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          ) : (
            // Moon icon
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )}
        </button>
              <Link 
                data-wf--button--variant="primary-sm" 
                data-w-id="6140ac12-e782-d67b-bc27-3a3036803ae7"
                href="/signin" 
                className="button w-inline-block"
              >
                <div className="button-area">
                  <div className="button-text">Login / Signup</div>
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