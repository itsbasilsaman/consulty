'use client';

import { useState, useEffect } from 'react';

type Product = {
  id: string;
  title: string;
  price: string;
  comparePrice: string;
  imageUrl: string;
  productUrl: string;
  skuId: string;
  productId: string;
};

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      title: 'TemplateFlow Wall Canvas',
      price: '$20.00 USD',
      comparePrice: '$25.00 USD',
      imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      productUrl: '/product/templateflow-wall-canvas',
      skuId: '67469be284b048fa58eda7e7',
      productId: '67469be284b048fa58eda7cd',
    },
    {
      id: '2',
      title: 'TemplateFlow Long T-Shirt',
      price: '$18.00 USD',
      comparePrice: '$20.00 USD',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      productUrl: '/product/templateflow-long-t-shirt',
      skuId: '67469be284b048fa58eda7e8',
      productId: '67469be284b048fa58eda7e1',
    },
    {
      id: '3',
      title: 'Branded T-Shirt',
      price: '$25.00 USD',
      comparePrice: '$30.00 USD',
      imageUrl: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      productUrl: '/product/branded-t-shirt',
      skuId: '67469be284b048fa58eda7e6',
      productId: '67469be284b048fa58eda7e2',
    },
    {
      id: '4',
      title: 'Premium T-Shirt',
      price: '$50.00 USD',
      comparePrice: '$60.00 USD',
      imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      productUrl: '/product/premium-t-shirt',
      skuId: '67469be284b048fa58eda7e9',
      productId: '67469be284b048fa58eda7e3',
    },
    {
      id: '5',
      title: 'Branded Mug',
      price: '$25.00 USD',
      comparePrice: '$30.00 USD',
      imageUrl: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      productUrl: '/product/branded-mug',
      skuId: '67469be284b048fa58eda7ea',
      productId: '67469be284b048fa58eda7e4',
    },
    {
      id: '6',
      title: 'TemplateFlo Branded Mug',
      price: '$15.00 USD',
      comparePrice: '$19.00 USD',
      imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      productUrl: '/product/templateflo-branded-mug',
      skuId: '67469be284b048fa58eda7e5',
      productId: '67469be284b048fa58eda7cc',
    },
  ]);

  const [quantities, setQuantities] = useState<Record<string, number>>(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {} as Record<string, number>)
  );

  const [isAddingToCart, setIsAddingToCart] = useState<Record<string, boolean>>(
    products.reduce((acc, product) => {
      acc[product.id] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleQuantityChange = (productId: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, value),
    }));
  };

  const addToCart = (productId: string) => {
    setIsAddingToCart((prev) => ({ ...prev, [productId]: true }));
    
    setTimeout(() => {
      setIsAddingToCart((prev) => ({ ...prev, [productId]: false }));
    }, 1500);
  };

  return (
    <section className="inner-hero-section product py-12 bg-gray-50">
      <div className="w-layout-blockcontainer container w-container mx-auto px-4">
        <div className="product-wrapper">
          <div className="banner-section-title-wrapper mb-12 text-center">
            <h1 
              className={`banner-section-title text-4xl font-bold text-gray-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Products
            </h1>
          </div>
          <div className="product-list-wrapper w-dyn-list">
            <div 
              role="list" 
              className={`product-list w-dyn-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  role="listitem" 
                  className="w-dyn-item"
                >
                  <div 
                    className={`product-item group transition-all duration-500 hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden bg-white`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="product-card-image relative">
                      <div className="background-product relative overflow-hidden h-80">
                        <div className="add-to-cart absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 z-10 p-6">
                          <form className="w-commerce-commerceaddtocartform default-state-2 w-full max-w-xs">
                            <label htmlFor={`quantity-${product.id}`} className="field-label-2 text-white mb-2 block">
                              Quantity
                            </label>
                            <input
                              type="number"
                              pattern="^[0-9]+$"
                              inputMode="numeric"
                              id={`quantity-${product.id}`}
                              name="commerce-add-to-cart-quantity-input"
                              min="1"
                              className="w-commerce-commerceaddtocartquantityinput quantity-2 w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={quantities[product.id]}
                              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                            />
                            <button
                              type="button"
                              onClick={() => addToCart(product.id)}
                              disabled={isAddingToCart[product.id]}
                              className={`w-commerce-commerceaddtocartbutton add-to-cart-button-2 w-full py-3 px-4 rounded bg-white text-black font-medium transition-all duration-300 hover:bg-gray-100 active:scale-95 flex items-center justify-center ${
                                isAddingToCart[product.id] ? 'opacity-70 cursor-not-allowed' : ''
                              }`}
                            >
                              {isAddingToCart[product.id] ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Adding...
                                </>
                              ) : (
                                'Add to Cart'
                              )}
                            </button>
                            <a
                              href="/checkout"
                              className="w-commerce-commercebuynowbutton buy-now-button w-full py-3 px-4 rounded bg-blue-600 text-white font-medium mt-3 inline-block text-center transition-all duration-300 hover:bg-blue-700 active:scale-95"
                            >
                              Buy now
                            </a>
                          </form>
                        </div>
                        <a href={product.productUrl} className="card-overlay w-inline-block absolute inset-0 z-0"></a>
                        <div
                          className="image-card w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                          style={{ backgroundImage: `url(${product.imageUrl})` }}
                        ></div>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <div className="product-text-block p-6">
                      <a href={product.productUrl} className="w-inline-block group">
                        <p className="product-card-title text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {product.title}
                        </p>
                      </a>
                      <div className="price-wrapper flex gap-3 mt-2 items-center">
                        <p className="discount-price font-bold text-lg text-gray-900">{product.price}</p>
                        <p className="regular-price line-through text-gray-500 text-sm">{product.comparePrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}