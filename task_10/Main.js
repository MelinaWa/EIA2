"use strict";
var L_10;
(function (L_10) {
    window.addEventListener("load", handleLoad);
    let snowflakeArray = [];
    let birdArray = [];
    let snowball;
    let birdfood;
    let fps = 30;
    let score = 5000;
    function handleLoad(_event) {
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L_10.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleClickRight);
        //  let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        // console.log (submit);
        // sucht button in html und installiert click listener darauf
        // submit.addEventListener("click", sendScore);
        for (let i = 0; i < 20; i++) {
            let bird = new L_10.Bird(2);
            // console.log("new bird");
            birdArray.push(bird);
        }
        for (let u = 0; u < 120; u++) {
            let snowflake = new L_10.Snowflake(1.5);
            // console.log("new flake");
            snowflakeArray.push(snowflake);
        }
        window.setInterval(createScore, 1000);
        function createScore() {
            score--;
            console.log(score);
        }
        L_10.image = L_10.crc2.getImageData(0, 0, 1320, 725);
        window.setInterval(update, 20);
        function update() {
            // console.log("Update");
            // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            // console.log (image);
            L_10.crc2.putImageData(L_10.image, 0, 0);
            for (let i = 0; i < birdArray.length; i++) {
                birdArray[i].draw();
                birdArray[i].move(1);
            }
            for (let u = 0; u < snowflakeArray.length; u++) {
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
                if (birdfood.size >= 2) // gibt die Größe an, auf die es schrumpfen soll
                    birdfood.size -= 0.2; // gibt an, um wie viel kleiner 
                if (birdfood.size <= 2 && birdfood.size >= 0.005)
                    birdfood.size -= 0.005;
            }
        }
    }
    function handleClick(_event) {
        score--;
        console.log(_event);
        let snowballVector = new L_10.Vector(_event.offsetX, _event.offsetY);
        //offset gibt die Werte relativ zum Dokument zurück (beim Scrollen)
        snowball = new L_10.Snowball(6, snowballVector);
        window.setTimeout(getbirdHit, 400, snowballVector); // Parameter übergeben
        //getbirdHit(snowballVector);
    }
    function handleClickRight(_event) {
        console.log(_event);
        let birdfoodVector = new L_10.Vector(_event.offsetX, _event.offsetY);
        birdfood = new L_10.Birdfood(2, birdfoodVector);
        for (let bird of birdArray) {
            if (birdIsNear(bird.position)) {
                bird.job = L_10.TASK.FLYTOFOOD; //vllt this.job
                bird.velocity = L_10.Vector.getDifference(new L_10.Vector(birdfood.position.x + Math.random() * (20 - 10) + 20, birdfood.foodPosition), bird.position);
                bird.velocity.scale(0.01); //Strecke wird in Bereiche unterteilt
                setTimeout(bird.isEating, 100 * fps); // wird mit scale multipliziert damit das 1 ergibt
                // angegebene Zahl lässt Vogel auf dem Vektor entlangfliegen --> muss mulitpliziert mit scale = 1 sein
                if (bird.velocity.x != 0) {
                    bird.job = L_10.TASK.EAT;
                }
            }
        }
    }
    function birdIsNear(_hotspot) {
        let nearsize = 300;
        let getDifference = L_10.Vector.getDifference(_hotspot, new L_10.Vector(birdfood.position.x, birdfood.foodPosition));
        return (nearsize > getDifference.length); //vllt >= 
    }
    function getbirdHit(_hotspot) {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot)) {
                deleteBird(bird);
                return;
            }
        }
    }
    function deleteBird(_bird) {
        console.log("Vogel löschen");
        let index = birdArray.indexOf(_bird);
        // sucht bird im Array und schaut an welcher Stelle im Array der ist und gibt Stelle zurück
        birdArray.splice(index, 1); // an der Stelle index wird ein Element gelöscht 
        if (birdArray.length == 0) {
            location.replace("Endscreen.html");
        }
    }
})(L_10 || (L_10 = {}));
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
//# sourceMappingURL=Main.js.map