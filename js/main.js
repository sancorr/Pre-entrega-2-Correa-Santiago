const celulares = [
{ id: "A", celular: "Samsung S24 Ultra", precio: 500000 },
{ id: "B", celular: "Iphone 15 plus", precio: 600000 },
{ id: "C", celular: "Moto G31", precio: 190000 },
{ id: "D", celular: "Moto Edge", precio: 400000 },
{ id: "E", celular: "Huawei note 10", precio: 300000 },
{ id: "F", celular: "Huawei note 20", precio: 200000 },
{ id: "G", celular: "Moto E22", precio: 100000 },
];


function elegirCelular(opciones){

  while (opciones != "x" && opciones != "X") {
    //let opciones = prompt ("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
    function calculo (prestamo, num2) {
      return prestamo * num2;
    }
    
    let saldo = 250000;
    switch (opciones) {
      case "1": 
       alert ("Tu dinero disponible en cuenta es: $" + saldo);
       break;
      case "2":
      let equipos =  prompt ("Éste es nuestro stock, seleccioná el que quieras para comprarlo: \nA - Samsung S24 Ultra $500,000 \nB - Iphone 15 $600,000 \nC - Moto G31 $190,000 \nD - Moto Edge $400000 \nE - Huawei note 10 $300000 \nF - Huawei note 20 $200000 \nG - Moto E22 $100000 ");
      if ((equipos == "A" || equipos == "a") && (saldo < 500000)){         
        alert ("No tenes dinero suficiente. Pedí un préstamo.");
        break; 
      } else if ((equipos == "A" || equipos == "a") && (saldo >= 500000)){
        saldo = saldo - 500000
        alert ("Felicidades! pudiste comprar tu Samsung S24 Ultra, tu saldo ahora es: $" + saldo);
        break;
      } else if ((equipos == "B" || equipos == "b") && (saldo < 600000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");
        break;
      } else if ((equipos == "B" || equipos == "b") && (saldo >= 600000)){
        saldo = saldo - 600000
        alert ("Felicidades! pudiste comprar tu Iphone 15, tu saldo ahora es : $" + saldo);
        break;
      } else if ((equipos == "C" || equipos == "c") && (saldo < 190000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");
        break;
      } else if ((equipos == "C" || equipos == "c") && (saldo >= 190000)){
        saldo = saldo - 190000
        alert ("Felicidades! pudiste comprar tu Moto G31, tu saldo ahora es : $" + saldo);
        break;
      } else if (equipos == "D" || equipos == "d" && (saldo < 400000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "D" || equipos == "d") && (saldo >= 400000)){
        saldo = saldo - 400000
        alert ("Felicidades! pudiste comprar tu Moto Edge, tu saldo ahora es : $" + saldo);
        break;
      }else if (equipos == "E" || equipos == "e" && (saldo < 300000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "E" || equipos == "e") && (saldo >= 300000)){
        saldo = saldo - 300000
        alert ("Felicidades! pudiste comprar tu Huawei note 10, tu saldo ahora es : $" + saldo);
        break;
      }else if (equipos == "F" || equipos == "f" && (saldo < 200000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "F" || equipos == "f") && (saldo >= 200000)){
        saldo = saldo - 200000
        alert ("Felicidades! pudiste comprar tu Huawei note 20, tu saldo ahora es : $" + saldo);
        break;
      }else if (equipos == "G" || equipos == "g" && (saldo < 100000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "D" || equipos == "d") && (saldo >= 100000)){
        saldo = saldo - 100000
        alert ("Felicidades! pudiste comprar tu Moto E22, tu saldo ahora es : $" + saldo);
        break;
      }
      case "3": 
        //let prestamo = parseFloat (prompt ("ingresa el monto que queres recibir y se acreditará a tu saldo. Recordá que nos vas a devolver ese monto más un 10% de interés"));
        
        calculo (prestamo, 0.1 )
        let interes = calculo (prestamo, 0.1) + prestamo;
        
        alert ("nos vas a devolver $" + interes);
        saldo = saldo + prestamo
        alert ("Tu saldo ahora es: $" + saldo);
        break;
    }
    //opciones = prompt ("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
  }  

}

//let opciones = prompt ("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
//elegirCelular(opciones)
//console.log(elegirCelular());
//let equipos =  prompt ("Éste es nuestro stock, seleccioná el que quieras para comprarlo: \nA - Samsung S24 Ultra $500,000 \nB - Iphone 15 $600,000 \nC - Moto G31 $190,000 \nD - Moto Edge $400000 \nE - Huawei note 10 $300000 \nF - Huawei note 20 $200000 \nG - Moto E22 $100000 ");
function buscarCelular (arr,equipos){
  return arr.filter((el)=>{
    return el.celular.includes(equipos)
  })
}

//let encontrado = buscarCelular(celulares,equipos)
//console.log(encontrado);

const carrito = [];
function celularComprado (arr,celu){
  arr.push(celu)
}
//let compra = celularComprado(carrito, encontrado)
//console.log(carrito);


function comprarCelular (equipo,recargo){
  return equipo.reduce((acc,el)=> {
    return acc += el.precio
  },recargo)
}

let compraHecha = comprarCelular(carrito,100)
//console.log(compraHecha);




/*function comprarTickets(tickets,recargo){
  return tickets.reduce((acc,el)=>{
    return acc += el.precio
  },recargo)
} // SUMA LOS VALORES DEL "CARRITO" Y RETORNA EL VALOR + UN RECARGO
let recargoFijo = 2000
const peliculaComprada = comprarTickets(ticketsReservados,2000)
//console.log(peliculaComprada);
*/





// SIMULADOR DE TIENDA VIRTUAL = VENTA DE EQUIPOS Y PRÉSTAMOS
let usuario = "Tutor/a";
let inicioCorrecto = false;


/*let ingresoUsuario = prompt("Ingresa tu nombre de usuario/a");

if (ingresoUsuario == usuario) {
  alert("Hey, bienvenida/o: " + usuario);
  for (let i = 1; i <= 3; i++) {
    let pass = "53920";
    let ingresoPass = prompt( "Muy bien " + usuario + ", ahora ingresa tu contraseña. Tenés 3 intentos"
    );
  
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
}*/

/*if (inicioCorrecto){
  let saldo = 250000
  let opciones = prompt ("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
  function calculo (prestamo, num2) {
    return prestamo * num2;
  }

  while (opciones != "x" && opciones != "X") {

    switch (opciones) {
      case "1": 
       alert ("Tu dinero disponible en cuenta es: $" + saldo);
       break;
      case "2":
      //let equipos =  prompt ("Éste es nuestro stock, seleccioná el que quieras para comprarlo: \nA - Samsung S24 Ultra $500,000 \nB - Iphone 15 $600,000 \nC - Moto G31 $190,000 \nD - Nokia 1100 $1500 ");
      if ((equipos == "A" || equipos == "a") && (saldo < 500000)){         
        alert ("No tenes dinero suficiente. Pedí un préstamo.");
        break; 
      } else if ((equipos == "A" || equipos == "a") && (saldo >= 500000)){
        saldo = saldo - 500000
        alert ("Felicidades! pudiste comprar tu Samsung S24 Ultra, tu saldo ahora es: $" + saldo);
        break;
      } else if ((equipos == "B" || equipos == "b") && (saldo < 600000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");
        break;
      } else if ((equipos == "B" || equipos == "b") && (saldo >= 600000)){
        saldo = saldo - 600000
        alert ("Felicidades! pudiste comprar tu Iphone 15, tu saldo ahora es : $" + saldo);
        break;
      } else if ((equipos == "C" || equipos == "c") && (saldo < 190000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");
        break;
      } else if ((equipos == "C" || equipos == "c") && (saldo >= 190000)){
        saldo = saldo - 190000
        alert ("Felicidades! pudiste comprar tu Moto G31, tu saldo ahora es : $" + saldo);
        break;
      } else if (equipos == "D" || equipos == "d" && (saldo < 400000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "D" || equipos == "d") && (saldo >= 400000)){
        saldo = saldo - 400000
        alert ("Felicidades! pudiste comprar tu Moto Edge, tu saldo ahora es : $" + saldo);
        break;
      }else if (equipos == "E" || equipos == "e" && (saldo < 300000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "E" || equipos == "e") && (saldo >= 300000)){
        saldo = saldo - 300000
        alert ("Felicidades! pudiste comprar tu Huawei note 10, tu saldo ahora es : $" + saldo);
        break;
      }else if (equipos == "F" || equipos == "f" && (saldo < 200000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "F" || equipos == "f") && (saldo >= 200000)){
        saldo = saldo - 200000
        alert ("Felicidades! pudiste comprar tu Huawei note 20, tu saldo ahora es : $" + saldo);
        break;
      }else if (equipos == "G" || equipos == "g" && (saldo < 100000)){
        alert ("No tenes dinero suficiente. Pedí un préstamo.");        
        break;
      } else if ((equipos == "D" || equipos == "d") && (saldo >= 100000)){
        saldo = saldo - 100000
        alert ("Felicidades! pudiste comprar tu Moto E22, tu saldo ahora es : $" + saldo);
        break;
      }
      case "3": 
        let prestamo = parseFloat (prompt ("ingresa el monto que queres recibir y se acreditará a tu saldo. Recordá que nos vas a devolver ese monto más un 10% de interés"));
        //let interes =  prestamo * 0.1 ;
        calculo (prestamo, 0.1 )
        let interes = calculo (prestamo, 0.1) + prestamo;
        
        alert ("nos vas a devolver $" + interes);
        saldo = saldo + prestamo
        alert ("Tu saldo ahora es: $" + saldo);
        break;
    }
    opciones = prompt ("Selecciona alguna de las siguientes opciones: \n1 - Saldo en tu cuenta \n2 - Equipos disponibles \n3 - Préstamos con interés \nPresiona X para salir");
  }
}*/
