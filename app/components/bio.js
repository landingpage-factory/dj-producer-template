"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  useEffect(() => {
    console.log("Initializing AOS");
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 pt-16 pb-16"
      style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative z-10 text-center text-white">
        {/* Header */}
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide text-shadow-lg"
          data-aos="fade-up"
        >
          Über [Dein DJ-Name]
        </h1>

        {/* Bio-Text */}
        <p
          className="text-lg text-gray-300 max-w-3xl mx-auto mt-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Ich bin [DJ-Name], ein leidenschaftlicher DJ und Producer. Seit Jahren
          beeinflusse ich die elektronische Musikszene und bringe meine Beats
          auf Festivals und in Clubs weltweit. Meine Reise begann in den
          Underground-Clubs und hat mich bis zu den größten Festivals geführt.
        </p>

        {/* Bio-Abschnitte mit Bildern */}
        <div className="mt-16 max-w-4xl mx-auto mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Station 1 */}
            <div
              className="flex flex-col justify-between h-[400px] sm:h-[450px] text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-full h-2/3">
                <Image
                  src="/images/bio-1.jpg" // Dein erstes Bio-Bild
                  alt="Erste Gigs"
                  width={400} // Breite des Bildes
                  height={300} // Höhe des Bildes
                  className="w-full h-full object-cover shadow-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-justify leading-relaxed h-1/3 p-4 mt-8">
                <h3 className="text-xl font-semibold">Die Anfänge</h3>
                <p className="text-gray-300 mt-2">
                  Meine Reise begann in den Underground-Clubs, wo ich mit meiner
                  Leidenschaft und meinen Beats das erste Mal das Publikum
                  ergriff.
                </p>
              </div>
            </div>

            {/* Station 2 */}
            <div
              className="flex flex-col justify-between h-[400px] sm:h-[450px] text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-full h-2/3">
                <Image
                  src="/images/bio-2.jpg" // Dein zweites Bio-Bild
                  alt="Erste Erfolge"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover shadow-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-justify leading-relaxed h-1/3 p-4 mt-8">
                <h3 className="text-xl font-semibold">Der Durchbruch</h3>
                <p className="text-gray-300 mt-2">
                  Mein erster großer Gig in [Stadt/Festival] öffnete mir die Tür
                  zu einer Welt, in der ich meine Leidenschaft für Musik mit
                  Tausenden teilen konnte.
                </p>
              </div>
            </div>

            {/* Station 3 */}
            <div
              className="flex flex-col justify-between h-[400px] sm:h-[450px] text-center"
              data-aos="fade-up"
            >
              <div className="w-full h-2/3">
                <Image
                  src="/images/bio-3.jpg" // Dein drittes Bio-Bild
                  alt="Erfolg auf den Festivals"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover shadow-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-justify leading-relaxed h-1/3 p-4 mt-8">
                <h3 className="text-xl font-semibold">Erfolgreiche Festivals</h3>
                <p className="text-gray-300 mt-2">
                  Seitdem bin ich in der ganzen Welt unterwegs, um meine Musik auf
                  den größten Festivals wie [Beispiel-Festival] und
                  [Beispiel-Festival] zu spielen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA für Musik und Events */}
        <div className="flex justify-center space-x-6 mt-8 sm:mt-16">
          <ScrollLink
            to="music"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-lg px-8 py-3 font-semibold text-white bg-[rgba(57,255,20,0.8)] shadow-[0_0_15px_#39ff14] hover:bg-[rgba(57,255,20,1)] hover:shadow-[0_0_25px_#39ff14] hover:text-black hover:cursor-pointer transition-all duration-300"
          >
            Hör dir meine Musik an
          </ScrollLink>
          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-lg px-8 py-3 font-semibold text-white bg-[rgba(255,99,71,0.8)] shadow-[0_0_15px_#ff6347] hover:bg-[rgba(255,99,71,1)] hover:shadow-[0_0_25px_#ff6347] hover:text-black hover:cursor-pointer transition-all duration-300"
          >
            Sieh dir meine Events an
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
