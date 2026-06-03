import { useEffect, useState } from 'react';
import type { FormEvent, MouseEvent } from 'react';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    const handleOpen = () => { setOpen(true); setStatus('idle'); };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('open-contact-modal', handleOpen);
    document.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('open-contact-modal', handleOpen);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const fd = new FormData(event.currentTarget);
    const payload = {
      access_key: ACCESS_KEY,
      subject: 'Nueva consulta — Ascentrategic',
      from_name: 'Ascentrategic Formulario Web',
      nombre:   fd.get('nombre'),
      email:    fd.get('email'),
      servicio: fd.get('servicio'),
      mensaje:  fd.get('mensaje'),
    };
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close" aria-label="Cerrar" onClick={() => setOpen(false)}>✕</button>
        {status !== 'success' && (
          <>
            <div className="modal-eyebrow">Conversación privada</div>
            <h3 className="modal-title" id="modalTitle">Envíenos su <em>consulta</em></h3>
          </>
        )}

        {status === 'success' ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <p>Gracias, hemos recibido su consulta.<br/>Le contactaremos a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group"><label htmlFor="m-nombre">Nombre completo</label><input id="m-nombre" type="text" name="nombre" placeholder="Su nombre" required /></div>
            <div className="form-group"><label htmlFor="m-email">Correo electrónico</label><input id="m-email" type="email" name="email" placeholder="su@correo.com" required /></div>
            <div className="form-group">
              <label htmlFor="m-servicio">Servicio de interés</label>
              <select id="m-servicio" name="servicio" required>
                <option value="" disabled selected>Seleccione un servicio</option>
                <option value="Asesoría Bursátil">Asesoría Bursátil</option>
                <option value="Portafolios de Inversión">Portafolios de Inversión</option>
                <option value="Planes de Ahorro">Planes de Ahorro</option>
                <option value="Seguros de Vida con Ahorro">Seguros de Vida con Ahorro</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Asesoría Legal de Activos">Asesoría Legal de Activos</option>
                <option value="IA & Análisis de Datos">IA &amp; Análisis de Datos</option>
                <option value="Otro / Consulta general">Otro / Consulta general</option>
              </select>
            </div>
            <div className="form-group"><label htmlFor="m-msg">Mensaje</label><textarea id="m-msg" name="mensaje" placeholder="¿En qué podemos ayudarle?"></textarea></div>
            {status === 'error' && (
              <p className="modal-error">Hubo un error al enviar. Intente de nuevo o escríbanos a info@ascentrategic.com</p>
            )}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
