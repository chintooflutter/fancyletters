import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const isSubdomain = window.location.hostname.split(".").length > 2;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white py-4">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center flex-wrap">
        {isSubdomain ? (
          <a href="https://fancyletters.org" className="text-xl font-bold text-black no-underline">
            FancyLetters<span className="text-blue-500">.org</span>
          </a>
        ) : (
          <Link to="/" className="text-xl font-bold text-black no-underline">
            FancyLetters<span className="text-blue-500">.org</span>
          </Link>
        )}

        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl ml-auto focus:outline-none"
          >
            ☰
          </button>
        )}

        {(isOpen || !isMobile) && (
          <nav className={`${isMobile ? "w-full mt-4 flex flex-col gap-4" : "flex gap-6"}`}>
            {isSubdomain ? (
              <>
                <a href="https://fancyletters.org/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                <a href="https://fancyletters.org/privacy" className="text-gray-700 hover:text-blue-600 transition">Privacy</a>
                <a href="https://fancyletters.org/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              </>
            ) : (
              <>
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition">About</Link>
                <Link to="/privacy" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition">Privacy</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
