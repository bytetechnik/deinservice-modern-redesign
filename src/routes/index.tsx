import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Zap, ShieldCheck, Users, Radio } from "lucide-react";
import { useT } from "@/lib/i18n";
import { img, ogImage } from "@/lib/images";
import { services } from "@/lib/services";
import { Reveal, CTA } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dein Service GmbH – Telekom-Expertise in Frankfurt & Rhein-Main" },
      { name: "description", content: "Planung, Bau und Betrieb von Glasfaser- und Telekommunikationsnetzen. Ihr Partner aus Frankfurt am Main." },
      { property: "og:title", content: "Dein Service GmbH – Telekom-Expertise" },
      { property: "og:description", content: "Glasfaser, Netzbau, Field Service und Projektmanagement aus Frankfurt." },
      { property: "og:image", content: ogImage("network") },
      { name: "twitter:image", content: ogImage("network") },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useT();
  const stats = [
    { n: "FTTH", l: { de: "Glasfaser-Spezialisten", en: "Fiber specialists" } },
    { n: "NE2–5", l: { de: "Volle Netzebenen", en: "All network levels" } },
    { n: "24/7", l: { de: "Service-Bereitschaft", en: "Service availability" } },
    { n: "DE", l: { de: "Bundesweit aktiv", en: "Active nationwide" } },
  ];
  const perks = [
    { i: Zap, t: { de: "Schneller Service", en: "Fast service" }, d: { de: "Rund um die Uhr für Ihre Kunden – schnell und effizient.", en: "Around the clock for your customers – fast and efficient." } },
    { i: Users, t: { de: "Zuverlässige Teams", en: "Reliable teams" }, d: { de: "Eigene Teams und Partner, verbunden über digitale Workflows.", en: "Own teams and partners, connected via digital workflows." } },
    { i: ShieldCheck, t: { de: "Erfahrung & Qualität", en: "Experience & quality" }, d: { de: "Nationale und internationale Expertise in jedem Projekt.", en: "National and international expertise in every project." } },
    { i: Radio, t: { de: "Nähe zum Kunden", en: "Close to you" }, d: { de: "Im Herzen Europas – Frankfurt und Heusenstamm.", en: "In the heart of Europe – Frankfurt and Heusenstamm." } },
  ];
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
        <img src={img.network} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="bg-hero absolute inset-0" />
        <div className="animate-float absolute right-[10%] top-[25%] h-72 w-72 rounded-full bg-accent-gradient opacity-30 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
          <p className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-4 py-2 text-sm font-semibold text-ink-foreground/90">
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-accent" />
            {t({ de: "Frankfurt am Main · Rhein-Main", en: "Frankfurt am Main · Rhine-Main" })}
          </p>
          <h1 className="animate-rise max-w-5xl text-5xl font-extrabold leading-[1.02] text-ink-foreground md:text-8xl" style={{ animationDelay: "120ms" }}>
            {t({ de: "Wir verbinden ", en: "We connect " })}
            <span className="text-gradient">{t({ de: "Deutschland.", en: "Germany." })}</span>
          </h1>
          <p className="animate-rise mt-8 max-w-2xl text-lg text-ink-foreground/75 md:text-xl" style={{ animationDelay: "240ms" }}>
            {t({ de: "Erstklassiger Support für Ihre Projekte und Ihre Kunden – Planung, Bau und Betrieb von Telekommunikations-, Energie- und IT-Netzen.", en: "First-class support for your projects and customers – planning, building and operating telecom, energy and IT networks." })}
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
            <Link to="/leistungen" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-accent-foreground transition-transform hover:scale-105">
              {t({ de: "Unsere Leistungen", en: "Our services" })} <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-7 py-4 font-bold text-ink-foreground transition-colors hover:bg-ink-foreground/10">
              info@deinservice.gmbh
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="border-r border-border px-6 py-10 last:border-r-0">
              <p className="font-display text-4xl font-bold text-gradient">{s.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t(s.l)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">{t({ de: "Über uns", en: "About us" })}</p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">{t({ de: "Top Telekom-Expertise in Frankfurt und Rhein-Main", en: "Top telecom expertise in Frankfurt and Rhine-Main" })}</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t({ de: "Wir bieten umfassende Dienstleistungen in Telekommunikation, Medien und Infrastruktur – von Planung, Bau und Instandhaltung bis zu Projekt- und Interims-Management.", en: "We offer comprehensive services in telecommunications, media and infrastructure – from planning, construction and maintenance to project and interim management." })}
          </p>
          <Link to="/ueber-uns" className="group mt-8 inline-flex items-center gap-2 font-bold text-primary">
            {t({ de: "Mehr erfahren", en: "Learn more" })} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <Reveal delay={150} className="relative">
          <img src={img.engineer} alt="Engineer" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
          <div className="glass animate-float absolute -bottom-8 -left-8 rounded-3xl p-6 shadow-soft">
            <p className="font-display text-3xl font-bold text-primary">2026</p>
            <p className="text-sm text-muted-foreground">{t({ de: "Betrieb Rodgau, Seligenstadt & Hainburg", en: "Operating Rodgau, Seligenstadt & Hainburg" })}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">{t({ de: "Ihre Herausforderungen sind unsere.", en: "Your challenges are ours." })}</h2>
            <Link to="/leistungen" className="font-bold text-primary">{t({ de: "Alle Leistungen →", en: "All services →" })}</Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title.de} delay={(i % 3) * 120}>
                <Link to="/leistungen" className="group relative block h-96 overflow-hidden rounded-[2rem] bg-ink">
                  <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110" />
                  <div className="bg-hero absolute inset-0 opacity-80" />
                  <div className="relative flex h-full flex-col justify-between p-7">
                    <span className="self-end rounded-full bg-ink-foreground/15 p-3 text-ink-foreground transition-all group-hover:rotate-45 group-hover:bg-accent group-hover:text-accent-foreground"><ArrowUpRight /></span>
                    <div>
                      <span className="text-sm font-bold text-accent">0{i + 1}</span>
                      <h3 className="mt-1 text-2xl font-bold text-ink-foreground">{t(s.title)}</h3>
                      <p className="mt-2 text-sm text-ink-foreground/70">{t(s.text)}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal><h2 className="mb-14 text-center text-4xl font-bold md:text-5xl">{t({ de: "Warum mit uns arbeiten", en: "Why work with us" })}</h2></Reveal>
        <div className="grid gap-6 md:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={i} delay={i * 100} className="group rounded-[2rem] border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-soft">
              <span className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground transition-transform group-hover:scale-110"><p.i /></span>
              <h3 className="text-xl font-bold">{t(p.t)}</h3>
              <p className="mt-3 text-muted-foreground">{t(p.d)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-card py-6">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-3xl font-bold text-muted-foreground/40">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Glasfaser", "FTTH", "Netzbau", "Field Service", "Cloud", "Energienetze", "Projektmanagement", "Interims Management"].map((w) => <span key={k + w}>{w} ✦</span>),
          )}
        </div>
      </div>

      <CTA />
    </>
  );
}
