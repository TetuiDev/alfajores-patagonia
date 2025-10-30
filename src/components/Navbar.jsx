import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#d6b48f] shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full" /> 
        {/* Logo placeholder */}
        <span className="font-bold text-lg">Alfajores Patagonia</span>
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </div>
    </nav>
  );
}