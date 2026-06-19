import { usePageEffects } from '../hooks/usePageEffects';
import { Link } from 'react-router-dom';
import Squares from '../components/Squares';
import '../styles/articulo.css';

const ITEMS = [
  {
    num: '01 / Chunking',
    title: 'Fragmentación Semántica con Solapamiento',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'En lugar de dividir los documentos por conteo fijo de caracteres —lo que parte oraciones a la mitad—, se fragmenta por límites semánticos: párrafos, secciones y cambios de tema. Cada fragmento se solapa con sus vecinos en una ventana configurable (típicamente 10–20 % del tamaño del fragmento) para que ninguna respuesta que cruce dos fragmentos se pierda en la costura.',
    whyText:
      'La fragmentación por tamaño fijo produce trozos que empiezan y terminan en medio de una oración. Cuando el recuperador extrae uno de esos trozos, el LLM recibe contexto incompleto y o bien alucina las partes faltantes o da una respuesta vaga. La fragmentación semántica con solapamiento garantiza que cada pieza recuperada sea suficientemente autónoma y que la información en los bordes aparezca en al menos un fragmento.',
  },
  {
    num: '02 / Recuperación',
    title: 'Búsqueda Híbrida (Embeddings + BM25)',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'Se ejecutan dos rutas de recuperación en paralelo. La búsqueda vectorial codifica la consulta y los documentos en embeddings densos y encuentra fragmentos semánticamente similares —ideal para preguntas parafrasadas—. BM25 es un algoritmo clásico de puntuación por palabras clave —ideal para nombres exactos, IDs, códigos de error y términos de dominio específico que los embeddings pueden pasar por alto—. Los resultados de ambas rutas se fusionan (normalmente con Reciprocal Rank Fusion) antes del reordenamiento.',
    whyText:
      'La búsqueda puramente vectorial falla en consultas de coincidencia exacta. Un usuario que pregunta por "pedido #A7X-9021" necesita coincidencia léxica, no similitud semántica. BM25 puro falla en preguntas parafrasadas o conceptuales. La búsqueda híbrida cubre ambos modos de falla. En producción, las consultas de los usuarios son impredecibles —algunas en lenguaje natural, otras son identificadores copiados— y la recuperación híbrida maneja todo el espectro sin necesidad de adivinar cuál tipo llegará.',
  },
  {
    num: '03 / Reordenamiento',
    title: 'Cross-Encoder sobre los 5 Fragmentos Principales',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'Tras la recuperación híbrida, que devuelve un conjunto amplio de fragmentos candidatos (a menudo 20–50), un reordenador cross-encoder puntúa cada fragmento frente a la consulta original con atención completa sobre ambos textos simultáneamente. Es más preciso que la recuperación inicial pero demasiado costoso para aplicarlo a todo el corpus, por eso se aplica solo a los candidatos principales. Los 5 fragmentos mejor puntuados pasan al LLM.',
    whyText:
      'La recuperación inicial (tanto vectorial como BM25) optimiza para la cobertura —lanzar una red amplia—. Pero lo que el LLM necesita es precisión: los 3–5 fragmentos con mayor probabilidad de contener la respuesta. Sin reordenamiento, fragmentos irrelevantes se cuelan en la ventana de contexto, diluyendo la señal y aumentando el riesgo de alucinación. Un cross-encoder detecta las diferencias sutiles de relevancia que los embeddings bi-encoder pasan por alto.',
  },
  {
    num: '04 / Contexto',
    title: 'Solo los 3 Mejores Fragmentos en el Contexto',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'Tras el reordenamiento, solo se alimentan al contexto del LLM los 3 mejores fragmentos —no el conjunto completo de documentos recuperados—. Es una restricción deliberada: menos contexto, más enfoque.',
    whyText:
      'Los LLMs se degradan cuando se les introduce demasiado texto en la ventana de contexto. La investigación muestra consistentemente que los modelos atienden mal a la información en el medio de contextos largos (el problema "perdido en el medio"). Más fragmentos también implican más tokens, mayor latencia y mayor costo por solicitud. Tres fragmentos de alta calidad y reordenados le dan al modelo un contexto enfocado y manejable que produce respuestas más precisas y consistentes que veinte párrafos vagamente relevantes.',
  },
  {
    num: '05 / Privacidad',
    title: 'Eliminación de PII y Filtrado de Salida',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'Dos filtros, uno en cada extremo. El filtro de entrada (eliminador de PII) retira información de identificación personal —nombres, correos, teléfonos, direcciones, IDs nacionales— antes de que llegue al almacén de vectores o al LLM, usando coincidencia de patrones y modelos de NER. El filtro de salida pasa la respuesta por un clasificador de toxicidad/seguridad para bloquear contenido dañino, sesgado o inapropiado antes de que llegue al usuario.',
    whyText:
      'Si la PII llega al almacén de vectores puede recuperarse y mostrarse a otros usuarios —una filtración de datos sin necesidad de un hackeo—. Si el chatbot genera respuestas tóxicas o sesgadas se tiene un incidente de relaciones públicas y posiblemente uno legal. Estos filtros son la última línea de defensa y los más fáciles de olvidar porque no afectan las pruebas de camino feliz. En producción, los casos límite son la norma.',
  },
  {
    num: '06 / Autocorrección',
    title: 'Verificación de Fundamentación',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'Tras la generación de una respuesta por el LLM, un paso de verificación comprueba si la respuesta está realmente respaldada por los fragmentos recuperados. Puede ser una llamada separada al LLM que pregunta: "¿Está esta respuesta fundamentada en el contexto proporcionado, o contiene información no presente en las fuentes?". Si la respuesta no está fundamentada, se marca, regenera o reemplaza por un fallback.',
    whyText:
      'Los LLMs alucinan. Incluso con una recuperación perfecta, el modelo puede extrapolar, inferir o inventar detalles que parecen plausibles pero no están en el material fuente. Una verificación de fundamentación detecta estas fabricaciones antes de que lleguen al usuario. En dominios donde la precisión importa (legal, médico, financiero, soporte), una respuesta no fundamentada es peor que ninguna respuesta: erosiona la confianza de forma permanente.',
  },
  {
    num: '07 / Sin Resultados',
    title: 'Declarar "No Sé" con Claridad',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'Cuando la recuperación no devuelve fragmentos relevantes (o todos los fragmentos puntúan por debajo de un umbral de confianza), el chatbot debe responder con un claro "No sé" o "No tengo información sobre eso" —nunca intentar responder solo desde el conocimiento paramétrico—.',
    whyText:
      'El comportamiento por defecto de la mayoría de los LLMs es siempre proporcionar una respuesta, aunque no tengan evidencia de respaldo. En un sistema RAG esto es peligroso: el usuario confía en el chatbot porque normalmente cita documentos reales. Si de repente fabrica una respuesta para un tema que no está en la base de conocimiento, el usuario no tiene forma de distinguirla. Una política estricta de "no sé" preserva la confianza y proporciona una señal clara (consultas con cero resultados registradas) sobre qué lagunas de contenido hay que cubrir.',
  },
  {
    num: '08 / Rendimiento',
    title: 'Indexación HNSW para Búsqueda Aproximada a Escala',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'HNSW (Hierarchical Navigable Small World) es un algoritmo basado en grafos para la búsqueda de vecinos más cercanos aproximados. Construye un grafo multicapa sobre los embeddings que permite tiempos de búsqueda sub-lineales —la latencia de consulta permanece baja incluso cuando el corpus de documentos crece a millones de vectores—.',
    whyText:
      'La búsqueda exacta de vecinos más cercanos es O(n) —escanea cada vector en cada consulta—. Eso está bien con 10.000 documentos en desarrollo. Con 10 millones de documentos en producción y usuarios concurrentes, la búsqueda exacta se convierte en un cuello de botella que arruina la latencia y satura el cómputo. HNSW ofrece ~95 %+ de cobertura a una fracción del costo. Ajusta los parámetros ef_construction y M antes del despliegue —equilibran el tiempo de construcción del índice y la memoria con la precisión de búsqueda—.',
  },
  {
    num: '09 / Caché',
    title: 'Caché Semántica para Preguntas Repetidas',
    what: '¿Qué significa?',
    why: '¿Por qué importa antes del despliegue?',
    whatText:
      'Antes de enviar una consulta por el pipeline RAG completo, se calcula su embedding y se compara contra una caché de embeddings de consultas recientes. Si una consulta semánticamente similar se hizo recientemente (similitud coseno por encima de un umbral), se devuelve la respuesta en caché directamente —sin recuperación, sin reordenamiento, sin llamada al LLM—.',
    whyText:
      'En producción, las distribuciones de consultas siguen una ley de potencia: un número pequeño de preguntas representa una gran parte del tráfico. Sin caché, cada una de esas preguntas repetidas consume el costo completo del pipeline. La caché semántica colapsa eso a una sola comprobación de similitud y una búsqueda en caché. El resultado: menor latencia para los usuarios, menor costo, y carga reducida en el proveedor de LLM durante picos de tráfico. Configura un TTL en las entradas en caché para que las respuestas obsoletas no persistan tras actualizar la base de conocimiento.',
  },
];

