import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context"; // <-- import your context (adjust path)
import { Globe } from "lucide-react";
import { useMemo } from "react";

// --- Small helper to pick the language-specific string
function tr<T extends Record<string, string>>(m: T, lang: "en" | "vi") {
  return m[lang] ?? m.en;
}

// --- Blog data (bilingual) ---
const blogPosts = [
  {
    title: { en: "The Art of Scientific Questioning in Chemistry Education", vi: "Nghệ thuật đặt câu hỏi khoa học trong dạy học Hoá học" },
    excerpt: {
      en: "How teaching students to ask the right questions transforms their understanding of chemical phenomena and develops critical thinking skills.",
      vi: "Cách hướng dẫn học sinh đặt câu hỏi đúng giúp chuyển hoá hiểu biết về hiện tượng hoá học và phát triển tư duy phản biện.",
    },
    dateISO: "2024-03-15",
    readTime: { en: "8 min read", vi: "Đọc 8 phút" },
    category: { en: "Education Philosophy", vi: "Triết lý giáo dục" },
    tags: [
      { en: "Critical Thinking", vi: "Tư duy phản biện" },
      { en: "Pedagogy", vi: "Sư phạm" },
      { en: "Student Engagement", vi: "Tương tác học sinh" },
    ],
  },
  {
    title: { en: "Beyond Memorization: Building Conceptual Understanding in Organic Chemistry", vi: "Vượt qua học vẹt: Xây dựng hiểu biết khái niệm trong Hoá hữu cơ" },
    excerpt: {
      en: "Exploring strategies to help students understand reaction mechanisms through pattern recognition and logical reasoning rather than rote learning.",
      vi: "Chiến lược giúp học sinh hiểu cơ chế phản ứng qua nhận diện mẫu và lập luận logic thay vì học thuộc.",
    },
    dateISO: "2024-03-08",
    readTime: { en: "12 min read", vi: "Đọc 12 phút" },
    category: { en: "Teaching Methods", vi: "Phương pháp dạy học" },
    tags: [
      { en: "Organic Chemistry", vi: "Hoá hữu cơ" },
      { en: "Conceptual Learning", vi: "Học theo khái niệm" },
      { en: "Mechanisms", vi: "Cơ chế" },
    ],
  },
  {
    title: { en: "Real-World Applications: Connecting Chemistry to Daily Life", vi: "Ứng dụng thực tế: Kết nối Hoá học với đời sống" },
    excerpt: {
      en: "Examples of how everyday phenomena demonstrate fundamental chemical principles, making abstract concepts tangible and relevant.",
      vi: "Ví dụ về cách các hiện tượng đời thường minh hoạ các nguyên lý hoá học cơ bản, giúp khái niệm trừu tượng trở nên gần gũi.",
    },
    dateISO: "2024-02-28",
    readTime: { en: "6 min read", vi: "Đọc 6 phút" },
    category: { en: "Applications", vi: "Ứng dụng" },
    tags: [
      { en: "Real-World Chemistry", vi: "Hoá học đời sống" },
      { en: "Student Motivation", vi: "Động lực học tập" },
      { en: "Practical Examples", vi: "Ví dụ thực tiễn" },
    ],
  },
  {
    title: { en: "Assessment Strategies That Promote Deep Learning", vi: "Đánh giá thúc đẩy học sâu" },
    excerpt: {
      en: "Moving beyond traditional testing to assessment methods that encourage understanding, reflection, and scientific reasoning.",
      vi: "Vượt qua kiểm tra truyền thống để hướng tới các hình thức đánh giá khuyến khích hiểu biết, phản tư và lập luận khoa học.",
    },
    dateISO: "2024-02-20",
    readTime: { en: "10 min read", vi: "Đọc 10 phút" },
    category: { en: "Assessment", vi: "Đánh giá" },
    tags: [
      { en: "Evaluation", vi: "Đánh giá" },
      { en: "Deep Learning", vi: "Học sâu" },
      { en: "Alternative Assessment", vi: "Đánh giá thay thế" },
    ],
  },
  {
    title: { en: "The Role of Failure in Scientific Learning", vi: "Vai trò của thất bại trong học tập khoa học" },
    excerpt: {
      en: "How embracing mistakes and misconceptions in the chemistry classroom leads to stronger understanding and resilience.",
      vi: "Việc chấp nhận sai lầm và hiểu lầm trong lớp học Hoá học giúp tăng cường hiểu biết và khả năng bền bỉ.",
    },
    dateISO: "2024-02-12",
    readTime: { en: "7 min read", vi: "Đọc 7 phút" },
    category: { en: "Learning Psychology", vi: "Tâm lý học tập" },
    tags: [
      { en: "Growth Mindset", vi: "Tư duy phát triển" },
      { en: "Misconceptions", vi: "Hiểu lầm" },
      { en: "Learning Process", vi: "Quy trình học" },
    ],
  },
  {
    title: { en: "Chemical Equilibrium: A Gateway to Systems Thinking", vi: "Cân bằng hoá học: Cửa ngõ tới tư duy hệ thống" },
    excerpt: {
      en: "Using equilibrium concepts to develop students' ability to think about complex, dynamic systems in chemistry and beyond.",
      vi: "Sử dụng khái niệm cân bằng để phát triển khả năng tư duy về các hệ thống phức tạp, động trong và ngoài Hoá học.",
    },
    dateISO: "2024-02-05",
    readTime: { en: "9 min read", vi: "Đọc 9 phút" },
    category: { en: "Concept Focus", vi: "Trọng tâm khái niệm" },
    tags: [
      { en: "Equilibrium", vi: "Cân bằng" },
      { en: "Systems Thinking", vi: "Tư duy hệ thống" },
      { en: "Advanced Concepts", vi: "Khái niệm nâng cao" },
    ],
  },
  {
    title: { en: "Analyzing University Entrance Exam Trends in Chemistry", vi: "Phân tích xu hướng đề thi đại học môn Hoá" },
    excerpt: {
      en: "Insights from recent Vietnamese university entrance exams and how they reflect changing expectations in chemistry education.",
      vi: "Nhận định từ các kỳ thi tuyển sinh đại học Việt Nam gần đây và sự thay đổi kỳ vọng trong giáo dục Hoá học.",
    },
    dateISO: "2024-01-28",
    readTime: { en: "11 min read", vi: "Đọc 11 phút" },
    category: { en: "Exam Analysis", vi: "Phân tích đề thi" },
    tags: [
      { en: "University Exams", vi: "Kỳ thi đại học" },
      { en: "Trend Analysis", vi: "Phân tích xu hướng" },
      { en: "Preparation Strategies", vi: "Chiến lược ôn luyện" },
    ],
  },
  {
    title: { en: "The Power of Visual Learning in Chemistry", vi: "Sức mạnh của học bằng hình ảnh trong Hoá học" },
    excerpt: {
      en: "How molecular models, diagrams, and visual analogies enhance student understanding of abstract chemical concepts.",
      vi: "Cách mô hình phân tử, sơ đồ và phép so sánh trực quan tăng cường hiểu biết về các khái niệm trừu tượng.",
    },
    dateISO: "2024-01-20",
    readTime: { en: "8 min read", vi: "Đọc 8 phút" },
    category: { en: "Visual Learning", vi: "Học bằng hình ảnh" },
    tags: [
      { en: "Visualization", vi: "Trực quan hoá" },
      { en: "Molecular Models", vi: "Mô hình phân tử" },
      { en: "Learning Styles", vi: "Phong cách học" },
    ],
  },
] as const;

