export const thumbUrl = (title: string, i: number, w = 800, h = 420) =>
  i === 1
    ? "https://scitechdaily.com/images/AI-Scientist-Assistant-Concept.jpg"
    : `https://picsum.photos/seed/${encodeURIComponent(`${title}-${i}`)}/${w}/${h}`;

