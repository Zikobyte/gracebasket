import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Heart, Landmark } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroProps {
  onDonateClick: () => void;
  onViewAccountDetails: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDonateClick,
  onViewAccountDetails,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Soft slide rotation between the provided hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-3 sm:px-6 md:px-10 pt-3 pb-8 md:pb-14">
      {/* Hero Outer Container with Midnight Blue (#0B192C) Aesthetic */}
      <div className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[740px] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-10 md:p-14 text-white border border-[#0B192C]/20 bg-[#0B192C]">
        {/* Background Image Carousel (Using user's provided images) */}
        <div className="absolute inset-0 z-0 bg-[#0B192C]">
          {HERO_DATA.heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === activeSlide ? 'opacity-100 z-1' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
              />
            </div>
          ))}

          {/* Reduced Intensity Blue Overlay: Midnight Blue (#0B192C) with soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/75 via-[#0B192C]/40 to-black/25 pointer-events-none z-2" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-[#0B192C]/30 pointer-events-none z-2" />
        </div>

        {/* Top Header & Scripture Badge with Bible Icon */}
        <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 max-w-3xl">
          {/* Pill Badge with Bible Icon */}
          <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B192C]/80 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] text-xs sm:text-sm font-bold mb-5 sm:mb-6 shadow-md">
            <BookOpen className="w-4 h-4 text-[#D4AF37] stroke-[2.2]" />
            <span>{HERO_DATA.badge}</span>
          </div>

          {/* Main Title: Share the Love of Christ with more Families */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.08] drop-shadow-lg">
            <span>{HERO_DATA.titlePart1}</span>
            <br />
            <span>{HERO_DATA.titlePart2} </span>
            <span className="font-editorial italic font-normal text-[#D4AF37] drop-shadow-md">
              {HERO_DATA.titlePart3}
            </span>
          </h1>

          {/* Subheadline & Matthew 25:40 Core Theme */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-100 font-medium max-w-xl leading-relaxed drop-shadow">
            {HERO_DATA.subheadline}
          </p>

          <div className="mt-3.5 inline-flex items-center gap-2 text-xs sm:text-sm text-[#D4AF37] font-medium italic bg-[#0B192C]/70 px-3.5 py-1.5 rounded-xl border border-[#D4AF37]/30 backdrop-blur-md max-w-full">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37] shrink-0" />
            <span className="truncate sm:whitespace-normal">
              {HERO_DATA.scripture} ({HERO_DATA.scriptureRef})
            </span>
          </div>
        </div>

        {/* Bottom Hero Area: Replacing the two left cards with Two CTAs as requested */}
        <div className="relative z-10 pt-10 sm:pt-14 md:pt-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          {/* Two Prominent CTA Buttons (replacing previous two cards) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto">
            {/* Primary Action Gold (#D4AF37) CTA Button */}
            <button
              onClick={onDonateClick}
              className="group bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-200 shadow-2xl active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current text-[#0B192C]" />
              <span>Sponsor a Food Basket (₦30,000)</span>
              <div className="w-6 h-6 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            {/* Secondary Midnight Blue & Gold Outlined CTA Button */}
            <button
              onClick={onViewAccountDetails}
              className="group bg-[#0B192C]/85 hover:bg-[#0B192C] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2.5 border border-[#D4AF37]/60 hover:border-[#D4AF37] backdrop-blur-md transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
            >
              <Landmark className="w-4 h-4 text-[#D4AF37]" />
              <span>Bank Transfer Details</span>
            </button>
          </div>

          {/* Right Floating Subtext */}
          <div className="max-w-sm w-full lg:w-auto text-left lg:text-right">
            <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed drop-shadow">
              100% of your gift directly buys grain hampers, turkey portions, and vegetable oils for Christmas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
