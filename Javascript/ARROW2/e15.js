const invertirTexto = (texto) => {
    if (typeof texto === 'string') {
      return texto.split('').reverse().join('');
    } else {
      return "Error: El parámetro no es una cadena de texto.";
    }
  };
  
  // Ejemplo de uso
  const textoOriginal = "Hola, mundo!";
  const textoInvertido = invertirTexto(textoOriginal);
  console.log(`Texto original: ${textoOriginal}`);
  console.log(`Texto invertido: ${textoInvertido}`);
  