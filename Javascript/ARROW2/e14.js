const calcularPrecioConIVA = (precio, iva = 21) => {
    if (typeof precio === 'number' && typeof iva === 'number') {
      const precioConIVA = precio + (precio * (iva / 100));
      return precioConIVA.toFixed(2); // Redondear a dos decimales
    } else {
      return "Error: Precio o IVA no son números.";
    }
  };

  const precioProducto = 100;
  const ivaProducto = 10; // Si no se proporciona, se aplicará el 21% por defecto
  
  const precioTotal = calcularPrecioConIVA(precioProducto, ivaProducto);
  console.log(`El precio total con IVA es: ${precioTotal}`);
  