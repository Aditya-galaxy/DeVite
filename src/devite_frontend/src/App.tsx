import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ResearchPlatform from "./pages/ResearchPlatform";
import IPOwnership from "./pages/IPOwnership";
import AIProcessing from "./pages/AIProcessing";
import Governance from "./pages/Governance";
import DataSovereignty from "./pages/DataSovereignty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/research" element={<ResearchPlatform />} />
          <Route path="/ip-ownership" element={<IPOwnership />} />
          <Route path="/ai-processing" element={<AIProcessing />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/data-sovereignty" element={<DataSovereignty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;