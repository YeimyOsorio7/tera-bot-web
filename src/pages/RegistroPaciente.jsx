import { useState } from 'react';

const RegistroPaciente = () => {
  const [pacientes, setPacientes] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    dpi: '',
    fechaNacimiento: '',
    edad: '',
    sexo: '',
    tipoConsulta: '',
    patologia: '',
    codigo: '',
    tipoTerapia: '',
    escolaridad: '',
    ocupacion: '',
    estadoCivil: '',
    municipio: '',
    aldea: '',
    embarazo: '',
    nombre: '',
    sexo: '',
    edad: '',
    tipoConsulta: '',
    patologia: '',
    codigo: '',
    tipoTerapia: '',
    referido: false,
    institucion: '',
    motivo: '',
    fecha: '',
    observaciones: ''
  });

  const guardarPaciente = () => {
    if (!form.nombre || !form.edad || !form.sexo || !form.tipoConsulta || !form.patologia || !form.codigo || !form.tipoTerapia) return;
    setPacientes([...pacientes, { ...form, edad: parseInt(form.edad) }]);
    setForm({
      nombre: '', dpi: '', fechaNacimiento: '', edad: '', sexo: '', tipoConsulta: '', patologia: '', codigo: '', tipoTerapia: '',
      escolaridad: '', ocupacion: '', estadoCivil: '', municipio: '', aldea: '', embarazo: '', referido: false, institucion: '', motivo: '', fecha: '', observaciones: ''
    });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-sky-700 dark:text-sky-300">🧾 Registro de Paciente</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {form.edad >= 18 && (
          <input
            placeholder="DPI"
            value={form.dpi}
            onChange={(e) => setForm({ ...form, dpi: e.target.value })}
            className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900"
          />
        )}
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 col-span-full">Fecha de nacimiento</label>
        <input
          type="date"
          value={form.fechaNacimiento}
          onChange={(e) => {
            const fechaNac = new Date(e.target.value);
            const hoy = new Date();
            let edad = hoy.getFullYear() - fechaNac.getFullYear();
            const m = hoy.getMonth() - fechaNac.getMonth();
            if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
              edad--;
            }
            setForm({ ...form, fechaNacimiento: e.target.value, edad });
          }}
          className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900"
        />
        <div className="px-3 py-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
          Edad calculada: <strong>{form.edad || '—'} años</strong> — <span className={form.edad ? (form.edad < 18 ? 'text-yellow-600 dark:text-yellow-400' : 'text-green-600 dark:text-green-400') : ''}>{form.edad ? (form.edad < 18 ? 'Menor de edad' : 'Mayor de edad') : ''}</span>
        </div>
        <input placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        <select value={form.sexo} onChange={(e) => setForm({ ...form, sexo: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900">
          <option value="">Sexo</option>
          <option value="M">Mujer</option>
          <option value="H">Hombre</option>
        </select>
                <select value={form.tipoConsulta} onChange={(e) => setForm({ ...form, tipoConsulta: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900">
          <option value="">Tipo de consulta</option>
          <option value="Primera">Primera</option>
          <option value="Reconsulta">Reconsulta</option>
        </select>
        <input placeholder="Patología" value={form.patologia} onChange={(e) => setForm({ ...form, patologia: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        <input placeholder="Código CEI-10" value={form.codigo} onChange={(e) => setForm({ ...form, codigo: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        <input placeholder="Tipo de terapia" value={form.tipoTerapia} onChange={(e) => setForm({ ...form, tipoTerapia: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <input placeholder="Municipio" value={form.municipio} onChange={(e) => setForm({ ...form, municipio: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        <input placeholder="Aldea" value={form.aldea} onChange={(e) => setForm({ ...form, aldea: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        <input placeholder="Escolaridad" value={form.escolaridad} onChange={(e) => setForm({ ...form, escolaridad: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        <input placeholder="Ocupación" value={form.ocupacion} onChange={(e) => setForm({ ...form, ocupacion: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        <input placeholder="Estado civil" value={form.estadoCivil} onChange={(e) => setForm({ ...form, estadoCivil: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
        {form.sexo === 'H' ? null : (
          <select
            value={form.embarazo}
            onChange={(e) => setForm({ ...form, embarazo: e.target.value })}
            className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900"
          >
            <option value="">Embarazo</option>
            <option value="< 14 años">Menor de 14 años</option>
            <option value=">= edad">Mayor de edad</option>
          </select>
        )}
      </div>

      <div>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={form.referido} onChange={(e) => setForm({ ...form, referido: e.target.checked })} />
          Paciente referido
        </label>
      </div>

      {form.referido && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <input placeholder="Institución referida" value={form.institucion} onChange={(e) => setForm({ ...form, institucion: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
          <input placeholder="Motivo" value={form.motivo} onChange={(e) => setForm({ ...form, motivo: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
          <input type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900" />
          <textarea placeholder="Observaciones" value={form.observaciones} onChange={(e) => setForm({ ...form, observaciones: e.target.value })} className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-900 col-span-full" />
        </div>
      )}

      <button onClick={guardarPaciente} className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded shadow">Guardar paciente</button>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">📋 Pacientes registrados:</h2>
        <ul className="text-sm list-disc pl-5 space-y-1">
          {pacientes.map((p, i) => (
            <li key={i}>{p.nombre} — {p.edad} años — {p.sexo} — {p.tipoConsulta}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistroPaciente;
