'use client';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaHome, FaUser, FaMusic, FaCalendarAlt, FaEnvelope, FaBars } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll-Effekt mit Debounce
  useEffect(() => {
    let timeoutId = null;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // AOS Initialisierung
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ScrollSpy mit Offset für Header-Höhe
  const scrollSpyConfig = {
    spy: true,
    smooth: true,
    duration: 500,
    offset: -70, // Anpassen an deine Navbar-Höhe
    onSetActive: (to) => {
      setActiveSection(to);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.shrink : ''}`}
      data-aos="fade-down"
    >
      <div className={styles.container}>
        {/* Logo */}
        <ScrollLink 
          to="home" 
          {...scrollSpyConfig}
          className={styles.logo}
        >
          DJ/Producer
        </ScrollLink>

        {/* Burger-Menu */}
        <button 
          className={styles.burger} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>

        {/* NavLinks */}
        <ul className={`${styles.links} ${isMobileMenuOpen ? styles.open : ''}`}>
  {[
    { to: 'home', icon: <FaHome />, text: 'Home' },
    { to: 'bio', icon: <FaUser />, text: 'About' },
    { to: 'music', icon: <FaMusic />, text: 'Music' },
    { to: 'events', icon: <FaCalendarAlt />, text: 'Events' },
    { to: 'contact', icon: <FaEnvelope />, text: 'Contact' }
  ].map((link) => (
    <li key={link.to}>
      <ScrollLink
        to={link.to}
        {...scrollSpyConfig}
        className={`${styles.link} ${activeSection === link.to ? styles.active : ''}`}
        onClick={() => setIsMobileMenuOpen(false)} // Schließt das Menü beim Klicken
      >
        {link.icon}
        {!isScrolled && <span>{link.text}</span>}
      </ScrollLink>
    </li>
  ))}
</ul>

      </div>
    </nav>
  );
};

export default Navbar;