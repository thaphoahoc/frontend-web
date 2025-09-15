"use client";

import { useMemo } from "react";
import { tr } from "@/types/i18n";
import { blogPosts } from "@/data/blogPosts";
import { uiText } from "@/data/uiText";
import { useLanguage } from "@/context/language-context";
import { PostCard } from "@/components/PostCard";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const { language } = useLanguage();

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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="text-left">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">
              {tr(uiText.title, language)}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {tr(uiText.subtitle, language)}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <PostCard
                  key={index}
                  post={post}
                  index={index}
                  language={language}
                  formatter={formatter}
                  readMoreLabel={tr(uiText.readMore, language)}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                {tr(uiText.loadMore, language)}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar language={language} />
        </div>
      </div>
    </div>
  );
}

