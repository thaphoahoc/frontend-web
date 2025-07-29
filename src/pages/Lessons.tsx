import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Lessons = () => {
  const [selectedLevel, setSelectedLevel] = useState("all");

  const basicLessons = [
    {
      title: "Atomic Structure and Periodic Trends",
      description: "Understanding electron configuration, atomic radius, ionization energy, and periodic patterns through logical reasoning.",
      duration: "45 min",
      difficulty: "Basic",
      topics: ["Electron Configuration", "Periodic Table", "Atomic Properties"],
      hasVideo: true,
      hasWorksheet: true
    },
    {
      title: "Chemical Bonding Fundamentals",
      description: "Ionic, covalent, and metallic bonding explained through electron behavior and energy considerations.",
      duration: "50 min",
      difficulty: "Basic",
      topics: ["Ionic Bonds", "Covalent Bonds", "Lewis Structures"],
      hasVideo: true,
      hasWorksheet: true
    },
    {
      title: "Stoichiometry and Mole Concept",
      description: "Quantitative relationships in chemistry using dimensional analysis and logical problem-solving approaches.",
      duration: "60 min",
      difficulty: "Basic",
      topics: ["Mole Calculations", "Balancing Equations", "Limiting Reagents"],
      hasVideo: false,
      hasWorksheet: true
    },
    {
      title: "States of Matter and Gas Laws",
      description: "Kinetic molecular theory and gas behavior through mathematical relationships and molecular reasoning.",
      duration: "55 min",
      difficulty: "Basic",
      topics: ["Kinetic Theory", "Gas Laws", "Phase Changes"],
      hasVideo: true,
      hasWorksheet: true
    }
  ];

  const advancedLessons = [
    {
      title: "Chemical Equilibrium and Le Chatelier's Principle",
      description: "Dynamic equilibrium concepts with quantitative analysis and prediction of system responses.",
      duration: "75 min",
      difficulty: "Advanced",
      topics: ["Equilibrium Constants", "Le Chatelier's Principle", "ICE Tables"],
      hasVideo: true,
      hasWorksheet: true
    },
    {
      title: "Acid-Base Chemistry and pH Calculations",
      description: "Comprehensive analysis of acid-base theories, buffer systems, and quantitative pH problems.",
      duration: "80 min",
      difficulty: "Advanced",
      topics: ["Brønsted-Lowry Theory", "Buffer Systems", "Titration Curves"],
      hasVideo: true,
      hasWorksheet: true
    },
    {
      title: "Electrochemistry and Redox Reactions",
      description: "Electron transfer processes, galvanic cells, and electrochemical calculations with real-world applications.",
      duration: "70 min",
      difficulty: "Advanced",
      topics: ["Oxidation States", "Galvanic Cells", "Electrolysis"],
      hasVideo: false,
      hasWorksheet: true
    },
    {
      title: "Organic Chemistry: Structure and Reactivity",
      description: "Systematic approach to organic molecules, functional groups, and reaction mechanisms.",
      duration: "90 min",
      difficulty: "Advanced",
      topics: ["Functional Groups", "Reaction Mechanisms", "Stereochemistry"],
      hasVideo: true,
      hasWorksheet: true
    },
    {
      title: "Chemical Kinetics and Reaction Rates",
      description: "Rate laws, activation energy, and catalysis with experimental design and data analysis.",
      duration: "85 min",
      difficulty: "Advanced",
      topics: ["Rate Laws", "Activation Energy", "Catalysis"],
      hasVideo: true,
      hasWorksheet: false
    }
  ];

  const allLessons = [...basicLessons, ...advancedLessons];

  const getLessonsToDisplay = () => {
    if (selectedLevel === "basic") return basicLessons;
    if (selectedLevel === "advanced") return advancedLessons;
    return allLessons;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Chemistry Lessons</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive chemistry lessons designed to build understanding through logical progression, 
            critical thinking, and evidence-based reasoning.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All Lessons</TabsTrigger>
            <TabsTrigger value="basic">Basic Level</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allLessons.map((lesson, index) => (
                <LessonCard key={index} lesson={lesson} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="basic" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {basicLessons.map((lesson, index) => (
                <LessonCard key={index} lesson={lesson} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedLessons.map((lesson, index) => (
                <LessonCard key={index} lesson={lesson} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Learning Approach Section */}
        <div className="mt-16 bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">My Teaching Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Logical Progression</h3>
              <p className="text-sm text-muted-foreground">Each lesson builds systematically on previous knowledge</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="font-semibold mb-2">Critical Analysis</h3>
              <p className="text-sm text-muted-foreground">Students learn to question, analyze, and evaluate evidence</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="font-semibold mb-2">Conceptual Understanding</h3>
              <p className="text-sm text-muted-foreground">Focus on understanding principles rather than memorization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LessonCard = ({ lesson }: { lesson: any }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant={lesson.difficulty === "Basic" ? "secondary" : "default"}>
            {lesson.difficulty}
          </Badge>
          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
        </div>
        <CardTitle className="font-serif text-lg leading-tight">{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="mb-4 leading-relaxed flex-1">
          {lesson.description}
        </CardDescription>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Key Topics:</h4>
          <div className="flex flex-wrap gap-1">
            {lesson.topics.map((topic: string, index: number) => (
              <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {lesson.hasVideo && (
              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">📹 Video</span>
            )}
            {lesson.hasWorksheet && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">📄 Worksheet</span>
            )}
          </div>
          <Button size="sm" variant="outline">
            View Lesson
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Lessons;