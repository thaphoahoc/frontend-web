import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language-context";


const Footer = () => {
  const { language, toggleLanguage } = useLanguage();


  const content = {
    vi: {
      title: "Cô Cao Trinh",
      description:
        "Tận tâm thúc đẩy tư duy khoa học và phản biện thông qua giáo dục hóa học. Xây dựng nền tảng vững chắc cho thế hệ nhà khoa học tiếp theo.",
      links: {
        lessons: "Bài học Hóa học",
        resources: "Tài nguyên học tập",
        courses: "Khóa học hiện tại",
        blog: "Blog giáo dục",
      },
      contact: {
        email: "📧 caotrinh@thaphoahoc.edu.vn",
        phone: "📱 +84 847 053 281",
        org: "🏫 Trường Đại học Sư phạm TP.HCM",
        city: "📍 TP. Hồ Chí Minh, Việt Nam",
      },
      copyright:
        "© 2024 Cô Cao Trinh. Bảo lưu mọi quyền. Trao quyền tư duy qua giáo dục hóa học.",
    },
    en: {
      title: "Ms. Cao T. N. T. Trinh",
      description:
        "Dedicated to fostering scientific thinking and critical reflection through chemistry education. Building strong foundations for the next generation of scientists.",
      links: {
        lessons: "Chemistry Lessons",
        resources: "Study Resources",
        courses: "Current Courses",
        blog: "Educational Blog",
      },
      contact: {
        email: "📧 caotrinh@thaphoahoc.edu.vn",
        phone: "📱 +84 847 053 281",
        org: "🏫 Ho Chi Minh University of Education",
        city: "📍 Ho Chi Minh, Vietnam",
      },
      copyright:
        "© 2024 Ms. cao T. N. T. Trinh. All rights reserved. Empowering minds through chemistry education.",
    },
  };

  const t = content[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-serif font-semibold mb-4">{t.title}</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              {t.description}
            </p>
            <div className="flex space-x-4">
              {/* Social icons */}
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69..." />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/lessons" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.links.lessons}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.links.resources}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.links.courses}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.links.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t.contact.email}</li>
              <li>{t.contact.phone}</li>
              <li>{t.contact.org}</li>
              <li>{t.contact.city}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

