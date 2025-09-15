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
import PostPage from "./pages/Post";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const base = import.meta.env.BASE_URL;

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
            <Route path={`${base}`} element={<Home />} />
            <Route path={`${base}about`} element={<About />} />
            <Route path={`${base}lessons`} element={<Lessons />} />
            <Route path={`${base}resources`} element={<Resources />} />
            <Route path={`${base}blog`} element={<Blog />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path={`${base}courses`} element={<Courses />} />
            <Route path={`${base}contact`} element={<Contact />} />
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
