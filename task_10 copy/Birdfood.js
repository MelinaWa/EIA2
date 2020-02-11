"use strict";
var L_Endabgabe;
(function (L_Endabgabe) {
    class Birdfood extends L_Endabgabe.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Birdfood constructor");
            this.velocity = new L_Endabgabe.Vector(0, Math.random() + 10);
            this.size = _size;
            this.foodPosition = Math.floor(Math.random() * (400 - 600 + 1) + 400);
        }
        draw() {
            L_Endabgabe.crc2.beginPath();
            L_Endabgabe.crc2.save();
            L_Endabgabe.crc2.translate(this.position.x, this.position.y);
            L_Endabgabe.crc2.scale(this.size, this.size);
            L_Endabgabe.crc2.arc(0, 0, this.size * 3, 0, 10 * Math.PI);
            L_Endabgabe.crc2.fillStyle = "#ead2bf";
            L_Endabgabe.crc2.fill();
            L_Endabgabe.crc2.restore();
            L_Endabgabe.crc2.closePath();
        }
    }
    L_Endabgabe.Birdfood = Birdfood;
})(L_Endabgabe || (L_Endabgabe = {}));
//# sourceMappingURL=Birdfood.js.map