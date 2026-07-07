// Lista de alumnos de ejemplo //

const listaAlumnos = [
  // {
  //   nombre: "Ana Gómez",
  //   notas: [67, 55, 42], // Un arreglo de números dentro del objeto
  // },
  // {
  //   nombre: "Carlos Pérez",
  //   notas: [60, 62, 58],
  // },
];

console.log("Prueba de lista de alumnos");
console.log(listaAlumnos);

// ==========================================
// FUNCIONES DE OPERACIONES
// ==========================================

//==========================================================================================
// Función 1: Registrar nuevo alumno
//==========================================================================================

function agregarAlumno() {
  let nombre = prompt("Ingrese el nombre completo del alumno:");

  // Validación básica: Si cancela o deja el nombre vacío, salimos de la función
  if (!nombre || nombre.trim() === "") {
    alert("Registro cancelado. El nombre no puede estar vacío.");
    return;
  }

  // --- VALIDACIÓN NOTA 1 ---
  while (true) {
    nota1 = Number(
      prompt("Ingrese la nota 1 (Rango 10 - 70) para " + nombre + ":"),
    );

    // Verificamos si es un número válido Y si está dentro del rango
    if (!isNaN(nota1) && nota1 >= 10 && nota1 <= 70) {
      break; // ¡Nota perfecta! Rompemos el bucle 'while' y pasamos a la siguiente nota
    }
    // Si no cumple, el bucle no se rompe y muestra la alerta antes de repetirse
    alert(
      "Error: La nota 1 debe ser un número entre 10 y 70. Intente nuevamente.",
    );
  }

  // --- VALIDACIÓN NOTA 2 ---
  while (true) {
    nota2 = Number(
      prompt("Ingrese la nota 2 (Rango 10 - 70) para " + nombre + ":"),
    );
    if (!isNaN(nota2) && nota2 >= 10 && nota2 <= 70) {
      break;
    }
    alert(
      "Error: La nota 2 debe ser un número entre 10 y 70. Intente nuevamente.",
    );
  }

  // --- VALIDACIÓN NOTA 3 ---
  while (true) {
    nota3 = Number(
      prompt("Ingrese la nota 3 (Rango 10 - 70) para " + nombre + ":"),
    );
    if (!isNaN(nota3) && nota3 >= 10 && nota3 <= 70) {
      break;
    }
    alert(
      "Error: La nota 3 debe ser un número entre 10 y 70. Intente nuevamente.",
    );
  }
  // Creamos el nuevo OBJETO alumno con los datos capturados
  let nuevoAlumno = {
    nombre: nombre.trim(),
    notas: [nota1, nota2, nota3], // Dejamos las notas dentro de un arreglo.
  };

  listaAlumnos.push(nuevoAlumno); // Guardamos en el arreglo global de alumnos.

  alert("¡" + nombre + " ha sido registrado con éxito!"); // Alerta de exito.
  console.log("Nuevo alumno agregado a la lista:", nuevoAlumno);
}

//==========================================================================================
// Función 2: Calcular el promedio de un arreglo de notas
//==========================================================================================

function calcularPromedio(arregloNotas) {
  // Validación: En caso de que el alumno aun no tenga notas, el promedio es 0
  if (arregloNotas.length === 0) {
    return 0;
  }

  let suma = 0;

  // Bucle 'for' para recorrer el arreglo y acumular las notas
  for (let i = 0; i < arregloNotas.length; i++) {
    suma += arregloNotas[i]; // Sumamos cada nota a nuestro acumulador
  }

  // Calcular el promedio dividiendo la suma total entre el número de notas
  let promedio = suma / arregloNotas.length;

  // Retornar el promedio redondeado a un decimal para que se vea limpio
  return promedio.toFixed(1);
}

//==========================================================================================
// Función 3: Mostrar un reporte general en consola
//==========================================================================================

