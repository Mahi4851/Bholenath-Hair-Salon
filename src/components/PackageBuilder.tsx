import React, { useMemo } from 'react';
import { Sparkles, Trash2, CheckCircle2, MessageSquare, Calendar, Clock } from 'lucide-react';
import { SALON_SERVICES } from '../data/salonData';
import { Language } from '../types';

interface PackageBuilderProps {
  currentLang: Language;
  selectedServiceIds: string[];
  onToggleService: (id: string) => void;
  onClearSelection: () => void;
  onOpenBookingWithSelected: () => void;
}

export const PackageBuilder: React.FC<PackageBuilderProps> = ({
  currentLang,
  selectedServiceIds,
  onToggleService,
  onClearSelection,
  onOpenBookingWithSelected,
}) => {
  const selectedServices = useMemo(() => {
    return SALON_SERVICES.filter((s) => selectedServiceIds.includes(s.id));
  }, [selectedServiceIds]);

  const { subtotal, discount, total, totalMinutes } = useMemo(() => {
    const sum = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
    const mins = selectedServices.reduce((acc, curr) => acc + curr.durationMinutes, 0);
    // Bundle incentive: 10% discount if 2 or more services selected
    const disc = selectedServices.length >= 2 ? Math.round(sum * 0.1) : 0;
    return {
      subtotal: sum,
      discount: disc,
      total: sum - disc,
      totalMinutes: mins,
    };
  }, [selectedServices]);

  const handleWhatsAppShare = () => {
    if (selectedServices.length === 0) return;

    const serviceList = selectedServices
      .map((s, idx) => `${idx + 1}. ${s.name.mr} (₹${s.price})`)
      .join('\n');

    const message = `*भोलेनाथ A.C. हेअर आर्ट - ग्रूमिंग पॅकेज चौकशी*\n\n` +
      `नमस्कार प्रविण सर, मला खालील सेवांसाठी वेळ नक्की करायची आहे:\n` +
      `${serviceList}\n\n` +
      `⏱️ अंदाजे वेळ: ${totalMinutes} मिनिटे\n` +
      `💰 एकूण रक्कम: ₹${total} (डिस्काउंट बचत: ₹${discount})\n\n` +
      `कृपया आज/उद्या उपलब्ध असलेला स्लॉट सांगा. धन्यवाद!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919998295112?text=${encoded}`, '_blank');
  };

  const quickCombos = [
    {
      title: 'एव्हरीडे फ्रेश लुक',
      ids: ['hair-1', 'beard-1'],
      desc: 'क्लासिक कट + दाढी सेटिंग',
    },
    {
      title: 'पार्टी & फेस्टिव्ह स्पेशल',
      ids: ['hair-2', 'beard-1', 'facial-1'],
      desc: 'फेड कट + बियर्ड + डी-टॅन ग्लो',
    },
    {
      title: 'रिलॅक्सेशन व्हीआयपी',
      ids: ['hair-1', 'facial-2', 'color-4'],
      desc: 'कटिंग + गोल्ड फेशियल + हेड मसाज',
    },
  ];

  const applyQuickCombo = (ids: string[]) => {
    ids.forEach((id) => {
      if (!selectedServiceIds.includes(id)) {
        onToggleService(id);
      }
    });
  };

  return (
    <section id="package-builder" className="py-16 bg-[#F8F6F2] border-y border-stone-200/90 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-amber-800 tracking-wider uppercase mb-1">
            {currentLang === 'mr' ? 'कस्टमाइझ पॅकेज बिल्डर' :
             currentLang === 'hi' ? 'कस्टमाइज पैकेज कैलकुलेटर' :
             currentLang === 'gu' ? 'કસ્ટમાઇઝ પેકેજ કેલ્ક્યુલેટર' :
             'Custom Package Calculator'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {currentLang === 'mr' ? 'तुमचा स्वतःचा ग्रूमिंग पॅक तयार करा' :
             currentLang === 'hi' ? 'अपना पसंदीदा ग्रूमिंग कॉम्बो बनाएं' :
             'Build Your Custom Grooming Bundle'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {currentLang === 'mr'
              ? 'आवडीच्या सेवा निवडा, २ किंवा अधिक सेवांवर १०% कॉम्बो बचत मिळवा आणि १-क्लिकमध्ये व्हॉट्सॲपवर वेळ बुक करा.'
              : 'Pick your preferred cuts, beard styling, or facials. Save 10% extra when you bundle 2 or more services.'}
          </p>
        </div>

        {/* Quick Pick Recommended Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs text-stone-600 font-semibold mr-1">लोकप्रिय पॅक:</span>
          {quickCombos.map((qc, i) => (
            <button
              key={i}
              onClick={() => applyQuickCombo(qc.ids)}
              className="text-xs bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 px-3.5 py-1.5 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{qc.title}</span>
              <span className="text-[11px] text-stone-500 hidden sm:inline">({qc.desc})</span>
            </button>
          ))}
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Service Selector Checkboxes */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-sm font-bold text-stone-900">
                सेवा निवडा किंवा काढा (Select Services):
              </span>
              {selectedServiceIds.length > 0 && (
                <button
                  onClick={onClearSelection}
                  className="text-xs text-rose-700 hover:text-rose-800 flex items-center gap-1 font-semibold transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>सर्व काढा</span>
                </button>
              )}
            </div>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
              {SALON_SERVICES.map((srv) => {
                const isChecked = selectedServiceIds.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => onToggleService(srv.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-amber-50/70 border-amber-500/80'
                        : 'bg-stone-50/60 border-stone-200 hover:border-stone-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-amber-700 border-amber-700 text-white font-bold'
                            : 'border-stone-300 bg-white'
                        }`}
                      >
                        {isChecked ? <CheckCircle2 className="w-4 h-4 text-white" /> : null}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-stone-900">{srv.name[currentLang]}</div>
                        <div className="text-[11px] text-stone-500 flex items-center gap-2">
                          <span className="font-medium">{srv.durationMinutes} मिनिटे</span>
                          <span>·</span>
                          <span className="truncate max-w-[200px] sm:max-w-xs">{srv.description[currentLang]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-3">
                      <span className="text-sm sm:text-base font-extrabold text-amber-800 tabular-nums">
                        ₹{srv.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Calculated Summary & Actions */}
          <div className="lg:col-span-5 bg-white border border-stone-300 rounded-2xl p-6 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>पॅकेज सारांश (Bill Summary)</span>
              </h3>
              <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                {selectedServices.length} सेवा निवडल्या
              </span>
            </div>

            {/* List of selected items */}
            {selectedServices.length === 0 ? (
              <div className="text-center py-8 text-stone-500 text-xs">
                डाव्या बाजूच्या यादीतून कोणत्याही सेवांवर क्लिक करून तुमच्या आवडीचा ग्रूमिंग पॅक तयार करा.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {selectedServices.map((s) => (
                  <div key={s.id} className="flex items-center justify-between text-xs text-stone-700">
                    <span className="truncate pr-2 font-medium">• {s.name[currentLang]}</span>
                    <span className="font-bold text-amber-800 tabular-nums shrink-0">₹{s.price}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Calculation Breakdown */}
            <div className="pt-3 border-t border-stone-200 space-y-2 text-xs">
              <div className="flex items-center justify-between text-stone-600">
                <span>अंदाजे वेळ (Estimated Duration):</span>
                <span className="text-stone-900 font-bold flex items-center gap-1 tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>{totalMinutes} मिनिटे</span>
                </span>
              </div>

              <div className="flex items-center justify-between text-stone-600">
                <span>मूळ किंमत (Subtotal):</span>
                <span className="text-stone-900 font-bold tabular-nums">₹{subtotal}</span>
              </div>

              {discount > 0 && (
                <div className="flex items-center justify-between text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  <span>१०% कॉम्बो विशेष बचत (Combo Savings):</span>
                  <span className="tabular-nums">-₹{discount}</span>
                </div>
              )}

              <div className="flex items-baseline justify-between pt-3 border-t border-stone-200 text-base">
                <span className="font-bold text-stone-950">निव्वळ देय रक्कम (Net Total):</span>
                <span className="text-2xl font-black text-amber-800 tabular-nums">₹{total}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              <button
                disabled={selectedServices.length === 0}
                onClick={handleWhatsAppShare}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>व्हॉट्सॲपवर पाठवा & स्लॉट बुक करा</span>
              </button>

              <button
                disabled={selectedServices.length === 0}
                onClick={onOpenBookingWithSelected}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed border border-stone-300 transition-colors"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>वेबसाइटवर स्लॉट राखून ठेवा (Reserve Online)</span>
              </button>
            </div>

            {/* Note */}
            <div className="text-[11px] text-stone-500 text-center leading-relaxed">
              * सलूनमध्ये सेवा पूर्ण झाल्यावर Cash, GPay, PhonePe किंवा Paytm द्वारे पेमेंट करता येईल.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
