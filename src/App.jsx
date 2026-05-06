import React, { useState } from 'react';
import VSLPage from './components/VSLPage';
import Booking from './components/Booking';
import ThankYou from './components/ThankYou';
import QualifierModal from './components/QualifierModal';

function App() {
  // Simple router based on pathname
  const initialView = window.location.pathname.includes('thank-you') ? 'thankyou' : 'vsl';
  const [currentView, setCurrentView] = useState(initialView);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCompleteQualifier = () => {
    setIsModalOpen(false);
    setCurrentView('booking');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light relative">
      {currentView === 'vsl' ? (
        <VSLPage onOpenQualifier={handleOpenModal} />
      ) : currentView === 'booking' ? (
        <Booking />
      ) : (
        <ThankYou />
      )}
      
      {isModalOpen && (
        <QualifierModal 
          onClose={handleCloseModal} 
          onComplete={handleCompleteQualifier} 
        />
      )}
    </div>
  );
}

export default App;
