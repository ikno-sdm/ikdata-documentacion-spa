---
layout: default
title: {{ site.name }}
---
<!-- markdownlint-disable no-inline-html -->

<div class="toc" markdown="1">

## Tabla de Contenido<!-- omit in toc -->

- [Introducción](#introducción)
  - [Pantalla principal](#pantalla-principal)
- [Proyectos](#proyectos)
  - [Crear un proyecto](#crear-un-proyecto)
  - [Importar un proyecto](#importar-un-proyecto)
  - [Ver o Modificar proyectos](#ver-o-modificar-proyectos)
    - [Pre-procesamiento](#pre-procesamiento)
    - [Procesamiento](#procesamiento)
    - [Exportar](#exportar)
- [Subir imágenes](#subir-imágenes)
- [Administración de Lotes](#administración-de-lotes)
- [Usuarios](#usuarios)
  - [Crear usuario](#crear-usuario)

</div>

## Introducción

IK-DATA es un software de Procesamiento inteligente de documentos (IDP) basado en inteligencia artificial. Para conocer más acerca de Ik-Data, haga click en el siguiente [enlace](/index)

### Pantalla principal

Cuando ingresa a Ik-Data, se mostrará la venta de inicio de sesión donde encuentra:

  1. **Cambiar idioma**: Cambia el idioma de la interfaz (Inglés / Español).
     >NOTA: Este botón estará visible en todas las pestañas de la aplicación.
  2. Campos para ingreso de los datos de usuario.
  3. Versión de Ik-Data.

![Home Page][HomePage]

<details>
<summary>Modificación de usuario por defecto</summary>
<div markdown="1">

### Primer inicio de sesión <!-- omit in toc -->

Si es la primera vez que inicia sesión, deberá modificar los datos de acceso como se explica a continuación:

![First Login][FirstLogin]

1. Ingrese el nuevo Nombre de Usuario.
2. Ingrese la nueva Contraseña.
3. Ingrese de nuevo la nueva Contraseña.
4. Haga clic en el botón `Guardar`

![Change Default User][ChangeDefaultUser]

[*Ir a la Tabla de Contenido.*][toc]

---
</div>
</details>

Una vez realizados los anteriores pasos, se mostrará una ventana indicando que la modificación ha sido efectuada.

Por defecto al iniciar sesión, ingresará a la pestaña de [Administración de Lotes](#administración-de-lotes). Para ver el menú, acerque el mouse al botón de la parte superior izquierda, indicado en el cuadro naranja de la siguiente imagen

![Post Login][FirstLoggedView]

El menú le permite navegar por las diferentes pestañas de la aplicación:

1. [Proyectos](#proyectos) : Lleva a la pestaña de `Gestión de Proyectos`
2. [Lotes](#lotes) : Lleva a la pestaña de `Administración de Lotes`
3. [Subir Imágenes](#subir-imágenes) : Lleva a la pestaña de `Subir Lotes`
4. [Usuarios](#usuarios) : Lleva a la pestaña de `Administración de Usuarios`
5. [Salir](#salir) : Cierra sesión.

![Menú][Menu]

[*Ir a la Tabla de Contenido.*][toc]

## Proyectos

La pestaña de `Gestión de Proyectos` está dividida en tres (3) secciones:

1. Listado de los proyectos disponibles en IkData.
2. Control de vista de la lista de proyectos.
3. Botones de acciones sobre los proyectos:
   - [Nuevo](#crear-un-proyecto): Crea un nuevo proyecto.
   - [Importar](#importar-un-proyecto): Importar un proyecto a través de un archivo comprimido.
   - [Abrir](#ver-o-modificar-proyectos): Permite ver o modificar la configuración de un proyecto.
   - Exportar: Exporta el proyecto con todas las configuraciones actuales en un archivo ZIP.
   - Eliminar: Eliminar un proyecto.
      >NOTA: El proyecto no debe tener lotes pendientes.
   - Desbloquear: Desbloquea el acceso en caso de que un usuario no haya cerrado el proyecto.
   - Refrescar: Actualiza el estado de los proyectos.

![Project Management][ProjectManagement]

### Crear un proyecto

Los pasos para crear un nuevo proyectos son:

1. Haga clic en el botón `Nuevo`.
2. Ingresar el nombre del nuevo proyecto.
3. Ingrese la ruta absoluta de una carpeta existente dentro del equipo.
4. Haga clic en el botón `Crear`.

![New Project][ProjectNew]

### Importar un proyecto

Para importar un proyecto:

1. Haga clic en el botón `Importar`.
2. (Opcional) Ingrese el nombre del proyecto, si lo deja en blanco se usará el nombre que viene dentro del archivo comprimido.
3. Ingrese la ruta absoluta de una carpeta existente dentro del equipo.
4. Espacio para cargar el archivo comprimido (Arrastrando y soltando o haciendo Haga clic en cualquier parte de este espacio para abrir el cuadro de carga por default).

![Import Project][ProjectImport]

### Ver o Modificar proyectos

Cuando abre un proyecto, encuentra dos secciones:

1. Subsecciones de configuración
   - [Preprocessing (Pre-procesamiento)](#pre-procesamiento): Configuración generales del proyecto (idioma, prioridad, carpeta y medios de entrada).
   - [Processing (Procesamiento)](#procesamiento): Definición de tipos de documentos y campos de extracción.
   - [Export (Exportar)](#exportar): Configuración de formato y lugar donde se exportará la información obtenida.
2. Caja de botones:
   - Guardar proyecto: Guarda todas la modificaciones realizadas.
   - Cerrar: Regresa a la pestaña [Proyectos](#proyectos).

![Projects Setting][ProjectsSett]

#### Pre-procesamiento

1. Ruta de la carpeta para subir archivos (lotes) para procesar.
2. Tipos de Clasificación: Configura el tipo de clasificación:
   - ocr: Clasificación según el contenido completo de la imagen.
   >NOTA: por defecto cuando queda vacío.
   - key: Búsqueda de una palabra o frase dentro de la imagen.
   - qr: Búsqueda de códigos (barras o QR).
3. Idioma de los archivos:
   - Español:
     - spanormal (Recomendado)
     - spa
   - Inglés:
     - eng
4. Configuración de Segmentación (Opción Avanzada: Para más información consulte [Opciones Tesseract](https://github.com/tesseract-ocr/tessdoc/blob/master/ImproveQuality.md#page-segmentation-method))
5. Puede elegir la prioridad que tendrán los lotes del proyecto respecto a otros proyectos (Siendo 1: Más importante y 5: Menos importante).

![Projects Settings Pre procesamiento][ProjectsSettPrepro]

<!-- markdownlint-disable MD029 -->

6. Puede configurar un correo GMAIL para procesar los archivos adjunto que a este lleguen.
7. Permite configurar un escáner [Kodak Alaris INfuse](https://www.alarisworld.com/es-co/landing-page/infuse-smart-connected-scanning).
   >NOTA: Para ver el funcionamiento de estas dos funciones puede ver el siguiente [video](https://youtu.be/EgRRXJbqHk4).
9. Limpia las líneas de las imágenes.

<!-- markdownlint-enable MD029 -->

![Projects Sett Prepro2][ProjectsSettPrepro2]

#### Procesamiento

En esta sección, encuentra los tipos de documentos que va a utilizar en el proyecto (Ej: Factura de venta, pagos, impuestos).

En la sección 2, encuentra tres botones:

- Actualizar: Refresca los cambios el área 1.
- Borrar: Elimina los documentos seleccionados con el cuadro de selección (Check box).
- Nuevo Doc: Crear un nuevo tipo de documento.

![Projects Sett DocTypes][ProjectsSettDocTypes]

Al hacer clic sobre un documento, se mostrará la configuración de dicho documento (tipología). La cual, está compuesta por:

1. Datos generales (De izquierda a derecha):
   - Nombre de la tipología.
   - Descripción.
   - Margen de confianza(Opción Avanzada):  Margen de incertidumbre aceptable (Número entre 1 y 100)
2. Area para cargar una imagen de referencia.
3. Elimina la imagen actual.
4. Descargar la imagen
5. Activar o desactivar la vista previa.
6. Área de vista previa.

![Projects Sett Processing Prev][ProjectsSettProcessingPrev]

---

Una vez creado y configurado un tipo de documento, puede añadir los campos que necesita buscar para extraer la información que requiera. Para ello:

1. Haga clic en el botón con los tres puntos verticales.
2. Extracción de campos.

![Projects Sett DocTypes2][ProjectsSettDocTypes2]

---

En esta pestaña, puede establecer los campos de interés.

1. Lista de campos.
2. Acciones sobre los campos.
   - Agregar Campo: Añade un nuevo campo.
   - Guardar Todo: Guardar todos los cambios realizados.
   - Borrar Campos: Elimina los campos seleccionados.

![Projects Sett Processing FieldSett][ProjectsSettProcessingFieldSett]

En cada campo puede agrupar sub campos que contengan los datos a encontrar. Pulse sobre cualquier campo y vera una lista desplegable donde podrá:

- Modificar el nombre del sub campo. Presionando en la franja azul.
- Activar o desactivar con el cuadro de selección de la parte derecha.
- Borrar uno o varios, seleccionándolos con el cuadro de selección de la parte izquierda y presionando el botón `Borrar Extracción`.
- Agregar un sub campo, haciendo clic en el botón `Agregar Extracción`.
- Ver o modificar las opciones del sub campo, haciendo doble clic en cualquier zona del área gris opaco, distinta a las mencionadas anteriormente.

![Projects Sett Processing Field2][ProjectsSettProcessingField2]

Aquí se resaltan, las siguientes regiones:

1. Información del sub campo:
   - Key Pattern: Texto del título del campo a encontrar.
   - Key Fuzziness (Opción Avanzada): Margen de posible discrepancia entre el Key Pattern establecido y el procesado.
   - Value Pattern: Expresión Regular del dato a obtener.

2. Área donde se ubica el Key Pattern.
3. Área donde se ubica el Value Pattern.
4. Acciones:
   - Choose Image: Selecciona un documento de referencia.
   - Save Changes: Guarda todos los cambios.

![Projects Sett Processing FieldOnImg][ProjectsSettProcessingFieldOnImg]

#### Exportar

Una vez procesado y validado los cada documento, se exportarán los datos extraídos, aquí podrá hacer ajustes según lo requiera:

1. Seleccione el tipo de archivo (CSV o JSON).
2. En caso de haber seleccionado CSV, seleccione los campos.
3. También serán exportadas las imágenes resultantes, y puede elegir el formato (PNG o TIF).
4. Carpeta donde serán exportadas los archivos.
5. Seleccione si quiere que se haga Limpieza de archivos.

![Projects Sett Export][ProjectsSettExport]

[*Ir a la Tabla de Contenido.*][toc]

## Subir imágenes

Para subir lotes (documentos PDF, imágenes JPG, png, TIFF) se puede hacer desde la carpeta asignada al proyecto o desde esta pestaña, como se explica a continuación:

![Batches][BatchesUpload]

1. Selecciones el proyecto al cual va a cargar el lote.
2. Cargue el archivo (Arrastrando y soltando o haciendo Haga clic en cualquier parte de este espacio para abrir el cuadro de carga por default).
3. Haga clic en el botón `Cargar archivo(s)`.

[*Ir a la Tabla de Contenido.*][toc]

## Administración de Lotes

Esta es la vista principal, ya que aquí se encuentra un resumen de la información más relevante:

1. Listado de los lotes cargados.
2. Acciones sobre los lotes.
   - ABRIR: Abre la vista de `validación`, solo si el lote se encuentra en ese estado.
   - BORRAR: Elimina el lote.
   - DESBLOQUEAR: Desbloquea el acceso a la validación del lote, si está ocupado por otro usuario.
   - REPROCESAR: Ejecuta de nuevo el procesamiento del lote.

3. Gráfica de torta que muestra el estado de todos los lotes.
4. Muestra información adicional del lote.
   >NOTA: Este campo solo es visible al seleccionar un lote.
   - En esta área, se muestra un gráfico que indica el progreso del lote.

5. Gráfico que muestra el número de páginas procesadas en las últimas 24 horas.

![Batch Management][BatchManagement]

---

Cuando un lote es cargado, éste se pone en cola para su procesamiento, el cual consta de 8 pasos:

1. 🟨NEW (Nuevo): Indica que el lote está cargado y está en cola.
2. 🟪PREPROCESSING (Preprocesamiento): Análisis del lote y preprocesamiento de imágenes.
3. 🟦PROCESSING (Procesamiento): Clasificación y extracción de datos.
4. 🟩VALIDATE (Validación): Lote en espera de validación manual.
5. ![square1][sqr1] OPEN (Abierto): El lote ha sido abierto para validación, pero no se ha finalizado.
6. ![square2][sqr2] READY (Listo): El lote ha sido validado.
7. 🟫EXPORTING (Exportando): Exportación de los datos extraídos.
8. 🟧FINISHED (Finalizado): Lote finalizado.

<details open>
<summary>Ver/Ocultar Animación</summary>
<div markdown="1">

![Batch Process][BatchProcess]

</div>
</details>

---

En este punto podrá validar los datos procesados haciendo doble clic en el lote.

![Batches Validate][BatchesValidate]

Aquí se presenta:

1. Cada página del lote.
2. Acciones:
   - Anterior o Siguiente: Permite moverse por las páginas del lote.
3. Resultado de la clasificación del documento.
4. Campos y valor obtenido.
   - Si está en Naranja, significa que hay bajo porcentaje de confianza en la detección. Realice la corrección, de ser necesario, y pulse el botón Validar.
5. Indicación del lugar del campo identificado dentro de la imagen.
6. Controles de vista: Podrá aumentar el tamaño de la imagen si requiere comprobar el dato del campo.

![Batches Validate2][BatchesValidate2]

Una vez finalizada la validación, se mostrará un aviso donde podrá confirmar que ha finalizado la validación o cancelar y seguir revisando.

![Batches Validate3][BatchesValidate3]

Al haber confirmado la validación, se exportarán los datos del lote y habrá finalizado.

![Batches Finished][BatchesFinished]

[*Ir a la Tabla de Contenido.*][toc]

## Usuarios

Desde esta pestaña puede editar, eliminar o crear un [nuevo usuario](#crear-usuario).

### Crear usuario

![New User][UserNew]

1. Haga clic en el botón Crear usuario.
2. Ingrese el nombre del usuario.
3. Ingrese la contraseña.
4. Ingrese nuevamente la contraseña.
5. Seleccione si el usuario va a tener permisos de Administrador.
6. Haga clic en el botón Guardar.

[*Ir a la Tabla de Contenido.*][toc]

<!-- ----------------------IMAGE URLS---------------------------------- -->

[HomePage]: media/ScreenShots/img1.png "Página de inicio"
[FirstLogin]: media/ScreenShots/img2.png "Primer Inicio de Sesión"
[ChangeDefaultUser]: media/ScreenShots/img3.png "Cambio de usuario default"
[FirstLoggedView]: media/ScreenShots/img4.png "Administración de Lotes"
[Menu]: media/ScreenShots/img5.png "Menú"
[ProjectManagement]: media/ScreenShots/img6.png "Gestión de Proyectos"
[ProjectNew]: media/ScreenShots/img7.png "Creación de Nuevo Proyecto"
[ProjectImport]: media/ScreenShots/img8.png "Importación de proyecto"
[ProjectsSett]: media/ScreenShots/img9.png "Configuración del Proyecto"
[ProjectsSettPrepro]: media/ScreenShots/img10.png "Configuración Pre Procesamiento"
[ProjectsSettPrepro2]: media/ScreenShots/img11.png "Configuración Pre Procesamiento 2"
[ProjectsSettDocTypes]: media/ScreenShots/img12.png "Configuración Procesamiento"
[ProjectsSettProcessingPrev]: media/ScreenShots/img13.png "Configuración de la tipología"
[ProjectsSettDocTypes2]: media/ScreenShots/img14.png "Opciones del documento"
[ProjectsSettProcessingFieldSett]: media/ScreenShots/img15.png "Configuración de Campos"
[ProjectsSettProcessingField2]: media/ScreenShots/img16.png "Sub campos"
[ProjectsSettProcessingFieldOnImg]: media/ScreenShots/img17.png "Configuración de sub campo"
[ProjectsSettExport]: media/ScreenShots/img18.png "Configuración de Exportación"
[BatchesUpload]: media/ScreenShots/img19.png "Subir Lotes"
[BatchManagement]: media/ScreenShots/img20.png "Administración de Lotes2"
[BatchesValidate]: media/ScreenShots/img21.png "Lote listo para validar"
[BatchesValidate2]: media/ScreenShots/img22.png "Validación de lote"
[BatchesValidate3]: media/ScreenShots/img23.png "Confirmación de finalización de la validación"
[BatchesFinished]: media/ScreenShots/img24.png "Lote finalizado"
[UserManagement]: media/ScreenShots/img25.png "Administration de Usuarios"
[UserNew]: media/ScreenShots/img26.png "Creación de nuevo usuario"

<!-- Gif -->
[BatchProcess]: media/ScreenShots/processBatch.gif "Progreso de lote"

<!-- SVG -->
[sqr1]: media/others/sqr1.svg
[sqr2]: media/others/sqr2.svg

<!-- TOC -->
[toc]: #tabla-de-contenido
