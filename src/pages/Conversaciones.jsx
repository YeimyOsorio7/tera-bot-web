import { useState } from 'react';

const Conversaciones = () => {
  const [conversaciones, setConversaciones] = useState([
    {
      id: 1,
      fecha: '2025-06-01',
      hora: '09:15',
      resumen: 'El usuario expresó ansiedad y se ofreció orientación para técnicas de respiración.',
      detalle: 'Durante la sesión se exploraron causas posibles del malestar emocional. Se brindaron ejercicios de respiración profunda y se sugirió escribir un diario emocional diario.',
    },
    {
      id: 2,
      fecha: '2025-06-02',
      hora: '16:40',
      resumen: 'Conversación sobre estrés laboral y agotamiento emocional.',
      detalle: 'El usuario compartió sobre cargas laborales excesivas. Se sugirió establecer límites, realizar pausas activas y se validaron sus emociones.',
    },
    {
      id: 3,
      fecha: '2025-06-03',
      hora: '11:00',
      resumen: 'Se habló de inseguridades personales y estrategias de afirmación positiva.',
      detalle: 'Se exploraron pensamientos automáticos negativos. Se trabajó en reformulación cognitiva y técnicas de autoestima básica.',
    },
  ]);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [detalleSeleccionado, setDetalleSeleccionado] = useState('');

  const descargarTexto = (titulo, contenido) => {
    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${titulo}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const abrirModal = (detalle) => {
    setDetalleSeleccionado(detalle);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setDetalleSeleccionado('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">
        <span role="img" aria-label="chat">💬</span> Conversaciones Anónimas
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conversaciones.map((conv) => (
          <div key={conv.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Fecha:</strong> {conv.fecha} <br />
                <strong>Hora:</strong> {conv.hora}
              </div>
              <p className="text-sm text-gray-900 dark:text-white mb-2">{conv.resumen}</p>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <button
                onClick={() => abrirModal(conv.detalle)}
                className="text-xs bg-sky-500 hover:bg-sky-600 text-white py-1 px-2 rounded"
              >
                👁️ Ver detalles
              </button>
              <button
                onClick={() => descargarTexto(`Conversacion_${conv.id}`, conv.detalle)}
                className="text-xs bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
              >
                📄 Descargar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white max-w-md w-full p-6 rounded-lg shadow-xl relative">
            <h2 className="text-lg font-bold mb-2">📝 Detalles de la conversación</h2>
            <p className="text-sm whitespace-pre-line mb-4">{detalleSeleccionado}</p>
            <button
              onClick={cerrarModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ×
            </button>
            <button
              onClick={cerrarModal}
              className="mt-2 w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversaciones;