namespace L_10 {

    export class Snowball {
        position: Vector;
        velocity: Vector;
        size: number;
        //radius: number;
        

        constructor(_size: number, _position: Vector) {

            // super(_position);
            this.position = _position;
            this.size = _size;
          //  this.radius = 10; 
            console.log("Snowball constructor");

        }
        

        draw(): void {
            //console.log("Snowflake draw"); 
            if (this.size > 0.2) {
                this.size -= 0.2;

            }

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size * 4, 0, 10 * Math.PI); 
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            console.log(this.size);
            

        }


    }

}