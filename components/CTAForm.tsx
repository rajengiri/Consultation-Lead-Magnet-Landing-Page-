"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";
import { flodeskFormConfig, type LeadData } from "@/lib/submitLead";

type FieldName = keyof LeadData;
type Errors = Partial<Record<FieldName, string>>;

const initialValues: LeadData = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
  company: "",
};

const fields: Array<{
  name: Exclude<FieldName, "message" | "company">;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "url" | "text";
  required?: boolean;
  flodeskName: string;
  flodeskTab: string;
}> = [
  { name: "fullName", label: "Full Name", placeholder: "Your full name", autoComplete: "name", required: true, flodeskName: flodeskFormConfig.fieldNames.fullName, flodeskTab: "firstName::email" },
  { name: "email", label: "Active Email", placeholder: "you@example.com", type: "email", autoComplete: "email", inputMode: "email", required: true, flodeskName: flodeskFormConfig.fieldNames.email, flodeskTab: "email:firstName:fields.whatsappNumber" },
  { name: "whatsapp", label: "WhatsApp Number", placeholder: "+977 98XXXXXXXX", autoComplete: "tel", inputMode: "tel", required: true, flodeskName: flodeskFormConfig.fieldNames.whatsapp, flodeskTab: "fields.whatsappNumber:email:fields.companyBusinessName" },
  { name: "businessName", label: "Business Name", placeholder: "Your business name", autoComplete: "organization", required: true, flodeskName: flodeskFormConfig.fieldNames.businessName, flodeskTab: "fields.companyBusinessName:fields.whatsappNumber:fields.websiteOrFacebookUrl" },
  { name: "website", label: "Website or Facebook URL", placeholder: "yourwebsite.com or facebook.com/yourpage", inputMode: "url", flodeskName: flodeskFormConfig.fieldNames.website, flodeskTab: "fields.websiteOrFacebookUrl:fields.companyBusinessName:fields.anythingYouWantToSay" },
];

type FlodeskFunction = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

declare global {
  interface Window {
    FlodeskObject?: string;
    fd?: FlodeskFunction;
  }
}

function initializeFlodeskForm() {
  const rootSelector = `.${flodeskFormConfig.rootClass}`;
  const root = document.querySelector<HTMLElement>(rootSelector);
  if (!root || root.dataset.flodeskBound === "true") return;

  window.FlodeskObject = "fd";
  if (!window.fd) {
    const queue: FlodeskFunction = (...args: unknown[]) => {
      queue.q = queue.q ?? [];
      queue.q.push(args);
    };
    window.fd = queue;
  }

  const firstScript = document.getElementsByTagName("script")[0];
  const cacheVersion = `?v=${Math.floor(Date.now() / 120000) * 60}`;

  if (!document.getElementById("flodesk-universal-module")) {
    const moduleScript = document.createElement("script");
    moduleScript.id = "flodesk-universal-module";
    moduleScript.async = true;
    moduleScript.type = "module";
    moduleScript.src = `https://assets.flodesk.com/universal.mjs${cacheVersion}`;
    firstScript.parentNode?.insertBefore(moduleScript, firstScript);
  }

  if (!document.getElementById("flodesk-universal-legacy")) {
    const legacyScript = document.createElement("script");
    legacyScript.id = "flodesk-universal-legacy";
    legacyScript.async = true;
    legacyScript.noModule = true;
    legacyScript.src = `https://assets.flodesk.com/universal.js${cacheVersion}`;
    firstScript.parentNode?.insertBefore(legacyScript, firstScript);
  }

  window.fd("form:handle", {
    formId: flodeskFormConfig.id,
    rootEl: rootSelector,
  });
  root.dataset.flodeskBound = "true";
}

function validateField(name: FieldName, value: string): string {
  const trimmed = value.trim();

  if (["fullName", "email", "whatsapp", "businessName"].includes(name) && !trimmed) {
    return "This field is required.";
  }
  if (name === "email" && trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Enter a valid email address.";
  }
  if (name === "whatsapp" && trimmed) {
    if (!/^\+?[\d\s()-]+$/.test(trimmed)) return "Use digits only. You may include + at the start.";
    if ((trimmed.match(/\d/g) ?? []).length < 7) return "Enter at least 7 digits.";
  }
  if (name === "website" && trimmed) {
    try {
      const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
      const url = new URL(candidate);
      if (!url.hostname.includes(".")) return "Enter a valid website or Facebook URL.";
    } catch {
      return "Enter a valid website or Facebook URL.";
    }
  }
  return "";
}

