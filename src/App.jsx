import React, { useEffect, useState } from 'react';
import VSLPage from './components/VSLPage';
import Booking from './components/Booking';
import ThankYou from './components/ThankYou';
import QualifierModal from './components/QualifierModal';

// Simple pathname router.
//   /            main VSL
//   /booking     Calendly booking page (linkable directly)
//   /thank-you   post-booking confirmation page
const viewFromPath = (pathname) => {
  const path = pathname.replace(/\/+$/, '').toLowerCase();
  if (path.endsWith('/thank-you')) return 'thankyou';
  if (path.endsWith('/booking')) return 'booking';
  return 'vsl';
};

function App() {
  const [currentView, setCurrentView] = useState(() => viewFromPath(window.location.pathname));
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Keep the view in sync with browser back/forward.
  useEffect(() => {
    const onPopState = () => setCurrentView(viewFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCompleteQualifier = () => {
    setIsModalOpen(false);
    window.history.pushState({}, '', '/booking');
    setCurrentView('booking');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-brand-ink relative">
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
