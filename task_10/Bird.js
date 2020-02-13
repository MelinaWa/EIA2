"use strict";
var L_Endabgabe;
(function (L_Endabgabe) {
    let TASK;
    (function (TASK) {
        TASK[TASK["FLY"] = 0] = "FLY";
        TASK[TASK["EAT"] = 1] = "EAT";
    })(TASK = L_Endabgabe.TASK || (L_Endabgabe.TASK = {}));
    class Bird extends L_Endabgabe.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.isEating = () => {
                this.velocity = new L_Endabgabe.Vector(0, 0);
            };
            console.log("Bird constructor");
            this.position = new L_Endabgabe.Vector(Math.random() * L_Endabgabe.crc2.canvas.width, Math.floor(Math.random() * 700));
            this.velocity = new L_Endabgabe.Vector(Math.random() - 1 * 5, (Math.random() * 2 + Math.random() - 2));
            this.bodycolor = getRandomColor();
        }
        draw() {
            if (this.job == TASK.EAT) {
                setTimeout(() => {
                    this.job = TASK.FLY;
                    this.velocity = new L_Endabgabe.Vector(Math.random() - 1 * 6, (Math.random() * 2) + Math.random() - 2);
                }, 6000);
            }
            //body
            L_Endabgabe.crc2.save();
            L_Endabgabe.crc2.translate(this.position.x, this.position.y);
            //backward
            if (this.velocity.x >= 0.1) {
                L_Endabgabe.crc2.scale(-1, 1);
            } //forward
            if (this.velocity.x <= -0.1) {
                L_Endabgabe.crc2.scale(1, 1);
            }
            if (this.job != TASK.EAT) {
                //birdhead
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.arc(-25, 20, 15, 0, 2 * Math.PI);
                L_Endabgabe.crc2.fillStyle = "#af8a54";
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.arc(-30, 13, 3, 0, 2 * Math.PI);
                L_Endabgabe.crc2.fillStyle = "#3673a4";
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                //bill
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.moveTo(-36, 10);
                L_Endabgabe.crc2.lineTo(-50, 1);
                L_Endabgabe.crc2.lineTo(-40, 17);
                L_Endabgabe.crc2.fillStyle = "orange";
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                //body
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
                L_Endabgabe.crc2.fillStyle = this.bodycolor;
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.moveTo(15, 20);
                L_Endabgabe.crc2.lineTo(-15, 20);
                L_Endabgabe.crc2.lineTo(-2, 50);
                L_Endabgabe.crc2.fillStyle = "#af8a54";
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
            }
            if (this.job == TASK.EAT) {
                //bill
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.moveTo(-65, 38);
                L_Endabgabe.crc2.lineTo(-55, 22);
                L_Endabgabe.crc2.lineTo(-50, 28);
                L_Endabgabe.crc2.fillStyle = "orange";
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                //birdhead
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.arc(-40, 20, 15, 0, 2 * Math.PI);
                L_Endabgabe.crc2.fillStyle = "#af8a54";
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                //eye
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.arc(-45, 13, 3, 0, 2 * Math.PI);
                L_Endabgabe.crc2.fillStyle = "#3673a4";
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                //body
                L_Endabgabe.crc2.closePath();
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.ellipse(0, 30, 30, 15, Math.PI / 10, 0, 2 * Math.PI);
                L_Endabgabe.crc2.fillStyle = this.bodycolor;
                L_Endabgabe.crc2.fill();
                L_Endabgabe.crc2.closePath();
                //legs 
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.moveTo(-10, 42);
                L_Endabgabe.crc2.lineTo(-10, 65);
                L_Endabgabe.crc2.lineWidth = 3;
                L_Endabgabe.crc2.strokeStyle = "#af8a54";
                L_Endabgabe.crc2.stroke();
                L_Endabgabe.crc2.closePath();
                L_Endabgabe.crc2.beginPath();
                L_Endabgabe.crc2.moveTo(5, 46);
                L_Endabgabe.crc2.lineTo(5, 65);
                L_Endabgabe.crc2.lineWidth = 3;
                L_Endabgabe.crc2.strokeStyle = "#af8a54";
                L_Endabgabe.crc2.stroke();
                L_Endabgabe.crc2.closePath();
            }
            L_Endabgabe.crc2.restore();
        }
        birdIsHit(_hotspot) {
            this.hitsize = 40;
            let difference = new L_Endabgabe.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < this.hitsize && Math.abs(difference.y) < this.hitsize);
        }
    }
    L_Endabgabe.Bird = Bird;
    function getRandomColor() {
        let sequence = '0123456789ABCDEF'.split('');
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += sequence[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L_Endabgabe || (L_Endabgabe = {}));
//# sourceMappingURL=Bird.js.map