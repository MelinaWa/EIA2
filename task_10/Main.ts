namespace L_10 {

    window.addEventListener("load", start);


    // window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let serveradress: string = "https://eia2melina.herokuapp.com/";

    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    let snowball: Snowball;
    let birdfood: Birdfood;
    let fps: number = 20;
    let score: number = 500;
    //let startbutton: HTMLButtonElement;

    // function handleLoad(_event: Event): void {


    function start(_event: Event): void {

        document.getElementById("Endscreen").style.display = "none";
        document.getElementById("Game").style.display = "none";

        let startbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        startbutton.addEventListener("click", handleLoad);
        console.log("startbutton");
    }


    async function handleLoad(_event: Event): Promise<void> {

        console.log("hallo");

        document.getElementById("Startscreen").style.display = "none";
        document.getElementById("Endscreen").style.display = "none";
        document.getElementById("Game").style.display = "initial";


        console.log("starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleClickRight);

        let highscorebutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highscorelistbutton");
        highscorebutton.addEventListener("click", gethighscorelist);
        
        document.getElementById("highscorelist").addEventListener("click", gethighscorelist);




        for (let i: number = 0; i < 1; i++) {
            let bird: Bird = new Bird(2);
            birdArray.push(bird);
        }

        for (let u: number = 0; u < 120; u++) {
            let snowflake: Snowflake = new Snowflake(1.5);
            snowflakeArray.push(snowflake);

        }

        image = crc2.getImageData(0, 0, 1320, 725);
        window.setInterval(update, 20);

        function update(): void {

            crc2.putImageData(image, 0, 0);


            for (let i: number = 0; i < birdArray.length; i++) {
                birdArray[i].draw();
                birdArray[i].move(1);
            }

            for (let u: number = 0; u < snowflakeArray.length; u++) {
                snowflakeArray[u].draw();
                snowflakeArray[u].move(1);
            }

            if (snowball) {
                snowball.draw();
                if (snowball.size >= 0.2)
                    snowball.size -= 0.2;
            }



            if (birdfood) {
                birdfood.draw();
                if (birdfood.size >= 2)   // gibt die Größe an, auf die es schrumpfen soll
                    birdfood.size -= 0.2; // gibt an, um wie viel kleiner 

                if (birdfood.size <= 2 && birdfood.size >= 0.005)
                    birdfood.size -= 0.005;
                if (birdfood.position.y < birdfood.foodPosition) {
                    birdfood.move(1);

                }


            }



        }
    }

    let interval: number = window.setInterval(createScore, 1000);

    function createScore(): void {
        score--;
        console.log(score);
    }

    function handleClickRight(_event: MouseEvent): void {


        console.log(_event);
        let birdfoodVector: Vector = new Vector(_event.offsetX, _event.offsetY);
        birdfood = new Birdfood(2, birdfoodVector);


        for (let bird of birdArray) {
            if (birdIsNear(bird.position)) {
                bird.job = TASK.FLYTOFOOD; //vllt this.job
                bird.velocity = Vector.getDifference(new Vector(birdfood.position.x + Math.random() * (10 - 10) + 10, birdfood.foodPosition), bird.position);
                bird.velocity.scale(0.01); //Strecke wird in Bereiche unterteilt
                setTimeout(bird.isEating, 100 * fps); // wird mit scale multipliziert damit das 1 ergibt
                // angegebene Zahl lässt Vogel auf dem Vektor entlangfliegen --> muss mulitpliziert mit scale = 1 sein


                if (bird.velocity.x != 0) {
                    bird.job = TASK.EAT;

                }

            }
        }

    }

    function birdIsNear(_hotspot: Vector): boolean { // in main sonst wird in handleClickRight die Funktion nicht mehr gefunden

        let nearsize: number = 200;
        let getDifference: Vector = Vector.getDifference(_hotspot, new Vector(birdfood.position.x, birdfood.foodPosition));
        return (nearsize > getDifference.length); //vllt >= 

    }


    function handleClick(_event: MouseEvent): void {

        score--;

        console.log(_event);
        let snowballVector: Vector = new Vector(_event.offsetX, _event.offsetY);
        //offset gibt die Werte relativ zum Dokument zurück (beim Scrollen)
        snowball = new Snowball(6, snowballVector);

        window.setTimeout(getbirdHit, 400, snowballVector); // Parameter übergeben

    }

    function getbirdHit(_hotspot: Vector): void {

        for (let bird of birdArray) {

            if (bird.birdIsHit(_hotspot)) {
                deleteBird(bird);
                return;
            }
        }

    }

    function deleteBird(_bird: Bird): void {
        console.log("Vogel löschen")

        let index: number = birdArray.indexOf(_bird);
        // sucht bird im Array und schaut an welcher Stelle im Array der ist und gibt Stelle zurück
        birdArray.splice(index, 1); // an der Stelle index wird ein Element gelöscht 
        if (birdArray.length == 0) {
            end();

            clearInterval(interval);



        }
    }

    export function end(): void {

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=submit]");
        submit.addEventListener("click", nameScore);

        document.getElementById("Game").style.display = "none";
        document.getElementById("Endscreen").style.display = "initial";

    }

    function nameScore(): void {
        console.log("end");
        let insertedname: any = prompt("Your Score: " + score + "\n Enter your name.");
        if (insertedname != null) {
            sendtohighscorelist(insertedname, score);
        }
    }
    async function sendtohighscorelist(_insertedName: string, _score: number): Promise<void> {

        let query: string = "name=" + _insertedName + "&highScore=" + _score;
        let response: Response = await fetch(serveradress + "?" + query);
        alert(response);

    }

    async function gethighscorelist(): Promise<void> {

        console.log("Highscores ausgeben");
        let query: string = "command=retrieve";
        let response: Response = await fetch(serveradress + "?" + query);
        let responseText: string = await response.text();

        alert(responseText);
        let orders: HTMLDivElement = <HTMLDivElement>document.querySelector("span#highscorelist");
        orders.innerText = responseText;

    }
}
