---
layout: default
title: {{ site.name }}
---
<!-- markdownlint-disable headings -->
<!-- markdownlint-disable no-inline-html -->

<div class="toc" markdown="1">

# Tabla de Contenido

- [Vistas](#vistas)
  - [Conciliar tipologias](#conciliar-tipologias)
  - [Conciliar librodiario](#conciliar-librodiario)
- [TransmisionOCR - ActualizacionDatos](#transmisionocr---actualizaciondatos)
  - [Datos Single](#datos-single)
  - [Datos Captura](#datos-captura)
  - [Nietos](#nietos)
  - [WS Response N1](#ws-response-n1)
    - [TipoErrorWS N1](#tipoerrorws-n1)
- [Novedades](#novedades)
  - [Tipo De Novedad](#tipo-de-novedad)
  - [Dato Conciliar](#dato-conciliar)
  - [WS Response N2](#tipoerrorws-n2)
    - [TipoErrorWS N2](#tipoerrorws-n2)
- [Authentication](#authentication)
  - [WS Response Token](#wsresponse-token)
- [Entrega De Imagenes a IKDATA](#entrega-de-imagenes-a-ikdata)
  - [WS Response N3](#ws-response-n3)
- [Cambiar la Tipologia](#cambiar-la-tipologia)
  - [WS Response N4](#ws-response-n4)
  - [TipoErrorWS N3](#tipoerrorws-n3)
- [Reversar Estado de publicación](#reversar-estado-de-publicación)
  - [WS Response N5](#ws-response-n5)
  - [TipoErrorWS N4](#tipoerrorws-n4)

</div>

# Vistas
## conciliar tipologias

Esta vista permite realizar la consulta del Log de cargue para las tipologías documentales diferentes a Libro Diario. Esta vista será construida por MTI.

## Campos

| Campo                  | Tipo          | Descripción                                                                                                      |
|------------------------|---------------|------------------------------------------------------------------------------------------------------------------|
| fechaemision           |               | Corresponde a la fecha de emisión asociada en el Log de cargue (campo 7).                                          |
| cuadrecaja             | String (100)  | Corresponde al cuadre de caja asociado en el Log de cargue (campo 16).                                             |
| idsolicituddocumento   |               | Corresponde al idsolicituddocumento asociado al registro.                                                           |
| tipologia              | String (100)  | Corresponde a la tipología documental asociada al registro (campo 21).                                              |
| iddocumento            | Int           | Corresponde a la clase documental asociada al registro.                                                             |
| faltante               |               | Campo que indica si el documento fue confirmado como un faltante.                                                   |
| conciliar              | String (100)  | Corresponde al valor del campo llave, el cual debe ser conciliado.                                                  |
| split_part             | String (100)  | Nombre de la imagen que corresponde al código "M" padre de la tipología documental con la extensión .TIF.         |
| spt                    | String (100)  | Corresponde al SPT asociado en el Log de cargue.                                                                   |
| usuario                | Int           | Corresponde a la cédula del cajero asociada en el Log de cargue (campo 15).                                        |
| idbolsa                | Int           | Corresponde al idbolsa asociado al registro.                                                                      |
| cedula_del_titular     | Int           | Corresponde a la cédula del titular asociada en el Log de cargue (campo 3).                                         |
| subcategoria           | String (100)  | Corresponde a la subcategoría asociada en el Log de cargue (campo 15).                                             |
| rango                  | Int           | Corresponde a la clasificación del registro, teniendo en cuenta el valor del comprobante (campo 11) asociado en el Log de cargue. Los rangos posibles son:<br/> - 0: Entre $0 y $99999<br/> - 1: Entre $100.000 y $500.000<br/> - 2: Mayores a $500.000 |

# conciliar librodiario

Esta vista permite realizar la consulta del Log de cargue para la tipología documental Libro Diario. Esta vista será construida por MTI.

## Campos

| Campo                  | Tipo          | Descripción                                                                                                      |
|------------------------|---------------|------------------------------------------------------------------------------------------------------------------|
| fechaemision           |               | Corresponde a la fecha de emisión asociada en el Log de cargue (campo 7).                                          |
| cuadrecaja             | String (100)  | Corresponde al cuadre de caja asociado en el Log de cargue (campo 16).                                             |
| idsolicituddocumento   |               | Corresponde al idsolicituddocumento asociado al registro.                                                           |
| tipologia              | String (100)  | Corresponde a la tipología documental asociada al registro (campo 21).                                              |
| iddocumento            | Int           | Corresponde a la clase documental asociada al registro.                                                             |
| faltante               |               | Campo que indica si el documento fue confirmado como un faltante.                                                   |
| conciliar              | String (100)  | Corresponde al valor del campo llave, el cual debe ser conciliado.                                                  |
| split_part             | String (100)  | Nombre de la imagen que corresponde al código "M" padre de la tipología documental con la extensión .TIF.         |
| spt                    | String (100)  | Corresponde al SPT asociado en el Log de cargue.                                                                   |
| cedula_del_titular     | Int           | Corresponde a la cédula del titular asociada en el Log de cargue (campo 3).                                         |
| usuario                | Int           | Corresponde a la cédula del cajero asociada en el Log de cargue (campo 15).                                        |
| idbolsa                | Int           | Corresponde al idbolsa asociado al registro.                                                                      |
| subcategoria           | String (100)  | Corresponde a la subcategoría asociada en el Log de cargue (campo 15).                                             |
| rango                  | Int           | Corresponde a la clasificación del registro, teniendo en cuenta el valor del comprobante (campo 11) asociado en el Log de cargue. Los rangos posibles son:<br/> - 0: Entre $0 y $99999<br/> - 1: Entre $100.000 y $500.000<br/> - 2: Mayores a $500.000 |

# TransmisionOCR - ActualizacionDatos

Servicio de captura que permite transmitir las imágenes y la data finalizado el proceso de Synergetics. Este servicio será construido por MTI.

| #   | key                | Descripción                                        | E\S | Definición         | Obligatorio | Observaciones                                                  |
| --- | ------------------ | -------------------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------------- |
| 1   | Token              | Token de autenticación                             | E   | String (4000)      | SI          | Token enviado en el servicio de autenticación.                 |
| 2   | Codigompadre       | Código M del padre                                 | E   | String (50)       | SI          | Código "M" de la tipología documental padre.                   |
| 3   | Codigomhijo        | Código M del hijo                                  | E   | String(50)        | SI          | Estructura: M + idDoc(3) + idSolDocPadre(10) + Consecutivo(7). El nombre del archivo multi TIFF tiene un total de 21 caracteres obligatoriamente; si no se cumple con las cantidades especificadas en cada una de las partes de la estructura, se debe rellenar con 0 a la izquierda del valor para cumplir la cantidad de caracteres. El nombre de la imagen no debe ir con extensión. Los valores idDoc y IdSolDocPadre se obtendrán por medio de una vista. El consecutivo será dado por Synergetcis como un valor que aumenta por archivo multi TIFF reconocido, según la tipología documental. Para la tipología documental Libro Diario (Subcategoria: PREMIOS MAYORES CHANCE), el hijo respectivo será el comprobante, y para la tipología documental Premios Menores SIACH, el hijo será el vaucher.
| 4   | Tipologia          | Indica el nombre de la tipologia asociada al multi TIFF enviado | E   | String (50)      | SI          | Si la tipología corresponde a la "TAPA RESULTADO", el sistema no debe validar el parámetro "DatosCaptura"; si es otra tipología diferente a "TAPA RESULTADO", se debe indicar el nombre correspondiente a la tipología.
| 5   | Usuario            | Usuario encargado de realizar la validación del código M padre | E   | String (50)      | SI          | Nombre del usuario encargado del proceso de Validación.
| 6   | Usuariovalidador   | Usuario supervisor encargado de confirmar transmisión a MTI | E   | String (50)      | SI          | Nombre del usuario supervisor encargado de confirmar transmisión de la data y las imágenes al back de MTI.
| 7   | DatosSingle        | Lista de nombre de las imágenes Single TIFF que conforman el archivo multi TIFF | E   | Lista         | SI          | [Datos Single](#datos-single)
| 8   | DatosCaptura       | Arreglo con nombre y valor del campo capturado      | E   | Array []         | NO          | [Datos Captura](#datos-captura)
| 9   | rutaimagen         | Ruta de la imagen                                  | E   | String (200)     | SI          | Ruta donde se colocó el archivo multi TIFF resultante del proceso OCR. Esta ruta debe ir completa, finalizando con el nombre del archivo multi TIFF enviado y la extensión de este en mayúscula.
| 10  | estado             | Estado del multi TIFF                              | E   | String (2)       | SI          | Estados posibles: "OK" para registros conciliados, "SO" para sobrantes.
| 11  | finalizado         | Indica la transmisión del último multi TIFF enviado asociado al código M padre | E | Int(2)           | SI          | Estados posibles: "59" para la transmisión de último registro y "00" para los demás registros.
| 12  | idcliente          | Parámetro que permite identificar si el campo Id cliente capturado en la tipología documental “Premios Menores SIACH” y la tipología documental Libro Diario (Subcategoría: Premios Mayores Chance) cruza con el valor capturado en la bandeja de validación de Synergetics. | E | Boolean | NO | Si la tipología documental es "Premios Menores SIACH" o Libro Diario (Subcategoría: Premios Mayores Chance), este campo debe ser obligatorio; por el contrario, si la tipología documental es diferente a las tipologías indicadas, este parámetro deberá ir vacío. Estados posibles: - "TRUE" para aquellos registros en los cuales el valor id cliente capturado sí cruzó con el valor registrado en el Log de Cargue. - "FALSE" para aquellos registros en los cuales el valor id cliente capturado no cruzó con el valor registrado en el Log de Cargue. Igualmente, si el registro es Sobrante, este se debe transmitir con el estado "FALSE".
| 13  | nietos           | Arreglo con nombre y ruta de los documentos adicionales, según la clasificación realizada para las tipologías documentales Premios Menores SIACH y Libro Diario (Subcategoría: Premios Mayores Chance) | E | Array [] | NO | Si la tipología documental es "Premios Menores SIACH" o Libro Diario (Subcategoría: Premios Mayores Chance), este campo debe ser obligatorio; por el contrario, si la tipología documental es diferente a las tipologías indicadas, este parámetro deberá ir vacío. Ver definición: Nietos.

## Respuesta

| #   | key                | Descripción                                        | E\S | Definición         | Obligatorio | Observaciones                                                  |
| --- | ------------------ | -------------------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------------- |
| 14  | wsResponse         | Devuelve el resultado de la ejecución del servicio | S   | WSResponse        | SI          | [WS Response N1](#ws-response-n1)

# Datos Single

Representa una lista de las imágenes que conforman el archivo multi TIFF

| #   | NombreSingle        | Descripción                                        | E\S | Definición         | Obligatorio | Observaciones                                                  |
| --- | ------------------- | -------------------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------------- |
| 1   | NombreSingle        | Indica el Nombre de la imagen single TIFF          | E   | String (50)       | SI          | El nombre de las imágenes single TIFF corresponde al código "M" de la tipología documental seguido del consecutivo que genera el scanner al momento de la digitalización. El nombre de las imágenes single TIFF no debe ir con extensión. |

# Datos Captura

Representa los valores capturados de la imagen Multi TIFF


| #   | key                 | Descripción                                        | E\S | Definición         | Obligatorio | Observaciones                                                  |
| --- | ------------------- | -------------------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------------- |
| 1   | key                 | Indica el nombre del campo capturado               | E   | String (255)      | SI          | Este valor corresponde al nombre del campo llave capturado, en este caso, para todas las tipologías documentales el nombre del campo debe ser "conciliar". |
| 2   | value               | Descripción del campo capturado                    | E   | String (100)      | SI          | Este campo corresponde al valor del campo llave capturado, es decir, el valor reconocido mediante el proceso de OCR. Este valor será validado según las reglas actuales y las expresiones regulares implementadas. |
| 3   | idcampo             | Indica el id del campo capturado                    | E   | String (100)      | NO          | Esta valor corresponde al id del campo adicional capturado, según la tipología documental transmitida. De igual forma, de acuerdo con la tipología documental existirán uno o más campos adicionales que deben ser transmitidos. Para lo anterior, el proveedor debe tener en cuenta la parametría de los campos que deben ser transmitidos por la tipología de acuerdo con el archivo proporcionado por MTI, no obstante, para la tipología documental Libro Diario (subcategoría: Premios Mayores Chance), el sistema debe permitir el envío del campo de captura para la identificación del cliente (idcliente). |
| 4   | value               | Valor capturado                                    | E   | String (100)      | NO          | Este campo corresponde al valor del campo adicional capturado, es decir, el valor reconocido mediante el proceso de OCR. Este valor será validado según las reglas actuales y las expresiones regulares implementadas. |

# Nietos

Arreglo con nombre y ruta de los documentos adicionales, según la clasificación realizada para las tipologías documentales Premios Menores SIACH y Libro Diario (Subcategoría: Premios Mayores Chance)

| #   | nombre              | Descripción                                        | E\S | Definición         | Obligatorio | Observaciones                                                  |
| --- | ------------------- | -------------------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------------- |
| 1   | nombre              | Indica el nombre del documento                     | E   | String (255)      | SI          | Este valor corresponde al nombre del documento clasificado. Estados posibles: - CodigoMhijo_cedula - CodigoMhijo_formato - CodigoMhijo_vaucher (este nieto aplica únicamente aplica para la tipología Libro Diario: Subcategoría Premios Mayores Chance) |
| 2   | estadonieto         | Estado del nieto enviado                           | E   | String (2)        | SI          | Parámetro que permite identificar si el documento enviado se encuentra OK o si se registra como faltante documental. Estados posibles: "OK" para registros conciliados, "FA" para faltantes documentales reales. |
| 3   | rutanieto           | Ruta de la imagen                                  | E   | String (200)      | NO          | Ruta donde se colocó el archivo multi TIFF resultante del proceso OCR y la clasificación realizada en las tipologías documentales Premios Menores SIACH y Libro Diario (Subcategoría Premios Mayores Chance). Esta ruta debe ir completa, finalizando con el nombre del archivo multi TIFF enviado y la extensión de éste en mayúscula. En caso de que el estado nieto sea "FA", este campo debe ir vacío. |

# WS Response N1

Representa el mensaje de retorno de los servicios.

| #   | Nombre  | Descripción                                      | E\S | Definición    | Obligatorio | Observaciones                                            |
| --- | ------- | ------------------------------------------------ | --- | ------------- | ----------- | -------------------------------------------------------- |
| 1   | codRet  | Indica el código de retorno que arrojó el servicio | S   | String (2)    | SI          | Los valores posibles son 00 en caso de ejecución exitosa. O 99 en caso de ocurrencia de algún error. |
| 2   | msg     | Descripción significativa del error que haya ocurrido | S   | String (4000) | SI          | En caso de codRet = 00 será vacío. En caso de codRet = 99 aquí se enviará una descripción del error ocurrido. [TipoErrorWS N1](#tipoerrorws-n1) |

# TipoErrorWS N1

Representa la lista de mensajes de error que pueden ocurrir en el WS Actualización de Datos.

| TipoError | Descripción Error                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------- |
| 77        | Error: el código Multi TIFF ya existe                                                                |
| 88        | Esta bolsa se encuentra finalizada con comprobantes conciliados                                      |
| 99        | Código M de la bolsa está en un estado incorrecto                                                   |
| 99        | Error en el formato de la ruta de la ruta                                                           |
| 99        | Evento no insertado en la base de datos                                                             |
| 99        | El campo " + dr["idcampo"] + " debería existir en el JSON                                            |
| 99        | No existen campos para esta tipología en la base de datos                                            |
| 99        | La tipología se encuentra mal radicada                                                               |
| 99        | Estado no puede ser nulo                                                                            |
| 99        | Estado no puede ser diferente a OK, SO o TR                                                          |
| 99        | La banderilla para finalizar transmisión no puede ser nula                                           |
| 99        | Código padre no puede ser nulo                                                                       |
| 99        | Código Hijo no puede ser nulo                                                                        |
| 99        | Código del Multi TIFF debe tener 21 dígitos                                                          |
| 99        | La ruta no puede ser nula                                                                            |
| 99        | La ruta debe ser mayor a 15 caracteres                                                               |
| 99        | El usuario no puede ser nulo                                                                         |
| 99        | Debe tener datos a capturar                                                                         |
| 99        | Debe tener datos de conciliar                                                                       |
| 99        | Debe existir al menos un campo a conciliar                                                          |
| 99        | No tiene tipo conciliar                                                                             |
| 99        | Los valores de los campos no pueden ser nulos                                                        |
| 99        | Debe tener singles                                                                                 |
| 99        | Error: Token nulo                                                                                 |
| 99        | Error en la conversión del token                                                                    |
| 99        | Error de autenticación                                                                             |
| 99        | No se puede encontrar este registro en el cargue: CJ [CJ] Fecha Emisión [fechaemision] Código de conciliación [codigo conciliar]; |
| 99        | Error al visualizar la ruta                                                                         |
| 99        | No se puede insertar solicitud documento de la tapa                                                |
| 99        | No se puede insertar los registros ya que el padre es incorrecto                                    |
| 99        | No se encuentra en el sftp la imagen                                                                |
| 99        | Exception: [Mensaje Excepción]                                                                     |
| 99        | No tiene usuario validador                                                                         |
| 99        | No se puede modificar el cargue para el código con id: [idsolicituddocumento], fecha emisión: [fechaemision], Código: [codigoconciliar], CJ: [CJ], estado: [Estado] |
| 99        | Exception - cambiarEstadoPadre :                                                                   |
| 99        | Exception - modificarSolicitud l:288 :                                                            |
| 99        | Exception - modificarCargue l:247 :                                                               |
| 99        | Exception - cambiarEstadoPadre Sobrante:                                                           |
| 99        | Error al insertar la ruta                                                                           |
| 99        | Exception - GuardarPublicacionImagen :                                                             |
| 99        | Exception - getpublicacionimagenes :                                                               |
| 99        | Subcategoría errónea                                                                               |
| 99        | Exception - GetIddocumento :                                                                       |
| 99        | No se puede insertar solcaptura                                                                    |
| 99        | Exception - InsertarSolCaptura l:235 :                                                             |
| 99        | No se puede insertar solicitud documento                                                           |
| 99        | Exception - InsertarSolCaptura l:235 :                                                             |
| 99        | No se puede insertar faltante                                                                      |
| 99        | Ya se encuentran comprobantes conciliados                                                          |
| 99        | Exception - modificarCargueFaltante l:388 :                                                        |
| 99        | No se pueden insertar los registros                                                                |
| 99        | Exception - getDataPadreSolicitud:                                                                 |
| 99        | No se encuentra en el sftp la imagen                                                               |

# Novedades

Servicio que permite gestionar las novedades generadas en el proceso de validación. Este servicio será construido por MTI.

| #   | Nombre              | Descripción                                        | E\S | Definición         | Obligatorio | Observaciones                                                  |
| --- | ------------------- | -------------------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------------- |
| 1   | Token               | Token de autenticación                             | E   | String (4000)      | SI          | Token enviado en el servicio de autenticación.                 |
| 2   | Codigompadre        | Código M del padre                                 | E   | String (50)       | SI          | Código "M" de la tipología documental padre.                   |
| 3   | TipoNovedad         | Código de la novedad                               | E   | Int               | SI          | [Tipo De Novedad](#tipo-de-novedad).                                   |
| 4   | DatoConciliar [CodigoConciliacion] | Lista de las llaves marcadas como faltantes reales o lista de llaves marcadas como pendientes por digitalizar, asociadas al código M del padre | E | Lista | NO | [Dato Conciliar](#dato-conciliar).                                  |
| 5   | Usuario             | Usuario encargado de realizar la validación del código M del padre | E   | String (50)      | SI          | Nombre del usuario encargado del proceso de Validación.        |
| 6   | UsuarioValidador    | Usuario supervisor encargado de confirmar la transmisión a MTI | E   | String (50)      | SI          | Nombre del usuario supervisor encargado de confirmar transmisión de la data y las imágenes al back de MTI.|

## Respuesta

| #   | Nombre        | Descripción                                        | E\S | Definición         | Obligatorio | Observaciones                                                  |
| --- | ------------- | -------------------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------------- |
| 7   | wsResponse     | Devuelve el resultado de la ejecución del servicio | S   | WSResponse        | SI          | [WS Response N2](#tipoerrorws-n2)                                    |

# Tipo De Novedad

Representa la lista de novedades que se pueden presentar durante el proceso desarrollado por Synergetics.

| TipoNovedad | Descripción Novedad          |
|-------------|-----------------------------|
| 1           | Faltantes Reales            |
| 2           | Pendientes por digitalizar  |

# Dato Conciliar

Representa una lista de las llaves que conforman la novedad del códigoM padre.

| #                  | Nombre               | Descripción                                                                                                   | E\S   | Definición       | Obligatorio | Observaciones                                                                   |
|---------------------|----------------------|---------------------------------------------------------------------------------------------------------------|-------|------------------|-------------|----------------------------------------------------------------------------------|
| 1                   | CodigoConciliacion   | Indica el código de la llave que se ha determinado como FALTANTE REAL o como PENDIENTE POR DIGITALIZAR      | E     | String(50)       | SI          | Hace referencia a los códigos de las llaves que se han marcado como Faltantes Reales por parte de la operación. |


# WS Response N2

Representa el mensaje de retorno de los servicios.

| #   | Nombre | Descripción                                           | E\S | Definición       | Obligatorio | Observaciones                                                                  |
|-----|--------|-------------------------------------------------------|-----|------------------|-------------|---------------------------------------------------------------------------------|
| 1   | codRet | Indica el código de retorno que arrojó el servicio    | S   | String (2)       | SI          | Los valores posibles son 00 en caso de ejecución exitosa. O 99 en caso de ocurrencia de algún error. |
| 2   | msg    | Descripción significativa del error que haya ocurrido | S   | String (4000)    | SI          | En caso de codRet = 00 será vacío. En caso de codRet = 99 aquí se enviará una descripción del error ocurrido. [TipoErrorWS N2](#tipoerrorws-n2) |

# TipoErrorWS N2

Representa la lista de mensajes de error que se pueden presentar en caso de ocurrencia de algún error en el WS Novedades.

| TipoError | Descripción Error                                     |
|-----------|--------------------------------------------------------|
| 88        | Esta bolsa se encuentra finalizada con comprobantes conciliados |
| 99        | Codigo M de la bolsa esta en un estado incorrecto    |
| 99        | Codigo padre no puede ser nulo                        |
| 99        | El usuario no puede ser nulo                          |
| 99        | El usuario validador no puede ser nulo                |
| 99        | Error Token nulo                                      |
| 99        | Error de autenticacion                                |
| 99        | Error en la conversion del token                      |
| 99        | No se puede insertar faltante                         |
| 99        | Codigo M de la bolsa no existe                        |

# Authentication

Servicio encargado de realizar la autenticación por Token. El Usuario y Contraseña son provistos por Thomas MTI. Este servicio será construido por MTI.

| #   | Nombre       | Descripción                            | E\S | Definición         | Obligatorio | Observaciones                                            |
| --- | ------------ | -------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------- |
| 1   | User         | Nombre de Usuario                      | E   | String (50)        | SI          | Nombre de usuario previsto para la autenticación         |
| 2   | Password     | Contraseña                             | E   | String (200)       | SI          | Contraseña prevista para la autenticación                 |
| 3   | Aplicación    | Indica la aplicación del manager       | E   | String (50)        | SI          | Inicia el nombre de la aplicación donde se debe Loguear  |
| 4   | Version       | Indica la versión de la aplicación      | E   | Int                | SI          | Indica la versión de la aplicación                       |

## Respuesta

| #   | Nombre       | Descripción                            | E\S | Definición         | Obligatorio | Observaciones                                            |
| --- | ------------ | -------------------------------------- | --- | ------------------ | ----------- | -------------------------------------------------------- |
| 5   | wsResponse   | Devuelve el resultado de la ejecución del servicio | S   | WSResponse         | SI          | [WSResponse Token](#wsresponse-token)                          |

# WSResponse Token

Representa el mensaje de retorno del servicio de Authentication.

| #   | Nombre   | Descripción                                        | E\S | Definición    | Obligatorio | Observaciones                                            |
| --- | -------- | -------------------------------------------------- | --- | ------------- | ----------- | -------------------------------------------------------- |
| 1   | codRet   | Indica el código de retorno que arrojó el servicio | S   | String (2)    | SI          | Los valores posibles son 00 en caso de ejecución exitosa. O 99 en caso de ocurrencia de algún error. |
| 2   | msg      | Descripción significativa del error que haya ocurrido | S   | String (4000) | SI          | En caso de codRet = 99 aquí se enviará una descripción del error ocurrido. En caso de codRet = 00 será vacío. |
| 3   | Token    | Token de autenticación                            | S   | String (4000) | SI          | Token enviado en el servicio de autenticación, en caso de ejecución exitosa. |

# Entrega De Imagenes a IKDATA

Servicio de confirmación para indicar la finalización del copiado de las imágenes single TIFF en el SFTP de Synergetics con autenticación básica por header.

| #   | Nombre    | Descripción                                        | E\S | Definición    | Obligatorio | Observaciones                                            |
| --- | --------- | -------------------------------------------------- | --- | ------------- | ----------- | -------------------------------------------------------- |
| 1   | mpadre     | Codigo M del padre                                 | E   | String (50)   | SI          | Código "M" de la tipología documental padre.              |
| 2   | pags       | Cantidad de Single TIFF enviados                   | E   | Int           | SI          | Cantidad de imágenes single TIFF copiadas en el SFTP de Synergetics. |
| 3   | destpath   | Ruta de la imagen                                  | E   | String (100)  | SI          | Ruta donde se debe colocar los archivos multi TIFF terminado el proceso OCR. |
| 4   | count      | Indica la cantidad de archivos multi TIFF transmitidos al MTI | E | Int       | SI          | Si no se ha realizado ninguna transmisión el valor será “0”. Únicamente se genera un valor mayor, si la tipología documental generó una novedad y fue necesario retransmitir imágenes faltantes, que se encontraban pendientes por digitalizar. Este valor será necesario para generar el nombre del archivo multi TIFF, sin que se genere ningún inconveniente en BD, con el manejo de las novedades. |
| 5   | tipologia  | Indica el id de la tipologia enviada al proveedor   | E   | Int           | SI          | Este campo corresponde al id de la tipología documental. |

## Respuesta

| #   | Nombre     | Descripción                                        | E\S | Definición    | Obligatorio | Observaciones                                            |
| --- | ---------- | -------------------------------------------------- | --- | ------------- | ----------- | -------------------------------------------------------- |
| 5   | wsResponse | Devuelve el resultado de la ejecución del servicio | S   | WSResponse    | SI          | [WS Response N3](#ws-response-n3)                                |

# WS Response N3

Representa el mensaje de retorno de los servicios.

| #   | Nombre | Descripción                                        | E\S | Definición    | Obligatorio | Observaciones                                          |
| --- | ------ | -------------------------------------------------- | --- | ------------- | ----------- | -------------------------------------------------------- |
| 1   | codRet | Indica el código de retorno que arrojó el servicio | S   | String (2)    | SI          | Los valores posibles son 00 en caso de ejecución exitosa. O 99 en caso de ocurrencia de algún error. |
| 2   | msg    | Descripción significativa del error que haya ocurrido | S | String (4000) | SI          | En caso de codRet = 99 aquí se enviará una descripción del error ocurrido. En caso de codRet = 00 será vacío. |

# Cambiar la Tipologia

Servicio que permitirá gestionar las novedades generadas en el proceso de validación en la bandeja de Synergetics, en caso de que la tipología documental se encuentre mal radicada.

| #   | Nombre            | Descripción                                        | E\S | Definición    | Obligatorio | Observaciones                                          |
| --- | ----------------- | -------------------------------------------------- | --- | ------------- | ----------- | -------------------------------------------------------- |
| 1   | Token             | Token de autenticación                             | E   | String (4000) | SI          | Token enviado en el servicio de autenticación.           |
| 2   | Codigompadre      | Código M del padre                                 | E   | String (50)  | SI          | Código "M" de la tipología documental padre.             |
| 3   | Tipologia         | Indica el nombre de la nueva tipologia documental  | E   | String (50)  | SI          |                                                          |
| 4   | id_Tipologia      | Indica el id de la nueva tipologia documental      | E   | String (50)  | SI          |                                                          |
| 5   | UsuarioSupervisor | Usuario supervisor encargado de confirmar la transmisión a MTI | E | String (50)  | SI          | Nombre del usuario supervisor encargado de confirmar el cambio de tipología documental. |

## Respuesta

| #   | Nombre      | Descripción                                           | E/S | Definición    | Obligatorio | Observaciones                                  |
| --- | ----------- | ----------------------------------------------------- | --- | ------------- | ----------- | ----------------------------------------------- |
| 6   | wsResponse   | Devuelve el resultado de la ejecución del servicio   | S   | WSResponse    | SI          | [WS Response N4](#ws-response-n4)                     |

# WS Response N4

Representa el mensaje de retorno de los servicios.

| #   | Nombre  | Descripción                                            | E/S | Definición    | Obligatorio | Observaciones                                             |
| --- | ------- | ------------------------------------------------------ | --- | ------------- | ----------- | ---------------------------------------------------------- |
| 1   | codRet  | Indica el código de retorno que arrojó el servicio     | S   | String (2)    | SI          | Los valores posibles son 00 en caso de ejecución exitosa. O 99 en caso de ocurrencia de algún error. |
| 2   | msg     | Descripción significativa del error que haya ocurrido | S   | String (4000) | SI          | En caso de codRet = 00 será vacío. En caso de codRet = 99 aquí se enviará una descripción del error ocurrido. [TipoErrorWS N3](#tipoerrorws-n3) |

# TipoErrorWS N3

Representa la lista de mensajes de error que se pueden presentar en caso de ocurrencia de algún error en el WS CambiarTipologia.

| TipoError | Descripción Error                                      |
| --------- | ------------------------------------------------------ |
| 99        | Error Token nulo                                      |
| 99        | Error En la conversion del token                      |
| 99        | Error de autenticacion                                 |
| 99        | Codigo padre no puede ser nulo                        |
| 99        | El campo Tipologia no puede ser nulo                   |
| 99        | El campo id_Tipologia no puede ser nulo               |
| 99        | El usuario no puede ser nulo                          |
| 99        | La tipologia enviada no existe                        |
| 99        | El id_tipología enviado no existe                     |
| 500       | Error interno                                          |
| 55        | El codigo m enviado ya fue modificado anteriormente   |
| 44        | El codigo m ya tiene asignada la tipologia enviada     |


# Reversar Estado de publicación

Servicio que permitirá eliminar las imágenes y el proceso de un código M especifico en las bandejas de Synergetics y a su vez reversar el estado en la base de datos de Gelsa a publicación OCR.

| #   | NOMBRE             | DESCRIPCION                                                  | E/S | DEFINICION      | OBLIGATORIO | OBSERVACIONES                                                 |
| --- | ------------------ | ------------------------------------------------------------ | --- | --------------- | ----------- | ------------------------------------------------------------- |
| 1   | Token              | Token de autenticación                                       | E   | String (4000)   | SI          | Token enviado en el servicio de autenticación                  |
| 2   | Codigompadre        | Codigo M del padre                                           | E   | String (50)    | SI          | Código "M" de la tipología documental padre                   |
| 3   | UsuarioSupervisor   | Usuario supervisor que realiza la eliminación                | E   | String (50)    | SI          | Nombre del usuario supervisor que solicita la eliminación     |
|     |                    |                                                              |     |                |             | de la imagen                                                  |

## Respuesta

| #   | Nombre   | Descripción                                 | E/S | Definición  | Obligatorio | Observaciones                                         |
| --- | -------- | ------------------------------------------- | --- | ----------- | ----------- | ------------------------------------------------------ |
| 4   | wsResponse          | Devuelve el resultado de la ejecución del servicio           | S   | WSResponse     | SI          | [WS Response N5](#ws-response-n5)                                   |

# WS Response N5

| #   | Nombre  | Descripción                                            | E/S | Definición    | Obligatorio | Observaciones                                             |
| --- | ------- | ------------------------------------------------------ | --- | ------------- | ----------- | ---------------------------------------------------------- |
| 1   | codRet  | Indica el código de retorno que arrojó el servicio     | S   | String (2)    | SI          | Los valores posibles son 00 en caso de ejecución exitosa. O 99 en caso de ocurrencia de algún error. |
| 2   | msg     | Descripción significativa del error que haya ocurrido | S   | String (4000) | SI          | En caso de codRet = 00 será vacío. En caso de codRet = 99 aquí se enviará una descripción del error ocurrido. [TipoErrorWS N4](#tipoerrorws-n4) |

# TipoErrorWS N4

Representa la lista de mensajes de Error que se pueden presentar en caso de ocurrencia de algún error en el WS ReversarEstadopublicacion.

## Errores

| TipoError | Descripción Error                                 |
| --------- | -------------------------------------------------- |
| 99        | Error Token nulo                                  |
| 99        | Error En la conversion del token                  |
| 99        | Error de autenticacion                            |
| 99        | Codigo padre no puede ser nulo                    |
| 99        | El usuario no puede ser nulo                      |
| 99        | El código M no se encuentra en estado espera OCR |
| 500       | Error interno en el servidor                      |
