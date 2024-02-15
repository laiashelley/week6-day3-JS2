// 3- LAMPARA NO ENCIENDE

// Crear el código con condicionales para el algoritmo representado por el siguiente diagrama de flujo: Hacer 2 preguntas prompt (si/no). Se puede anidar dos condicionales (uno dentro de otro). Crear el código con condicionales para el algoritmo representado por el siguiente diagrama de flujo:

let enchufada = prompt("esta enchufada? (si/no)");
let foco;

if (enchufada == "no"){
    document.write("Enchufala");
} else if (enchufada == "si"){
    foco = prompt("esta el foco quemado?");
} if (foco == "si"){
    document.write("reemplaza el foco");
} else if (foco == "no"){
    document.write("compra nueva lampara")
}

