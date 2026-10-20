import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DONATION_TIERS } from '../data';

interface DonationTiersSectionProps {
  onOpenPackages: () => void;
}

export const ServicesSection: React.FC<DonationTiersSectionProps> = ({
  onOpenPackages,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTier = DONATION_TIERS[activeIndex] ?? DONATION_TIERS[0];

  return (
    <section id="donation-tiers" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto bg-white">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#0B192C]/10 border border-[#0B192C]/20 text-[#0B192C] text-xs font-black tracking-wide mb-4">
          How Your Donation Helps
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#0B192C] tracking-tight leading-[1.15] mb-3">
          Sponsor a Food Basket
          <br className="hidden sm:inline" /> for Christmas 2026
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          God never forgets your labour of love. Every food basket shared is love shown in His name. Bring hope to families, serve diligently, and inherit God’s promises.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/4.8] sm:aspect-[4/4.2] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#0B192C] border border-slate-200">
            {DONATION_TIERS.map((tier, index) => (
              <div
                key={tier.id}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  index === activeIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent" />
              </div>
            ))}

            <div className="absolute bottom-5 left-5 z-20 bg-[#0B192C]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/50 text-white text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>{activeTier.amount} feeds {activeTier.families}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-3">
          {DONATION_TIERS.map((tier, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={tier.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                  isActive
                    ? 'bg-amber-50/50 border-[#D4AF37] shadow-sm'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="text-xs sm:text-sm font-black text-[#0B192C]/60 font-mono">
                      {tier.num}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B192C] tracking-tight">
                        {tier.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {tier.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                    {tier.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          tagIdx === 0
                            ? 'bg-amber-100 text-[#0B192C] border border-[#D4AF37]/40'
                            : 'bg-slate-100 text-[#0B192C]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:hidden flex items-center gap-1.5 mt-3 pl-8">
                  {tier.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded-full bg-amber-100 text-[#0B192C] text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={onOpenPackages}
          className="group bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm sm:text-base px-7 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
        >
          <span>What’s in a Family Basket?</span>
          <span className="w-7 h-7 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </span>
        </button>
      </div>
    </section>
  );
};
