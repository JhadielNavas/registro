import CL_Participante from "./CL_Participante.js";
import CL_Juego from "./CL_Juego.js";

let participante1 = new CL_Participante("Juan", 1, 5, 2);
let participante2 = new CL_Participante("Jose", 12, 1, 1);
let participante3 = new CL_Participante("Rosa", 10, 9, 8);

let juego = new CL_Juego();
juego.procesarParticipante(participante1);
juego.procesarParticipante(participante2); 
juego.procesarParticipante(participante3);

let salida = document.getElementById("salida");
salida.innerHTML = "RESULTADOS";
salida.innerHTML += "<br> El participante Juan tiene una puntuacion de: " +participante1.calcular_Total_P();
salida.innerHTML += "<br> El participante Jose tiene una puntuacion de: " +participante2.calcular_Total_P();
salida.innerHTML += "<br> La participante Rosa tiene una puntuacion de: " +participante3.calcular_Total_P();
salida.innerHTML += "<br> <br>";
salida.innerHTML += "<br>Nombre del ganador o ganadora: " +juego.mostrarNombre();
salida.innerHTML += "<br>Porcentaje de jugadores con menos de 10 puntos: " +juego.porcentaje_M_P();"%"