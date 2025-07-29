import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const education = [
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
  ];

  const achievements = [
    "15+ years of high school chemistry teaching experience",
    "Published 25+ peer-reviewed articles on chemistry education",
    "Winner of National Excellence in Teaching Award (2020)",
    "Developed innovative curriculum adopted by 50+ schools",
    "Mentor to 200+ students who pursued STEM careers"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">About Dr. Nguyen Minh Hoa</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate educator dedicated to transforming chemistry education through 
            scientific thinking, logical reasoning, and evidence-based learning approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Biography */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Biography</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-6">
                  Dr. Nguyen Minh Hoa has dedicated over 15 years to revolutionizing chemistry education 
                  in Vietnam. With a strong foundation in both chemistry research and educational pedagogy, 
                  she brings a unique perspective that combines rigorous scientific thinking with 
                  accessible teaching methods.
                </p>
                
                <p className="text-foreground leading-relaxed mb-6">
                  Her journey began with a deep fascination for the molecular world and how understanding 
                  chemical principles could unlock solutions to real-world problems. This passion led her 
                  to pursue advanced degrees in both chemistry and education, recognizing that effective 
                  teaching requires not just subject expertise, but also deep understanding of how 
                  students learn.
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  Throughout her career, Dr. Hoa has focused on developing teaching methodologies that 
                  emphasize critical thinking over memorization. She believes that when students understand 
                  the logical patterns underlying chemical phenomena, they develop problem-solving skills 
                  that extend far beyond the chemistry classroom.
                </p>

                <p className="text-foreground leading-relaxed">
                  Her innovative approaches have been recognized nationally, and she continues to mentor 
                  both students and fellow educators. Dr. Hoa's ultimate goal is to inspire a new 
                  generation of thinkers who approach challenges with scientific rigor and intellectual curiosity.
                </p>
              </CardContent>
            </Card>

            {/* Teaching Philosophy */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Teaching Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-accent">Foundation-First Approach</h3>
                    <p className="text-foreground leading-relaxed">
                      Every complex concept builds upon simpler principles. I ensure students master 
                      fundamental ideas before progressing to advanced topics, creating a solid 
                      foundation for lifelong learning.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-accent">Evidence-Based Reasoning</h3>
                    <p className="text-foreground leading-relaxed">
                      Students learn to support their conclusions with experimental evidence and 
                      logical reasoning. This approach develops critical thinking skills essential 
                      for scientific literacy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-accent">Reflective Learning</h3>
                    <p className="text-foreground leading-relaxed">
                      I encourage students to reflect on their learning process, identify misconceptions, 
                      and adjust their understanding. This metacognitive approach leads to deeper, 
                      more lasting comprehension.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-accent">Real-World Connections</h3>
                    <p className="text-foreground leading-relaxed">
                      Chemistry concepts are always connected to real-world applications, helping 
                      students see the relevance and importance of their studies in daily life 
                      and future careers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Education Background</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
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
                <CardTitle className="font-serif">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
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
                <CardTitle className="font-serif text-accent">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Interested in discussing chemistry education or collaboration opportunities?
                </CardDescription>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  Contact Me →
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