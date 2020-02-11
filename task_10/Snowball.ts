namespace L_Endabgabe {

    export class Snowball{

        public position: Vector;
        public size: number;

        public constructor(_size: number, _position: Vector) {

            (_position)
            this.position = _position;
            this.size = _size;
            
            console.log("Snowball constructor");

        }
        
        public draw(): void {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size * 4, 0, 10 * Math.PI); 
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            

        }


    }

}