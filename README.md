# Ascentrategic MVP

Sitio web de la firma de asesoría financiera Ascentrategic. React + TypeScript + Vite, desplegado en GitHub Pages.

## Repositorios

| Repo | Propósito | URL en producción |
|---|---|---|
| [`ascentradev/ascensus-strategic-web`](https://github.com/ascentradev/ascensus-strategic-web) | **Producción** — desplegado en GitHub Pages | `www.ascentrategic.com` |
| [`dramosol/acscensus_mvp_react`](https://github.com/dramosol/acscensus_mvp_react) | Desarrollo / fork personal | — |

> ⚠️ Los cambios deben pushearse a **`ascentradev/ascensus-strategic-web`** (remote `prod`) para que se reflejen en `www.ascentrategic.com`.
>
> ```bash
> git push prod main
> ```

## Configuración del formulario de contacto (Web3Forms)

El formulario de contacto usa [Web3Forms](https://web3forms.com/) para enviar correos a `info@ascentrategic.com` sin necesidad de backend.

### Desarrollo local

1. Crea el archivo `.env.local` en la raíz del proyecto (no se sube al repositorio):

   ```
   VITE_WEB3FORMS_KEY=tu_access_key_aqui
   ```

2. Para obtener tu Access Key:
   - Ve a https://web3forms.com/
   - Ingresa `info@ascentrategic.com` → "Get your Access Key"
   - Verifica el correo de confirmación que llegará a esa dirección
   - Copia la clave generada y pégala en `.env.local`

### Producción (GitHub Pages)

Agrega `VITE_WEB3FORMS_KEY` como secret en el repositorio de GitHub:

1. Ve a **Settings → Secrets and variables → Actions**
2. Crea un nuevo secret: `VITE_WEB3FORMS_KEY` con el valor de tu Access Key
3. El workflow de CI/CD lo tomará automáticamente como variable de entorno durante el build

---

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Stack

- React 18 + TypeScript
- Vite
- React Router DOM
- Web3Forms (formulario de contacto)
- GitHub Pages (hosting)
