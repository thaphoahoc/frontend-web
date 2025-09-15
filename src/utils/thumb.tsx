// Thumbnail helper (Picsum: unique, free, no auth needed)
export const thumbUrl = (title: string, i: number, w = 800, h = 420) =>
  `https://picsum.photos/seed/${encodeURIComponent(`${title}-${i}`)}/${w}/${h}`;

