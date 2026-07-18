// Minimal markdown renderer for short site copy (tagline, bio).
// Avoids pulling in a full markdown library for a few link/emphasis features.
// For real Markdown content (blog posts), Astro renders MDX/Markdown natively.

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;');

const renderInline = (s: string) => {
  // 1. Protect by escaping HTML first
  let out = escapeHtml(s);
  // 2. Links: [text](url)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // 3. Bold **text**
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // 4. Italic *text*
  out = out.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  // 5. Inline code `text`
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  return out;
};

/** Inline markdown — no <p> wrapping. Use for tagline, news content, etc. */
export const marked = (s: string) => renderInline(s);

/** Block markdown — splits into paragraphs by blank lines. */
export const markedBlock = (s: string) =>
  s.trim()
    .split(/\n\s*\n/)
    .map(para => `<p>${renderInline(para.trim().replace(/\n/g, ' '))}</p>`)
    .join('\n');
