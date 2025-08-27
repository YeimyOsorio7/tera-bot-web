import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth !== 'true') navigate('/login');
  }, []);

  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? 'bg-sky-500 text-white px-3 py-2 rounded' : 'hover:bg-sky-200 dark:hover:bg-gray-700 px-3 py-2 rounded';

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar en pantallas grandes */}
      <aside className="hidden sm:flex flex-col w-64 bg-white dark:bg-gray-800 shadow-lg p-4 space-y-4">
        <h2 className="text-xl font-bold text-sky-600 dark:text-sky-300">🧠 Psicóloga</h2>

        <nav className="flex flex-col gap-2">
          <NavLink to="/admin/citas" className={navLinkClass}>📅 Citas</NavLink>
          <NavLink to="/admin/conversaciones" className={navLinkClass}>💬 Conversaciones</NavLink>
          <NavLink to="/admin/notas" className={navLinkClass}>📝 Notas clínicas</NavLink>
          <NavLink to="/admin/estadisticas" className={navLinkClass}>📊 Estadísticas</NavLink>
          <NavLink to="/admin/recursos" className={navLinkClass}>📁 Recursos</NavLink>
          <NavLink to="/admin/registro" className={navLinkClass}>🧾 Registro</NavLink>
          <NavLink to="/admin/pacientes" className={navLinkClass}>👩‍⚕️ Pacientes</NavLink>
        </nav>

        <button onClick={logout} className="mt-10 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded">
          🚪 Cerrar sesión
        </button>

        <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </aside>

      {/* Menú hamburguesa en pantallas pequeñas */}
      <div className="sm:hidden flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
        <h2 className="text-lg font-bold text-sky-600 dark:text-sky-300">🧠 Psicóloga</h2>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">☰</button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 shadow px-4 py-4 space-y-4">
          <NavLink to="/admin/citas" onClick={() => setMenuOpen(false)} className={navLinkClass}>📅 Citas</NavLink>
          <NavLink to="/admin/conversaciones" onClick={() => setMenuOpen(false)} className={navLinkClass}>💬 Conversaciones</NavLink>
          <NavLink to="/admin/notas" onClick={() => setMenuOpen(false)} className={navLinkClass}>📝 Notas clínicas</NavLink>
          <NavLink to="/admin/estadisticas" onClick={() => setMenuOpen(false)} className={navLinkClass}>📊 Estadísticas</NavLink>
          <NavLink to="/admin/recursos" onClick={() => setMenuOpen(false)} className={navLinkClass}>📁 Recursos</NavLink>
          <NavLink to="/admin/registro" onClick={() => setMenuOpen(false)} className={navLinkClass}>🧾 Registro</NavLink>
          <NavLink to="/admin/pacientes" onClick={() => setMenuOpen(false)} className={navLinkClass}>👩‍⚕️ Pacientes</NavLink>
          <button onClick={logout} className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded">
            🚪 Cerrar sesión
          </button>
          <ThemeToggle />
        </div>
      )}

      {/* Contenido principal */}
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
