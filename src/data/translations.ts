export type LanguageCode = 'en' | 'gu' | 'hi';

export interface TranslationDictionary {
  nav: {
    home: string;
    pottery: string;
    tandoors: string;
    ganpati: string;
    wholesale: string;
    gallery: string;
    ourStory: string;
    contact: string;
    categories: string;
    enquiry: string;
    saved: string;
  };
  cta: {
    whatsappQuote: string;
    addToEnquiry: string;
    addedToEnquiry: string;
    shareProduct: string;
    callStore: string;
    storeLocation: string;
    browsePottery: string;
    sendEnquiryWhatsApp: string;
    clearEnquiry: string;
    requestBulkQuote: string;
    openGoogleMaps: string;
  };
  enquiryDrawer: {
    title: string;
    subtitle: string;
    emptyText: string;
    additionalNoteLabel: string;
    notePlaceholder: string;
  };
  product: {
    priceOnRequest: string;
    inStock: string;
    preOrder: string;
    specifications: string;
    recommendedUses: string;
    careUsage: string;
    material: string;
    dimensions: string;
    weight: string;
    storeLocation: string;
    naturalClayAssurance: string;
    handcraftedAssurance: string;
    storeAssurance: string;
  };
  reach: {
    title: string;
    subtitle: string;
    catalogViews: string;
    productShares: string;
    directEnquiries: string;
    productsSold: string;
    integrityGuarantee: string;
  };
  common: {
    searchPlaceholder: string;
    notFoundTitle: string;
    notFoundDesc: string;
    language: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      pottery: 'Pottery',
      tandoors: 'Tandoors',
      ganpati: 'Ganpati',
      wholesale: 'Wholesale',
      gallery: 'Gallery',
      ourStory: 'Our Story',
      contact: 'Contact',
      categories: 'Categories',
      enquiry: 'Enquiry',
      saved: 'Saved',
    },
    cta: {
      whatsappQuote: 'Instant WhatsApp Quote',
      addToEnquiry: 'Add to Multi-Product Enquiry',
      addedToEnquiry: 'Added to Enquiry List',
      shareProduct: 'Share Product',
      callStore: 'Call Store',
      storeLocation: 'Store Location',
      browsePottery: 'Browse Pottery',
      sendEnquiryWhatsApp: 'Send Enquiry on WhatsApp',
      clearEnquiry: 'Clear Enquiry',
      requestBulkQuote: 'Request Bulk Quote',
      openGoogleMaps: 'Open Google Maps',
    },
    enquiryDrawer: {
      title: 'My Pottery Enquiry List',
      subtitle: 'Review selected pottery products and send a single WhatsApp quote request.',
      emptyText: 'Your enquiry list is currently empty. Browse our catalog to add items.',
      additionalNoteLabel: 'Additional Requirements / Delivery Location (Optional):',
      notePlaceholder: 'e.g. Need 100 pieces delivered to Subhashnagar, Bhavnagar',
    },
    product: {
      priceOnRequest: 'Price on Request',
      inStock: 'Store Stock Available',
      preOrder: 'Pre-Order / Contact Store',
      specifications: 'Product Specifications',
      recommendedUses: 'Recommended Applications & Uses',
      careUsage: 'Care & Usage Guide',
      material: 'Material',
      dimensions: 'Dimensions',
      weight: 'Approx. Weight',
      storeLocation: 'Store Location',
      naturalClayAssurance: '100% Natural Clay',
      handcraftedAssurance: 'Artisan Handmade',
      storeAssurance: 'Subhashnagar Store',
    },
    reach: {
      title: 'Shree Matla Ghar — Genuine Business Reach',
      subtitle: 'Transparent metrics tracking customer engagement across our clay pottery catalog, specialist Drum Tandoors, and verified store sales.',
      catalogViews: 'Catalog Product Views',
      productShares: 'Product Shares',
      directEnquiries: 'Direct Enquiries',
      productsSold: 'Products Sold',
      integrityGuarantee: 'Integrity Guarantee: All numbers represent actual verified actions and store records. We never display fake or randomized counts.',
    },
    common: {
      searchPlaceholder: 'Search Drum Tandoor, Matka, Kulhad, Handi, Ganpati...',
      notFoundTitle: 'Pottery Product Not Found',
      notFoundDesc: 'The pottery product you are looking for might have been moved or is currently unavailable.',
      language: 'Language',
    },
  },

  gu: {
    nav: {
      home: 'હોમ',
      pottery: 'માટીકામ (પોટરી)',
      tandoors: 'તંદૂર',
      ganpati: 'ગણપતિ',
      wholesale: 'જથ્થાબંધ (હોલસેલ)',
      gallery: 'ગેલેરી',
      ourStory: 'અમારી વાર્તા',
      contact: 'સંપર્ક',
      categories: 'કેટેગરી',
      enquiry: 'પૂછપરછ ની યાદી',
      saved: 'સાચવેલ',
    },
    cta: {
      whatsappQuote: 'વોટ્સએપ ભાવ પૂછપરછ',
      addToEnquiry: 'યાદીમાં ઉમેરો',
      addedToEnquiry: 'યાદીમાં ઉમેરેલ છે',
      shareProduct: 'શેર કરો',
      callStore: 'સ્ટોર પર કોલ કરો',
      storeLocation: 'સ્ટોર લોકેશન',
      browsePottery: 'માટીકામ જુઓ',
      sendEnquiryWhatsApp: 'વોટ્સએપ પર પૂછપરછ મોકલો',
      clearEnquiry: 'યાદી ખાલી કરો',
      requestBulkQuote: 'જથ્થાબંધ ભાવ પૂછો',
      openGoogleMaps: 'ગુગલ મેપ્સ ખોલો',
    },
    enquiryDrawer: {
      title: 'મારી પૂછપરછ ની યાદી',
      subtitle: 'પસંદ કરેલ માટીના વાસણોની ચકાસણી કરો અને વોટ્સએપ પર ભાવ મેળવો.',
      emptyText: 'તમારી પૂછપરછ યાદી હાલમાં ખાલી છે. પ્રોડક્ટ્સ ઉમેરવા માટે કૅટેલૉગ જુઓ.',
      additionalNoteLabel: 'વધારાની જરૂરિયાત / ડિલિવરી સ્થળ (ઓપ્શનલ):',
      notePlaceholder: 'દા.ત. સુભાષનગર, ભાવનગરમાં ૧૦૦ નંગની જરૂર છે',
    },
    product: {
      priceOnRequest: 'ભાવ પૂછપરછ પર',
      inStock: 'સ્ટોકમાં ઉપલબ્ધ',
      preOrder: 'અગાઉથી ઓર્ડર / સંપર્ક કરો',
      specifications: 'પ્રોડક્ટ માહિતી',
      recommendedUses: 'ઉપયોગ તથા ફાયદાઓ',
      careUsage: 'સંભાળ અને ઉપયોગની માર્ગદર્શિકા',
      material: 'સામગ્રી (મટિરિયલ)',
      dimensions: 'માપ (ડાઇમેન્શન)',
      weight: 'આશરે વજન',
      storeLocation: 'સ્ટોરનું સ્થળ',
      naturalClayAssurance: '૧૦૦% કુદરતી માટી',
      handcraftedAssurance: 'હાથથી બનાવેલ આર્ટિસન',
      storeAssurance: 'સુભાષનગર સ્ટોર',
    },
    reach: {
      title: 'શ્રી માટલા ઘર — પ્રત્યક્ષ વ્યાપારી પહોંચ',
      subtitle: 'અમારા માટીકામ, ડ્રમ તંદૂર અને ખરીદીના સાચા આંકડાઓ.',
      catalogViews: 'પ્રોડક્ટ વ્યુઝ',
      productShares: 'પ્રોડક્ટ શેર્સ',
      directEnquiries: 'વોટ્સએપ પૂછપરછ',
      productsSold: 'વેચાયેલ માટીના વાસણો',
      integrityGuarantee: 'વિશ્વાસની ખાતરી: તમામ આંકડા વાસ્તવિક સ્ટોર રજિસ્ટર અને ગ્રાહકોની પ્રત્યક્ષ મુલાકાત પર આધારિત છે.',
    },
    common: {
      searchPlaceholder: 'ડ્રમ તંદૂર, માટલા, કુલડી, હંડી, ગણપતિ શોધો...',
      notFoundTitle: 'પ્રોડક્ટ મળેલ નથી',
      notFoundDesc: 'તમે શોધેલ માટીની પ્રોડક્ટ હાલમાં ઉપલબ્ધ નથી અથવા સ્થળાંતરિત થઈ છે.',
      language: 'ભાષા',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      pottery: 'मिट्टी के बर्तन',
      tandoors: 'तंदूर',
      ganpati: 'गणपति',
      wholesale: 'थोक विक्रेता (होलसेल)',
      gallery: 'गैलरी',
      ourStory: 'हमारी कहानी',
      contact: 'संपर्क',
      categories: 'श्रेणियां',
      enquiry: 'पूछताछ सूची',
      saved: 'सहेजे गए',
    },
    cta: {
      whatsappQuote: 'व्हाट्सएप पूछताछ',
      addToEnquiry: 'सूची में जोड़ें',
      addedToEnquiry: 'सूची में जोड़ा गया',
      shareProduct: 'शेयर करें',
      callStore: 'स्टोर को कॉल करें',
      storeLocation: 'स्टोर लोकेशन',
      browsePottery: 'मिट्टी के बर्तन देखें',
      sendEnquiryWhatsApp: 'व्हाट्सएप पर पूछताछ भेजें',
      clearEnquiry: 'सूची खाली करें',
      requestBulkQuote: 'थोक मूल्य पूछें',
      openGoogleMaps: 'गूगल मैप्स खोलें',
    },
    enquiryDrawer: {
      title: 'मेरी पूछताछ सूची',
      subtitle: 'चुने गए मिट्टी के उत्पादों की समीक्षा करें और व्हाट्सएप पर कोटेशन प्राप्त करें।',
      emptyText: 'आपकी पूछताछ सूची अभी खाली है। उत्पाद जोड़ने के लिए कैटलॉग देखें।',
      additionalNoteLabel: 'अतिरिक्त आवश्यकता / डिलीवरी स्थान (वैकल्पिक):',
      notePlaceholder: 'उदा. सुभाषनगर, भावनगर में 100 पीस की आवश्यकता है',
    },
    product: {
      priceOnRequest: 'मूल्य पूछताछ पर',
      inStock: 'स्टॉक में उपलब्ध',
      preOrder: 'अग्रिम ऑर्डर / संपर्क करें',
      specifications: 'उत्पाद विनिर्देश',
      recommendedUses: 'अनुशंसित उपयोग',
      careUsage: 'रखरखाव गाइड',
      material: 'सामग्री (मटीरियल)',
      dimensions: 'आकार (डायमेंशन)',
      weight: 'अनुमानित वजन',
      storeLocation: 'स्टोर स्थान',
      naturalClayAssurance: '100% प्राकृतिक मिट्टी',
      handcraftedAssurance: 'हस्तनिर्मित कारीगरी',
      storeAssurance: 'सुभाषनगर स्टोर',
    },
    reach: {
      title: 'श्री माटला घर — वास्तविक व्यावसायिक पहुंच',
      subtitle: 'हमारे ड्रम तंदूर, मटके और मिट्टी के बर्तनों के वास्तविक ग्राहक जुड़ाव के आंकड़े।',
      catalogViews: 'उत्पाद देखे गए',
      productShares: 'उत्पाद साझा किए गए',
      directEnquiries: 'व्हाट्सएप पूछताछ',
      productsSold: 'बिक्री किए गए उत्पाद',
      integrityGuarantee: 'सच्चाई की गारंटी: सभी आंकड़े वास्तविक स्टोर रिकॉर्ड और ग्राहकों की गतिविधि पर आधारित हैं।',
    },
    common: {
      searchPlaceholder: 'ड्रम तंदूर, मटका, कुल्हड़, हांडी, गणपति खोजें...',
      notFoundTitle: 'उत्पाद नहीं मिला',
      notFoundDesc: 'आपके द्वारा खोजा गया उत्पाद वर्तमान में उपलब्ध नहीं है।',
      language: 'भाषा',
    },
  },
};
