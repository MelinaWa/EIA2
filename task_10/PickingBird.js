"use strict";
var L_10;
(function (L_10) {
    class PickingBird extends L_10.Moveable {
        constructor(_size, _position) {
            super(_position); // ruft die Position aus der Moveable auf - wieso?
            this.size = 2;
            console.log("picking Bird constructor");
            this.bodycolor = getRandomColor();
            this.billcolor = getRandomColor();
            if (_position)
                this.position = _position;
            else
                this.position = new L_10.Vector(Math.random() * L_10.crc2.canvas.width, Math.floor(Math.random() * 400));
            // Math Random für Verteilung Breite * Höhe Canvas, Wert (größten & aufgerundet) * random Nr *600 (Verteilung auf Höhe des Canvas)
            this.velocity = new L_10.Vector(Math.random() - 1 * 7, (Math.random() * 2 + Math.random() - 2));
            // -1 = vorwärts, 7 = Geschw. -2 und +2 (gehen langsam hoch und runter)
        }
        draw() {
            //birdhead
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.arc(-25, 20, 15, 0, 4 * Math.PI);
            L_10.crc2.fillStyle = "blue";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            //eye
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.arc(-30, 13, 3, 0, 2 * Math.PI);
            L_10.crc2.fillStyle = "#3673a4";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            //bill//Schnabel
            //body
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
            L_10.crc2.fillStyle = this.bodycolor;
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            //wings
        }
        isHit(_hotspot) {
            let hitsize = this.size * 20; // radius, indem sie getroffen werden
            let difference = new L_10.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
            //Entfernung vertikal & horizontal */
        }
    }
    L_10.PickingBird = PickingBird;
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=PickingBird.js.map