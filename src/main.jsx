import { render } from 'preact';
import { App } from './app';
import './index.css';

import { MantineProvider } from '@mantine/core';

// Translations
import './i18n';

render(
  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
    <App />
  </MantineProvider>,
  document.getElementById('app')
);
