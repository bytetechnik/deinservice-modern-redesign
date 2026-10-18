import { img } from "./images";

export const services = [
  { image: img.engineer, title: { de: "Planungsleistungen", en: "Planning" },
    text: { de: "Netzplanung NE2–NE5 und aktives Netz, FTTX-Planung, Genehmigungsmanagement und Standortsicherung.", en: "Network planning NE2–NE5 and active networks, FTTX planning, permit management and site acquisition." },
    points: { de: ["Anforderungsmanagement & Gesamtplanung", "Netzplanung NE2/3/4/5", "Genehmigungsmanagement"], en: ["Requirements & master planning", "Network planning NE2/3/4/5", "Permit management"] } },
  { image: img.construction, title: { de: "Netzrealisierung", en: "Network Deployment" },
    text: { de: "Bau und Erweiterung Ihrer Servicenetze – als GU für aktive & passive Netze bis zum Turnkey-Projekt.", en: "Building and extending your service networks – as general contractor for active & passive networks up to turnkey projects." },
    points: { de: ["GU für aktive & passive Netze", "Montage & Inbetriebnahme", "Bauleitung as a Service"], en: ["GC for active & passive networks", "Installation & commissioning", "Site management as a service"] } },
  { image: img.server, title: { de: "Netzbetrieb & Field Service", en: "Operations & Field Service" },
    text: { de: "Entstörung und Wartung von NE2–NE3 bis zum Kundenendgerät – damit Sie sich auf Ihre Kunden konzentrieren.", en: "Fault clearance and maintenance from NE2–NE3 to the customer device – so you can focus on your customers." },
    points: { de: ["Entstörung & Wartung", "Kundenendgeräte", "Flexible Leistungsblöcke"], en: ["Fault clearance & maintenance", "Customer devices", "Flexible service blocks"] } },
  { image: img.fiber, title: { de: "Kundenaktivierungen", en: "Customer Activations" },
    text: { de: "Hausanschlüsse, Netzerweiterungen und Aktivierungen – synchronisiert, effizient und SLA-konform.", en: "House connections, network extensions and activations – synchronised, efficient and SLA-compliant." },
    points: { de: ["Privat- & Geschäftskunden", "Ein- & Mehrfamilienhäuser", "SLA-konforme Umsetzung"], en: ["Residential & business", "Single & multi-family homes", "SLA-compliant delivery"] } },
  { image: img.meeting, title: { de: "Projektmanagement", en: "Project Management" },
    text: { de: "Dedizierte Projektleitung inkl. PMO, Beschaffung, Logistik sowie Prozess- und Tool-Implementierung.", en: "Dedicated project leadership incl. PMO, procurement, logistics and process & tool implementation." },
    points: { de: ["Project Management Office", "Beschaffung & Logistik", "Prozesse & Tools"], en: ["Project management office", "Procurement & logistics", "Processes & tools"] } },
  { image: img.team, title: { de: "Interims Management", en: "Interim Management" },
    text: { de: "Erfahrene Manager und Experten für Schlüsselpositionen – inklusive Ausbildungs- und Trainingskonzepten.", en: "Experienced managers and experts for key positions – including training and development concepts." },
    points: { de: ["Schlüsselpositionen besetzen", "Training on the Job", "Organisationsentwicklung"], en: ["Fill key positions", "Training on the job", "Organisational development"] } },
];
