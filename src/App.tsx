import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import Education from "./pages/Education";
import Languages from "./pages/Languages";
import Awards from "./pages/Awards";
import WorkExperience from "./pages/WorkExperience";
import Certifications from "./pages/Certifications";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <BrowserRouter>
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/search" element={<Index />} />
                <Route path="/library" element={<Index />} />
                <Route path="/profile" element={<Index />} />
                <Route path="/professional" element={<Index />} />
                <Route path="/skills" element={<Index />} />
                <Route path="/hire" element={<Index />} />
                <Route path="/contact" element={<Index />} />
                <Route path="/education" element={<Education />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/work-experience" element={<WorkExperience />} />
                <Route path="/certifications" element={<Certifications />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;

