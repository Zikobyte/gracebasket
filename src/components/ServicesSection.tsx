import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DonationTiersSectionProps {
  onOpenPackages: () => void;
}

export const ServicesSection: React.FC<DonationTiersSectionProps> = ({
  onOpenPackages,
}) => {
  return (
    <section id="donation-tiers" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto bg-white">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
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

      <button
        type="button"
        onClick={onOpenPackages}
        className="group w-full max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-slate-50 hover:bg-amber-50/60 hover:border-[#D4AF37] p-6 sm:p-10 text-left shadow-sm hover:shadow-md transition-all"
      >
        <span className="flex items-center justify-between gap-5">
          <span className="text-lg sm:text-2xl font-bold text-[#0B192C] leading-relaxed">
            Choose how you’d like to give: sponsor a single food basket, feed five or ten families, or become a Community Outreach Partner by sponsoring 20 or more hampers.
          </span>
          <span className="w-11 h-11 shrink-0 rounded-full bg-[#D4AF37] text-[#0B192C] flex items-center justify-center transition-transform group-hover:translate-x-1">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </span>
        </span>
        <span className="inline-block mt-5 text-sm font-bold text-slate-600 group-hover:text-[#0B192C]">
          View all giving options
        </span>
      </button>
    </section>
  );
};
