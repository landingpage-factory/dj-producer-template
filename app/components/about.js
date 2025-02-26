"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animationsdauer
      easing: "ease-in-out",
      once: false, // Animationen bei jedem Scrollen wiederholen
      mirror: true, // Rückwärts abspielen, wenn man hochscrollt
    });
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide" data-aos="fade-up">
          About Me
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="300">
          Entdecke meine Musik und Events. Ich kreiere einzigartige Sounds, die begeistern.
        </p>

        
      </div>
    </div>
  );
}
