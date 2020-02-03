"use strict";
var L_10;
(function (L_10) {
    class Birdfood extends L_10.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Birdfood constructor");
            if (_position)
                this.position = new L_10.Vector(290, 540);
            /* if (_position)
                 this.position = _position;
             else
                 this.position = new Vector(1, 1);*/
            this.velocity = new L_10.Vector(0, Math.random() + 4);
            this.size = _size;
        }
        draw() {
            if (this.size >= 2) { // gibt die Größe an, auf die es schrumpfen soll
                this.size -= 0.1; // gibt an, um wie viel kleiner 
            }
            if (this.position.y < 400) {
                this.move(1);
                console.log("futter schwindet");
            }
            L_10.crc2.beginPath();
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.scale(this.size, this.size);
            L_10.crc2.arc(0, 0, this.size * 1, 0, 10 * Math.PI);
            L_10.crc2.fillStyle = "brown";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            // console.log(this.size);
        }
    }
    L_10.Birdfood = Birdfood;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Birdfood.js.map