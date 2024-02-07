const contarParametros = (...params) => params.length;

const cantidadDeParametros = contarParametros(1, 'abc', true, 5.5);
console.log(`Se pasaron ${cantidadDeParametros} parámetros.`);
