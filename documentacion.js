/* Método includes
El método startsWith() indica si una cadena de texto comienza con los caracteres de 
una cadena de texto concreta, devolviendo true o false según corresponda.
   Ejemplo */

alert("Me evalua si un caracter se encuentra en la ultima posision de la cadena de texto:)")
let cadena =  prompt("Ingrese una cadena de texto:")
let letra = prompt("ingrese una letra para evaluar si se encuentra al primcipio de la cadena de texto:");


alert(`¿la letra ' ${letra} ' se encuentra en la ultima posicion de la cadena ingresada anteriormente\n  ${cadena.endsWith(letra)}`)

