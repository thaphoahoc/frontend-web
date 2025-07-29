import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your message. I will respond within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Contact Dr. Nguyen Minh Hoa</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your chemistry learning journey? Have questions about courses or 
            teaching methods? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+84 123 456 789"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Course inquiry, tutoring, etc."
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your inquiry, learning goals, or questions about chemistry education..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Office Hours */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hoa.chemistry@school.edu.vn</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📱</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+84 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">🏫</span>
                  <div>
                    <p className="font-medium">Institution</p>
                    <p className="text-sm text-muted-foreground">Hanoi International School</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📍</span>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Hanoi, Vietnam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Office Hours</CardTitle>
                <CardDescription>
                  Available for student consultations and academic discussions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Monday - Friday</span>
                  <span className="text-sm text-muted-foreground">2:00 PM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Saturday</span>
                  <span className="text-sm text-muted-foreground">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Sunday</span>
                  <span className="text-sm text-muted-foreground">By appointment</span>
                </div>
                <div className="mt-4 p-3 bg-accent/5 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    💡 <strong>Tip:</strong> For urgent questions, email is the fastest way to reach me. 
                    I typically respond within 2-4 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <a href="/courses" className="text-accent hover:text-accent/80 font-medium text-sm block">
                    → View Current Courses
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">See available classes and registration info</p>
                </div>
                <div>
                  <a href="/resources" className="text-accent hover:text-accent/80 font-medium text-sm block">
                    → Download Study Materials
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Free resources and practice problems</p>
                </div>
                <div>
                  <a href="/lessons" className="text-accent hover:text-accent/80 font-medium text-sm block">
                    → Browse Lesson Topics
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Explore chemistry topics by difficulty level</p>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="bg-accent/5">
              <CardHeader>
                <CardTitle className="font-serif text-accent">Response Times</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Course Inquiries</span>
                  <Badge variant="outline" className="text-xs">Same day</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Academic Questions</span>
                  <Badge variant="outline" className="text-xs">Within 24h</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Collaboration Requests</span>
                  <Badge variant="outline" className="text-xs">2-3 days</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2 text-accent">How do I enroll in a course?</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Contact me directly via email or phone to discuss your learning goals and find the 
                    best course fit. I'll guide you through the enrollment process and answer any questions.
                  </p>

                  <h3 className="font-semibold mb-2 text-accent">Do you offer one-on-one tutoring?</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Yes, I provide personalized tutoring sessions tailored to individual learning needs. 
                    Contact me to discuss scheduling and specific topics you'd like to focus on.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-accent">What is your teaching methodology?</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I focus on building conceptual understanding through logical reasoning, evidence-based 
                    learning, and critical thinking rather than memorization. Each student learns to 
                    think like a scientist.
                  </p>

                  <h3 className="font-semibold mb-2 text-accent">Are online courses available?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, I offer both in-person and online courses. Some courses are hybrid format, 
                    combining the benefits of face-to-face interaction with online flexibility.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;