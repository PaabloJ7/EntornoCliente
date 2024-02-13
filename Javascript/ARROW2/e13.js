const obtenerLetraDNI = (dni) => {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const longitudDNI = 9;
  
    if (typeof dni === 'string' && dni.length === longitudDNI) {
      const numerosDNI = dni.slice(0, longitudDNI - 1);
      const letraCalculada = letras[numerosDNI % 23];
  
      return letraCalculada === dni.charAt(longitudDNI - 1) ? letraCalculada : "DNI Erróneo";
    } else {
      return "DNI Erróneo";
    }
  };
  

  const dniEjemplo = "12345678A";
  const letraDNI = obtenerLetraDNI(dniEjemplo);
  console.log(`La letra del DNI ${dniEjemplo} es: ${letraDNI}`);
  