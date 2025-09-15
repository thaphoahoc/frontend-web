import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { slugify } from "@/utils/slug";
import { tr } from "@/types/i18n";
import { useLanguage } from "@/context/language-context";
import { thumbUrl } from "@/utils/thumb";
import { Badge } from "@/components/ui/badge";

// Import raw HTML mock content
// (needs a bundler plugin or ?raw support, e.g. Vite)
import ictpostHtml from "@/data/ICTPOST.html?raw";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const postIndex = useMemo(
    () => blogPosts.findIndex(p => slugify(p.title.en) === slug),
    [slug]
  );

  if (postIndex === -1) {
    return <Navigate to="/404" replace />;
  }

  const post = blogPosts[postIndex];

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(language === "vi" ? "vi-VN" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [language]
  );

  return (
    <article className="container mx-auto px-6 py-12 prose max-w-3xl">
      <img
        src={thumbUrl(tr(post.title, "en"), postIndex, 1200, 630)}
        alt={tr(post.title, language)}
        className="w-full rounded-2xl mb-6"
        loading="lazy"
      />

      <h1 className="!mb-2 font-serif">{tr(post.title, language)}</h1>

      <div className="flex items-center gap-2 text-sm text-muted-foreground !mt-0 !mb-6">
        <Badge variant="outline">{tr(post.category, language)}</Badge>
        <span>•</span>
        <span>{formatter.format(new Date(post.dateISO))}</span>
        <span>•</span>
        <span>{tr(post.readTime, language)}</span>
      </div>

      <p className="lead text-muted-foreground">{tr(post.excerpt, language)}</p>

      <hr className="my-8" />

      {/* Render mock HTML content */}
      <div dangerouslySetInnerHTML={{ __html: ictpostHtml }} />

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
            {tr(tag, language)}
          </span>
        ))}
      </div>
    </article>
  );
}

