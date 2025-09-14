import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/language-context";

// --- Types

type LocaleString = { vi: string; en: string };
type Level = "basic" | "intermediate" | "advanced";

interface Course {
  title: LocaleString;
  description: LocaleString;
  duration: LocaleString;
  schedule: LocaleString;
  level: Level;
  spotsText?: LocaleString; // for current courses
  price?: LocaleString; // for current courses & workshops
  startDate?: LocaleString;
  registrationOpens?: LocaleString; // for upcoming
  format: LocaleString;
  topics: LocaleString[];
}

interface Workshop {
  title: LocaleString;
  description: LocaleString;
  duration: LocaleString;
  date: LocaleString;
  time: LocaleString;
  price: LocaleString;
  spots: LocaleString; // capacity text
  format: LocaleString;
}

const levelLabel: Record<Level, LocaleString> = {
  basic: { vi: "Cơ bản", en: "Basic" },
  intermediate: { vi: "Trung cấp", en: "Intermediate" },
  advanced: { vi: "Nâng cao", en: "Advanced" },
};

const ui = {
  headerTitle: { vi: "Khóa học & Chương trình", en: "Courses & Programs" },
  headerDesc: {
    vi: "Các chương trình học được thiết kế để xây dựng nền tảng vững chắc về hóa học thông qua tư duy logic, phản biện và cách tiếp cận dựa trên bằng chứng.",
    en: "Structured learning programs designed to build deep understanding of chemistry through logical progression, critical thinking, and evidence‑based approaches.",
  },
  tabs: {
    current: { vi: "Khóa học hiện tại", en: "Current Courses" },
    upcoming: { vi: "Sắp khai giảng", en: "Upcoming Courses" },
    workshops: { vi: "Hội thảo", en: "Workshops" },
  },
  labels: {
    duration: { vi: "Thời lượng", en: "Duration" },
    schedule: { vi: "Lịch học", en: "Schedule" },
    startDate: { vi: "Ngày bắt đầu", en: "Start Date" },
    format: { vi: "Hình thức", en: "Format" },
    price: { vi: "Học phí", en: "Price" },
    topics: { vi: "Chủ đề", en: "Course Topics" },
    registrationOpens: { vi: "Mở đăng ký", en: "Registration Opens" },
    date: { vi: "Ngày", en: "Date" },
    time: { vi: "Thời gian", en: "Time" },
    capacity: { vi: "Số lượng", en: "Capacity" },
  },
  cta: {
    registerNow: { vi: "Đăng ký ngay", en: "Register Now" },
    learnMore: { vi: "Tìm hiểu thêm", en: "Learn More" },
    getNotified: { vi: "Nhận thông báo", en: "Get Notified" },
    registerWorkshop: { vi: "Đăng ký hội thảo", en: "Register for Workshop" },
    langToggle: { vi: "EN", en: "VI" },
  },
  benefitsTitle: { vi: "Vì sao chọn khóa học của tôi?", en: "Why Choose My Courses?" },
  benefits: [
    {
      icon: "🎯",
      title: { vi: "Lộ trình bài bản", en: "Structured Learning" },
      desc: {
        vi: "Tiến trình có hệ thống từ nền tảng đến nâng cao",
        en: "Systematic progression from fundamentals to advanced concepts",
      },
    },
    {
      icon: "👥",
      title: { vi: "Sĩ số nhỏ", en: "Small Class Sizes" },
      desc: {
        vi: "Tương tác cao và quan tâm cá nhân hóa",
        en: "Personalized attention and interactive learning environment",
      },
    },
    {
      icon: "🔬",
      title: { vi: "Thực hành", en: "Hands‑On Practice" },
      desc: {
        vi: "Thực nghiệm và giải bài tập thực tiễn",
        en: "Laboratory work and practical problem‑solving sessions",
      },
    },
    {
      icon: "📈",
      title: { vi: "Hiệu quả đã kiểm chứng", en: "Proven Results" },
      desc: {
        vi: "Tỉ lệ đỗ đại học và thành tích cao",
        en: "High success rates in university admissions and exams",
      },
    },
  ],
};

