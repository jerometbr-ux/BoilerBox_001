import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BoilerRoomLogo from "./BoilerRoomLogo";

const links = [
  { label: "Features", href: "#features" },
  { label: "Packages", href: "#packages" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/95 backdrop-blur border-b border-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <BoilerRoomLogo size="sm" showTagline={true} />

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-400 hover:text-white text-sm px-3 py-1.5 rounded transition-colors hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#packages"
          className="hidden md:block bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
        >
          Explore Packages
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white p-1"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white text-sm py-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
