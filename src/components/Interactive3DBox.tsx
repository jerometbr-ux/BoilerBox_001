import { useState, useRef } from "react";
import { Wifi, Zap, BookOpen, Users } from "lucide-react";

export default function Interactive3DBox() {
  const [rotation, setRotation] = useState({ x: -20, y: -30 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = (e.clientX - rect.left - rect.width / 2) / 10;

    setRotation({ x: -20 + x, y: -30 + y });
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="w-full py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-red-500" />
          <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
            Interactive
          </span>
          <div className="h-px w-12 bg-red-500" />
        </div>
        <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Meet the BoilerBox 360
        </h3>
        <p className="text-gray-400 max-w-lg mx-auto text-sm">
          Drag to rotate. A compact powerhouse that transforms any space into a learning hub.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="relative h-96 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-2xl border border-gray-800 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent" />

          <div
            className="relative w-48 h-32 transition-transform duration-75"
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl border-2 border-gray-600" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="text-white font-black text-lg mb-1 tracking-tight">
                BoilerBox
              </div>
              <div className="text-red-400 text-xs font-bold tracking-widest">360</div>

              <div className="flex gap-2 mt-3 absolute bottom-3 left-3 right-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            </div>

            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-gray-500 text-xs text-center">
            Drag to explore
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-700/50 transition-colors">
              <div className="w-8 h-8 bg-red-600/10 rounded flex items-center justify-center mb-3">
                <Wifi size={16} className="text-red-400" />
              </div>
              <div className="text-white font-bold text-sm mb-1">Offline Ready</div>
              <div className="text-gray-500 text-xs">WiFi or Ethernet anywhere</div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-700/50 transition-colors">
              <div className="w-8 h-8 bg-red-600/10 rounded flex items-center justify-center mb-3">
                <Users size={16} className="text-red-400" />
              </div>
              <div className="text-white font-bold text-sm mb-1">20 Learners</div>
              <div className="text-gray-500 text-xs">Simultaneous connections</div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-700/50 transition-colors">
              <div className="w-8 h-8 bg-red-600/10 rounded flex items-center justify-center mb-3">
                <Zap size={16} className="text-red-400" />
              </div>
              <div className="text-white font-bold text-sm mb-1">All-Day Power</div>
              <div className="text-gray-500 text-xs">10,000 mAh battery pack</div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-700/50 transition-colors">
              <div className="w-8 h-8 bg-red-600/10 rounded flex items-center justify-center mb-3">
                <BookOpen size={16} className="text-red-400" />
              </div>
              <div className="text-white font-bold text-sm mb-1">Built-in LMS</div>
              <div className="text-gray-500 text-xs">Moodle 4.5+ included</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950/40 to-gray-900 border border-red-900/30 rounded-xl p-5">
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">
              Key Specs
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Storage:</span>
                <span className="font-semibold text-white">128GB SD Card</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Connectivity:</span>
                <span className="font-semibold text-white">WiFi & Ethernet</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Casing:</span>
                <span className="font-semibold text-white">Watertight Hardcase</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Setup Time:</span>
                <span className="font-semibold text-white">Plug & Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
