/* Operadores  
Operadores lógicos

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelve
un valor booleano. Sin embargo, los operadores && y ||en realidad devuelven el valor de uno de los
operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden
devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla.
*/

alert("Operadores logicos (AND logico= &&,OR logico = || y Not logico= !)")



let num1 = Number(prompt("ingrese un numero para hacer la operacion "))
let num2 = Number(prompt("ingrese otro numero para hacer la operacion :"))


alert(`El numero (${num1} && ${num2})=  ${num1 && num2}\n El numero (${num1} || ${num2})=  ${num1 || num2}\nEl numero (${num1} ^ ${num2})=  ${num1 ^ num2}  `);
