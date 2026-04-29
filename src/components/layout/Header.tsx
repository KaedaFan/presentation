'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navigation = [
  { name: 'Главная', href: '/' },
  {
    name: 'Проекты',
    href: '/projects',
    children: [
      { name: 'Жилые комплексы', href: '/projects/residential' },
      { name: 'Коммерческая недвижимость', href: '/projects/commercial' },
      { name: 'Инфраструктура', href: '/projects/infrastructure' },
    ],
  },
  { name: 'О компании', href: '/about' },
  { name: 'Услуги', href: '/services' },
  { name: 'Контакты', href: '/contacts' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">С</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold text-gray-900 leading-tight">СтройПроДемо</p>
                <p className="text-xs text-gray-500 leading-tight">Строительная компания</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <>
                        <div className="absolute top-full left-0 w-full h-2" />
                        <div className="absolute top-[calc(100%+8px)] left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="tel:+73911234567"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+7 (391) 123-45-67</span>
            </a>
            <Link
              href="/contacts"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25"
            >
              Связаться с нами
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-orange-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg cursor-pointer">
                        {item.name}
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+73911234567"
                className="flex items-center gap-2 px-3 text-sm font-medium text-gray-700"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (391) 123-45-67</span>
              </a>
              <Link
                href="/contacts"
                className="block text-center mx-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}