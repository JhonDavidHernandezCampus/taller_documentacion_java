/* Operadores  
Operadores aritméticos

Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y
devuelve un solo valor numérico.

*/

alert("Operadores aritméticos (Residuo (%),Incremento (++),Decremento (--) y otros conocidos como suma ,resta multiplicacion y divicion")



let num1 = Number(prompt("ingrese un numero para hacer la operacion "))
let num2 = Number(prompt("ingrese otro numero para hacer la operacion :"))


alert(`El residuo del numero ${num1} es : ${num1%num2}\nIncremento (++) ${num1++} \n Decremento (--): ${num1--}
    \nOperadores (+-*/):\n suma=${num1+num2}\n resta=${num1 - num2}\n multiplicacion=${num1*num2}\n divicion=${num1/num2} `);
