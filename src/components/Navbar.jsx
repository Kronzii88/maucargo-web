import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/MAU BULAT.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.services'), href: '#services' },
    { name: t('navbar.about'), href: '#whyus' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 shadow-lg backdrop-blur-sm' : 'bg-navy'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="MAU Cargo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-white">
              MAU<span className="text-accent">Cargo</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-colors duration-200 font-medium"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <a
              href="#contact"
              className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accentDark transition-colors duration-200"
            >
              {language === 'en' ? 'Get a Quote' : 'Dapatkan Penawaran'}
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-white px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors font-medium"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accentDark transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'en' ? 'Get a Quote' : 'Dapatkan Penawaran'}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
