// Translations
import { useTranslation } from 'react-i18next';

// Mantine
import { Button } from '@mantine/core';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  const switchLanguage = () => {
    i18n.language === 'en'
      ? i18n.changeLanguage('es')
      : i18n.changeLanguage('en');
  };

  return (
    <Button onClick={() => switchLanguage()}>
      {i18n.language.toUpperCase()}
    </Button>
  );
}