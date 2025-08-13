import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PackageDetailsPage from './pages/PackageDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BeachPackagesPage from './pages/BeachPackagesPage';
import MountainPackagesPage from './pages/MountainPackagesPage';
import CulturalPackagesPage from './pages/CulturalPackagesPage';
import ContactForm from './components/ContactForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages/:id" element={<PackageDetailsPage />} />
            <Route path="/beach-packages" element={<BeachPackagesPage />} />
            <Route path="/mountain-packages" element={<MountainPackagesPage />} />
            <Route path="/cultural-packages" element={<CulturalPackagesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ContactForm />
      </div>
    </Router>
  );
}

export default App;