'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-500" />
      <button
        onClick={() => setLang('en')}
        className={`text-sm font-medium transition-colors ${
          lang === 'en' ? 'text-[#0ABAB5]' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLang('kr')}
        className={`text-sm font-medium transition-colors ${
          lang === 'kr' ? 'text-[#0ABAB5]' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        KR
      </button>
    </div>
  );
}
