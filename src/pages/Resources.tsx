import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/language-context"; // adjust path as needed
import { useMemo } from "react";

// small translator helper
function tr<T extends Record<string, string>>(m: T, lang: "en" | "vi") {
  return m[lang] ?? m.en;
}

const uiText = {
  pageTitle: { en: "Study Resources", vi: "Tài nguyên học tập" },
  pageSubtitle: {
    en: "Carefully curated study materials, practice problems, and visual aids designed to reinforce conceptual understanding and develop problem-solving skills.",
    vi: "Tổng hợp tài liệu học tập, bài tập luyện và công cụ trực quan nhằm củng cố hiểu biết khái niệm và phát triển kỹ năng giải quyết vấn đề.",
  },
  tabs: {
    guides: { en: "Study Guides", vi: "Tài liệu học" },
    problems: { en: "Practice Problems", vi: "Bài tập luyện" },
    mindmaps: { en: "Mind Maps", vi: "Sơ đồ tư duy" },
    labs: { en: "Lab Procedures", vi: "Thực hành thí nghiệm" },
  },
  format: { en: "Format", vi: "Định dạng" },
  pages: { en: "pages", vi: "trang" },
  problemsCount: { en: "problems", vi: "bài" },
  downloads: { en: "downloads", vi: "lượt tải" },
  download: { en: "Download", vi: "Tải về" },
  downloadPdf: { en: "Download PDF", vi: "Tải PDF" },
  solutionsIncluded: { en: "Solutions Included", vi: "Kèm lời giải" },
  coveredTopics: { en: "Covered Topics:", vi: "Chủ đề bao quát:" },
  includes: { en: "Includes:", vi: "Bao gồm:" },
  usageTitle: { en: "How to Use These Resources", vi: "Cách sử dụng bộ tài nguyên" },
  sysStudy: { en: "Study Systematically", vi: "Học có hệ thống" },
  sysStudyDesc: { en: "Use guides to build understanding before practicing", vi: "Dùng tài liệu để xây nền tảng trước khi luyện tập" },
  pracReg: { en: "Practice Regularly", vi: "Luyện tập đều đặn" },
  pracRegDesc: { en: "Work through problems consistently to reinforce concepts", vi: "Giải bài đều để củng cố khái niệm" },
  visualize: { en: "Visualize Connections", vi: "Hình dung mối liên hệ" },
  visualizeDesc: { en: "Use mind maps to see relationships between concepts", vi: "Dùng sơ đồ tư duy để thấy quan hệ giữa các khái niệm" },
  apply: { en: "Apply Knowledge", vi: "Vận dụng kiến thức" },
  applyDesc: { en: "Use lab procedures to connect theory with practice", vi: "Dùng quy trình thí nghiệm để nối lý thuyết với thực hành" },
} as const;

const studyGuides = [
  {
    title: { en: "Periodic Table Trends Study Guide", vi: "Hướng dẫn xu hướng bảng tuần hoàn" },
    description: {
      en: "Comprehensive guide covering atomic radius, ionization energy, electronegativity, and their patterns.",
      vi: "Tài liệu bao quát bán kính nguyên tử, năng lượng ion hoá, độ âm điện và các quy luật của chúng.",
    },
    pages: 12,
    format: "PDF",
    level: { en: "Basic", vi: "Cơ bản" },
    downloads: 1250,
  },
  {
    title: { en: "Chemical Bonding Quick Reference", vi: "Tóm tắt nhanh liên kết hoá học" },
    description: {
      en: "Visual guide to ionic, covalent, and metallic bonding with examples and practice problems.",
      vi: "Tài liệu trực quan về liên kết ion, cộng hoá trị, kim loại kèm ví dụ và bài luyện.",
    },
    pages: 8,
    format: "PDF",
    level: { en: "Basic", vi: "Cơ bản" },
    downloads: 980,
  },
  {
    title: { en: "Equilibrium Calculations Workbook", vi: "Sổ bài tập tính toán cân bằng" },
    description: {
      en: "Step-by-step approaches to Kc, Kp, and ICE table problems with detailed solutions.",
      vi: "Hướng dẫn từng bước giải bài Kc, Kp và bảng ICE kèm lời giải chi tiết.",
    },
    pages: 24,
    format: "PDF",
    level: { en: "Advanced", vi: "Nâng cao" },
    downloads: 756,
  },
  {
    title: { en: "Organic Chemistry Reaction Summary", vi: "Tóm lược phản ứng Hoá hữu cơ" },
    description: {
      en: "Organized compilation of major organic reactions with mechanisms and conditions.",
      vi: "Tổng hợp hệ thống các phản ứng hữu cơ chính kèm cơ chế và điều kiện.",
    },
    pages: 18,
    format: "PDF",
    level: { en: "Advanced", vi: "Nâng cao" },
    downloads: 643,
  },
] as const;

