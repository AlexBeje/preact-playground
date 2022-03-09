// Translations
import { useTranslation } from 'react-i18next';

// Mantine Hooks
import { useLocalStorageValue } from '@mantine/hooks/';

// Mantine Components
import { Button } from '@mantine/core';

export function LanguageSwitcher() {
  const [localStorageLanguage, setlocalStorageLanguage] = useLocalStorageValue({
    key: 'i18nextLng',
    default: 'en',
  });
  const { i18n } = useTranslation();

  const switchLanguage = () => {
    if (localStorageLanguage === 'en') {
      setlocalStorageLanguage('es');
      i18n.changeLanguage('es');
    } else {
      setlocalStorageLanguage('en');
      i18n.changeLanguage('en');
    }
  };

  return (
    <Button onClick={() => switchLanguage()}>
      {localStorageLanguage.toUpperCase()}
    </Button>
  );
}
