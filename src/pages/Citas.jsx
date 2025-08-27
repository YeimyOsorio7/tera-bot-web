import { useState } from 'react';

const Citas = () => {
  const [citas, setCitas] = useState([
    {
      nombre: 'Ana López',
      email: 'ana@example.com',
      fecha: '2025-06-02',
      hora: '10:00',
      motivo: 'Ansiedad y estrés',
      estado: 'Pendiente',
    },
    {
      nombre: 'Carlos Méndez',
      email: 'carlos@example.com',
      fecha: '2025-06-03',
      hora: '14:30',
      motivo: 'Duelo reciente',
      estado: 'Atendida',
    },
    {
      nombre: 'Lucía Ramírez',
      email: 'lucia@example.com',
      fecha: '2025-06-03',
      hora: '16:00',
      motivo: 'Problemas familiares',
      estado: 'Pendiente',
    },
  ]);

  const [filtroEstado, setFiltroEstado] = useState('');
  const [filtroFecha, setFiltroFecha] = useState('');
  const [filtroNombre, setFiltroNombre] = useState('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const actualizarEstado = (index, nuevoEstado) => {
    const nuevasCitas = [...citas];
    nuevasCitas[index].estado = nuevoEstado;
    setCitas(nuevasCitas);
  };

  const citasFiltradas = citas.filter((cita) => {
    const coincideEstado = filtroEstado ? cita.estado === filtroEstado : true;
    const coincideFecha = filtroFecha ? cita.fecha === filtroFecha : true;
    const coincideNombre = cita.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
    return coincideEstado && coincideFecha && coincideNombre;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">
        <span role="img" aria-label="calendar">📅</span> Citas Agendadas
      </h1>

      {/* Botón para mostrar filtros en móvil */}
      <div className="sm:hidden mb-4">
        <button
          onClick={() => setMostrarFiltros(!mostrarFiltros)}
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded shadow w-full"
        >
          {mostrarFiltros ? 'Ocultar filtros' : 'Mostrar filtros'}
        </button>
      </div>

      {/* Filtros */}
      <div className={`mb-6 ${mostrarFiltros ? '' : 'hidden'} sm:flex sm:flex-wrap gap-4`}>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-semibold mb-1">Buscar por nombre:</label>
          <input
            type="text"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
            placeholder="Ej. Ana, Carlos..."
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
          />
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-semibold mb-1">Filtrar por estado:</label>
          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
          >
            <option value="">Todos</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Atendida">Atendida</option>
            <option value="Cancelada">Cancelada</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-semibold mb-1">Filtrar por fecha:</label>
          <input
            type="date"
            value={filtroFecha}
            onChange={(e) => setFiltroFecha(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
          />
        </div>
      </div>

      {/* Tabla */}
      <div className="w-full overflow-x-auto rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <table className="min-w-full text-sm divide-y divide-gray-200 dark:divide-gray-600">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Nombre</th>
              <th className="px-4 py-2 text-left font-semibold">Fecha</th>
              <th className="px-4 py-2 text-left font-semibold">Hora</th>
              <th className="px-4 py-2 text-left font-semibold">Motivo</th>
              <th className="px-4 py-2 text-left font-semibold">Estado</th>
              <th className="px-4 py-2 text-left font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
            {citasFiltradas.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  No hay citas que coincidan con los filtros aplicados.
                </td>
              </tr>
            ) : (
              citasFiltradas.map((cita, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2">{cita.nombre}</td>
                  <td className="px-4 py-2">{cita.fecha}</td>
                  <td className="px-4 py-2">{cita.hora}</td>
                  <td className="px-4 py-2">{cita.motivo}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      cita.estado === 'Pendiente'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100'
                        : cita.estado === 'Atendida'
                        ? 'bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100'
                        : 'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-100'
                    }`}>
                      {cita.estado}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-start">
                    {cita.estado !== 'Atendida' && (
                      <button
                        onClick={() => actualizarEstado(idx, 'Atendida')}
                        className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Atendida
                      </button>
                    )}
                    {cita.estado !== 'Cancelada' && (
                      <button
                        onClick={() => actualizarEstado(idx, 'Cancelada')}
                        className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancelar
                      </button>
                    )}
                    {cita.estado !== 'Pendiente' && (
                      <button
                        onClick={() => actualizarEstado(idx, 'Pendiente')}
                        className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11l-1-2m0 0l1-2H3v4z" />
                        </svg>
                        Pendiente
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Citas;
