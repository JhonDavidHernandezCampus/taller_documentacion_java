
/* LAS FUNCIONES 

En Javascript, las funciones son uno de los tipos de datos más importantes,
 ya que estamos continuamente utilizándolas a lo largo de nuestro código.
*/

/* Funciones anonimas  */
/* esta retornan un valor o una cadena de texto */
const funcAnonima = function () {
    return console.log("Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran \nsin nombre de función y se alojan en el interior de una variable y haciendo \nreferencia a ella cada vez que queramos utilizarla:"); 
};
funcAnonima();

/* Funciones como callbacks */
/* Son funciones en las que llamamos o que dentro de esta usamos otra funcion */

const funcionCallbacks =  function (otrafuncion) {
    console.log(`esta funcion llama a otra funcion dentro de ella. de modo que la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos\n definirlas desde fuera de dicha función:`)
    otrafuncion();
};

funcionCallbacks(funcAnonima);

/* Funciones Autoejecutables  */
/* las funciones auto ejecutables se ejecutan solas durante la marcha del codigo sin necesidad de llamarlas */
const saludo = function () {
    return "Hola";
};


( function(){
    console.log("esta funcion se ejecuta sin necesaiadad de llamarla ");
    
})();/* en estos parentesis iran los parametros */

