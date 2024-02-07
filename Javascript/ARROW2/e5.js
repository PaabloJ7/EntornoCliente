const decimalToBinary = (decimal) => {
    if (decimal === 0) {
      return '0';
    }
  
    let binary = '';
    while (decimal > 0) {
      const remainder = decimal % 2;
      binary = remainder + binary;
      decimal = Math.floor(decimal / 2);
    }
  
    return binary;
  };
  
  // Ejemplo de uso
  const decimalNumero = 25;
  const binarioResultado = decimalToBinary(decimalNumero);
  
  console.log(`El número ${decimalNumero} en binario es: ${binarioResultado}`);
  