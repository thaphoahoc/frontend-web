import { LanguageProvider } from "@/context/language-context"; // adjust path

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <LanguageProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
    </LanguageProvider>
);

export default App;
