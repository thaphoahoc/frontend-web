"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context"; // <-- update this path if needed

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  focus: string;
};

type Copy = {
  title: string;
  tagline: string;
  biography: string[];
  teachingPhilosophyTitle: string;
  teachingPillars: { title: string; body: string }[];
  educationTitle: string;
  education: EducationItem[];
  achievementsTitle: string;
  achievements: string[];
  contactTitle: string;
  contactLead: string;
  contactCta: string;
};

const COPY: Record<"vi" | "en", Copy> = {
  en: {
    title: "About Ms. Cao Trần Ngọc Tú Trinh",
    tagline:
      "A passionate educator dedicated to transforming chemistry education through scientific thinking, logical reasoning, and evidence-based learning approaches.",
    biography: [
      "Ms. Cao Trần Ngọc Tú Trinh is an educator committed to renewing chemistry education in Vietnam. With a solid grounding in chemistry and education, she pairs rigorous scientific thinking with accessible, student-centered teaching methods.",
      "Her journey began with a fascination for the molecular world and the belief that core chemical principles can illuminate solutions to real-world problems. This passion has guided her studies and classroom practice, where effective teaching blends subject expertise with a deep understanding of how students learn.",
      "Throughout her work, Ms. Tú Trinh prioritizes approaches that cultivate critical thinking over rote memorization. By helping students see the logical patterns behind chemical phenomena, she nurtures problem-solving skills that reach beyond the chemistry classroom.",
      "Her learner-focused, evidence-informed methods have been well received by students and parents alike. She continues to support learners and collaborate closely with fellow educators, aiming to inspire a new generation that tackles challenges with scientific rigor and intellectual curiosity."
    ],
    teachingPhilosophyTitle: "Teaching Philosophy",
    teachingPillars: [
      {
        title: "Foundation-First Approach",
        body:
          "Every complex concept builds upon simpler principles. I ensure students master fundamental ideas before progressing to advanced topics, creating a solid foundation for lifelong learning."
      },
      {
        title: "Evidence-Based Reasoning",
        body:
          "Students learn to support their conclusions with experimental evidence and logical reasoning. This approach develops critical thinking skills essential for scientific literacy."
      },
      {
        title: "Reflective Learning",
        body:
          "I encourage students to reflect on their learning process, identify misconceptions, and adjust their understanding. This metacognitive approach leads to deeper, more lasting comprehension."
      },
      {
        title: "Real-World Connections",
        body:
          "Chemistry concepts are always connected to real-world applications, helping students see the relevance and importance of their studies in daily life and future careers."
      }
    ],
    educationTitle: "Educational Background",
    education: [
      {
        degree: "B.Ed. in Chemistry Education",
        institution: "Ho Chi Minh City University of Education",
        year: "2026",
        focus: "Analytical and Physical Chemistry"
      }
    ],
    achievementsTitle: "Key Achievements",
    achievements: [
      "Active contributor to discourse on chemistry education",
      "First Prize, Faculty of Chemistry Scientific Research (2025)",
      "First Prize, Faculty of Chemistry Scientific Research (2024)",
      "Third Prize, Vietnam National Student Chemistry Olympiad XII (2025)",
      "Third Prize, Vietnam National Student Chemistry Olympiad XI (2023)",
      "Odon Vallet Scholarship (2024)",
      "UE awards"
    ],
    contactTitle: "Get in Touch",
    contactLead:
      "Interested in discussing chemistry education or collaboration opportunities?",
    contactCta: "Contact Me →"
  },
  vi: {
    title: "Giới thiệu về GV. Cao Trần Ngọc Tú Trinh",
    tagline:
      "Nhà giáo tận tâm với sứ mệnh đổi mới giáo dục hóa học thông qua tư duy khoa học, lập luận logic và phương pháp học tập dựa trên bằng chứng.",
    biography: [
      "GV. Cao Trần Ngọc Tú Trinh đã dành hơn nhiều năm để góp phần đổi mới giáo dục hóa học tại Việt Nam. Với nền tảng vững chắc về nghiên cứu hóa học và khoa học giáo dục, cô kết hợp tư duy khoa học nghiêm ngặt với phương pháp giảng dạy dễ tiếp cận.",
      "Hành trình của cô bắt đầu từ niềm say mê thế giới phân tử và cách các nguyên lý hóa học có thể mở ra lời giải cho những vấn đề thực tiễn. Niềm đam mê ấy dẫn cô theo đuổi các bậc học cao về cả hóa học và giáo dục, bởi dạy học hiệu quả không chỉ đòi hỏi kiến thức chuyên môn mà còn hiểu sâu về cách học của học sinh.",
      "Trong suốt sự nghiệp, GV. Tú Trinh tập trung phát triển các phương pháp giảng dạy đề cao tư duy phản biện thay vì học thuộc lòng. Khi nắm được các quy luật logic đằng sau hiện tượng hóa học, học sinh phát triển năng lực giải quyết vấn đề vượt xa phạm vi lớp học.",
      "Những cách tiếp cận đổi mới của cô được ghi nhận bởi đông đảo quý học sinh phụ huynh; cô tiếp tục dẫn dắt học sinh và trao đổi chuyên sâu với các đồng nghiệp. Mục tiêu của GV. Tú Trinh là khơi dậy một thế hệ người học mới tiếp cận thách thức với tinh thần khoa học và trí tò mò học thuật."
    ],
    teachingPhilosophyTitle: "Quan điểm giảng dạy",
    teachingPillars: [
      {
        title: "Tiếp cận theo nền tảng",
        body:
          "Mọi khái niệm phức tạp đều xây trên nguyên lý đơn giản. Giúp học sinh nắm chắc nền tảng trước khi tiến tới nội dung nâng cao, tạo móng vững cho học tập suốt đời."
      },
      {
        title: "Lập luận dựa trên bằng chứng",
        body:
          "Học sinh học cách bảo vệ kết luận bằng chứng cứ thực nghiệm và lập luận logic — năng lực cốt lõi của tư duy khoa học."
      },
      {
        title: "Học tập phản tư",
        body:
          "Khuyến khích học sinh tự nhìn lại quá trình học, nhận diện ngộ nhận và điều chỉnh hiểu biết — từ đó hình thành sự hiểu sâu bền vững."
      },
      {
        title: "Kết nối thực tiễn",
        body:
          "Luôn gắn kiến thức hóa học với ứng dụng đời sống, giúp học sinh thấy được ý nghĩa của môn học trong cuộc sống và nghề nghiệp tương lai."
      }
    ],
    educationTitle: "Nền tảng học vấn",
    education: [
      {
        degree: "Cử nhân Sư Phạm Hóa học",
        institution: "Đại học Sư phạm Hồ Chí Minh",
        year: "2026",
        focus: "Hóa phân tích và Hóa lý"
      }
    ],
    achievementsTitle: "Thành tựu nổi bật",
    achievements: [
      "Có nhiều năm kinh nghiệm giảng dạy hóa học THPT",
      "Tham gia tích cực phản biện về giáo dục hóa học",
      "Giải Nhất NCKH Khoa Hóa học 2025",
      "Giải Nhất NCKH khoa Hóa học 2024",
      "Giải Ba Olympic Hóa học sinh viên toàn quốc lần thứ XII - 2025",
      "Giải Ba Olympic Hóa học sinh viên toàn quốc lần thứ XI - 2023",
      "Học bổng Odon Vallet 2024",
      "UE awards"
    ],
    contactTitle: "Liên hệ",
    contactLead:
      "Bạn quan tâm thảo luận về giáo dục hóa học hoặc cơ hội hợp tác?",
    contactCta: "Liên hệ →"
  }
};


const About = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = COPY[language];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Top bar with language toggle */}

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">{t.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.tagline}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Biography */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  {language === "vi" ? "Tiểu sử" : "Biography"}
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                {t.biography.map((para, i) => (
                  <p key={i} className="text-foreground leading-relaxed mb-6 last:mb-0">
                    {para}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Teaching Philosophy */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{t.teachingPhilosophyTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {t.teachingPillars.map((p, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-lg mb-3 text-accent">{p.title}</h3>
                      <p className="text-foreground leading-relaxed">{p.body}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">{t.educationTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {t.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4">
                      <h3 className="font-semibold text-primary">{edu.degree}</h3>
                      <p className="text-sm text-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                      <p className="text-xs text-muted-foreground mt-1">{edu.focus}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">{t.achievementsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span className="text-sm text-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-accent/5">
              <CardHeader>
                <CardTitle className="font-serif text-accent">{t.contactTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {t.contactLead}
                </CardDescription>
                <a
                  href="/contact"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  {t.contactCta}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

