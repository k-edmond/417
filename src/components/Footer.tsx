'use client';

import Link from 'next/link';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { name: 'YouTube', href: 'https://www.youtube.com/@elegennglobal', icon: Youtube },
  { name: 'TikTok', href: 'https://www.tiktok.com/@elegennglobal', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/elegennglobal/', icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/elegennglobal', icon: Facebook },
];

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-[#0ABAB5] via-[#08A5A1] to-[#06908F] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left Side - Company Info (Vertical) */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3">ELEGENN GLOBAL CO.,LTD</h3>
            <div className="space-y-2 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span>1508, 1-dong, 65, Digital-ro 9-gil, Geumcheon-gu, Seoul, Republic of Korea</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span>+82(0)70-7895-8177</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 flex-shrink-0" />
                <span>elegenn@naver.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex flex-col items-start md:items-end justify-center">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#0ABAB5] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-4 pt-3">
          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} ELEGENN GLOBAL CO.,LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
