import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { DONATION_TIERS } from '../data';
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
  const basketContents = DONATION_TIERS[0].basketContents;

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
          Grace Basket 2026
        </span>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#0B192C] font-bold text-xs mb-3 border border-[#D4AF37]/40">
            <Heart className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
            <span>One standard food hamper for every family</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            What’s in a Family Basket?
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed">
            Sponsor one food basket, feed five or ten families, or become a Community Outreach partner by sponsoring 20 or more hampers. Learn where your donation goes below.
          </p>
        </div>

        <div className="relative aspect-[16/9] sm:aspect-[16/8.5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-10 bg-[#0B192C]">
          <img
            src={DONATION_TIERS[0].image}
            alt="Grace Basket Christmas food hamper"
            className="w-full h-full object-cover object-center filter brightness-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#0B192C] text-xs font-black shadow-md border border-[#D4AF37]">
              Standard Christmas Food Hamper
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          <section className="md:col-span-7">
            <h2 className="text-2xl font-black text-[#0B192C] mb-3 tracking-tight">
              Food Basket Contents
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              Every family receives the same standard Grace Basket Christmas food hamper.
            </p>

            <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#0B192C]/70 mb-3">
              Included in one family’s Christmas food package
            </h3>
            <div className="space-y-2.5">
              {basketContents.map((item) => (
                <div key={item} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#0B192C] text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="md:col-span-5 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200">
            <h2 className="text-xl font-black text-[#0B192C] mb-4 tracking-tight">
              Choose how you’d like to give
            </h2>
            <div className="space-y-3">
              {tiers.map((tier) => (
                <div key={tier.id} className="bg-white rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-[#0B192C]">{tier.title}</h3>
                    <span className="text-sm font-black text-[#0B192C] whitespace-nowrap">{tier.amount}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {tier.basketContents.join('. ')}
                  </p>
                  <button
                    onClick={() => onDonateClick(tier)}
                    className="w-full mt-3 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Sponsor this option</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
