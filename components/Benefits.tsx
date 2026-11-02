import { siteConfig } from "@/lib/config";

export default function Benefits() {
  return (
    <section className="section-space bg-slate-50" aria-labelledby="benefits-heading">
      <div className="page-shell">
        <h2 id="benefits-heading" className="section-heading">
          {siteConfig.copy.benefitsHeading}
        </h2>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {siteConfig.benefits.map((benefit, index) => (
            <li
              key={benefit}
              className={`rounded-2xl border border-line bg-white p-5 shadow-card ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-xl bg-green-50 text-lg font-black text-success" aria-hidden="true">
                ✓
              </span>
              <p className="font-bold leading-7 text-ink">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
