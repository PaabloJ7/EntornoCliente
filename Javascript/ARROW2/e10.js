const calcularTiempo = (velocidad, distancia) => distancia / velocidad;

const velocidadAutomovil = 73000; // en km/h
const distanciaRecorrer = 120; // en km

const tiempoNecesario = calcularTiempo(velocidadAutomovil, distanciaRecorrer);
console.log(`El tiempo necesario para recorrer ${distanciaRecorrer} km a ${velocidadAutomovil} km/h es ${tiempoNecesario} horas.`);
