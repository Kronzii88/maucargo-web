import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <p className="text-gray-400">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
