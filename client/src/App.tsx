import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

// Pages
import Home from "@/pages/home";
import Servicos from "@/pages/servicos";
import Protocolos from "@/pages/protocolos";
import Contactos from "@/pages/contactos";
import PoliticaPrivacidade from "@/pages/politica-privacidade";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/protocolos" component={Protocolos} />
      <Route path="/contactos" component={Contactos} />
      <Route path="/politica-privacidade" component={PoliticaPrivacidade} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col font-sans relative">
          <Navbar />
          <div className="flex-1">
            <Router />
          </div>
          <Footer />
          <FloatingCTA />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
