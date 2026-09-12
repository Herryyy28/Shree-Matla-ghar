export type LanguageCode = 'en' | 'gu' | 'hi';

export interface TranslationDictionary {
  nav: {
    home: string;
    pottery: string;
    tandoors: string;
    ganpati: string;
    ecoGanpati: string;
    wholesale: string;
    bulkWholesale: string;
    gallery: string;
    ourStory: string;
    craftStory: string;
    contact: string;
    contactStore: string;
    categories: string;
    categoryList: Record<string, string>;
    enquiry: string;
    saved: string;
  };
  badge: {
    new: string;
    popular: string;
    special: string;
    bulkOrder: string;
    featured: string;
  };
  cta: {
    whatsappQuote: string;
    whatsappQuoteShort: string;
    addToEnquiry: string;
    addToEnquiryShort: string;
    addedToEnquiry: string;
    addedToEnquiryShort: string;
    shareProduct: string;
    callStore: string;
    storeLocation: string;
    browsePottery: string;
    sendEnquiryWhatsApp: string;
    clearEnquiry: string;
    requestBulkQuote: string;
    openGoogleMaps: string;
    exploreProducts: string;
  };
  enquiryDrawer: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyText: string;
    browsePottery: string;
    additionalNoteLabel: string;
    notePlaceholder: string;
  };
  product: {
    priceOnRequest: string;
    inStock: string;
    preOrder: string;
    specifications: string;
    recommendedUses: string;
    careGuide: string;
    material: string;
    dimensions: string;
    weight: string;
    storeLocation: string;
    naturalClayAssurance: string;
    handcraftedAssurance: string;
    storeAssurance: string;
    viewDetails: string;
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
    all: string;
    back: string;
    clear: string;
    details: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      pottery: 'Pottery',
      tandoors: 'Tandoors',
      ganpati: 'Ganpati',
      ecoGanpati: 'Eco Ganpati Idols',
      wholesale: 'Wholesale',
      bulkWholesale: 'Wholesale & Bulk Supplies',
      gallery: 'Gallery',
      ourStory: 'Our Story',
      craftStory: 'Our Story & Craft',
      contact: 'Contact',
      contactStore: 'Visit Our Store',
      categories: 'Categories',
      categoryList: {
        matka: 'Matka & Surahi',
        tandoor: 'Drum & SS Tandoor',
        kulhad: 'Chai Kulhad & Mugs',
        handi: 'Cooking Handi',
        planters: 'Terracotta Planters',
        ganpati: 'Eco Ganpati Idols',
        tawa: 'Clay Tawa & Kadai',
        waterpot: 'Camper & Water Pot',
        decor: 'Home Decor & Diyas',
      },
      enquiry: 'Enquiry',
      saved: 'Saved',
    },
    badge: {
      new: 'New',
      popular: 'Popular',
      special: 'Special',
      bulkOrder: 'Bulk Order',
      featured: 'Featured',
    },
    cta: {
      whatsappQuote: 'Instant WhatsApp Quote',
      whatsappQuoteShort: 'WhatsApp',
      addToEnquiry: 'Add to Multi-Product Enquiry',
      addToEnquiryShort: '+ Enquiry',
      addedToEnquiry: 'Added to Enquiry List',
      addedToEnquiryShort: 'Enquired',
      shareProduct: 'Share Product',
      callStore: 'Call Store',
      storeLocation: 'Store Location',
      browsePottery: 'Browse Pottery',
      sendEnquiryWhatsApp: 'Send Multi-Item Enquiry on WhatsApp',
      clearEnquiry: 'Clear Enquiry',
      requestBulkQuote: 'Request Bulk Quote',
      openGoogleMaps: 'Open Google Maps',
      exploreProducts: 'Explore Products',
    },
    enquiryDrawer: {
      title: 'My Pottery Enquiry List',
      subtitle: 'items selected for WhatsApp quotation',
      emptyTitle: 'Your Enquiry List is Empty',
      emptyText: 'Explore our pottery products and add items to your enquiry.',
      browsePottery: 'Browse Pottery',
      additionalNoteLabel: 'Quick Contact / Requirements (Optional)',
      notePlaceholder: 'Special instructions, delivery location, custom sizes...',
    },
    product: {
      priceOnRequest: 'Price on Request',
      inStock: 'Store Stock Available',
      preOrder: 'Pre-Order / Contact Store',
      specifications: 'Product Specifications',
      recommendedUses: 'Recommended Applications & Uses',
      careGuide: 'Care & Usage Guide',
      material: 'Material',
      dimensions: 'Dimensions',
      weight: 'Approx. Weight',
      storeLocation: 'Store Location',
      naturalClayAssurance: '100% Natural Clay',
      handcraftedAssurance: 'Artisan Handmade',
      storeAssurance: 'Subhashnagar Store',
      viewDetails: 'View Details & Sizes',
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
      all: 'All Products',
      back: 'Back',
      clear: 'Clear Filters',
      details: 'Details',
    },
  },

  gu: {
    nav: {
      home: 'હોમ',
      pottery: 'માટીકામ (પોટરી)',
      tandoors: 'તંદૂર',
      ganpati: 'ગણપતિ',
      ecoGanpati: 'ઇકો ગણપતિ મૂર્તિઓ',
      wholesale: 'જથ્થાબંધ (હોલસેલ)',
      bulkWholesale: 'જથ્થાબંધ સપ્લાય',
      gallery: 'ગેલેરી',
      ourStory: 'અમારી વાર્તા',
      craftStory: 'અમારી કારીગરી અને વાર્તા',
      contact: 'સંપર્ક',
      contactStore: 'સ્ટોરની મુલાકાત લો',
      categories: 'કેટેગરી',
      categoryList: {
        matka: 'માટલા અને સરાહી',
        tandoor: 'ડ્રમ અને એસએસ તંદૂર',
        kulhad: 'ચા ની કુલડી અને કપ',
        handi: 'રસોઈ માટેની હંડી',
        planters: 'માટીના કુંડા (પ્લાન્ટર્સ)',
        ganpati: 'ઇકો ગણપતિ મૂર્તિઓ',
        tawa: 'માટીની તવી અને કઢાઈ',
        waterpot: 'વોટર કેમ્પર અને કૂલર',
        decor: 'ઘર સુશોભન અને કોડિયા',
      },
      enquiry: 'પૂછપરછ યાદી',
      saved: 'સાચવેલ',
    },
    badge: {
      new: 'નવું',
      popular: 'લોકપ્રિય',
      special: 'ખાસ',
      bulkOrder: 'જથ્થાબંધ ઓર્ડર',
      featured: 'ખાસ પસંદગી',
    },
    cta: {
      whatsappQuote: 'વોટ્સએપ ભાવ પૂછપરછ',
      whatsappQuoteShort: 'વોટ્સએપ',
      addToEnquiry: 'યાદીમાં ઉમેરો',
      addToEnquiryShort: '+ યાદી',
      addedToEnquiry: 'યાદીમાં ઉમેરેલ છે',
      addedToEnquiryShort: 'ઉમેરેલ છે',
      shareProduct: 'શેર કરો',
      callStore: 'સ્ટોર પર કોલ કરો',
      storeLocation: 'સ્ટોર લોકેશન',
      browsePottery: 'માટીકામ જુઓ',
      sendEnquiryWhatsApp: 'વોટ્સએપ પર પૂછપરછ મોકલો',
      clearEnquiry: 'યાદી ખાલી કરો',
      requestBulkQuote: 'જથ્થાબંધ ભાવ પૂછો',
      openGoogleMaps: 'ગુગલ મેપ્સ ખોલો',
      exploreProducts: 'પ્રોડક્ટ્સ જુઓ',
    },
    enquiryDrawer: {
      title: 'મારી પૂછપરછ ની યાદી',
      subtitle: 'વોટ્સએપ પૂછપરછ માટે પસંદ કરેલી વસ્તુઓ',
      emptyTitle: 'તમારી ઇન્ક્વાયરી લિસ્ટ ખાલી છે',
      emptyText: 'અમારા માટલા જુઓ અને તમારી ઇન્ક્વાયરી લિસ્ટમાં પ્રોડક્ટ્સ ઉમેરો.',
      browsePottery: 'માટલા કલેક્શન જુઓ',
      additionalNoteLabel: 'ખાસ નોટ / જરૂરિયાત (મરજિયાત)',
      notePlaceholder: 'ખાસ સૂચના, ડિલિવરી તારીખ કે સાઈઝ...',
    },
    product: {
      priceOnRequest: 'ભાવ પૂછપરછ પર',
      inStock: 'સ્ટોકમાં ઉપલબ્ધ',
      preOrder: 'અગાઉથી ઓર્ડર / સંપર્ક કરો',
      specifications: 'પ્રોડક્ટ માહિતી',
      recommendedUses: 'ઉપયોગ તથા ફાયદાઓ',
      careGuide: 'સંભાળ અને ઉપયોગની માર્ગદર્શિકા',
      material: 'સામગ્રી (મટિરિયલ)',
      dimensions: 'માપ (ડાઇમેન્શન)',
      weight: 'આશરે વજન',
      storeLocation: 'સ્ટોરનું સ્થળ',
      naturalClayAssurance: '૧૦૦% કુદરતી માટી',
      handcraftedAssurance: 'હાથથી બનાવેલ આર્ટિસન',
      storeAssurance: 'સુભાષનગર સ્ટોર',
      viewDetails: 'વિગતો અને સાઈઝ જુઓ',
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
      all: 'તમામ પ્રોડક્ટ્સ',
      back: 'પાછા જાઓ',
      clear: 'ફિલ્ટર્સ દૂર કરો',
      details: 'વિગતો',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      pottery: 'मिट्टी के बर्तन',
      tandoors: 'तंदूर',
      ganpati: 'गणपति',
      ecoGanpati: 'इको गणपति मूर्तियां',
      wholesale: 'थोक विक्रेता (होलसेल)',
      bulkWholesale: 'थोक आपूर्ति',
      gallery: 'गैलरी',
      ourStory: 'हमारी कहानी',
      craftStory: 'हमारी कहानी और कारीगरी',
      contact: 'संपर्क',
      contactStore: 'स्टोर पर आएं',
      categories: 'श्रेणियां',
      categoryList: {
        matka: 'मटका और सुराही',
        tandoor: 'ड्रम और एसएस तंदूर',
        kulhad: 'चाय की कुल्हड़ और कप',
        handi: 'खाना पकाने की हांडी',
        planters: 'मिट्टी के गमले',
        ganpati: 'इको गणपति मूर्तियां',
        tawa: 'मिट्टी का तवा और कड़ाही',
        waterpot: 'वॉटर कैंपर और कूलर',
        decor: 'गृह सज्जा और दीये',
      },
      enquiry: 'पूछताछ सूची',
      saved: 'सहेजे गए',
    },
    badge: {
      new: 'नया',
      popular: 'लोकप्रिय',
      special: 'खास',
      bulkOrder: 'थोक ऑर्डर',
      featured: 'विशेष',
    },
    cta: {
      whatsappQuote: 'व्हाट्सएप पूछताछ',
      whatsappQuoteShort: 'व्हाट्सएप',
      addToEnquiry: 'सूची में जोड़ें',
      addToEnquiryShort: '+ पूछताछ',
      addedToEnquiry: 'सूची में जोड़ा गया',
      addedToEnquiryShort: 'जोड़ा गया',
      shareProduct: 'शेयर करें',
      callStore: 'स्टोर को कॉल करें',
      storeLocation: 'स्टोर लोकेशन',
      browsePottery: 'मिट्टी के बर्तन देखें',
      sendEnquiryWhatsApp: 'व्हाट्सएप पर पूछताछ भेजें',
      clearEnquiry: 'सूची खाली करें',
      requestBulkQuote: 'थोक मूल्य पूछें',
      openGoogleMaps: 'गूगल मैप्स खोलें',
      exploreProducts: 'उत्पाद देखें',
    },
    enquiryDrawer: {
      title: 'मेरी पूछताछ सूची',
      subtitle: 'व्हाट्सएप उद्धरण के लिए चयनित आइटम',
      emptyTitle: 'आपकी पूछताछ सूची खाली है',
      emptyText: 'हमारे मटके देखें और अपनी पूछताछ सूची में उत्पाद जोड़ें।',
      browsePottery: 'मटका कलेक्शन देखें',
      additionalNoteLabel: 'विशेष नोट / आवश्यकता (वैकल्पिक)',
      notePlaceholder: 'विशेष निर्देश, डिलीवरी तिथि या साइज...',
    },
    product: {
      priceOnRequest: 'मूल्य पूछताछ पर',
      inStock: 'स्टॉक में उपलब्ध',
      preOrder: 'अग्रिम ऑर्डर / संपर्क करें',
      specifications: 'उत्पाद विनिर्देश',
      recommendedUses: 'अनुशंसित उपयोग',
      careGuide: 'रखरखाव गाइड',
      material: 'सामग्री (मटीरियल)',
      dimensions: 'आकार (डायमेंशन)',
      weight: 'अनुमानित वजन',
      storeLocation: 'स्टोर स्थान',
      naturalClayAssurance: '100% प्राकृतिक मिट्टी',
      handcraftedAssurance: 'हस्तनिर्मित कारीगरी',
      storeAssurance: 'सुभाषनगर स्टोर',
      viewDetails: 'विवरण और आकार देखें',
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
      all: 'सभी उत्पाद',
      back: 'वापस जाएं',
      clear: 'फ़िल्टर साफ़ करें',
      details: 'विवरण',
    },
  },
};

