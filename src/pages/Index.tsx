
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import ProjectsPage from '@/components/ProjectsPage';
import GetInvolvedPage from '@/components/GetInvolvedPage';
import ShopPage from '@/components/ShopPage';
import MembersPage from '@/components/MembersPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'get-involved':
        return <GetInvolvedPage />;
      case 'shop':
        return <ShopPage />;
      case 'members':
        return <MembersPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
