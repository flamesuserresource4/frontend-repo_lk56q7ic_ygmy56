export default function SiteFooter() {
  return (
    <footer id="about" className="border-t border-zinc-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold">SoleCraft</h4>
          <p className="text-zinc-600 mt-2">
            A next-gen sneaker studio. Design in 3D, personalize every detail, and wear your story.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-semibold">Support</h5>
          <ul className="text-zinc-600 space-y-1">
            <li><a className="hover:text-zinc-900" href="#">Help Center</a></li>
            <li><a className="hover:text-zinc-900" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-zinc-900" href="#">Customization Guide</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h5 className="font-semibold">Company</h5>
          <ul className="text-zinc-600 space-y-1">
            <li><a className="hover:text-zinc-900" href="#">About us</a></li>
            <li><a className="hover:text-zinc-900" href="#">Careers</a></li>
            <li><a className="hover:text-zinc-900" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="py-4 border-t border-zinc-200 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} SoleCraft. All rights reserved.
      </div>
    </footer>
  );
}
