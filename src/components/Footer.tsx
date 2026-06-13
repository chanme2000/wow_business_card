import { Download, Globe, Mail, Phone } from "lucide-react";
import { downloadVCard } from "../utils/vcard";

export function Footer() {
  const handleVCardDownload = () => {
    downloadVCard({
      firstName: "Gildong",
      lastName: "Hong",
      organization: "WOWCOM",
      title: "Principal Architect",
      email: "contact@wowcom.com",
      phone: "+82 10-1234-5678",
      url: window.location.origin,
    });
  };

  return (
    <footer className="bg-[#121211] text-[#f0eee9] border-t border-[#282725] pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* 상단 파트: 연락처, 링크, vCard 다운로드 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-[#282725] pb-16">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#9a968f] font-mono">[CONTACT INFO]</span>
            <p className="text-2xl md:text-3xl font-light hover:text-rust-orange transition-colors">
              contact@archiandco.com
            </p>
            <p className="text-[#9a968f] font-mono text-sm">+82 10-1234-5678</p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <span className="text-xs uppercase tracking-widest text-[#9a968f] font-mono">[ACTIONS]</span>
            <button
              onClick={handleVCardDownload}
              className="flex items-center gap-2 px-8 py-3.5 border border-[#282725] hover:border-rust-orange hover:bg-rust-orange hover:text-white rounded-full transition-all text-sm font-semibold cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Save vCard
            </button>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-[#282725] flex items-center justify-center hover:border-rust-orange hover:text-rust-orange transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#282725] flex items-center justify-center hover:border-rust-orange hover:text-rust-orange transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#282725] flex items-center justify-center hover:border-rust-orange hover:text-rust-orange transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 하단 파트: 거대한 워터마크 & 카피라이트 */}
        <div className="flex flex-col gap-8">
          <h1 className="text-[12vw] font-black tracking-tighter uppercase leading-none text-[#1e1d1b] select-none">
            WOWCOM
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#706d64] font-mono pt-4 border-t border-[#1e1d1b]">
            <p>&copy; {new Date().getFullYear()} WOWCOMMUNICATION. All rights reserved.</p>
            <p className="mt-2 md:mt-0">DESIGN BY WOWCOM_SADI</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
