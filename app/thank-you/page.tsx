import type { Metadata } from "next";
import Header from "@/components/Header";
import VimeoEmbed from "@/components/VimeoEmbed";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Thank You | Digital Rajen",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-100px)] bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="page-shell">
          <section className="mx-auto max-w-3xl rounded-[2rem] border border-line bg-white px-5 py-10 text-center shadow-soft sm:px-10 sm:py-14">
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-green-50 text-3xl font-extrabold text-success" aria-hidden="true">
              ✓
            </div>
            <h1 className="text-balance text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink">
              Congratulations! Your request has been received.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-body sm:text-lg">
              Thank you for booking your free 30 Minutes AI marketing consultation.
            </p>

            <div className="mt-8 border-t border-line pt-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Watch this short video
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-body">
                It explains what happens next and how to get ready for your consultation.
              </p>
            </div>

            <div className="mt-6">
              <VimeoEmbed />
            </div>

            <div className="mt-7">
              <WhatsAppButton />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
