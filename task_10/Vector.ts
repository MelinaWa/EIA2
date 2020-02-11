namespace L_Endabgabe {
    export class Vector {
        public x: number;
        public y: number;


        public constructor(_x: number = 0, _y: number = 0) {
            this.set(_x, _y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        public copy(): Vector {
            let vector: Vector = new Vector(this.x, this.y);
            return vector;
        }

        public static getDifference(_vector0: Vector, _vector1: Vector): Vector {
            return new Vector(_vector0.x - _vector0.y, _vector0.y - _vector1.y);
        }
    
        public get length (): number { 
            return Math.hypot(this.x, this.y);
        }


    }

}