import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { img, ogImage } from "@/lib/images";
import { PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere – Dein Service GmbH" },
      { name: "description", content: "Mitarbeit & Karriere bei Dein Service: Jobs in Glasfaser, Netzbau, Field Service und Projektmanagement." },
      { property: "og:title", content: "Karriere – Dein Service GmbH" },
      { property: "og:description", content: "Werden Sie Teil unseres Teams." },
      { property: "og:image", content: ogImage("team") },
      { name: "twitter:image", content: ogImage("team") },
    ],
  }),
  component: Page,
});

function Page() {
  const t = useT();
  const roles = [
    { de: "Bauleiter (m/w/d) Glasfaser", en: "Site Manager (m/f/d) Fiber" },
    { de: "Servicetechniker (m/w/d) FTTH", en: "Service Technician (m/f/d) FTTH" },
    { de: "Netzplaner (m/w/d) NE3/NE4", en: "Network Planner (m/f/d) NE3/NE4" },
    { de: "Projektmanager (m/w/d) Telekommunikation", en: "Project Manager (m/f/d) Telecom" },
  ];
  return (
    <>
      <PageHero image={img.team} eyebrow={t({ de: "Mitarbeit & Karriere", en: "Work & Careers" })}
        title={t({ de: "Bauen Sie mit uns die Netze von morgen.", en: "Build tomorrow's networks with us." })}
        text={t({ de: "Wir suchen Talente und Partner, die mit uns wachsen wollen – mit Training on the Job.", en: "We're looking for talents and partners who want to grow with us – with training on the job." })} />
      <section className="mx-auto max-w-5xl px-6 py-28">
        <Reveal><h2 className="mb-10 text-4xl font-bold">{t({ de: "Beispielhafte Positionen", en: "Example positions" })}</h2></Reveal>
        <div className="space-y-4">
          {roles.map((r, i) => (
            <Reveal key={r.de} delay={i * 80}>
              <a href={`mailto:info@deinservice.gmbh?subject=${encodeURIComponent(t(r))}`}
                className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-soft">
                <span className="flex items-center gap-4 text-lg font-bold"><Briefcase className="text-primary" />{t(r)}</span>
                <ArrowUpRight className="transition-transform group-hover:rotate-45" />
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 rounded-3xl bg-secondary p-8 text-center">
          <p className="text-lg">{t({ de: "Initiativbewerbung? Schreiben Sie uns an", en: "Open application? Write to us at" })} <a className="font-bold text-primary" href="mailto:info@deinservice.gmbh">info@deinservice.gmbh</a></p>
        </Reveal>
      </section>
    </>
  );
}
