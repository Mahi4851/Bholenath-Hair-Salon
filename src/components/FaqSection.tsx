import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/salonData';
import { Language } from '../types';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#F8F6F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-amber-800 tracking-wider uppercase mb-1">
            {currentLang === 'mr' ? 'सतत विचारले जाणारे प्रश्न' :
             currentLang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' :
             'Frequently Asked Questions'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {currentLang === 'mr' ? 'काही शंका किंवा प्रश्न?' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            सलून सुविधा, स्वच्छता हमी, वेळ आणि बुकिंगबद्दल संपूर्ण माहिती.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                >
                  <span className="text-sm font-bold text-stone-900 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>{item.q[currentLang] || item.q.mr}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed bg-stone-50/50">
                    {item.a[currentLang] || item.a.mr}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
