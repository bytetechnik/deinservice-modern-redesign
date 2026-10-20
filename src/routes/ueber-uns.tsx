import { useT } from "@/lib/i18n";
import { useSeo } from "@/lib/seo";
import { img, ogImage, srcSet } from "@/lib/images";
import { PageHero, Reveal, CTA } from "@/components/site";

export default function Page() {
  useSeo("Über uns – Dein Service GmbH", [
    { name: "description", content: "Deutsche Infrastruktur und Service GmbH – Erfahrung, Zuverlässigkeit und Nähe zum Auftraggeber aus Frankfurt am Main." },
    { property: "og:title", content: "Über uns – Dein Service GmbH" },
    { property: "og:description", content: "Wer wir sind und wofür wir stehen." },
    { property: "og:image", content: ogImage("office") },
    { name: "twitter:image", content: ogImage("office") },
  ]);
  const t = useT();
  const values = [
    { de: "Erfahrung", en: "Experience" },
    { de: "Zuverlässigkeit", en: "Reliability" },
    { de: "Effizienz", en: "Efficiency" },
    { de: "Nähe", en: "Proximity" },
  ];
  return (
    <>
      <PageHero image={img.office} eyebrow={t({ de: "Über uns", en: "About us" })}
        title={t({ de: "Im Herzen Europas. Bundesweit im Einsatz.", en: "In the heart of Europe. Active nationwide." })}
        text={t({ de: "Deutsche Infrastruktur und Service GmbH – Ihr Partner für Telekommunikation, Energie- und IT-Infrastrukturen.", en: "Deutsche Infrastruktur und Service GmbH – your partner for telecom, energy and IT infrastructure." })} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-bold md:text-5xl">{t({ de: "Wer wir sind", en: "Who we are" })}</h2>
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-lg text-muted-foreground">
          <p>{t({ de: "Unser Standort in Frankfurt am Main, in der Mitte Deutschlands, ermöglicht es uns, bundesweit zu agieren. Wir treiben technologische Innovationen voran, bieten maßgeschneiderte Outsourcing-Lösungen und optimieren Organisationsstrukturen von innen heraus.", en: "Our location in Frankfurt am Main, in the centre of Germany, allows us to operate nationwide. We drive technological innovation, offer tailored outsourcing solutions and optimise organisations from within." })}</p>
          <p>{t({ de: "Wir heben uns durch Erfahrung, Zuverlässigkeit, Effizienz und Nähe zum Auftraggeber deutlich von der Konkurrenz ab.", en: "We stand out through experience, reliability, efficiency and proximity to our clients." })}</p>
        </Reveal>
      </section>
      <section className="bg-ink py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.de} delay={i * 100} className="rounded-[2rem] border border-ink-foreground/10 p-8 transition-colors hover:border-accent">
              <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
              <p className="mt-6 font-display text-2xl font-bold text-ink-foreground">{t(v)}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-28 md:grid-cols-3">
        {[img.team, img.meeting, img.building].map((src, i) => (
          <Reveal key={src} delay={i * 120} className={`overflow-hidden rounded-[2rem] ${i === 1 ? "md:translate-y-12" : ""}`}>
            <img src={src} srcSet={srcSet(src, [480, 640, 800, 1000])} sizes="(min-width:768px) 33vw, 90vw" alt="" loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-110" />
          </Reveal>
        ))}
      </section>
      <CTA />
    </>
  );
}
