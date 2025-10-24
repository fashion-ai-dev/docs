# Servicio de Perfilado de Clientes

## ¿Qué es este servicio?

El **Fashion AI Profiling** es un servicio inteligente que analiza el comportamiento de compra y navegación de tus clientes y genera automáticamente perfiles detallados y accionables. Estos perfiles ayudan a tu equipo de marketing, ventas y CRM a entender mejor a cada cliente y crear experiencias personalizadas.

## ¿Para qué sirve?

### Principales beneficios:

✅ **Personalización a escala**: Crea campañas personalizadas para cada perfil de cliente automáticamente

✅ **Insights conductuales**: Comprende el estilo de vida, valores y preferencias estéticas de tus clientes

✅ **Sugerencias accionables**: Recibe recomendaciones concretas de looks, tono de comunicación y estrategias de campaña

✅ **Detección de oportunidades**: Identifica nuevos comportamientos y momentos ideales para el abordaje

✅ **Creación de contenido**: Ten direccionamientos claros para crear contenido relevante para cada cliente

## ¿Cómo funciona?

```
Datos del Cliente → Servicio Fashion AI → Perfil Completo en JSON
(compras + navegación)    (análisis IA)      (listo para usar)
```

### Flujo simplificado:

1. **Entrada**: Accedemos al historial de compras y la navegación del cliente a través de los datos de tu plataforma registrada al momento de la integración.
2. **Procesamiento**: Nuestra IA analiza los datos e identifica patrones conductuales
3. **Salida**: Recibes un perfil estructurado con insights y recomendaciones prácticas

## ¿Qué recibes en el perfil generado?

### 1. **Perfil del Cliente**
- Descripción general del cliente: estilo de vida, valores, intereses
- Estilo general: preferencias de colores, cortes, nivel de formalidad, estéticas

**Ejemplo:**
```json
{
  "descricao_geral": "Mujer de 35 años, profesional independiente, valora sostenibilidad y comodidad en el día a día",
  "estilo_geral": "Casual-chic con tendencia minimalista, prefiere tonos neutros y piezas atemporales"
}
```

### 2. **Ocasiones Relevantes**
Para cada situación importante en la vida del cliente:
- Nombre de la ocasión (trabajo, fiesta, casual, etc.)
- Cómo se presenta el cliente en esa ocasión
- Sugerencias de looks completos

**Ejemplo:**
```json
{
  "ocasião": "Trabajo - Reuniones Importantes",
  "persona_na_ocasião": "Profesional confiada, elegante sin exageraciones",
  "sugestao_look": [
    "Blazer de sastrería beige",
    "Pantalón de sarga negro",
    "Blusa de seda off-white",
    "Zapatos de tacón nude"
  ]
}
```

### 3. **Briefing de Marketing**
Direccionamientos prácticos para campañas:

**Tono de voz**: Cómo hablar con este cliente
- Ejemplo: ["inspiracional", "auténtico", "sofisticado pero accesible"]

**Dirección visual**: Cómo crear el material visual
- Ejemplo: ["paleta terrosa", "escenarios urbanos y naturales", "fotografía con luz natural"]

**Orientación para campañas**: Estrategias de posicionamiento
- Ejemplo: ["Destacar versatilidad de las piezas", "Conectar producto con sostenibilidad", "Mostrar transición día-noche"]

### 4. **Ganchos de Contenido**
Temas que resuenan con el cliente:
- Ejemplo: ["Moda sostenible y consumo consciente", "Piezas comodín para múltiples ocasiones", "Minimalismo en el guardarropa"]

### 5. **Momento de Compra Actual**
Análisis del comportamiento reciente:

**Navegaciones recientes**: Lo que el cliente vio/buscó en los últimos días
- Ejemplo: "20/01 - Buscó 'vestido midi' y visualizó 3 productos"

**Resumen del momento**: Interpretación conductual
- Ejemplo: "Cliente está explorando opciones para eventos formales de verano"

**Relación con historial**: Cómo esto se conecta con compras anteriores
- Ejemplo: "Primera vez buscando vestidos - normalmente compra piezas separadas"

**¿Nuevo comportamiento?**: `true` o `false`
- Indica si el cliente está mostrando un patrón diferente al usual

**Oportunidades**: Acciones recomendadas
- Ejemplo: ["Enviar lookbook de vestidos midi", "Ofrecer consultoría de styling virtual"]

## ¿Cómo usar el servicio?

[Aprende a implementar en la guía del desarrollador](../developer-guide/profiling.md)

## Casos de uso prácticos

### 1. **Marketing Personalizado**
**Situación**: Quieres crear una campaña de email segmentada

**Cómo usar**:
- Genera perfiles de 100 clientes
- Agrupa por briefing de marketing similar
- Crea 3-4 versiones de email con tono de voz y dirección visual adecuados
- Aumenta la tasa de apertura en 40%+

### 2. **Recomendación de Productos**
**Situación**: El cliente navegó en el sitio pero no compró

**Cómo usar**:
- Analiza el "momento_compra_actual"
- Identifica las "oportunidades" sugeridas
- Envía recomendaciones personalizadas basadas en las ocasiones relevantes
- Aumenta la conversión en 25%+

### 3. **Creación de Contenido**
**Situación**: Necesitas ideas para posts de Instagram

**Cómo usar**:
- Usa los "ganchos_conteudo" de tus mejores clientes
- Crea posts que resuenen con esos temas
- Aumenta el engagement orgánicamente

### 4. **Atención VIP**
**Situación**: Cliente de alto valor agendó consultoría

**Cómo usar**:
- El vendedor consulta el perfil antes de la atención
- Ya conoce estilo, ocasiones importantes y preferencias
- Sugiere looks completos durante la consultoría
- Aumenta el ticket promedio en 60%+


### 5. **Detección de Cambio de Comportamiento**
**Situación**: El cliente siempre compraba casual, pero comenzó a buscar piezas formales

**Cómo usar**:
- El campo "novo_comportamento" retorna `true`
- Identifica el cambio en el campo "momento_compra_atual"
- Contacta proactivamente ofreciendo consultoría
- Captura la oportunidad antes que la competencia

## Preguntas Frecuentes

### ¿El servicio funciona con pocos datos?
Sí, pero cuantos más datos de compra y navegación, más rico y preciso será el perfil.

### ¿Los perfiles se actualizan automáticamente?
No. Debes llamar al servicio nuevamente cuando quieras un nuevo perfil.

### ¿Puedo usarlo para clientes B2B?
Sí, el modelo se adapta al tipo de datos proporcionados.

### ¿Puedo integrar con mi CRM?
¡Sí! Solo necesitas integrar vía API REST. Consulta con tu equipo técnico.


## Soporte

Para dudas técnicas o comerciales, contacta con el equipo de Fashion AI :mailbox: **support@generativecrm.com**
