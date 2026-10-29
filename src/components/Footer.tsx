import React from 'react';
import { Scissors, Phone, MessageSquare, MapPin, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Language, AppPage } from '../types';

interface FooterProps {
  currentLang: Language;
  onPageChange: (page: AppPage) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onPageChange, onOpenBooking }) => {
  return (
    <footer className="bg-[#F4F1EA] border-t border-stone-300 text-stone-600 text-xs py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-stone-300">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
              <div className="w-7 h-7 rounded-md bg-amber-700 text-white flex items-center justify-center">
                <Scissors className="w-4 h-4" />
              </div>
              <span>{SALON_INFO.name[currentLang]}</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">
              {currentLang === 'mr'
                ? 'सुरतमधील लिंबायत, निलगिरी आणि गोडादरा परिसरातील पुरुषांचे हक्काचे A.C. मेन्स सलून. दर्जेदार कटिंग व ग्रूमिंग सेवा.'
                : 'Surat\'s premier gentlemen\'s salon offering master hair cuts, beard styling, facials and groom packages.'}
            </p>
            <div className="text-amber-800 font-bold text-xs pt-1">
              संस्थापक: {SALON_INFO.owner.name[currentLang]}
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight">वेबसाइट पेजेस</h4>
            <ul className="space-y-1.5 font-medium">
              <li>
                <button
                  onClick={() => {
                    onPageChange('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-800 transition-colors"
                >
                  मुख्यपृष्ठ (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onPageChange('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-800 transition-colors"
                >
                  सेवा व दरपत्रक (Services & Rates)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onPageChange('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-800 transition-colors"
                >
                  कस्टमाइझ पॅकेज बिल्डर (Package Builder)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onPageChange('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-800 transition-colors"
                >
                  आमच्याबद्दल व प्रविण सर (About Us)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onPageChange('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-800 transition-colors"
                >
                  संपर्क व लोकेशन (Contact & Location)
                </button>
              </li>
            </ul>
          </div>

          {/* Address & Timings */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight">पत्ता व वेळ</h4>
            <p className="leading-relaxed text-stone-700">
              {SALON_INFO.address[currentLang]}
            </p>
            <div className="pt-1 text-stone-600">
              <span className="text-emerald-800 font-bold">वेळ:</span> {SALON_INFO.timings.hours}
              <br />
              <span className="text-stone-500">सोमवार ते रविवार (सातों दिवस)</span>
            </div>
          </div>

          {/* Direct Contact & Book */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight">थेट संपर्क</h4>
            <div className="space-y-2">
              <a
                href={`tel:${SALON_INFO.owner.phone}`}
                className="flex items-center gap-2 text-stone-800 hover:text-amber-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span className="font-bold tabular-nums">{SALON_INFO.owner.displayPhone}</span>
              </a>

              <a
                href={SALON_INFO.owner.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-800 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp वर मेसेज करा</span>
              </a>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-800 hover:text-stone-950 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-700" />
                <span>Google Maps दिशानिर्देश</span>
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-2 py-2.5 px-3 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-lg text-xs transition-colors shadow-2xs"
            >
              ऑनलाइन अपॉइंटमेंट बुक करा
            </button>
          </div>

        </div>

        {/* Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} भोलेनाथ A.C. हेअर आर्ट (Bholenath Hair Art). सर्व हक्क सुरक्षित.
            <div className="text-stone-400 mt-0.5">संतोषी नगर, शांति नगर गेट, लिंबायत - गोडादरा रोड, सुरत, गुजरात</div>
          </div>
        </div>

      </div>
    </footer>
  );
};
