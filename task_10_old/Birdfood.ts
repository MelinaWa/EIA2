namespace L_10 {

    export class Birdfood extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position: Vector) {

            super(_position)

            console.log("Birdfood constructor");

            if (_position)
            this.position = new Vector (290, 540);

           /* if (_position)
                this.position = _position;
            else
                this.position = new Vector(1, 1);*/

            this.velocity = new Vector(0, Math.random() + 4);

            this.size = _size;

        }

        draw(): void {

            if (this.size >= 2) { // gibt die Größe an, auf die es schrumpfen soll
                this.size -= 0.1; // gibt an, um wie viel kleiner 
            }

            if (this.position.y < 400) {            
            this.move(1);
            console.log("futter schwindet")
            
            }


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size * 1, 0, 10 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            // console.log(this.size);


        }



    }
}

