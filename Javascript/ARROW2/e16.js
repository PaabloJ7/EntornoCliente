const generarNumerosAleatorios = () => {
    const numerosAleatorios = [];
    const min = 1;
    const max = 1000;
  
    while (numerosAleatorios.length < 100) {
      const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  
      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio);
      }
    }
  
    return numerosAleatorios;
  };
  
  const numerosGenerados = generarNumerosAleatorios();
  console.log("Números aleatorios generados:", numerosGenerados);
  