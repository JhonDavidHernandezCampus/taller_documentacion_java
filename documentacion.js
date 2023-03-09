/* Operadores  
Funciones Matematicas en java

El objeto Math de Javascript incorpora varias constantes que podemos necesitar en algunas operaciones matemáticas. Veamos su significado y valor aproximado.

Math es un objeto interno de Javascript que tiene incorporadas ciertas constantes y métodos (funciones) para trabajar matemáticamente.

*/

alert("Funciones matematicas de java")



let num1 = Number(prompt("ingrese un numero para hacer las operaciones "))
let num2 = Number(prompt("ingrese otro numero para hacer las operaciones :"))

alert(`se tomara el numero ${num1} como el radio de un circulo:\n
        se calcula el area de un circulo con la funcion .PI de java\n
        A=${(Math.PI)*(num1**2)} `)

alert(`Calcular el numero mayor y menor de los dos con .min y .max\n
    Valos minimo: ${Math.min(num1,num2)}\n
    Valor maximo: ${Math.max(num1,num2)} `) 

alert(`se crea un numero randon con la funcion .randon\n
      El  numero creado por la funcion randon fue: ${Math.random(100,20)} `)



/* La función Math.pow() retorna la base elevada al exponente, es decir, baseexponente. La base y el exponente estan en el sistema numérico decimal. */

alert(`Utilixamos la funcion .pow para elevar un numero a una potrencia en este caso ( ${num1}^${num2} )\n
    resultado= ${Math.pow(num1,num2)}`);


