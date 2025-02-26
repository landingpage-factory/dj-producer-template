// landingpage-2.0/app/components/contact.js

export default function Contact() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center grayscale bg-black bg-opacity-90 px-4"
      style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl text-gray-50 md:text-6xl font-extrabold tracking-wide">
          Contact
        </h1>
      </div>
    </div>
  );
}
