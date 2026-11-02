import { siteConfig } from "@/lib/config";

export default function Problem() {
  return (
    <section className="section-space bg-white" aria-labelledby="problem-heading">
      <div className="page-shell">
        <h2 id="problem-heading" className="section-heading">
          {siteConfig.copy.problem.heading}
        </h2>
        <ul className="mx-auto mt-9 grid max-w-4xl gap-3 sm:grid-cols-2">
          {siteConfig.problemLines.map((line) => (
            <li key={line} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
              <span className="mt-2 size-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span className="font-semibold leading-7 text-ink">{line}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-lg font-extrabold text-ink">{siteConfig.copy.problem.closing}</p>
      </div>
    </section>
  );
}