const TLDR = [
  { strong: 'Fragmentación de documentos', text: '— límites semánticos con solapamiento, no divisiones arbitrarias por caracteres.' },
  { strong: 'Recuperación', text: '— búsqueda híbrida que combina embeddings vectoriales y BM25 para cobertura total.' },
  { strong: 'Reordenamiento', text: '— puntuación cross-encoder de los candidatos principales antes de que llegue al LLM.' },
  { strong: 'Ventana de contexto', text: '— solo los 3 mejores fragmentos; menos ruido, respuestas más precisas.' },
  { strong: 'Privacidad de datos', text: '— PII eliminada en la entrada, toxicidad filtrada en la salida.' },
  { strong: 'Autocorrección', text: '— verificación de fundamentación para que las respuestas vengan del contexto, no de la imaginación.' },
  { strong: 'Sin resultados', text: '— política estricta de "no sé", nunca fabrique cuando la recuperación esté vacía.' },
  { strong: 'Rendimiento', text: '— indexación HNSW para búsqueda aproximada rápida a escala.' },
  { strong: 'Caché semántica', text: '— consultas similares servidas desde caché, ahorrando costo y latencia.' },
];

export default function ChecklistChatbot() {
  usePageEffects();

  return (
    <>
      <main>
        <section className="subhero" aria-labelledby="article-title">
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
            <div className="subhero-meta reveal">
              <Link to="/servicios" className="back-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Servicios
              </Link>
              <span className="sep" />
              <span className="section-tag" style={{ marginBottom: 0 }}>IA &amp; Tecnología</span>
            </div>
            <h1 id="article-title" className="article-title reveal delay-1">
              Lista de verificación previa al despliegue para <em>chatbots RAG</em>
            </h1>
            <p className="article-lead reveal delay-2">
              Construiste un chatbot RAG. Funciona en desarrollo. Ahora estás a punto de ponerlo frente a usuarios reales. Esta lista cubre los nueve puntos que hay que verificar antes de desplegar cualquier chatbot de recuperación aumentada.
            </p>
          </div>
        </section>

        <section className="article-body">
          <div className="container">
            <div className="article-content">
              {ITEMS.map((item, i) => (
                <article className="checklist-item reveal" key={item.num} style={{ transitionDelay: `${i * 0.04}s` }}>
                  <div className="checklist-num">{item.num}</div>
                  <h2 className="checklist-title">{item.title}</h2>
                  <p className="checklist-what">{item.what}</p>
                  <p className="checklist-text" dangerouslySetInnerHTML={{ __html: item.whatText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                  <p className="checklist-what">{item.why}</p>
                  <p className="checklist-text" dangerouslySetInnerHTML={{ __html: item.whyText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                </article>
              ))}

              <aside className="tldr reveal">
                <h2 className="tldr-title">TL;DR — antes de desplegar tu chatbot, revisa la lista:</h2>
                <ol className="tldr-list">
                  {TLDR.map((item) => (
                    <li key={item.strong}>
                      <strong>{item.strong}</strong>{item.text}
                    </li>
                  ))}
                </ol>
                <p className="checklist-text" style={{ marginTop: '28px', fontStyle: 'italic', color: 'var(--text-mute)' }}>
                  Si algún elemento es un "lo agregaremos post-lanzamiento", ese es el que tus usuarios notarán primero.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="article-cta">
          <div className="container">
            <h2 className="reveal">¿Necesitas asesoría en <em>inteligencia artificial</em> aplicada?</h2>
            <p className="reveal delay-1">Nuestro equipo de IA y Análisis de Datos puede acompañarte en la estrategia, arquitectura y despliegue de soluciones de IA para tu negocio.</p>
            <Link to="/servicios" className="btn btn-ghost reveal delay-2">Ver todos los servicios</Link>
          </div>
        </section>
      </main>
    </>
  );
}
