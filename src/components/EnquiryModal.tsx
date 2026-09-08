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
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Ready for API connection
      console.log('Enquiry submitted:', form);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="enquire" data-section="enquiry" className="section-padding bg-surface">
        <div className="content-narrow text-center">
          <div className="rule-accent mx-auto mb-8" />
          <h2 className="heading-editorial text-3xl md:text-4xl mb-4">Thank You</h2>
          <p className="text-muted text-sm">Our private sales desk will reach out to you shortly.</p>
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

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          {/* Name */}
          <div>
            <label className="text-metadata block mb-2">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors"
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-metadata block mb-2">Phone Number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors"
              placeholder="+91 99 98 906 506"
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-metadata block mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Interest */}
          <div>
            <label className="text-metadata block mb-2">Interest / Requirement</label>
            <textarea
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              rows={3}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-foreground placeholder:text-light focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your requirements"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-accent text-white text-xs font-medium tracking-[0.2em] uppercase py-4 hover:bg-accent-dark transition-colors duration-300 mt-4"
          >
            Request a Callback
          </button>
        </form>
      </div>
    </section>
  );
}
