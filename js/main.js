//Campo producto - Name
// Campo cantidad - Number
//Botón agregar btnAgregar
// alertValidacionesTexto
//alertValidaciones
//contadorProductos
//productosTotal
//precioTotal

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let idTimeout;
let btnAgregar = document.getElementById("btnAgregar");


//Genera un precio al azar
     function getPrecio(){
          return Math.floor(Math.random() * 50 *100) / 100;
     }//getPrecio

     function validarNombre(){
          return (txtNombre.value.length>=2)?true:false;
     }//validarNombre

     function validarCantidad(){
          if(txtNumber.value.length==0) {
               return false;
          }// if
          if (isNaN(txtNumber.value)){
              return false;
          }//if
          if (parseFloat(txtNumber.value)<=0) {
              return false;
          }//if
          return true;
     }//validarCantidad

btnAgregar.addEventListener ("click", function(event){
     event.preventDefault();
     clearTimeout(idTimeout);
     alertValidacionesTexto.innerHTML="";
    if ( (! validarNombre()) || (! validarCantidad() ) ){
          let lista ="<ul>";
          if (! validarNombre()) {
               txtNombre.style.border = "red thin solid";
               lista += "<li>Se debe esribir un nombre válido</li>";
          }//if validarNombre
          if (! validarCantidad()) {
               txtNumber.style.border = "red thin solid";
               lista += "<li>Se debe esribir una cantidad válida</li>";
          }//if validarCantidad
          lista +="</ul>";
          alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
          alertValidaciones.style.display="block";
          idTimeout = setTimeout (function (){
               alertValidaciones.style.display="none";
          }, 5000);
    }// if ! validaciones




});