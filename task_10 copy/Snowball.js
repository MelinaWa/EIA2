"use strict";
var L_Endabgabe;
(function (L_Endabgabe) {
    class Snowball /*extends Moveable*/ {
        constructor(_size, _position) {
            // super(new Vector());
            (_position);
            this.position = _position;
            this.size = _size;
            console.log("Snowball constructor");
        }
        draw() {
            //console.log("Snowflake draw"); 
            L_Endabgabe.crc2.beginPath();
            L_Endabgabe.crc2.save();
            L_Endabgabe.crc2.translate(this.position.x, this.position.y);
            L_Endabgabe.crc2.scale(this.size, this.size);
            L_Endabgabe.crc2.arc(0, 0, this.size * 4, 0, 10 * Math.PI);
            L_Endabgabe.crc2.fillStyle = "white";
            L_Endabgabe.crc2.fill();
            L_Endabgabe.crc2.restore();
            L_Endabgabe.crc2.closePath();
            // console.log(this.size);
        }
    }
    L_Endabgabe.Snowball = Snowball;
})(L_Endabgabe || (L_Endabgabe = {}));
//# sourceMappingURL=Snowball.js.map