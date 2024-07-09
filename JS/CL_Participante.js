export default class CL_Participante{
    constructor (nombre, numero_1, numero_2, numero_3){
        this.nombre = nombre;
        this.numero_1 = numero_1;
        this.numero_2 = numero_2;
        this.numero_3 = numero_3;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set numero_1(numero_1){
        this._numero_1 = numero_1;
    }
    get numero_1(){
        return this._numero_1; 
    }
    set numero_2(numero_2){
        this._numero_2 = numero_2;
    }
    get numero_2(){
        return this._numero_2;
    }
    set numero_3(numero_3){
        this._numero_3 = numero_3;
    }
    get numero_3(){
        return this._numero_3;
    }

    calcular_Total_P(){
        return this.numero_1 + this.numero_2 + this.numero_3;
    }

    }
