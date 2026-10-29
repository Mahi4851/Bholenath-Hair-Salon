import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Check, Phone, Snowflake, Users, Clock, MapPin, MessageSquare } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Language } from '../types';

interface AboutPageProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ currentLang, onOpenBooking }) => {
  const commitments = [
    {
      title: 'प्रत्येक क्लायंटसाठी नवीन ब्लेड (Single-Use Fresh Blade)',
      desc: 'आम्ही स्वच्छतेशी कधीही तडजोड करत नाही. प्रत्येक शेविंग व ट्रिमिंगसाठी १००% नवीन ब्लेड वापरले जाते.',
    },
    {
      title: 'थंडगार वातानुकूलित (Full A.C.) आराम',
      desc: 'सुरतच्या उकाड्यात दिवसभरातील थकवा दूर करून शांत, सुवासिक आणि आरामदायी वातावरणात ग्रूमिंगचा आनंद.',
    },
    {
      title: '१२+ वर्षांचा निरंतर स्थानिक विश्वास',
      desc: 'निलगिरी, लिंबायत, गोडादरा आणि डिंडोली परिसरातील हजारो तरुण, व्यावसायिक आणि ज्येष्ठ नागरिकांची पहिली पसंती.',
    },
    {
      title: 'अचूक हेअर स्टाईलिंग व फेस मॅचिंग',
      desc: 'केवळ केस कापणे नाही, तर ग्राहकाच्या चेहऱ्याची ठेवण व पर्सनॅलिटीनुसार योग्य कट्स आणि बियर्ड डिझाइन.',
    },
    {
      title: 'पारदर्शक दर, कोणतीही छुपी फी नाही',
      desc: 'वाजवी व परवडणारे दर. जे मेनू कार्डवर लिहिले आहे, तेच बिल - प्रामाणिकतेने काम.',
    },
    {
      title: 'सर्व डिजिटल पेमेंट्सची सुविधा',
      desc: 'Google Pay, PhonePe, Paytm, सर्व UPI QR स्कॅन आणि रोख रक्कम स्वीकारली जाते.',
    },
  ];

  return (
    <div className="py-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Top Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-amber-800 tracking-wider uppercase">
            {currentLang === 'mr' ? 'आमच्याबद्दल व संस्थापक परिचय' :
             currentLang === 'hi' ? 'सैलून परिचय एवं संस्थापक' :
             'About Bholenath Hair Art'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
            {currentLang === 'mr'
              ? 'दर्जेदार कारागिरी, प्रामाणिक सेवा आणि १२+ वर्षांचा विश्वास'
              : 'Master Grooming Craftsmanship & 12+ Years of Trust'}
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            सुरतमधील निलगिरी, लिंबायत आणि गोडादरा परिसरातील पुरुषांसाठी आधुनिक व दर्जेदार ग्रूमिंग सेवा देणारे हक्काचे ठिकाण.
          </p>
        </div>

        {/* Founder Story 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Owner Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 aspect-[3/4]">
              <img
                src="/assets/aistudio/mama_s_salon_b865f924.jpeg"
                alt="प्रो. प्रविण वि. जगताप - भोलेनाथ A.C. हेअर आर्ट सलून"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {SALON_INFO.owner.name[currentLang]}
                    </h3>
                    <p className="text-xs text-amber-300 font-semibold">
                      {SALON_INFO.owner.title[currentLang]}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-[11px] text-stone-200 mt-2 pt-2 border-t border-white/20 flex justify-between">
                  <span>सुरत, गुजरात</span>
                  <span className="font-bold text-amber-300">Mo. {SALON_INFO.owner.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Prose */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                संस्थापकांचे मनोगत
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                "प्रत्येक ग्राहकाला केवळ केस कापणे नाही, तर नवा आत्मविश्वास देणे हा आमचा ध्यास आहे."
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              सुरतच्या लिंबायत आणि गोडादरा परिसराला जोडणाऱ्या मुख्य रस्त्यावर (संतोषी नगर, शांति नगर गेट जवळ) सुरू झालेले <strong className="text-stone-900">भोलेनाथ A.C. हेअर आर्ट</strong> हे आज स्थानिक तरुणांचे आणि कुटुंबांचे अत्यंत विश्वासू सलून बनले आहे.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              गेल्या १२ हून अधिक वर्षांपासून <strong className="text-amber-800 font-semibold">प्रो. प्रविण वि. जगताप</strong> यांच्या मार्गदर्शनाखाली सलूनमध्ये स्वच्छता, हायजीन आणि आधुनिक हेअर स्टाईल ट्रेंड्सचे काटेकोर पालन केले जाते. ग्राहकांना प्रतीक्षा करतानाही शांत व आरामदायक अनुभव मिळावा म्हणून सलून पूर्णतः वातानुकूलित (A.C.) करण्यात आले आहे.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-stone-200">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <div className="text-xl font-extrabold text-amber-800 tabular-nums">12+ वर्षे</div>
                <div className="text-[11px] text-stone-600">निरंतर सेवा</div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <div className="text-xl font-extrabold text-stone-900 tabular-nums">15,000+</div>
                <div className="text-[11px] text-stone-600">समाधानी ग्राहक</div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <div className="text-xl font-extrabold text-emerald-700">100%</div>
                <div className="text-[11px] text-stone-600">स्वच्छता हमी</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors shadow-xs"
              >
                अपॉइंटमेंट बुक करा
              </button>
              <a
                href={`tel:${SALON_INFO.owner.phone}`}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>प्रविण सरांशी संपर्क: {SALON_INFO.owner.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Core Commitments Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              आमची मूल्ये आणि गुणवत्तेची हमी
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              भोलेनाथ हेअर आर्टमध्ये ग्राहकांच्या समाधानासाठी प्रत्येक छोट्या गोष्टीची काळजी घेतली जाते.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commitments.map((c, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl p-5 shadow-2xs hover:border-amber-400 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1.5">{c.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Salon Interior Atmosphere Photo Banner */}
        <div className="rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-md">
          <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/src/assets/images/luxury_salon_interior_1793292325245.jpg"
              alt="भोलेनाथ A.C. हेअर आर्ट सलून वातावरण"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-12 max-w-xl text-white space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                आरामदायी बैठक व सुविधा
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                पूर्णतः वातानुकूलित व आधुनिक सलून
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                हायड्रॉलिक चेअर्स, हेअर वॉश बेसिन, स्टीम मशिन आणि संगीतयुक्त प्रसन्न वातावरण.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  तुमची वेळ नक्की करा
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
