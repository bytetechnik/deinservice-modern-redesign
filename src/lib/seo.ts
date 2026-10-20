import { useEffect } from "react";

type Meta = { name?: string; property?: string; content: string };

function upsertMeta(attr: "name" | "property", value: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Set the document title and meta tags for the current page. Replaces the
 * per-route `head()` that TanStack Router rendered on the server.
 */
export function useSeo(title: string, meta: Meta[] = []) {
  const serialized = JSON.stringify(meta);
  useEffect(() => {
    if (title) document.title = title;
    for (const m of meta) {
      if (m.name) upsertMeta("name", m.name, m.content);
      else if (m.property) upsertMeta("property", m.property, m.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, serialized]);
}
