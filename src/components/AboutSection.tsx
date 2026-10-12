import React from 'react';
import { ArrowRight, Star, Heart } from 'lucide-react';
import { ABOUT_DATA } from '../data';
import avatarWoman from '../assets/images/black_avatar_woman_1791800343364.jpg';
import avatarMan from '../assets/images/black_avatar_man_1791800369435.jpg';
import avatarVolunteer from '../assets/images/black_avatar_volunteer_1791800404201.jpg';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
  onDonateClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMoreClick,
  onDonateClick,
}) => {
  // Calling the AI-generated Black skin avatars inside code
  const avatars = [avatarWoman, avatarMan, avatarVolunteer];

  return (
    <section id="mandate" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* 2-Column Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Grace Basket Distribution Image with Outreach Badge */}
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
          <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
            {/* Main Image Container using provided image */}
            <div className="relative aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl bg-[#0B192C]/10 border border-slate-200">
              <img
                src={ABOUT_DATA.image}
                alt="Grace Basket community food outreach"
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Satisfaction / Direct Impact Floating Card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:left-6 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/90 flex items-center justify-between gap-3">
              {/* Avatar Stack of AI-generated Black Skin Individuals */}
              <div className="flex items-center">
                <div className="flex -space-x-2.5">
                  {avatars.map((avatarImg, idx) => (
                    <img
                      key={idx}
                      src={avatarImg}
                      alt={`Outreach Volunteer ${idx + 1}`}
                      className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-[#0B192C] border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Stars & Rating */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-0.5 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs font-black text-[#0B192C] mt-0.5">
                  {ABOUT_DATA.clientSatisfaction}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Mandate, Headline, Scriptural Foundation */}
        <div className="lg:col-span-7 flex flex-col justify-center mt-6 lg:mt-0">
          {/* Badge */}
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0B192C]/10 border border-[#0B192C]/20 text-[#0B192C] text-xs font-black tracking-wide mb-4">
              {ABOUT_DATA.badge}
            </span>
          </div>

          {/* Scripture Accent Quote */}
          <p className="text-[#D4AF37] text-sm md:text-base font-bold italic mb-3">
            {ABOUT_DATA.scriptureTheme}
          </p>

          {/* Large Headline in Midnight Blue (#0B192C) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-[1.28] mb-6">
            {ABOUT_DATA.headline}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            <strong className="text-[#0B192C] font-black">Fulfil Christ’s Mandate:</strong> Share the love that our Saviour has shown to us. He has given us this mandate in the two commandments above all – Love God and Love your neighbor. Your donation to Grace Basket 2026 brings His word to action.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {/* Primary Action Gold CTA button */}
            <button
              onClick={onDonateClick}
              className="group bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm px-6 py-3 rounded-full inline-flex items-center gap-3 transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
            >
              <span>Sponsor a Food Basket</span>
              <div className="w-6 h-6 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            <button
              onClick={onLearnMoreClick}
              className="px-5 py-3 rounded-full border border-[#0B192C]/30 hover:border-[#0B192C] text-[#0B192C] text-sm font-bold transition-all hover:bg-slate-50 cursor-pointer"
            >
              Read Divine Mandate
            </button>
          </div>

          {/* Stats Row */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-8">
            {ABOUT_DATA.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-[#0B192C] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate / Ministry Partners Bar */}
      <div className="mt-16 sm:mt-24">
        <p className="text-center text-xs text-[#0B192C]/60 font-bold tracking-wider uppercase mb-6">
          Supported by Christian Fellowships & Compassionate Givers Worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {ABOUT_DATA.partnerLogos.map((partner, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-2xl h-24 sm:h-28 flex items-center justify-center p-4 transition-all duration-200 group shadow-2xs cursor-default text-center"
            >
              <span className="font-extrabold tracking-wide text-[#0B192C] text-sm sm:text-base opacity-80 group-hover:opacity-100 group-hover:text-[#D4AF37] transition-all">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
