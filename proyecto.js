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
// Función 1: Calcular el promedio de un arreglo de notas
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
// Función 2: Registrar nuevo alumno
//==========================================================================================

function agregarAlumno() {
  let nombre = prompt("Ingrese el nombre completo del alumno:");

  // Validación básica: Si cancela o deja el nombre vacío, salimos de la función
  if (!nombre || nombre.trim() === "") {
    alert("Registro cancelado. El nombre no puede estar vacío.");
    return;
  }

  // Pedimos las 3 notas de forma individual
  let nota1 = Number(prompt("Ingrese la nota 1 (0-100) para " + nombre + ":"));
  let nota2 = Number(prompt("Ingrese la nota 2 (0-100) para " + nombre + ":"));
  let nota3 = Number(prompt("Ingrese la nota 3 (0-100) para " + nombre + ":"));

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
      // Vamos a probar la función con el primer alumno de la lista (Ana Gómez, posición 0)
      let alumnoPrueba = listaAlumnos[0];

      // Llamamos a la función pasando sus notas como argumento
      let resultadoPromedio = calcularPromedio(alumnoPrueba.notas);

      // Mostramos el resultado
      alert(
        "El promedio de " + alumnoPrueba.nombre + " es: " + resultadoPromedio,
      );
      console.log(
        "Promedio de " + alumnoPrueba.nombre + ": " + resultadoPromedio,
      );
      break;

    case "3":
      console.log(
        "-> Has seleccionado: Mostrar reporte. (Aquí irá la función del Paso 3)",
      );
      alert("Opción 3 seleccionada (Ver consola)");
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
