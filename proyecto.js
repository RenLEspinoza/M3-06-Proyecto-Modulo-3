// Lista de alumnos de ejemplo //

const listaAlumnos = [];

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
    notas: [nota1, nota2, nota3],

    obtenerEstado: function (promedio) {
      // Metodo de promedio y estado (aprobado / reprobado)
      if (promedio >= 40) {
        return "APROBADO";
      } else {
        return "REPROBADO";
      }

      // Dejamos las notas dentro de un arreglo.
    },
    actualizarNota: function (numNota, nuevaNota) {
      this.notas[numNota - 1] = nuevaNota; // Restamos 1 porque los arreglos parten en 0
    },
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
// Función 3: Actualizar notas de un alumno
//==========================================================================================

function modificarNotasAlumno() {
  let nombreBuscar = prompt("¿A qué alumno deseas modificarle las notas?");
  if (!nombreBuscar) return;

  let alumnoEncontrado = null;
  let nombreLimpio = nombreBuscar.trim().toLowerCase();

  // Buscamos al alumno en la lista
  listaAlumnos.forEach(function (alumno) {
    if (alumno.nombre.toLowerCase() === nombreLimpio) {
      alumnoEncontrado = alumno;
    }
  });

  if (alumnoEncontrado) {
    // Le mostramos sus notas actuales
    alert(
      "Alumno encontrado. Notas actuales: " +
        alumnoEncontrado.notas.join(" - "),
    );

    let cualNota = Number(
      prompt("¿Qué nota deseas modificar? (Escribe 1, 2 o 3):"),
    );
    if (cualNota >= 1 && cualNota <= 3) {
      while (true) {
        let nuevaNota = Number(prompt("Ingrese la nueva nota (10 - 70):"));
        if (!isNaN(nuevaNota) && nuevaNota >= 10 && nuevaNota <= 70) {
          // Ejecutamos el método del objeto para cambiar la nota
          alumnoEncontrado.actualizarNota(cualNota, nuevaNota);

          alert("¡Nota actualizada con éxito!\nNuevo promedio: ");
          break;
        }
        alert("Nota inválida. Debe ser entre 10 y 70.");
      }
    } else {
      alert("Número de nota incorrecto.");
    }
  } else {
    alert("Alumno no encontrado.");
  }
}

//==========================================================================================
// Función 4: Mostrar un reporte general en consola
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

  // Recorremos el arreglo con forEach
  listaAlumnos.forEach(function (alumno) {
    // 1. Usamos la función global para calcular el promedio
    let prom = calcularPromedio(alumno.notas);

    // 2. Uso del metodo dejado previamente dentro de la función agregarAlumno
    let estado = alumno.obtenerEstado(prom);

    // Imprimimos el resultado
    console.log(
      "Alumno: " +
        alumno.nombre +
        " | Promedio: " +
        prom +
        " | Estado: " +
        estado,
    );
  });

  console.log("==================================");
  alert("Reporte generado. Revisa la consola.");
}

//======================================================================================
//Ejecución del codigo
//======================================================================================

//======================================================================================
// Bucle Principal y Menú Interactivo
//======================================================================================

let opcion = ""; // Variable para almacenar la decisión del usuario

// El bucle 'while' se ejecutará MIENTRAS la opción no sea "4" (Salir)
while (opcion !== "5") {
  // Mostramos el menú y capturamos la entrada del usuario
  opcion = prompt(
    "--- PLATAFORMA DE APRENDIZAJE INTERACTIVA ---\n" +
      "1. Registrar nuevo alumno y sus notas.\n" +
      "2. Calcular promedio de notas de un alumno.\n" +
      "3. Actualizar notas de un alumno.\n" +
      "4. Mostrar reporte general de alumnos.\n" +
      "5. Salir de la aplicación.\n\n" +
      "Por favor, ingrese el número de su opción:",
  );

  // Evaluamos la opción ingresada usando 'switch'
  switch (opcion) {
    case "1":
      agregarAlumno();
      break;

    case "2": // Calcular promedio de un alumno.
      // Usamos una variable NUEVA y exclusiva para la búsqueda
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

      // Recorremos el arreglo
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
      modificarNotasAlumno();
      break;

    case "4":
      alert("Opción 4 seleccionada (Ver consola)");
      mostrarReporteGeneral();
      break;

    case "5":
      alert("Cerrando la aplicación. ¡Gracias por usar la plataforma!");
      break;

    case null:
      // Esto controla si el usuario presiona el botón "Cancelar" en el prompt
      opcion = "5";
      alert("Aplicación cancelada.");
      break;

    default:
      // Si el usuario escribe cualquier otra cosa (ej. "hola" o "5")
      alert("Opción no válida. Por favor, introduce un número del 1 al 4.");
      break;
  }
}

console.log("El programa ha finalizado correctamente.");
