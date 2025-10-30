import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/Test";

function App() {
  return (
    <div className="bg-[#fdf7f2] text-[#3a2a1a] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
