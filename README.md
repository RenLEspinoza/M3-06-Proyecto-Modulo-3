# Plataforma de Aprendizaje Interactiva - Control de Notas

Una aplicación interactiva basada en consola web diseñada para gestionar de manera eficiente el registro de alumnos, la edición de calificaciones y el diagnóstico automático del estado académico en establecimientos educativos.

## 📝 Descripción y Qué Hace el Proyecto

El proyecto simula una base de datos en memoria local para automatizar las tareas administrativas de un docente a través de un menú interactivo visualizado mediante ventanas emergentes (`prompt`).

### Características Principales:

- **Manejo Avanzado de Datos:** Almacena la información estructurando colecciones dinámicas (un arreglo global que contiene objetos específicos por cada estudiante).
- **Validación de Rangos Dinámicos:** Utiliza bucles de control rigurosos (`while`) que impiden la inserción de datos corruptos o notas fuera de la escala de calificaciones estándar (10 a 70).
- **Lógica Orientada a Objetos (POO):** Cada registro de alumno cuenta con sus propios métodos internos (`obtenerEstado` y `actualizarNota`) logrando un diseño de código autónomo.
- **Diagnóstico de Rendimiento:** Calcula promedios matemáticos redondeados a un decimal y determina de forma automatizada si el alumno se encuentra en condición de **APROBADO** o **REPROBADO**.

---

## 🔧 Cómo Instalar

Este proyecto está desarrollado utilizando tecnologías web nativas (**HTML5** y **JavaScript Vanilla ES6+**), por lo tanto:

- **No requiere ningún tipo de instalación previa.**
- No depende de servidores web, frameworks externos ni entornos como Node.js.

Para tenerlo listo en tu equipo, solo necesitas asegurarte de guardar los archivos `index.html` y `proyecto.js` dentro de la misma carpeta en tu computadora.

---

## 🕹️ Cómo Usar la Aplicación

Sigue estos sencillos pasos para interactuar con la plataforma:

1. **Ejecución:** Haz doble clic sobre el archivo `index.html` para abrirlo en tu navegador web de preferencia (Google Chrome, Microsoft Edge, Mozilla Firefox, etc.).
2. **Interfaz de Usuario:** Aparecerá de inmediato una ventana emergente en tu pantalla con un menú interactivo del 1 al 5. Escribe el número de la acción que deseas realizar y presiona **Aceptar**:
   - **Opción 1:** Registra un nuevo alumno escribiendo su nombre completo y asignándole de forma sucesiva sus 3 notas reglamentarias.
   - **Opción 2:** Busca a un estudiante por su nombre completo para calcular y desplegar en pantalla su promedio individual actualizado.
   - **Opción 3:** Permite seleccionar un alumno en específico para reescribir y actualizar cualquiera de sus 3 notas ingresando un nuevo valor.
   - **Opción 4:** Genera y procesa un reporte general masivo detallado en la consola con los nombres de todos los estudiantes del curso, sus promedios y sus estados académicos correspondientes.
   - **Opción 5 (o Cancelar):** Detiene de forma segura los bucles internos y finaliza la sesión de la plataforma.
3. **Visualización de Reportes Avanzados:** Para utilizar correctamente las **Opciones 3 y 4**, debes tener abierta la Consola de Desarrollador del navegador. Puedes hacerlo presionando la tecla **F12** (o clic derecho en la pantalla -> _Inspeccionar_ -> pestaña _Consola_) antes de ingresar la opción elegida en el menú.
