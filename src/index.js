import React from 'react';
import ReactDOM from 'react-dom/client';
import Alfredo from './Alfredo';
import { GlobalContextProvider } from './Context/GlobalContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Alfredo />
    </GlobalContextProvider>
  </React.StrictMode>
);
