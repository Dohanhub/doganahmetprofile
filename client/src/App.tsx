import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Achievements from "@/pages/achievements";
import Experience from "@/pages/experience";
import Organizations from "@/pages/organizations";
import Certifications from "@/pages/certifications";
import Contact from "@/pages/contact";

function AppRouter() {
  return (
    <WouterRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/certifications" component={Certifications} />
        <Route path="/organizations" component={Organizations} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="dogan-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground transition-colors">
            <Toaster />
            <AppRouter />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
