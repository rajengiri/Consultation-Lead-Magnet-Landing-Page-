import { siteConfig } from "@/lib/config";

export default function Hero() {
  const { hero } = siteConfig.copy;

  return (
    <section className="hero-surface overflow-hidden border-b border-line py-12 sm:py-16 lg:py-20">
      <div className="page-shell animate-fade-up text-center">
        <h1 className="mx-auto max-w-5xl text-balance text-[clamp(2.4rem,8vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-ink">
          {hero.heading}
        </h1>
        <h2 className="mx-auto mt-5 max-w-4xl text-balance text-[clamp(1.65rem,5.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink">
          {hero.subheadingBefore}{" "}
          <span className="relative isolate inline-block text-primary">
            <span className="relative z-10">{hero.subheadingHighlight}</span>
            <span className="absolute inset-x-[5%] -bottom-1 z-0 h-2 rounded-full bg-accent sm:h-3" aria-hidden="true" />
          </span>{" "}
          {hero.subheadingAfter}
        </h2>
        <div className="mx-auto mt-7 max-w-2xl space-y-1 text-sm leading-6 text-body sm:text-base sm:leading-7">
          {hero.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <a href="#form" className="primary-cta mt-8 w-full sm:w-auto">
          {siteConfig.copy.cta}
        </a>
      </div>
    </section>
  );
}
