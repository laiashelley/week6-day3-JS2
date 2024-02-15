// 2 - CINCO COLORES

// Se le pide al usuario que escoja un color (azul, verde, rojo, amarillo y violeta) y darle una respuesta en relación al color elegido. Ejemplo: "el azul es como el mar, siempre que el cielo sea azul (y sea de día)". Dar otra respuesta en el caso que NO elija ninguno de los colores anteriores.

let color = prompt("Dime un color:");

if (color == "azul") {
    document.write("En la vida, como en el cielo, el azul siempre trae consuelo.");
} else if (color == "verde") {
    document.write("En el campo verde, el alma se concede.");
} else if (color == "rojo") {
    document.write("En el amor, el corazón se viste de rojo.");
} else if (color == "amarillo") {
    document.write("Con amarillo en el camino, la alegría es nuestro destino.");
} else if (color == "violeta") {
    document.write("Entre lo oscuro, el violeta brilla con su encanto puro.");
} else {
    document.write("No se ningún refran con este color. Introduce otro.");
}

// === En JavaScript, el operador === se utiliza para comparar dos valores sin realizar coerción de tipo. Esto significa que no solo compara los valores, sino también los tipos de datos. Solo devolverá true si ambos valores son iguales en valor y en tipo.

// para hacer refresh sin tener que actualizar:

function mostrarPrompt() {
    location.reload();
}