const practiceProblems = [
  {
    title: { en: "Stoichiometry Problem Set A", vi: "Bộ bài tập A về tính toán hoá học" },
    description: {
      en: "25 progressive problems covering mole calculations, limiting reagents, and percent yield.",
      vi: "25 bài tăng dần độ khó về mol, chất giới hạn và hiệu suất phản ứng.",
    },
    problems: 25,
    format: "PDF",
    level: { en: "Basic", vi: "Cơ bản" },
    hasSolutions: true,
  },
  {
    title: { en: "Gas Laws Practice Problems", vi: "Bài tập luyện các định luật chất khí" },
    description: {
      en: "Comprehensive problem set covering Boyle's, Charles's, Gay-Lussac's, and combined gas laws.",
      vi: "Bộ bài tập bao quát Boyle, Charles, Gay-Lussac và định luật khí tổng hợp.",
    },
    problems: 30,
    format: "PDF",
    level: { en: "Basic", vi: "Cơ bản" },
    hasSolutions: true,
  },
  {
    title: { en: "Acid-Base Equilibrium Problems", vi: "Bài tập cân bằng axit–bazơ" },
    description: {
      en: "Challenging problems involving weak acids, bases, buffers, and titration calculations.",
      vi: "Bài tập thử thách về axit, bazơ yếu, dung dịch đệm và tính toán chuẩn độ.",
    },
    problems: 20,
    format: "PDF",
    level: { en: "Advanced", vi: "Nâng cao" },
    hasSolutions: true,
  },
  {
    title: { en: "Electrochemistry Problem Bank", vi: "Ngân hàng bài tập điện hoá" },
    description: {
      en: "Problems covering cell potentials, Nernst equation, and electrolysis calculations.",
      vi: "Bài tập về suất điện động pin, phương trình Nernst và tính toán điện phân.",
    },
    problems: 18,
    format: "PDF",
    level: { en: "Advanced", vi: "Nâng cao" },
    hasSolutions: true,
  },
] as const;

