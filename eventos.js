//Eventos: son la manera que tenemos en JS de controlar las acciones de los usuarios, y definir un comportamiento dado cuando este se produzca.



//¿Cómo funciona? Utilizamos una herramienta que se denomina "manejador de eventos"


// Hay varios métodos  o formas de trabajarlos.


//1) forma 1: Click
 //el evento "click" se dispara cuando cliqueamos el mouse sobre un elemento determinado.
//Usamos una función flecha para asociar un comportamiento a ese evento.


const boton = document.getElementById("btn");
boton.addEventListener("click", ()=>{
    alert("viva Messssssi");
})

//2) Forma 2: On Click
//Utilizando las propiedades del NODO (HTML) también disparar un evento.

const botonDos = document.getElementById("btnDos");
btnDos.onclick = () =>{
    alert("Segunda Forma");
}

//3) Escribiendo la función en el HTML:

function jsEnHtml(){
    alert("Primero Argentina, Segundo Francia, necesito terapia..")
}

//Eventos más comunes: mouse, teclado, formulario.
//Eventos con el mouse: se producen con la interacción del usuario con el mouse.

//mouseover-mouseout: el puntero del mouse se mueve o sale del elemento.

 const caja= document.getElementById("caja");
// caja.onmouseover = () => {
//     console.log("Ingresó o salió el puntero de la caja");
// }
// const caja= document.getElementById("caja");
// caja.onmouseout = () => {
//     console.log("Ingresó o salió el puntero de la caja");
// }

////mousemove: registra el movimiento del mouse sobre el elemento (no es necesario hacer click sobre el elemento) Recordar que no anda en versión mobile.

caja.onmousemove = () => {
    console.log("Estoy pasando el mouse por la caja");
}

//Eventos en el teclado: son los que producen con la interacción del usuario con el teclado.
//onkeydown: evento cuando se presiona la tecla

const texto = document.getElementById("campoTexto");
// texto.onkeydown = () => {
//     console.log("presionaste una tecla");
// }

//onkeyup: evento cuando se SUELTA la tecla

texto.onkeyup = () => {
    console.log( "soltaste una tecla");
}

//Evento change: se activa cuando cambia el valor de un elemento;

// const change = document.getElementById("texto");

// change.addEventListener("change", ()=>{
//     alert("Ingresaste un Texto");
// })

//EVENTO INPUT: me permite ejecutar una función cada vez que se ingrese texto en un campo.

const input = document.getElementById("textInput");
input.addEventListener("input", ()=> {
    console.log(input.value);
})

//Evento SUBMIT: se activa cuando un formulario es enviado.

class Cliente{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Vamos a crear un array vacío que almacene los datos de los
//clientes ingresados por medio de un push.

const arrayClientes= [];

//Vamos a vincular el formulario:
const form = document.getElementById("formulario");

//Vamos a trabajar con el formulario, tomar sus datos, crear un objeto y luego almacenamos esos datos en el array vacío

form.addEventListener("submit", (e)=>{
    //evitamos el comportamiento por default del form
    e.preventDefault();

    const name = document.getElementById("nombre");
    const lastname = document.getElementById("apellido");

    //crear un objeto que sea el cliente:
    const cliente = new Cliente(name.value, lastname.value);
    arrayClientes.push(cliente);
    console.log(arrayClientes);

    //Reseteamo el form al mandar los datos
    formulario.reset();

})