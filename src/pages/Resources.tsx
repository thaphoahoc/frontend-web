import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const studyGuides = [
    {
      title: "Periodic Table Trends Study Guide",
      description: "Comprehensive guide covering atomic radius, ionization energy, electronegativity, and their patterns.",
      pages: 12,
      format: "PDF",
      level: "Basic",
      downloads: 1250
    },
    {
      title: "Chemical Bonding Quick Reference",
      description: "Visual guide to ionic, covalent, and metallic bonding with examples and practice problems.",
      pages: 8,
      format: "PDF",
      level: "Basic",
      downloads: 980
    },
    {
      title: "Equilibrium Calculations Workbook",
      description: "Step-by-step approaches to Kc, Kp, and ICE table problems with detailed solutions.",
      pages: 24,
      format: "PDF",
      level: "Advanced",
      downloads: 756
    },
    {
      title: "Organic Chemistry Reaction Summary",
      description: "Organized compilation of major organic reactions with mechanisms and conditions.",
      pages: 18,
      format: "PDF",
      level: "Advanced",
      downloads: 643
    }
  ];

  const practiceProblems = [
    {
      title: "Stoichiometry Problem Set A",
      description: "25 progressive problems covering mole calculations, limiting reagents, and percent yield.",
      problems: 25,
      format: "PDF",
      level: "Basic",
      hasSolutions: true
    },
    {
      title: "Gas Laws Practice Problems",
      description: "Comprehensive problem set covering Boyle's, Charles's, Gay-Lussac's, and combined gas laws.",
      problems: 30,
      format: "PDF",
      level: "Basic",
      hasSolutions: true
    },
    {
      title: "Acid-Base Equilibrium Problems",
      description: "Challenging problems involving weak acids, bases, buffers, and titration calculations.",
      problems: 20,
      format: "PDF",
      level: "Advanced",
      hasSolutions: true
    },
    {
      title: "Electrochemistry Problem Bank",
      description: "Problems covering cell potentials, Nernst equation, and electrolysis calculations.",
      problems: 18,
      format: "PDF",
      level: "Advanced",
      hasSolutions: true
    }
  ];

  const mindMaps = [
    {
      title: "Chemical Bonding Mind Map",
      description: "Visual representation of ionic, covalent, and metallic bonding relationships.",
      format: "PNG/PDF",
      level: "Basic",
      topics: ["Ionic Bonds", "Covalent Bonds", "Metallic Bonds", "Intermolecular Forces"]
    },
    {
      title: "Organic Functional Groups Map",
      description: "Comprehensive overview of functional groups, their properties, and reactions.",
      format: "PNG/PDF",
      level: "Advanced",
      topics: ["Alcohols", "Aldehydes", "Ketones", "Carboxylic Acids", "Esters"]
    },
    {
      title: "Thermodynamics Concept Map",
      description: "Connections between enthalpy, entropy, Gibbs free energy, and spontaneity.",
      format: "PNG/PDF",
      level: "Advanced",
      topics: ["Enthalpy", "Entropy", "Gibbs Free Energy", "Spontaneity"]
    }
  ];

  const labProcedures = [
    {
      title: "Titration Procedures & Safety",
      description: "Complete protocols for acid-base titrations with safety guidelines and data analysis.",
      format: "PDF",
      pages: 15,
      includes: ["Safety Protocol", "Equipment Setup", "Data Collection", "Analysis"]
    },
    {
      title: "Crystallization Lab Guide",
      description: "Step-by-step procedure for purifying compounds through recrystallization.",
      format: "PDF",
      pages: 10,
      includes: ["Theory", "Procedure", "Troubleshooting", "Report Template"]
    },
    {
      title: "Spectrophotometry Analysis",
      description: "UV-Vis spectrophotometry procedures for quantitative analysis.",
      format: "PDF",
      pages: 12,
      includes: ["Instrument Setup", "Calibration", "Sample Prep", "Calculations"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Study Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Carefully curated study materials, practice problems, and visual aids designed to 
            reinforce conceptual understanding and develop problem-solving skills.
          </p>
        </div>

        {/* Resource Categories */}
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="guides">Study Guides</TabsTrigger>
            <TabsTrigger value="problems">Practice Problems</TabsTrigger>
            <TabsTrigger value="mindmaps">Mind Maps</TabsTrigger>
            <TabsTrigger value="labs">Lab Procedures</TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid md:grid-cols-2 gap-6">
              {studyGuides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={guide.level === "Basic" ? "secondary" : "default"}>
                        {guide.level}
                      </Badge>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{guide.pages} pages</div>
                        <div>{guide.downloads} downloads</div>
                      </div>
                    </div>
                    <CardTitle className="font-serif">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {guide.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-muted px-2 py-1 rounded">{guide.format}</span>
                      <Button size="sm">Download PDF</Button>
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
                      <Badge variant={problem.level === "Basic" ? "secondary" : "default"}>
                        {problem.level}
                      </Badge>
                      <div className="text-right text-sm text-muted-foreground">
                        {problem.problems} problems
                      </div>
                    </div>
                    <CardTitle className="font-serif">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {problem.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded">{problem.format}</span>
                        {problem.hasSolutions && (
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Solutions Included</span>
                        )}
                      </div>
                      <Button size="sm">Download</Button>
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
                      <Badge variant={map.level === "Basic" ? "secondary" : "default"}>
                        {map.level}
                      </Badge>
                    </div>
                    <CardTitle className="font-serif text-lg">{map.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {map.description}
                    </CardDescription>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Covered Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {map.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-muted px-2 py-1 rounded">{map.format}</span>
                      <Button size="sm">Download</Button>
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
                    <CardTitle className="font-serif">{lab.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {lab.description}
                    </CardDescription>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {lab.includes.map((item, itemIndex) => (
                          <span key={itemIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-muted px-2 py-1 rounded">{lab.format} • {lab.pages} pages</span>
                      <Button size="sm">Download</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Usage Guidelines */}
        <div className="mt-16 bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">How to Use These Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="font-semibold mb-2">Study Systematically</h3>
              <p className="text-sm text-muted-foreground">Use guides to build understanding before practicing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-2">Practice Regularly</h3>
              <p className="text-sm text-muted-foreground">Work through problems consistently to reinforce concepts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🗺️</span>
              </div>
              <h3 className="font-semibold mb-2">Visualize Connections</h3>
              <p className="text-sm text-muted-foreground">Use mind maps to see relationships between concepts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🧪</span>
              </div>
              <h3 className="font-semibold mb-2">Apply Knowledge</h3>
              <p className="text-sm text-muted-foreground">Use lab procedures to connect theory with practice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;