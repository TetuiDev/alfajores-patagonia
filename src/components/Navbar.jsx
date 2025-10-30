import { Link } from "react-router-dom";

export default function Navbar({isMobile}) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#d6b48f] shadow-md font-sans">
      <div className="flex items-center gap-3">
        <img
            src="/Logo.png"
            alt="Alfajores"
            className="w-10 h-10 bg-white rounded-full"           
          />
          {!isMobile?<span className="font-bold text-lg text-[#ffffff] ">Alfajores Patagonia</span>:"" }
                         
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="text-lg text-[white] hover:text-[#6ED8D2]">Inicio</Link>
        <Link to="/contact" className="text-lg text-[white] hover:text-[#6ED8D2]">Pedidos</Link>
      </div>
    </nav>
  );
}