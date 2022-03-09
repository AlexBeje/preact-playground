import { render } from 'preact';
import { App } from './app';

// Style
import './index.css';

// Translations
import './i18n';

render(<App />, document.getElementById('app'));
