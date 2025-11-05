import { Routes, Route, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import { isMobile } from "./util/isMobile";
import { useEffect, useState } from "react";

function App() {
  const [isMobileDevice,setIsMobileDevice] = useState(false);
  
  useEffect(()=>{
    const device = isMobile()
    setIsMobileDevice(device)

  },[])

  return (
    <div className="bg-[#FFF6E9] text-[#3a2a1a] min-h-screen font-['Helbetica']">
      <Navbar isMobile={isMobileDevice} />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobileDevice} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
