import { siteConfig } from "@/lib/config";

export default function Process() {
  return (
    <section className="section-space bg-white" aria-labelledby="process-heading">
      <div className="page-shell">
        <h2 id="process-heading" className="section-heading">
          {siteConfig.copy.processHeading}
        </h2>
        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteConfig.processSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent text-sm font-black text-ink" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 leading-7 text-body">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
