import React from 'react';
import { HeartHandshake, BookOpen, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onDonateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onDonateClick }) => {
  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-12 px-4 sm:px-6 md:px-12 border-t border-[#0B192C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Scripture Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B192C] shadow-md">
                <HeartHandshake className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white tracking-tight">
                  Grace Basket
                </span>
                <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#0B192C]">
                  2026
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-4">
              Bringing wholesome holiday meals and the good cheer of the season to families who might otherwise go unfed.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-[#D4AF37] bg-white/5 p-3.5 rounded-2xl border border-white/10 max-w-md">
              <BookOpen className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="italic font-medium leading-relaxed">
                “...inasmuch as you did it to one of the least of these My brethren, you did it to Me.” — Matthew 25:40
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#D4AF37] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('mandate')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  Our Divine Mandate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('donation-tiers')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  How Your Donation Helps
                </button>
              </li>
            </ul>
          </div>

          {/* Bank Summary & CTA Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#D4AF37] mb-4">
                Sponsor a Food Basket
              </h4>
              <p className="text-xs text-slate-300 mb-3">
                Choose a sponsorship package to view payment details in the pop-up.
              </p>
            </div>

            <button
              onClick={onDonateClick}
              className="bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-xs sm:text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Sponsor a Basket Today</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Grace Basket. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Serving with love this Christmas</span>
            <span className="text-red-400">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