const mindMaps = [
  {
    title: { en: "Chemical Bonding Mind Map", vi: "Sơ đồ tư duy liên kết hoá học" },
    description: {
      en: "Visual representation of ionic, covalent, and metallic bonding relationships.",
      vi: "Biểu diễn trực quan mối quan hệ giữa liên kết ion, cộng hoá trị và kim loại.",
    },
    format: "PNG/PDF",
    level: { en: "Basic", vi: "Cơ bản" },
    topics: [
      { en: "Ionic Bonds", vi: "Liên kết ion" },
      { en: "Covalent Bonds", vi: "Liên kết cộng hoá trị" },
      { en: "Metallic Bonds", vi: "Liên kết kim loại" },
      { en: "Intermolecular Forces", vi: "Lực tương tác giữa các phân tử" },
    ],
  },
  {
    title: { en: "Organic Functional Groups Map", vi: "Sơ đồ nhóm chức hữu cơ" },
    description: {
      en: "Comprehensive overview of functional groups, their properties, and reactions.",
      vi: "Tổng quan nhóm chức, tính chất và phản ứng đặc trưng.",
    },
    format: "PNG/PDF",
    level: { en: "Advanced", vi: "Nâng cao" },
    topics: [
      { en: "Alcohols", vi: "Ancol" },
      { en: "Aldehydes", vi: "Anđehit" },
      { en: "Ketones", vi: "Xeton" },
      { en: "Carboxylic Acids", vi: "Axit cacboxylic" },
      { en: "Esters", vi: "Este" },
    ],
  },
  {
    title: { en: "Thermodynamics Concept Map", vi: "Sơ đồ khái niệm nhiệt động lực học" },
    description: {
      en: "Connections between enthalpy, entropy, Gibbs free energy, and spontaneity.",
      vi: "Mối liên hệ giữa entanpi, entropi, năng lượng tự do Gibbs và tính tự diễn biến.",
    },
    format: "PNG/PDF",
    level: { en: "Advanced", vi: "Nâng cao" },
    topics: [
      { en: "Enthalpy", vi: "Entanpi" },
      { en: "Entropy", vi: "Entropi" },
      { en: "Gibbs Free Energy", vi: "Năng lượng tự do Gibbs" },
      { en: "Spontaneity", vi: "Tính tự diễn biến" },
    ],
  },
] as const;

const labProcedures = [
  {
    title: { en: "Titration Procedures & Safety", vi: "Chuẩn độ: Quy trình & an toàn" },
    description: {
      en: "Complete protocols for acid-base titrations with safety guidelines and data analysis.",
      vi: "Quy trình đầy đủ cho chuẩn độ axit–bazơ kèm hướng dẫn an toàn và phân tích dữ liệu.",
    },
    format: "PDF",
    pages: 15,
    includes: [
      { en: "Safety Protocol", vi: "Quy trình an toàn" },
      { en: "Equipment Setup", vi: "Lắp đặt thiết bị" },
      { en: "Data Collection", vi: "Thu thập dữ liệu" },
      { en: "Analysis", vi: "Phân tích" },
    ],
  },
  {
    title: { en: "Crystallization Lab Guide", vi: "Hướng dẫn kết tinh" },
    description: {
      en: "Step-by-step procedure for purifying compounds through recrystallization.",
      vi: "Quy trình từng bước tinh chế chất bằng kết tinh lại.",
    },
    format: "PDF",
    pages: 10,
    includes: [
      { en: "Theory", vi: "Cơ sở lý thuyết" },
      { en: "Procedure", vi: "Quy trình" },
      { en: "Troubleshooting", vi: "Xử lý sự cố" },
      { en: "Report Template", vi: "Mẫu báo cáo" },
    ],
  },
  {
    title: { en: "Spectrophotometry Analysis", vi: "Phân tích phổ hấp thụ UV-Vis" },
    description: {
      en: "UV-Vis spectrophotometry procedures for quantitative analysis.",
      vi: "Quy trình quang phổ UV-Vis cho phân tích định lượng.",
    },
    format: "PDF",
    pages: 12,
    includes: [
      { en: "Instrument Setup", vi: "Thiết lập thiết bị" },
      { en: "Calibration", vi: "Hiệu chuẩn" },
      { en: "Sample Prep", vi: "Chuẩn bị mẫu" },
      { en: "Calculations", vi: "Tính toán" },
    ],
  },
] as const;

