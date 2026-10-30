import React from 'react';
import { ArrowRight, Cross, Sparkles, Users } from 'lucide-react';
import { ABOUT_DATA } from '../data';

interface AboutSectionProps {
  onDonateClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onDonateClick,
}) => {
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

          </div>
        </div>

        {/* Right column: Mandate introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center mt-6 lg:mt-0">
          {/* Badge */}
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0B192C]/10 border border-[#0B192C]/20 text-[#0B192C] text-xs font-black tracking-wide mb-4">
              {ABOUT_DATA.badge}
            </span>
          </div>

          {/* Mandate and guiding principles */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-[1.28] mb-6">
            For most of us, Christmas is laughter, a full table, and family. Join us in bringing the good cheer of the season to more families.
          </h2>

          <div className="space-y-4">
            {ABOUT_DATA.pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#D4AF37] flex items-center justify-center">
                    {pillar.icon === 'cross' ? <Cross className="w-4 h-4 text-[#0B192C]" /> :
                      pillar.icon === 'users' ? <Users className="w-4 h-4 text-[#0B192C]" /> :
                        <Sparkles className="w-4 h-4 text-[#0B192C]" />}
                  </div>
                  <h3 className="font-bold text-[#0B192C]">{pillar.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-12">
            <button
              onClick={onDonateClick}
              className="group bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm px-6 py-3 rounded-full inline-flex items-center gap-3 transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
            >
              <span>Sponsor a Food Basket</span>
              <div className="w-6 h-6 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-200 flex justify-center">
        {ABOUT_DATA.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="text-5xl sm:text-6xl font-black text-[#0B192C] tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
