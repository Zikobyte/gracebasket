import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { DonationTier } from '../types';

interface ServiceDetailViewProps {
  tiers: DonationTier[];
  onBackToHome: () => void;
  onDonateClick: (tier: DonationTier) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  tiers,
  onBackToHome,
  onDonateClick,
}) => {
  return (
    <div className="min-h-screen bg-white text-[#0B192C] pb-24">
      <div className="pt-6 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="bg-[#0B192C] hover:bg-[#152844] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="text-xs uppercase tracking-widest text-[#0B192C]/60 font-mono font-bold">
          Food Basket Giving Options
        </span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            Choose how you’d like to give
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed">
            Every family receives the same standard Grace Basket Christmas food hamper. Choose a sponsorship option below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <article key={tier.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="relative aspect-[16/8] bg-[#0B192C]">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0B192C] shadow-md">
                  <Heart className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                  <span>Feeds {tier.families}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Sponsorship {tier.num}
                    </p>
                    <h2 className="text-2xl font-black text-[#0B192C] tracking-tight">
                      {tier.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-[#D4AF37]/50 bg-amber-50 px-3 py-1.5 text-sm font-black text-[#0B192C]">
                    {tier.amount}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed mb-5">
                  {tier.description}
                </p>

                <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#0B192C]/70 mb-3">
                  What your sponsorship supports
                </h3>
                <div className="space-y-2">
                  {tier.basketContents.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-[#0B192C] text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onDonateClick(tier)}
                  className="w-full mt-6 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm py-3.5 px-5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Sponsor this option</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};
