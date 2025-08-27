import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Document, Packer, Paragraph, Table, TableRow, TableCell } from 'docx';
import { saveAs } from 'file-saver';

const Estadisticas = () => {
  const [resumen, setResumen] = useState({
    totalCitas: 28,
    atendidas: 18,
    canceladas: 3,
    pendientes: 7,
    temasFrecuentes: ['Ansiedad', 'Estrés laboral', 'Autoestima', 'Duelo']
  });

  const data = [
    { name: 'Atendidas', value: resumen.atendidas },
    { name: 'Pendientes', value: resumen.pendientes },
    { name: 'Canceladas', value: resumen.canceladas },
  ];

  const temaData = resumen.temasFrecuentes.map((tema, index) => ({ name: tema, cantidad: Math.floor(Math.random() * 10) + 1 }));

  const COLORS = ['#10b981', '#fbbf24', '#ef4444'];

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      window.dispatchEvent(new Event('resize'));
    });
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  const exportarDocx = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph("\ud83d\udcc4 INFORME DE ESTADÍSTICAS"),
            new Paragraph("Resumen de Citas:"),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Total")] }),
                    new TableCell({ children: [new Paragraph(resumen.totalCitas.toString())] }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Atendidas")] }),
                    new TableCell({ children: [new Paragraph(resumen.atendidas.toString())] }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Pendientes")] }),
                    new TableCell({ children: [new Paragraph(resumen.pendientes.toString())] }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Canceladas")] }),
                    new TableCell({ children: [new Paragraph(resumen.canceladas.toString())] }),
                  ],
                }),
              ],
            }),
            new Paragraph(""),
            new Paragraph("Temas Frecuentes:"),
            ...resumen.temasFrecuentes.map((tema) => new Paragraph("\u2022 " + tema)),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "estadisticas.docx");
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-6">\ud83d\udcca Estadísticas</h1>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => {
            import('html2canvas').then(({ default: html2canvas }) => {
              import('jspdf').then(({ default: jsPDF }) => {
                const input = document.querySelector('.max-w-screen-xl');
                const clone = input.cloneNode(true);

                clone.querySelectorAll('h1, button').forEach(el => el.remove());
                document.body.appendChild(clone);
                clone.style.position = 'absolute';
                clone.style.left = '-9999px';

                html2canvas(input).then((canvas) => {
                  const imgData = canvas.toDataURL('image/png');
                  const pdf = new jsPDF('p', 'mm', 'a4');
                  const imgProps = pdf.getImageProperties(imgData);
                  const pdfWidth = pdf.internal.pageSize.getWidth();
                  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                  pdf.save('estadisticas.pdf');
                  document.body.removeChild(clone);

                  const toast = document.createElement('div');
                  toast.innerHTML = '<span class="mr-2">\u2705</span> Estadísticas descargadas en PDF con éxito';
                  toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow z-50 flex items-center gap-2 animate-fade-in';
                  document.body.appendChild(toast);
                  setTimeout(() => toast.remove(), 3000);
                });
              });
            });
          }}
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded shadow"
        >
          \ud83d\udcc4 Descargar PDF
        </button>

        <button
          onClick={exportarDocx}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow"
        >
          \ud83d\udcdd Exportar a Word
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Total de Citas</h2>
          <p className="text-3xl font-bold text-sky-600 dark:text-sky-300">{resumen.totalCitas}</p>
        </div>

        <div className="bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Citas Atendidas</h2>
          <p className="text-3xl font-bold text-green-700 dark:text-green-200">{resumen.atendidas}</p>
        </div>

        <div className="bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Pendientes</h2>
          <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-200">{resumen.pendientes}</p>
        </div>

        <div className="bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Canceladas</h2>
          <p className="text-3xl font-bold text-red-700 dark:text-red-200">{resumen.canceladas}</p>
        </div>

        <div className="col-span-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Temas Frecuentes</h2>
          <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300">
            {resumen.temasFrecuentes.map((tema, i) => (
              <li key={i}>{tema}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-4">Distribución de citas</h2>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-4">Frecuencia de temas</h2>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={temaData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
