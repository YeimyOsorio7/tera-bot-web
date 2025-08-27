import React from 'react';

const pacientes = [
  {
    no: 1,
    historia: '001',
    fechaConsulta: '14/01/2025',
    nombre: 'Heydi Catarina Castro Tum',
    dpi: '---',
    nacimiento: '26/01/2006',
    edad: 19,
    menorDe15: true,
    adulto: true,
    sexo: 'F',
    municipio: 'Santa María Chiquimula',
    aldea: 'Patzam',
    embarazo: { menor: false, mayor: true },
    consulta: { primera: true, reconsulta: false, emergencia: false },
    diagnostico: 'Tristeza Leve',
    cie10: 'F32.0',
    terapia: 'Psicoterapia'
  },
  // Agrega los demás registros según tu necesidad o desde una API
];

const VerPacientes = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">👩‍⚕️ Lista de Pacientes</h1>
      <table className="min-w-full text-sm border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800 text-left">
          <tr>
            <th className="p-2 border" rowSpan={2}>No.</th>
            <th className="p-2 border" rowSpan={2}>N.º Historia Clínica</th>
            <th className="p-2 border" rowSpan={2}>FECHA DE CONSULTA</th>
            <th className="p-2 border" rowSpan={2}>Nombres y apellidos</th>
            <th className="p-2 border" rowSpan={2}>DPI</th>
            <th className="p-2 border" rowSpan={2}>FECHA DE NACIMIENTO</th>
            <th className="p-2 border" rowSpan={2}>Edad</th>
            <th className="p-2 border" colSpan={2}>Niños {'<'} de 15 / Adulto</th>
            <th className="p-2 border" colSpan={2}>Sexo</th>
            <th className="p-2 border" rowSpan={2}>Municipio</th>
            <th className="p-2 border" rowSpan={2}>Aldea</th>
            <th className="p-2 border" colSpan={2}>Embarazo</th>
            <th className="p-2 border" colSpan={3}>Consulta</th>
            <th className="p-2 border" rowSpan={2}>Diagnóstico</th>
            <th className="p-2 border" rowSpan={2}>CIE-10</th>
            <th className="p-2 border" rowSpan={2}>Terapia</th>
          </tr>
          <tr>
            <th className="p-2 border">Niño {'<'} 15</th>
            <th className="p-2 border">Adulto</th>
            <th className="p-2 border">M</th>
            <th className="p-2 border">H</th>
            <th className="p-2 border">{'<'} 14 AÑOS</th>
            <th className="p-2 border">≥ de edad</th>
            <th className="p-2 border">1 ra.</th>
            <th className="p-2 border">Re.</th>
            <th className="p-2 border">Em.</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-2 border text-center">{p.no}</td>
              <td className="p-2 border">{p.historia}</td>
              <td className="p-2 border">{p.fechaConsulta}</td>
              <td className="p-2 border">{p.nombre}</td>
              <td className="p-2 border">{p.dpi}</td>
              <td className="p-2 border">{p.nacimiento}</td>
              <td className="p-2 border text-center">{p.edad}</td>
              <td className="p-2 border text-center">{p.menorDe15 ? '✔️' : ''}</td>
              <td className="p-2 border text-center">{p.adulto ? '✔️' : ''}</td>
              <td className="p-2 border text-center">{p.sexo === 'M' ? '✔️' : ''}</td>
              <td className="p-2 border text-center">{p.sexo === 'H' ? '✔️' : ''}</td>
              <td className="p-2 border">{p.municipio}</td>
              <td className="p-2 border">{p.aldea}</td>
              <td className="p-2 border text-center">{p.embarazo.menor ? '✔️' : ''}</td>
              <td className="p-2 border text-center">{p.embarazo.mayor ? '✔️' : ''}</td>
              <td className="p-2 border text-center">{p.consulta.primera ? '✔️' : ''}</td>
              <td className="p-2 border text-center">{p.consulta.reconsulta ? '✔️' : ''}</td>
              <td className="p-2 border text-center">{p.consulta.emergencia ? '✔️' : ''}</td>
              <td className="p-2 border">{p.diagnostico}</td>
              <td className="p-2 border">{p.cie10}</td>
              <td className="p-2 border">{p.terapia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerPacientes;