import { NavLink, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { useState, useRef, useEffect } from "react";

const base = import.meta.env.BASE_URL;

const Navigation = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns if clicked outside or on Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
        setMobileOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSettingsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Close mobile menu when switching to desktop size
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false); // md breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = [
    { path: `${base}`, label: { vi: "Trang chủ", en: "Home" } },
    { path: `${base}courses`, label: { vi: "Khóa học", en: "Courses" } },
    { path: `${base}resources`, label: { vi: "Tài liệu", en: "Resources" } },
    { path: `${base}blog`, label: { vi: "Tin tức", en: "Blog" } },
    { path: `${base}about`, label: { vi: "Giới thiệu", en: "About" } },
    { path: `${base}contact`, label: { vi: "Liên hệ", en: "Contact" } },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4" ref={navRef}>
        <div className="flex items-center justify-between">
          <Link
            to={base} // important if deploying under a base path (e.g., GH Pages)
            className="flex items-center space-x-2 text-2xl font-serif font-semibold text-primary"
          >
            <img src={`${base}favicon.ico`} alt="Logo" className="w-6 h-6" />
            <span>THÁP HÓA HỌC</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isActive
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-foreground"
                  )
                }
                end
              >
                {item.label[language]}
              </NavLink>
            ))}

            <button
              onClick={toggleLanguage}
              className="text-sm font-medium px-3 py-1.5 rounded-md bg-accent text-foreground hover:bg-accent/70 transition-colors"
            >
              {language === "vi" ? "🇻🇳 VI" : "🇺🇸 EN"}
            </button>

            {/* Settings Dropdown (desktop) */}
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setSettingsOpen((v) => !v)}
                className="p-2 rounded-md hover:bg-accent/20 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Open settings"
                aria-haspopup="menu"
                aria-expanded={settingsOpen}
              >
                {/* Use a cog to avoid confusing this with the mobile hamburger */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14 12.94a7.49 7.49 0 0 0 .05-.94 7.49 7.49 0 0 0-.05-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.5 7.5 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.58.23-1.13.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.03.31-.05.62-.05.94s.02.63.05.94L2.83 14.5a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.5.41 1.05.71 1.63.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.58-.23 1.13-.53 1.63-.94l2.39.96c.22.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.56ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z"/>
                </svg>
              </button>

              {settingsOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border z-50"
                >
                  <ul className="py-2 text-sm text-foreground">
                    <li>
                      <Link
                        to={`${base}profile`}
                        className="block px-4 py-2 hover:bg-accent/20"
                        onClick={() => setSettingsOpen(false)}
                      >
                        👤 Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => { toggleLanguage(); setSettingsOpen(false); }}
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
                        to={`${base}notifications`}
                        className="block px-4 py-2 hover:bg-accent/20"
                        onClick={() => setSettingsOpen(false)}
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
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-md hover:bg-accent/20 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-border mt-4 pt-4"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-base font-medium transition-colors hover:text-accent",
                      isActive ? "text-accent" : "text-foreground"
                    )
                  }
                  end
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label[language]}
                </NavLink>
              ))}

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => { toggleLanguage(); setMobileOpen(false); }}
                  className="text-sm font-medium px-3 py-1.5 rounded-md bg-accent text-foreground hover:bg-accent/70 transition-colors"
                >
                  {language === "vi" ? "🇻🇳 VI" : "🇺🇸 EN"}
                </button>

                <Link
                  to={`${base}profile`}
                  className="text-sm hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  👤 Profile
                </Link>
                <Link
                  to={`${base}notifications`}
                  className="text-sm hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  🔔 Notifications
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

