import { useState, useEffect } from 'react';
import { Gift, Sparkles } from 'lucide-react';

interface CountdownProps {
  targetDate: Date;
  onComplete: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown({ targetDate, onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 animate-fadeIn">
        <div className="flex justify-center gap-4 mb-8">
          <Gift className="w-12 h-12 text-pink-300 animate-bounce" />
          <Sparkles className="w-12 h-12 text-yellow-300 animate-pulse" />
          <Gift className="w-12 h-12 text-pink-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slideDown">
          Birthday Countdown
        </h1>

        <p className="text-xl md:text-2xl text-pink-200 mb-12 animate-slideUp">
          Something magical is about to happen...
        </p>

        <div className="flex gap-4 md:gap-8 justify-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] border-2 border-white/20 shadow-xl animate-scaleIn transform hover:scale-105 transition-transform"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-pink-200 uppercase tracking-wider">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Countdown;
