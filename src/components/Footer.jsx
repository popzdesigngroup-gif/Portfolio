export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-dim text-sm text-center md:text-left">
          &copy; 2026 Pranav Rowthri.
        </p>
        <p className="text-text-muted text-sm text-center md:text-right">
          Helping businesses build modern websites.
        </p>
      </div>
    </footer>
  );
}