export default function CTAForm() {
  const [values, setValues] = useState<LeadData>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const refs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  useEffect(() => {
    initializeFlodeskForm();
  }, []);

  const updateField = (name: FieldName, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleBlur = (name: FieldName) => {
    const error = validateField(name, values[name]);
    setErrors((current) => ({ ...current, [name]: error }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const nextErrors: Errors = {};
    const names: FieldName[] = ["fullName", "email", "whatsapp", "businessName", "website", "message"];

    names.forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) nextErrors[name] = error;
    });

    setErrors(nextErrors);
    const firstInvalid = names.find((name) => nextErrors[name]);
    if (firstInvalid) {
      event.preventDefault();
      refs.current[firstInvalid]?.focus();
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <section id="form" className="section-space scroll-mt-4 bg-slate-50" aria-labelledby="form-heading">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-line bg-white p-5 shadow-soft sm:p-9 lg:p-12">
          <div className="flex flex-wrap justify-center gap-2">
            {siteConfig.copy.form.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-bold text-primary sm:text-sm">
                {badge}
              </span>
            ))}
          </div>
          <h2 id="form-heading" className="section-heading mt-5">
            {siteConfig.copy.form.heading}
          </h2>
          <p className="mt-3 text-center leading-7 text-body">{siteConfig.copy.form.subtext}</p>

          <div
            className={flodeskFormConfig.rootClass}
            data-ff-el="root"
            data-ff-version="3"
            data-ff-type="inline"
            data-ff-name="inlineNoImage"
            data-ff-stage="default"
          >
            <div
              data-ff-el="config"
              data-ff-config={flodeskFormConfig.encodedConfig}
              className="hidden"
            />
            <form
              className={`${flodeskFormConfig.rootClass}__form mt-8`}
              action={flodeskFormConfig.action}
              method="post"
              data-ff-el="form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="fd-form-content" data-ff-el="content">
                <div className="grid gap-5 sm:grid-cols-2" data-ff-el="fields">
              {fields.map((field) => {
                const error = errors[field.name];
                const isWide = field.name === "website";
                return (
                  <div key={field.name} className={isWide ? "sm:col-span-2" : undefined}>
                    <label htmlFor={field.name} className="mb-2 block text-sm font-bold text-ink">
                      {field.label}{field.required ? <span className="text-danger"> *</span> : null}
                    </label>
                    <input
                      ref={(element) => { refs.current[field.name] = element; }}
                      id={field.name}
                      name={field.flodeskName}
                      type={field.type ?? "text"}
                      maxLength={255}
                      inputMode={field.inputMode}
                      autoComplete={field.autoComplete}
                      data-ff-tab={field.flodeskTab}
                      value={values[field.name]}
                      onChange={(event) => updateField(field.name, event.target.value)}
                      onBlur={() => handleBlur(field.name)}
                      placeholder={field.placeholder}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field.name}-error` : undefined}
                      className={`field-input ${error ? "border-danger focus:border-danger focus:ring-red-100" : ""}`}
                    />
                    {error ? <p id={`${field.name}-error`} className="mt-1.5 text-sm font-semibold text-danger">{error}</p> : null}
                  </div>
                );
              })}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
                  Anything You Want to Say
                </label>
                <textarea
                  ref={(element) => { refs.current.message = element; }}
                  id="message"
                  name={flodeskFormConfig.fieldNames.message}
                  rows={4}
                  maxLength={255}
                  data-ff-tab="fields.anythingYouWantToSay:fields.websiteOrFacebookUrl:submit"
                  value={values.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Tell us anything that will help us understand your business."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`field-input resize-y ${errors.message ? "border-danger focus:border-danger focus:ring-red-100" : ""}`}
                />
                {errors.message ? <p id="message-error" className="mt-1.5 text-sm font-semibold text-danger" role="alert">{errors.message}</p> : null}
              </div>
                </div>

            <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name={flodeskFormConfig.fieldNames.honeypot}
                type="text"
                maxLength={255}
                tabIndex={-1}
                autoComplete="off"
                value={values.company}
                onChange={(event) => updateField("company", event.target.value)}
              />
            </div>

                <div data-ff-el="footer">
                  <button
                    type="submit"
                    className="primary-cta mt-7 w-full"
                    data-ff-el="submit"
                    data-ff-tab="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Booking..." : siteConfig.copy.cta}
                  </button>
                </div>
                <p className="mt-3 text-center text-sm font-medium text-body">{siteConfig.copy.form.trust}</p>
              </div>
              <div className="hidden" data-ff-el="success" aria-live="polite" />
              <div className="mt-3 text-center text-sm font-semibold text-danger" data-ff-el="error" role="alert" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
