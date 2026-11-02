import { siteConfig } from "@/lib/config";

const message = "Hi, I just submitted the form for the Free 30 Minutes AI Marketing Consultation. I'd like to confirm the next steps.";

export default function WhatsAppButton() {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-extrabold text-ink transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 sm:w-auto"
    >
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
        <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2.05 22l5.2-1.52A9.96 9.96 0 1 0 12.04 2Zm0 17.99a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.9.92-3-.2-.31a8.12 8.12 0 1 1 6.79 3.72Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.07a6.63 6.63 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.68c-.14-.25-.01-.38.11-.5.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.46c-.16 0-.42.06-.65.3-.22.25-.85.84-.85 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.18 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      Connect With Me on WhatsApp
    </a>
  );
}
