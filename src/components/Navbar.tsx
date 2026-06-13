import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface NavbarProps {
  onMenuClick: (targetId: string) => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, setTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    onMenuClick(targetId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="text-lg font-black font-inter tracking-widest uppercase">
          <a href="#" onClick={(e) => handleLinkClick(e, "hero")}>WOWCOM</a>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-semibold text-muted-foreground">
            <a href="#expertise" onClick={(e) => handleLinkClick(e, "expertise")} className="hover:text-foreground transition-colors font-mono tracking-wider">[01] Services</a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, "portfolio")} className="hover:text-foreground transition-colors font-mono tracking-wider">[02] Portfolio</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")} className="hover:text-foreground transition-colors font-mono tracking-wider">[03] Contact</a>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full hover:bg-muted transition-colors cursor-pointer bg-transparent border-0"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
