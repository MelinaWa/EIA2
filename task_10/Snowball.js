"use strict";
var L_10;
(function (L_10) {
    class Snowball {
        //radius: number;
        constructor(_size, _position) {
            // super(_position);
            this.position = _position;
            this.size = _size;
            //  this.radius = 10; 
            console.log("Snowball constructor");
        }
        draw() {
            //console.log("Snowflake draw"); 
            if (this.size > 0.2) {
                this.size -= 0.2;
            }
            L_10.crc2.beginPath();
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.scale(this.size, this.size);
            L_10.crc2.arc(0, 0, this.size * 4, 0, 10 * Math.PI);
            L_10.crc2.fillStyle = "white";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            // console.log(this.size);
        }
    }
    L_10.Snowball = Snowball;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Snowball.js.map