import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Sincronizza il meta theme-color del browser con l'unico colore principale in index.css
const brandAccent = getComputedStyle(document.documentElement)
  .getPropertyValue('--brand-accent')
  .trim();
if (brandAccent) {
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute('content', brandAccent);
  }
}

createRoot(document.getElementById('root')!).render(<App />);
