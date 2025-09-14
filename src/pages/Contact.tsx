import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Globe } from "lucide-react";
// ⬇️ Adjust the import path to where you placed the LanguageContext
import { useLanguage } from "@/context/language-context";

// If you don't export Language from the context file, it's safe to redeclare here
// type Language = "vi" | "en";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const copy: Record<"vi" | "en", any> = {
  en: {
    pageTitle: "Contact Dr. Cao Tran Ngoc Tu Trinh",
    pageIntro:
      "Ready to begin your chemistry learning journey? Have questions about courses or teaching methods? I'd love to hear from you.",
    sendTitle: "Send a Message",
    sendDesc: "Fill out the form below and I'll get back to you within 24 hours.",
    labels: {
      fullName: "Full Name *",
      emailAddress: "Email Address *",
      phoneNumber: "Phone Number",
      subject: "Subject *",
      message: "Message *",
    },
    placeholders: {
      fullName: "Your full name",
      email: "your.email@example.com",
      phone: "+84 123 456 789",
      subject: "Course inquiry, tutoring, etc.",
      message:
        "Please describe your inquiry, learning goals, or questions about chemistry education...",
    },
    sendBtn: "Send Message",
    toast: {
      title: "Message Sent Successfully",
      desc: "Thank you for your message. I will respond within 24 hours.",
    },
    contactInfoTitle: "Contact Information",
    contact: {
      email: "Email",
      phone: "Phone",
      institution: "Institution",
      location: "Location",
      locationValue: "Hanoi, Vietnam",
    },
    officeHoursTitle: "Office Hours",
    officeHoursDesc: "Available for student consultations and academic discussions",
    officeHours: {
      monFri: "Monday - Friday",
      sat: "Saturday",
      sun: "Sunday",
      byAppt: "By appointment",
      tip:
        "Tip: For urgent questions, email is the fastest way to reach me. I typically respond within 2-4 hours during business days.",
    },
    quickLinksTitle: "Quick Links",
    links: {
      courses: { title: "→ View Current Courses", desc: "See available classes and registration info" },
      resources: { title: "→ Download Study Materials", desc: "Free resources and practice problems" },
      lessons: { title: "→ Browse Lesson Topics", desc: "Explore chemistry topics by difficulty level" },
    },
    responseTimesTitle: "Response Times",
    responseTimes: {
      course: { label: "Course Inquiries", badge: "Same day" },
      academic: { label: "Academic Questions", badge: "Within 24h" },
      collab: { label: "Collaboration Requests", badge: "2-3 days" },
    },
    faqTitle: "Frequently Asked Questions",
    faq: {
      q1: "How do I enroll in a course?",
      a1:
        "Contact me directly via email or phone to discuss your learning goals and find the best course fit. I'll guide you through the enrollment process and answer any questions.",
      q2: "Do you offer one-on-one tutoring?",
      a2:
        "Yes, I provide personalized tutoring sessions tailored to individual learning needs. Contact me to discuss scheduling and specific topics you'd like to focus on.",
      q3: "What is your teaching methodology?",
      a3:
        "I focus on building conceptual understanding through logical reasoning, evidence-based learning, and critical thinking rather than memorization. Each student learns to think like a scientist.",
      q4: "Are online courses available?",
      a4:
        "Yes, I offer both in-person and online courses. Some courses are hybrid format, combining the benefits of face-to-face interaction with online flexibility.",
    },
    langToggle: { btn: "Tiếng Việt", aria: "Switch to Vietnamese" },
    badge: "English",
  },
  vi: {
    pageTitle: "Liên hệ TS. Cao Trần Ngọc Tú Trinh",
    pageIntro:
      "Sẵn sàng bắt đầu hành trình học Hóa học? Có câu hỏi về các khóa học hoặc phương pháp giảng dạy? Tôi rất vui được lắng nghe bạn.",
    sendTitle: "Gửi tin nhắn",
    sendDesc: "Điền vào biểu mẫu bên dưới, tôi sẽ phản hồi trong vòng 24 giờ.",
    labels: {
      fullName: "Họ và tên *",
      emailAddress: "Địa chỉ email *",
      phoneNumber: "Số điện thoại",
      subject: "Chủ đề *",
      message: "Nội dung *",
    },
    placeholders: {
      fullName: "Họ và tên của bạn",
      email: "ban.email@vidu.com",
      phone: "+84 123 456 789",
      subject: "Hỏi về khóa học, gia sư, v.v.",
      message:
        "Vui lòng mô tả nhu cầu, mục tiêu học tập hoặc câu hỏi của bạn về giáo dục hóa học...",
    },
    sendBtn: "Gửi",
    toast: {
      title: "Gửi tin nhắn thành công",
      desc: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong vòng 24 giờ.",
    },
    contactInfoTitle: "Thông tin liên hệ",
    contact: {
      email: "Email",
      phone: "Điện thoại",
      institution: "Đơn vị",
      location: "Địa điểm",
      locationValue: "Hà Nội, Việt Nam",
    },
    officeHoursTitle: "Giờ làm việc",
    officeHoursDesc: "Sẵn sàng tư vấn cho sinh viên và trao đổi học thuật",
    officeHours: {
      monFri: "Thứ Hai - Thứ Sáu",
      sat: "Thứ Bảy",
      sun: "Chủ Nhật",
      byAppt: "Theo lịch hẹn",
      tip:
        "Mẹo: Với các câu hỏi khẩn, email là cách nhanh nhất. Tôi thường phản hồi trong 2–4 giờ vào ngày làm việc.",
    },
    quickLinksTitle: "Liên kết nhanh",
    links: {
      courses: { title: "→ Xem các khóa học hiện có", desc: "Thông tin lớp học và đăng ký" },
      resources: { title: "→ Tải tài liệu học", desc: "Tài nguyên miễn phí và bài tập luyện tập" },
      lessons: { title: "→ Duyệt chủ đề bài học", desc: "Khám phá chủ đề hóa học theo cấp độ" },
    },
    responseTimesTitle: "Thời gian phản hồi",
    responseTimes: {
      course: { label: "Hỏi thông tin khóa học", badge: "Trong ngày" },
      academic: { label: "Câu hỏi học thuật", badge: "Trong 24 giờ" },
      collab: { label: "Yêu cầu hợp tác", badge: "2–3 ngày" },
    },
    faqTitle: "Câu hỏi thường gặp",
    faq: {
      q1: "Đăng ký khóa học như thế nào?",
      a1:
        "Hãy liên hệ trực tiếp qua email hoặc điện thoại để trao đổi mục tiêu học tập và chọn khóa học phù hợp. Tôi sẽ hướng dẫn bạn quy trình đăng ký và giải đáp mọi thắc mắc.",
      q2: "Có dạy kèm 1-1 không?",
      a2:
        "Có, tôi cung cấp các buổi kèm riêng được cá nhân hóa theo nhu cầu từng học viên. Liên hệ để trao đổi lịch và chủ đề bạn muốn tập trung.",
      q3: "Phương pháp giảng dạy của bạn là gì?",
      a3:
        "Tôi chú trọng xây dựng nền tảng khái niệm thông qua tư duy logic, học dựa trên bằng chứng và phản biện thay vì học vẹt. Mỗi học sinh học cách suy nghĩ như một nhà khoa học.",
      q4: "Có khóa học trực tuyến không?",
      a4:
        "Có, tôi cung cấp cả học trực tiếp và trực tuyến. Một số khóa học kết hợp (hybrid) để tận dụng ưu điểm của lớp học và sự linh hoạt trực tuyến.",
    },
    langToggle: { btn: "English", aria: "Chuyển sang tiếng Anh" },
    badge: "Tiếng Việt",
  },
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const { language, toggleLanguage } = useLanguage();
  const t = copy[language];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({ title: t.toast.title, description: t.toast.desc });
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">{t.pageTitle}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.pageIntro}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{t.sendTitle}</CardTitle>
                <CardDescription>{t.sendDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t.labels.fullName}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder={t.placeholders.fullName}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.labels.emailAddress}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder={t.placeholders.email}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">{t.labels.phoneNumber}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.placeholders.phone}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">{t.labels.subject}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder={t.placeholders.subject}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">{t.labels.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder={t.placeholders.message}
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    {t.sendBtn}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Office Hours */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">{t.contactInfoTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📧</span>
                  <div>
                    <p className="font-medium">{t.contact.email}</p>
                    <p className="text-sm text-muted-foreground">hoa.chemistry@school.edu.vn</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📱</span>
                  <div>
                    <p className="font-medium">{t.contact.phone}</p>
                    <p className="text-sm text-muted-foreground">+84 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">🏫</span>
                  <div>
                    <p className="font-medium">{t.contact.institution}</p>
                    <p className="text-sm text-muted-foreground">Hanoi International School</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📍</span>
                  <div>
                    <p className="font-medium">{t.contact.location}</p>
                    <p className="text-sm text-muted-foreground">{t.contact.locationValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">{t.officeHoursTitle}</CardTitle>
                <CardDescription>{t.officeHoursDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{t.officeHours.monFri}</span>
                  <span className="text-sm text-muted-foreground">2:00 PM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{t.officeHours.sat}</span>
                  <span className="text-sm text-muted-foreground">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{t.officeHours.sun}</span>
                  <span className="text-sm text-muted-foreground">{t.officeHours.byAppt}</span>
                </div>
                <div className="mt-4 p-3 bg-accent/5 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    💡 <strong>Tip:</strong> {t.officeHours.tip}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">{t.quickLinksTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <a href="/courses" className="text-accent hover:text-accent/80 font-medium text-sm block">
                    {t.links.courses.title}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">{t.links.courses.desc}</p>
                </div>
                <div>
                  <a href="/resources" className="text-accent hover:text-accent/80 font-medium text-sm block">
                    {t.links.resources.title}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">{t.links.resources.desc}</p>
                </div>
                <div>
                  <a href="/lessons" className="text-accent hover:text-accent/80 font-medium text-sm block">
                    {t.links.lessons.title}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">{t.links.lessons.desc}</p>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="bg-accent/5">
              <CardHeader>
                <CardTitle className="font-serif text-accent">{t.responseTimesTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t.responseTimes.course.label}</span>
                  <Badge variant="outline" className="text-xs">{t.responseTimes.course.badge}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t.responseTimes.academic.label}</span>
                  <Badge variant="outline" className="text-xs">{t.responseTimes.academic.badge}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t.responseTimes.collab.label}</span>
                  <Badge variant="outline" className="text-xs">{t.responseTimes.collab.badge}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">{t.faqTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2 text-accent">{t.faq.q1}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.faq.a1}</p>

                  <h3 className="font-semibold mb-2 text-accent">{t.faq.q2}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.faq.a2}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-accent">{t.faq.q3}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.faq.a3}</p>

                  <h3 className="font-semibold mb-2 text-accent">{t.faq.q4}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.faq.a4}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

