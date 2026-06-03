import { useEffect, useState } from 'react';
import type { FormEvent, MouseEvent } from 'react';

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close" aria-label="Cerrar" onClick={() => setOpen(false)}>✕</button>
        <div className="modal-eyebrow">Conversación privada</div>
        <h3 className="modal-title" id="modalTitle">Envíenos su <em>consulta</em></h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label htmlFor="m-nombre">Nombre completo</label><input id="m-nombre" type="text" name="nombre" placeholder="Su nombre" required /></div>
          <div className="form-group"><label htmlFor="m-email">Correo electrónico</label><input id="m-email" type="email" name="email" placeholder="su@correo.com" required /></div>
          <div className="form-group"><label htmlFor="m-msg">Mensaje</label><textarea id="m-msg" name="mensaje" placeholder="¿En qué podemos ayudarle?"></textarea></div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Enviar solicitud</button>
        </form>
      </div>
    </div>
  );
}
