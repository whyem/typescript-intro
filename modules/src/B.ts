module Merged {
    const name = 'Archivo B';
     /**
     * Car
     */
    export class Car {
        constructor(public distance:number = 0) {
            
        }
        move(): void {
            this.distance += 1; 
        }
    }
}