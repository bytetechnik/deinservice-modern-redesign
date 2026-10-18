import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useT } from "@/lib/i18n";
import { img, ogImage } from "@/lib/images";
import { services } from "@/lib/services";
import { PageHero, Reveal, CTA } from "@/components/site";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – Dein Service GmbH" },
      { name: "description", content: "Planung, Netzrealisierung, Field Service, Kundenaktivierungen, Projekt- und Interims-Management." },
      { property: "og:title", content: "Leistungen – Dein Service GmbH" },
      { property: "og:description", content: "Alle Leistungen rund um Telekommunikations- und Glasfasernetze." },
      { property: "og:image", content: ogImage("construction") },
      { name: "twitter:image", content: ogImage("construction") },
    ],
  }),
  component: Page,
});

function Page() {
  const t = useT();
  return (
    <>
      <PageHero image={img.construction} eyebrow={t({ de: "Leistungen", en: "Services" })}
        title={t({ de: "Von der Planung bis zum Betrieb.", en: "From planning to operations." })}
        text={t({ de: "Wir entlasten Sie in Ihrem Kerngeschäft – in Teilbereichen oder als komplettes Turnkey-Projekt.", en: "We relieve you in your core business – in individual areas or as a complete turnkey project." })} />
      <section className="mx-auto max-w-7xl space-y-28 px-6 py-28">
        {services.map((s, i) => (
          <div key={s.title.de} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <Reveal className="overflow-hidden rounded-[2rem] shadow-soft">
              <img src={s.image} alt={t(s.title)} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </Reveal>
            <Reveal delay={150}>
              <span className="font-display text-6xl font-bold text-gradient">0{i + 1}</span>
              <h2 className="mt-2 text-4xl font-bold">{t(s.title)}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{t(s.text)}</p>
              <ul className="mt-6 space-y-3">
                {t(s.points).map((p) => (
                  <li key={p} className="flex items-center gap-3 font-semibold">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground"><Check size={14} /></span>{p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
