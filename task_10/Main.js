"use strict";
var L_10;
(function (L_10) {
    window.addEventListener("load", start);
    let serveradress = "https://eia2melina.herokuapp.com/";
    let snowflakeArray = [];
    let birdArray = [];
    let snowball;
    let birdfood;
    let fps = 20;
    let score = 500;
    //let startbutton: HTMLButtonElement;
    // function handleLoad(_event: Event): void {
    function start(_event) {
        document.getElementById("Endscreen").style.display = "none";
        document.getElementById("Game").style.display = "none";
        let startbutton = document.getElementById("start");
        startbutton.addEventListener("click", handleLoad);
        console.log("startbutton");
    }
    async function handleLoad(_event) {
        console.log("hallo");
        document.getElementById("Startscreen").style.display = "none";
        document.getElementById("Endscreen").style.display = "none";
        document.getElementById("Game").style.display = "initial";
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L_10.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleClickRight);
        let highscorebutton = document.getElementById("highscorelistbutton");
        highscorebutton.addEventListener("click", gethighscorelist);
        document.getElementById("highscorelist").addEventListener("click", gethighscorelist);
        for (let i = 0; i < 1; i++) {
            let bird = new L_10.Bird(2);
            birdArray.push(bird);
        }
        for (let u = 0; u < 120; u++) {
            let snowflake = new L_10.Snowflake(1.5);
            snowflakeArray.push(snowflake);
        }
        L_10.image = L_10.crc2.getImageData(0, 0, 1320, 725);
        window.setInterval(update, 20);
        function update() {
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
                if (birdfood.position.y < birdfood.foodPosition) {
                    birdfood.move(1);
                }
            }
        }
    }
    let interval = window.setInterval(createScore, 1000);
    function createScore() {
        score--;
        console.log(score);
    }
    function handleClickRight(_event) {
        console.log(_event);
        let birdfoodVector = new L_10.Vector(_event.offsetX, _event.offsetY);
        birdfood = new L_10.Birdfood(2, birdfoodVector);
        for (let bird of birdArray) {
            if (birdIsNear(bird.position)) {
                bird.job = L_10.TASK.FLYTOFOOD; //vllt this.job
                bird.velocity = L_10.Vector.getDifference(new L_10.Vector(birdfood.position.x + Math.random() * (10 - 10) + 10, birdfood.foodPosition), bird.position);
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
        let nearsize = 200;
        let getDifference = L_10.Vector.getDifference(_hotspot, new L_10.Vector(birdfood.position.x, birdfood.foodPosition));
        return (nearsize > getDifference.length); //vllt >= 
    }
    function handleClick(_event) {
        score--;
        console.log(_event);
        let snowballVector = new L_10.Vector(_event.offsetX, _event.offsetY);
        //offset gibt die Werte relativ zum Dokument zurück (beim Scrollen)
        snowball = new L_10.Snowball(6, snowballVector);
        window.setTimeout(getbirdHit, 400, snowballVector); // Parameter übergeben
    }
    function getbirdHit(_hotspot) {
        for (let bird of birdArray) {
            if (bird.birdIsHit(_hotspot)) {
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
            end();
            clearInterval(interval);
        }
    }
    function end() {
        let submit = document.querySelector("button[type=submit]");
        submit.addEventListener("click", nameScore);
        document.getElementById("Game").style.display = "none";
        document.getElementById("Endscreen").style.display = "initial";
    }
    L_10.end = end;
    function nameScore() {
        console.log("end");
        let insertedname = prompt("Your Score: " + score + "\n Enter your name.");
        if (insertedname != null) {
            sendtohighscorelist(insertedname, score);
        }
    }
    async function sendtohighscorelist(_insertedName, _score) {
        let query = "name=" + _insertedName + "&highScore=" + _score;
        let response = await fetch(serveradress + "?" + query);
        alert(response);
    }
    async function gethighscorelist() {
        console.log("Highscores ausgeben");
        let query = "command=retrieve";
        let response = await fetch(serveradress + "?" + query);
        let responseText = await response.text();
        alert(responseText);
        let orders = document.querySelector("span#highscorelist");
        orders.innerText = responseText;
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Main.js.map