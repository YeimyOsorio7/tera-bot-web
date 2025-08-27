import { useState } from 'react';

const NotasClinicas = () => {
  const [notas, setNotas] = useState([
    {
      id: 1,
      fecha: '2025-06-01',
      paciente: 'Anónimo 1',
      contenido: 'Paciente mostró señales de ansiedad moderada. Se recomendó seguimiento quincenal y práctica de técnicas de respiración.'
    },
    {
      id: 2,
      fecha: '2025-06-03',
      paciente: 'Anónimo 2',
      contenido: 'Se trabajó sobre autoestima. Se recomendó mantener un diario de pensamientos positivos.'
    }
  ]);

  const [nuevaNota, setNuevaNota] = useState({ fecha: '', paciente: '', contenido: '' });

  const agregarNota = () => {
    if (!nuevaNota.fecha || !nuevaNota.paciente || !nuevaNota.contenido) return;
    const nueva = { ...nuevaNota, id: Date.now() };
    setNotas([nueva, ...notas]);
    setNuevaNota({ fecha: '', paciente: '', contenido: '' });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">📝 Notas Clínicas</h1>

      <div className="mb-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4 rounded-lg shadow space-y-2">
        <h2 className="text-lg font-semibold">Agregar nueva nota</h2>
        <input
          type="date"
          value={nuevaNota.fecha}
          onChange={(e) => setNuevaNota({ ...nuevaNota, fecha: e.target.value })}
          className="w-full px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900"
        />
        <input
          type="text"
          placeholder="Nombre o código del paciente"
          value={nuevaNota.paciente}
          onChange={(e) => setNuevaNota({ ...nuevaNota, paciente: e.target.value })}
          className="w-full px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900"
        />
        <textarea
          rows="3"
          placeholder="Contenido de la nota"
          value={nuevaNota.contenido}
          onChange={(e) => setNuevaNota({ ...nuevaNota, contenido: e.target.value })}
          className="w-full px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900"
        />
        <button
          onClick={agregarNota}
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded"
        >
          Guardar Nota
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notas.map((nota) => (
          <div key={nota.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Fecha:</strong> {nota.fecha}<br />
              <strong>Paciente:</strong> {nota.paciente}
            </p>
            <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">{nota.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotasClinicas;
