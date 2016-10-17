module Merged {
    const name = 'Archivo A';
    export class Door {
        constructor(private _color: string = 'White') {
        }
        get color(): string {
            return this._color;
        }
        set color(newColor: string) {
            this._color = newColor;
        }
    }
}