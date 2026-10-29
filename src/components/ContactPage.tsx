import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, CheckCircle2, Send, ExternalLink, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Language } from '../types';

interface ContactPageProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ currentLang, onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('अपॉइंटमेंट चौकशी');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const landmarks = [
    { name: 'निलगिरी ग्राउंड / सर्कल (Nilgiri)', time: 'अवघे ३ मिनिटे' },
    { name: 'शांति नगर गेट (Shanti Nagar Gate)', time: 'चालत १ मिनिट (Walk)' },
    { name: 'लिंबायत पोलीस स्टेशन व मीठी खाडी', time: '५ मिनिटे' },
    { name: 'गोडादरा नहर / कालवा रोड', time: '४ मिनिटे' },
    { name: 'महाराणा प्रताप चौक (Godadra)', time: '५ मिनिटे' },
    { name: 'डिंडोली ब्रिज / रेल्वे ओव्हरब्रिज', time: '७ मिनिटे' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Send formatted WhatsApp message
    const formatted = `*भोलेनाथ A.C. हेअर आर्ट - वेबसाइट संपर्क चौकशी*\n\n` +
      `👤 नाव: ${name}\n` +
      `📱 फोन: ${phone}\n` +
      `📌 विषय: ${subject}\n` +
      `💬 संदेश: ${message || 'माहिती हवी आहे.'}\n\n` +
      `प्रविण सर, कृपया मला संपर्क करा. धन्यवाद!`;

    window.open(`https://wa.me/919998295112?text=${encodeURIComponent(formatted)}`, '_blank');
    setSentSuccess(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMessage('');
      setSentSuccess(false);
    }, 2000);
  };

  return (
    <div className="py-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold text-amber-800 tracking-wider uppercase">
            {currentLang === 'mr' ? 'संपर्क व नकाशा' :
             currentLang === 'hi' ? 'स्थान व संपर्क' :
             'Contact & Salon Location'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {currentLang === 'mr' ? 'भोलेनाथ A.C. हेअर आर्ट येथे भेट द्या' :
             'Visit or Connect with Bholenath Hair Art'}
          </h1>
          <p className="text-sm text-stone-600">
            सुरतमधील निलगिरी, लिंबायत आणि गोडादरा परिसराच्या मुख्य रस्त्यावर अगदी सोयीस्कर लोकेशन.
          </p>
        </div>

        {/* 2-Column Main Contact Info & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Location Details */}
          <div className="lg:col-span-6 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">सलूनचा अचूक पत्ता:</h3>
                <p className="text-sm text-stone-700 mt-1 leading-relaxed">
                  {SALON_INFO.address[currentLang]}
                </p>
                <div className="mt-1 text-xs text-amber-800 font-semibold">
                  (निलगिरी, लिंबायत व गोडादरा जोडणाऱ्या मुख्य रस्त्यावर)
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
              <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">वेळ आणि दिवस:</h3>
                <p className="text-sm text-stone-700 mt-1">
                  {SALON_INFO.timings.days[currentLang]}
                </p>
                <p className="text-xs font-bold text-emerald-700 mt-0.5">
                  {SALON_INFO.timings.hours} (सातों दिवस उघडे)
                </p>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">थेट कॉल किंवा व्हॉट्सॲप:</h3>
                <p className="text-sm text-stone-700 mt-0.5">
                  {SALON_INFO.owner.name[currentLang]} (प्रोप्रायटर)
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <a
                    href={`tel:${SALON_INFO.owner.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold tabular-nums transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>{SALON_INFO.owner.displayPhone}</span>
                  </a>

                  <a
                    href={SALON_INFO.owner.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp चॅट</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Route Button */}
            <div className="pt-4 border-t border-stone-100">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps मध्ये थेट रस्ता पहा (Get Directions)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Quick WhatsApp Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                मेसेज पाठवा
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-1">
                प्रविण सरांशी थेट संपर्क साधा
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                काही प्रश्न, विशेष हेअर स्टाईल सल्ला किंवा लग्नाचे पॅकेज हवे असल्यास खालील फॉर्म भरा.
              </p>
            </div>

            {sentSuccess ? (
              <div className="text-center py-10 space-y-2 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-stone-900">मेसेज व्हॉट्सॲपवर पाठवला गेला!</h4>
                <p className="text-xs text-stone-600">प्रविण सर लवकरच तुम्हाला उत्तर देतील.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      तुमचे नाव *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="उदा. राहुल पाटील"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      मोबाईल नंबर (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="उदा. 9998295112"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    चौकशीचा विषय
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                  >
                    <option value="अपॉइंटमेंट स्लॉट चौकशी">अपॉइंटमेंट स्लॉट चौकशी (Slot Inquiry)</option>
                    <option value="लग्न व ग्रूम पॅकेज माहिती">लग्न व ग्रूम पॅकेज माहिती (Wedding Groom Pack)</option>
                    <option value="हेअर कलर व हायलाइट्स सल्ला">हेअर कलर व हायलाइट्स सल्ला (Hair Color Query)</option>
                    <option value="सलून पत्ता व दिशा">सलून पत्ता व दिशा (Directions Query)</option>
                    <option value="इतर सामान्य चौकशी">इतर सामान्य चौकशी (General Query)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    संदेश / प्रश्न
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="तुम्हाला हवी असलेली सेवा किंवा सोयीची तारीख लिहा..."
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700"
                  />
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>WhatsApp वर मेसेज पाठवा</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors flex items-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4 text-amber-700" />
                    <span>स्लॉट बुक करा</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Nearby Landmarks Distance Table */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                परिसरातील प्रमुख ठिकाणांवरून अंतर व वेळ
              </h3>
              <p className="text-xs text-stone-500">
                निलगिरी, लिंबायत, गोडादरा आणि डिंडोली येथून सलूनपर्यंत येण्याचे मार्ग
              </p>
            </div>
            <div className="text-xs text-stone-500">
              सोयीचे पार्किंग उपलब्ध
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-5">
            {landmarks.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between"
              >
                <span className="text-xs font-semibold text-stone-800">{item.name}</span>
                <span className="text-xs font-bold text-amber-800 bg-white border border-stone-200 px-2 py-0.5 rounded shadow-2xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
