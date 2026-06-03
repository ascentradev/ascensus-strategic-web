import { usePageEffects } from '../hooks/usePageEffects';
import Squares from '../components/Squares';
import '../styles/servicios.css';

export default function Servicios() {
  usePageEffects();

  return (
    <>
<main>
    <section className="subhero" aria-labelledby="servicios-title">
      <div className="grid-canvas-wrap">
        <Squares
          speed={0.3}
          squareSize={96}
          direction="diagonal"
          borderColor="rgba(198,170,76,0.15)"
          hoverFillColor="rgba(198,170,76,0.08)"
        />
      </div>
      <div className="container subhero-inner">
        <div className="eyebrow reveal">Soluciones patrimoniales</div>
        <h1 id="servicios-title" className="section-title reveal delay-1" style={{fontSize: 'clamp(42px,5vw,68px)', marginBottom: '24px'}}>Servicios diseñados para su <em>patrimonio</em></h1>
        <p className="section-sub reveal delay-2" style={{maxWidth: '640px'}}>Cada estrategia se construye a la medida del perfil, los objetivos y el horizonte de cada cliente.</p>
      </div>
    </section>

    <section className="block">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Portafolio de soluciones</div>
            <h2 className="section-title">Una arquitectura completa para proteger, estructurar y hacer crecer su capital.</h2>
          </div>
          <p className="section-sub">Integramos inversión, ahorro, protección, real estate y blindaje jurídico en una propuesta coherente, independiente y diseñada alrededor de cada patrimonio.</p>
        </div>
        <div className="services-grid">
          <article className="service reveal">
            <div className="num">01 / Inversión</div>
            <h3>Asesoría Bursátil</h3>
            <p>Orientación experta en mercados de valores para seleccionar instrumentos, oportunidades y ventanas de entrada con criterio técnico, prudencia y visión de largo plazo.</p>
            <div className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></div>
          </article>
          <article className="service reveal delay-1">
            <div className="num">02 / Inversión</div>
            <h3>Portafolios de Inversión</h3>
            <p>Construcción de carteras diversificadas según perfil, plazo y liquidez, combinando disciplina de asignación, monitoreo constante y rebalanceo estratégico.</p>
            <div className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></div>
          </article>
          <article className="service reveal delay-2">
            <div className="num">03 / Ahorro</div>
            <h3>Planes de Ahorro</h3>
            <p>Programas estructurados de ahorro disciplinado que transforman objetivos concretos en hábitos financieros sostenibles y acumulación progresiva de capital.</p>
            <div className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></div>
          </article>
          <article className="service reveal">
            <div className="num">04 / Protección</div>
            <h3>Seguros de Vida con Ahorro</h3>
            <p>Soluciones que combinan protección de vida, acumulación de valor y planificación patrimonial para resguardar a la familia y fortalecer el legado.</p>
            <div className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></div>
          </article>
          <article className="service reveal delay-1">
            <div className="num">05 / Bienes raíces</div>
            <h3>Real Estate</h3>
            <p>Inversión en bienes raíces residenciales y comerciales con enfoque patrimonial, búsqueda selectiva de oportunidades y acompañamiento en todo el proceso.</p>
            <div className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></div>
          </article>
          <article className="service reveal delay-2">
            <div className="num">06 / Legal</div>
            <h3>Asesoría Legal de Activos</h3>
            <p>Protección jurídica de propiedades, sociedades y estructuras patrimoniales mediante aliados expertos en planificación sucesoria, fideicomisos y blindaje legal.</p>
            <div className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></div>
          </article>
          <article className="service service-coming reveal" style={{opacity: '.65'}}>
            <div className="num">07 / Tecnología</div>
            <h3>IA &amp; Análisis de Datos <span className="badge-soon">Próximamente</span></h3>
            <p>Asesoría en IA aplicada, inteligencia patrimonial y análisis de datos para elevar la capacidad de decisión con modelado, automatización y lectura estratégica de información.</p>
            <div className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></div>
          </article>
        </div>
      </div>
    </section>

    <section className="block">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Alianzas</div>
            <h2 className="section-title">Respaldados por <em>socios</em> de clase mundial</h2>
          </div>
          <p className="section-sub">Trabajamos con las mejores instituciones reguladas para ofrecer soluciones de primer nivel.</p>
        </div>
        <div className="alianzas-grid">
          <article className="alianza reveal">
            <div className="alianza-logo"><img src="/logos/prival.webp" alt="Prival Securities" /></div>
            <h4>Prival Securities</h4>
            <p>Intermediación bursátil regulada por SUGEVAL.</p>
            <span className="alianza-badge">Patrimonio mín. $300,000</span>
          </article>
          <article className="alianza reveal delay-1">
            <div className="alianza-logo"><img src="/logos/palig.png" alt="Pan-American Life Insurance Group" /></div>
            <h4>Pan-American Life (PALIG)</h4>
            <p>Seguros de vida patrimoniales.</p>
            <span className="alianza-badge">AM Best 'A' · 49+ países</span>
          </article>
          <article className="alianza reveal delay-2">
            <div className="alianza-logo"><img src="/logos/bmi.png" alt="BMI Financial Group" /></div>
            <h4>BMI Financial Group</h4>
            <p>Seguros de vida universales e indexados.</p>
            <span className="alianza-badge">AM Best 'A'</span>
          </article>
          <article className="alianza reveal">
            <div className="alianza-logo"><img src="/logos/investors-trust.png" alt="Investors Trust" /></div>
            <h4>Investors Trust</h4>
            <p>Líder global en productos unit-linked.</p>
            <span className="alianza-badge">AM Best 'A-' · desde $10,000</span>
          </article>
          <article className="alianza reveal delay-1">
            <div className="alianza-logo"><img src="/logos/real-estate.svg" alt="Red de Real Estate" /></div>
            <h4>Red de Real Estate</h4>
            <p>Agentes certificados para inversión residencial y comercial.</p>
            <span className="alianza-badge">Nacional e internacional</span>
          </article>
          <article className="alianza reveal delay-2">
            <div className="alianza-logo"><img src="/logos/abogados.svg" alt="Abogados Aliados" /></div>
            <h4>Abogados Aliados</h4>
            <p>Estructuración de fideicomisos y planificación sucesoria.</p>
            <span className="alianza-badge">Blindaje patrimonial</span>
          </article>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
