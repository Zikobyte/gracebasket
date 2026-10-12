import React, { useState } from 'react';
import { Landmark, X, Plus, HeartHandshake } from 'lucide-react';

interface FloatingFramerBarProps {
  onSponsorClick: () => void;
  onViewAccountDetails: () => void;
  onAssistanceClick: () => void;
}

export const FloatingFramerBar: React.FC<FloatingFramerBarProps> = ({
  onSponsorClick,
  onViewAccountDetails,
  onAssistanceClick,
}) => {
  const [showHelpPill, setShowHelpPill] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Donation actions" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* 1. Yellow & Navy Action Buttons Stack */}
      <div className="flex flex-col items-end gap-2">
        {/* Sponsor a Basket button in Action Gold (#D4AF37) */}
        <button
          onClick={onSponsorClick}
          className="bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] text-xs font-black px-4 py-2 rounded-lg shadow-xl transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-1.5 border border-[#D4AF37]"
        >
          <HeartHandshake className="w-4 h-4 stroke-[2.5]" />
          <span>Sponsor a Basket (₦30,000)</span>
        </button>

        {/* View Bank Details button in Midnight Blue (#0B192C) */}
        <button
          onClick={onViewAccountDetails}
          className="bg-[#0B192C] hover:bg-[#152844] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xl transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-2 border border-slate-700/60"
        >
          <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Bank Transfer Details</span>
        </button>
      </div>

      {/* 2. Assistance & Outreach Pill */}
      {showHelpPill && (
        <div className="bg-white rounded-lg p-2 sm:p-2.5 shadow-2xl border border-slate-200 flex items-center gap-2 text-xs text-slate-800 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
          <div
            onClick={onAssistanceClick}
            className="flex-1 cursor-pointer hover:text-[#0B192C] transition-colors"
          >
            <span className="text-[11px] font-medium text-slate-500 block leading-none mb-0.5">
              Have questions or bulk donations?
            </span>
            <span className="font-bold text-[11px] text-[#0B192C] underline decoration-[#D4AF37]">
              Speak with Grace Basket Team
            </span>
          </div>
          <button
            onClick={() => setShowHelpPill(false)}
            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* 3. Grace Basket Outreach Badge */}
      <div className="flex items-center gap-1.5 mt-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200 text-[#0B192C] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span>Grace Basket 2026</span>
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-6 rounded-md bg-white/95 border border-slate-200 text-[#0B192C] hover:bg-slate-50 flex items-center justify-center shadow-md text-xs cursor-pointer"
          aria-label="Expand info"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Popover */}
      {isOpen && (
        <div className="bg-white rounded-xl p-3.5 shadow-2xl border border-slate-200 text-xs text-slate-700 w-56 mb-1">
          <p className="font-black text-[#0B192C] mb-1">Matthew 25:40 Mandate</p>
          <p className="text-[11px] text-slate-600 leading-snug">
            “...inasmuch as you did it to one of the least of these My brethren, you did it to Me.”
          </p>
        </div>
      )}
    </aside>
  );
};
