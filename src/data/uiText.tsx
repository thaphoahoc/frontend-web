import type { I18nText } from "@/types/i18n";

export const categories: readonly I18nText[] = [
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

export const uiText = {
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

export const featuredTopics = [
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

export const recentDiscussions = [
  { name: { en: "Dr. Tran", vi: "TS. Trần" }, post: { en: "Assessment Strategies That Promote Deep Learning", vi: "Đánh giá thúc đẩy học sâu" } },
  { name: { en: "Ms. Linh", vi: "Cô Linh" }, post: { en: "The Role of Failure in Scientific Learning", vi: "Vai trò của thất bại trong học tập khoa học" } },
  { name: { en: "Prof. Minh", vi: "PGS. Minh" }, post: { en: "Beyond Memorization: Building Conceptual Understanding", vi: "Vượt qua học vẹt: Xây dựng hiểu biết khái niệm" } },
] as const;

