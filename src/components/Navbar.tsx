'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      // If on homepage, scroll to footer
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on homepage, navigate to homepage and then scroll to footer
      window.location.href = '/#footer';
    }
  };

  const menuItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Vị trí', href: '/vi-tri' },
    { name: 'Phân Khu', href: '/phan-khu' },
    { name: 'Liên Hệ', href: '/lien-he' },
  ];

  const productItems = [
    { name: 'ELEGANT SHOPHOUSE', href: '/san-pham/elegant-shophouse' },
    { name: 'GRAND SHOPHOUSE 5 TẦNG', href: '/san-pham/grand-shophouse-5-tang' },
    { name: 'SHOPHOUSE 4 TẦNG', href: '/san-pham/shophouse-4-tang' },
  ];

  return (
    <nav className="bg-gradient-to-r from-amber-900 to-yellow-800 shadow-lg border-b-2 border-yellow-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/NoblePalaceTayThangLong/TayThangLongIcon.png"
                alt="Noble Palace Tay Thang Long Logo"
                width={147}
                height={78}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-yellow-100 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Trang chủ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link
                href="/vi-tri"
                className="text-yellow-100 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Vị trí
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link
                href="/phan-khu"
                className="text-yellow-100 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Phân Khu
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative group">
                <button className="text-yellow-100 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group flex items-center">
                  Sản Phẩm
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-yellow-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    {productItems.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block px-4 py-3 text-amber-800 hover:bg-yellow-50 hover:text-amber-900 transition-colors duration-200 border-b border-yellow-100 last:border-b-0"
                      >
                        <div className="font-medium">{product.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <a
                href="/#footer"
                onClick={handleContactClick}
                className="text-yellow-100 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group cursor-pointer"
              >
                Liên Hệ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-yellow-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-amber-800 to-yellow-700 border-t border-yellow-400">
            <Link
              href="/"
              className="text-yellow-100 hover:bg-yellow-600 hover:text-white block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            
            <Link
              href="/vi-tri"
              className="text-yellow-100 hover:bg-yellow-600 hover:text-white block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Vị trí
            </Link>
            
            <Link
              href="/phan-khu"
              className="text-yellow-100 hover:bg-yellow-600 hover:text-white block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Phân Khu
            </Link>
            
            {/* Mobile Products Section */}
            <div className="border-t border-yellow-500 pt-2 mt-2">
              <div className="text-yellow-200 px-3 py-2 text-sm font-semibold">Sản Phẩm</div>
              {productItems.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="text-yellow-100 hover:bg-yellow-600 hover:text-white block px-6 py-2 text-sm rounded-md transition-colors duration-300 ml-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            
            <a
              href="/#footer"
              onClick={(e) => {
                handleContactClick(e);
                setIsMenuOpen(false);
              }}
              className="text-yellow-100 hover:bg-yellow-600 hover:text-white block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 cursor-pointer"
            >
              Liên Hệ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;