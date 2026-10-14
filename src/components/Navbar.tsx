import React, { useState, useEffect } from 'react';
import { ArrowRight, HeartHandshake, Menu, X, Landmark, Heart } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onDonateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onDonateClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'mandate', label: 'Our Mandate' },
    { id: 'donation-tiers', label: 'How Your Gift Helps' },
  ];

  const handleNavClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 px-4 md:px-10 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80'
          : 'py-4 sm:py-5 bg-white/70 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with Midnight Blue (#0B192C) & Champagne Gold (#D4AF37) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs hover:shadow-md transition-all shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B192C] shadow-xs group-hover:scale-105 transition-transform">
            <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              {/* Midnight Blue (#0B192C) */}
              <span className="text-lg sm:text-2xl font-black text-[#0B192C] tracking-tight">
                Grace Basket
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#0B192C]">
                2026
              </span>
            </div>
            <span className="text-[10px] text-[#0B192C]/80 font-semibold tracking-wide hidden sm:inline">
              Christmas Food Outreach
            </span>
          </div>
        </button>

        {/* Desktop Navigation Capsule */}
        <nav className="hidden lg:flex items-center bg-[#0B192C]/95 backdrop-blur-md border border-white/15 rounded-full p-1.5 shadow-xl">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-xs md:text-sm rounded-full font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#0B192C] font-bold shadow-md'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Action Gold CTA Button */}
          <button
            onClick={() => {
              onDonateClick();
              setMobileMenuOpen(false);
            }}
            className="hidden sm:flex group bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-extrabold text-xs md:text-sm px-5 py-2.5 rounded-full items-center gap-2 transition-all duration-200 shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            <span>Sponsor a Basket</span>
            <div className="w-5 h-5 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </button>

          {/* Hamburger Menu Toggle Button (Visible on mobile/tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center border border-white/20 shadow-md hover:bg-[#132642] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-auto max-w-lg bg-[#0B192C] text-white rounded-3xl p-5 shadow-2xl border border-white/15 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1 pb-4 border-b border-white/10">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-left transition-all ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#0B192C]'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom CTAs */}
          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onDonateClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Sponsor a Food Basket (₦30,000)</span>
            </button>

            <button
              onClick={() => {
                onDonateClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
            >
              <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>View Payment Details</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
