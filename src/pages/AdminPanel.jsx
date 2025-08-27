import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth !== 'true') {
      navigate('/login');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-50 dark:bg-gray-800 text-center text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-sky-700 dark:text-sky-300">🗂️ Panel de la Psicóloga</h1>
      <p className="mb-6">Aquí podrá revisar citas, registros y más funcionalidades futuras.</p>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default AdminPanel;
