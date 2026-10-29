import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Scissors, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Language, AppPage } from '../types';

interface NavbarProps {
  currentLang: Language;
  currentPage: AppPage;
  onPageChange: (page: AppPage) => void;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  currentPage,
  onPageChange,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: AppPage; label: Record<Language, string> }[] = [
    {
      id: 'home',
      label: {
        mr: 'मुख्यपृष्ठ',
        hi: 'होम',
        gu: 'મુખ્યપૃષ્ઠ',
        en: 'Home',
      },
    },
    {
      id: 'services',
      label: {
        mr: 'सेवा व दरपत्रक',
        hi: 'सेवाएं व रेट्स',
        gu: 'સેવાઓ & ભાવ',
        en: 'Services & Rates',
      },
    },
    {
      id: 'packages',
      label: {
        mr: 'पॅकेज बिल्डर',
        hi: 'पैकेज कैलकुलेटर',
        gu: 'પેકેજ કેલ્ક્યુલેટર',
        en: 'Package Builder',
      },
    },
    {
      id: 'about',
      label: {
        mr: 'आमच्याबद्दल',
        hi: 'हमारे बारे में',
        gu: 'અમારા વિશે',
        en: 'About Us',
      },
    },
    {
      id: 'contact',
      label: {
        mr: 'संपर्क व पत्ता',
        hi: 'संपर्क व स्थान',
        gu: 'સંપર્ક & સરનામું',
        en: 'Contact & Map',
      },
    },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'mr', label: 'मराठी' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs transition-all">
      {/* Top subtle bar for location, timing and phone */}
      <div className="bg-[#F8F6F2] border-b border-stone-200/60 text-xs py-2 px-4 hidden md:block text-stone-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-800 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>{SALON_INFO.timings.days[currentLang]}: {SALON_INFO.timings.hours}</span>
            </span>
            <span className="text-stone-300">·</span>
            <span className="flex items-center gap-1 text-stone-600">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>{SALON_INFO.address[currentLang]}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SALON_INFO.owner.phone}`}
              className="flex items-center gap-1 text-amber-700 hover:text-amber-800 transition-colors font-semibold tabular-nums"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SALON_INFO.owner.displayPhone}</span>
            </a>
            <span className="text-stone-300">·</span>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-stone-100 border border-stone-200 rounded px-1.5 py-0.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLanguageChange(l.code)}
                  className={`text-[11px] px-2 py-0.5 rounded font-medium transition-colors ${
                    currentLang === l.code
                      ? 'bg-amber-700 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => {
            onPageChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 text-left group"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-700 text-white flex items-center justify-center shadow-sm group-hover:bg-amber-800 transition-colors">
            <Scissors className="w-4 h-4" />
          </div>
          <div>
            <div className="text-lg md:text-xl font-bold tracking-tight text-stone-900 flex items-center gap-2">
              <span>{SALON_INFO.name[currentLang]}</span>
              <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.2 rounded uppercase">
                A.C.
              </span>
            </div>
            <div className="text-[11px] text-stone-500 font-medium">
              सुरत • निलगिरी • लिंबायत • गोडादरा
            </div>
          </div>
        </button>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onPageChange(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-amber-800 font-bold'
                    : 'hover:text-stone-900'
                }`}
              >
                <span>{link.label[currentLang]}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mobile language switch */}
          <div className="md:hidden flex items-center gap-0.5 bg-stone-100 border border-stone-200 rounded p-0.5">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLanguageChange(l.code)}
                className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                  currentLang === l.code
                    ? 'bg-amber-700 text-white'
                    : 'text-stone-600'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-sm active:scale-95 transition-all whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {currentLang === 'mr'
                ? 'अपॉइंटमेंट बुक करा'
                : currentLang === 'hi'
                ? 'समय बुक करें'
                : currentLang === 'gu'
                ? 'એપોઇન્ટમેન્ટ બુક કરો'
                : 'Book Slot'}
            </span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-200 bg-stone-50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-5 py-4 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onPageChange(link.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left py-2.5 border-b border-stone-100 text-sm font-medium ${
                    isActive ? 'text-amber-800 font-bold' : 'text-stone-700'
                  }`}
                >
                  {link.label[currentLang]}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${SALON_INFO.owner.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold bg-stone-100 text-stone-900 rounded-lg border border-stone-200"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>{SALON_INFO.owner.displayPhone} थेट कॉल करा</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
