import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import { LanguageProvider } from './context/LanguageContext';

import HomePage from './pages/homePage/HomePage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import HistoryOfTheCenterPage from './pages/historyOfTheCenterPage/HistoryOfTheCenterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>

      <LanguageProvider>

        <Routes>

          <Route element={<DashboardLayout />}>

            <Route path="/:lang?" element={<HomePage />} />

            <Route path="/:lang?/aloqa" element={<ContactsPage />} />

            <Route path="/:lang?/markaz-tarixi" element={<HistoryOfTheCenterPage />} />
          </Route>

        </Routes>

      </LanguageProvider>

    </BrowserRouter>
  //</React.StrictMode>
);

