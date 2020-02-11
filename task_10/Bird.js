"use strict";
var L_10;
(function (L_10) {
    let TASK;
    (function (TASK) {
        TASK[TASK["FLY"] = 0] = "FLY";
        TASK[TASK["FLYTOFOOD"] = 1] = "FLYTOFOOD";
        TASK[TASK["EAT"] = 2] = "EAT";
    })(TASK = L_10.TASK || (L_10.TASK = {}));
    class Bird extends L_10.Moveable {
        constructor(_size, _position) {
            super(_position); // ruft die Position aus der Moveable auf
            this.isEating = () => {
                this.velocity = new L_10.Vector(0, 0);
            };
            console.log("Bird constructor");
            // if (_position)
            //     this.position = _position;
            this.position = new L_10.Vector(Math.random() * L_10.crc2.canvas.width, Math.floor(Math.random() * 400));
            // Math Random für Verteilung Breite * Höhe Canvas, Wert (größten & aufgerundet) * random Nr *600 (Verteilung auf Höhe des Canvas)
            this.velocity = new L_10.Vector(Math.random() - 1 * 5, (Math.random() * 2 + Math.random() - 2));
            // -1 = vorwärts, 7 = Geschw. -2 und +2 (gehen langsam hoch und runter)
            this.bodycolor = getRandomColor();
        }
        draw() {
            if (this.job == TASK.EAT) {
                //console.log("EAT");
                setTimeout(() => {
                    this.job = TASK.FLY;
                    this.velocity = new L_10.Vector(Math.random() - 1 * 6, (Math.random() * 2) + Math.random() - 1);
                    //console.log("FLYYYYAWAAYYYY");
                }, 5000); // anonyme Funktion, die auf das setTimeout zugreift
            }
            //body
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            if (this.velocity.x >= 0.1) {
                L_10.crc2.scale(-1, 1);
                //console.log("Rückwärts");
            }
            if (this.velocity.x <= -0.1) {
                L_10.crc2.scale(1, 1);
                //console.log("Vorwärts");
            }
            if (this.job != TASK.EAT) {
                //birdhead
                L_10.crc2.beginPath();
                L_10.crc2.arc(-25, 20, 15, 0, 2 * Math.PI);
                L_10.crc2.fillStyle = "#af8a54";
                L_10.crc2.fill();
                L_10.crc2.closePath();
                L_10.crc2.beginPath();
                L_10.crc2.arc(-30, 13, 3, 0, 2 * Math.PI);
                L_10.crc2.fillStyle = "#3673a4";
                L_10.crc2.fill();
                L_10.crc2.closePath();
                //bill//Schnabel
                L_10.crc2.beginPath();
                L_10.crc2.moveTo(-36, 10);
                L_10.crc2.lineTo(-50, 1);
                L_10.crc2.lineTo(-40, 17);
                L_10.crc2.fillStyle = "orange";
                L_10.crc2.fill();
                L_10.crc2.closePath();
                L_10.crc2.beginPath();
                L_10.crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
                L_10.crc2.fillStyle = this.bodycolor;
                L_10.crc2.fill();
                L_10.crc2.closePath();
                L_10.crc2.beginPath();
                L_10.crc2.moveTo(15, 20);
                L_10.crc2.lineTo(-15, 20);
                L_10.crc2.lineTo(-2, 50);
                L_10.crc2.fillStyle = "#af8a54";
                L_10.crc2.fill();
                L_10.crc2.closePath();
            }
            if (this.job == TASK.EAT) {
                //Schnabel
                L_10.crc2.beginPath();
                L_10.crc2.moveTo(-65, 38);
                L_10.crc2.lineTo(-55, 22);
                L_10.crc2.lineTo(-50, 28);
                L_10.crc2.fillStyle = "orange";
                L_10.crc2.fill();
                L_10.crc2.closePath();
                //birdhead
                L_10.crc2.beginPath();
                L_10.crc2.arc(-40, 20, 15, 0, 2 * Math.PI);
                L_10.crc2.fillStyle = "#af8a54";
                L_10.crc2.fill();
                L_10.crc2.closePath();
                //eye
                L_10.crc2.beginPath();
                L_10.crc2.arc(-45, 13, 3, 0, 2 * Math.PI);
                L_10.crc2.fillStyle = "#3673a4";
                L_10.crc2.fill();
                L_10.crc2.closePath();
                //body
                L_10.crc2.closePath();
                L_10.crc2.beginPath();
                L_10.crc2.ellipse(0, 30, 30, 15, Math.PI / 10, 0, 2 * Math.PI);
                L_10.crc2.fillStyle = this.bodycolor;
                L_10.crc2.fill();
                L_10.crc2.closePath();
                //wings
                /* crc2.beginPath();
                 crc2.moveTo(15, 20);
                 crc2.lineTo(-15, 15);
                 crc2.lineTo(-2, 50);
                 crc2.fillStyle = "#af8a54";
                 crc2.fill();
                 crc2.closePath(); */
                //legs 
                L_10.crc2.beginPath();
                L_10.crc2.moveTo(-10, 42);
                L_10.crc2.lineTo(-10, 65);
                L_10.crc2.lineWidth = 3;
                L_10.crc2.strokeStyle = "#af8a54";
                L_10.crc2.stroke();
                L_10.crc2.closePath();
                L_10.crc2.beginPath();
                L_10.crc2.moveTo(5, 46);
                L_10.crc2.lineTo(5, 65);
                L_10.crc2.lineWidth = 3;
                L_10.crc2.strokeStyle = "#af8a54";
                L_10.crc2.stroke();
                L_10.crc2.closePath();
            }
            L_10.crc2.restore();
        }
        birdIsHit(_hotspot) {
            this.hitsize = 40; // radius, indem sie getroffen werden
            let difference = new L_10.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < this.hitsize && Math.abs(difference.y) < this.hitsize);
            //Entfernung vertikal & horizontal Differenzvektor*/
            // absoluter Wert (Betrag) Entfernung
        }
    }
    L_10.Bird = Bird;
    function getRandomColor() {
        let sequence = '0123456789ABCDEF'.split('');
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += sequence[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Bird.js.map