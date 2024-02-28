const celulares = [
{ id: "A", celular: "Samsung S24 Ultra", precio: 500000 },
{ id: "B", celular: "Iphone 15 plus", precio: 600000 },
{ id: "C", celular: "Moto G31", precio: 190000 },
{ id: "D", celular: "Moto Edge", precio: 400000 },
{ id: "E", celular: "Huawei note 10", precio: 300000 },
{ id: "F", celular: "Huawei note 20", precio: 200000 },
{ id: "G", celular: "Moto E22", precio: 100000 },
];


const carrito = [];

function buscarCelular(arr, equipos) {
  return arr.filter((el) => {
    return el.celular.includes(equipos);
  });
}

function celularComprado(arr, celu) {
  arr.push(celu);
}

function comprarCelular(equipo, recargo) {
  return equipo.reduce((acc, el) => {
    return acc = acc + el.precio;
  }, recargo);
}

let usuario = "Tutor/a";
let inicioCorrecto = false;
let saldo = 250000;

function iniciarSesion() {
  let ingresoUsuario = prompt("Ingresa tu nombre de usuario/a");

  if (ingresoUsuario == usuario) {
    alert("Hey, bienvenida/o: " + usuario);

    for (let i = 1; i <= 3; i++) {
      let pass = "53920";
      let ingresoPass = prompt("Muy bien " + usuario + ", ahora ingresa tu contraseña. Tenés 3 intentos");

      if (ingresoPass == pass) {
        alert("Hey, bienvenida/o: " + usuario + " ahora vas a poder operar");
        inicioCorrecto = true;
        break;
      } else {
        alert("Contraseña incorrecta. ¿No leiste la documentación?");
      }
    }
  } else {
    alert("Usuario no encontrado, volvé a intentarlo con otro nombre");
  }
}

function realizarOperaciones() {
  if (inicioCorrecto) {
    let opciones = prompt("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
    while (opciones != "x" || opciones != "X") {      

      switch (opciones) {
        case "1":
          alert("Tu dinero disponible en cuenta es: $" + saldo);
          break;
        case "2":
          comprarEquipo();
          break;
        case "3":
          realizarPrestamo();
          break;
        default:
          alert("Opción no válida");
      }
      opciones = prompt("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
    }
  }
}

function comprarEquipo() {
  let equipos = prompt("Éste es nuestro stock, seleccioná el que quieras para comprarlo: \nA - Samsung S24 Ultra $500,000 \nB - Iphone 15 $600,000 \nC - Moto G31 $190,000 \nD - Moto Edge $400000 \nE - Huawei note 10 $300,000 \nF - Huawei note 20 $200,000 \nG - Moto E22 $100,000 ");

  switch (equipos) {
    case "A":
      comprar("Samsung S24 Ultra", 500000);
      break;
    case "B":
      comprar("Iphone 15", 600000);
      break;
    case "C":
      comprar("Moto G31", 190000);
      break;
    case "D":
      comprar("Moto Edge", 400000);
      break;
    case "E":
      comprar("Huawei note 10", 300000);
      break;
    case "F":
      comprar("Huawei note 20", 200000);
      break;
    case "G":
      comprar("Moto E22", 100000);
      break;
    default:
      alert("Opción no válida");
  }
}
function comprar(nombre, precio) {
  if (saldo < precio) {
    alert("No tenes dinero suficiente. Pedí un préstamo.");
  } else {
    saldo -= precio;
    alert(`Felicidades! Pudiste comprar tu ${nombre}, tu saldo ahora es: $${saldo}`);
  }
}

function realizarPrestamo() {
  let prestamo = parseFloat(prompt("Ingresa el monto que queres recibir y se acreditará a tu saldo. Recordá que nos vas a devolver ese monto más un 10% de interés"));
  let interes = prestamo * 0.1;
  let totalDevolucion = prestamo + interes;

  alert("Nos vas a devolver $" + totalDevolucion);
  saldo += prestamo;
  alert("Tu saldo ahora es: $" + saldo);
}

iniciarSesion()
realizarOperaciones()
comprarEquipo()
comprar()
realizarPrestamo()
























































