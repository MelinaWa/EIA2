"use strict";
var L_Endabgabe;
(function (L_Endabgabe) {
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            this.scale(length);
        }
        copy() {
            let vector = new Vector(this.x, this.y);
            return vector;
        }
        static getDifference(_vector0, _vector1) {
            return new Vector(_vector0.x - _vector0.y, _vector0.y - _vector1.y);
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
    }
    L_Endabgabe.Vector = Vector;
})(L_Endabgabe || (L_Endabgabe = {}));
//# sourceMappingURL=Vector.js.map