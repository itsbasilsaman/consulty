'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAddingToCart(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsAddingToCart(false)
      // Add success animation or notification here
      document.getElementById('cart-success')?.classList.remove('hidden')
      document.getElementById('cart-success')?.classList.add('animate-fadeIn')
      
      setTimeout(() => {
        document.getElementById('cart-success')?.classList.add('opacity-0', 'transition-opacity', 'duration-300')
      }, 2000)
    }, 1000)
  }

  useEffect(() => {
    // Initial animations on component mount
    const elements = [
      { selector: '[data-animate="breadcrumb"]', delay: 100 },
      { selector: '[data-animate="title"]', delay: 200 },
      { selector: '[data-animate="image"]', delay: 300 },
      { selector: '[data-animate="content"]', delay: 400 },
    ]

    elements.forEach(({ selector, delay }) => {
      setTimeout(() => {
        document.querySelector(selector)?.classList.remove('opacity-0')
        document.querySelector(selector)?.classList.add('animate-fadeInUp')
      }, delay)
    })
  }, [])

  return (
    <section className="inner-hero-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="product-details-wrapper">
          <div 
            data-animate="breadcrumb"
            className="product-heading opacity-0"
          >
            <div className="product-breadcrumb">
              <Link href="/" className="product-breadcrumb-link hover:text-blue-500 transition-colors duration-200">
                Home
              </Link>
              <div className="body-text-18">/</div>
              <Link href="/product" className="product-breadcrumb-link hover:text-blue-500 transition-colors duration-200">
                product
              </Link>
            </div>
            <h1 className="product-title">TemplateFlow Wall Canvas</h1>
          </div>

          <div className="product-details-block">
            <div className="relative overflow-hidden rounded-lg group">
              <Image
                data-animate="image"
                className={`product-details-image transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                src="/67469be284b048fa58eda59f/67469be284b048fa58eda7ce_TemplateFlow%20Wall%20Canvas.png"
                alt="TemplateFlow Wall Canvas"
                width={800}
                height={800}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 44vw"
                onLoadingComplete={() => {
                  setImageLoaded(true)
                  document.querySelector('[data-animate="image"]')?.classList.add('group-hover:scale-105', 'transition-transform', 'duration-500')
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">TemplateFlow Wall Canvas</span>
              </div>
            </div>

            <div 
              data-animate="content"
              className="product-content opacity-0"
            >
              <h3 className="product-name hover:text-gray-700 transition-colors duration-200">TemplateFlow Wall Canvas</h3>
              <div className="price-block">
                <p className="product-price">Price:</p>
                <div className="price-wrapper">
                  <p className="discount-price text-2xl font-bold text-gray-900">$ 20.00 USD</p>
                  <p className="regular-price line-through text-gray-500 ml-2">$ 25.00 USD</p>
                </div>
              </div>
              <p className="product-excerpt my-4 text-gray-600">
                TemplateFlow Wall Canvas is a versatile and customizable digital template
                designed for creating visually engaging wall displays. Ideal for use in various environments, such as
                offices, classrooms, and home decor, this template allows users to effortlessly showcase artwork,
                photography, or branding elements.
              </p>
              
              <div className="mt-6">
                <form 
                  onSubmit={handleAddToCart}
                  className="w-commerce-commerceaddtocartform default-state-3"
                >
                  <div className="quantity-wrapper mb-4">
                    <label 
                      htmlFor="quantity"
                      className="product-quantity block text-sm font-medium text-gray-700 mb-1"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      pattern="^[0-9]+$"
                      inputMode="numeric"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-commerce-commerceaddtocartquantityinput border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isAddingToCart}
                    className={`w-commerce-commerceaddtocartbutton add-to-cart-button button bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 ${isAddingToCart ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-md'}`}
                  >
                    {isAddingToCart ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Adding...
                      </span>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                </form>
                
                <div 
                  id="cart-success"
                  className="hidden mt-4 p-3 bg-green-100 text-green-700 rounded-md border border-green-200"
                >
                  <div>Item added to cart successfully!</div>
                </div>

                <div className="w-commerce-commerceaddtocartoutofstock hidden" tabIndex={0}>
                  <div>This product is out of stock.</div>
                </div>
                
                <div aria-live="assertive" className="w-commerce-commerceaddtocarterror hidden">
                  <div>Product is not available in this quantity.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add these animations to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  )
}