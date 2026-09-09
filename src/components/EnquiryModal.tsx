'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function EnquiryModal() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    interest: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number (e.g. +91 99 98 906 506)';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    // Interest / Requirement is optional
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Prevent duplicate submissions caused by double-clicking
    if (isSubmitting) return;

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          interest: form.interest.trim(),
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        // Clear/reset the form only after successful submission
        setForm({
          name: '',
          phone: '',
          email: '',
          interest: '',
        });
        setErrors({});
        setSubmitted(true);
      } else {
        throw new Error(
          data?.error ||
            'Unable to submit enquiry at this time. Please try again or contact our private sales desk directly.'
        );
      }
    } catch (err: unknown) {
      console.error('Enquiry submission error:', err);
      // Keep entered data, restore CTA, and show error message
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Unable to submit enquiry. Please check your connection and try again.';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="enquire" data-section="enquiry" className="section-padding bg-surface">
        <div className="content-narrow text-center">
          <div className="rule-accent mx-auto mb-8" />
          <h2 className="heading-editorial text-3xl md:text-4xl mb-4">Thank You</h2>
          <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
            Thank you. Our private sales desk will be in touch shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-block mt-8 text-xs font-medium tracking-[0.15em] uppercase text-accent hover:text-accent-dark transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="enquire" data-section="enquiry" className="section-padding bg-surface">
      <div className="content-narrow">
        <div className="text-center mb-12">
          <span className="text-metadata">Private Consultation</span>
          <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl mt-4 mb-4">
            Begin Your Journey
          </h2>
          <p className="text-muted text-sm max-w-md mx-auto">
            Connect with our private sales desk for an exclusive consultation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6" noValidate>
          {submitError && (
            <div className="p-3 bg-red-950/20 border border-red-500/30 text-red-300 text-xs text-center">
              {submitError}
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="enquiry-name" className="text-metadata block mb-2">
              Full Name *
            </label>
            <input
              id="enquiry-name"
              type="text"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors"
              placeholder="Your name"
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="enquiry-phone" className="text-metadata block mb-2">
              Phone Number *
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors"
              placeholder="+91 99 98 906 506"
              disabled={isSubmitting}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="enquiry-email" className="text-metadata block mb-2">
              Email Address *
            </label>
            <input
              id="enquiry-email"
              type="email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors"
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Interest */}
          <div>
            <label htmlFor="enquiry-interest" className="text-metadata block mb-2">
              Interest / Requirement
            </label>
            <textarea
              id="enquiry-interest"
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              rows={3}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your requirements"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-white text-xs font-medium tracking-[0.2em] uppercase py-4 hover:bg-accent-dark transition-all duration-300 mt-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              'Request a Callback'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
