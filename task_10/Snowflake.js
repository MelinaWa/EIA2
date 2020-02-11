"use strict";
var L_10;
(function (L_10) {
    class Snowflake extends L_10.Moveable {
        constructor(_size, _position) {
            super(_position);
            //if (_position)
            //    this.position = _position;
            this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
            this.velocity = new Vector(1, Math.random() + 1 * 1);
            this.size = _size;
        }
        draw() {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
    L_10.Snowflake = Snowflake;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Snowflake.js.map