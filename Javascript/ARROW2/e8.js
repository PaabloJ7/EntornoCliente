const obtenerEmpleadoMejorPagado = () => {
    let mejorPagado = { nombre: '', sueldo: 0 };
  
    for (let i = 1; i <= 8; i++) {
      const nombre = prompt(`Ingrese el nombre del empleado ${i}:`);
      const sueldo = parseFloat(prompt(`Ingrese el sueldo de ${nombre}:`));
  
      if (sueldo > mejorPagado.sueldo) {
        mejorPagado = { nombre, sueldo };
      }
    }
  
    return mejorPagado;
  };
  

  const empleadoMejorPagado = obtenerEmpleadoMejorPagado();
  console.log(`El empleado mejor pagado es ${empleadoMejorPagado.nombre} con un sueldo de ${empleadoMejorPagado.sueldo}.`);
  