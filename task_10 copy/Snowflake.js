"use strict";
var L_Endabgabe;
(function (L_Endabgabe) {
    class Snowflake extends L_Endabgabe.Moveable {
        constructor(_size, _position) {
            super(_position);
            //if (_position)
            //    this.position = _position;
            this.position = new L_Endabgabe.Vector(Math.random() * L_Endabgabe.crc2.canvas.width, Math.random() * L_Endabgabe.crc2.canvas.height);
            this.velocity = new L_Endabgabe.Vector(1, Math.random() + 1 * 1);
            this.size = _size;
        }
        draw() {
            L_Endabgabe.crc2.beginPath();
            L_Endabgabe.crc2.save();
            L_Endabgabe.crc2.translate(this.position.x, this.position.y);
            L_Endabgabe.crc2.scale(this.size, this.size);
            L_Endabgabe.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            L_Endabgabe.crc2.fillStyle = "white";
            L_Endabgabe.crc2.fill();
            L_Endabgabe.crc2.restore();
            L_Endabgabe.crc2.closePath();
        }
    }
    L_Endabgabe.Snowflake = Snowflake;
})(L_Endabgabe || (L_Endabgabe = {}));
//# sourceMappingURL=Snowflake.js.map