# Sistema de Versionado

### Cómo Funciona el Control de Versiones

**Taxonomía Global:**
- Versiones numeradas: v1, v2, v3...
- Cada actualización genera una nueva versión

**Taxonomía del Cliente:**
- Formato: mayor.menor (ejemplo: 2.1, 2.2)
- **Mayor:** Basado en la versión global recibida
- **Menor:** Aumenta con cada personalización del cliente - el cliente puede editar categorías simultáneamente antes de guardar y generar una nueva versión

### Ejemplo Práctico

1. El cliente recibe taxonomía global v2 → Su versión se convierte en **2.0**
2. El cliente hace el primer conjunto de personalizaciones → Versión **2.1**

> ⚠️ **Nota**: Si el cliente quiere hacer una versión con el primer y segundo conjunto de personalizaciones, el cliente debe editar el segundo conjunto desde la versión **2.1**, que debe ser seleccionada manualmente en el selector de versión, por defecto es la versión principal.

3. El cliente hace el segundo conjunto de personalizaciones → Versión **2.2**
4. El administrador lanza nueva versión global v3 → El cliente puede optar por recibirla como **3.0**

## 📚 Operaciones Disponibles

- Personalizar taxonomías (editar ejemplos y ajustes)
- Crear versiones personalizadas completas
- **Establecer versión como principal** para activarla para procesamiento de productos
- Restablecer a versión global estableciendo versión principal

## ⚙️ Cómo Personalizar

### Paso a Paso para Clientes

1. **Accede** a tus taxonomías en la plataforma en la pestaña My StyleAi
2. **Selecciona** la categoría que deseas personalizar, puedes personalizar muchas categorías antes de guardar
3. **Edita ejemplos** específicos para tu negocio
4. **Guarda** como nueva versión personalizada
5. **Establece como versión principal** para activar para procesamiento de productos

### Video de Demostración

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="https://www.youtube.com/embed/-NcQNzSIDOQ"
    title="Taxonomies Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen>
  </iframe>
</div>

## 🎯 Activando una Versión de Taxonomía

### Establecer Versión Principal

Para hacer que una versión de taxonomía esté activa para procesar tus productos:

1. **Navega** a tu página My Style Ai
2. **Elige** la versión que deseas activar (por ejemplo, "2.1", "2.2")
3. **Haz clic en "Establecer como Principal"** para hacerla la versión activa
4. **Confirma** el cambio

⚠️ **Importante:** Solo la **versión principal** se usa para procesar productos. Otras versiones permanecen disponibles pero inactivas.

### Qué Sucede Cuando Estableces como Principal

✅ **El sistema usará esta taxonomía para:**
- Generar descripciones de productos
- Crear contenido SEO
- Extraer atributos de productos

❌ **Versiones inactivas:**
- Permanecen guardadas para referencia
- Pueden ser activadas más tarde
- No afectan el procesamiento de productos
