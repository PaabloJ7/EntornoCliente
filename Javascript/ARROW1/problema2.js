/*

function nombrar (codigo){
     let nombre =   codigo.split(':')[1]
     return nombre

}
let resultado = nombrar('25413458:Alejandro Zamora')
console.log(resultado)
*/

let nombrar = (codigo) => {
     let nombre = codigo.split(':')[1].trim();
     return nombre;
 };
 
 let resultado = nombrar('25413458:Alejandro Zamora');
 console.log(resultado);
 