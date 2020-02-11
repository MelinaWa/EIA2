"use strict";
/*Aufgabe: Endabgabe
Name: Melina Wald
Matrikel: 259225
Datum: 11.02.20
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var L_Endabgabe;
(function (L_Endabgabe) {
    window.addEventListener("load", startMainScreen);
    let serveradress = "https://eia2melina.herokuapp.com/";
    let snowflakeArray = [];
    let birdArray = [];
    let snowball;
    let birdfood;
    let fps = 20;
    let score = 100;
    function startMainScreen(_event) {
        document.getElementById("Endscreen").style.display = "none";
        document.getElementById("Game").style.display = "none";
        let startbutton = document.getElementById("start");
        startbutton.addEventListener("click", handleLoad);
        console.log("startbutton");
    }
    async function handleLoad(_event) {
        document.getElementById("Startscreen").style.display = "none";
        document.getElementById("Endscreen").style.display = "none";
        document.getElementById("Game").style.display = "initial";
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L_Endabgabe.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleClickRight);
        let highscorebutton = document.getElementById("highscorelistbutton");
        highscorebutton.addEventListener("click", gethighscorelist);
        document.getElementById("highscorelist").addEventListener("click", gethighscorelist);
        for (let i = 0; i < 1; i++) {
            let bird = new L_Endabgabe.Bird(2);
            birdArray.push(bird);
        }
        for (let u = 0; u < 120; u++) {
            let snowflake = new L_Endabgabe.Snowflake(1.5);
            snowflakeArray.push(snowflake);
        }
        L_Endabgabe.image = L_Endabgabe.crc2.getImageData(0, 0, 1320, 725);
        window.setInterval(update, 20);
        function update() {
            L_Endabgabe.crc2.putImageData(L_Endabgabe.image, 0, 0);
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
                if (birdfood.size >= 2)
                    birdfood.size -= 0.2;
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
    /// Throw Food ///
    function handleClickRight(_event) {
        console.log(_event);
        let birdfoodVector = new L_Endabgabe.Vector(_event.offsetX, _event.offsetY);
        birdfood = new L_Endabgabe.Birdfood(2, birdfoodVector);
        for (let bird of birdArray) {
            if (birdIsNear(bird.position)) {
                bird.job = L_Endabgabe.TASK.FLYTOFOOD;
                bird.velocity = L_Endabgabe.Vector.getDifference(new L_Endabgabe.Vector(birdfood.position.x + Math.random() * (15 - 10) + 15, birdfood.foodPosition), bird.position);
                bird.velocity.scale(0.01);
                setTimeout(bird.isEating, 100 * fps);
                if (bird.velocity.x != 0) {
                    bird.job = L_Endabgabe.TASK.EAT;
                }
            }
        }
    }
    function birdIsNear(_hotspot) {
        let nearsize = 200;
        let getDifference = L_Endabgabe.Vector.getDifference(_hotspot, new L_Endabgabe.Vector(birdfood.position.x, birdfood.foodPosition));
        return (nearsize > getDifference.length); //vllt >= 
    }
    /// Throw Snowball ///
    function handleClick(_event) {
        score--;
        console.log(_event);
        let snowballVector = new L_Endabgabe.Vector(_event.offsetX, _event.offsetY);
        snowball = new L_Endabgabe.Snowball(6, snowballVector);
        window.setTimeout(getbirdHit, 400, snowballVector);
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
        birdArray.splice(index, 1);
        if (birdArray.length == 0) {
            end();
            clearInterval(interval);
        }
    }
    function end() {
        let submit = document.querySelector("button[type=submit]");
        submit.addEventListener("click", nameScore);
        document.getElementById("Game").style.display = "none";
        document.getElementById("Endscreen").style.display = "inherit";
    }
    L_Endabgabe.end = end;
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
    }
    async function gethighscorelist() {
        let query = "command=retrieve";
        let response = await fetch(serveradress + "?" + query);
        let responseJson = await response.json();
        for (let index = 0; index < responseJson.length; index++) {
            delete responseJson[index]["_id"];
        }
        let sortedJson = responseJson.sort(({ score: score_1 }, { score: score_2 }) => score_1 - score_2);
        let responseText = "";
        for (let index = 0; index < sortedJson.length; index++) {
            responseText += sortedJson[index].name + " – " + sortedJson[index].score + "\n";
        }
        let highscores = document.querySelector("span#highscorelist");
        highscores.innerText = responseText;
    }
})(L_Endabgabe || (L_Endabgabe = {}));
//# sourceMappingURL=Main.js.map