import { useState } from 'react';

const Schedule = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Cita agendada para ${form.name} el ${form.date} a las ${form.time}`);
    setForm({ name: '', email: '', date: '', time: '', reason: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-purple-100 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-xl p-6 space-y-4 border border-gray-200 dark:border-gray-700 transition-all"
      >
        <h2 className="text-2xl font-bold text-center text-sky-700 dark:text-sky-300">📅 Agendar una Cita</h2>

        <input
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          required
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          required
        />

        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          required
        />

        <textarea
          name="reason"
          placeholder="Motivo de la cita"
          value={form.reason}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none"
        />

        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Confirmar cita
        </button>
      </form>
    </div>
  );
};

export default Schedule;
