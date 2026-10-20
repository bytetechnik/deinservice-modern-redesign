import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useSeo } from "@/lib/seo";
import { img, ogImage } from "@/lib/images";
import { PageHero, Reveal } from "@/components/site";

export default function Page() {
  useSeo("Kontakt – Dein Service GmbH", [
    { name: "description", content: "Kontaktieren Sie Dein Service: +49 (0) 69 2400 9766, info@deinservice.gmbh, Niederlassung Heusenstamm." },
    { property: "og:title", content: "Kontakt – Dein Service GmbH" },
    { property: "og:description", content: "Sprechen Sie mit uns über Ihr Projekt." },
    { property: "og:image", content: ogImage("meeting") },
    { name: "twitter:image", content: ogImage("meeting") },
  ]);
  const t = useT();
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@deinservice.gmbh?subject=${encodeURIComponent("Anfrage von " + f.name)}&body=${encodeURIComponent(f.msg + "\n\n" + f.email)}`;
  };
  const input = "w-full rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";
  const info = [
    { i: Phone, l: "+49 (0) 69 2400 9766", h: "tel:+496924009766" },
    { i: Mail, l: "info@deinservice.gmbh", h: "mailto:info@deinservice.gmbh" },
    { i: MapPin, l: "Friedrich-Baur-Straße 13, 63150 Heusenstamm", h: "https://www.google.com/maps/search/?api=1&query=Friedrich+Baur+Strasse+13+63150+Heusenstamm" },
  ];
  return (
    <>
      <PageHero image={img.meeting} eyebrow={t({ de: "Kontakt", en: "Contact" })}
        title={t({ de: "Lassen Sie uns sprechen.", en: "Let's talk." })}
        text={t({ de: "Termine bitte per Mail oder Telefon vereinbaren.", en: "Please arrange appointments by email or phone." })} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-5">
        <Reveal className="space-y-4 md:col-span-2">
          {info.map((x) => (
            <a key={x.l} href={x.h} target={x.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground"><x.i size={20} /></span>
              <span className="font-semibold">{x.l}</span>
            </a>
          ))}
          <div className="rounded-3xl bg-ink p-6 text-ink-foreground">
            <p className="mb-3 flex items-center gap-2 font-bold"><Clock size={18} className="text-accent" />{t({ de: "Öffnungszeiten Heusenstamm", en: "Opening hours Heusenstamm" })}</p>
            <p className="text-ink-foreground/75">{t({ de: "Donnerstag 10:00 – 16:00", en: "Thursday 10:00 – 16:00" })}</p>
            <p className="text-sm text-ink-foreground/50">{t({ de: "Übrige Tage nach Vereinbarung", en: "Other days by appointment" })}</p>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-3">
          <form onSubmit={send} className="space-y-4 rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <h2 className="mb-2 text-3xl font-bold">{t({ de: "Nachricht senden", en: "Send a message" })}</h2>
            <input required className={input} placeholder="Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required type="email" className={input} placeholder="E-Mail" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
            <textarea required rows={5} className={input} placeholder={t({ de: "Ihre Nachricht", en: "Your message" })} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
            <button className="w-full rounded-full bg-accent-gradient py-4 font-bold text-primary-foreground transition-transform hover:scale-[1.02]">
              {t({ de: "Absenden", en: "Send" })}
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
