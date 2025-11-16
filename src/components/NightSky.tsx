import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface NightSkyProps {
  showFireworks: boolean;
  showMessage: boolean;
}

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
}

function NightSky({ showFireworks, showMessage }: NightSkyProps) {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [fireworkCount, setFireworkCount] = useState(0);

  useEffect(() => {
    if (showFireworks) {
      const interval = setInterval(() => {
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF6EC7', '#95E1D3', '#F38181'];
        const newFirework = {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: 20 + Math.random() * 40,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setFireworks(prev => [...prev, newFirework]);
        setFireworkCount(prev => prev + 1);

        setTimeout(() => {
          setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
        }, 2000);
      }, 500);

      setTimeout(() => {
        clearInterval(interval);
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [showFireworks]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white animate-twinkle"
            size={Math.random() * 3 + 1}
            fill="white"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 2 + 2 + 's',
            }}
          />
        ))}
      </div>

      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
          }}
        >
          <div className="relative">
            {[...Array(30)].map((_, i) => {
              const angle = (i * 360) / 30;
              const distance = 80 + Math.random() * 40;
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-explode"
                  style={{
                    backgroundColor: firework.color,
                    transform: `rotate(${angle}deg) translateY(-${distance}px)`,
                    boxShadow: `0 0 10px ${firework.color}, 0 0 20px ${firework.color}`,
                  }}
                />
              );
            })}
          </div>
        </div>
      ))}

      {showMessage && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 mb-6 animate-glow">
              Happy Birthday!
            </h1>
            <p className="text-2xl md:text-4xl text-yellow-200 animate-slideUp" style={{ animationDelay: '0.5s' }}>
              Wishing you a day filled with joy and laughter!
            </p>
            <p className="text-xl md:text-2xl text-pink-200 mt-4 animate-slideUp" style={{ animationDelay: '1s' }}>
              May all your dreams come true! 🎉
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NightSky;
