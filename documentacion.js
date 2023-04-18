
/* callback y promesas */
 /* los callback son funciones que se llaman dentro de otra como parametro, ha esto se le conoce como callback */


let num1 =Number(prompt("ingrese un numero a sumar "));
let num2 =Number(prompt("ingrese otro numero a sumar "));

let laoperacio_Callback =(num1,num2)=>{
    return num1+num2;
}
let operacion =(num1,num2,laoperacio_Callback)=>{
    return laoperacio_Callback(num1,num2);
}

console.log(operacion(num1,num2,laoperacio_Callback));

/* Las promesas son la nueva forma de realizar acciones asíncronas dentro de JS. Comencemos analizando cómo crear una:
Recibe una función con dos parámetros (resolve, reject) las cuales son funciones que se ejecutarán en caso de éxito o error, respectivamente. Puedes pasarle un argumento a estas funciones, el cual podrás usar más adelante. */
/*  la promesa puede estar en tres estados
    pending: La promesa está en curso, y aún no se ha resuelto o rechazado.
    fulfilled: La promesa se ha resuelto satisfactoriamente, y tiene un valor resultante.
    rejected: La promesa se ha rechazado, y tiene un motivo de rechazo. */
console.log("De aqui para abajo esta la suma pero pr promesas");

let sumar = (num1,num2)=>{
    return new Promise((resol,reset)=>{
        (isNaN(num1)|| isNaN(num2))?reset("ingrese un numereo valido"):resol(num1+num2)
    });
}

sumar(num1,num2).then((resultado)=>{
    console.log("la suma es ", resultado);
})
.catch((error)=>{ 
    console.log("numero no valido");
});
