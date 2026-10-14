import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { DonationTier } from '../types';

interface ServiceDetailViewProps {
  tier: DonationTier;
  onBackToHome: () => void;
  onDonateClick: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  tier,
  onBackToHome,
  onDonateClick,
}) => {
  return (
    <div className="min-h-screen bg-white text-[#0B192C] pb-24">
      {/* Top Navigation Bar with Home button */}
      <div className="pt-6 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="bg-[#0B192C] hover:bg-[#152844] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="text-xs uppercase tracking-widest text-[#0B192C]/60 font-mono font-bold">
          Sponsorship Package {tier.num}
        </span>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-[#0B192C] font-bold text-xs mb-3 border border-[#D4AF37]/40">
            <Heart className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
            <span>Feeds {tier.families}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0B192C] tracking-tight leading-tight mb-4">
            {tier.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed">
            {tier.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] sm:aspect-[16/8.5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-10 bg-[#0B192C]">
          <img
            src={tier.image}
            alt={tier.title}
            className="w-full h-full object-cover object-center filter brightness-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            {tier.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white text-[#0B192C] text-xs font-black shadow-md border border-[#D4AF37]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Breakdown & Giving Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          {/* Left Details */}
          <div className="md:col-span-7">
            <h3 className="text-2xl font-black text-[#0B192C] mb-3 tracking-tight">
              Your Food Basket Sponsorship
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              {tier.description}
            </p>

            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#0B192C]/70 mb-3">
              What Your Sponsorship Supports:
            </h4>
            <div className="space-y-2.5">
              {tier.basketContents?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#0B192C] text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Payment details are available in the payment modal. */}
          <div className="md:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#0B192C] font-extrabold bg-[#D4AF37]/30 px-2.5 py-1 rounded-md">
                Direct Sponsorship
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-[#0B192C] mt-2 mb-1">
                {tier.amount}
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Supports {tier.families} with the same standard Christmas food hamper for each family.
              </p>
            </div>

            <button
              onClick={onDonateClick}
              className="w-full bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm py-3.5 px-5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>View Payment Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
