import { useState } from 'react';

import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

import { useColorScheme, useLocalStorageValue } from '@mantine/hooks';

export function Theme({ children }) {
  const [localStorageColorScheme, setlocalStorageColorScheme] =
    useLocalStorageValue({
      key: 'color-scheme',
    });

  const systemColorScheme = !localStorageColorScheme && useColorScheme();

  const [colorScheme, setColorScheme] = useState(
    systemColorScheme ? systemColorScheme : localStorageColorScheme
  );

  const toggleColorScheme = (value) => {
    setlocalStorageColorScheme(
      value || (colorScheme === 'dark' ? 'light' : 'dark')
    );
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
