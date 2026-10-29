import React, { useState, useMemo } from 'react';
import { Search, Clock, Plus, Check, Calendar, Sparkles, Scissors } from 'lucide-react';
import { SALON_SERVICES } from '../data/salonData';
import beardGroomingImage from '../assets/images/barber_beard_grooming_1793292326179.jpg';
import craftsmanshipImage from '../assets/images/barber_craftsmanship_cut_1793292325928.jpg';
import { ServiceCategory, Language, SalonService } from '../types';

interface ServicesSectionProps {
  currentLang: Language;
  selectedServiceIds: string[];
  onToggleService: (id: string) => void;
  onBookSingleService: (service: SalonService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  selectedServiceIds,
  onToggleService,
  onBookSingleService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs: { id: ServiceCategory; label: Record<Language, string> }[] = [
    {
      id: 'all',
      label: {
        mr: 'सर्व सेवा (All)',
        hi: 'सभी सेवाएं (All)',
        gu: 'તમામ સેવાઓ (All)',
        en: 'All Services',
      },
    },
    {
      id: 'hair',
      label: {
        mr: 'हेअर कटिंग',
        hi: 'हेयर कटिंग',
        gu: 'હેર કટીંગ',
        en: 'Haircuts',
      },
    },
    {
      id: 'beard',
      label: {
        mr: 'दाढी & शेविंग',
        hi: 'दाढ़ी & शेविंग',
        gu: 'દાઢી & શેવિંગ',
        en: 'Beard & Shave',
      },
    },
    {
      id: 'facial',
      label: {
        mr: 'फेशियल & डी-टॅन',
        hi: 'फेशियल & डी-टैन',
        gu: 'ફેશિયલ & ડી-ટેન',
        en: 'Facial & D-Tan',
      },
    },
    {
      id: 'color_spa',
      label: {
        mr: 'कलर & स्पा',
        hi: 'कलर & स्पा',
        gu: 'કલર & સ્પા',
        en: 'Color & Spa',
      },
    },
    {
      id: 'combos',
      label: {
        mr: 'स्पेशल कॉम्बो',
        hi: 'स्पेशल कॉम्बो',
        gu: 'સ્પેશિયલ કોમ્બો',
        en: 'Combos & Groom',
      },
    },
  ];

  const filteredServices = useMemo(() => {
    return SALON_SERVICES.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesName =
        item.name.mr.toLowerCase().includes(q) ||
        item.name.hi.toLowerCase().includes(q) ||
        item.name.gu.toLowerCase().includes(q) ||
        item.name.en.toLowerCase().includes(q);

      const matchesDesc =
        item.description.mr.toLowerCase().includes(q) ||
        item.description.hi.toLowerCase().includes(q) ||
        item.description.en.toLowerCase().includes(q);

      return matchesCategory && (matchesName || matchesDesc);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-16 bg-[#FAF9F6] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Visual Craftsmanship Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xs aspect-[16/9] group">
            <img
              src={craftsmanshipImage}
              alt="प्रीमियम हेअर कटिंग व स्टाईलिंग"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-600 px-2 py-0.5 rounded text-white inline-block mb-1">
                मास्टर सिझर क्राफ्ट
              </span>
              <h3 className="text-base sm:text-lg font-bold">हेअर कटिंग, फेड आणि टेक्सचर्ड स्टाईलिंग</h3>
              <p className="text-xs text-stone-200">प्रत्येक चेहऱ्याच्या रचनेनुसार अचूक समतोल कटिंग.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xs aspect-[16/9] group">
            <img
              src={beardGroomingImage}
              alt="रॉयल हॉट टॉवेल शेव व बियर्ड ग्रूमिंग"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-800 px-2 py-0.5 rounded text-stone-200 inline-block mb-1">
                रॉयल ग्रूमिंग
              </span>
              <h3 className="text-base sm:text-lg font-bold">रॉयल हॉट टॉवेल शेव्ह & बियर्ड स्कल्प्ट</h3>
              <p className="text-xs text-stone-200">सिंगल-युज फ्रेश ब्लेड, पोअर्स ओपनिंग स्टीम व रिफ्रेशिंग आफ्टरशेव.</p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold text-amber-800 tracking-wider uppercase mb-1">
              {currentLang === 'mr' ? 'पारदर्शक दरपत्रक' :
               currentLang === 'hi' ? 'पारदर्शी रेट कार्ड' :
               currentLang === 'gu' ? 'પારદર્શક ભાવ પત્રક' :
               'Transparent Price Menu'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {currentLang === 'mr' ? 'सेवा आणि परवडणारे दर' :
               currentLang === 'hi' ? 'सेवाएं एवं उचित मूल्य' :
               currentLang === 'gu' ? 'સેવાઓ અને વ્યાજબી ભાવ' :
               'Menu of Services & Grooming'}
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              {currentLang === 'mr'
                ? 'निलगिरी, लिंबायत आणि गोडादरा परिसरातील पुरुषांसाठी वाजवी दरात उच्च दर्जाची व हायजेनिक सेवा.'
                : 'Surat\'s transparent grooming menu with sterilized tools, fresh blades and chilled AC comfort.'}
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLang === 'mr' ? 'सेवा शोधा (उदा. कटिंग, दाढी, फेशियल)...' :
                currentLang === 'hi' ? 'सेवा खोजें (उदा. कटिंग, शेव, मसाज)...' :
                'Search service (e.g. fade, beard)...'
              }
              className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-4 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700 shadow-2xs transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 border border-stone-200 rounded-xl overflow-x-auto no-scrollbar mb-8">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-white/80'
                }`}
              >
                {tab.label[currentLang]}
              </button>
            );
          })}
        </div>

        {/* Services Grid (Bright, Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const isSelectedInPackage = selectedServiceIds.includes(service.id);

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-white border rounded-2xl p-5 transition-all ${
                  isSelectedInPackage
                    ? 'border-amber-600 bg-amber-50/40 ring-1 ring-amber-500/20 shadow-md'
                    : 'border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top line: title & tag */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-bold text-stone-900 tracking-tight leading-snug">
                      {service.name[currentLang]}
                    </h3>
                    {service.tag && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded whitespace-nowrap shrink-0">
                        {service.tag[currentLang]}
                      </span>
                    )}
                  </div>

                  {/* Metadata unboxed text */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{service.durationMinutes} मिनिटे (min)</span>
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-600">
                      {service.category === 'hair' ? 'केस कापणे' :
                       service.category === 'beard' ? 'दाढी व शेव' :
                       service.category === 'facial' ? 'स्किन केअर' :
                       service.category === 'color_spa' ? 'कलर & स्पा' : 'कॉम्बो'}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {service.description[currentLang]}
                  </p>
                </div>

                {/* Bottom line: Price & Actions */}
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-amber-700 tabular-nums">
                      ₹{service.price}
                    </span>
                    {service.originalPrice && (
                      <span className="text-xs text-stone-400 line-through tabular-nums">
                        ₹{service.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Add to package button */}
                    <button
                      onClick={() => onToggleService(service.id)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border flex items-center gap-1 font-semibold transition-colors ${
                        isSelectedInPackage
                          ? 'bg-amber-700 text-white border-amber-700'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                      title="पॅकेजमध्ये जोडा"
                    >
                      {isSelectedInPackage ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>जोडले</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-amber-700" />
                          <span>पॅकेज</span>
                        </>
                      )}
                    </button>

                    {/* Book now directly */}
                    <button
                      onClick={() => onBookSingleService(service)}
                      className="text-xs px-3 py-1.5 rounded-lg font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors flex items-center gap-1"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>बुक करा</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty search fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 border border-dashed border-stone-300 rounded-2xl p-8 bg-white">
            <Scissors className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <p className="text-stone-700 font-medium">कोणतीही सेवा सापडली नाही.</p>
            <p className="text-xs text-stone-500 mt-1">
              कृपया वेगळा शब्द वापरून शोधा किंवा सर्व सेवा टॅब निवडा.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 text-xs text-amber-800 font-semibold bg-stone-100 rounded-lg hover:bg-stone-200"
            >
              सर्व सेवा दाखवा
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
