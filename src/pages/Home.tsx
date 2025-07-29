import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const featuredLessons = [
    {
      title: "Chemical Bonding Fundamentals",
      description: "Understanding ionic, covalent, and metallic bonds through logical reasoning and visual models.",
      level: "Basic",
      duration: "45 min"
    },
    {
      title: "Equilibrium and Le Chatelier's Principle",
      description: "Critical analysis of chemical equilibrium with real-world applications.",
      level: "Advanced",
      duration: "60 min"
    },
    {
      title: "Organic Chemistry: Structure & Function",
      description: "Building systematic understanding of organic molecules and their reactions.",
      level: "Advanced",
      duration: "75 min"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Scientific Thinking
                <span className="block text-accent">Through Chemistry</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Building strong foundations in chemistry through logical reasoning, 
                critical reflection, and evidence-based learning. Empowering students 
                to think like scientists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/lessons">Explore Lessons</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn About My Approach</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-serif font-bold text-white">NH</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Chemistry Teacher</p>
                    </div>
                  </div>
                </div>
                {/* Decorative chemistry symbols */}
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
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Featured Lessons</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted lessons that build understanding through logical progression 
              and critical thinking exercises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredLessons.map((lesson, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lesson.level === 'Basic' 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {lesson.level}
                    </span>
                    <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                  </div>
                  <CardTitle className="font-serif">{lesson.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {lesson.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/lessons">View Lesson</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/lessons">View All Lessons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Teaching Philosophy</h2>
            <blockquote className="text-xl italic text-foreground mb-8 leading-relaxed">
              "Chemistry is not just about memorizing formulas—it's about understanding 
              the logical patterns that govern matter and energy. When students learn to 
              think scientifically, they develop skills that serve them far beyond the classroom."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="font-semibold mb-2">Evidence-Based Learning</h3>
                <p className="text-sm text-muted-foreground">Building understanding through observation and logical reasoning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-semibold mb-2">Critical Thinking</h3>
                <p className="text-sm text-muted-foreground">Developing analytical skills that apply beyond chemistry</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="font-semibold mb-2">Strong Foundations</h3>
                <p className="text-sm text-muted-foreground">Systematic progression from basic principles to complex concepts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;