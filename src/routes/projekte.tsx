import { MapPin } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useSeo } from "@/lib/seo";
import { img, ogImage } from "@/lib/images";
import { PageHero, Reveal, CTA } from "@/components/site";

export default function Page() {
  useSeo("Projekte & News – Dein Service GmbH", [
    { name: "description", content: "FTTH-Ausbau und Betrieb für die Westconnect GmbH, neue Niederlassung in Heusenstamm und weitere Projekte." },
    { property: "og:title", content: "Projekte & News – Dein Service GmbH" },
    { property: "og:description", content: "Unsere aktuellen Projekte im Glasfaserausbau." },
    { property: "og:image", content: ogImage("fiber") },
    { name: "twitter:image", content: ogImage("fiber") },
  ]);
  const t = useT();
  const projects = [
    { image: img.fiber, tag: "FTTH · 2026", place: "Rodgau · Seligenstadt · Hainburg",
      title: { de: "Betrieb der Westconnect-Ausbaugebiete", en: "Operating Westconnect expansion areas" },
      text: { de: "Ab dem 1. Januar 2026 übernehmen wir den Betrieb der Ausbaugebiete Rodgau, Seligenstadt und Hainburg für die Westconnect GmbH.", en: "From January 1, 2026 we take over operations of the Rodgau, Seligenstadt and Hainburg expansion areas for Westconnect GmbH." } },
    { image: img.building, tag: "News · 09/2025", place: "Heusenstamm",
      title: { de: "Neue Niederlassung in Heusenstamm", en: "New branch office in Heusenstamm" },
      text: { de: "Gemeinsam mit unserer Partnerfirma Deutsche Infrabau GmbH haben wir neue Büroräume bezogen – Anlaufstelle für Glasfaser-Hausanschlüsse in Heusenstamm und Obertshausen.", en: "Together with our partner Deutsche Infrabau GmbH we moved into new offices – the contact point for fiber house connections in Heusenstamm and Obertshausen." } },
    { image: img.electric, tag: "FTTH", place: "Heusenstamm · Obertshausen",
      title: { de: "FTTH-Ausbau Westconnect", en: "FTTH rollout Westconnect" },
      text: { de: "Ausbau und Hausanschlüsse im Glasfasernetz – von der Planung bis zur Aktivierung beim Endkunden.", en: "Rollout and house connections in the fiber network – from planning to activation at the end customer." } },
    { image: img.server, tag: "App", place: "NikoFlow Field",
      title: { de: "Digitale Field-Workflows", en: "Digital field workflows" },
      text: { de: "Mit der App NikoFlow Field halten wir unsere Teams und Partner in Echtzeit synchronisiert.", en: "With the NikoFlow Field app we keep our teams and partners synchronised in real time." } },
  ];
  return (
    <>
      <PageHero image={img.fiber} eyebrow={t({ de: "Projekte & News", en: "Projects & News" })}
        title={t({ de: "Glasfaser, die ankommt.", en: "Fiber that delivers." })}
        text={t({ de: "Ein Einblick in aktuelle Projekte und Neuigkeiten.", en: "A look at current projects and news." })} />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-28 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={i} delay={(i % 2) * 150} className="group overflow-hidden rounded-[2rem] border border-border bg-card transition-all hover:-translate-y-2 hover:shadow-soft">
            <div className="overflow-hidden"><img src={p.image} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-accent px-3 py-1 font-bold text-accent-foreground">{p.tag}</span>
                <span className="flex items-center gap-1 text-muted-foreground"><MapPin size={14} />{p.place}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold">{t(p.title)}</h2>
              <p className="mt-3 text-muted-foreground">{t(p.text)}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <CTA />
    </>
  );
}
