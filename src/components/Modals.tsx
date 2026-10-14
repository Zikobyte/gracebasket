import React, { useState } from 'react';
import { X, Check, Copy, Landmark, ShieldCheck } from 'lucide-react';
import { BANK_DETAILS } from '../data';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  selectedAmount?: string;
}

export const Modal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  title = "Sponsor a Food Basket Today",
  selectedAmount,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B192C]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#0B192C] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B192C]/10 text-[#0B192C] text-xs font-bold mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Direct Bank Transfer</span>
          </div>
          <h3 className="text-2xl font-black text-[#0B192C] tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {selectedAmount
              ? `Transfer ${selectedAmount} directly to sponsor this Christmas package.`
              : 'Transfer directly using your bank app or USSD to support Grace Basket 2026.'}
          </p>
        </div>

        {/* Bank Details Card */}
        <div className="bg-[#0B192C] text-white rounded-2xl p-5 sm:p-6 border border-[#D4AF37]/35 shadow-xl mb-5 space-y-3.5">
          <div className="flex justify-between items-center text-xs sm:text-sm border-b border-white/10 pb-2.5">
            <span className="text-slate-400">Bank Name</span>
            <span className="font-extrabold text-white">{BANK_DETAILS.bankName}</span>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm border-b border-white/10 pb-2.5">
            <span className="text-slate-400">Account Name</span>
            <span className="font-bold text-[#D4AF37] text-right">
              {BANK_DETAILS.accountName}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm border-b border-white/10 pb-2.5">
            <span className="text-slate-400">Account Number</span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-lg sm:text-xl text-white tracking-wider">
                {BANK_DETAILS.accountNumber}
              </span>
              <button
                onClick={handleCopyAccount}
                className="bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] px-3 py-1 rounded-md text-xs font-black flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-400">Payment Reference</span>
            <span className="font-semibold text-slate-200">{BANK_DETAILS.reference}</span>
          </div>
        </div>

        {/* Donation Guide */}
        <div className="p-4 bg-amber-50/90 rounded-2xl border border-[#D4AF37]/30 text-xs text-[#0B192C] mb-6 space-y-1.5">
          <p className="font-bold text-xs text-[#0B192C] flex items-center gap-1.5">
            <span>How Your Donation Helps:</span>
          </p>
          <div className="grid grid-cols-3 gap-2 pt-1 text-center font-bold text-[11px]">
            <div className="bg-white p-2 rounded-xl border border-[#D4AF37]/40 shadow-2xs">
              <div className="text-[#0B192C] font-black">₦30,000</div>
              <div className="text-slate-500 font-medium text-[10px]">1 Family</div>
            </div>
            <div className="bg-white p-2 rounded-xl border border-[#D4AF37]/40 shadow-2xs">
              <div className="text-[#0B192C] font-black">₦150,000</div>
              <div className="text-slate-500 font-medium text-[10px]">5 Families</div>
            </div>
            <div className="bg-white p-2 rounded-xl border border-[#D4AF37]/40 shadow-2xs">
              <div className="text-[#0B192C] font-black">₦300,000</div>
              <div className="text-slate-500 font-medium text-[10px]">10 Families</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Your gift supports Grace Basket’s Christmas food outreach.</span>
        </div>

        {/* Action Button: Copy & Done */}
        <div className="flex gap-3">
          <button
            onClick={handleCopyAccount}
            className="flex-1 bg-[#D4AF37] hover:bg-[#c49f2b] text-[#0B192C] font-black text-xs sm:text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Account Number Copied!' : 'Copy Account Number'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#0B192C] font-bold text-xs sm:text-sm rounded-full transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
