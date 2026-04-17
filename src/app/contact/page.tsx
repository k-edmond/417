'use client';

import { useState } from 'react';
import { Mail, Send, MessageCircle, User, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f8fbfc 0%, #ffffff 50%, #f0f7fa 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-8">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-left">
          <p className="text-[#0ABAB5] font-semibold tracking-[0.2em] text-lg mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            Contact Us
          </p>
          <p className="text-base text-gray-500 max-w-xl">
            Please feel free to contact us anytime if you have questions about ELEGENN GLOBAL's products and partnerships.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-12">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Form Only */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Send Us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm">We typically respond within 24 hours.</p>

            {submitted ? (
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
                <MessageCircle className="h-16 w-16 text-[#0ABAB5] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.form.success.title')}</h3>
                <p className="text-gray-600">{t('contact.form.success.desc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-12 h-14 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] bg-white/80"
                    />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      name="company"
                      placeholder={t('contact.form.company')}
                      value={formData.company}
                      onChange={handleChange}
                      className="pl-12 h-14 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] bg-white/80"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-12 h-14 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] bg-white/80"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <Textarea
                      name="message"
                      placeholder={t('contact.form.message')}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="pl-12 rounded-xl border-gray-200 focus:border-[#0ABAB5] focus:ring-[#0ABAB5] resize-none bg-white/80"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0ABAB5] hover:bg-[#08A5A1] text-white h-14 rounded-xl text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('contact.form.sending')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Submit
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
