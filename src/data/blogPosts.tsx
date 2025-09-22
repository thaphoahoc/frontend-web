import type { I18nText } from "@/types/i18n";

export type BlogPost = {
    title: I18nText;
    excerpt: I18nText;
    dateISO: string;
    readTime: I18nText;
    category: I18nText;
    tags: I18nText[];
};

export const blogPosts: readonly BlogPost[] = [
    {
        title: {
            en: "Visual Learning Tools in Chemistry Teaching: Enhancing Memory, Logic, and Engagement",
            vi: "Phương tiện trực quan trong dạy học Hóa học: Ghi nhớ, tư duy logic và hứng thú",
        },
        excerpt: {
            en: "Visual methods make abstract chemical concepts easier to grasp, strengthen logical thinking, boost engagement, and foster imagination. This article explores roles, tools, and applications for effective chemistry teaching.",
            vi: "Phương pháp trực quan giúp làm rõ các khái niệm trừu tượng trong Hóa học, phát triển tư duy logic, tăng hứng thú và khơi gợi trí tưởng tượng. Bài viết này trình bày vai trò, công cụ và ứng dụng trong dạy học Hóa học hiệu quả.",
        },
        dateISO: "2025-09-22",
        readTime: { en: "15 min read", vi: "Đọc 15 phút" },
        category: { en: "Teaching Methods", vi: "Phương pháp dạy học" },
        tags: [
            { en: "Visual Learning", vi: "Học trực quan" },
            { en: "Chemistry Education", vi: "Giáo dục Hóa học" },
            { en: "Digital Tools", vi: "Công cụ số" },
            { en: "Canva", vi: "Canva" },
            { en: "PowerPoint", vi: "PowerPoint" },
            { en: "PhET Simulations", vi: "Mô phỏng PhET" },
            { en: "CapCut", vi: "CapCut" }
        ]
    },

    {
        title: {
            en: "Interactive Computer-Based Teaching in Chemistry (ICT): Why It Matters & How to Do It",
            vi: "Ứng dụng CNTT trong dạy học Hóa học: Vì sao quan trọng và cách triển khai",
        },
        excerpt: {
            en: "ICT makes abstract chemistry visible, safer to practice, and more engaging—while aligning with modern curricula. This guide shows the why, what, and how.",
            vi: "CNTT giúp trực quan hoá kiến thức Hoá học, thực hành an toàn và tăng hứng thú, đồng thời phù hợp với chương trình hiện đại. Bài viết này hướng dẫn lý do, nội dung và cách triển khai.",
        },
        dateISO: "2025-09-15",
        readTime: { en: "12 min read", vi: "Đọc 12 phút" },
        category: { en: "Teaching Methods", vi: "Phương pháp dạy học" },
        tags: [
            { en: "ICT", vi: "CNTT" },
            { en: "Virtual Labs", vi: "Thí nghiệm ảo" },
            { en: "AR/VR", vi: "AR/VR" },
            { en: "TPACK", vi: "TPACK" },
            { en: "LMS", vi: "LMS" },
        ],
    },


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