const categories = [
  { en: "All Posts", vi: "Tất cả bài viết" },
  { en: "Education Philosophy", vi: "Triết lý giáo dục" },
  { en: "Teaching Methods", vi: "Phương pháp dạy học" },
  { en: "Applications", vi: "Ứng dụng" },
  { en: "Assessment", vi: "Đánh giá" },
  { en: "Learning Psychology", vi: "Tâm lý học tập" },
  { en: "Concept Focus", vi: "Trọng tâm khái niệm" },
  { en: "Exam Analysis", vi: "Phân tích đề thi" },
  { en: "Visual Learning", vi: "Học bằng hình ảnh" },
] as const;

const uiText = {
  title: { en: "Educational Blog", vi: "Blog Giáo dục" },
  subtitle: {
    en: "Reflections on chemistry education, teaching methodologies, and the art of fostering scientific thinking in students. Insights from the classroom and beyond.",
    vi: "Suy ngẫm về giáo dục Hoá học, phương pháp giảng dạy và nghệ thuật nuôi dưỡng tư duy khoa học cho học sinh. Góc nhìn từ lớp học và hơn thế nữa.",
  },
  readMore: { en: "Read More →", vi: "Đọc tiếp →" },
  loadMore: { en: "Load More Articles", vi: "Xem thêm bài viết" },
  categories: { en: "Categories", vi: "Chuyên mục" },
  featured: { en: "Featured Topics", vi: "Chủ đề nổi bật" },
  stayUpdated: { en: "Stay Updated", vi: "Nhận thông báo" },
  newsletterDesc: {
    en: "Get notified when new articles about chemistry education and teaching methods are published.",
    vi: "Nhận thông báo khi có bài viết mới về giáo dục Hoá học và phương pháp giảng dạy.",
  },
  emailPlaceholder: { en: "Enter your email", vi: "Nhập email của bạn" },
  subscribe: { en: "Subscribe", vi: "Đăng ký" },
  recent: { en: "Recent Discussions", vi: "Thảo luận gần đây" },
  commentedOn: { en: "commented on", vi: "đã bình luận về" },
  toggleLang: { en: "Vietnamese", vi: "English" },
} as const;

