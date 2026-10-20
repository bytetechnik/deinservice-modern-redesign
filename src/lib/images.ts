// Royalty-free photos from Unsplash (Unsplash License), vendored into public/images
// as responsive WebP (see the 960/1600 variants) so they load from our own host.
export const img = {
  fiber: "/images/fiber-1600.webp",
  server: "/images/server-1600.webp",
  engineer: "/images/engineer-1600.webp",
  construction: "/images/construction-1600.webp",
  building: "/images/building-1600.webp",
  team: "/images/team-1600.webp",
  network: "/images/network-1600.webp",
  office: "/images/office-1600.webp",
  electric: "/images/electric-1600.webp",
  meeting: "/images/meeting-1600.webp",
};

export const ogImage = (id: keyof typeof img) => img[id];

/**
 * Responsive `srcset` for a full-size (1600) path: emits the local 960 + 1600
 * WebP variants. The extra `widths` argument is accepted for call-site
 * compatibility but ignored since we ship two fixed sizes.
 */
export const srcSet = (url: string, _widths?: number[]): string => {
  const small = url.replace(/-1600\.webp$/, "-960.webp");
  return `${small} 960w, ${url} 1600w`;
};
