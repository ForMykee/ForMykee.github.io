// Función para calcular las raíces y mostrar los resultados
function resolverEcuacion() {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let c = parseFloat(document.getElementById('num3').value);

    // Calcular la ecuación característica
    let discriminant = b * b - 4 * a * c;
    let root1, root2;
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant === 0) {
        root1 = root2 = -b / (2 * a);
    } else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        alpha= `${realPart} `;
        beta= `${imaginaryPart}`;
        
    }

    // Mostrar la ecuación característica, las raíces y las soluciones generales
    document.getElementById('ecuacion').value = `${a}m^2 + ${b}m + ${c} = 0`;
    document.getElementById('raices').value = `Raíces: ${root1} y ${root2}`;

    if (discriminant > 0) {
        document.getElementById('solucion1').value = `Solución 1: m = e^(${root1}x)`;
        document.getElementById('solucion2').value = `Solución 2: n = e^(${root2}x)`;
        document.getElementById('solucionGeneral').value = `Solución General: y = c1 * e^(${root1}) + c2 * e^(${root2})`;
    } else if (discriminant === 0) {
        document.getElementById('solucion1').value = `Solución 1: m = e^(${root1}x)`;
        document.getElementById('solucion2').value = `Solución 2: n = x * e^(${root2}x)`;
        document.getElementById('solucionGeneral').value = `Solución General: y = c1 * e^(${root1}) + c2 * x * e^(${root2})`;
    } else {
        document.getElementById('solucion1').value = `Solución 1: m = e^(${alpha}x) * cos(${beta}x)`;
        document.getElementById('solucion2').value = `Solución 2: n = e^(${alpha}x) * sin(${beta}x)`;
        document.getElementById('solucionGeneral').value = `Solución General: y = c1 * e^(${alpha}) * cos(${beta}x) + c2 * e^(${alpha}x) * sin(${beta})`;
    }
    function obtenerProcedimiento(a, b, c) {
        let procedimiento = `Procedimiento para resolver la ecuación diferencial de segundo orden (${a}x^2 + ${b}x + ${c} = 0):\n`;

        // Calcular el discriminante
        let discriminante = b * b - 4 * a * c;

        // Determinar el tipo de raíces y nombre del método
        let metodo, tipoRaices;
        if (discriminante > 0) {
            metodo = "Fórmula cuadrática";
            tipoRaices = "Dos raíces reales distintas";
            // Agregar pasos específicos para raíces reales distintas...
        } else if (discriminante === 0) {
            metodo = "Fórmula cuadrática";
            tipoRaices = "Raíces reales iguales";
            // Agregar pasos específicos para raíces reales iguales...
        } else {
            metodo = "Fórmula cuadrática";
            tipoRaices = "Raíces complejas conjugadas";
            // Agregar pasos específicos para raíces complejas conjugadas...
        }

        procedimiento += `Método utilizado: ${metodo}\n`;
        procedimiento += `Tipo de raíces: ${tipoRaices}\n`;

        // Retornar el procedimiento detallado
        return procedimiento;
    }

    // Obtener el procedimiento detallado para la ecuación diferencial
    let procedimiento = obtenerProcedimiento(a, b, c);

    // Mostrar el procedimiento en el formulario
    document.getElementById('metodo').value = procedimiento;

    // Resto de tu código para resolver la ecuación y mostrar los resultados...
}





