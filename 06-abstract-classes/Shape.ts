export abstract class Shape {

    protected constructor(private _theX: number, private _theY: number) {}

    get theX(): number {
        return this._theX;
    }

    set theX(value: number) {
        this._theX = value;
    }

    get theY(): number {
        return this._theY;
    }

    set theY(value: number) {
        this._theY = value;
    }

    getInfo(): string {
        return `x=${this._theX}, y=${this.theY}`;
    }

    abstract calculateArea() : number;
}