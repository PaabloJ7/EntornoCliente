const calcularMedia = (array) => {
    if (array.length === 0) {
      return 0; // Devuelve 0 si el array está vacio para evitar división por cero
    }
  
    const suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
  };
  
  const arrayDeEnteros = [10, 20, 30, 40, 50];
  const media = calcularMedia(arrayDeEnteros);
  console.log(`La media del array es: ${media}`);
  