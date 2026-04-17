'use client';

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const products = [
  {
    id: 1,
    name: 'ELEGENN PDRN Revital Booster',
    tagline: 'Skin Regeneration & Recovery',
    description: 'High-concentration PDRN formula designed to support skin regeneration and recovery. Promotes cellular turnover for visibly healthier, more youthful skin.',
    tag: 'Main / Bestseller',
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    name: 'ELEGENN Hydra 10 Peptide Booster',
    tagline: 'Advanced Hydration & Elasticity',
    description: 'Advanced moisture and elasticity solution powered by Peptide complex and HA. Delivers intense hydration while improving skin firmness and elasticity.',
    tag: 'Hydration',
    rating: 4.8,
    featured: true,
  },
  {
    id: 3,
    name: 'ELEGENN Radiance Booster',
    tagline: 'Brightening & Even-Tone',
    description: 'Radiance-enhancing solution for hydrated, luminous, and even-toned skin. Targets dullness and uneven skin tone for a radiant glow.',
    tag: 'Brightening',
    rating: 4.7,
    featured: false,
  },
  {
    id: 4,
    name: 'ELEGENN Scalp Revital Booster',
    tagline: 'Intensive Scalp Care',
    description: 'Intensive scalp care solution for a healthy foundation. Helps address scalp concerns and promotes a healthy environment for hair growth.',
    tag: 'Scalp Care',
    rating: 4.6,
    featured: false,
  },
  {
    id: 5,
    name: 'ELEGENN Meso Sculpt Booster',
    tagline: 'Advanced Contouring',
    description: 'Advanced contouring solution for refined face & body silhouette. Targets areas of concern for a more sculpted appearance.',
    tag: 'Contouring',
    rating: 4.8,
    featured: false,
  },
  {
    id: 6,
    name: 'ELEGENN Post Procedure Ampoule',
    tagline: 'Soothing & Barrier Care',
    description: 'Soothing and barrier care solution for sensitive, post-treatment skin. Helps calm and protect skin after cosmetic procedures.',
    tag: 'Post-Procedure',
    rating: 4.9,
    featured: false,
  },
];

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Products
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products
              .filter((p) => p.featured)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-gradient-to-br from-[#0ABAB5]/5 to-white rounded-3xl p-8 md:p-10 border border-[#0ABAB5]/10 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {product.tag && (
                      <span className="px-3 py-1 bg-[#0ABAB5] text-white text-xs font-medium rounded-full">
                        {product.tag}
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#0ABAB5] text-[#0ABAB5]" />
                      <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-[#0ABAB5] font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                  <div className="flex items-center gap-4">
                    <Link href={`/products/${product.id}`}>
                      <Button className="bg-[#0ABAB5] hover:bg-[#08A5A1] text-white px-6 rounded-full">
                        Product
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-white px-6 rounded-full">
                        Inquire Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-24 serum-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Product Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0ABAB5]/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] serum-texture flex items-center justify-center relative">
                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0ABAB5]">
                      {product.tag}
                    </span>
                  )}
                  <div className="w-20 h-28 mx-auto rounded-xl bg-gradient-to-b from-[#0ABAB5]/20 to-[#0ABAB5]/5 border border-[#0ABAB5]/20 flex items-center justify-center">
                    <span className="text-[#0ABAB5]/50 font-bold text-2xl">{index + 1}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-[#0ABAB5] text-[#0ABAB5]" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0ABAB5] transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#0ABAB5] font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" className="w-full border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-white rounded-full">
                      Product
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
