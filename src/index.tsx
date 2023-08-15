import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DisplayControls } from './Contexts/displayContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Theme } from './Theme';
import { SlideStorage } from './Contexts/slideContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
      <DisplayControls>
        <SlideStorage>
          <App />
        </SlideStorage>
      </DisplayControls>
    </ ThemeProvider>
  </React.StrictMode>
);
