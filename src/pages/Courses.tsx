import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
  const currentCourses = [
    {
      title: "Advanced Chemistry for University Preparation",
      description: "Comprehensive course covering organic chemistry, thermodynamics, and kinetics with university entrance exam focus.",
      duration: "16 weeks",
      schedule: "Tuesdays & Thursdays, 7:00-9:00 PM",
      level: "Advanced",
      spots: "12 spots remaining",
      price: "8,500,000 VND",
      startDate: "April 15, 2024",
      format: "In-person & Online Hybrid",
      topics: ["Organic Chemistry", "Thermodynamics", "Kinetics", "Electrochemistry", "Exam Strategies"]
    },
    {
      title: "Chemistry Fundamentals Intensive",
      description: "Building strong foundations in atomic structure, bonding, and stoichiometry through interactive learning.",
      duration: "12 weeks",
      schedule: "Saturdays, 9:00 AM-12:00 PM",
      level: "Basic",
      spots: "8 spots remaining",
      price: "5,200,000 VND",
      startDate: "April 20, 2024",
      format: "In-person",
      topics: ["Atomic Structure", "Chemical Bonding", "Stoichiometry", "Gas Laws", "Solutions"]
    }
  ];

  const upcomingCourses = [
    {
      title: "Research Methods in Chemistry",
      description: "Introduction to scientific research, data analysis, and experimental design for aspiring chemistry students.",
      duration: "8 weeks",
      schedule: "Weekends, 2:00-5:00 PM",
      level: "Advanced",
      registrationOpens: "May 1, 2024",
      startDate: "June 15, 2024",
      format: "In-person",
      topics: ["Research Design", "Data Analysis", "Literature Review", "Scientific Writing", "Lab Techniques"]
    },
    {
      title: "Environmental Chemistry Applications",
      description: "Exploring chemical principles in environmental contexts, from pollution to green chemistry solutions.",
      duration: "10 weeks",
      schedule: "Mondays & Wednesdays, 6:30-8:30 PM",
      level: "Intermediate",
      registrationOpens: "June 1, 2024",
      startDate: "July 10, 2024",
      format: "Online",
      topics: ["Air Quality", "Water Chemistry", "Green Chemistry", "Sustainability", "Environmental Analysis"]
    },
    {
      title: "Chemistry for Medical School Preparation",
      description: "Specialized preparation for medical school entrance exams with focus on biochemistry and organic chemistry.",
      duration: "20 weeks",
      schedule: "Fridays & Sundays, 1:00-4:00 PM",
      level: "Advanced",
      registrationOpens: "July 15, 2024",
      startDate: "September 1, 2024",
      format: "In-person & Online Hybrid",
      topics: ["Biochemistry", "Organic Chemistry", "Medical Applications", "Exam Techniques", "Clinical Connections"]
    }
  ];

  const workshops = [
    {
      title: "Laboratory Safety & Techniques Workshop",
      description: "Hands-on workshop covering essential laboratory safety protocols and basic techniques.",
      duration: "1 day",
      date: "April 30, 2024",
      time: "9:00 AM - 4:00 PM",
      price: "750,000 VND",
      spots: "15 participants max",
      format: "In-person"
    },
    {
      title: "Chemical Problem-Solving Strategies",
      description: "Intensive workshop on systematic approaches to solving complex chemistry problems.",
      duration: "2 days",
      date: "May 18-19, 2024",
      time: "10:00 AM - 3:00 PM",
      price: "1,200,000 VND",
      spots: "20 participants max",
      format: "In-person"
    },
    {
      title: "University Interview Preparation for Chemistry Students",
      description: "Preparation for university interviews with focus on chemistry knowledge and communication skills.",
      duration: "1 day",
      date: "June 8, 2024",
      time: "1:00 PM - 6:00 PM",
      price: "600,000 VND",
      spots: "12 participants max",
      format: "In-person"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Courses & Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Structured learning programs designed to build deep understanding of chemistry through 
            logical progression, critical thinking, and evidence-based approaches.
          </p>
        </div>

        {/* Course Categories */}
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="current">Current Courses</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Courses</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <div className="grid md:grid-cols-2 gap-8">
              {currentCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant={course.level === "Basic" ? "secondary" : "default"}>
                        {course.level}
                      </Badge>
                      <span className="text-sm text-accent font-medium">{course.spots}</span>
                    </div>
                    <CardTitle className="font-serif text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Schedule:</span>
                        <span className="font-medium text-right">{course.schedule}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Start Date:</span>
                        <span className="font-medium">{course.startDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{course.format}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-bold text-accent">{course.price}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Course Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-accent hover:bg-accent/90">
                        Register Now
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
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
                    <Badge variant={course.level === "Basic" ? "secondary" : course.level === "Intermediate" ? "outline" : "default"} className="w-fit mb-3">
                      {course.level}
                    </Badge>
                    <CardTitle className="font-serif text-lg">{course.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Schedule:</span>
                        <span className="font-medium text-right text-xs">{course.schedule}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Registration Opens:</span>
                        <span className="font-medium text-accent text-xs">{course.registrationOpens}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Start Date:</span>
                        <span className="font-medium text-xs">{course.startDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium text-xs">{course.format}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Course Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workshops">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">{workshop.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {workshop.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{workshop.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{workshop.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium text-xs">{workshop.time}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-bold text-accent">{workshop.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Capacity:</span>
                        <span className="font-medium text-xs">{workshop.spots}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{workshop.format}</span>
                      </div>
                    </div>

                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                      Register for Workshop
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Course Benefits Section */}
        <div className="mt-16 bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">Why Choose My Courses?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Structured Learning</h3>
              <p className="text-sm text-muted-foreground">Systematic progression from fundamentals to advanced concepts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-sm text-muted-foreground">Personalized attention and interactive learning environment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔬</span>
              </div>
              <h3 className="font-semibold mb-2">Hands-On Practice</h3>
              <p className="text-sm text-muted-foreground">Laboratory work and practical problem-solving sessions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">High success rates in university admissions and exams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;