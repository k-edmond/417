'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { lang: language, setLang: setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kr' : 'en');
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold tracking-wide uppercase transition-colors ${
                  isScrolled ? 'text-[#0ABAB5]' : 'text-[#0ABAB5]'
                }`}
              >
                ELEGENN
              </span>
              <span
                className={`text-2xl font-bold tracking-wide uppercase ml-1 transition-colors ${
                  isScrolled ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                GLOBAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* HOME */}
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[#0ABAB5] ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}
            >
              HOME
            </Link>

            {/* ABOUT Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                onBlur={closeDropdown}
                onMouseEnter={() => setOpenDropdown('about')}
                className={`text-sm font-medium transition-colors hover:text-[#0ABAB5] flex items-center gap-1 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-600'
                } ${openDropdown === 'about' ? 'text-[#0ABAB5]' : ''}`}
              >
                ABOUT <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'about' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href="/about"
                    onClick={closeDropdown}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#0ABAB5] hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about#technology"
                    onClick={closeDropdown}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#0ABAB5] hover:text-white transition-colors"
                  >
                    Technology
                  </Link>
                  <Link
                    href="/about#treatment"
                    onClick={closeDropdown}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#0ABAB5] hover:text-white transition-colors"
                  >
                    Treatment Guide
                  </Link>
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors hover:text-[#0ABAB5] ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}
            >
              PRODUCTS
            </Link>

            {/* CONTACT Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('contact')}
                onBlur={closeDropdown}
                onMouseEnter={() => setOpenDropdown('contact')}
                className={`text-sm font-medium transition-colors hover:text-[#0ABAB5] flex items-center gap-1 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-600'
                } ${openDropdown === 'contact' ? 'text-[#0ABAB5]' : ''}`}
              >
                CONTACT <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'contact' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href="/contact"
                    onClick={closeDropdown}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#0ABAB5] hover:text-white transition-colors"
                  >
                    Inquiry
                  </Link>
                  <Link
                    href="/contact#network"
                    onClick={closeDropdown}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#0ABAB5] hover:text-white transition-colors"
                  >
                    Global Network
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase">{language}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-gray-600'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-base font-medium text-gray-700 hover:text-[#0ABAB5]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>

              {/* About Submenu - Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-about')}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 mb-2"
                >
                  ABOUT
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-about' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-about' && (
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/about"
                      className="block text-sm text-gray-500 hover:text-[#0ABAB5]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/about#technology"
                      className="block text-sm text-gray-500 hover:text-[#0ABAB5]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      Technology
                    </Link>
                    <Link
                      href="/about#treatment"
                      className="block text-sm text-gray-500 hover:text-[#0ABAB5]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      Treatment Guide
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/products"
                className="block text-base font-medium text-gray-700 hover:text-[#0ABAB5]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRODUCTS
              </Link>

              {/* Contact Submenu - Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-contact')}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 mb-2"
                >
                  CONTACT
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-contact' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-contact' && (
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/contact"
                      className="block text-sm text-gray-500 hover:text-[#0ABAB5]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      Inquiry
                    </Link>
                    <Link
                      href="/contact#network"
                      className="block text-sm text-gray-500 hover:text-[#0ABAB5]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      Global Network
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
