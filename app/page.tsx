import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Process />
        {siteConfig.showUrgency && siteConfig.urgencyText ? (
          <section className="bg-primary-soft py-6" aria-label="Important information">
            <p className="page-shell text-center font-bold text-ink">{siteConfig.urgencyText}</p>
          </section>
        ) : null}
        <CTAForm />
      </main>
    </>
  );
}
