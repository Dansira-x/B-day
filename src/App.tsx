import { useState, useEffect } from 'react';
import Countdown from './components/Countdown';
import NightSky from './components/NightSky';
import BirthdayTable from './components/BirthdayTable';

function App() {
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [fireworksFinished, setFireworksFinished] = useState(false);
  const [messageShown, setMessageShown] = useState(false);
  const [scrollToTable, setScrollToTable] = useState(false);

  const targetDate = new Date('2025-11-16T23:59:59');

  const handleCountdownComplete = () => {
    setCountdownFinished(true);
    setTimeout(() => {
      setFireworksFinished(true);
    }, 8000);
  };

  useEffect(() => {
    if (fireworksFinished) {
      setTimeout(() => {
        setMessageShown(true);
      }, 500);
      setTimeout(() => {
        setScrollToTable(true);
      }, 5000);
    }
  }, [fireworksFinished]);

  useEffect(() => {
    if (scrollToTable) {
      const tableElement = document.getElementById('birthday-table');
      if (tableElement) {
        tableElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [scrollToTable]);

  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen">
        {!countdownFinished ? (
          <Countdown targetDate={targetDate} onComplete={handleCountdownComplete} />
        ) : (
          <NightSky
            showFireworks={countdownFinished}
            showMessage={messageShown}
          />
        )}
      </div>
      {scrollToTable && (
        <div id="birthday-table" className="min-h-screen">
          <BirthdayTable />
        </div>
      )}
    </div>
  );
}

export default App;
