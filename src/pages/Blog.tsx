import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Scientific Questioning in Chemistry Education",
      excerpt: "How teaching students to ask the right questions transforms their understanding of chemical phenomena and develops critical thinking skills.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Education Philosophy",
      tags: ["Critical Thinking", "Pedagogy", "Student Engagement"]
    },
    {
      title: "Beyond Memorization: Building Conceptual Understanding in Organic Chemistry",
      excerpt: "Exploring strategies to help students understand reaction mechanisms through pattern recognition and logical reasoning rather than rote learning.",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "Teaching Methods",
      tags: ["Organic Chemistry", "Conceptual Learning", "Mechanisms"]
    },
    {
      title: "Real-World Applications: Connecting Chemistry to Daily Life",
      excerpt: "Examples of how everyday phenomena demonstrate fundamental chemical principles, making abstract concepts tangible and relevant.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Applications",
      tags: ["Real-World Chemistry", "Student Motivation", "Practical Examples"]
    },
    {
      title: "Assessment Strategies That Promote Deep Learning",
      excerpt: "Moving beyond traditional testing to assessment methods that encourage understanding, reflection, and scientific reasoning.",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Assessment",
      tags: ["Evaluation", "Deep Learning", "Alternative Assessment"]
    },
    {
      title: "The Role of Failure in Scientific Learning",
      excerpt: "How embracing mistakes and misconceptions in the chemistry classroom leads to stronger understanding and resilience.",
      date: "February 12, 2024",
      readTime: "7 min read",
      category: "Learning Psychology",
      tags: ["Growth Mindset", "Misconceptions", "Learning Process"]
    },
    {
      title: "Chemical Equilibrium: A Gateway to Systems Thinking",
      excerpt: "Using equilibrium concepts to develop students' ability to think about complex, dynamic systems in chemistry and beyond.",
      date: "February 5, 2024",
      readTime: "9 min read",
      category: "Concept Focus",
      tags: ["Equilibrium", "Systems Thinking", "Advanced Concepts"]
    },
    {
      title: "Analyzing University Entrance Exam Trends in Chemistry",
      excerpt: "Insights from recent Vietnamese university entrance exams and how they reflect changing expectations in chemistry education.",
      date: "January 28, 2024",
      readTime: "11 min read",
      category: "Exam Analysis",
      tags: ["University Exams", "Trend Analysis", "Preparation Strategies"]
    },
    {
      title: "The Power of Visual Learning in Chemistry",
      excerpt: "How molecular models, diagrams, and visual analogies enhance student understanding of abstract chemical concepts.",
      date: "January 20, 2024",
      readTime: "8 min read",
      category: "Visual Learning",
      tags: ["Visualization", "Molecular Models", "Learning Styles"]
    }
  ];

  const categories = ["All Posts", "Education Philosophy", "Teaching Methods", "Applications", "Assessment", "Learning Psychology", "Concept Focus", "Exam Analysis", "Visual Learning"];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Educational Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reflections on chemistry education, teaching methodologies, and the art of fostering 
            scientific thinking in students. Insights from the classroom and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="font-serif text-xl hover:text-accent transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed text-base">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-sm text-foreground hover:text-accent transition-colors block py-1"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Featured Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Featured Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-accent">Critical Thinking in Science</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Developing analytical skills that extend beyond chemistry into all areas of learning.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-accent">Evidence-Based Learning</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Teaching students to support conclusions with experimental data and logical reasoning.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-accent">Conceptual Understanding</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Moving beyond memorization to deep comprehension of chemical principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-accent/5">
              <CardHeader>
                <CardTitle className="font-serif text-accent">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Get notified when new articles about chemistry education and teaching methods are published.
                </CardDescription>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-border rounded-md text-sm"
                  />
                  <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Recent Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">Dr. Tran</span> commented on
                    </p>
                    <p className="text-accent text-xs">"Assessment Strategies That Promote Deep Learning"</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">Ms. Linh</span> commented on
                    </p>
                    <p className="text-accent text-xs">"The Role of Failure in Scientific Learning"</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">Prof. Minh</span> commented on
                    </p>
                    <p className="text-accent text-xs">"Beyond Memorization: Building Conceptual Understanding"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;