const featuredTopics = [
  {
    title: { en: "Critical Thinking in Science", vi: "Tư duy phản biện trong khoa học" },
    desc: {
      en: "Developing analytical skills that extend beyond chemistry into all areas of learning.",
      vi: "Phát triển kỹ năng phân tích vượt ra ngoài Hoá học đến mọi lĩnh vực học tập.",
    },
  },
  {
    title: { en: "Evidence-Based Learning", vi: "Học dựa trên bằng chứng" },
    desc: {
      en: "Teaching students to support conclusions with experimental data and logical reasoning.",
      vi: "Rèn luyện học sinh đưa ra kết luận dựa trên dữ liệu thực nghiệm và lập luận logic.",
    },
  },
  {
    title: { en: "Conceptual Understanding", vi: "Hiểu biết theo khái niệm" },
    desc: {
      en: "Moving beyond memorization to deep comprehension of chemical principles.",
      vi: "Vượt qua học thuộc lòng để đạt hiểu biết sâu về các nguyên lý hoá học.",
    },
  },
] as const;

const recentDiscussions = [
  { name: { en: "Dr. Tran", vi: "TS. Trần" }, post: { en: "Assessment Strategies That Promote Deep Learning", vi: "Đánh giá thúc đẩy học sâu" } },
  { name: { en: "Ms. Linh", vi: "Cô Linh" }, post: { en: "The Role of Failure in Scientific Learning", vi: "Vai trò của thất bại trong học tập khoa học" } },
  { name: { en: "Prof. Minh", vi: "PGS. Minh" }, post: { en: "Beyond Memorization: Building Conceptual Understanding", vi: "Vượt qua học vẹt: Xây dựng hiểu biết khái niệm" } },
] as const;

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2">
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{language === "vi" ? uiText.toggleLang.vi : uiText.toggleLang.en}</span>
      <span className="sm:hidden">{language.toUpperCase()}</span>
    </Button>
  );
}

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
                <Card key={index} className="hover:shadow-lg transition-shadow">
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
                    <CardTitle className="font-serif text-xl hover:text-accent transition-colors cursor-pointer">
                      {tr(post.title, language)}
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
                      <Button variant="outline" size="sm">
                        {tr(uiText.readMore, language)}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                      <a
                        href="#"
                        className="text-sm text-foreground hover:text-accent transition-colors block py-1"
                      >
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
                  <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                    {tr(uiText.subscribe, language)}
                  </Button>
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
                        <span className="font-medium text-foreground">{tr(d.name, language)}</span> {tr(uiText.commentedOn, language)}
                      </p>
                      <p className="text-accent text-xs">“{tr(d.post, language)}”</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