const currentCourses: Course[] = [
  {
    title: {
      vi: "Hóa hữu cơ & Nhiệt động nâng cao – Luyện thi đại học",
      en: "Advanced Chemistry for University Preparation",
    },
    description: {
      vi: "Khóa học toàn diện về hữu cơ, nhiệt động học, động học phản ứng với trọng tâm ôn thi đại học.",
      en: "Comprehensive course covering organic chemistry, thermodynamics, and kinetics with university entrance exam focus.",
    },
    duration: { vi: "16 tuần", en: "16 weeks" },
    schedule: { vi: "Thứ 3 & Thứ 5, 19:00–21:00", en: "Tuesdays & Thursdays, 7:00–9:00 PM" },
    level: "advanced",
    spotsText: { vi: "Còn 12 chỗ", en: "12 spots remaining" },
    price: { vi: "8.500.000 VND", en: "8,500,000 VND" },
    startDate: { vi: "15/04/2024", en: "April 15, 2024" },
    format: { vi: "Học trực tiếp & Trực tuyến (Hybrid)", en: "In‑person & Online Hybrid" },
    topics: [
      { vi: "Hữu cơ", en: "Organic Chemistry" },
      { vi: "Nhiệt động học", en: "Thermodynamics" },
      { vi: "Động học", en: "Kinetics" },
      { vi: "Điện hóa", en: "Electrochemistry" },
      { vi: "Chiến lược làm bài", en: "Exam Strategies" },
    ],
  },
  {
    title: { vi: "Nền tảng Hóa học tăng cường", en: "Chemistry Fundamentals Intensive" },
    description: {
      vi: "Xây nền tảng vững chắc về cấu tạo nguyên tử, liên kết và hệ số phản ứng qua học tập tương tác.",
      en: "Building strong foundations in atomic structure, bonding, and stoichiometry through interactive learning.",
    },
    duration: { vi: "12 tuần", en: "12 weeks" },
    schedule: { vi: "Thứ 7, 09:00–12:00", en: "Saturdays, 9:00 AM–12:00 PM" },
    level: "basic",
    spotsText: { vi: "Còn 8 chỗ", en: "8 spots remaining" },
    price: { vi: "5.200.000 VND", en: "5,200,000 VND" },
    startDate: { vi: "20/04/2024", en: "April 20, 2024" },
    format: { vi: "Học trực tiếp", en: "In‑person" },
    topics: [
      { vi: "Cấu tạo nguyên tử", en: "Atomic Structure" },
      { vi: "Liên kết hóa học", en: "Chemical Bonding" },
      { vi: "Tính toán hóa học", en: "Stoichiometry" },
      { vi: "Định luật khí", en: "Gas Laws" },
      { vi: "Dung dịch", en: "Solutions" },
    ],
  },
];

