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
                this.velocity = new Vector(0, 0);
            };
            console.log("Bird constructor");
            // if (_position)
            //     this.position = _position;
            this.position = new Vector(Math.random() * crc2.canvas.width, Math.floor(Math.random() * 400));
            // Math Random für Verteilung Breite * Höhe Canvas, Wert (größten & aufgerundet) * random Nr *600 (Verteilung auf Höhe des Canvas)
            this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2 + Math.random() - 2));
            // -1 = vorwärts, 7 = Geschw. -2 und +2 (gehen langsam hoch und runter)
            this.bodycolor = getRandomColor();
        }
        draw() {
            if (this.job == TASK.EAT) {
                //console.log("EAT");
                setTimeout(() => {
                    this.job = TASK.FLY;
                    this.velocity = new Vector(Math.random() - 1 * 6, (Math.random() * 2) + Math.random() - 1);
                    //console.log("FLYYYYAWAAYYYY");
                }, 5000); // anonyme Funktion, die auf das setTimeout zugreift
            }
            //body
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            if (this.velocity.x >= 0.1) {
                crc2.scale(-1, 1);
                //console.log("Rückwärts");
            }
            if (this.velocity.x <= -0.1) {
                crc2.scale(1, 1);
                //console.log("Vorwärts");
            }
            if (this.job != TASK.EAT) {
                //birdhead
                crc2.beginPath();
                crc2.arc(-25, 20, 15, 0, 2 * Math.PI);
                crc2.fillStyle = "#af8a54";
                crc2.fill();
                crc2.closePath();
                crc2.beginPath();
                crc2.arc(-30, 13, 3, 0, 2 * Math.PI);
                crc2.fillStyle = "#3673a4";
                crc2.fill();
                crc2.closePath();
                //bill//Schnabel
                crc2.beginPath();
                crc2.moveTo(-36, 10);
                crc2.lineTo(-50, 1);
                crc2.lineTo(-40, 17);
                crc2.fillStyle = "orange";
                crc2.fill();
                crc2.closePath();
                crc2.beginPath();
                crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
                crc2.fillStyle = this.bodycolor;
                crc2.fill();
                crc2.closePath();
                crc2.beginPath();
                crc2.moveTo(15, 20);
                crc2.lineTo(-15, 20);
                crc2.lineTo(-2, 50);
                crc2.fillStyle = "#af8a54";
                crc2.fill();
                crc2.closePath();
            }
            if (this.job == TASK.EAT) {
                //Schnabel
                crc2.beginPath();
                crc2.moveTo(-65, 38);
                crc2.lineTo(-55, 22);
                crc2.lineTo(-50, 28);
                crc2.fillStyle = "orange";
                crc2.fill();
                crc2.closePath();
                //birdhead
                crc2.beginPath();
                crc2.arc(-40, 20, 15, 0, 2 * Math.PI);
                crc2.fillStyle = "#af8a54";
                crc2.fill();
                crc2.closePath();
                //eye
                crc2.beginPath();
                crc2.arc(-45, 13, 3, 0, 2 * Math.PI);
                crc2.fillStyle = "#3673a4";
                crc2.fill();
                crc2.closePath();
                //body
                crc2.closePath();
                crc2.beginPath();
                crc2.ellipse(0, 30, 30, 15, Math.PI / 10, 0, 2 * Math.PI);
                crc2.fillStyle = this.bodycolor;
                crc2.fill();
                crc2.closePath();
                //wings
                /* crc2.beginPath();
                 crc2.moveTo(15, 20);
                 crc2.lineTo(-15, 15);
                 crc2.lineTo(-2, 50);
                 crc2.fillStyle = "#af8a54";
                 crc2.fill();
                 crc2.closePath(); */
                //legs 
                crc2.beginPath();
                crc2.moveTo(-10, 42);
                crc2.lineTo(-10, 65);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "#af8a54";
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.moveTo(5, 46);
                crc2.lineTo(5, 65);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "#af8a54";
                crc2.stroke();
                crc2.closePath();
            }
            crc2.restore();
        }
        birdIsHit(_hotspot) {
            this.hitsize = 40; // radius, indem sie getroffen werden
            let difference = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
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