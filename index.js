/*1- Calcular e informar un sueldo sabiendo que:

La categoria define el sueldo basico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
Ambos datos son ingresados por el usuario
3- Informar dentro de que rango esta el sueldo:

Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
Rango intermedio: entre u$s 3001 y u$s 4000 inclusive
Rango avanzado: si supera los u$s 4000 */

const categoria = parseInt(prompt("Ingrese la categoría (1, 2 ó 3)"));
if (categoria != 1 && categoria != 2 && categoria != 3) {
    alert("Ingresó una categoría incorrecta");
}

const subcategoria = prompt("Ingrese la subcategoría (A, B ó C)");
if (subcategoria != "a" && subcategoria != "A" && subcategoria != "b" && subcategoria != "B" && subcategoria != "c" && subcategoria != "C") {
    alert("Ingresó una subcategoría incorrecta");
}

let sueldo;

const multiplicadorA = 1.5;
const multiplicadorB = 2;
const multiplicadorC = 2.5;


if (categoria == 1) {
    sueldo = 1000;
} else if (categoria == 2) {
    sueldo = 1500;
} else {
    sueldo = 2000;
}

if (subcategoria == "A" || subcategoria == "a") {
    sueldo = sueldo * multiplicadorA;
} else if (subcategoria == "B" || subcategoria == "b") {
    sueldo = sueldo * multiplicadorB;
} else {
    sueldo = sueldo * multiplicadorC;
}

if (sueldo <= 3000) {
    alert("Su sueldo es de USD " + sueldo + " y se encuentra en el Rango Inicial");
} else if (sueldo == 3001 && sueldo <= 4000){
    alert("Su sueldo es de USD " + sueldo + " y se encuentra en el Rango Intermedio");
} else {
    alert("Su sueldo es de USD " + sueldo + " y se encuentra en el Rango Avanzado");
}