const upcomingCourses: Course[] = [
  {
    title: { vi: "Phương pháp Nghiên cứu Hóa học", en: "Research Methods in Chemistry" },
    description: {
      vi: "Nhập môn nghiên cứu khoa học, phân tích dữ liệu và thiết kế thí nghiệm cho sinh viên yêu thích hóa học.",
      en: "Introduction to scientific research, data analysis, and experimental design for aspiring chemistry students.",
    },
    duration: { vi: "8 tuần", en: "8 weeks" },
    schedule: { vi: "Cuối tuần, 14:00–17:00", en: "Weekends, 2:00–5:00 PM" },
    level: "advanced",
    registrationOpens: { vi: "01/05/2024", en: "May 1, 2024" },
    startDate: { vi: "15/06/2024", en: "June 15, 2024" },
    format: { vi: "Học trực tiếp", en: "In‑person" },
    topics: [
      { vi: "Thiết kế nghiên cứu", en: "Research Design" },
      { vi: "Phân tích dữ liệu", en: "Data Analysis" },
      { vi: "Tổng quan tài liệu", en: "Literature Review" },
      { vi: "Viết khoa học", en: "Scientific Writing" },
      { vi: "Kỹ thuật phòng thí nghiệm", en: "Lab Techniques" },
    ],
  },
  {
    title: { vi: "Ứng dụng Hóa học Môi trường", en: "Environmental Chemistry Applications" },
    description: {
      vi: "Khai thác các nguyên lý hóa học trong môi trường: ô nhiễm, chất lượng không khí & nước, và giải pháp xanh.",
      en: "Exploring chemical principles in environmental contexts, from pollution to green chemistry solutions.",
    },
    duration: { vi: "10 tuần", en: "10 weeks" },
    schedule: { vi: "Thứ 2 & Thứ 4, 18:30–20:30", en: "Mondays & Wednesdays, 6:30–8:30 PM" },
    level: "intermediate",
    registrationOpens: { vi: "01/06/2024", en: "June 1, 2024" },
    startDate: { vi: "10/07/2024", en: "July 10, 2024" },
    format: { vi: "Trực tuyến", en: "Online" },
    topics: [
      { vi: "Chất lượng không khí", en: "Air Quality" },
      { vi: "Hóa học nước", en: "Water Chemistry" },
      { vi: "Hóa học xanh", en: "Green Chemistry" },
      { vi: "Bền vững", en: "Sustainability" },
      { vi: "Phân tích môi trường", en: "Environmental Analysis" },
    ],
  },
  {
    title: { vi: "Hóa học chuẩn bị Y khoa", en: "Chemistry for Medical School Preparation" },
    description: {
      vi: "Chuẩn bị chuyên sâu cho kỳ thi vào Y khoa, tập trung Sinh hóa và Hữu cơ.",
      en: "Specialized preparation for medical school entrance exams with focus on biochemistry and organic chemistry.",
    },
    duration: { vi: "20 tuần", en: "20 weeks" },
    schedule: { vi: "Thứ 6 & Chủ nhật, 13:00–16:00", en: "Fridays & Sundays, 1:00–4:00 PM" },
    level: "advanced",
    registrationOpens: { vi: "15/07/2024", en: "July 15, 2024" },
    startDate: { vi: "01/09/2024", en: "September 1, 2024" },
    format: { vi: "Học trực tiếp & Trực tuyến (Hybrid)", en: "In‑person & Online Hybrid" },
    topics: [
      { vi: "Sinh hóa", en: "Biochemistry" },
      { vi: "Hữu cơ", en: "Organic Chemistry" },
      { vi: "Ứng dụng y khoa", en: "Medical Applications" },
      { vi: "Kỹ thuật làm bài", en: "Exam Techniques" },
      { vi: "Liên hệ lâm sàng", en: "Clinical Connections" },
    ],
  },
];

const workshops: Workshop[] = [
  {
    title: { vi: "An toàn & Kỹ thuật Phòng thí nghiệm", en: "Laboratory Safety & Techniques Workshop" },
    description: {
      vi: "Thực hành các nguyên tắc an toàn và kỹ thuật cơ bản trong phòng thí nghiệm.",
      en: "Hands‑on workshop covering essential laboratory safety protocols and basic techniques.",
    },
    duration: { vi: "1 ngày", en: "1 day" },
    date: { vi: "30/04/2024", en: "April 30, 2024" },
    time: { vi: "09:00 – 16:00", en: "9:00 AM – 4:00 PM" },
    price: { vi: "750.000 VND", en: "750,000 VND" },
    spots: { vi: "Tối đa 15 người", en: "15 participants max" },
    format: { vi: "Học trực tiếp", en: "In‑person" },
  },
  {
    title: { vi: "Chiến lược Giải bài tập Hóa học", en: "Chemical Problem‑Solving Strategies" },
    description: {
      vi: "Khoá tăng cường về phương pháp tiếp cận hệ thống để giải quyết bài toán hóa học phức tạp.",
      en: "Intensive workshop on systematic approaches to solving complex chemistry problems.",
    },
    duration: { vi: "2 ngày", en: "2 days" },
    date: { vi: "18–19/05/2024", en: "May 18–19, 2024" },
    time: { vi: "10:00 – 15:00", en: "10:00 AM – 3:00 PM" },
    price: { vi: "1.200.000 VND", en: "1,200,000 VND" },
    spots: { vi: "Tối đa 20 người", en: "20 participants max" },
    format: { vi: "Học trực tiếp", en: "In‑person" },
  },
  {
    title: { vi: "Phỏng vấn Đại học cho Sinh viên Hóa học", en: "University Interview Preparation for Chemistry Students" },
    description: {
      vi: "Chuẩn bị phỏng vấn với trọng tâm kiến thức hóa học và kỹ năng giao tiếp.",
      en: "Preparation for university interviews with focus on chemistry knowledge and communication skills.",
    },
    duration: { vi: "1 ngày", en: "1 day" },
    date: { vi: "08/06/2024", en: "June 8, 2024" },
    time: { vi: "13:00 – 18:00", en: "1:00 PM – 6:00 PM" },
    price: { vi: "600.000 VND", en: "600,000 VND" },
    spots: { vi: "Tối đa 12 người", en: "12 participants max" },
    format: { vi: "Học trực tiếp", en: "In‑person" },
  },
];

