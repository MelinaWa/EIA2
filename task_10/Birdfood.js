"use strict";
var L_10;
(function (L_10) {
    class Birdfood extends L_10.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Birdfood constructor");
            // this.position = _position;
            this.velocity = new L_10.Vector(0, Math.random() + 10);
            this.size = _size;
            this.foodPosition = Math.floor(Math.random() * (400 - 600 + 1) + 400);
        }
        draw() {
            L_10.crc2.beginPath();
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.scale(this.size, this.size);
            L_10.crc2.arc(0, 0, this.size * 3, 0, 10 * Math.PI);
            L_10.crc2.fillStyle = "#ead2bf";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
        }
    }
    L_10.Birdfood = Birdfood;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Birdfood.js.map