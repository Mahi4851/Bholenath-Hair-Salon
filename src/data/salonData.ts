import { SalonService, ReviewItem, Language } from '../types';

export const SALON_INFO = {
  name: {
    mr: 'भोलेनाथ A.C. हेअर आर्ट',
    hi: 'भोलेनाथ A.C. हेयर आर्ट',
    gu: 'ભોલેનાથ A.C. હેર આર્ટ',
    en: 'Bholenath A.C. Hair Art',
  },
  tagline: {
    mr: 'सुरतमधील प्रीमियम मेन्स सलून & ग्रूमिंग स्टुडिओ',
    hi: 'सूरत का प्रमुख मेन्स सैलून एवं ग्रूमिंग स्टूडियो',
    gu: 'સુરતનું પ્રીમિયમ મેન્સ સલોન અને ગ્રૂમિંગ સ્ટુડિયો',
    en: 'Surat\'s Premier Men\'s Salon & Grooming Studio',
  },
  subtagline: {
    mr: 'शांत आणि वातानुकूलित (A.C.) वातावरणात उत्कृष्ट हेअर कटिंग, रॉयल दाढी सेटिंग आणि फेशियलची दर्जेदार सेवा.',
    hi: 'शांत एवं वातानुकूलित (A.C.) माहौल में बेहतरीन हेयर कटिंग, रॉयल दाढ़ी शेपिंग व फेशियल सेवाएं।',
    gu: 'શાંત અને એર-કન્ડિશન્ડ વાતાવરણમાં શ્રેષ્ઠ હેર કટિંગ, દાઢી સેટિંગ અને ફેશિયલ સેવા.',
    en: 'Master haircuts, precision beard sculpts, and refreshing facials in a serene air-conditioned studio.',
  },
  owner: {
    name: {
      mr: 'प्रो. प्रविण वि. जगताप',
      hi: 'प्रो. प्रविण वि. जगताप',
      gu: 'પ્રો. પ્રવીણ વી. જગતાપ',
      en: 'Pro. Pravin V. Jagtap',
    },
    title: {
      mr: 'संस्थापक आणि मुख्य हेअर स्टाईलिस्ट',
      hi: 'संस्थापक एवं मुख्य हेयर स्टाइलिस्ट',
      gu: 'સંસ્થાપક અને મુખ્ય હેર સ્ટાઈલિસ્ટ',
      en: 'Founder & Master Stylist',
    },
    experience: '12+ वर्षे अनुभव (12+ Years Experience)',
    phone: '9998295112',
    displayPhone: '+91 99982 95112',
    whatsappUrl: 'https://wa.me/919998295112',
  },
  address: {
    mr: 'संतोषी नगर, शांति नगर गेट जवळ, लिंबायत - गोडादरा रोड, सुरत, गुजरात - ३९५०१०',
    hi: 'संतोषी नगर, शांति नगर गेट के पास, लिंबायत - गोडादरा परिसर, सुरत, गुजरात - 395010',
    gu: 'સંતોષી નગર, શાંતિ નગર ગેટ પાસે, લિંબાયત - ગોડાદરા વિસ્તાર, સુરત, ગુજરાત - 395010',
    en: 'Santoshi Nagar, Near Shanti Nagar Gate, Limbayat - Godadra Area, Surat, Gujarat - 395010',
  },
  nearbyAreas: {
    mr: 'निलगिरी, लिंबायत, गोडादरा, डिंडोली, परवत पाटिया, सुरत',
    hi: 'निलगिरी, लिंबायत, गोडादरा, डिंडोली, परवत पाटिया, सुरत',
    gu: 'નિલગિરી, લિંબાયત, ગોડાદરા, ડિંડોલી, પરવત પાટિયા, સુરત',
    en: 'Nilgiri, Limbayat, Godadra, Dindoli, Parvat Patiya, Surat',
  },
  timings: {
    days: {
      mr: 'सोमवार ते रविवार (सातों दिवस उघडे)',
      hi: 'सोमवार से रविवार (सातों दिन खुला)',
      gu: 'સોમવાર થી રવિવાર (દરરોજ ખુલ્લું)',
      en: 'Monday to Sunday (Open All 7 Days)',
    },
    hours: '8:30 AM – 10:30 PM',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Santoshi+Nagar+Shanti+Nagar+Gate+Limbayat+Godadra+Surat',
};

export const SALON_HIGHLIGHTS = [
  {
    id: 'ac',
    icon: 'Snowflake',
    title: {
      mr: 'पूर्णतः A.C. सुविधा',
      hi: 'फुल A.C. सुविधा',
      gu: 'સંપૂર્ણ A.C. સુવિધા',
      en: 'Fully Air-Conditioned',
    },
    desc: {
      mr: 'थंडगार आणि शांत वातावरणात आरामदायी हेअर कटिंग व ग्रूमिंगचा आनंद.',
      hi: 'शांत और ठंडे माहौल में आरामदायक हेयर कटिंग और ग्रूमिंग का आनंद लें.',
      gu: 'શાંત અને ઠંડા વાતાવરણમાં આરામદાયક હેર કટિંગ અને ગ્રૂમિંગનો અનુભવ.',
      en: 'Chilled, peaceful comfort throughout your haircut or facial treatment.',
    },
  },
  {
    id: 'staff',
    icon: 'Users',
    title: {
      mr: 'अनुभवी स्टाईलिस्ट',
      hi: 'अनुभवी स्टाइलिस्ट',
      gu: 'અનુભવી સ્ટાફ',
      en: '12+ Years Craftsmanship',
    },
    desc: {
      mr: 'प्रो. प्रविण जगताप आणि १२+ वर्षांचा प्रदीर्घ अनुभव असलेले कुशल कारागीर.',
      hi: 'प्रो. प्रविण जगताप और 12+ वर्षों के अनुभव वाले कुशल और ट्रेंड एक्सपर्ट्स.',
      gu: 'પ્રો. પ્રવીણ જગતાપ અને 12+ વર્ષોના બહોળા અનુભવવાળા કુશળ સ્ટાઈલિસ્ટ્સ.',
      en: 'Trained expertise delivering sharp silhouettes and tailored face shapes.',
    },
  },
  {
    id: 'style',
    icon: 'Sparkles',
    title: {
      mr: 'ट्रेंडी व क्लासिक लुक्स',
      hi: 'ट्रेंडी व क्लासिक लुक्स',
      gu: 'ટ્રેન્ડી અને ક્લાસિક લુક્સ',
      en: 'Bespoke Men\'s Styles',
    },
    desc: {
      mr: 'स्किन फेड, टेक्सचर्ड क्रॉप, क्लासिक कट, सेलिब्रिटी बियर्ड शेपिंग.',
      hi: 'स्किन फेड, टेक्सचर्ड क्रॉप, क्लासिक कट, सेलिब्रिटी बियर्ड और ट्रेंडी कलर्स.',
      gu: 'સ્કીન ફેડ, ટેક્ષ્ચર્ડ ક્રોપ, ક્લાસિક કટ, સેલિબ્રિટી દાઢી શેપિંગ.',
      en: 'Skin fades, textured crops, clean scissor tapers and beard line-ups.',
    },
  },
  {
    id: 'hygiene',
    icon: 'ShieldCheck',
    title: {
      mr: '१००% हायजेनिक व निर्जंतुक',
      hi: 'साफ-सुथरे व आधुनिक उपकरण',
      gu: 'સ્વચ્છ અને હાઈજેનિક સેવા',
      en: '100% Sanitized Tools',
    },
    desc: {
      mr: 'प्रत्येक क्लायंटसाठी नवीन फ्रेश ब्लेड, सॅनिटाईझ्ड कात्री व स्वच्छ टॉवेल.',
      hi: 'हर ग्राहक के लिए फ्रेश नया ब्लेड, स्टेरीलाइज्ड कैंची और स्वच्छ टॉवेल.',
      gu: 'દરેક ગ્રાહક માટે નવો બ્લેડ, સેનિટાઇઝ્ડ કાતર અને એકદમ ચોખ્ખો ટોવેલ.',
      en: 'Single-use blades, UV-sterilized clippers and fresh laundered towels.',
    },
  },
];

export const SALON_SERVICES: SalonService[] = [
  // Haircuts
  {
    id: 'hair-1',
    category: 'hair',
    name: {
      mr: 'क्लासिक जंट्स हेअर कट',
      hi: 'क्लासिक जेंट्स हेयर कट',
      gu: 'ક્લાસિક જેન્ટ્સ હેર કટ',
      en: 'Classic Gentleman Haircut',
    },
    price: 100,
    durationMinutes: 20,
    description: {
      mr: 'सॉफ्ट सिझर कट, क्लीन साइड्स, नेक ट्रिम आणि प्रोफेशनल फिनिशिंग.',
      hi: 'सॉफ्ट सिज़र कट, क्लीन साइड्स, नेक लाइनअप और प्रोफेशनल फिनिश.',
      gu: 'સોફ્ટ સિઝર કટ, ક્લીન સાઇડ્સ અને પ્રોફેશનલ ફિનિશિંગ.',
      en: 'Balanced scissor cut, neck taper, clean sideburns and sharp edges.',
    },
    isPopular: true,
  },
  {
    id: 'hair-2',
    category: 'hair',
    name: {
      mr: 'मॉडर्न स्किन फेड / टेक्सचर्ड कट',
      hi: 'मॉडर्न स्किन फेड / टेक्सचर्ड कट',
      gu: 'મોડર્ન સ્કીન ફેડ / ટેક્ષ્ચર્ડ કટ',
      en: 'Modern Fade / Textured Crop',
    },
    price: 150,
    originalPrice: 180,
    durationMinutes: 25,
    description: {
      mr: 'लो/मिड/हाय फेड, टेक्सचर्ड टॉप, शार्प रेझर टेम्पल लाइनअप.',
      hi: 'लो/मिड/हाई स्किन फेड, वॉल्यूम टॉप और शार्प रेज़र बॉर्डर.',
      gu: 'લો/મિડ/હાઈ ફેડ, ટેક્ષ્ચર્ડ ટોપ અને શાર્પ લાઇનઅપ.',
      en: 'Zero to skin fade blending, textured crown styling and razor parting.',
    },
    isPopular: true,
    tag: {
      mr: 'ट्रेंडिंग',
      hi: 'ट्रेंडिंग',
      gu: 'ટ્રેન્ડિંગ',
      en: 'Trending',
    },
  },
  {
    id: 'hair-3',
    category: 'hair',
    name: {
      mr: 'किड्स स्पेशल हेअर कट',
      hi: 'किड्स स्पेशल हेयर कट',
      gu: 'કિડ્સ સ્પેશિયલ હેર કટ',
      en: 'Kids Special Haircut',
    },
    price: 80,
    durationMinutes: 15,
    description: {
      mr: 'लहान मुलांसाठी अतिशय शांततेत, प्रेमाने आणि सुरक्षिततेने केलेली कटिंग.',
      hi: 'छोटे बच्चों के लिए बड़े प्यार, धैर्य और सुरक्षा के साथ सुंदर कटिंग.',
      gu: 'નાના બાળકો માટે ખૂબ ધીરજ અને સ્નેહપૂર્વક કરવામાં આવતી કટીંગ.',
      en: 'Gentle, patient haircut crafted safely for young boys.',
    },
  },
  {
    id: 'hair-4',
    category: 'hair',
    name: {
      mr: 'हेअर वॉश + ब्लू ड्राय + स्टाईलिंग',
      hi: 'हेयर वॉश + ब्लो ड्राय + स्टाइलिंग',
      gu: 'હેર વોશ + બ્લો ડ્રાય + સ્ટાઇલિંગ',
      en: 'Deep Hair Wash + Blow Dry Styling',
    },
    price: 70,
    durationMinutes: 15,
    description: {
      mr: 'अँटी-डस्ट शॅम्पू वॉश, कंडिशनिंग आणि प्रीमियम मॅट व्हॅक्स स्टाईलिंग.',
      hi: 'एंटी-डस्ट शैम्पू वॉश, कंडीशनिंग और प्रीमियम हेयर वैक्स सेट.',
      gu: 'શેમ્પૂ વોશ, કન્ડિશનિંગ અને પ્રીમિયમ હેર વેક્સ સેટિંગ.',
      en: 'Deep conditioning shampoo cleanse, blow dry and matte clay finish.',
    },
  },

  // Beard & Shave
  {
    id: 'beard-1',
    category: 'beard',
    name: {
      mr: 'दाढी सेटिंग & शार्प शेपिंग',
      hi: 'दाढ़ी सेटिंग & शार्प शेपिंग',
      gu: 'દાઢી સેટિંગ અને શાર્પ શેપિંગ',
      en: 'Beard Styling & Razor Sharp Shaping',
    },
    price: 80,
    durationMinutes: 15,
    description: {
      mr: 'क्लिपर ट्रिमिंग, चीक लाइन शार्पनिंग, नेक टेपर आणि बियर्ड ऑईल मसाज.',
      hi: 'क्लिपर ट्रिमिंग, चीक लाइन शार्पनिंग, नेक टेपर और बियर्ड ऑयल मसाज.',
      gu: 'ટ્રિમિંગ, ચીક લાઇન શાર્પનિંગ અને બિયર્ડ ઓઇલ મસાજ.',
      en: 'Custom beard trim, defined razor cheeklines, mustache shaping and oil.',
    },
    isPopular: true,
  },
  {
    id: 'beard-2',
    category: 'beard',
    name: {
      mr: 'रॉयल क्लीन शेव्ह (हॉट टॉवेल)',
      hi: 'रॉयल क्लीन शेव (हॉट टॉवेल)',
      gu: 'રોયલ ક્લીન શેવ (હોટ ટોવેલ)',
      en: 'Royal Hot Towel Clean Shave',
    },
    price: 60,
    durationMinutes: 15,
    description: {
      mr: 'हॉट टॉवेल स्टीम, रिच क्रीमी लेदर, सिंगल-युज फ्रेश ब्लेड आणि आफ्टरशेव्ह लोशन.',
      hi: 'हॉट टॉवेल स्टीम, रिच क्रीमी लेदर, फ्रेश ब्लेड और कूल आफ्टरशेव लोशन.',
      gu: 'હોટ ટોવેલ સ્ટીમ, રિચ ફોમ, સિંગલ યુઝ બ્લેડ અને આફ્ટરશેવ લોશન.',
      en: 'Hot towel pore opening, rich protective lather, single-edge fresh blade and cooling splash.',
    },
  },
  {
    id: 'beard-3',
    category: 'beard',
    name: {
      mr: 'चारकोल डिटॉक्स शेव्ह & कूलिंग जेल',
      hi: 'चारकोल डिटॉक्स शेव & कूलिंग जेल',
      gu: 'ચારકોલ ડીટોક્સ શેવ અને કુલિંગ જેલ',
      en: 'Charcoal Detox Shave & Icy Gel',
    },
    price: 90,
    durationMinutes: 20,
    description: {
      mr: 'अॅक्टिव्हेटेड चारकोल फोम, स्मूथ रेझर ग्लाइड आणि अँटी-इरिटेशन कूलिंग जेल.',
      hi: 'एक्टिवेटेड चारकोल फोम, स्मूथ शेव और एंटी-इरिटेशन कूलिंग जेल मसाज.',
      gu: 'ચારકોલ ફોમ શેવ અને એન્ટી-ઇરિટેશન કુલિંગ જેલ.',
      en: 'Deep pore dirt extraction, smooth glide and menthol soothing finish.',
    },
  },

  // Facial & Skin Care
  {
    id: 'facial-1',
    category: 'facial',
    name: {
      mr: 'डी-टॅन इन्स्टंट ग्लो क्लिंअप',
      hi: 'डी-टैन इंस्टेंट ग्लो क्लीनअप',
      gu: 'ડી-ટેન ઇન્સ્ટન્ટ ગ્લો ક્લીનઅપ',
      en: 'D-Tan Instant Glow Cleanup',
    },
    price: 250,
    originalPrice: 300,
    durationMinutes: 30,
    description: {
      mr: 'ऊन आणि धुळीने काळी पडलेली त्वचा उजळवण्यासाठी स्पेशल डी-टॅन पॅक आणि स्टीम.',
      hi: 'धूप और प्रदूषण से टैन हुई त्वचा को निखारने के लिए डी-टैन पैक व स्टीम.',
      gu: 'સૂર્યના તાપથી થયેલી ટેનિંગ દૂર કરવા માટે સ્પેશિયલ ડી-ટેન પેક.',
      en: 'Removes stubborn sun tan, extracts dead skin cells, restores bright natural tone.',
    },
    isPopular: true,
    tag: {
      mr: 'सर्वात लोकप्रिय',
      hi: 'बेस्ट सेलर',
      gu: 'બેસ્ટ સેલર',
      en: 'Best Seller',
    },
  },
  {
    id: 'facial-2',
    category: 'facial',
    name: {
      mr: 'रॉयल गोल्ड / डायमंड फेशियल',
      hi: 'रॉयल गोल्ड / डायमंड फेशियल',
      gu: 'રોયલ ગોલ્ડ / ડાયમંડ ફેશિયલ',
      en: 'Royal Gold & Diamond Facial',
    },
    price: 450,
    originalPrice: 550,
    durationMinutes: 45,
    description: {
      mr: '५-स्टेप लक्झरी फेशियल: क्लीन्सर, स्क्रब, मसाज क्रीम, गोल्ड ग्लो जेल आणि मास्क.',
      hi: '5-स्टेप लग्जरी फेशियल: क्लींजर, स्क्रब, मसाज क्रीम, गोल्ड जेल व फेस पैक.',
      gu: '5-સ્ટેપ લક્ઝરી ફેશિયલ: ક્લીન્ઝિંગ, સ્ક્રબ, મસાજ અને ગોલ્ડ ગ્લો પેક.',
      en: '5-phase intensive facial rejuvenation with gentle micro-scrub and radiant mask.',
    },
  },
  {
    id: 'facial-3',
    category: 'facial',
    name: {
      mr: 'चारकोल ब्लॅकहेड पील-ऑफ मास्क',
      hi: 'चारकोल ब्लैकहेड्स पील-ऑफ मास्क',
      gu: 'ચારકોલ બ્લેકહેડ પીલ-ઓફ માસ્ક',
      en: 'Charcoal Blackhead Peel-Off Mask',
    },
    price: 150,
    durationMinutes: 20,
    description: {
      mr: 'नाक आणि गालांवरील ब्लॅकहेड्स व व्हाईटहेड्स मुळापासून काढून टाकते.',
      hi: 'नाक और चेहरे के जिद्दी ब्लैकहेड्स और व्हाइटहेड्स को गहराई से हटाता है.',
      gu: 'નાક અને ગાલ પરથી બ્લેકહેડ્સ સંપૂર્ણપણે દૂર કરે છે.',
      en: 'Deep unclogging peel mask targeting nose & T-zone impurities.',
    },
  },

  // Color & Spa
  {
    id: 'color-1',
    category: 'color_spa',
    name: {
      mr: 'नॅचरल हेअर कलर (अमोनिया फ्री)',
      hi: 'नेचुरल हेयर कलर (अमोनिया फ्री)',
      gu: 'નેચરલ હેર કલર (એમોનિયા ફ્રી)',
      en: 'Natural Hair Color (Ammonia Free)',
    },
    price: 150,
    durationMinutes: 30,
    description: {
      mr: '१००% पांढरे केस कव्हर करणारा, केसांना नॅचरल शायनिंग देणारा ब्रँडेड कलर.',
      hi: '100% सफेद बाल कवर, बालों को नुकसान न पहुंचाने वाला सुरक्षित कलर.',
      gu: '100% સફેદ વાળ કવર કરતો સુરક્ષિત અને નેચરલ શાઇન વાળો કલર.',
      en: 'Full grey coverage with nourishing herbal gloss, ammonia-safe.',
    },
  },
  {
    id: 'color-2',
    category: 'color_spa',
    name: {
      mr: 'ट्रेंडी हेअर स्ट्रीक्स / हायलाइट्स',
      hi: 'ट्रेंडी हेयर स्ट्रीक्स / हाइलाइट्स',
      gu: 'ટ્રેન્ડી હેર સ્ટ્રીક્સ / હાઇલાઇટ્સ',
      en: 'Trendy Hair Highlights / Streaks',
    },
    price: 350,
    durationMinutes: 40,
    description: {
      mr: 'गोल्डन, ॲश ब्लॉन्ड, वाईन रेड किंवा कारमेल हायलाइट्स - तुमच्या चॉईसनुसार.',
      hi: 'गोल्डन, ऐश ब्लोंड, वाइन रेड या कैरामेल शेड्स - मॉडर्न लुक के लिए.',
      gu: 'ગોલ્ડન, બર્ગન્ડી, એશ બ્લોન્ડ કલર હાઇલાઇટ્સ.',
      en: 'Custom single or multi-tone fashion highlights with precision foils.',
    },
  },
  {
    id: 'color-3',
    category: 'color_spa',
    name: {
      mr: 'डीप नरिशिंग हेअर स्पा थेरपी',
      hi: 'डीप नरिशिंग हेयर स्पा थेरेपी',
      gu: 'ડીપ નરિશિંગ હેર સ્પા થેરાપી',
      en: 'Deep Nourishing Hair Spa Therapy',
    },
    price: 300,
    originalPrice: 400,
    durationMinutes: 35,
    description: {
      mr: 'ड्राय आणि डॅमेज केसांसाठी केराटिन व व्हिटॅमिन ई क्रीम मसाज + स्टीम.',
      hi: 'सूखे व बेजान बालों के लिए केराटिन व विटामिन क्रीम मसाज + हेयर स्टीम.',
      gu: 'ડેમેજ વાળ માટે કેરાટીન અને વિટામિન મસાજ + સ્ટીમ થેરાપી.',
      en: 'Hydrating keratin scalp massage, warm ozone steam, and soft shine conditioning.',
    },
  },
  {
    id: 'color-4',
    category: 'color_spa',
    name: {
      mr: 'रिलॅक्सिंग आयुर्वेदिक हेड मसाज (१० मिनिटे)',
      hi: 'रिलैक्सिंग आयुर्वेदिक हेड मसाज (10 मिनट)',
      gu: 'રિલેક્સિંગ આયુર્વેદિક હેડ મસાજ (10 મિનિટ)',
      en: 'Relaxing Ayurvedic Herbal Head Massage',
    },
    price: 100,
    durationMinutes: 15,
    description: {
      mr: 'थंडगार नवरत्न किंवा बदाम तेलाने डोक्याचा, मानेचा आणि खांद्यांचा तणावमुक्ती मसाज.',
      hi: 'नवरत्न या बादाम तेल से सिर, गर्दन और कंधों का तनाव दूर करने वाला मसाज.',
      gu: 'બદામ અથવા નવરત્ન તેલથી માથા અને ગળાનો શાંતિ આપતો મસાજ.',
      en: 'Cooling herbal oil pressure points relief for mental calmness and scalp health.',
    },
  },

  // Combos & Groom
  {
    id: 'combo-1',
    category: 'combos',
    name: {
      mr: 'भोलेनाथ स्पेशल कॉम्बो (कट + शेव + हेड मसाज)',
      hi: 'भोलेनाथ स्पेशल कॉम्बो (कट + शेव + हेड मसाज)',
      gu: 'ભોલેનાથ સ્પેશિયલ કોમ્બો (કટ + શેવ + મસાજ)',
      en: 'Bholenath Signature Trio Combo',
    },
    price: 220,
    originalPrice: 270,
    durationMinutes: 45,
    description: {
      mr: 'स्टाइलिश हेअर कट + दाढी सेटिंग/शेव्ह + रिलॅक्सिंग ऑइल हेड मसाज. सर्वोत्तम बचत!',
      hi: 'स्टाइलिश हेयर कट + दाढ़ी सेटिंग/शेव + रिफ्रेशिंग हेड मसाज. सबसे ज्यादा पसंद किया जाने वाला!',
      gu: 'સ્ટાઇલિશ હેર કટ + દાઢી સેટિંગ + માથાનો તેલ મસાજ. સુપર સેવિંગ્સ!',
      en: 'Complete gentleman refresh: Precision Cut + Sharp Beard Styling + 10-min Stress-Relief Head Massage.',
    },
    isPopular: true,
    tag: {
      mr: 'सुपर सेव्हर',
      hi: 'सुपर सेवर',
      gu: 'સુપર સેવર',
      en: 'Value Saver',
    },
  },
  {
    id: 'combo-2',
    category: 'combos',
    name: {
      mr: 'फेस्टिव्ह & पार्टी रेडी ग्रूमिंग पॅक',
      hi: 'फेस्टिवल & पार्टी रेडी ग्रूमिंग पैक',
      gu: 'ફેસ્ટિવ અને પાર્ટી રેડી ગ્રૂમિંગ પેક',
      en: 'Festive & Party Ready Makeover',
    },
    price: 450,
    originalPrice: 580,
    durationMinutes: 60,
    description: {
      mr: 'ट्रेंडी हेअर कट + बियर्ड डिझाइन + इन्स्टंट डी-टॅन ग्लो क्लीनअप + हेअर वॉश स्टाईल.',
      hi: 'ट्रेंडी कट + बियर्ड शेपिंग + इंस्टेंट डी-टैन ग्लो क्लीनअप + हेयर वॉश और स्टाइल.',
      gu: 'ટ્રેન્ડી હેર કટ + દાઢી ડિઝાઇન + ડી-ટેન ગ્લો ક્લીનઅપ + હેર વોશ.',
      en: 'Skin Fade/Crop + Razor Beard Sculpt + D-Tan Face Brightener + Styling Wax.',
    },
    isPopular: true,
  },
  {
    id: 'combo-3',
    category: 'combos',
    name: {
      mr: 'रॉयल ग्रूम / दुल्हा वेडिंग स्पेशल',
      hi: 'रॉयल ग्रूम / दूल्हा वेडिंग पैकेज',
      gu: 'રોયલ વરરાજા / દુલ્હા વેડિંગ પેકેજ',
      en: 'Royal Wedding Groom Package',
    },
    price: 999,
    originalPrice: 1350,
    durationMinutes: 90,
    description: {
      mr: 'लग्नासाठी संपूर्ण ग्रूमिंग: हेअर कट, रॉयल शेव्ह, गोल्ड फेशियल, डी-टॅन, हेअर स्पा आणि हेअर स्टाइलिंग.',
      hi: 'शादी के लिए स्पेशल: हेयर कट, रॉयल शेव, गोल्ड फेशियल, डी-टैन, हेयर स्पा व स्टाइलिंग.',
      gu: 'લગ્ન માટે સ્પેશિયલ: હેર કટ, રોયલ શેવ, ગોલ્ડ ફેશિયલ, ડી-ટેન, હેર સ્પા અને સ્ટાઇલ.',
      en: 'The complete groom preparation: Custom Haircut, Royal Shave, Gold Facial, D-Tan Scrub, Hair Spa & Finish.',
    },
    tag: {
      mr: 'लक्झरी पॅकेज',
      hi: 'लक्जरी पैकेज',
      gu: 'લક્ઝરી પેકેજ',
      en: 'Luxury VIP',
    },
  },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'सचिन पाटील (Sachin Patil)',
    locality: 'निलगिरी, सुरत (Nilgiri, Surat)',
    rating: 5,
    date: 'काल (Yesterday)',
    servicesUsed: ['मॉडर्न स्किन फेड', 'बियर्ड ट्रिम'],
    comment: {
      mr: 'मी गेल्या ३ वर्षांपासून प्रविणभाईंकडेच केस कापतो. त्यांच्या हातातील सफाई आणि फिनिशिंग अप्रतिम आहे. A.C. मुळे उन्हाळ्यातही एकदम फ्रेश वाटते.',
      hi: 'मैं पिछले 3 सालों से प्रविण भाई के पास ही बाल कटवाता हूँ। उनकी फिनिशिंग लाजवाब है और फुल AC का आनंद मिलता है।',
      gu: 'છેલ્લા 3 વર્ષથી અહીં જ આવું છું. પ્રવીણભાઈનું કામ એકદમ ચોક્કસ અને પરફેક્ટ છે.',
      en: 'The best fade haircut in Limbayat and Nilgiri area! Clean single-use blades, icy AC room and Pravin bhai is truly a master stylist.',
    },
  },
  {
    id: 'rev-2',
    name: 'रोहित शर्मा (Rohit Sharma)',
    locality: 'शांति नगर, गोडादरा (Shanti Nagar, Godadra)',
    rating: 5,
    date: '३ दिवसांपूर्वी (3 days ago)',
    servicesUsed: ['रॉयल गोल्ड फेशियल', 'हेड मसाज'],
    comment: {
      mr: 'माझ्या भावाच्या लग्नासाठी इथे फेशियल आणि हेअर स्पा केला. चेहऱ्यावर एकदम नॅचरल ग्लो आला. हेड मसाजमुळे सर्व थकवा दूर झाला.',
      hi: 'शादी के फंक्शन से पहले फेशियल और मसाज करवाया, रिजल्ट बहुत शानदार था। पैसा वसूल सर्विस!',
      gu: 'ગોલ્ડ ફેશિયલ અને હેડ મસાજ ખૂબ જ સરસ રહ્યો. ચહેરા પર તરત જ ચમક આવી ગઈ.',
      en: 'Got the gold facial and head massage before a family wedding. Incredible relaxation and spotless hygiene.',
    },
  },
  {
    id: 'rev-3',
    name: 'अमित देसाई (Amit Desai)',
    locality: 'लिंबायत, सुरत (Limbayat, Surat)',
    rating: 5,
    date: '१ आठवड्यापूर्वी (1 week ago)',
    servicesUsed: ['क्लासिक हेअर कट', 'दाढी सेटिंग'],
    comment: {
      mr: 'सुरतमधील सर्वात प्रामाणिक आणि वाजवी दरात लक्झरी सेवा देणारे सलून. प्रत्येक वेळी नवा ब्लेड वापरतात, स्वच्छता नंबर १ आहे!',
      hi: 'सूरत में सबसे ईमानदार और किफायती दामों में बेस्ट सर्विस। साफ-सफाई नंबर 1 है।',
      gu: 'સુરતમાં સૌથી વાજબી ભાવે શ્રેષ્ઠ સેવા આપતું સલોન. સ્વચ્છતા એકદમ સુપ્રીમ છે.',
      en: 'Extremely polite staff, pocket-friendly transparent rates, and uncompromised hygiene.',
    },
  },
  {
    id: 'rev-4',
    name: 'विकास शिंदे (Vikas Shinde)',
    locality: 'संतोषी नगर, सुरत (Santoshi Nagar, Surat)',
    rating: 5,
    date: '२ आठवड्यापूर्वी (2 weeks ago)',
    servicesUsed: ['भोलेनाथ स्पेशल कॉम्बो'],
    comment: {
      mr: 'दुकान अगदी घराशेजारीच आहे. व्हॉट्सॲपवर वेळ बुक करून गेलो त्यामुळे वेटिंग करावी लागली नाही. कॉम्बो ऑफर खूप फायद्याची आहे.',
      hi: 'व्हाट्सएप से टाइम बुक करके गया, कोई वेटिंग नहीं करनी पड़ी। कॉम्बो ऑफर सच में बहुत बढ़िया है।',
      gu: 'વોટ્સએપથી સ્લોટ બુક કરીને ગયો, કોઈ રાહ જોવી ન પડી. કામ ખૂબ સુંદર છે.',
      en: 'Booked via WhatsApp before heading over, zero waiting time in the air-conditioned lounge. Highly recommended combo package!',
    },
  },
];

