# HubSpot

Sincroniza sin problemas los comportamientos de tus clientes con HubSpot para potenciar tu CRM, email marketing y flujos de trabajo de automatización. Transforma los insights de comportamiento en propiedades de contacto accionables, listas y flujos de trabajo que impulsen experiencias personalizadas para el cliente.

## Descripción General

La integración con HubSpot te permite:

- **Sincronizar comportamientos como Listas de HubSpot** - Exporta segmentos de comportamiento como listas estáticas o activas
- **Enriquecer propiedades de contacto** - Agrega atributos de comportamiento a los registros de contactos
- **Activar flujos de trabajo automatizados** - Lanza campañas de nutrición personalizadas basadas en comportamientos
- **Calificar leads dinámicamente** - Ajusta las puntuaciones de leads según los segmentos de comportamiento
- **Personalizar campañas de email** - Envía mensajes dirigidos a grupos de comportamiento específicos
- **Rastrear engagement** - Monitorea cómo diferentes comportamientos interactúan con tu contenido
- **Sincronización bidireccional** - Mantén los datos actualizados en ambas plataformas automáticamente

## Cómo Funciona

### 1. Configura tu App Privada de HubSpot

Antes de conectar a nuestra plataforma, necesitas crear una App Privada en HubSpot y obtener un Token de Acceso. Esto proporciona acceso seguro basado en API para sincronizar tus datos de comportamiento.

#### Paso 1: Crea una App Privada de HubSpot

1. **Inicia sesión en HubSpot** con credenciales de administrador
2. Haz clic en el ícono de **Configuración** (ícono de engranaje) en la barra de navegación superior
3. En la barra lateral izquierda, navega a **Integraciones** > **Apps Privadas**
4. Haz clic en **Crear una app privada** en la esquina superior derecha

#### Paso 2: Configura tu App

1. **Nombre de la App:** Asigna un nombre descriptivo a tu app (ej: "Integración de Segmentación de Comportamiento" o "Sincronización de Comportamientos de Clientes")
2. **Descripción (opcional):** Agrega notas sobre qué hace esta app (ej: "Sincroniza segmentos de comportamiento de clientes para marketing dirigido")
3. **Logo (opcional):** Sube un logo si lo deseas

#### Paso 3: Establece los Alcances y Permisos Requeridos

#### Paso 4: Genera tu Token de Acceso

1. Haz clic en **Crear app** en la parte inferior de la página
2. HubSpot mostrará tu **Token de Acceso** - esto es crítico y solo se mostrará una vez
3. **Copia el Token de Acceso inmediatamente** y guárdalo de forma segura
4. Haz clic en **Continuar creando** o **Mostrar token** si necesitas verlo nuevamente (solo disponible inmediatamente después de la creación)

**Notas Importantes de Seguridad:**
- Trata tu Token de Acceso como una contraseña - nunca lo compartas públicamente
- Guárdalo en un gestor de contraseñas seguro o bóveda de secretos
- Si se ve comprometido, puedes regenerar el token en la configuración de HubSpot
- El token proporciona acceso API a tu cuenta de HubSpot basado en los alcances que seleccionaste

#### Paso 5: Revisar y Activar

1. Revisa los detalles de la app y los permisos
2. Tu App Privada ahora está activa y lista para usar
3. Mantén el Token de Acceso a mano para el siguiente paso

### 2. Conecta tu Cuenta de HubSpot a Nuestra Plataforma

Ahora que tienes tu App Privada de HubSpot y Token de Acceso, conéctala a nuestra plataforma:

1. Navega a **Configuración** > **Integraciones** en nuestra plataforma
2. Selecciona **HubSpot** de la lista de integraciones disponibles
3. Haz clic en **Conectar con HubSpot**
4. Elige **App Privada** como método de conexión
5. **Pega tu Token de Acceso** en el campo proporcionado
6. **Ingresa tu ID de Portal de HubSpot** (encontrado en Configuración de HubSpot > Configuración de Cuenta > Valores Predeterminados de Cuenta)
7. Haz clic en **Verificar Conexión** para probar la integración
8. Una vez verificado, haz clic en **Guardar** para completar la configuración

## Mejores Prácticas

### Convenciones de Nomenclatura de Listas

Usa nombres claros y consistentes para tus listas de HubSpot:

- Incluye el nombre del comportamiento: `[Comportamiento] Buscadores de Confort - Activo`
- Agrega el tipo de sincronización: `Clientes Leales - Sincronización Diaria`
- Especifica el propósito: `Cazadores de Valor - Campaña Email Q1 2025`
- Usa prefijos: `COMP - Entusiastas de Calidad` (agrupa todas las listas de comportamiento juntas)

Esto facilita encontrar y gestionar listas en HubSpot.

Para más información sobre cómo crear comportamientos efectivos para exportar, consulta nuestra [Guía de Comportamientos](../) y [Cómo Usar Comportamientos](../how-to-use).