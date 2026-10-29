import React from 'react';
import { Calendar, MessageSquare, Phone, Snowflake, Award, Sparkles, ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react';
import { SALON_INFO, SALON_HIGHLIGHTS } from '../data/salonData';
import { Language, AppPage } from '../types';
import salonInteriorImage from '../assets/images/luxury_salon_interior_1793292325245.jpg';

interface HeroSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onNavigate: (page: AppPage) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenBooking,
  onNavigate,
}) => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Snowflake':
        return <Snowflake className="w-5 h-5 text-sky-700" />;
      case 'Users':
        return <Award className="w-5 h-5 text-amber-700" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-[#FAF9F6]">
      {/* Soft warm background gradients */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Main 2-column Hero split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Refined Headline, Trust Markers, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Unboxed Metadata Header */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
              <span className="flex items-center gap-1.5 text-amber-800 font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>सुरत • निलगिरी • लिंबायत • गोडादरा</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>
                  {currentLang === 'mr' ? 'आता उघडे आहे (८:३० AM – १०:३० PM)' :
                   currentLang === 'hi' ? 'खुला है (8:30 AM - 10:30 PM)' :
                   currentLang === 'gu' ? 'ખુલ્લું છે (8:30 AM - 10:30 PM)' :
                   'Open Everyday (8:30 AM – 10:30 PM)'}
                </span>
              </span>
            </div>

            {/* Main Title with text-wrap: balance */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-[1.15] [text-wrap:balance]">
                {SALON_INFO.tagline[currentLang]}
              </h1>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                {SALON_INFO.subtagline[currentLang]}
              </p>
            </div>

            {/* Trust claim metrics row */}
            <div className="grid grid-cols-3 gap-4 py-3 border-y border-stone-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 tabular-nums">25+</div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">
                  {currentLang === 'mr' ? 'वर्षे अनुभव' : 'Years Craft'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums">15,000+</div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">
                  {currentLang === 'mr' ? 'समाधानी ग्राहक' : 'Happy Clients'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">100%</div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">
                  {currentLang === 'mr' ? 'A.C. व स्वच्छता' : 'Sanitized & AC'}
                </div>
              </div>
            </div>

            {/* High-intent Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>
                  {currentLang === 'mr' ? 'अपॉइंटमेंट स्लॉट बुक करा' :
                   currentLang === 'hi' ? 'समय / स्लॉट बुक करें' :
                   currentLang === 'gu' ? 'સ્લોટ બુક કરો' :
                   'Book an Appointment'}
                </span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl shadow-xs transition-all"
              >
                <span>दरपत्रक पहा (Price List)</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </button>

              <a
                href={SALON_INFO.owner.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Founder reference */}
            <div className="text-xs text-stone-500 flex items-center gap-2 pt-1">
              <span className="font-semibold text-stone-700">संस्थापक व मास्टर स्टाईलिस्ट:</span>
              <span className="text-amber-800 font-bold">{SALON_INFO.owner.name[currentLang]}</span>
              <span>·</span>
              <span className="tabular-nums font-medium text-stone-600">Mo. {SALON_INFO.owner.displayPhone}</span>
            </div>
          </div>

          {/* Right Column: Clean Luxury Barbershop Interior Image */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={salonInteriorImage}
                  alt="भोलेनाथ A.C. हेअर आर्ट - लक्झरी सलून वातावरण"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle soft bottom gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md border border-stone-200 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-xs font-bold text-stone-800">
                    वातानुकूलित (A.C.) लाउंज
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-sm text-white">भोलेनाथ A.C. हेअर आर्ट</div>
                    <div className="text-stone-300 text-[11px]">संतोषी नगर, शांति नगर गेट जवळ, सुरत</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-300 font-bold">प्रो. प्रविण जगताप</div>
                    <div className="text-[10px] text-stone-300">१२+ वर्षे अखंड सेवा</div>
                  </div>
                </div>
              </div>

              {/* Quick 2-column feature callout in card footer */}
              <div className="p-4 grid grid-cols-2 gap-3 bg-stone-50 border-t border-stone-200 text-xs">
                <div className="flex items-center gap-2 text-stone-700 font-medium">
                  <Snowflake className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>चिल्ड A.C. व शांत जागा</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>१००% फ्रेश ब्लेड व हायजीन</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Feature/Benefit Row below hero split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-200">
          {SALON_HIGHLIGHTS.map((h) => (
            <div
              key={h.id}
              className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs hover:border-amber-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center shrink-0 border border-stone-200">
                  {getHighlightIcon(h.icon)}
                </div>
                <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                  {h.title[currentLang]}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {h.desc[currentLang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
