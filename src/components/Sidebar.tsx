import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tr, type Lang } from "@/types/i18n";
import { categories, featuredTopics, recentDiscussions, uiText } from "@/data/uiText";

type Props = { language: Lang };

export function Sidebar({ language }: Props) {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">{tr(uiText.categories, language)}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <a href="#" className="text-sm text-foreground hover:text-accent transition-colors block py-1">
                  {tr(category, language)}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Featured Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">{tr(uiText.featured, language)}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {featuredTopics.map((t, i) => (
              <div key={i}>
                <h4 className="font-semibold text-sm mb-2 text-accent">{tr(t.title, language)}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tr(t.desc, language)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-accent/5">
        <CardHeader>
          <CardTitle className="font-serif text-accent">{tr(uiText.stayUpdated, language)}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">
            {tr(uiText.newsletterDesc, language)}
          </CardDescription>
          <div className="space-y-3">
            <input
              type="email"
              placeholder={tr(uiText.emailPlaceholder, language)}
              className="w-full px-3 py-2 border border-border rounded-md text-sm"
            />
            <button className="w-full px-3 py-2 rounded-md text-sm bg-accent hover:bg-accent/90 text-white">
              {tr(uiText.subscribe, language)}
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">{tr(uiText.recent, language)}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDiscussions.map((d, i) => (
              <div key={i} className="text-sm">
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">{tr(d.name, language)}</span>{" "}
                  {tr(uiText.commentedOn, language)}
                </p>
                <p className="text-accent text-xs">“{tr(d.post, language)}”</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

