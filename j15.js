//ejercicio1 de la ppt//
function compra(importe) {
  let descuento = (importe / 100) * 12;
  let total = importe - descuento;
  if (importe > 150) {
    console.log(
      `El descuento de la compra es de ${descuento} y el pago final es de ${total}`
    );
  } else {
    console.log(`No hay descuento el pago es de ${importe}`);
  }
}

compra(200);

// ejercicio2 de la ppt//
function promedio(nombre, parcial, exFinal, practicas) {
  let promedioTotal = parcial + practicas + exFinal + exFinal;
  let promedioFinal = promedioTotal / 4;
  if (promedioTotal >= 48) {
    console.log(
      `El alumno ${nombre} esta aprobado, su promedio final es ${promedioFinal}`
    );
  }
}
promedio("jorge", 14, 13, 17);

//------------------------//

// ejercicio1 del Word//
function datoDelTrabajador(nombre, sueldo, hijos = 0) {
  let bono = (sueldo / 100) * 7;
  total = bono + sueldo;
  if (hijos > 0) {
    console.log(
      `El trabajador ${nombre} tendra una bonificacion de ${bono} y su sueldo final sera de ${total}`
    );
  } else {
    console.log(`No tiene hijos asi que sus useldo sera de ${sueldo}`);
  }
}

datoDelTrabajador("ricardo", 900);

//ejercicio2 del Word//
function numeroEntero(a) {
  if (a >= 500) {
    porcentaje = (a / 100) * 18;
    console.log(`El resultado es de ${porcentaje}`);
  } else {
    console.log("no lo es");
  }
}
numeroEntero(500);

// //ejercicio3 del Word//
function factorial(a) {
  total = 1;
  for (let i = 1; i <= a; i++) {
    total = total * i;
    console.log(total);
  }
}
factorial(5);
