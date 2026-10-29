import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Language } from '../types';

interface FloatingActionBarProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-2.5 px-3 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${SALON_INFO.owner.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 active:bg-stone-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-700 mb-0.5" />
          <span className="text-[11px] font-semibold whitespace-nowrap">कॉल करा</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={SALON_INFO.owner.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 active:bg-emerald-100 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-semibold whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Book slot button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-amber-700 text-white font-bold active:bg-amber-800 transition-colors shadow-xs"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] whitespace-nowrap">बुक करा</span>
        </button>
      </div>
    </div>
  );
};
