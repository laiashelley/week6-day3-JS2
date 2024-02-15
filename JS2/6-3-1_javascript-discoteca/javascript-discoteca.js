// 1- ENTRADA DISCOTECA

// A la entrada a una discoteca, se pregunta al cliente qué edad tiene. Darle una respuesta diferente si la edad es mayor, menor o igual a 18 años.

let edad = parseInt(prompt("Introduce tu edad"));

if (edad < 18){
    document.write("Gandalf dice que no puedes pasar!!!!");
} else if (edad >= 18){
    document.write("Puedes pasar.")
} else {
    document.write("No te he entendido, ¿qué pone en tu DNI?");
}

