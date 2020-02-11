"use strict";
var L_10;
(function (L_10) {
    class Birdfood extends L_10.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Birdfood constructor");
            // this.position = _position;
            this.velocity = new Vector(0, Math.random() + 10);
            this.size = _size;
            this.foodPosition = Math.floor(Math.random() * (400 - 600 + 1) + 400);
        }
        draw() {
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
    L_10.Birdfood = Birdfood;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Birdfood.js.map