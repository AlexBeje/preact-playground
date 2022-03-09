// React
import { useEffect } from 'react';

// Translations
import { useTranslation } from 'react-i18next';

// Mantine Hooks
import { useLocalStorageValue } from '@mantine/hooks/';

// Mantine Components
import { Button } from '@mantine/core';

export function LanguageSwitcher() {
  const [localStorageLanguage, setlocalStorageLanguage] = useLocalStorageValue({
    key: 'i18nextLng',
  });
  const { i18n } = useTranslation();
  let language = 'en';

  useEffect(() => {
    !localStorageLanguage
      ? setlocalStorageLanguage('en')
      : setlocalStorageLanguage(localStorageLanguage);

    language = localStorageLanguage;
  }, []);

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
    <Button onClick={() => switchLanguage()}>{language.toUpperCase()}</Button>
  );
}
