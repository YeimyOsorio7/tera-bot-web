import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Schedule from './pages/Schedule.jsx';
import Login from './pages/Login.jsx';
import Layout from './layout/Layout.jsx';

import AdminLayout from './layout/AdminLayout.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import Citas from './pages/Citas.jsx';
import Conversaciones from './pages/Conversaciones.jsx';
import NotasClinicas from './pages/NotasClinicas.jsx';
import Estadisticas from './pages/Estadisticas.jsx';
import Recursos from './pages/Recursos.jsx'; 
import RegistroPaciente from './pages/RegistroPaciente.jsx';
import VerPacientes from './pages/VerPacientes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas con Layout principal */}
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/cita" element={<Schedule />} />
        </Route>

        {/* Rutas independientes sin layout principal */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />

        {/* Rutas protegidas con layout tipo dashboard */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="citas" element={<Citas />} />
          <Route path="conversaciones" element={<Conversaciones />} />
          <Route path="notas" element={<NotasClinicas />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="recursos" element={<Recursos />} /> {/* ✅ añadida */}
          <Route path="registro" element={<RegistroPaciente />} />
          <Route path="pacientes" element={<VerPacientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