const Courses = () => {
  const { language, toggleLanguage } = useLanguage();
  const L = language; // shorthand

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="text-left w-full">
            <h1 className="text-4xl font-serif font-bold text-primary mb-6">{ui.headerTitle[L]}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {ui.headerDesc[L]}
            </p>
          </div>
        </div>

        {/* Course Categories */}
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="current">{ui.tabs.current[L]}</TabsTrigger>
            <TabsTrigger value="upcoming">{ui.tabs.upcoming[L]}</TabsTrigger>
            <TabsTrigger value="workshops">{ui.tabs.workshops[L]}</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <div className="grid md:grid-cols-2 gap-8">
              {currentCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <Badge
                        variant={
                          course.level === "basic"
                            ? "secondary"
                            : course.level === "intermediate"
                            ? "outline"
                            : "default"
                        }
                      >
                        {levelLabel[course.level][L]}
                      </Badge>
                      {course.spotsText && (
                        <span className="text-sm text-accent font-medium">{course.spotsText[L]}</span>
                      )}
                    </div>
                    <CardTitle className="font-serif text-xl">{course.title[L]}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {course.description[L]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.duration[L]}:</span>
                        <span className="font-medium">{course.duration[L]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.schedule[L]}:</span>
                        <span className="font-medium text-right">{course.schedule[L]}</span>
                      </div>
                      {course.startDate && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{ui.labels.startDate[L]}:</span>
                          <span className="font-medium">{course.startDate[L]}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.format[L]}:</span>
                        <span className="font-medium">{course.format[L]}</span>
                      </div>
                      {course.price && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{ui.labels.price[L]}:</span>
                          <span className="font-bold text-accent">{course.price[L]}</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">{ui.labels.topics[L]}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {topic[L]}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-accent hover:bg-accent/90">
                        {ui.cta.registerNow[L]}
                      </Button>
                      <Button variant="outline">{ui.cta.learnMore[L]}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge
                      variant={
                        course.level === "basic"
                          ? "secondary"
                          : course.level === "intermediate"
                          ? "outline"
                          : "default"
                      }
                      className="w-fit mb-3"
                    >
                      {levelLabel[course.level][L]}
                    </Badge>
                    <CardTitle className="font-serif text-lg">{course.title[L]}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {course.description[L]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.duration[L]}:</span>
                        <span className="font-medium">{course.duration[L]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.schedule[L]}:</span>
                        <span className="font-medium text-right text-xs">{course.schedule[L]}</span>
                      </div>
                      {course.registrationOpens && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{ui.labels.registrationOpens[L]}:</span>
                          <span className="font-medium text-accent text-xs">{course.registrationOpens[L]}</span>
                        </div>
                      )}
                      {course.startDate && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{ui.labels.startDate[L]}:</span>
                          <span className="font-medium text-xs">{course.startDate[L]}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.format[L]}:</span>
                        <span className="font-medium text-xs">{course.format[L]}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">{ui.labels.topics[L]}:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {topic[L]}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      {ui.cta.getNotified[L]}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workshops">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((w, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">{w.title[L]}</CardTitle>
                    <CardDescription className="leading-relaxed">{w.description[L]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.duration[L]}:</span>
                        <span className="font-medium">{w.duration[L]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.date[L]}:</span>
                        <span className="font-medium">{w.date[L]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.time[L]}:</span>
                        <span className="font-medium text-xs">{w.time[L]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.price[L]}:</span>
                        <span className="font-bold text-accent">{w.price[L]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.capacity[L]}:</span>
                        <span className="font-medium text-xs">{w.spots[L]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{ui.labels.format[L]}:</span>
                        <span className="font-medium">{w.format[L]}</span>
                      </div>
                    </div>

                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                      {ui.cta.registerWorkshop[L]}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Course Benefits Section */}
        <div className="mt-16 bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">{ui.benefitsTitle[L]}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ui.benefits.map((b, i) => (
              <div className="text-center" key={i}>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{b.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{b.title[L]}</h3>
                <p className="text-sm text-muted-foreground">{b.desc[L]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

