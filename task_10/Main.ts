namespace L_10 {

    window.addEventListener("load", handleLoad);
    


    export let crc2: CanvasRenderingContext2D;

    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    let snowball: Snowball;
    let birdfood: Birdfood;
    let fps: number = 30;
    let score: number = 5000;

    function handleLoad(_event: Event): void {
        console.log("starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleClickRight);
        

        //  let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        // console.log (submit);
        // sucht button in html und installiert click listener darauf

        // submit.addEventListener("click", sendScore);

        for (let i: number = 0; i < 20; i++) {
            let bird:Bird = new Bird(2);
            // console.log("new bird");
            birdArray.push(bird);
        }

        for (let u: number = 0; u < 120; u++) {
            let snowflake: Snowflake = new Snowflake(1.5);
            // console.log("new flake");
            snowflakeArray.push(snowflake);

        }

        window.setInterval(createScore, 1000);

        function createScore(): void {
            score--;
            console.log(score);
        }

        image = crc2.getImageData(0, 0, 1320, 725);
        window.setInterval(update, 20);



        function update(): void {

            
            // console.log("Update");
            // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            // console.log (image);
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
                   
         
                     } 
                     
                         

            }
        }
                    

        function handleClick(_event: MouseEvent): void {

            score --;

            console.log(_event);
            let snowballVector: Vector = new Vector(_event.offsetX, _event.offsetY);
            //offset gibt die Werte relativ zum Dokument zurück (beim Scrollen)
            snowball = new Snowball(6, snowballVector);

            window.setTimeout(getbirdHit, 400, snowballVector); // Parameter übergeben

            //getbirdHit(snowballVector);


        }

        function handleClickRight(_event: MouseEvent): void {


            console.log(_event);
            let birdfoodVector: Vector = new Vector(_event.offsetX, _event.offsetY);
            birdfood = new Birdfood(2, birdfoodVector);
            
            
        for (let bird of birdArray) {
            if (birdIsNear(bird.position)) {
                bird.job = TASK.FLYTOFOOD; //vllt this.job
                bird.velocity = Vector.getDifference(new Vector(birdfood.position.x + Math.random() * (20 - 10) + 20, birdfood.foodPosition), bird.position);
                bird.velocity.scale(0.01); //Strecke wird in Bereiche unterteilt
                setTimeout(bird.isEating, 100 * fps); // wird mit scale multipliziert damit das 1 ergibt
                // angegebene Zahl lässt Vogel auf dem Vektor entlangfliegen --> muss mulitpliziert mit scale = 1 sein


                if (bird.velocity.x != 0) {
                    bird.job = TASK.EAT;

                }

            }
        }

    }

    function birdIsNear(_hotspot: Vector): boolean {

        let nearsize: number = 300;
        let getDifference: Vector = Vector.getDifference(_hotspot, new Vector(birdfood.position.x, birdfood.foodPosition));
        return (nearsize > getDifference.length); //vllt >= 

    }

    function getbirdHit(_hotspot: Vector): void { //_ wenns von außen kommt

        for (let bird of birdArray) {

            if (bird.isHit(_hotspot)) {
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
            location.replace("Endscreen.html");

        }
    }

    
}






    /*    document.getElementById("score").innerText = "Time:" + timer.toString() + "s" + " | Snowballs:" + (20 - snowball.length).toString() + " | Snowball Ready: " + snowballReadyCheck.toString() + " | Score:" + score.toString();
        if (snowballs.length > 19) {
            console.log(timer);
            if (snowballs[19].timer == 0) {
                endscreen();
            }
        }
 
    }
 
      let address: string = "https://....herokuapp.com/";
     
      function sendRequestWithCustomData(): void {
          console.log("requestcustom");
          let xhr: XMLHttpRequest = new XMLHttpRequest();
          let sendString: string = "";
          let textInput = "your name...";
          sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;
     
          xhr.open("GET", address + "?" + sendString, true);
          xhr.addEventListener("readystatechange", handleStateChange);
          xhr.send();
          highscores();
      }
     
      function handleStateChange(_event: ProgressEvent): void {
          var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
          if (xhr.readyState == XMLHttpRequest.DONE) {
              console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
              console.log("response: " + xhr.response);
          } 
     
      }
     
    
 
   async function sendScore(_event: Event): Promise<void> {
       console.log("send score")
       let query: URLSearchParams = new URLSearchParams;//(<any>formData);
       fetch("Endscreen.html=?" + query.toString());
       alert ("Score sent!");
 
    } 
*/

