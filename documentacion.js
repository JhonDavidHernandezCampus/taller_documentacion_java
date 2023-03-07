/* Método includes
Devuelven si o no la cadena comienza, termina o contiene una subcadena especificada.
   Ejemplo */

alert("El metodo 'includes' devuelven si o no la cadena comienza, termina o contiene una subcadena especificada.)")
let cadena =  prompt("Ingrese una cadena de texto:")
let letra = prompt("ingrese una letra para evaluar si se encuentra en la cadena de texto:");


alert(`¿la letra ' ${letra} ' se encuentra en la cadena dijitada anterior mente?\n  ${cadena.includes(letra)}`)

