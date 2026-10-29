import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';
import { Language, ReviewItem } from '../types';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const [reviews, setReviews] = useState<ReviewItem[]>(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [name, setName] = useState('');
  const [locality, setLocality] = useState('');
  const [rating, setRating] = useState(5);
  const [service, setService] = useState('हेअर कटिंग');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name,
      locality: locality || 'सुरत (Surat)',
      rating,
      date: 'आत्ताच (Just now)',
      servicesUsed: [service],
      comment: {
        mr: comment,
        hi: comment,
        gu: comment,
        en: comment,
      },
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmitted(false);
      setName('');
      setComment('');
      setLocality('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-[#FAF9F6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold text-amber-800 tracking-wider uppercase mb-1">
              {currentLang === 'mr' ? 'ग्राहकांचे मनोगत' :
               currentLang === 'hi' ? 'ग्राहकों की राय' :
               'Customer Reviews'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {currentLang === 'mr' ? 'स्थानिक ग्राहकांचा अखंड विश्वास' :
               'Trusted by Thousands in Limbayat & Surat'}
            </h2>
            <div className="flex items-center gap-2 text-xs text-stone-600 mt-1">
              <div className="flex text-amber-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-stone-900 tabular-nums">४.९ / ५</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>१५,०००+ ग्राहकांचा दांडगा अनुभव</span>
            </div>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-lg transition-colors shadow-2xs"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>तुमचा अनुभव लिहा (Write Review)</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-2xs hover:border-stone-300 transition-all"
            >
              <div>
                {/* Rating Stars & Verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-600">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>व्हेरिफाइड</span>
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs text-stone-700 leading-relaxed italic mb-4">
                  "{rev.comment[currentLang] || rev.comment.mr}"
                </p>
              </div>

              {/* Author & Locality */}
              <div className="pt-3 border-t border-stone-100">
                <div className="text-xs font-bold text-stone-900">{rev.name}</div>
                <div className="text-[11px] text-amber-800 font-semibold mt-0.5">{rev.locality}</div>
                <div className="flex items-center gap-2 text-[10px] text-stone-400 mt-1">
                  <span>{rev.date}</span>
                  <span>·</span>
                  <span className="truncate">{rev.servicesUsed.join(', ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Submission Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="relative max-w-md w-full bg-white border border-stone-200 rounded-2xl p-6 shadow-xl">
              {submitted ? (
                <div className="text-center py-6 space-y-2">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold text-stone-900">धन्यवाद!</h3>
                  <p className="text-xs text-stone-600">तुमचा रिव्ह्यू यशस्वीपणे नोंदवला गेला आहे.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <h3 className="text-sm font-bold text-stone-900">तुमचा अनुभव शेअर करा</h3>
                    <button
                      type="button"
                      onClick={() => setShowReviewModal(false)}
                      className="text-xs text-stone-500 hover:text-stone-800"
                    >
                      रद्द करा
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">नाव *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="उदा. राहुल पाटील"
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">परिसर / कॉलनी</label>
                      <input
                        type="text"
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                        placeholder="उदा. निलगिरी, सुरत"
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">रेटिंग (Stars)</label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (५ स्टार)</option>
                        <option value={4}>⭐⭐⭐⭐ (४ स्टार)</option>
                        <option value={3}>⭐⭐⭐ (३ स्टार)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">घेतलेली सेवा</label>
                    <input
                      type="text"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      placeholder="उदा. हेअर कटिंग व दाढी सेटिंग"
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">तुमचा अनुभव / प्रतिक्रिया *</label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="कामामधील स्वच्छता, स्टाफचा स्वभाव, किंवा कटिंगची फिनिशिंग कशी वाटली..."
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 transition-colors"
                  >
                    रिव्ह्यू सबमिट करा
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
