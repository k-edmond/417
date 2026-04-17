import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Droplets, Sparkles, Sun, Leaf, Scale, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const products: Record<string, { 
  name: string; 
  subtitle: string;
  description: string;
  tag: string;
  icon: React.ElementType;
  features: string[];
  mechanism: string;
  target: string[];
  ingredients: string[];
  usage: string[];
}> = {
  '1': {
    name: 'ELEGENN PDRN Revital Booster',
    subtitle: 'High-concentration PDRN formula designed to support skin regeneration and recovery.',
    description: 'Powerful regenerative energy that turns back time for your skin',
    tag: 'Main / Bestseller',
    icon: Sparkles,
    features: [
      'High-concentration PDRN for intensive damaged skin care',
      'Fast absorption with deep nutrient delivery',
      'Suitable for professional and daily use',
    ],
    mechanism: 'A targeted formulation that activates your skin\'s innate power, going beyond surface care.',
    target: [
      'Those who need quick soothing and recovery after dermatological procedures like laser',
      'Those with compromised skin barrier prone to redness and sensitivity',
    ],
    ingredients: ['PDRN (Polydeoxyribonucleotide)', 'Sodium DNA', 'Centella Asiatica Extract', 'Panthenol'],
    usage: ['Apply 2-3 drops of serum or ampoule onto fingertips', 'Gently pat onto entire face', 'Tap lightly to ensure absorption'],
  },
  '2': {
    name: 'ELEGENN Hydra 10 Peptide Booster',
    subtitle: 'Advanced moisture and elasticity solution powered by Peptide complex and HA.',
    description: 'Next-level deep hydration and elasticity in a new dimension',
    tag: 'Hydration',
    icon: Droplets,
    features: [
      'Cross-formulation of high/low molecular hyaluronic acid for internal and external hydration',
      'Instant hydration and elasticity improvement from peptide complex',
    ],
    mechanism: 'A high-density moisturizing system that delivers moisture deep into the skin, caring for both surface and deep layers simultaneously.',
    target: [
      'Those with severe internal dryness and rough texture',
      'Those concerned about enlarged pores and fine lines due to loss of elasticity',
    ],
    ingredients: ['Hyaluronic Acid (High/Low Molecular)', 'Peptide Complex', 'Centella Asiatica Water', 'Beta-Glucan'],
    usage: ['Take an appropriate amount of ampoule after toner', 'Gently massage in the direction of skin texture', 'Wait for absorption before proceeding to next step'],
  },
  '3': {
    name: 'ELEGENN Radiance Booster',
    subtitle: 'Radiance-enhancing solution for hydrated, luminous, and even-toned skin.',
    description: 'Reveal your skin\'s natural radiance in a whole new dimension',
    tag: 'Brightening',
    icon: Sun,
    features: [
      'Simultaneously moisturize and clarify skin tone for a clear, even complexion',
      'Impart natural radiance and vitality to dull skin',
    ],
    mechanism: 'A brightening solution that clarifies and evens skin tone while providing natural radiance and vitality.',
    target: [
      'Those with dull, lifeless and uneven skin tone',
      'Those who want to moisturize while achieving a clear, glowing complexion',
    ],
    ingredients: ['Niacinamide', 'Ascorbic Acid Glucoside', 'Alpha Arbutin', 'Licorice Root Extract'],
    usage: ['Apply morning and evening after toner', 'Always use with sunscreen', 'Apply to skin and wait for full absorption'],
  },
  '4': {
    name: 'ELEGENN Scalp Revital Booster',
    subtitle: 'Intensive scalp care solution for a healthy foundation.',
    description: 'Fundamental improvement of scalp environment for healthy hair',
    tag: 'Scalp Care',
    icon: Leaf,
    features: [
      'Heat soothing and sebum balance normalization',
      'Improved hair root support through scalp barrier strengthening',
    ],
    mechanism: 'An intensive scalp care solution that strengthens the scalp barrier and enhances hair root support for a healthy hair environment.',
    target: [
      'Scalp that has become red and sensitive due to stress and heat',
      'Those who want to address the root cause of limp, thinning hair',
    ],
    ingredients: ['Salicylic Acid', 'Tea Tree Leaf Extract', 'Centella Asiatica', 'Panthenol (Pro-Vitamin B5)'],
    usage: ['Apply to damp scalp after shampooing', 'Distribute evenly across entire scalp', 'Slowly massage scalp to promote absorption'],
  },
  '5': {
    name: 'ELEGENN Meso Sculpt Booster',
    subtitle: 'Advanced contouring solution for refined face & body silhouette.',
    description: 'Refined body line care for a balanced silhouette',
    tag: 'Contouring',
    icon: Scale,
    features: [
      'Smooth body line care through skin elasticity enhancement',
      'More defined face and body contours through intensive care',
    ],
    mechanism: 'A meso sculpt solution that completes smooth body lines by caring for skin elasticity.',
    target: [
      'Those who want to manage face and body lines simultaneously',
      'Those concerned about blurred contours due to loss of elasticity',
    ],
    ingredients: ['Adenosine', 'L-Carnitine', 'Caffeine', 'Peptide Complex'],
    usage: ['Apply before cream or lotion', 'Focus application on areas where you want to create contours', 'Use lymphatic massage or massage tools'],
  },
  '6': {
    name: 'ELEGENN Post Procedure Ampoule',
    subtitle: 'Soothing and barrier care solution for sensitive, post-treatment skin.',
    description: 'Intensive soothing care for sensitized skin',
    tag: 'Post-Procedure',
    icon: Shield,
    features: [
      'Gently soothe skin sensitized by external stimuli',
      'Help strengthen skin barrier and maintain moisture balance',
    ],
    mechanism: 'Intensive care that soothes post-procedure sensitized skin and strengthens the barrier to restore healthy skin.',
    target: [
      'Those who want gentle care for sensitized skin after procedures',
      'Those with reduced skin condition due to redness and dryness',
    ],
    ingredients: ['Centella Asiatica Extract', 'Madecassoside', 'Panthenol', 'Allantoin'],
    usage: ['Apply immediately after procedure', 'Apply thinly after skin has calmed', 'Focus care on irritated areas'],
  },
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products[id];
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.subtitle,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16" style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-gray-500 hover:text-[#0ABAB5] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl serum-texture flex items-center justify-center">
                <div className="w-40 h-52 rounded-2xl bg-gradient-to-b from-[#0ABAB5]/20 to-[#0ABAB5]/5 border border-[#0ABAB5]/20 flex items-center justify-center">
                  <product.icon className="h-16 w-16 text-[#0ABAB5]/60" />
                </div>
              </div>
              {product.tag && (
                <span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#0ABAB5] shadow-sm">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-[#0ABAB5] font-medium mb-4">{product.description}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.subtitle}
              </p>
              <Link href="/contact">
                <Button className="bg-[#0ABAB5] hover:bg-[#08A5A1] text-white px-8 py-6 text-base rounded-full">
                  Inquire Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Key Features */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0ABAB5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
                <p className="text-gray-600 leading-relaxed">{product.mechanism}</p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
                <ul className="space-y-3">
                  {product.target.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-[#0ABAB5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Ingredients */}
              <div className="bg-gradient-to-br from-[#0ABAB5]/5 to-white rounded-2xl p-6 border border-[#0ABAB5]/10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Ingredients</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <Sparkles className="h-3 w-3 text-[#0ABAB5]" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage */}
              <div className="bg-gradient-to-br from-[#0ABAB5]/5 to-white rounded-2xl p-6 border border-[#0ABAB5]/10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">How To Use</h3>
                <ol className="space-y-3">
                  {product.usage.map((step, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#0ABAB5] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 tiffany-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-white/90 mb-8">
            Contact us for wholesale inquiries, partnership opportunities, or product samples.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#0ABAB5] hover:bg-white/90 px-10 py-6 text-base rounded-full">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
