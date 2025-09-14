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
    title: "About Dr. Cao Tran Ngoc Tu Trinh",
    tagline:
      "A passionate educator dedicated to transforming chemistry education through scientific thinking, logical reasoning, and evidence-based learning approaches.",
    biography: [
      "Dr. Cao Tran Ngoc Tu Trinh has dedicated over 15 years to revolutionizing chemistry education in Vietnam. With a strong foundation in both chemistry research and educational pedagogy, she brings a unique perspective that combines rigorous scientific thinking with accessible teaching methods.",
      "Her journey began with a deep fascination for the molecular world and how understanding chemical principles could unlock solutions to real-world problems. This passion led her to pursue advanced degrees in both chemistry and education, recognizing that effective teaching requires not just subject expertise, but also a deep understanding of how students learn.",
      "Throughout her career, Dr. Nguyen has focused on developing teaching methodologies that emphasize critical thinking over memorization. She believes that when students understand the logical patterns underlying chemical phenomena, they develop problem-solving skills that extend far beyond the chemistry classroom.",
      "Her innovative approaches have been recognized nationally, and she continues to mentor both students and fellow educators. Dr. Nguyen's ultimate goal is to inspire a new generation of thinkers who approach challenges with scientific rigor and intellectual curiosity."
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
    educationTitle: "Education Background",
    education: [
      {
        degree: "Ph.D. in Chemistry",
        institution: "Hanoi University of Science and Technology",
        year: "2015",
        focus: "Organic Synthesis and Catalysis"
      },
      {
        degree: "M.Sc. in Chemistry Education",
        institution: "Vietnam National University",
        year: "2011",
        focus: "Pedagogical Methods in Science Education"
      },
      {
        degree: "B.Sc. in Chemistry",
        institution: "Hanoi University of Science",
        year: "2009",
        focus: "Analytical and Physical Chemistry"
      }
    ],
    achievementsTitle: "Key Achievements",
    achievements: [
      "15+ years of high school chemistry teaching experience",
      "Published 25+ peer-reviewed articles on chemistry education",
      "Winner of National Excellence in Teaching Award (2020)",
      "Developed innovative curriculum adopted by 50+ schools",
      "Mentor to 200+ students who pursued STEM careers"
    ],
    contactTitle: "Get in Touch",
    contactLead: "Interested in discussing chemistry education or collaboration opportunities?",
    contactCta: "Contact Me →"
  },
  vi: {
    title: "Giới thiệu về TS. Cao Trần Ngọc Tú Trinh",
    tagline:
      "Nhà giáo tận tâm với sứ mệnh đổi mới giáo dục hóa học thông qua tư duy khoa học, lập luận logic và phương pháp học tập dựa trên bằng chứng.",
    biography: [
      "TS. Cao Trần Ngọc Tú Trinh đã dành hơn 15 năm để góp phần đổi mới giáo dục hóa học tại Việt Nam. Với nền tảng vững chắc về nghiên cứu hóa học và khoa học giáo dục, cô kết hợp tư duy khoa học nghiêm ngặt với phương pháp giảng dạy dễ tiếp cận.",
      "Hành trình của cô bắt đầu từ niềm say mê thế giới phân tử và cách các nguyên lý hóa học có thể mở ra lời giải cho những vấn đề thực tiễn. Niềm đam mê ấy dẫn cô theo đuổi các bậc học cao về cả hóa học và giáo dục, bởi dạy học hiệu quả không chỉ đòi hỏi kiến thức chuyên môn mà còn hiểu sâu về cách học của học sinh.",
      "Trong suốt sự nghiệp, TS. Nguyễn tập trung phát triển các phương pháp giảng dạy đề cao tư duy phản biện thay vì học thuộc lòng. Khi nắm được các quy luật logic đằng sau hiện tượng hóa học, học sinh phát triển năng lực giải quyết vấn đề vượt xa phạm vi lớp học.",
      "Những cách tiếp cận đổi mới của cô được ghi nhận ở cấp quốc gia; cô tiếp tục dẫn dắt học sinh và đồng nghiệp. Mục tiêu của TS. Nguyễn là khơi dậy một thế hệ người học mới tiếp cận thách thức với tinh thần khoa học và trí tò mò học thuật."
    ],
    teachingPhilosophyTitle: "Quan điểm giảng dạy",
    teachingPillars: [
      {
        title: "Tiếp cận theo nền tảng",
        body:
          "Mọi khái niệm phức tạp đều xây trên nguyên lý đơn giản. Tôi giúp học sinh nắm chắc nền tảng trước khi tiến tới nội dung nâng cao, tạo móng vững cho học tập suốt đời."
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
        degree: "Tiến sĩ Hóa học",
        institution: "Đại học Bách khoa Hà Nội",
        year: "2015",
        focus: "Tổng hợp hữu cơ và Xúc tác"
      },
      {
        degree: "Thạc sĩ Giáo dục Hóa học",
        institution: "Đại học Quốc gia Việt Nam",
        year: "2011",
        focus: "Phương pháp sư phạm trong giáo dục khoa học"
      },
      {
        degree: "Cử nhân Hóa học",
        institution: "Đại học Khoa học Tự nhiên Hà Nội",
        year: "2009",
        focus: "Hóa phân tích và Hóa lý"
      }
    ],
    achievementsTitle: "Thành tựu nổi bật",
    achievements: [
      "Hơn 15 năm giảng dạy hóa học THPT",
      "25+ bài báo phản biện về giáo dục hóa học",
      "Giải thưởng Nhà giáo Xuất sắc Cấp quốc gia (2020)",
      "Phát triển chương trình đổi mới được 50+ trường áp dụng",
      "Cố vấn cho 200+ học sinh theo đuổi các ngành STEM"
    ],
    contactTitle: "Liên hệ",
    contactLead: "Bạn quan tâm thảo luận về giáo dục hóa học hoặc cơ hội hợp tác?",
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

