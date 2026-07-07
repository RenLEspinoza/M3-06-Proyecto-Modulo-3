// Lista de alumnos de ejemplo //

const listaAlumnos = [
  //   {
  //     nombre: "Ana Gómez",
  //     notas: [67, 55, 42], // Un arreglo de números dentro del objeto
  //   },
  //   {
  //     nombre: "Carlos Pérez",
  //     notas: [60, 62, 58],
  //   },
  //   {
  //     nombre: "María López",
  //     notas: [45, 59, 65],
  //   },
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

  // Pedimos las 3 notas de forma individual
  let nota1 = Number(prompt("Ingrese la nota 1 (10-70) para " + nombre + ":"));
  let nota2 = Number(prompt("Ingrese la nota 2 (10-70) para " + nombre + ":"));
  let nota3 = Number(prompt("Ingrese la nota 3 (10-70) para " + nombre + ":"));

  // Validación técnica: Comprobamos si alguna nota no es un número válido (isNaN)
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Error: Las notas deben ser números válidos. Registro cancelado.");
    return;
  }

  // Creamos el nuevo OBJETO alumno con los datos capturados
  let nuevoAlumno = {
    nombre: nombre,
    notas: [nota1, nota2, nota3], // Dejamos las notas dentro de un arreglo.
  };

  // Agregamos el nuevo objeto (alumno) al ARREGLO principal del sistema
  listaAlumnos.push(nuevoAlumno);

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

  // Calculamr el promedio dividiendo la suma total entre el número de notas
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
    case "1": // Registrar nuevo alumno.
      //   console.log(
      //     "-> Has seleccionado: Registrar nuevo alumno. (Aquí irá la función del Paso 3)",
      //   );
      //   alert("Opción 1 seleccionada (Ver consola)");
      agregarAlumno();
      break;

    case "2": // Calcular promedio de un alumno.
      console.log("-> Has seleccionado: Calcular promedio.");
      alert("Opción 2 seleccionada (Ver consola)");
      let nombreBuscar = prompt("¿De qué alumno deseas calcular el promedio?");
      let alumnoEncontrado = null;

      // Buscamos al alumno en el arreglo
      for (let i = 0; i < listaAlumnos.length; i++) {
        if (
          listaAlumnos[i].nombre.toLowerCase() === nombreBuscar.toLowerCase()
        ) {
          alumnoEncontrado = listaAlumnos[i];
          break; // Si lo encuentra, rompe el bucle de búsqueda
        }
      }

      // Validamos si lo encontramos o no
      if (alumnoEncontrado) {
        let prom = calcularPromedio(alumnoEncontrado.notas);
        alert("El promedio de " + alumnoEncontrado.nombre + " es: " + prom);
      } else {
        alert("Alumno no encontrado en el sistema.");
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
