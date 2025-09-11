import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { useState, useRef, useEffect } from "react";

const base = import.meta.env.BASE_URL;

const Navigation = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { path: `${base}`, label: { vi: "Trang chủ", en: "Home" } },
    { path: `${base}lessons`, label: { vi: "Blog", en: "Blog" } },
    { path: `${base}courses`, label: { vi: "Khóa học", en: "Courses" } },
    { path: `${base}resources`, label: { vi: "Tài liệu", en: "Resources" } },
    { path: `${base}blog`, label: { vi: "Blog", en: "Blog" } },
    { path: `${base}about`, label: { vi: "Giới thiệu", en: "About" } },
    { path: `${base}contact`, label: { vi: "Liên hệ", en: "Contact" } },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-serif font-semibold text-primary"
          >
            <img src={`${base}favicon.ico`} alt="Logo" className="w-6 h-6" />
            <span>THÁP HÓA HỌC</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === item.path
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground"
                )}
              >
                {item.label[language]}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="text-sm font-medium px-3 py-1.5 rounded-md bg-accent text-foreground hover:bg-accent/70 transition-colors"
            >
              {language === "vi" ? "🇻🇳 VI" : "🇺🇸 EN"}
            </button>

            {/* Settings Dropdown */}
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="text-foreground hover:text-accent transition-colors"
                aria-label="Settings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {settingsOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border z-50">
                  <ul className="py-2 text-sm text-foreground">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-accent/20"
                      >
                        👤 Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={toggleLanguage}
                        className="w-full text-left px-4 py-2 hover:bg-accent/20"
                      >
                        🌐 {language === "vi" ? "Chuyển sang English" : "Switch to Vietnamese"}
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 hover:bg-accent/20">
                        🌓 Theme
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/notifications"
                        className="block px-4 py-2 hover:bg-accent/20"
                      >
                        🔔 Notifications
                      </Link>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 hover:bg-accent/20">
                        🚪 Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

