namespace L_Endabgabe {

    export class Birdfood extends Moveable {
        public position: Vector;
        public velocity: Vector;
        public size: number;
        public foodPosition: number;


        public constructor(_size: number, _position: Vector) {

            super(_position)

            console.log("Birdfood constructor");

            this.velocity = new Vector(0, Math.random() + 10);
            this.size = _size;
            this.foodPosition = Math.floor(Math.random() * (500 - 700 - 1) + 500);

        }


        public draw(): void {


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size * 3, 0, 10 * Math.PI);
            crc2.fillStyle = "#ead2bf";
            crc2.fill();

            crc2.restore();
            crc2.closePath();



        }



    }
}
