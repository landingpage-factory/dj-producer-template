"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeIntro() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animationsdauer
      easing: "ease-in-out",
      once: false, // 🔥 Wiederholt die Animation beim Scrollen
      mirror: true, // 🔥 Lässt Animation rückwärts abspielen, wenn man hochscrollt
    });
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/home-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content mit AOS-Animation */}
      <div className="relative z-10 text-center">
        <h1
          className="text-5xl text-gray-50 md:text-6xl font-extrabold tracking-wide"
          data-aos="fade-up"
        >
          Welcome to My Website
        </h1>
        <p
          className="text-lg text-gray-300 mt-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Erlebe meine Musik und Events mit einzigartigem Stil.
        </p>
        {/* Call-to-Action Button */}
<a
  href="#about"
  className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white transition-all duration-300 rounded
  bg-[rgba(57,255,20,0.8)] shadow-[0_0_15px_#39ff14] hover:bg-[rgba(57,255,20,1)] 
  hover:shadow-[0_0_25px_#39ff14] hover:text-black"
  data-aos="fade-up"
  data-aos-delay="500"
>
  About Me
</a>

      </div>
    </div>
  );
}
