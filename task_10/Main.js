"use strict";
var L_10;
(function (L_10) {
    window.addEventListener("load", handleLoad);
    let snowflakeArray = [];
    let birdArray = [];
    let pickingBirdArray = [];
    let throwSnowball;
    let throwBirdfood;
    let bird; //Vielleicht wieder ändern
    function handleLoad(_event) {
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L_10.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleClickRight);
        for (let i = 0; i < 20; i++) {
            bird = new L_10.Bird(2);
            // console.log("new bird");
            birdArray.push(bird);
        }
        for (let i = 0; i < 120; i++) {
            let snowflake = new L_10.Snowflake(1.5);
            // console.log("new flake");
            snowflakeArray.push(snowflake);
            for (let i = 0; i < 20; i++) {
                let pickingbird = new L_10.PickingBird(2);
                pickingBirdArray.push(pickingbird);
            }
            L_10.image = L_10.crc2.getImageData(0, 0, 1200, 700);
            window.setInterval(update, 20);
            // window.setTimeout (getbirdHit, 40000);
            function update() {
                // console.log("Update");
                L_10.crc2.clearRect(0, 0, L_10.crc2.canvas.width, L_10.crc2.canvas.height);
                // console.log (image);
                L_10.crc2.putImageData(L_10.image, 0, 0);
                for (let i = 0; i < pickingBirdArray.length; i++) {
                    pickingBirdArray[i].draw();
                    pickingBirdArray[i].move(100);
                }
                for (let i = 0; i < birdArray.length; i++) {
                    birdArray[i].draw();
                    birdArray[i].move(100);
                }
                for (let i = 0; i < snowflakeArray.length; i++) {
                    snowflakeArray[i].draw();
                    snowflakeArray[i].move(100);
                }
                if (throwSnowball)
                    throwSnowball.draw();
                if (throwBirdfood)
                    throwBirdfood.draw();
            }
        }
        function handleClickRight(_event) {
            console.log(_event);
            let birdfoodVector = new L_10.Vector(_event.offsetX, _event.offsetY);
            throwBirdfood = new L_10.Birdfood(3, birdfoodVector);
        }
        function handleClick(_event) {
            console.log(_event);
            let snowballVector = new L_10.Vector(_event.offsetX, _event.offsetY);
            //offset gibt die Werte relativ zum Dokument zurück (beim Scrollen)
            throwSnowball = new L_10.Snowball(5, snowballVector);
            let birdHit = getbirdHit(snowballVector);
            if (birdHit)
                deleteBird(birdHit);
            console.log("Vogel löschen");
        }
        function getbirdHit(_hotspot) {
            for (let bird of birdArray) {
                if (bird.isHit(_hotspot))
                    return bird;
            }
            return null;
        }
        function deleteBird(_bird) {
            let index = birdArray.indexOf(_bird);
            birdArray.splice(index, 1);
        }
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Main.js.map