import { useState } from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-zinc-100"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="font-bold text-xl tracking-tight">
              SoleCraft
            </a>
            <div className="hidden md:flex items-center gap-6 ml-8">
              <a href="#customize" className="text-sm text-zinc-600 hover:text-zinc-900">Customize</a>
              <a href="#featured" className="text-sm text-zinc-600 hover:text-zinc-900">Featured</a>
              <a href="#about" className="text-sm text-zinc-600 hover:text-zinc-900">About</a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-zinc-100 rounded-full px-3 py-1.5">
              <Search className="w-4 h-4 text-zinc-500" />
              <input
                className="bg-transparent outline-none px-2 w-48 text-sm"
                placeholder="Search sneakers"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-zinc-100" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-zinc-100" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#customize" className="block px-2 py-2 rounded-lg hover:bg-zinc-100">Customize</a>
            <a href="#featured" className="block px-2 py-2 rounded-lg hover:bg-zinc-100">Featured</a>
            <a href="#about" className="block px-2 py-2 rounded-lg hover:bg-zinc-100">About</a>
          </div>
        )}
      </nav>
    </header>
  );
}
