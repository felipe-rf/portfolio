export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center text-gray-300">
        <p>© {currentYear} Felipe Ferreira. Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
