const obtenerFibonacci = (n) => {
    const fibonacci = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    return fibonacci.slice(0, n);
  };

  const primeros10Fibonacci = obtenerFibonacci(10);
  console.log("Los primeros 10 dígitos de la serie Fibonacci son:", primeros10Fibonacci);
  