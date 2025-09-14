import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

const Home = () => {
  const { language } = useLanguage();

  const content = {
    vi: {
      heroTitle: "Tư Duy Khoa Học",
      heroSubtitle: "Qua Môn Hóa Học",
      heroDescription:
        "Xây dựng nền tảng vững chắc trong hóa học thông qua lý luận logic, phản biện và học tập dựa trên bằng chứng. Trao quyền cho học sinh tư duy như nhà khoa học.",
      explore: "Khám phá bài học",
      approach: "Tìm hiểu phương pháp giảng dạy",
      featuredTitle: "Bài Học Nổi Bật",
      featuredDesc:
        "Các bài học được xây dựng kỹ lưỡng giúp hiểu sâu qua tư duy logic và phản biện.",
      viewLesson: "Xem bài học",
      viewAll: "Xem tất cả bài học",
      philosophy: "Triết Lý Giảng Dạy",
      quote:
        '"Hóa học không chỉ là ghi nhớ công thức — mà là hiểu quy luật điều khiển vật chất và năng lượng. Khi học sinh học cách tư duy khoa học, họ phát triển những kỹ năng vượt xa lớp học."',
      principles: [
        {
          title: "Học Tập Dựa Trên Bằng Chứng",
          desc: "Hiểu kiến thức qua quan sát và lý luận logic",
        },
        {
          title: "Tư Duy Phản Biện",
          desc: "Phát triển kỹ năng phân tích vượt ngoài phạm vi hóa học",
        },
        {
          title: "Nền Tảng Vững Chắc",
          desc: "Tiến trình hệ thống từ cơ bản đến nâng cao",
        },
      ],
    },
    en: {
      heroTitle: "Scientific Thinking",
      heroSubtitle: "Through Chemistry",
      heroDescription:
        "Building strong foundations in chemistry through logical reasoning, critical reflection, and evidence-based learning. Empowering students to think like scientists.",
      explore: "Explore Lessons",
      approach: "Learn About My Approach",
      featuredTitle: "Featured Lessons",
      featuredDesc:
        "Carefully crafted lessons that build understanding through logical progression and critical thinking exercises.",
      viewLesson: "View Lesson",
      viewAll: "View All Lessons",
      philosophy: "Teaching Philosophy",
      quote:
        '"Chemistry is not just about memorizing formulas—it\'s about understanding the logical patterns that govern matter and energy. When students learn to think scientifically, they develop skills that serve them far beyond the classroom."',
      principles: [
        {
          title: "Evidence-Based Learning",
          desc: "Building understanding through observation and logical reasoning",
        },
        {
          title: "Critical Thinking",
          desc: "Developing analytical skills that apply beyond chemistry",
        },
        {
          title: "Strong Foundations",
          desc: "Systematic progression from basic principles to complex concepts",
        },
      ],
    },
  };

  const t = content[language];

  const featuredLessons = [
    {
      title: "Chemical Bonding Fundamentals",
      description:
        language === "vi"
          ? "Tìm hiểu liên kết ion, cộng hóa trị và kim loại qua mô hình trực quan và lý luận."
          : "Understanding ionic, covalent, and metallic bonds through logical reasoning and visual models.",
      level: language === "vi" ? "Cơ bản" : "Basic",
      duration: "45 min",
    },
    {
      title: "Equilibrium and Le Chatelier's Principle",
      description:
        language === "vi"
          ? "Phân tích cân bằng hóa học với các ứng dụng thực tiễn."
          : "Critical analysis of chemical equilibrium with real-world applications.",
      level: language === "vi" ? "Nâng cao" : "Advanced",
      duration: "60 min",
    },
    {
      title: "Organic Chemistry: Structure & Function",
      description:
        language === "vi"
          ? "Hiểu hệ thống về cấu trúc và phản ứng của hợp chất hữu cơ."
          : "Building systematic understanding of organic molecules and their reactions.",
      level: language === "vi" ? "Nâng cao" : "Advanced",
      duration: "75 min",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                {t.heroTitle}
                <span className="block text-accent">{t.heroSubtitle}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t.heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/resources">{t.explore}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">{t.approach}</Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full mx-auto flex items-center justify-center">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                  H₂O
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  CO₂
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">{t.featuredTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.featuredDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredLessons.map((lesson, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lesson.level === "Basic" || lesson.level === "Cơ bản"
                          ? "bg-accent/10 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {lesson.level}
                    </span>
                    <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                  </div>
                  <CardTitle className="font-serif">{lesson.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">{lesson.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/resources">{t.viewLesson}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/resources">{t.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">{t.philosophy}</h2>
            <blockquote className="text-xl italic text-foreground mb-8 leading-relaxed">{t.quote}</blockquote>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {t.principles.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{["🧪", "🔬", "⚛️"][i]}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

