import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero3D({ onStartCustomize }) {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6YVJmHtkobaN6D-k/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
        <div className="bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-sm border border-zinc-200">
          <div className="flex items-center gap-2 text-amber-500 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500" />
            ))}
            <span className="text-xs text-zinc-600 ml-2">Top-rated comfort</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Design your dream sneakers in 3D
          </h1>
          <p className="text-zinc-600 mt-3 max-w-xl">
            Mix colors, materials, and finishes. Spin, zoom, and explore every angle before you buy.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={onStartCustomize}
              className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-zinc-800 active:scale-[.99] transition"
            >
              Start customizing
            </button>
            <a href="#featured" className="px-5 py-2.5 rounded-full border border-zinc-300 hover:bg-zinc-50">
              Browse featured
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
