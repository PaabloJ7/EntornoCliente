// 5. PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// licencia de software vendida menos el 5% de deducciones por
// impuestos. Codifica un programa que calcule e imprima el
// salario mensual de un vendedor dado;

/*
function Calcular(salarioMensual,comision,lecenciaVendida,totalSalario,totalcomisiones){
    salarioMensual=3500000
    comision=1500000
    lecenciaVendida=4
    totalcomisiones=comision*lecenciaVendida
    totalSalario=((salarioMensual+totalcomisiones)/100)*95
    
    console.log('El salario mensual es de  '+ totalSalario)
}
Calcular()
*/

let calcularSalario = (salarioMensual, comision, licenciasVendidas) => {
    salarioMensual = 3500000;
    comision = 1500000;
    licenciasVendidas = 4;

    let totalComisiones = comision * licenciasVendidas;
    let totalSalario = ((salarioMensual + totalComisiones) / 100) * 95;

    return totalSalario;
};

let salarioFinal = calcularSalario();
console.log(`El salario mensual es de ${salarioFinal}`);
