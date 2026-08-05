# Guía de Desarrollo: Patrones y Buenas Prácticas

Este documento detalla la arquitectura, los patrones de diseño y las reglas específicas del frontend del proyecto **Dungeons & Dragons App**.

---

## 1. Arquitectura de Módulos (Estructura de Carpetas)

El proyecto utiliza una organización basada en dominios dentro de `src/`:

```text
src/
├── app/                  # Punto de entrada de la aplicación y configuración global (enrutador, main.tsx)
├── features/             # Lógica de negocio agrupada por dominios de la aplicación
│   ├── auth/             # Módulo de autenticación (login, registro, perfil)
│   ├── campaigns/        # Módulo de campañas (listado, creación, detalle)
│   └── langs/            # Sistema central de internacionalización
├── shared/               # Componentes y utilidades compartidas
│   ├── styles/           # Sistema de diseño centralizado (palette.css, global.css)
│   └── ui/               # Componentes de interfaz comunes (Navbar, Icon, Button, etc.)
```

### Reglas de carpetas por Feature

Dentro de cada dominio en `features/[nombre]/`, debes seguir esta estructura modular:

- `components/`: Componentes específicos de esta funcionalidad (ej. `Campaigns/` y sus subcomponentes en `components/CampaignCard/`).
- `hooks/`: React Hooks personalizados para encapsular lógica de estado o consultas de API (ej. `useGetMyCampaigns.ts`).
- `services/`: Clases o funciones encargadas de las llamadas a la API (ej. `campaign.service.ts`).
- `interfaces/`: Definiciones de tipos TypeScript para las peticiones y respuestas.

---

## 2. Internacionalización y Traducciones (Langs)

**⛔ LO QUE NO DEBES HACER:**

- Escribir cadenas de texto fijas directamente en el JSX: `<h1>Campañas Activas</h1>`.

**✅ CÓMO DEBES TRABAJAR:**
Todos los textos orientados al usuario deben ser localizables usando el archivo `.langs.ts` homónimo de cada componente.

1. **Crear el archivo de idiomas:** Si tu componente se llama `MyComponent.tsx`, crea `MyComponent.langs.ts` en la misma carpeta:

   ```typescript
   import type { LanguagesText } from "@/features/langs/interfaces";

   interface MyComponentTexts {
     welcomeMessage: string;
   }

   export const myComponentText: LanguagesText<MyComponentTexts> = {
     en: {
       welcomeMessage: "Welcome to the Campaign",
     },
     es: {
       welcomeMessage: "Bienvenido a la campaña",
     },
   };
   ```

2. **Consumir en el Componente:**

   ```tsx
   import { useText } from "@/features/langs/hooks/useText";
   import { myComponentText } from "./MyComponent.langs";

   export const MyComponent = () => {
     const text = useText(myComponentText);
     return <h1>{text.welcomeMessage()}</h1>;
   };
   ```

---

## 3. Sistema de Estilos y Diseño

**⛔ LO QUE NO DEBES HACER:**

- Instalar o intentar usar clases de **TailwindCSS** (ej. `className="flex flex-col gap-4"`).
- Usar estilos inline arbitrarios (`style={{ padding: 12 }}`).
- Usar valores hardcodeados para colores, fuentes o espaciados (`color: #ff0000`, `margin: 15px`).

**✅ CÓMO DEBES TRABAJAR:**

- Cada componente tiene su propio archivo `.css` homónimo importado en la primera línea (ej. `import './MyComponent.css'`).
- Se utiliza **CSS Vanilla** con anidación nativa.
- **Uso obligatorio de variables CSS (Tokens):** Todos los valores de color, tamaño, tipografía y espaciado deben provenir de las variables CSS centrales declaradas en [palette.css](file:///c:/Users/deped/OneDrive/Escritorio/DnD/dungeons-and-dragons-app/src/shared/styles/palette.css).

### Variables de Uso Común:

- **Colores:**
  - Tonos Oro: `var(--pal-gold-400)`, `var(--pal-gold-500)`
  - Fondos/Superficies: `var(--pal-bg)`, `var(--pal-surface)`, `var(--pal-surface-raised)`
  - Colores Temáticos: `var(--pal-parchment)`, `var(--pal-ink)`
- **Espaciados:** `var(--pal-size-xs)`, `var(--pal-size-s)`, `var(--pal-size-m)`, `var(--pal-size-l)`
- **Tipografías:**
  - Títulos Cinzel: `font-family: var(--pal-font-display)`
  - Texto Crimson Text: `font-family: var(--pal-font-body)`

_Ejemplo en CSS:_

```css
.cmp-my-component {
  display: flex;
  gap: var(--pal-size-m);
  background-color: var(--pal-surface);
  font-family: var(--pal-font-body);

  > h2 {
    font-family: var(--pal-font-display);
    color: var(--pal-gold-400);
  }
}
```

---

## 4. Gestión de Estado y Peticiones API

**⛔ LO QUE NO DEBES HACER:**

- Hacer llamadas `fetch` o `axios` directamente dentro de un componente `useEffect`.
- Manejar estados complejos compartidos utilizando contextos nativos o `useState` acoplados si son globales.

**✅ CÓMO DEBES TRABAJAR:**

1. **Llamadas a API:** Centralizadas en la carpeta `services/` de la feature utilizando fetches limpios.
2. **React Hooks para Datos:** Consumir los servicios a través de hooks específicos (ej. `useGetMyCampaigns.ts` o `useCreateCampaign.ts`).
3. **Estado Global:** Si necesitas compartir estado que persiste entre vistas (como el usuario autenticado), utiliza **Zustand** creando un store bajo `features/[feature]/store/`.

---

## 5. Enrutamiento

**⛔ LO QUE NO DEBES HACER:**

- Usar `react-router-dom` ni etiquetas nativas `<a>` para navegación interna.

**✅ CÓMO DEBES TRABAJAR:**

- Se utiliza **`wouter`**.
- Usa el componente `Link` de `wouter` para transicionar entre vistas:

  ```tsx
  import { Link } from "wouter";

  <Link to="/campaigns">Ver Campañas</Link>;
  ```

- Usa el hook `useLocation` para leer o modificar la ruta programáticamente:

  ```tsx
  import { useLocation } from "wouter";

  const [location, setLocation] = useLocation();
  ```
