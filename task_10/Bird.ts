namespace L_Endabgabe {

    export enum TASK {
        FLY,
        FLYTOFOOD,
        EAT

    }

    export class Bird extends Moveable {

        public position: Vector;
        public velocity: Vector;
        private bodycolor: string;
        private hitsize: number;
        public target: Vector;
        public job: TASK;

        public constructor(_size: number, _position?: Vector) {


            super(_position);

            console.log("Bird constructor");


            this.position = new Vector(Math.random() * crc2.canvas.width, Math.floor(Math.random() * 400));


            this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2 + Math.random() - 2));

            this.bodycolor = getRandomColor();


        }


        public draw(): void {



            if (this.job == TASK.EAT) {
               
                setTimeout(() => {
                    this.job = TASK.FLY;
                    this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
                    
                }, 5000); 
            }

            //body
            crc2.save();
            crc2.translate(this.position.x, this.position.y);


            //backward
            if (this.velocity.x >= 0.1) {
                crc2.scale(-1, 1);
                
            }//forward
            if (this.velocity.x <= -0.1) {
                crc2.scale(1, 1);
                
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

                //bill
                crc2.beginPath();
                crc2.moveTo(-36, 10);
                crc2.lineTo(-50, 1);
                crc2.lineTo(-40, 17);
                crc2.fillStyle = "orange";
                crc2.fill();
                crc2.closePath();

                //body
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

                //bill
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

        public birdIsHit(_hotspot: Vector): boolean {
            this.hitsize = 40; 
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < this.hitsize && Math.abs(difference.y) < this.hitsize);
            


        }

        public isEating: Function = (): void => { // Sonderfall
            this.velocity = new Vector(0, 0);

        }
    }

    function getRandomColor(): string { 
        let sequence = '0123456789ABCDEF'.split('');
        let color: string = "#";
        for (let i = 0; i < 6; i++) {
            color += sequence[Math.round(Math.random() * 15)];
        }
        return color;



    }
}



