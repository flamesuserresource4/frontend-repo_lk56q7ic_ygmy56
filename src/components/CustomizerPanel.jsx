import { useState } from 'react';

const COLORS = [
  { name: 'Classic White', value: '#ffffff' },
  { name: 'Jet Black', value: '#0a0a0a' },
  { name: 'Crimson', value: '#ef4444' },
  { name: 'Royal Blue', value: '#3b82f6' },
  { name: 'Forest', value: '#16a34a' },
  { name: 'Sun', value: '#f59e0b' },
];

const SIZES = ['6', '7', '8', '9', '10', '11', '12'];

export default function CustomizerPanel({ selectedColor, onColorChange, selectedSize, onSizeChange, onAddToCart }) {
  const [material, setMaterial] = useState('matte');

  return (
    <section id="customize" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Customize your shoe</h2>
          <p className="text-zinc-600 mt-1">Pick a palette, choose your size, and select a finish.</p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold">Colorway</h3>
            <div className="mt-3 grid grid-cols-6 gap-3">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => onColorChange(c.value)}
                  className={`h-10 rounded-full border-2 transition ${selectedColor === c.value ? 'border-black' : 'border-transparent'} ring-1 ring-inset ring-zinc-200`}
                  style={{ backgroundColor: c.value }}
                  aria-label={c.name}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold">Size</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => onSizeChange(s)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${selectedSize === s ? 'border-black bg-black text-white' : 'border-zinc-300 hover:bg-zinc-50'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold">Finish</h3>
            <div className="mt-3 flex gap-2">
              {['matte', 'satin', 'glossy'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`px-4 py-2 rounded-full border text-sm capitalize transition ${material === m ? 'border-black bg-black text-white' : 'border-zinc-300 hover:bg-zinc-50'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={onAddToCart}
              className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 active:scale-[.99] transition"
            >
              Add to cart
            </button>
            <div className="text-sm text-zinc-600">
              <div>Color: <span className="font-medium" style={{ color: selectedColor }}>{selectedColor}</span></div>
              <div>Size: <span className="font-medium">{selectedSize}</span></div>
              <div>Finish: <span className="font-medium capitalize">{material}</span></div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6 bg-white">
          <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
            <div className="text-center">
              <div
                className="mx-auto h-28 w-56 rounded-xl shadow-xl"
                style={{ background: `linear-gradient(135deg, ${selectedColor}, #ffffff)` }}
              />
              <p className="mt-4 text-sm text-zinc-600">
                Tip: Interact with the 3D model above. Your selections will apply at checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
