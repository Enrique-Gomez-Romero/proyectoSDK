class Sudoku{
    
    constructor(nombre,vidas){
        this.nombre = nombre;
        this.filaX;
        this.columnaY;
        this.numeroIngresado;
        this.vidas = vidas;
        this.puntaje;
        this.tablero = [            
        [7,8,5,1,9,2,4,3,6],
        [1,3,9,4,5,6,8,7,2],
        [4,2,6,7,3,8,5,1,9],
        [6,5,8,3,4,9,7,2,1],
        [9,1,4,2,7,5,3,6,8],
        [3,7,2,8,6,1,9,4,5],
        [8,6,7,5,1,3,2,9,4],
        [5,9,3,6,2,4,1,8,7],
        [2,4,1,9,8,7,6,0,0]

        //Tablero para Jugar Bien
/*      [7,8,0,1,0,2,4,3,6],
        [1,0,9,4,5,6,0,7,2],
        [0,2,6,7,3,8,0,1,9],
        [0,5,0,0,0,9,7,2,1],
        [0,1,4,0,7,5,3,6,8],
        [3,7,2,8,6,1,9,0,0],
        [8,0,7,5,1,3,2,0,4],
        [5,0,3,0,0,0,1,0,0],
        [2,0,1,9,0,7,0,5,3] */

        ];
        
        this.tableroGanador = [
            [7,8,5,1,9,2,4,3,6],
            [1,3,9,4,5,6,8,7,2],
            [4,2,6,7,3,8,5,1,9],
            [6,5,8,3,4,9,7,2,1],
            [9,1,4,2,7,5,3,6,8],
            [3,7,2,8,6,1,9,4,5],
            [8,6,7,5,1,3,2,9,4],
            [5,9,3,6,2,4,1,8,7],
            [2,4,1,9,8,7,6,5,3]
        ];
    }

    imprimirTablero(){
        console.log("Tu Tablero: "+this.nombre);
        console.table(this.tablero);
    }

    tirar(){
        do {
            this.imprimirTablero();
            let verificarExistencia = true;
            let verificar = true;
            this.suma = 0;
            this.numeroIngresado = parseInt(prompt("Ingrese el valor que desea ingresar"));
            this.filaX = prompt("Ingrese en que fila gusta ingresar");
            this.columnaY = prompt("Ingrese en que columna ingresar");
            //Verificar si existe un Numero donde quieres Ingresar el Numero
            for(let i = 1; i <= 9; i++){
                if(this.tablero[this.filaX][this.columnaY] == i){
                    console.log("primer: Ya Existe un Numero en las Cordenadas "+this.filaX+" "+this.columnaY);
                    verificarExistencia = false;
                }
            }
            if(verificarExistencia == true){
                //verificar que no se repitan los numeros en la fila y columna
                    for(let i = 0; i < 9; i++){
                        if(this.numeroIngresado == this.tableroGanador[this.filaX][this.columnaY]){
                            verificar = false;
                        }
                    } 
                
                if(verificar == true){
                    this.vidas--;
                    console.log("Respuesta Incorrecta , !!Pierdes una vida!! "+"\n"+"Vidas Restantes: "+this.vidas);

                }else{
                    console.log("Respuesta Correcta");
                    this.tablero[this.filaX][this.columnaY] = this.numeroIngresado;
                }
    
                for(let i = 0; i < 9; i++){
                    for(let j = 0; j < 9; j++){
                        this.suma += this.tablero[i][j];
                    }
                }
                //console.log("Suma: " + suma);
                //validacion de que no se repitan los numeros en la matriz
                if(this.vidas == 0){
                    console.log("Perdiste");
                }else if(this.suma == 405){
                    console.log("Ganaste");
                }
            }
        } while (this.suma != 405 && this.vidas != 0);
    }

}  