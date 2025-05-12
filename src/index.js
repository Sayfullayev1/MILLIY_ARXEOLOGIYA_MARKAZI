import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import { LanguageProvider } from './context/LanguageContext';



/* Home Page*/
import HomePage from './pages/homePage/HomePage';


/* About Pages*/
import HistoryOfTheCenterPage from './pages/aboutPages/historyOfTheCenterPage/HistoryOfTheCenterPage';


    /* Departments and Laboratories Pages*/
    import BioarchaeologyLaboratoryPage from './pages/aboutPages/departmentsAndLaboratoriesPages/bioarchaeology-laboratoryPage/BioarchaeologyLaboratoryPage';
    import InterdisciplinaryResearchPage from './pages/aboutPages/departmentsAndLaboratoriesPages/interdisciplinary-researchPage/InterdisciplinaryResearchPage';
    import SilkRoadArcheologyDepartmentPage from './pages/aboutPages/departmentsAndLaboratoriesPages/silk-road-archeology-departmentPage/SilkRoadArcheologyDepartmentPage';
    import LandscapeArcheologyLaboratoryPage from './pages/aboutPages/departmentsAndLaboratoriesPages/landscape-archeology-laboratoryPage/LandscapeArcheologyLaboratoryPage';

    
import Management from './pages/aboutPages/management/Management';
import CharterOfTheCenterPage from './pages/aboutPages/charterOfTheCenterPage/CharterOfTheCenterPage';
import AcademicsOfTheCenterPage from './pages/aboutPages/academicsOfTheCenterPage/AcademicsOfTheCenterPage';




/* Contacts Page*/ 
import ContactsPage from './pages/contactsPage/ContactsPage';





/* Publications Page*/

import NewsPage from './pages/newsPages/newsPage/NewsPage';
import NewsDetailPage from './pages/newsPages/newsDetailPage/NewsDetailPage';












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>

      <LanguageProvider>

        <Routes>

          <Route element={<DashboardLayout />}>

            {/* Home Page */}

            <Route path="/:lang?" element={<HomePage />} />


            {/* About Pages*/}

            <Route path="/:lang?/markaz-tarixi" element={<HistoryOfTheCenterPage />} />


              {/* Departments and Laboratories Pages*/}

              <Route  path="/:lang?/bioarchaeology-laboratory" element={<BioarchaeologyLaboratoryPage />} />

              <Route path='/:lang?/interdisciplinary-research' element={<InterdisciplinaryResearchPage />} />

              <Route path='/:lang?/silk-road-archeology-department' element={<SilkRoadArcheologyDepartmentPage />} />
              
              <Route path='/:lang?/landscape-archeology-laboratory' element={<LandscapeArcheologyLaboratoryPage />} />



            <Route path='/:lang?/charter-of-the-center' element={<CharterOfTheCenterPage />} />


            <Route path='/:lang?/academics-of-the-center' element={<AcademicsOfTheCenterPage />} />

            <Route path='/:lang?/management' element={<Management />} />


            {/* Contacts Page */}

            <Route path="/:lang?/aloqa" element={<ContactsPage />} />



              {/* News Page */}

              <Route path="/:lang?/news" element={<NewsPage />} />


              <Route path="/:lang?/news/:id" element={<NewsDetailPage />} />



          </Route>



          

        </Routes>

      </LanguageProvider>

    </BrowserRouter>
  //</React.StrictMode>
);

