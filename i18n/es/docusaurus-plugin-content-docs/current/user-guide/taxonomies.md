---
sidebar_position: 3
---

# Taxonomías

Las taxonomías son estructuras de datos que definen cómo describir productos de forma estandarizada. Piensa en ellas como un "diccionario" que enseña al sistema a generar descripciones, contenido SEO, colores, tallas, etc. para productos de e-commerce.

## 🏗️ Cómo Funciona

### 📋 Dos Tipos de Taxonomía

| Tipo | Descripción | Quién Usa |
|------|-------------|-----------|
| **Taxonomía Global** | Estándar creado por administradores | ✅ Todos los clientes |
| **Taxonomía Personalizada** | Versión personalizada por el cliente | 👤 Cliente específico |

### 🔄 Flujo de Trabajo

1. **Administrador crea** taxonomía global
2. **Sistema distribuye** a todos los clientes
3. **Cliente puede personalizar** su versión

## 🎛️ Categorías Automáticas

Algunos grupos se aplican automáticamente a todas las categorías de productos:

- 🎨 **Estampados y Colores** - Descripciones de patrones y paleta de colores
- 👔 **Combina Con** - Sugerencias de piezas para armonizar
- 💰 **Soporte de Ventas** - Argumentos y beneficios para ventas
- 🔍 **Contenido SEO** - Contenido optimizado para motores de búsqueda

💡 **Importante:** Cuando editas una propiedad de estos tipos, se copia automáticamente a todas las categorías existentes.

## 🔢 Sistema de Versionado

### Cómo Funciona el Control de Versiones

**Taxonomía Global:**
- Versiones numeradas: v1, v2, v3...
- Cada actualización genera una nueva versión

**Taxonomía del Cliente:**
- Formato: major.minor (ejemplo: 2.1, 2.2)
- **Major:** Basado en la versión global recibida
- **Minor:** Aumenta con cada personalización del cliente - cliente puede editar categorías simultáneas antes de guardar y generar una nueva versión

### Ejemplo Práctico

1. Cliente recibe taxonomía global v2 → Su versión se convierte en **2.0**
2. Cliente hace primer conjunto de personalizaciones → Versión **2.1**

> ⚠️ **Note**: Si cliente quiere hacer una versión con el primer y segundo conjunto de personalizaciones, debe editar el segundo conjunto desde la versión **2.1**, que debe ser seleccionada manualmente en el selector de versión, por defecto es la versión principal.

3. Cliente hace segundo conjunto de personalizaciones → Versión **2.2**
4. Admin lanza nueva versión global v3 → Cliente puede optar por recibirla como **3.0**

## 📚 Operaciones Disponibles

- Personalizar taxonomías (editar ejemplos y ajustes)
- Crear versiones personalizadas completas
- **Establecer versión como principal** para activarla en el procesamiento de productos
- Resetear a versión global estableciendo versión principal

## ⚙️ Cómo Personalizar

### Paso-a-Paso para Clientes

1. **Accede** a tus taxonomías en la plataforma
2. **Selecciona** la categoría que deseas personalizar
3. **Edita ejemplos** específicos de tu negocio
4. **Guarda** como nueva versión personalizada
5. **Establece como versión principal** para activar en el procesamiento de productos

### Vídeo Demostrativo

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="https://www.youtube.com/embed/YkdTPn-vb0Y"
    title="Demo de Taxonomías"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen>
  </iframe>
</div>

## 🎯 Activando una Versión de Taxonomía

### Estableciendo Versión Principal

Para hacer activa una versión de taxonomía para procesar tus productos:

1. **Navega** a tu página My Style Ai
2. **Elige** la versión que deseas activar (ej: "2.1", "2.2")
3. **Haz clic "Establecer como Principal"** para convertirla en la versión activa
4. **Confirma** el cambio

⚠️ **Importante:** Solo la **versión principal** se usa para procesar productos. Otras versiones permanecen disponibles pero inactivas.

### Qué Sucede Cuando Estableces Principal

✅ **El sistema usará esta taxonomía para:**
- Generar descripciones de productos
- Crear contenido SEO
- Extraer atributos de productos

❌ **Versiones inactivas:**
- Permanecen guardadas para referencia
- Pueden ser activadas posteriormente
- No afectan el procesamiento de productos

### Consejos de Gestión de Versiones

- **Mantén respaldo** de versiones funcionales
- **Documenta cambios** que hagas en versiones personalizadas
- **Haz ediciones grandes** puedes hacer ediciones grandes y generar una versión
- **Actualiza versión principal** estacionalmente para mejores resultados

### Consejos de Personalización

- Usa lenguaje consistente con tu marca
- Agrega términos específicos de tu nicho