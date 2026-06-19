import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import QuienesSomos from './pages/QuienesSomos';
import ChecklistChatbot from './pages/ChecklistChatbot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'quienes-somos', element: <QuienesSomos /> },
      { path: 'articulos/checklist-chatbot-ia', element: <ChecklistChatbot /> },
    ],
  },
], { basename: '/' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
