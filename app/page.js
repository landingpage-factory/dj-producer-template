import Bio from "./components/bio";
import HomeIntro from "./components/home";
import Music from "./components/music";
import Events from "./components/events";
import Contact from "./components/contact";

export default function Home() {
  
  return (
    <div>
      <main>
        {/* Home Section */}
        <section id="home">
          <HomeIntro />
        </section>

        {/* About Section */}
        <section id="bio">
          <Bio />
        </section>

        {/* Music Section */}
        <section id="music">
          <Music />
        </section>

        {/* Events Section */}
        <section id="events">
          <Events />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
