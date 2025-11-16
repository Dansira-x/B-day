import { Cake, Wine, Candy, IceCream, Cherry, Coffee } from 'lucide-react';

function BirthdayTable() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-pink-100 to-pink-50 flex items-center justify-center py-20 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-pink-600 mb-12 animate-slideDown">
          Let's Celebrate!
        </h2>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-full h-32 -top-8 animate-slideUp"
               style={{ animationDelay: '0.2s' }} />

          <div className="bg-gradient-to-b from-red-600 to-red-700 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 animate-shine" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
              <div className="flex flex-col items-center animate-bounceIn" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white rounded-full p-6 shadow-xl mb-4 transform hover:scale-110 transition-transform">
                  <Cake className="w-16 h-16 text-pink-500" />
                </div>
                <p className="text-white text-lg font-semibold">Birthday Cake</p>
                <div className="mt-2 flex gap-1">
                  <div className="w-2 h-8 bg-yellow-300 rounded-sm animate-flicker" />
                  <div className="w-2 h-8 bg-yellow-300 rounded-sm animate-flicker" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-8 bg-yellow-300 rounded-sm animate-flicker" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>

              <div className="flex flex-col items-center animate-bounceIn" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white rounded-full p-6 shadow-xl mb-4 transform hover:scale-110 transition-transform">
                  <Wine className="w-16 h-16 text-purple-500" />
                </div>
                <p className="text-white text-lg font-semibold">Soft Drinks</p>
                <div className="mt-2 flex gap-2">
                  <div className="w-4 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-sm" />
                  <div className="w-4 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-sm" />
                  <div className="w-4 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm" />
                </div>
              </div>

              <div className="flex flex-col items-center animate-bounceIn" style={{ animationDelay: '0.5s' }}>
                <div className="bg-white rounded-full p-6 shadow-xl mb-4 transform hover:scale-110 transition-transform">
                  <Candy className="w-16 h-16 text-red-500" />
                </div>
                <p className="text-white text-lg font-semibold">Candies</p>
                <div className="mt-2 flex gap-1">
                  <div className="w-6 h-6 bg-pink-400 rounded-full" />
                  <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                  <div className="w-6 h-6 bg-green-400 rounded-full" />
                </div>
              </div>

              <div className="flex flex-col items-center animate-bounceIn" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white rounded-full p-6 shadow-xl mb-4 transform hover:scale-110 transition-transform">
                  <IceCream className="w-16 h-16 text-blue-400" />
                </div>
                <p className="text-white text-lg font-semibold">Ice Cream</p>
                <div className="mt-2 flex gap-1">
                  <div className="w-8 h-10 bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-full" />
                  <div className="w-8 h-10 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-t-full" />
                </div>
              </div>

              <div className="flex flex-col items-center animate-bounceIn" style={{ animationDelay: '0.7s' }}>
                <div className="bg-white rounded-full p-6 shadow-xl mb-4 transform hover:scale-110 transition-transform">
                  <Cherry className="w-16 h-16 text-red-600" />
                </div>
                <p className="text-white text-lg font-semibold">Fruits</p>
                <div className="mt-2 flex gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full" />
                  <div className="w-6 h-6 bg-orange-500 rounded-full" />
                  <div className="w-6 h-6 bg-purple-500 rounded-full" />
                </div>
              </div>

              <div className="flex flex-col items-center animate-bounceIn" style={{ animationDelay: '0.8s' }}>
                <div className="bg-white rounded-full p-6 shadow-xl mb-4 transform hover:scale-110 transition-transform">
                  <Coffee className="w-16 h-16 text-amber-700" />
                </div>
                <p className="text-white text-lg font-semibold">Hot Drinks</p>
                <div className="mt-2">
                  <div className="w-12 h-10 bg-gradient-to-b from-amber-600 to-amber-800 rounded-sm">
                    <div className="w-full h-2 bg-white/30 rounded-full mt-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white text-2xl md:text-3xl font-bold animate-pulse">
                Enjoy Your Special Day! 🎈
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full animate-slideUp"
               style={{ animationDelay: '0.3s' }} />
        </div>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {['🎈', '🎉', '🎁', '🎊', '🎂', '✨'].map((emoji, i) => (
            <span
              key={i}
              className="text-5xl animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BirthdayTable;