export default function Resources() {
  const { language } = useLanguage();

  const numberFmt = useMemo(
    () => new Intl.NumberFormat(language === "vi" ? "vi-VN" : "en-US"),
    [language]
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">{tr(uiText.pageTitle, language)}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {tr(uiText.pageSubtitle, language)}
          </p>
        </div>

        {/* Resource Categories */}
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="guides">{tr(uiText.tabs.guides, language)}</TabsTrigger>
            <TabsTrigger value="problems">{tr(uiText.tabs.problems, language)}</TabsTrigger>
            <TabsTrigger value="mindmaps">{tr(uiText.tabs.mindmaps, language)}</TabsTrigger>
            <TabsTrigger value="labs">{tr(uiText.tabs.labs, language)}</TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid md:grid-cols-2 gap-6">
              {studyGuides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={tr(guide.level, language) === (uiText.tabs.guides.en ? "Basic" : "Cơ bản") ? "secondary" : "default"}>
                        {tr(guide.level, language)}
                      </Badge>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{guide.pages} {tr(uiText.pages, language)}</div>
                        <div>{numberFmt.format(guide.downloads)} {tr(uiText.downloads, language)}</div>
                      </div>
                    </div>
                    <CardTitle className="font-serif">{tr(guide.title, language)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {tr(guide.description, language)}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-muted px-2 py-1 rounded">{guide.format}</span>
                      <Button size="sm">{tr(uiText.downloadPdf, language)}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="problems">
            <div className="grid md:grid-cols-2 gap-6">
              {practiceProblems.map((problem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={tr(problem.level, language) === (uiText.tabs.guides.en ? "Basic" : "Cơ bản") ? "secondary" : "default"}>
                        {tr(problem.level, language)}
                      </Badge>
                      <div className="text-right text-sm text-muted-foreground">
                        {problem.problems} {tr(uiText.problemsCount, language)}
                      </div>
                    </div>
                    <CardTitle className="font-serif">{tr(problem.title, language)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {tr(problem.description, language)}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded">{problem.format}</span>
                        {problem.hasSolutions && (
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{tr(uiText.solutionsIncluded, language)}</span>
                        )}
                      </div>
                      <Button size="sm">{tr(uiText.download, language)}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mindmaps">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mindMaps.map((map, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={tr(map.level, language) === (uiText.tabs.guides.en ? "Basic" : "Cơ bản") ? "secondary" : "default"}>
                        {tr(map.level, language)}
                      </Badge>
                    </div>
                    <CardTitle className="font-serif text-lg">{tr(map.title, language)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {tr(map.description, language)}
                    </CardDescription>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">{tr(uiText.coveredTopics, language)}</h4>
                      <div className="flex flex-wrap gap-1">
                        {map.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {tr(topic, language)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-muted px-2 py-1 rounded">{map.format}</span>
                      <Button size="sm">{tr(uiText.download, language)}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="labs">
            <div className="grid md:grid-cols-2 gap-6">
              {labProcedures.map((lab, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-serif">{tr(lab.title, language)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {tr(lab.description, language)}
                    </CardDescription>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">{tr(uiText.includes, language)}</h4>
                      <div className="flex flex-wrap gap-1">
                        {lab.includes.map((item, itemIndex) => (
                          <span key={itemIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {tr(item, language)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-muted px-2 py-1 rounded">{lab.format} • {lab.pages} {tr(uiText.pages, language)}</span>
                      <Button size="sm">{tr(uiText.download, language)}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Usage Guidelines */}
        <div className="mt-16 bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">{tr(uiText.usageTitle, language)}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="font-semibold mb-2">{tr(uiText.sysStudy, language)}</h3>
              <p className="text-sm text-muted-foreground">{tr(uiText.sysStudyDesc, language)}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-2">{tr(uiText.pracReg, language)}</h3>
              <p className="text-sm text-muted-foreground">{tr(uiText.pracRegDesc, language)}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🗺️</span>
              </div>
              <h3 className="font-semibold mb-2">{tr(uiText.visualize, language)}</h3>
              <p className="text-sm text-muted-foreground">{tr(uiText.visualizeDesc, language)}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🧪</span>
              </div>
              <h3 className="font-semibold mb-2">{tr(uiText.apply, language)}</h3>
              <p className="text-sm text-muted-foreground">{tr(uiText.applyDesc, language)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
