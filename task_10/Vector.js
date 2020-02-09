"use strict";
var L_10;
(function (L_10) {
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
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            // neue Positionsobjekte bewegen sich unabh. voneinander
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
    L_10.Vector = Vector;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Vector.js.map