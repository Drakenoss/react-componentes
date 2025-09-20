# Mi Aplicación React

Una aplicación React moderna construida con Vite que demuestra la estructura de componentes y diseño responsive.

## 🚀 Características

- **React 18** con componentes funcionales
- **Vite** para desarrollo ultrarrápido
- **Diseño responsive** que funciona en todos los dispositivos
- **Componentes modulares** bien organizados
- **CSS moderno** con variables y grid/flexbox
- **Navegación intuitiva** con header y sidebar

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de la aplicación
│   ├── header.jsx      # Navegación principal
│   ├── sidebar.jsx     # Menú lateral
│   ├── maincontent.jsx # Contenido principal
│   └── footer.jsx      # Pie de página
├── assets/
│   └── styles.css      # Estilos responsive
├── App.jsx             # Componente raíz
└── main.jsx           # Punto de entrada
```

## 🧩 Componentes

### Header
- Navegación principal con logo
- Menú responsive con toggle para móviles
- Enlaces a secciones principales

### Sidebar
- Menú lateral con navegación secundaria
- Iconos para cada sección
- Enlaces a dashboard, proyectos, tareas, etc.

### MainContent
- Sección hero con llamada a acción
- Grid de características destacadas
- Artículos de contenido
- Totalmente responsive

### Footer
- Información de contacto
- Enlaces rápidos
- Redes sociales
- Derechos de autor

## 🎨 Estilos

- **CSS Variables** para colores y espaciado consistentes
- **CSS Grid** y **Flexbox** para layouts modernos
- **Responsive Design** con media queries
- **Transiciones suaves** para mejor UX
- **Sombra y efectos** para profundidad visual

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal
- **Vite** - Herramienta de construcción
- **CSS3** - Estilos modernos
- **JavaScript ES6+** - Sintaxis moderna

## 🚀 Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:5173
   ```

## 📱 Responsive Design

La aplicación está diseñada para funcionar perfectamente en:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Comandos Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta ESLint

## 📝 Notas de Desarrollo

- Los componentes están documentados con comentarios JSDoc
- Se utilizan nombres de clases CSS descriptivos
- El código sigue las mejores prácticas de React
- CSS organizado con variables para fácil mantenimiento

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
