import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Scissors } from 'lucide-react';
import { SALON_SERVICES, SALON_INFO } from '../data/salonData';
import { Language, Appointment, SalonService } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialServiceIds?: string[];
  onAppointmentBooked?: (appointment: Appointment) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialServiceIds = [],
  onAppointmentBooked,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialServiceIds.length > 0 ? initialServiceIds : ['hair-1']);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [dateChoice, setDateChoice] = useState<'today' | 'tomorrow' | 'custom'>('today');
  const [customDate, setCustomDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');
  const [stylist, setStylist] = useState('प्रो. प्रविण जगताप (मुख्य स्टाईलिस्ट)');
  const [notes, setNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState<Appointment | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '04:00 PM', '05:00 PM',
    '06:30 PM', '07:30 PM', '08:30 PM', '09:30 PM',
  ];

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = SALON_SERVICES.filter((s) => selectedIds.includes(s.id));
  const totalAmount = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.durationMinutes, 0);

  const getEffectiveDate = () => {
    const today = new Date();
    if (dateChoice === 'today') {
      return today.toISOString().split('T')[0];
    }
    if (dateChoice === 'tomorrow') {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow.toISOString().split('T')[0];
    }
    return customDate || today.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || selectedIds.length === 0) {
      alert('कृपया तुमचे नाव, मोबाईल नंबर आणि किमान १ सेवा निवडा.');
      return;
    }

    const effectiveDate = getEffectiveDate();
    const token = `BHA-${Math.floor(1000 + Math.random() * 9000)}`;

    const newAppointment: Appointment = {
      id: token,
      customerName,
      phone,
      date: effectiveDate,
      timeSlot: selectedSlot,
      serviceIds: selectedIds,
      stylist,
      notes,
      totalAmount,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('bholenath_appointments') || '[]');
      existing.unshift(newAppointment);
      localStorage.setItem('bholenath_appointments', JSON.stringify(existing));
    } catch {
      // ignore storage error
    }

    if (onAppointmentBooked) {
      onAppointmentBooked(newAppointment);
    }

    setBookingConfirmed(newAppointment);
  };

  const openWhatsAppConfirmation = () => {
    if (!bookingConfirmed) return;

    const serviceNames = selectedServices.map((s) => s.name.mr).join(', ');
    const message = `*भोलेनाथ A.C. हेअर आर्ट - ऑनलाइन बुकिंग कन्फर्मेशन*\n\n` +
      `🎫 टोकन क्र: #${bookingConfirmed.id}\n` +
      `👤 ग्राहक नाव: ${bookingConfirmed.customerName}\n` +
      `📱 फोन: ${bookingConfirmed.phone}\n` +
      `📅 तारीख: ${bookingConfirmed.date}\n` +
      `⏰ वेळ स्लॉट: ${bookingConfirmed.timeSlot}\n` +
      `✂️ निवडलेल्या सेवा: ${serviceNames}\n` +
      `💈 स्टाईलिस्ट: ${bookingConfirmed.stylist}\n` +
      `💰 अंदाजे रक्कम: ₹${bookingConfirmed.totalAmount}\n\n` +
      `प्रविण सर, कृपया हे बुकिंग नोंदवून घ्या. धन्यवाद!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919998295112?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-xl w-full bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">
                {currentLang === 'mr' ? 'अपॉइंटमेंट स्लॉट बुक करा' :
                 currentLang === 'hi' ? 'समय / स्लॉट बुक करें' :
                 'Book Salon Appointment'}
              </h3>
              <p className="text-xs text-stone-500">
                भोलेनाथ A.C. हेअर आर्ट • प्रो. प्रविण जगताप
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {bookingConfirmed ? (
          /* Confirmation Receipt View */
          <div className="p-6 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-stone-900">
                बुकिंग यशस्वीपणे नोंदवले गेले!
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                तुमचा सीट टोकन नंबर: <strong className="text-amber-800 font-mono text-sm">#{bookingConfirmed.id}</strong>
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="text-stone-500">ग्राहक:</span>
                <span className="font-bold text-stone-900">{bookingConfirmed.customerName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="text-stone-500">तारीख व वेळ:</span>
                <span className="font-bold text-amber-800">
                  {bookingConfirmed.date} • {bookingConfirmed.timeSlot}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="text-stone-500">स्टाईलिस्ट:</span>
                <span className="font-medium text-stone-800">{bookingConfirmed.stylist}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="text-stone-500">निवडलेल्या सेवा:</span>
                <span className="font-medium text-stone-800 text-right">
                  {selectedServices.map((s) => s.name.mr).join(', ')}
                </span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-stone-900">अंदाजे रक्कम:</span>
                <span className="text-amber-800 tabular-nums">₹{bookingConfirmed.totalAmount}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2.5">
              <button
                onClick={openWhatsAppConfirmation}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>प्रविण सरांना WhatsApp वर पाठवा (1-Click)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
              >
                विंडो बंद करा
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* Customer Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  तुमचे नाव (Full Name) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="उदा. राहुल जगताप"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  मोबाईल नंबर (WhatsApp No.) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="उदा. 9998295112"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700"
                  />
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                तारीख निवडा (Select Day)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setDateChoice('today')}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    dateChoice === 'today'
                      ? 'bg-amber-700 text-white border-amber-700 shadow-2xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  आज (Today)
                </button>
                <button
                  type="button"
                  onClick={() => setDateChoice('tomorrow')}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    dateChoice === 'tomorrow'
                      ? 'bg-amber-700 text-white border-amber-700 shadow-2xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  उद्या (Tomorrow)
                </button>
                <button
                  type="button"
                  onClick={() => setDateChoice('custom')}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    dateChoice === 'custom'
                      ? 'bg-amber-700 text-white border-amber-700 shadow-2xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  इतर तारीख
                </button>
              </div>

              {dateChoice === 'custom' && (
                <input
                  type="date"
                  value={customDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setCustomDate(e.target.value)}
                  className="mt-2 w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-1.5 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                />
              )}
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center justify-between">
                <span>वेळ स्लॉट निवडा (Time Slot)</span>
                <span className="text-[11px] text-amber-800 font-semibold">८:३० AM ते १०:३० PM</span>
              </label>
              <div className="grid grid-cols-4 gap-1.5 max-h-32 overflow-y-auto pr-1">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                      selectedSlot === slot
                        ? 'bg-amber-700 text-white border-amber-700 shadow-2xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center justify-between">
                <span>सेवा निवडा ({selectedServices.length} निवडल्या)</span>
                <span className="text-[11px] text-amber-800 font-bold">एकूण: ₹{totalAmount}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1 border border-stone-200 rounded-xl p-2 bg-stone-50">
                {SALON_SERVICES.map((s) => {
                  const isChecked = selectedIds.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className={`text-xs p-2 rounded-lg cursor-pointer flex items-center justify-between border transition-all ${
                        isChecked
                          ? 'bg-amber-100/70 border-amber-500 font-semibold text-stone-900'
                          : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate pr-1">
                        <Scissors className="w-3 h-3 text-amber-700 shrink-0" />
                        <span className="truncate">{s.name.mr}</span>
                      </div>
                      <span className="font-bold text-amber-800 tabular-nums shrink-0">₹{s.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stylist Preference */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                स्टाईलिस्ट पसंती (Stylist Preference)
              </label>
              <select
                value={stylist}
                onChange={(e) => setStylist(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
              >
                <option value="प्रो. प्रविण जगताप (मुख्य स्टाईलिस्ट)">
                  प्रो. प्रविण जगताप (मुख्य स्टाईलिस्ट - 12+ वर्षे अनुभव)
                </option>
                <option value="सीनियर हेअर स्टाईलिस्ट">
                  सीनियर हेअर स्टाईलिस्ट (Senior Stylist)
                </option>
                <option value="कोणताही उपलब्ध कारागीर">
                  कोणताही उपलब्ध कारागीर (First Available Stylist)
                </option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                काही विशेष सूचना? (Optional Notes)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="उदा. स्किन फेड लुक, लग्नासाठी तयारी..."
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-700"
              />
            </div>

            {/* Duration and Cost Summary Strip */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-center justify-between text-xs">
              <span className="text-stone-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>अंदाजे वेळ: <strong>{totalDuration} मिनिटे</strong></span>
              </span>
              <span className="text-stone-900 font-medium">
                एकूण रक्कम: <strong className="text-amber-800 font-extrabold text-sm tabular-nums">₹{totalAmount}</strong>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-amber-700 hover:bg-amber-800 shadow-xs transition-all active:scale-98"
            >
              स्लॉट नक्की करा & टोकन मिळवा
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
