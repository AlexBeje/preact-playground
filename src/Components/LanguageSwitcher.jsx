// Translations
import { useTranslation } from 'react-i18next';

// Mantine
import { Button } from '@mantine/core';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.language === 'es'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('es');
  };

  return (
    <Button onClick={() => switchLanguage()}>
      {i18n.language === 'en' ? 'EN' : 'ES'}
    </Button>
  );
}
