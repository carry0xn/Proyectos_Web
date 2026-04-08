# 🎨 CSS Architecture - Estructura Mejorada

## 📁 **Estructura de archivos:**

```
css/
├── 🏗️ _variables.css    # Variables CSS globales
├── 🏗️ _base.css         # Estilos base y utilidades  
├── 📄 index.css         # Índice de importación
├── 🧩 Header.css        # Componente navegación
├── 🧩 Inicio.css        # Componente hero
├── 🧩 Perfil.css        # Componente perfil
├── 🧩 Timeline.css      # Componente timeline
└── 🧩 Experiencia.css   # Componente habilidades
```

## ✨ **Mejoras implementadas:**

### 🎯 **Variables CSS globales**
- ✅ Colores consistentes en toda la app
- ✅ Tipografía estandarizada  
- ✅ Espaciado sistemático
- ✅ Breakpoints unificados
- ✅ Transiciones consistentes

### 🧰 **Sistema de utilidades**
- ✅ Clases reutilizables (`.btn`, `.card`, `.section`)
- ✅ Spacing utilities
- ✅ Typography utilities  
- ✅ Status badges

### 📱 **Responsive Design**
- ✅ Breakpoints estandarizados (480px, 768px, 1024px)
- ✅ Mobile-first approach
- ✅ Grid systems consistentes

### 🎨 **Design System**
- ✅ Naming conventions consistentes
- ✅ Comentarios y documentación
- ✅ Organización por funcionalidad

## 🚀 **Cómo usar:**

### **Importar en componentes:**
```css
@import './_variables.css';

.mi-componente {
  background: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
}
```

### **Usar clases de utilidad:**
```jsx
<div className="card">
  <h2 className="section-title">Mi título</h2>
  <button className="btn btn-primary">Mi botón</button>
</div>
```

## 🎨 **Variables disponibles:**

### 🌈 **Colores:**
- `--color-primary`: #b347e6
- `--color-primary-dark`: #572697  
- `--color-background-light`: #d5a6da
- `--color-background-lighter`: #e9b0ff
- `--color-white`: #ffffff
- `--color-gray-dark`: #333333

### 📝 **Tipografía:**
- `--font-family-primary`: 'Merriweather', serif
- `--font-size-xs` a `--font-size-4xl`
- `--font-weight-normal` a `--font-weight-bold`

### 📏 **Espaciado:**
- `--spacing-xs`: 0.25rem (4px)
- `--spacing-sm`: 0.5rem (8px)  
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)

### 📱 **Breakpoints:**
- `--breakpoint-mobile`: 480px
- `--breakpoint-tablet`: 768px
- `--breakpoint-desktop`: 1024px

## 🔧 **Beneficios:**

✅ **Mantenimiento más fácil** - Cambios centralizados  
✅ **Consistencia visual** - Design system unificado  
✅ **Performance mejorado** - Menos duplicación  
✅ **Escalabilidad** - Fácil agregar nuevos componentes  
✅ **Responsive automático** - Breakpoints estandarizados  
✅ **Accesibilidad** - Soporte para motion preferences  

## 🎯 **Próximos pasos:**

1. **Themes**: Implementar dark mode
2. **Animations**: Librería de animaciones reutilizables
3. **Components**: Más componentes base (modals, tooltips)
4. **Performance**: CSS critical path optimization