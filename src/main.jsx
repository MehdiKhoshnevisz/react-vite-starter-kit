import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { NextUIProvider } from '@nextui-org/react';

import App from '@/components/App';

import '@/assets/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
);