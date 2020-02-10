namespace L_10 {

    export class Birdfood extends Moveable { //weil die move hier drin ist 
        public position: Vector;
        public velocity: Vector;
        public size: number;
        public foodPosition: number;


        public constructor(_size: number, _position: Vector) {

            super(_position)

            console.log("Birdfood constructor");


            // this.position = _position;
            this.velocity = new Vector(0, Math.random() + 10);
            this.size = _size;
            this.foodPosition = Math.floor(Math.random() * (400 - 600 + 1) + 400);



        }


        public draw(): void { //public, wird im Main aufgerufen


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
