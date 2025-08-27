import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Layout = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-purple-100 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors">
      
      {/* Header */}
      <header className="w-full flex flex-wrap items-center justify-between px-6 py-4 bg-white/70 dark:bg-gray-900/70 shadow-md backdrop-blur-md">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-sky-700 dark:text-sky-300 flex items-center gap-2">
          <span role="img" aria-label="brain">🧠</span> Chat Emocional
        </h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-2">
            <Link
              to="/"
              className={`px-3 py-1 rounded transition ${
                pathname === '/' ? 'bg-sky-500 text-white' : 'hover:bg-sky-200 dark:hover:bg-gray-700'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/cita"
              className={`px-3 py-1 rounded transition ${
                pathname === '/cita' ? 'bg-sky-500 text-white' : 'hover:bg-sky-200 dark:hover:bg-gray-700'
              }`}
            >
              Agendar
            </Link>
          </nav>

          <ThemeToggle />
        </div>

        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur px-6 py-4 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`px-3 py-2 rounded transition ${
              pathname === '/' ? 'bg-sky-500 text-white' : 'hover:bg-sky-200 dark:hover:bg-gray-700'
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/cita"
            onClick={() => setMenuOpen(false)}
            className={`px-3 py-2 rounded transition ${
              pathname === '/cita' ? 'bg-sky-500 text-white' : 'hover:bg-sky-200 dark:hover:bg-gray-700'
            }`}
          >
            Agendar
          </Link>
          <ThemeToggle />
        </div>
      )}

      {/* Contenido principal */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
