import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black bg-opacity-90 backdrop-blur-md py-6 text-center text-white">

      <div className="text-sm opacity-80 text-[#39ff14]">
        {currentYear} © DJ/PODUCER | Alle Rechte vorbehalten.
      </div>
      <div>
        {/* Branding Text as a Link */}

        <div className="flex justify-center gap-4 mb-4 mt-4">
        <Link
          href="https://github.com/akocerke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-colors duration-300 hover:text-[#39ff14]"
        >
          <FaGithub size={25} />
        </Link>

        <Link
          href="mailto:info@djproducer.com"
          className="text-2xl transition-colors duration-300 hover:text-[#39ff14]"
        >
          <FaEnvelope size={25} />
        </Link>

        <Link
          href="https://portfolio.djindarane.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-colors duration-300 hover:text-[#39ff14]"
        >
          <TbWorldWww size={25} />
        </Link>
      </div>

      <div className="text-sm opacity-80 text-gray-100 mb-4">
        <Link
          href="https://github.com/landingpage-factory"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg transition-colors duration-300 hover:text-[#39ff14]"
        >
          LandingPage-Factory 🚀
        </Link>
        
      </div>
      </div>
    </footer>
  );
}
