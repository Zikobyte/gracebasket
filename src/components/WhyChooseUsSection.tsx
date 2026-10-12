import React, { useState } from 'react';
import { ArrowRight, Cross, Users, BookOpen, Copy, Check, Landmark, ShieldCheck } from 'lucide-react';
import { FAITH_PILLARS_DATA, BANK_DETAILS } from '../data';

interface WhyChooseUsSectionProps {
  onDonateClick: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onDonateClick,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getPillarIcon = (pillarId: string) => {
    switch (pillarId) {
      case 'mandate':
        return <Cross className="w-5 h-5 text-[#0B192C] stroke-[2.5]" />;
      case 'help-families':
        return <Users className="w-5 h-5 text-[#0B192C] stroke-[2.5]" />;
      case 'inherit-promises':
        // Bible icon used for Inherit His Promises
        return <BookOpen className="w-5 h-5 text-[#0B192C] stroke-[2.5]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#0B192C] stroke-[2.5]" />;
    }
  };

  return (
    <section id="promises" className="px-3 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-white">
      {/* White Clean Background Container (as requested: section above footer must have white background) */}
      <div className="max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] md:rounded-[44px] bg-white text-[#0B192C] p-6 sm:p-10 md:p-14 border border-slate-200/90 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Heading, Subhead, Scripture & Account Details Box */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="mb-5 sm:mb-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#0B192C]/10 border border-[#0B192C]/20 text-[#0B192C] text-xs font-black tracking-wide">
                  {FAITH_PILLARS_DATA.badge}
                </span>
              </div>

              {/* Headline in Midnight Blue (#0B192C) */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] tracking-tight leading-[1.12] mb-5">
                {FAITH_PILLARS_DATA.headline}
              </h2>

              {/* Subhead */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {FAITH_PILLARS_DATA.subhead}
              </p>
            </div>

            {/* Account Details Box with Copy Button */}
            <div id="account-details" className="pt-6 border-t border-slate-200">
              <div className="mb-3">
                <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-black flex items-center gap-1.5">
                  <Landmark className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sponsor a food basket today</span>
                </p>
                <h4 className="text-lg font-bold text-[#0B192C] mt-1">
                  Official Bank Transfer Details
                </h4>
              </div>

              {/* Bank Info Card with White background & Midnight Blue accents */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Bank Name</span>
                    <span className="font-extrabold text-[#0B192C] text-sm">{BANK_DETAILS.bankName}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Account Name</span>
                    <span className="font-bold text-[#0B192C] text-right text-xs sm:text-sm">
                      {BANK_DETAILS.accountName}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Account Number</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-[#0B192C] text-base tracking-wider">
                        {BANK_DETAILS.accountNumber}
                      </span>
                      <button
                        onClick={handleCopyAccount}
                        className="bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] px-2.5 py-1 rounded-md text-[11px] font-black flex items-center gap-1 transition-all active:scale-95 cursor-pointer shadow-xs"
                        aria-label="Copy account number"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Payment Reference</span>
                    <span className="font-bold text-slate-700">{BANK_DETAILS.reference}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>100% of proceeds go directly to food purchases and community distribution.</span>
                </div>
              </div>

              {/* Sponsor Button */}
              <div className="mt-5">
                <button
                  onClick={onDonateClick}
                  className="group bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-3 transition-all duration-200 shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Donate Online Now</span>
                  <div className="w-6 h-6 rounded-full bg-[#0B192C] text-[#D4AF37] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Outreach Landscape Photo & 3 Faith Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Outreach Photo Container */}
            <div className="relative aspect-[16/7] sm:aspect-[16/7.5] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={FAITH_PILLARS_DATA.image}
                alt="Grace Basket community members receiving food hampers"
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B192C] text-xs font-bold shadow-md">
                Feeding Families with Dignity & Love
              </div>
            </div>

            {/* 3 Vertically Stacked Pillar Cards */}
            <div className="flex flex-col gap-3.5 mt-2">
              {FAITH_PILLARS_DATA.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="group bg-slate-50 hover:bg-amber-50/40 border border-slate-200/90 hover:border-[#D4AF37]/60 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-4 sm:gap-5 transition-all duration-200 shadow-2xs"
                >
                  {/* Champagne Gold (#D4AF37) Circle Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform mt-1 sm:mt-0">
                    {getPillarIcon(pillar.id)}
                  </div>

                  {/* Pillar Text */}
                  <div className="flex flex-col">
                    <h3 className="font-bold text-[#0B192C] text-base sm:text-lg tracking-tight group-hover:text-[#D4AF37] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
