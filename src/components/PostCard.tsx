import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tr, type Lang } from "@/types/i18n";
import type { BlogPost } from "@/data/blogPosts";
import { thumbUrl } from "@/utils/thumb";
import { slugify } from "@/utils/slug";

type Props = {
  post: BlogPost;
  index: number;
  language: Lang;
  formatter: Intl.DateTimeFormat;
  readMoreLabel: string;
};

export function PostCard({ post, index, language, formatter, readMoreLabel }: Props) {
  const slug = slugify(tr(post.title, "en"));

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <Link to={`/blog/${slug}`} aria-label={tr(post.title, language)}>
        <img
          src={thumbUrl(tr(post.title, "en"), index)}
          alt={tr(post.title, language)}
          loading="lazy"
          width={800}
          height={420}
          className="w-full aspect-[16/9] object-cover"
          srcSet={`
            ${thumbUrl(tr(post.title, "en"), index, 480, 270)} 480w,
            ${thumbUrl(tr(post.title, "en"), index, 640, 360)} 640w,
            ${thumbUrl(tr(post.title, "en"), index, 800, 420)} 800w,
            ${thumbUrl(tr(post.title, "en"), index, 1200, 630)} 1200w
          `}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
        />
      </Link>

      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline">{tr(post.category, language)}</Badge>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">
            {formatter.format(new Date(post.dateISO))}
          </span>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{tr(post.readTime, language)}</span>
        </div>
        <CardTitle className="font-serif text-xl hover:text-accent transition-colors">
          <Link to={`/blog/${slug}`}>{tr(post.title, language)}</Link>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="mb-4 leading-relaxed text-base">
          {tr(post.excerpt, language)}
        </CardDescription>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-xs bg-muted px-2 py-1 rounded">
                {tr(tag, language)}
              </span>
            ))}
          </div>

          {/* If your Button supports `asChild` (shadcn), this keeps styles + semantics */}
          <Button asChild variant="outline" size="sm">
            <Link to={`/blog/${slug}`}>{readMoreLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

