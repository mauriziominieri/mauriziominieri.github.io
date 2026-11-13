import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const brandAccent = getComputedStyle(document.documentElement)
  .getPropertyValue('--brand-accent')
  .trim();
if (brandAccent) {
  document
    .querySelectorAll('meta[name="theme-color"], meta[name="msapplication-TileColor"]')
    .forEach((meta) => {
      meta.setAttribute('content', brandAccent);
    });
}

createRoot(document.getElementById('root')!).render(<App />);
