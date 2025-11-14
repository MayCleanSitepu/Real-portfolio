import Link from "next/link";
import React, { useState } from "react";

const Simple = () => {
  // State untuk bahasa
  const [language, setLanguage] = useState("en");

  // Teks dalam dua bahasa
  const textContent = {
    en: {
      intro:
        "is a software engineer and digital creator (as hobby) with experience in Full Stack Development, working across web, mobile, digital art, memes, and game applications in both academic and professional settings.",
      passion:
        "Beyond coding, Klinn thrives in collaborative environments, bringing creative solutions to challenges. Passionate about capturing interest, klinn is dedicated to crafting intuitive experiences that seamlessly blend functionality with aesthetics.",
    },
    jp: {
      intro:
        "は、ソフトウェアエンジニアであり、フルスタック開発の経験を持つデジタルクリエイター（趣味として）。ウェブ、モバイル、デジタルアート、ミーム、ゲームアプリなど、学術とプロの環境の両方で活動しています。",
      passion:
        "コーディング以外にも、Klinn は協力的な環境で創造的なソリューションを提供することに情熱を注いでいます。関心を引きつけることに情熱を持ち、機能性と美しさをシームレスに融合させた直感的な体験を作り出すことに尽力しています。",
    },
  };

  return (
    <div className="min-h-screen bg-[#252525] text-white flex flex-col items-center justify-center px-4 font-mono">
      {/* Tombol Bahasa */}
      <div className="flex justify-end w-full max-w-[700px] mb-3 sm:mb-10">
        <button
          className="text-gray-400 underline hover:bg-[#cad5e1] hover:text-black transition duration-200 text-sm sm:text-base"
          onClick={() => setLanguage(language === "en" ? "jp" : "en")} // Toggle bahasa
        >
          {language === "en" ? "日本語" : "English"}
        </button>
      </div>

      {/* JSON Code Block */}
      <pre className="text-gray-400 text-[7px] sm:text-[10px] w-full max-w-[700px] text-center overflow-x-auto p-2 sm:p-4">
        <code>
          {`{
  "user": "xxkinn",
  "Age": "21",
  "Origin": "Indonesia",
  "scripts": {
    "KeepinMind": "Embrace challenges, and be different."
  },
  "keywords": [],
  "author": "Entity-0Xcc01",
  "license": "404",
  "description": "",
  "Dependencies": {
    "curiosity-engine": "^11.2.0",
    "dream-weaver": "^1.50.0",
    "reality-mapper": "^22.12.0",
    "visionary-core": "^3.0.9",
    "chaos-theory": "^16.4.7",
    "idea-forge": "^1.50.0"
  },
  "main-bless": {
    "serendipity": "^1.7.9"
  }
  }`}
        </code>
      </pre>

      {/* Deskripsi Profil */}
      <div className="w-full max-w-[700px] px-6 mt-4">
        <p className="mt-4 text-gray-300 text-base sm:text-sm md:text-sm">
          <span className="font-bold">klinn</span> {textContent[language].intro}
        </p>
        <p className="mt-4 text-gray-300 text-base sm:text-sm md:text-sm">
          {textContent[language].passion}
        </p>
      </div>

      {/* Link Navigasi */}
      <div className="w-full max-w-[700px] px-6 mt-6">
        <ul className="space-y-2 text-xs sm:text-sm">
          <li>
            <Link
              href="/project/Showcase"
              className="text-gray-400 underline hover:bg-[#cad5e1] hover:text-black transition duration-200"
            >
              Showcase
            </Link>
          </li>
          <li>
            <Link
              href="mailto:maycleansitepu0204@ugm.mail.ac.id"
              className="text-gray-400 underline hover:bg-[#cad5e1] hover:text-black transition duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/ey_kean"
              className="text-gray-400 underline hover:bg-[#cad5e1] hover:text-black transition duration-200"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/maycleansitepu"
              className="text-gray-400 underline hover:bg-[#cad5e1] hover:text-black transition duration-200"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Simple;
