import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18next from 'i18next';
import global_eng from './translations/eng/global.json'
import global_uzb from './translations/uzb/global.json'
import global_kor from './translations/kor/global.json'
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_eng,
    },

    uz: {
      global: global_uzb,
    },

    ko: {
      global: global_kor,
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <I18nextProvider i18n={i18next} >
      <App />
      <ToastContainer/>
    </I18nextProvider>
  </React.StrictMode>
);
