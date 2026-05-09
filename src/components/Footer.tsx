import { Download, Globe, Mail, Phone } from "lucide-react";
import { downloadVCard } from "../utils/vcard";

export function Footer() {
  const handleVCardDownload = () => {
    downloadVCard({
      firstName: "Gildong",
      lastName: "Hong",
      organization: "ARCHI & CO",
      title: "Principal Architect",
      email: "contact@archiandco.com",
      phone: "+82 10-1234-5678",
      url: window.location.origin,
    });
  };

  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <span className="text-xl font-bold font-inter tracking-widest uppercase">ARCHI & CO</span>
          <p className="text-sm text-muted-foreground">
            Design Your Life, Build Your Vision.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground hover:text-background transition-colors">
            <Globe className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground hover:text-background transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground hover:text-background transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <button 
            onClick={handleVCardDownload}
            className="flex items-center gap-2 px-6 py-2 border border-border rounded-full hover:bg-foreground hover:text-background transition-all text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            Save vCard
          </button>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ARCHI & CO. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
