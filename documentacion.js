/* Método repeat()

El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de
copias de la cadena en la cual fue llamada, concatenados.
   Ejemplo */

alert("El metodo repeat me multiplica la cadena de texto las veces que le digamos y me la regresa como una sola cadana:)")
let cadena =  prompt("Ingrese una cadena de texto:")
let ini = prompt(`ingrese el numero de veces que desea repetir la cadena`)


alert(`La cadena queda de la siguiente forma : \n  ${cadena.repeat(ini)}`)