function mostrarReporteGeneral() {
  console.clear(); // Limpiamos la consola para que el reporte se vea ordenado
  console.log("=== REPORTE GENERAL DE ALUMNOS ===");

  // Validamos si hay alumnos en la lista (En caso de que el usuario ejecute sin haber registrado alumnos)
  if (listaAlumnos.length === 0) {
    console.log("No hay alumnos registrados en el sistema.");
    alert("No hay alumnos para mostrar.");
    return;
  }

  // Usamos un bucle para recorrer cada alumno del arreglo
  for (let i = 0; i < listaAlumnos.length; i++) {
    let alumno = listaAlumnos[i];

    // REUTILIZACIÓN: Llamamos a la Función 2 para obtener su promedio
    let promedio = calcularPromedio(alumno.notas);

    // Condiciones para APROBADO o REPROBADO
    let estado = "";
    if (promedio >= 40) {
      estado = "APROBADO  (Promedio: " + promedio + ")";
    } else {
      estado = "REPROBADO (Promedio: " + promedio + ")";
    }

    // Imprimimos el resultado individual en la consola
    console.log("Alumno: " + alumno.nombre + " -> Estado: " + estado);
  }

  console.log("==================================");
  alert("Reporte generado con éxito. Por favor, revisa la consola (F12).");
}

//======================================================================================
//Ejecución del codigo
//======================================================================================

// Bucle Principal y Menú Interactivo

let opcion = ""; // Variable para almacenar la decisión del usuario

// El bucle 'while' se ejecutará MIENTRAS la opción no sea "4" (Salir)
while (opcion !== "4") {
  // Mostramos el menú y capturamos la entrada del usuario
  opcion = prompt(
    "--- PLATAFORMA DE APRENDIZAJE INTERACTIVA ---\n" +
      "1. Registrar nuevo alumno\n" +
      "2. Calcular promedio de un alumno\n" +
      "3. Mostrar reporte general de aprobados\n" +
      "4. Salir de la aplicación\n\n" +
      "Por favor, ingrese el número de su opción:",
  );

  // Evaluamos la opción ingresada usando 'switch'
  switch (opcion) {
    case "1":
      agregarAlumno();
      break;

    case "2": // Calcular promedio de un alumno.
      // console.log("-> Has seleccionado: Calcular promedio.");
      // alert("Opción 2 seleccionada (Ver consola)");
      // 1. Usamos una variable NUEVA y exclusiva para la búsqueda
      let nombreBuscar = prompt(
        "¿De qué alumno deseas calcular el promedio? (Ingresa nombre y apellido):",
      );

      // Validamos que no haya cancelado
      if (!nombreBuscar || nombreBuscar.trim() === "") {
        alert("Búsqueda cancelada.");
        break;
      }

      let alumnoEncontrado = null;
      // Almacenamos el texto limpio de espacios y en minúsculas
      let nombreLimpioBuscar = nombreBuscar.trim().toLowerCase();

      // 2. Recorremos el arreglo
      for (let i = 0; i < listaAlumnos.length; i++) {
        // Limpiamos también el nombre de la base de datos por si acaso
        let nombreBaseDatos = listaAlumnos[i].nombre.trim().toLowerCase();

        if (nombreBaseDatos === nombreLimpioBuscar) {
          alumnoEncontrado = listaAlumnos[i];
          break;
        }
      }

      // 3. Mostramos el resultado
      if (alumnoEncontrado) {
        let prom = calcularPromedio(alumnoEncontrado.notas);
        alert("El promedio de " + alumnoEncontrado.nombre + " es: " + prom);
      } else {
        alert(
          "Alumno no encontrado. Asegúrate de escribir nombre y apellido exactamente igual (ej: Ana Gómez).",
        );
      }
      break;

    case "3":
      alert("Opción 3 seleccionada (Ver consola)");
      mostrarReporteGeneral();
      break;

    case "4":
      alert("Cerrando la aplicación. ¡Gracias por usar la plataforma!");
      break;

    case null:
      // Esto controla si el usuario presiona el botón "Cancelar" en el prompt
      opcion = "4";
      alert("Aplicación cancelada.");
      break;

    default:
      // Si el usuario escribe cualquier otra cosa (ej. "hola" o "5")
      alert("Opción no válida. Por favor, introduce un número del 1 al 4.");
      break;
  }
}

console.log("El programa ha finalizado correctamente.");
