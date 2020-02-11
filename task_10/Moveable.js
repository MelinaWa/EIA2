"use strict";
var L_Endabgabe;
(function (L_Endabgabe) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L_Endabgabe.Vector();
            this.velocity = new L_Endabgabe.Vector();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            this.position.add(offset);
            if (this.position.x < -50)
                this.position.x += L_Endabgabe.crc2.canvas.width + 50;
            if (this.position.y < -50)
                this.position.y += L_Endabgabe.crc2.canvas.height + 50;
            if (this.position.x > L_Endabgabe.crc2.canvas.width)
                this.position.x -= L_Endabgabe.crc2.canvas.width;
            if (this.position.y > L_Endabgabe.crc2.canvas.height)
                this.position.y -= L_Endabgabe.crc2.canvas.height;
        }
    }
    L_Endabgabe.Moveable = Moveable;
})(L_Endabgabe || (L_Endabgabe = {}));
//# sourceMappingURL=Moveable.js.map