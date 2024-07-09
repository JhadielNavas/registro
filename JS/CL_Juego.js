import CL_Participante from "./CL_Participante.js";
export default class CL_Juego {
    constructor(){
        this.acum_P = 0;
        this.cont_M_P = 0;
        this.mayor = 0;
        this.aux_Nombre = "";
    }

    procesarParticipante(participante){

        //NOMBRE DEL PARTICIPANTE GANADOR 2

        if (participante.calcular_Total_P() > this.mayor ){

            this.mayor = participante.calcular_Total_P();
            this.aux_Nombre = participante.nombre;
        }

        //CONTAR JUGADORES CON PUNTOS MENORES A 10

        if(participante.calcular_Total_P() < 10){
            this.cont_M_P = this.cont_M_P + 1;
        }
    }

    porcentaje_M_P(){
        return ((this.cont_M_P * 100 ) / 3).toFixed(2)+"%";
    }
    mostrarNombre(){
        return this.aux_Nombre;
    }
}