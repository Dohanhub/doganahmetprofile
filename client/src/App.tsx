import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ExecutiveCoaching from "@/pages/executive-coaching";
import ManagementConsulting from "@/pages/management-consulting";
import BoardConsulting from "@/pages/board-consulting";
import About from "@/pages/about";
import Achievements from "@/pages/achievements";
import Contact from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/executive-coaching" component={ExecutiveCoaching} />
      <Route path="/management-consulting" component={ManagementConsulting} />
      <Route path="/board-consulting" component={BoardConsulting} />
      <Route path="/about" component={About} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
