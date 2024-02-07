const obtenerPrimeros20NumerosPares = () => {
    const numerosPares = [];
  
    for (let i = 1; numerosPares.length < 20; i++) {
      if (i % 2 === 0) {
        numerosPares.push(i);
      }
    }
  
    return numerosPares;
  };
  

  const primeros20NumerosPares = obtenerPrimeros20NumerosPares();
  console.log("Los primeros 20 números pares son:", primeros20NumerosPares);
  