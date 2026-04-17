'use client';

import { useState, useEffect, useRef } from 'react';
import { Target, Eye, TrendingUp, FlaskConical, Shield, Globe, Handshake, Microscope, Droplets } from 'lucide-react';

// Scroll Animation Hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Animated Section Component
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const coreValues = [
    { number: '01', title: 'Performance First', icon: TrendingUp, description: 'Real, visible results over empty promises' },
    { number: '02', title: 'Scientific Approach', icon: FlaskConical, description: 'Evidence-based formulation and development' },
    { number: '03', title: 'Quality Assurance', icon: Shield, description: 'Strict quality control at every stage' },
    { number: '04', title: 'Global Mindset', icon: Globe, description: 'Meeting international standards worldwide' },
    { number: '05', title: 'Trust & Partnership', icon: Handshake, description: 'Building lasting relationships with clients' },
  ];

  const businessAreas = [
    { number: '01', title: 'Functional Skincare Development', icon: Microscope },
    { number: '02', title: 'Ampoule & Booster Solutions', icon: Droplets },
    { number: '03', title: 'Global Distribution & Export', icon: Globe },
  ];

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f8fbfc 0%, #ffffff 50%, #f0f7fa 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-8">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <AnimatedSection>
            <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              About US
            </p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              SCIENCE-DRIVEN SKINCARE.
            </h1>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tiffany-text-gradient mb-3 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              VISIBLE RESULTS.
            </h1>
            <p className="text-xs text-gray-500 max-w-xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
              Advanced formulation meets proven efficacy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* 1. Company Overview & 2. CEO Message - Two Columns */}
          <AnimatedSection className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left - Company Overview */}
              <div>
                <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  01. COMPANY OVERVIEW
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Delivering Visible Results<br />Through Science
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed font-light">
                  <p>
                    ELEGENN GLOBAL is a global beauty company specializing in the development and supply of high-performance functional skincare solutions.
                  </p>
                  <p>
                    By combining advanced skin science with high-efficacy active ingredients and precise formulation technology, we create products designed to deliver real, visible results.
                  </p>
                  <p>
                    Our core product lines focus on ampoule and booster solutions formulated with key ingredients such as PDRN, peptides, and hyaluronic acid.
                  </p>
                  <p>
                    Through reliable OEM/ODM partnerships, we ensure stable production and meet international quality standards.
                  </p>
                  <p className="font-medium text-gray-700">
                    ELEGENN goes beyond conventional skincare — we are committed to delivering solution-driven products that provide tangible results for the skin.
                  </p>
                </div>
              </div>

              {/* Right - CEO Message */}
              <div>
                <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  02. MESSAGE FROM CEO
                </p>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <p className="text-lg text-gray-700 italic mb-6">
                    "Dear Valued Partners,
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    I am the CEO of ELEGENN GLOBAL Co., Ltd.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Today's beauty industry is evolving rapidly — moving beyond simple aesthetics toward <span className="text-[#0ABAB5] font-semibold">efficacy and trust</span>.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Amid this shift, ELEGENN GLOBAL was founded with a clear focus: to deliver visible results.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We are committed to providing products built on scientific evidence, supported by strict quality control, and designed to meet the demands of the global market.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Through this commitment, we aim to build lasting trust with our customers and partners. ELEGENN will continue to grow as a globally recognized brand through continuous research and innovation.
                  </p>
                  <p className="text-lg text-gray-700 italic mb-6">
                    Thank you."
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0ABAB5] to-[#08A5A1] flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">EG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">ELEGENN GLOBAL</p>
                      <p className="text-sm text-gray-500">CEO & Representative</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 3. Vision & 4. Mission */}
          <AnimatedSection delay={200} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0ABAB5]/20 to-[#0ABAB5]/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-[#0ABAB5]" />
                  </div>
                  <div>
                    <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base" style={{ fontFamily: 'Georgia, serif' }}>03. Vision</p>
                    <h3 className="text-lg font-bold text-gray-800">Our Vision</h3>
                  </div>
                </div>
                <p className="text-xl font-medium text-gray-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  To become a globally trusted <span className="text-[#0ABAB5]">high-performance</span> skincare solution provider.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0ABAB5]/20 to-[#0ABAB5]/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-[#0ABAB5]" />
                  </div>
                  <div>
                    <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base" style={{ fontFamily: 'Georgia, serif' }}>04. Mission</p>
                    <h3 className="text-lg font-bold text-gray-800">Our Mission</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    'Deliver visible and effective skincare solutions',
                    'Ensure quality and safety through reliable manufacturing',
                    'Build long-term partnerships with global clients',
                    'Create value through innovation and performance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* 5. Core Values - Icons Grid */}
          <AnimatedSection delay={300} className="mb-20">
            <div className="text-center mb-12">
              <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                05. CORE VALUES
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                  Our Foundation
                </h2>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <AnimatedSection key={index} delay={400 + index * 100}>
                  <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#0ABAB5]/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0ABAB5]/10 to-[#0ABAB5]/5 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-[#0ABAB5]" />
                    </div>
                    <div className="text-3xl font-bold text-gray-300 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {value.number}
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* 6. Business Areas */}
          <AnimatedSection delay={500}>
            <div className="text-center mb-12">
              <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-base mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                06. BUSINESS AREAS
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                  What We Do
                </h2>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessAreas.map((item, index) => (
                <AnimatedSection key={index} delay={600 + index * 100}>
                  <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#0ABAB5]/30 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0ABAB5]/10 to-[#0ABAB5]/5 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-10 w-10 text-[#0ABAB5]" />
                    </div>
                    <div className="text-2xl font-bold text-gray-300 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.number}
                    </div>
                    <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