export const FAQ_DATA = [
  {
    q: {
      mr: 'सलूनमध्ये अपॉइंटमेंट घेणे आवश्यक आहे का?',
      hi: 'क्या सैलून में पहले से अपॉइंटमेंट लेना जरूरी है?',
      gu: 'શું સલોનમાં અગાઉથી એપોઇન્ટમેન્ટ લેવી જરૂરી છે?',
      en: 'Is prior appointment mandatory?',
    },
    a: {
      mr: 'नाही, तुम्ही थेट वॉक-इन (Walk-in) देखील येऊ शकता. पण वीकेंड्स व सणांच्या दिवशी कमीत कमी वेळात सेवा मिळण्यासाठी वेबसाइट किंवा व्हॉट्सॲपवरून स्लॉट बुक करणे फायद्याचे ठरते.',
      hi: 'नहीं, आप सीधे भी आ सकते हैं। लेकिन वीकेंड और त्योहारों के दौरान वेटिंग से बचने के लिए वेबसाइट या व्हाट्सएप पर समय बुक करना ज्यादा सुविधाजनक रहता है।',
      gu: 'ના, તમે સીધા આવી શકો છો. પણ રાહ ન જોવી પડે તે માટે અગાઉથી વોટ્સએપ પર સમય બુક કરી શકો છો.',
      en: 'Walk-ins are always warmly welcomed! However, reserving your slot on WhatsApp or through our site ensures instant chair availability.',
    },
  },
  {
    q: {
      mr: 'स्वच्छता आणि साधनांची निर्जंतुकीकरण प्रक्रिया कशी आहे?',
      hi: 'साफ-सफाई और उपकरणों की स्वच्छता कैसी है?',
      gu: 'સ્વચ્છતા અને સાધનોની સેનિટાઇઝેશન પ્રક્રિયા કેવી છે?',
      en: 'What are your hygiene and sterilization practices?',
    },
    a: {
      mr: 'आम्ही प्रत्येक ग्राहकासाठी नवीन सिंगल-युज ब्लेड वापरतो. कात्री आणि क्लिपर्स प्रत्येक वापरानंतर सॅनिटाईझ केले जातात आणि स्वच्छ धुऊन घेतलेले कपडे/टॉवेल्स वापरले जातात.',
      hi: 'हम प्रत्येक ग्राहक के लिए नया सिंगल-यूज ब्लेड उपयोग करते हैं। कैंची और ट्रिमर हर कट के बाद सैनिटाइज होते हैं।',
      gu: 'દરેક ગ્રાહક માટે નવો બ્લેડ વાપરવામાં આવે છે અને સાધનો સંપૂર્ણ સેનિટાઇઝ રહે છે.',
      en: 'We mandate a brand-new single-use blade for every single shave/trim. Clippers and scissors undergo antiseptic sanitization between every client.',
    },
  },
  {
    q: {
      mr: 'सलूनचे अचूक ठिकाण कुठे आहे?',
      hi: 'सैलून का सही पता और लोकेशन क्या है?',
      gu: 'સલોનનું ચોક્કસ સરનામું ક્યાં છે?',
      en: 'Where exactly is the salon located in Surat?',
    },
    a: {
      mr: 'आमचे सलून संतोषी नगर, शांति नगर गेट जवळ, लिंबायत आणि गोडादरा जोडणाऱ्या मुख्य रस्त्यावर आहे. निलगिरी चौकातून अवघ्या ५ मिनिटांच्या अंतरावर आहे.',
      hi: 'हमारा सैलून संतोषी नगर, शांति नगर गेट के पास, लिंबायत-गोडादरा रोड पर स्थित है। निलगिरी मैदान से सिर्फ 5 मिनट की दूरी पर है।',
      gu: 'અમારું સલોન સંતોષી નગર, શાંતિ નગર ગેટ પાસે, લિંબાયત-ગોડાદરા મેઈન રોડ પર સ્થિત છે.',
      en: 'We are situated at Santoshi Nagar, right next to Shanti Nagar Gate on Limbayat - Godadra Road, just 5 minutes from Nilgiri Ground, Surat.',
    },
  },
  {
    q: {
      mr: 'पेमेंटचे कोणते पर्याय उपलब्ध आहेत?',
      hi: 'पेमेंट के कौन से तरीके स्वीकार किए जाते हैं?',
      gu: 'પેમેન્ટ માટે કયા વિકલ્પો ઉપલબ્ધ છે?',
      en: 'Which payment modes are accepted?',
    },
    a: {
      mr: 'आम्ही रोख (Cash), Google Pay, PhonePe, Paytm, आणि कोणताही UPI QR कोड स्कॅन करून पेमेंट स्वीकारतो.',
      hi: 'हम कैश, Google Pay, PhonePe, Paytm और सभी प्रकार के UPI QR कोड पेमेंट स्वीकार करते हैं।',
      gu: 'કેશ તેમજ Google Pay, PhonePe, Paytm અને તમામ UPI સ્વીકાર્ય છે.',
      en: 'Cash, Google Pay, PhonePe, Paytm and all UPI QR payments are supported.',
    },
  },
];
