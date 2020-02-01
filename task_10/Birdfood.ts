namespace L_10 {

    export class Birdfood {
        position: Vector;
        velocity: Vector;
        size: number;
       /* falldown: Vector;
        move: Vector; */

        

        constructor(_size: number, _position: Vector) {

            this.position = _position;
            this.size = _size;
            console.log("Birdfood constructor");
        
            
    }

        draw(): void {

            if (this.size >= 2) { // gibt die Größe an, auf die es schrumpfen soll
                this.size -= 0.1; // gibt an, um wie viel kleiner 

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
            console.log(this.size);


        }


        }
    }

