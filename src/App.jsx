import { Toaster } from "sonner";
import { TooltipProvider } from "./components/Tooltip/TooltipProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Track from "./pages/Track";
import About from "./pages/About";
import Nav from "./components/Nav"


const App = () => (

    <TooltipProvider>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
          <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/track" element={<Track />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
);

export default App;