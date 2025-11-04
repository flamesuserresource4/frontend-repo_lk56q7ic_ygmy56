import { useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import CustomizerPanel from './components/CustomizerPanel.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import SiteFooter from './components/SiteFooter.jsx';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('#111827');
  const [selectedSize, setSelectedSize] = useState('9');

  const accent = useMemo(() => selectedColor, [selectedColor]);

  const handleStartCustomize = () => {
    const el = document.querySelector('#customize');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAddToCart = () => {
    // Simple UX feedback for this static demo
    alert(`Added custom sneaker to cart\nColor: ${selectedColor}\nSize: ${selectedSize}`);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <Hero3D onStartCustomize={handleStartCustomize} />

      <main>
        <CustomizerPanel
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          onAddToCart={handleAddToCart}
        />

        <ProductShowcase accentColor={accent} />
      </main>

      <SiteFooter />
    </div>
  );
}
