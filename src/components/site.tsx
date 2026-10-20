import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { srcSet } from "@/lib/images";

export * from "./NetworkBackground";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const nav = [
  { to: "/", de: "Start", en: "Home" },
  { to: "/leistungen", de: "Leistungen", en: "Services" },
  { to: "/projekte", de: "Projekte", en: "Projects" },
  { to: "/ueber-uns", de: "Über uns", en: "About" },
  { to: "/karriere", de: "Karriere", en: "Careers" },
] as const;

function LangSwitch({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex rounded-full border p-1 text-xs font-bold ${dark ? "border-ink-foreground/15 bg-ink-foreground/5" : "border-border bg-card"}`}>
      {(["de", "en"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-label={`Language ${l}`}
          className={`rounded-full px-3 py-1 uppercase transition-all ${lang === l ? "bg-primary text-primary-foreground" : dark ? "text-ink-foreground/50 hover:text-ink-foreground" : "text-muted-foreground hover:text-foreground"}`}>
          {l}
        </button>
      ))}
    </div>
  );
}

function MenuToggle({ open, onToggle, scrolled }: { open: boolean; onToggle: () => void; scrolled: boolean }) {
  // White bars over the dark hero, black bars once the header turns light.
  const bar = `absolute left-2 block h-0.5 rounded-full transition-all duration-300 ${
    open ? "bg-ink-foreground" : scrolled ? "bg-ink" : "bg-white"
  }`;
  return (
    <button
      onClick={onToggle}
      aria-label="Menu"
      aria-expanded={open}
      className="relative grid h-11 w-11 shrink-0 place-items-center lg:hidden"
    >
      <span className="relative block h-4 w-5">
        <span className={`${bar} top-0 ${open ? "left-1 top-1.5 w-6 rotate-45" : "w-5"}`} />
        <span className={`${bar} top-1.5 w-5 ${open ? "scale-x-0 opacity-0" : ""}`} />
        <span className={`${bar} top-3 ${open ? "left-1 top-1.5 w-6 -rotate-45" : "w-3.5"}`} />
      </span>
    </button>
  );
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  const location = useLocation();
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  useEffect(() => onClose(), [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!open) return null;
  const links = [...nav, { to: "/kontakt", de: "Kontakt", en: "Contact" } as const];
  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
      <button className="animate-backdrop absolute inset-0 bg-ink/70 backdrop-blur-sm" aria-label="Close menu" onClick={onClose} />
      <aside className="animate-drawer absolute inset-y-0 right-0 flex w-[min(24rem,92vw)] flex-col overflow-y-auto bg-ink text-ink-foreground shadow-soft">
        <div className="animate-float pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-accent-gradient opacity-25 blur-3xl" />
        <div className="relative flex items-center justify-between border-b border-ink-foreground/10 px-6 py-5">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            <Sparkles size={14} /> {t({ de: "Navigation", en: "Menu" })}
          </span>
          <button onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/15 text-lg leading-none transition-colors hover:border-accent hover:text-accent">&times;</button>
        </div>
        <nav className="relative mt-4 flex-1 px-6">
          {links.map((n, i) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={onClose} className="group block border-b border-ink-foreground/5 py-1">
              {({ isActive }) => (
                <span
                  className={`animate-drawer-item flex items-baseline gap-4 py-3 transition-colors ${isActive ? "text-accent" : "text-ink-foreground/85 group-hover:text-accent"}`}
                  style={{ animationDelay: `${90 + i * 60}ms` }}
                >
                  <span className="font-display text-xs font-bold tabular-nums text-ink-foreground/35">0{i + 1}</span>
                  <span className="text-3xl font-bold tracking-tight">{t(n)}</span>
                  <ArrowUpRight size={20} className={`ml-auto self-center transition-transform group-hover:translate-x-1 ${isActive ? "text-accent" : "opacity-0 group-hover:opacity-100"}`} />
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="relative mt-8 space-y-6 px-6 pb-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-foreground/50">{t({ de: "Sprache", en: "Language" })}</span>
            <LangSwitch dark />
          </div>
          <div className="space-y-2 text-sm text-ink-foreground/70">
            <a href="tel:+496924009766" className="flex items-center gap-2 hover:text-accent"><Phone size={15} /> +49 (0) 69 2400 9766</a>
            <a href="mailto:info@deinservice.gmbh" className="flex items-center gap-2 hover:text-accent"><Mail size={15} /> info@deinservice.gmbh</a>
          </div>
          <p className="text-xs text-ink-foreground/40">Friedrich-Baur-Str. 13 · 63150 Heusenstamm</p>
        </div>
      </aside>
    </div>
  );
}

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass mx-4 shadow-soft md:mx-auto" : ""}`}>
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-icon.png" alt="Logo" className="h-9 w-9 rounded-full object-contain" />
          <span className={`font-display text-xs font-extrabold uppercase tracking-[0.2em] ${scrolled ? "text-foreground" : "text-ink-foreground"}`}>
            Dein Service
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  scrolled ? "text-foreground/70 hover:text-foreground" : "text-ink-foreground/80 hover:text-ink-foreground"
                } ${isActive ? "!text-accent" : ""}`
              }
            >
              {t(n)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block"><LangSwitch /></div>
          <Link to="/kontakt" className="hidden rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 md:inline-flex lg:hidden">
            {t({ de: "Kontakt", en: "Contact" })}
          </Link>
          <MenuToggle open={open} onToggle={() => setOpen(!open)} scrolled={scrolled} />
        </div>
      </div>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl font-bold">Deutsche Infrastruktur<br />und Service GmbH</h3>
          <p className="mt-4 max-w-md text-ink-foreground/60">
            {t({ de: "Telekommunikation, Glasfaser und Infrastruktur – aus Frankfurt für ganz Deutschland.", en: "Telecommunications, fiber and infrastructure – from Frankfurt for all of Germany." })}
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-bold uppercase tracking-widest text-accent">{t({ de: "Kontakt", en: "Contact" })}</p>
          <a href="tel:+4969240097 66" className="flex items-center gap-2 text-ink-foreground/80 hover:text-accent"><Phone size={16} /> +49 (0) 69 2400 9766</a>
          <a href="mailto:info@deinservice.gmbh" className="flex items-center gap-2 text-ink-foreground/80 hover:text-accent"><Mail size={16} /> info@deinservice.gmbh</a>
          <p className="flex gap-2 text-ink-foreground/80"><MapPin size={16} className="mt-0.5 shrink-0" /> Friedrich-Baur-Str. 13, 63150 Heusenstamm</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-bold uppercase tracking-widest text-accent">{t({ de: "Seiten", en: "Pages" })}</p>
          {nav.map((n) => <Link key={n.to} to={n.to} className="block text-ink-foreground/80 hover:text-accent">{t(n)}</Link>)}
          <a href="https://linkedin.com/company/deutsche-infrastruktur-und-service-gmbh" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink-foreground/80 hover:text-accent"><Linkedin size={16} /> LinkedIn</a>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} Dein Service GmbH · Design by{" "}
        <a href="https://bytetechnik.de" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
          ByteTechnik.de
        </a>
      </div>
    </footer>
  );
}

export function PageHero({ image, eyebrow, title, text }: { image: string; eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink pb-20 pt-40">
      <img src={image} srcSet={srcSet(image)} sizes="100vw" alt="" fetchPriority="high" decoding="async" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="bg-hero absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <p className="animate-rise mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h1 className="animate-rise max-w-4xl text-5xl font-bold leading-[1.05] text-ink-foreground md:text-7xl" style={{ animationDelay: "120ms" }}>{title}</h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg text-ink-foreground/75" style={{ animationDelay: "240ms" }}>{text}</p>
      </div>
    </section>
  );
}

export function CTA() {
  const t = useT();
  return (
    <section className="px-6 py-24">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink p-12 md:p-20">
        <div className="animate-float absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent-gradient opacity-40 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-4xl font-bold text-ink-foreground md:text-5xl">
            {t({ de: "Bereit für Ihr nächstes Netzprojekt?", en: "Ready for your next network project?" })}
          </h2>
          <Link to="/kontakt" className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground transition-transform hover:scale-105">
            {t({ de: "Jetzt anfragen", en: "Get in touch" })} <ArrowUpRight className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
