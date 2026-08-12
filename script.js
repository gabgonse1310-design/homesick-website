(() => {
  const button = document.getElementById('languageToggle');
  const label = document.getElementById('languageLabel');
  const translatable = document.querySelectorAll('[data-en][data-es]');

  const saved = localStorage.getItem('homesick-language');
  const browserLanguage = (navigator.language || 'en').toLowerCase();
  let language = saved || (browserLanguage.startsWith('es') ? 'es' : 'en');

  const applyLanguage = (lang) => {
    language = lang;
    document.documentElement.lang = lang;

    translatable.forEach((element) => {
      element.textContent = element.dataset[lang];
    });

    label.textContent = lang === 'en' ? 'ES' : 'EN';
    button.setAttribute(
      'aria-label',
      lang === 'en' ? 'Cambiar a español' : 'Switch to English'
    );

    localStorage.setItem('homesick-language', lang);
  };

  button.addEventListener('click', () => {
    applyLanguage(language === 'en' ? 'es' : 'en');
  });

  applyLanguage(language);
})();
