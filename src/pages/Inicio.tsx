import { usePageEffects } from '../hooks/usePageEffects';
import { Link } from 'react-router-dom';
import Squares from '../components/Squares';
import { openContactModal } from '../components/contactEvents';
import '../styles/inicio.css';

const BASE = import.meta.env.BASE_URL;

export default function Inicio() {
  usePageEffects();

  return (
    <>
<main>
    <section className="hero" aria-labelledby="hero-title">
      <div className="grid-canvas-wrap">
        <Squares
          speed={0.3}
          squareSize={64}
          direction="diagonal"
          borderColor="rgba(198,170,76,0.20)"
          hoverFillColor="rgba(198,170,76,0.08)"
        />
      </div>
      <img src={`${BASE}bull_transparent.png`} id="heroBull" className="hero-bull" alt="Símbolo de fortaleza patrimonial" width="756" height="1024" />
      <div className="container">
        <div className="hero-inner">
          <div className="eyebrow reveal">Oficina de Administración Patrimonial</div>
          <h1 id="hero-title" className="reveal delay-1">Protegemos y hacemos crecer su <em>patrimonio</em>. Con la discreción que su legado merece.</h1>
          <p className="reveal delay-2">Asesoría financiera independiente para familias, empresarios e inversionistas que buscan estrategias a la medida, gestión profesional y resultados consistentes en el largo plazo.</p>
          <div className="cta-row reveal delay-3">
            <button onClick={openContactModal} className="btn btn-primary">Agendar consulta privada</button>
            <Link to="/servicios" className="btn btn-ghost">Conocer servicios</Link>
          </div>
        </div>
      </div>
      <div className="scroll-hint">Desplácese</div>
    </section>

    <section className="metrics" aria-label="Indicadores destacados">
      <div className="container metrics-grid">
        <article className="metric reveal">
          <div className="metric-value">$<span className="count" data-target="150">0</span>M+</div>
          <div className="metric-label">Activos asesorados</div>
        </article>
        <article className="metric reveal delay-1">
          <div className="metric-value"><span className="count" data-target="25">0</span> años</div>
          <div className="metric-label">De experiencia</div>
        </article>
        <article className="metric reveal delay-2">
          <div className="metric-value"><span className="count" data-target="15">0</span> años</div>
          <div className="metric-label">En inversiones privadas</div>
        </article>
        <article className="metric reveal delay-3">
          <div className="metric-value">2026</div>
          <div className="metric-label">Fundada en</div>
        </article>
      </div>
    </section>

    <section className="block socio-section" id="equipo">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Liderazgo</div>
            <h2 className="section-title">Experiencia y <em>confianza</em> al servicio de su patrimonio.</h2>
          </div>
          <p className="section-sub">Una trayectoria construida entre banca, mercado de capitales y administración de inversiones para clientes privados, con foco en preservar y hacer crecer patrimonios complejos.</p>
        </div>
        <div className="socio-grid">
          <div className="socio-photo">
            <img src={`${BASE}erick-profile.webp`} alt="Eric Rojas Z." width="640" height="856" />
          </div>
          <div className="reveal delay-2">
            <div className="socio-titulo">Socio Principal &amp; Director General</div>
            <h3 className="socio-nombre">Eric Rojas Z.</h3>
            <div className="socio-licencia">Corredor de Bolsa · Licencia N.° 495</div>
            <p className="socio-bio">25 años de experiencia en el mercado financiero, con 10 años en banca y 15 años en administración de inversiones en Puesto de Bolsa regulado. Más de $150M bajo asesoría.</p>
            <p className="socio-bio">Corredor de Bolsa acreditado en Costa Rica, licencia N.° 495. Estudios superiores en Finanzas y Economía con énfasis en Banca y Mercado de Capitales en el ITCR y la UCR. Cursos especializados en Mercados Internacionales y Administración Individual de Portafolios de Inversión en la Bolsa Nacional de Valores.</p>
            <div className="socio-credenciales">
              <span className="credencial">Corredor de Bolsa N.° 495</span>
              <span className="credencial">25 años de experiencia</span>
              <span className="credencial">ITCR / UCR</span>
              <span className="credencial">Bolsa Nacional de Valores</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="block" id="proceso" style={{background: '#121214'}}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Proceso</div>
            <h2 className="section-title">Un método claro para una <em>relación duradera</em>.</h2>
          </div>
          <p className="section-sub">Acompañamos a cada cliente desde el primer diagnóstico hasta el seguimiento permanente de su patrimonio.</p>
        </div>
        <div className="process-grid reveal" id="processGrid">
          <div className="process-line" id="processLine"></div>
          <article className="step">
            <div className="step-dot">i</div>
            <h4>Diagnóstico</h4>
            <p>Entendemos su situación patrimonial, sus objetivos y su perfil de riesgo.</p>
          </article>
          <article className="step">
            <div className="step-dot">ii</div>
            <h4>Estrategia</h4>
            <p>Diseñamos un plan a la medida, con instrumentos y horizontes definidos.</p>
          </article>
          <article className="step">
            <div className="step-dot">iii</div>
            <h4>Implementación</h4>
            <p>Ejecutamos las inversiones y estructuras, con total transparencia en cada paso.</p>
          </article>
          <article className="step">
            <div className="step-dot">iv</div>
            <h4>Seguimiento</h4>
            <p>Revisamos periódicamente y ajustamos su estrategia para mantenerla vigente.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="final-cta" id="contacto">
      <div className="grid-canvas-wrap">
        <Squares
          speed={0.3}
          squareSize={64}
          direction="diagonal"
          borderColor="rgba(198,170,76,0.20)"
          hoverFillColor="rgba(198,170,76,0.08)"
        />
      </div>
      <div className="container">
        <div className="final-cta-inner reveal">
          <h2>Conversemos sobre el <em>futuro</em> de su patrimonio.</h2>
          <p>Agende una consulta privada con nuestro equipo. Le acompañaremos en cada paso, con la confidencialidad y la atención que su caso requiere.</p>
          <div className="cta-row" style={{justifyContent: 'center'}}>
            <button onClick={openContactModal} className="btn btn-primary">Agendar consulta privada</button>
          </div>
          <div className="contact-inline" aria-label="Información de contacto">
            <span><a href="mailto:info@ascentrategic.com">info@ascentrategic.com</a></span>
            <span><a href="tel:+50688158332">(506) 8815-8332</a></span>
            <span>Escazú, Centro 27, 3er piso</span>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
