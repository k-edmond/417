'use client';

import { useState, createContext, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'kr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.products': 'PRODUCTS',
    'nav.contact': 'CONTACT',
    
    // Hero
    'hero.tagline': 'Premium Skincare Solutions',
    'hero.title': 'True performance',
    'hero.titleAccent': 'begins beneath the surface.',
    'hero.subtitle': 'True beauty begins with sustainable change, not temporary effects.',
    'hero.button': 'Discover Your Solution',
    
    // Brand Story
    'story.label': 'Our Story',
    'story.title': 'ELEGENN',
    'story.titleAccent': 'Where science meets visible results.',
    'story.desc1': 'ELEGENN GLOBAL is not just another skincare brand. In a world of fast-trending solutions, we focus on what truly matters — delivering high-performance formulations that create fundamental changes in your skin.',
    'story.desc2': 'We research and develop high-functional solutions that bring fundamental changes to your skin, focusing on essence in a world of rapidly consumed trends.',
    'story.button': 'About Us',
    
    // Technology
    'tech.label': 'Our Technology',
    'tech.title': 'Engineered for visible transformation.',
    'tech.subtitle': 'High-efficiency formulations stripped of unnecessary elements',
    'tech.pdrn.title': 'PDRN',
    'tech.pdrn.subtitle': 'Polydeoxyribonucleotide',
    'tech.pdrn.desc': 'Purified regenerative energy that awakens the skin\'s inherent power',
    'tech.pdrn.detail': 'DNA fragments extracted from salmon reproductive cells that help regenerate skin cells and rebuild damaged skin barriers.',
    'tech.peptide.title': 'Peptide Complex',
    'tech.peptide.subtitle': 'Protein Bond',
    'tech.peptide.desc': 'Protein bonds that restore lost skin balance',
    'tech.peptide.detail': 'Amino acid complexes that prevent skin elasticity decline and care for everything from deep wrinkles to fine lines.',
    'tech.ha.title': 'HA',
    'tech.ha.subtitle': 'Hyaluronic Acid',
    'tech.ha.desc': 'Deep moisturization that never dries out',
    'tech.ha.detail': 'Cross-combination of high/low molecular weight hyaluronic acid for simultaneous inner and outer moisturization.',
    'tech.button': 'Learn More About ELEGENN',
    
    // Products
    'products.label': 'Product Line',
    'products.title': 'High-Performance Skin Solution',
    'products.subtitle': 'Transform your skin with professional, high-functional skincare solutions.',
    'products.viewAll': 'View All Products',
    'products.viewDetails': 'View Details',
    'products.viewMore': 'Explore More Products',
    
    // CTA
    'cta.title': 'Ready to Transform Your Skin?',
    'cta.subtitle': 'Discover the true potential of your skin with ELEGENN GLOBAL\'s high-performance solutions.',
    'cta.button1': 'Explore Products',
    'cta.button2': 'Contact Us',
    
    // About Hero
    'about.hero.label': 'About ELEGENN GLOBAL',
    'about.hero.title1': 'Where Science Meets',
    'about.hero.titleAccent': 'Visible Results',
    'about.hero.desc': 'ELEGENN GLOBAL is a global beauty company that delivers real results by combining high-performance ingredients with sophisticated formulation technology based on skin science.',
    
    // Company Overview
    'about.overview.label': 'Company Overview',
    'about.overview.title': 'Experts in Skin Science',
    'about.overview.desc1': 'ELEGENN GLOBAL CO.,LTD is a global beauty company that delivers real results by combining high-performance ingredients with sophisticated formulation technology.',
    'about.overview.desc2': 'We focus on ampoule and booster solutions centered on high-functional ingredients like PDRN, Peptides, and HA, providing tangible "results" beyond simple cosmetics.',
    
    // CEO Message
    'about.ceo.label': 'CEO Message',
    'about.ceo.quote': '"Today\'s beauty market is changing rapidly around efficacy and trust beyond simple beauty."',
    'about.ceo.desc1': 'Hello, this is the CEO of ELEGENN GLOBAL.',
    'about.ceo.desc2': 'ELEGENN started as a brand focused on "visible results" in this trend. We aim to provide trust to customers and partners through scientifically-grounded ingredients, strict quality control, and globally competitive products.',
    'about.ceo.desc3': 'We will continue to grow as a globally recognized brand through ongoing research and innovation.',
    
    // Vision & Mission
    'about.vm.label': 'Vision & Mission',
    'about.vm.title': 'Our Vision & Mission',
    'about.vm.vision.title': 'Vision',
    'about.vm.vision.text': 'A Globally Trusted High-Performance Skincare Brand',
    'about.vm.vision.sub': 'To become a globally trusted high-performance skincare solution provider.',
    'about.vm.mission.title': 'Mission',
    'about.vm.mission.item1': 'Provide noticeable and effective skincare solutions',
    'about.vm.mission.item2': 'Ensure quality and safety through reliable manufacturing',
    'about.vm.mission.item3': 'Create value through innovation and results',
    
    // Values
    'about.values.label': 'Our Values',
    'about.values.title': 'Core Values',
    'about.values.pf.title': 'Performance First',
    'about.values.pf.desc': 'Results-oriented product development',
    'about.values.pf.detail': 'We develop scientifically validated formulas with visible results.',
    'about.values.sa.title': 'Scientific Approach',
    'about.values.sa.desc': 'Science-based ingredients and formulations',
    'about.values.sa.detail': 'We pursue ingredient selection and product development based on strict scientific evidence.',
    'about.values.qa.title': 'Quality Assurance',
    'about.values.qa.desc': 'Global-standard quality control',
    'about.values.qa.detail': 'We comply with competitive quality standards in the global market.',
    'about.values.gm.title': 'Global Mindset',
    'about.values.gm.desc': 'Overseas market-centered strategy',
    'about.values.gm.detail': 'We have competitiveness in the global market with world-class products and services.',
    'about.values.tp.title': 'Trust & Partnership',
    'about.values.tp.desc': 'Building long-term partnerships',
    'about.values.tp.detail': 'We will grow as a brand trusted by customers and partners.',
    
    // Products Page
    'products.hero.label': 'Product Line',
    'products.hero.title1': 'High-Performance',
    'products.hero.titleAccent': 'Skin Solutions',
    'products.hero.desc': 'High-concentration ampoule and booster product line emphasizing the "professional solution" feel unique to medical brands.',
    'products.tech.label': 'Technology',
    'products.tech.title': 'Core Ingredients',
    'products.tech.subtitle': 'High-efficiency formulations stripped of unnecessary elements',
    
    // Product Detail
    'product.back': 'Back to Products',
    'product.keyFeatures': 'Key Features',
    'product.coreMechanism': 'Core Mechanism',
    'product.targetAudience': 'Target Audience',
    'product.keyIngredients': 'Key Ingredients',
    'product.howToUse': 'How to Use',
    'product.inquiry': 'Inquiry Now',
    
    // Contact
    'contact.hero.label': 'Contact Us',
    'contact.hero.title': 'Get in Touch',
    'contact.hero.desc': 'Please feel free to contact us anytime if you have questions about ELEGENN GLOBAL\'s products and partnerships.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.desc': 'Fill out the form below and we will get back to you as soon as possible.',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Monday - Friday, 9AM - 6PM KST',
    'contact.followUs': 'Follow Us',
    'contact.location.label': 'Our Location',
    'contact.location.title': 'Headquarters',
    'contact.location.city': 'Seoul, Republic of Korea',
    
    // Footer
    'footer.desc': 'Premium skincare solutions combining cutting-edge science with visible results. Dedicated to developing high-performance formulations that transform your skin.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.contactUs': 'Contact',
    'footer.copyright': 'All rights reserved.',
    
    // Scroll
    'scroll': 'SCROLL',
  },
  kr: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '회사 소개',
    'nav.products': '제품',
    'nav.contact': '문의',
    
    // Hero
    'hero.tagline': '프리미엄 스킨케어 솔루션',
    'hero.title': '진정한 효능은 피부 깊은 곳에서부터 시작됩니다',
    'hero.subtitle': '진정한 아름다움은 일시적인 효과가 아닌, 지속 가능한 변화에서 시작됩니다.',
    'hero.button': '솔루션 살펴보기',
    
    // Brand Story
    'story.label': '우리의 이야기',
    'story.title': 'ELEGENN',
    'story.titleAccent': '과학이 눈에 보이는 결과로 이어지는 곳.',
    'story.desc1': '엘레젠은 단순한 스킨케어 브랜드가 아닙니다. 빠르게 소비되는 트렌드 속에서 본질에 집중하며, 피부의 근본적인 변화를 이끌어내는 고기능성 솔루션을 연구합니다.',
    'story.desc2': '당사는 PDRN, 펩타이드, HA 등 고기능성 원료를 중심으로 한 앰플 및 부스터 솔루션을 핵심 제품군으로 하며, 단순한 화장품을 넘어 고객의 피부에 실질적인 \'결과\'를 제공합니다.',
    'story.button': '회사 소개 보기',
    
    // Technology
    'tech.label': '우리의 기술',
    'tech.title': '눈에 보이는 변화를 위해 설계된 솔루션.',
    'tech.subtitle': '불필요한 요소를 배제한 고효능 처방',
    'tech.pdrn.title': 'PDRN',
    'tech.pdrn.subtitle': '폴리디옥시리보뉴클레오타이드',
    'tech.pdrn.desc': '피부 본연의 힘을 깨우는 정제된 재생 에너지',
    'tech.pdrn.detail': '연어 생식세포에서 추출한 DNA 조각으로, 피부 세포의 재생을 돕고 손상된 피부 장벽을 탄탄하게 재건합니다.',
    'tech.peptide.title': '펩타이드 콤플렉스',
    'tech.peptide.subtitle': '단백질 결합',
    'tech.peptide.desc': '무너진 피부 밸런스를 되찾는 단백질 결합',
    'tech.peptide.detail': '아미노산의 결합체로, 피부 탄력 저하를 막고 깊은 주름부터 미세 주름까지 케어합니다.',
    'tech.ha.title': '히알루론산',
    'tech.ha.subtitle': '히알루론산',
    'tech.ha.desc': '깊은 보습감',
    'tech.ha.detail': '고분자/저분자 히알루론산을 교차 배합하여 겉과 속을 동시에 보습합니다.',
    'tech.button': 'Learn More About ELEGENN',
    
    // Products
    'products.label': '제품 라인',
    'products.title': '고성능 스킨 솔루션',
    'products.subtitle': '전문적이고 고기능성 스킨케어 솔루션으로 피부의 변화를 경험하세요.',
    'products.viewAll': '모든 제품 보기',
    'products.viewDetails': '자세히 보기',
    'products.viewMore': '다른 제품 살펴보기',
    
    // CTA
    'cta.title': '피부의 변화를 경험할 준비가 되셨습니까?',
    'cta.subtitle': '엘레젠의 고기능 솔루션으로 피부의 진정한 잠재력을 발견하세요.',
    'cta.button1': '제품 살펴보기',
    'cta.button2': '문의하기',
    
    // About Hero
    'about.hero.label': '엘레젠글로벌 소개',
    'about.hero.title1': '과학과',
    'about.hero.titleAccent': '눈에 보이는 결과가 만나는 곳',
    'about.hero.desc': '엘레젠글로벌은 피부 과학을 기반으로 한 고효능 원료와 정교한 처방 기술을 결합하여, 실제 변화를 만들어내는 제품을 제공하는 글로벌 뷰티 기업입니다.',
    
    // Company Overview
    'about.overview.label': '회사 개요',
    'about.overview.title': '피부 과학의 전문가',
    'about.overview.desc1': '엘레젠글로벌주식회사는 피부 과학을 기반으로 한 고효능 원료와 정교한 처방 기술을 결합하여, 실제 변화를 만들어내는 제품을 제공하는 글로벌 뷰티 기업입니다.',
    'about.overview.desc2': '당사는 PDRN, 펩타이드, HA 등 고기능성 원료를 중심으로 한 앰플 및 부스터 솔루션을 핵심 제품군으로 하며, 단순한 화장품을 넘어 고객의 피부에 실질적인 \'결과\'를 제공합니다.',
    
    // CEO Message
    'about.ceo.label': 'CEO 메시지',
    'about.ceo.quote': '"오늘날 뷰티 시장은 단순한 아름다움을 넘어, 효능과 신뢰를 중심으로 빠르게 변화하고 있습니다."',
    'about.ceo.desc1': '안녕하십니까, 엘레젠글로벌 대표입니다.',
    'about.ceo.desc2': '엘레젠은 이러한 흐름 속에서 "보이는 결과"에 집중하는 브랜드로 출발했습니다. 우리는 과학적 근거에 기반한 성분, 엄격한 품질 관리, 그리고 글로벌 시장에서 경쟁력 있는 제품을 통해 고객과 파트너에게 신뢰를 제공하고자 합니다.',
    'about.ceo.desc3': '앞으로도 지속적인 연구와 혁신을 통해 글로벌 시장에서 인정받는 브랜드로 성장하겠습니다.',
    
    // Vision & Mission
    'about.vm.label': '비전 & 미션',
    'about.vm.title': '우리의 비전과 미션',
    'about.vm.vision.title': '비전',
    'about.vm.vision.text': '고기능성 스킨케어 시장에서 신뢰받는 글로벌 브랜드',
    'about.vm.vision.sub': 'To become a globally trusted high-performance skincare solution provider.',
    'about.vm.mission.title': '미션',
    'about.vm.mission.item1': '눈에 띄고 효과적인 스킨케어 솔루션 제공',
    'about.vm.mission.item2': '신뢰할 수 있는 제조를 통한 품질과 안전 보장',
    'about.vm.mission.item3': '혁신과 성과를 통한 가치 창출',
    
    // Values
    'about.values.label': '우리의 가치',
    'about.values.title': '핵심 가치',
    'about.values.pf.title': '성과 우선',
    'about.values.pf.desc': '결과 중심의 제품 개발',
    'about.values.pf.detail': '보이는 결과를 목표로 과학적으로 검증된 성분과 처방을 개발합니다.',
    'about.values.sa.title': '과학적 접근',
    'about.values.sa.desc': '과학 기반 원료 및 처방',
    'about.values.sa.detail': '엄격한 과학적 근거에 기반한 성분 선택과 제품 개발을 추구합니다.',
    'about.values.qa.title': '품질 보증',
    'about.values.qa.desc': '글로벌 기준의 품질 관리',
    'about.values.qa.detail': '글로벌 시장에서 경쟁력 있는 품질 기준을 준수합니다.',
    'about.values.gm.title': '글로벌 마인드',
    'about.values.gm.desc': '해외 시장 중심 전략',
    'about.values.gm.detail': '세계적인 수준의 제품과 서비스로 글로벌 시장에서의 경쟁력을 갖추고 있습니다.',
    'about.values.tp.title': '신뢰 & 파트너십',
    'about.values.tp.desc': '장기적인 파트너십 구축',
    'about.values.tp.detail': '고객과 파트너에게 신뢰받는 브랜드로 성장해 나가겠습니다.',
    
    // Products Page
    'products.hero.label': '제품 라인',
    'products.hero.title1': '고성능',
    'products.hero.titleAccent': '스킨 솔루션',
    'products.hero.desc': '메디컬 브랜드 특유의 \'전문가용 솔루션\' 느낌을 강조한 고농축 앰플 및 부스터 제품 라인',
    'products.tech.label': '기술력',
    'products.tech.title': '핵심 성분',
    'products.tech.subtitle': '불필요한 요소를 배제한 고효능 처방',
    
    // Product Detail
    'product.back': '제품 목록으로',
    'product.keyFeatures': '주요 특징',
    'product.coreMechanism': '핵심 작용',
    'product.targetAudience': '대상',
    'product.keyIngredients': '주요 성분',
    'product.howToUse': '사용 방법',
    'product.inquiry': '문의하기',
    
    // Contact
    'contact.hero.label': '문의하기',
    'contact.hero.title': '연락주세요',
    'contact.hero.desc': '엘레젠글로벌의 제품과 파트너십에 대해 궁금하신 점이 있으시면 언제든지 연락주세요.',
    'contact.form.title': '메시지 보내기',
    'contact.form.desc': '아래 양식을 작성해 주시면尽快 회신드리겠습니다.',
    'contact.form.firstName': '이름',
    'contact.form.lastName': '성',
    'contact.form.email': '이메일',
    'contact.form.company': '회사',
    'contact.form.subject': '제목',
    'contact.form.message': '내용',
    'contact.form.send': '보내기',
    'contact.info.title': '연락처 정보',
    'contact.info.address': '주소',
    'contact.info.phone': '전화',
    'contact.info.email': '이메일',
    'contact.info.hours': '평일 9시 - 6시 (KST)',
    'contact.followUs': '팔로우',
    'contact.location.label': '위치',
    'contact.location.title': '본사',
    'contact.location.city': '서울, 대한민국',
    
    // Footer
    'footer.desc': '최첨단科学与 눈에 보이는 결과를 결합한 프리미엄 스킨케어 솔루션. 피부를 변화시키는 고기능성 처방 개발에 최선을 다하고 있습니다.',
    'footer.quickLinks': '빠른 링크',
    'footer.home': '홈',
    'footer.about': '회사 소개',
    'footer.products': '제품',
    'footer.contact': '문의',
    'footer.contactUs': '문의',
    'footer.copyright': 'All rights reserved.',
    
    // Scroll
    'scroll': '스크롤',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  // Apply Korean font class when Korean is selected
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (lang === 'kr') {
        document.documentElement.classList.add('lang-kr');
      } else {
        document.documentElement.classList.remove('lang-kr');
      }
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
