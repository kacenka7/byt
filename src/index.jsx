import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { Cursor } from './components/Cursor/Cursor';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(
  <div>
    <HomePage />;
    <Cursor/>;
  </div>

);
