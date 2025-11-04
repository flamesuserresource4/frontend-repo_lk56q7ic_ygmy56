import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AeroRun Pro',
    price: 159,
    rating: 4.8,
    gradient: 'from-fuchsia-500 to-indigo-500',
  },
  {
    id: 2,
    name: 'StreetGlide',
    price: 139,
    rating: 4.6,
    gradient: 'from-amber-500 to-rose-500',
  },
  {
    id: 3,
    name: 'TrailFlex',
    price: 169,
    rating: 4.9,
    gradient: 'from-emerald-500 to-cyan-500',
  },
];

export default function ProductShowcase({ accentColor = '#111827' }) {
  return (
    <section id="featured" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Featured drops</h2>
            <p className="text-zinc-600 mt-1">Curated styles crafted by our community.</p>
          </div>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white hover:shadow-md transition">
              <div className={`aspect-[4/3] w-full bg-gradient-to-br ${p.gradient} relative`}>
                <div
                  className="absolute top-4 left-4 h-9 w-9 rounded-full border-2"
                  style={{ borderColor: accentColor, backgroundColor: '#fff' }}
                  title="Your colorway"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="text-xs text-zinc-600">{p.rating}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-zinc-600">Men & Women • Neutral ride</p>
                  <p className="font-semibold">${p.price}</p>
                </div>
                <button
                  className="mt-4 w-full rounded-full border border-zinc-300 py-2.5 text-sm hover:bg-zinc-50"
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
