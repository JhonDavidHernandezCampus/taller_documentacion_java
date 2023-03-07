/* Método includes
El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón. Como
primer argumento, se le pasa la coincidencia que se busca y se quiere reemplazar y como segundo
argumento, se le pasa la cadena por la cual se reemplazará la coincidencia. Si el patrón es una cadena,
sólo la primera coincidencia será reemplazada.
   Ejemplo */

alert("Me reemplaza una parte de la cadena indicada por otra:)")
let cadena =  prompt("Ingrese una cadena de texto:")
let letra = prompt("ingrese la parte del texto que desea reemplazar:");
let cambio = prompt(`ingrese el texto por el cual desea reemplazar la:${letra} `);


alert(`Me reemplaza la palabra ${letra}  por ${cambio}\n  ${cadena.replace(letra , cambio)}`)
alert(`La cadena queda asi: \n ${cadena.replace(letra , cambio)}`)


