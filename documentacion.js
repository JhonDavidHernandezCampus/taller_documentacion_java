
/* LAS FUNCIONES 

En Javascript, las funciones son uno de los tipos de datos más importantes,
 ya que estamos continuamente utilizándolas a lo largo de nuestro código.
*/

/* Funciones mediante declaracion  */
function declaFuncion (parametro_1,parametro_2,parametro_3){
    console.log(`las funciones por declaaracion permiten declarar una función que existirá a lo largo de todo el código`) 
}


/* Funciones mediante exprecion */
let varFuncion = function expeFuncion(parametro_1,parametro_2,parametro_3){ 
    console.log(`las funciones por exprecion guardan su contenido en una variable para despues ser ejecutada por ahi \nla variable no puede ser llamada antes de ser declarada en la funcion. ` )
}


/* Funciones como objetos */
const funcObjeto = new Function("return ' se pueden declarar funciones como si fueran objetos. Sin embargo, es un enfoque que no se suele utilizar en producción.';")
funcObjeto();


declaFuncion(1,2,3);
/* la funcion se debe llamar por el nombre de la variable nbo por la del la funcion */
varFuncion(1,2,3);



