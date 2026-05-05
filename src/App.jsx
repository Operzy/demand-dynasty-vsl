import React, { useState } from 'react';
import VSLPage from './components/VSLPage';
import Booking from './components/Booking';
import QualifierModal from './components/QualifierModal';

function App() {
  const [currentView, setCurrentView] = useState('vsl');
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
      ) : (
        <Booking />
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
