'use strict';
// soy un comentario de una sola línea

/*
  Yo también soy
  un comentario
	pero multilínea
*/
// asignar una variable
//var nicknameUsuario = "Stricker"
//var puntosDeVida
// reasignar el valor a una variable declarada
//nicknameUsuario = "Toshi"
//puntosDeVida = 500

// console.log(nicknameUsuario+" "+puntosDeVida);
// console.log(typeof nicknameUsuario);

// console.log(likesPost);
// var likesPost;

// if (true) {
//     var likesPost = 3;
// }
// console.log(likesPost);

//Uso del var
// asignar una variable
// let nicknameUsuario = "Yoshi"
// let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
// nicknameUsuario = "Toshi"
// puntosDeVida = 900

// console.log(nicknameUsuario+" "+puntosDeVida);
//STRING
// let nombreJuego = " Mario Kart "

// console.log("Número de letras:",nombreJuego.length);
// console.log("Encotrar alguna palabra:",nombreJuego.includes("Kart"));
// console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
// console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
// console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
// console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider'));
// console.log("Cortar un texto:",nombreJuego.slice(1,6));
// console.log("Cortar un texto:",nombreJuego.substring(1,6));
// console.log("Cortar un texto:",nombreJuego.charAt(1));
// console.log("Repetir un texto:",nombreJuego.repeat(2));
// console.log("Dividir un texto:",nombreJuego.split(" "));


// const name = "Byron"
// const lastName= "Loarte"
// const city ="Quito"
// const age = 34
// const active = false
// console.log(name+"-"+lastName+"-"+city)
// console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);
// console.log(`Esto es una prueba ${age}`);


//NUMEROS
// Es importante reconocer el tipo de valor asignado
// const numeroVidas = "20"
// const numeroPuntos = 20

// console.log(numeroPuntos,numeroVidas);
// console.log(typeof(numeroPuntos), typeof(numeroVidas));

// console.log("suma:",numeroPuntos+20);
// console.log("resta:",numeroPuntos-20);
// console.log("multiplicación:",numeroPuntos*20);
// console.log("división:",numeroPuntos/20);
// console.log("módulo:",numeroPuntos%20);

// console.log(3 + 4 * 5)
// console.log(4 * 3 ** 2)
// console.log(200 * 0.2)
// console.log(200 * 1.12)


// let edadJugador = "20"
// let precioJuego = "525.63"

// console.log(Number.parseInt(edadJugador));
// console.log(Number.parseFloat(precioJuego));

// console.log(Number.isInteger(edadJugador));

// console.log(`${+edadJugador + +precioJuego}`);

// operadores de asignación 
// let saldoTarjetaUsuario = 500
// let saldoTarjeta = 1000
// let estadoCuenta
// let emailConfirmado=null


// // operadores de asignación de adición
// saldoTarjetaUsuario += 100
// console.log(saldoTarjetaUsuario);

// // operadores de comparación
// saldoTarjetaUsuario="1000"
// console.log(saldoTarjeta == saldoTarjetaUsuario)
// // evalua tipo de dato y contenido el triple igual
// console.log(saldoTarjeta === saldoTarjetaUsuario)

// console.log(estadoCuenta === emailConfirmado);


// // operadores aritméticos
// console.log(saldoTarjeta + Number.parseInt(saldoTarjetaUsuario));


// // operadores lógicos 
// console.log(saldoTarjeta != saldoTarjetaUsuario);
// // evalua tipo de dato y contenido
// console.log(saldoTarjeta !== Number.parseInt(saldoTarjetaUsuario));

//Condicionales

// const carritoCompras = []

// // utilizando el condicional clásico
// if (carritoCompras.length===0)
// {
//     console.log("Agregar productos")
// }

// // utilizando operador ternario
// carritoCompras.length===0 ? console.log("Agregar productos") :""

//BUCLES
// const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
// const usuario ={
//     nombre:"Josue",
//     apellido:"Salazar",
// }

// uso del forEach 
// tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// // uso del for of -> usado para arreglos
// for (const t of tareasPendientes) {
//     console.log(`${t}`)
// }
//OBJETOS

const user = {
  name:"Byron",
  lastName:"Loarte",
  age:34,
  address:{
    city:"Quito",
    telephone:"0995644186",
    street:"Quitumbe Ñan"
},
Friends:['Peter','Mike','Camila','Joe'],
state:true,
sendMail (){
    return `send mail to ${this.Friends[0]}`
},
sendNotification: function (){
  return `send notification to ${this.Friends[3]}`
}
}
// console.log(user.state);
// console.log(user.sendMail());
// console.log(user.sendNotification());


const {name,lastName,age,address} = user
console.log(name,lastName,age,address);

// const {name,lastName,age,myAddress=user.address} = user
// console.log(name,lastName,age,myAddress);

// const {name,lastName,age,address:{streets}} = user
// console.log(name,lastName,age,streets);

// const {name,lastName,...res} = user
// console.log(name,lastName,res);