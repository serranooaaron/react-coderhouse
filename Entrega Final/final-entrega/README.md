# Proyecto E-commerce React + Firebase

Un proyecto de e-commerce simple y funcional desarrollado con React, React Router y Firebase Firestore.

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework principal
- **React Router DOM 7** - Navegación entre páginas
- **Firebase/Firestore** - Base de datos en tiempo real
- **Vite** - Build tool y servidor de desarrollo
- **CSS Modules** - Estilos con scope local

## 📁 Estructura del Proyecto

```
final-entrega/
├── src/
│   ├── App.jsx                      # Configuración de rutas
│   ├── main.jsx                     # Punto de entrada
│   ├── styles.css                   # Estilos globales
│   ├── components/
│   │   ├── cart/                    # Componentes del carrito
│   │   ├── items/                   # Componentes de productos
│   │   │   ├── item.jsx             # Tarjeta individual de producto
│   │   │   ├── itemlist.jsx         # Lista de productos en grid
│   │   │   └── itemcontainer.jsx    # Contenedor con filtrado
│   │   ├── navbar/                  # Barra de navegación
│   │   └── searchbar/               # Barra de búsqueda
│   ├── context/                     # Contextos de React
│   ├── data/
│   │   └── products.js              # Datos mock de 8 productos
│   ├── firebase/
│   │   ├── config.js                # Configuración de Firebase
│   │   ├── services.js              # Funciones CRUD de Firestore
│   │   └── uploadProducts.js        # Script para subir productos iniciales
│   ├── layout/
│   │   └── MainLayout.jsx           # Layout principal con carga de datos
│   └── views/
│       ├── home.jsx                 # Página de inicio
│       ├── products.jsx             # Listado de productos
│       ├── details.jsx              # Detalle de producto
│       ├── contact.jsx              # Página de contacto
│       └── notFound.jsx             # Página 404
├── public/                          # Archivos estáticos
├── package.json
└── vite.config.js
```

## 🏗️ Arquitectura de Datos

El proyecto utiliza un patrón de **Single Source of Truth** centralizado:

### MainLayout - Punto Central

```jsx
// src/layout/MainLayout.jsx
- Carga productos UNA VEZ desde Firebase con obtenerProductos()
- Mantiene estado global: products, searchValue
- Comparte datos a rutas hijas mediante useOutletContext
- Muestra Navbar con SearchBar condicional (solo en /products)
```

### Flujo de Datos

```
MainLayout (obtenerProductos)
    ↓
    useState([products])
    ↓
    <Outlet context={{ searchValue, products }} />
    ↓
┌───────────────┬───────────────────┐
↓               ↓                   ↓
Products      Details            Otras vistas
useOutletContext()
```

### Componentes Clave

**Products** (`src/views/products.jsx`)

- Recibe `{searchValue, products}` de `useOutletContext()`
- Pasa datos a `ItemListContainer` para filtrado y visualización

**Details** (`src/views/details.jsx`)

- Recibe `products` de `useOutletContext()`
- Muestra estado de carga mientras espera productos
- Busca producto por id usando `useParams()`

**ItemListContainer** (`src/components/items/itemcontainer.jsx`)

- Filtra productos por nombre (case-insensitive)
- Muestra cantidad de resultados
- Renderiza `ItemList` con productos filtrados

## 🔥 Configuración de Firebase

### 1. Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto
3. Activa Firestore Database en modo de prueba

### 2. Configurar Credenciales

Edita `src/firebase/config.js` con tus credenciales:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id",
};
```

### 3. Subir Productos Iniciales

Ejecuta el script de carga (solo la primera vez):

```javascript
// En src/firebase/uploadProducts.js
// Descomenta la última línea:
subirProductosAFirebase();
```

Luego ejecuta el proyecto y los 8 productos de `src/data/products.js` se subirán a Firestore.

## 🚀 Instalación y Uso

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

### Build para Producción

```bash
npm run build
```

### Preview de Build

```bash
npm run preview
```

## 🧭 Rutas Disponibles

| Ruta            | Componente | Descripción                                 |
| --------------- | ---------- | ------------------------------------------- |
| `/`             | Home       | Página de bienvenida con enlace a productos |
| `/products`     | Products   | Listado de productos con buscador           |
| `/products/:id` | Details    | Detalle individual del producto             |
| `/contact`      | Contact    | Información de contacto                     |
| `*`             | NotFound   | Página 404 sin navbar                       |

## 🔍 Funcionalidades

### Búsqueda de Productos

- SearchBar visible solo en `/products`
- Filtrado en tiempo real por nombre
- Sin distinción de mayúsculas/minúsculas

### Navegación

- Links en Navbar: Home, Productos, Contacto
- Tarjetas de productos clickeables → Detalle
- Logo "Mi Tienda" → Home
- Botón "Volver" en página de detalle

### Carga de Datos

- Loading state en Details mientras carga
- Productos compartidos globalmente via context
- Una única llamada a Firebase por sesión

## 🎨 Estilos

- **CSS Modules** para scope local
- **Diseño Responsive**:
  - Desktop: Grid de 3 columnas
  - Mobile: Grid de 1 columna
- **Colores principales**:
  - Azul: `#0066cc`
  - Blanco: `#fff`
  - Gris claro: `#ddd`
- **Sin animaciones complejas** - diseño simple y limpio

## 📦 Servicios de Firebase

`src/firebase/services.js` exporta:

- `obtenerProductos()` - Obtiene todos los productos
- `obtenerProductoPorId(id)` - Obtiene un producto específico

## 📝 Datos de Productos

Cada producto en `src/data/products.js` tiene:

- `id`: Número único
- `name`: Nombre del producto
- `category`: Categoría (Electrónica, Accesorios, etc.)
- `price`: Precio en pesos argentinos
- `description`: Descripción del producto
- `image`: URL de imagen placeholder
- `stock`: Cantidad disponible

## 🤝 Contribución

Este es un proyecto académico para CoderHouse React.

## 📄 Licencia

Proyecto educativo - Uso libre para aprendizaje.
