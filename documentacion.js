/* Método includes
Método slice() 

Extrae una sección de una cadena y devuelve una nueva cadena.
   Ejemplo */

alert("Me corta una parte de la cadena segun como le indiquemos y me debuelve la parte cortada :)")
let cadena =  prompt("Ingrese una cadena de texto:")
let ini = prompt(`ingrese el numero desde donde desea cortar la cadena`)
let fin = prompt(` ingrese el numero hasta donde desea cortar la cadena (que no supere la longitud de la cadena )`)


alert(`La cadena queda de la siguiente forma : \n  ${cadena.substring(ini , fin)}`)


