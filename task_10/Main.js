"use strict";
var L_10;
(function (L_10) {
    window.addEventListener("load", handleLoad);
    let snowflakeArray = [];
    let birdArray = [];
    // export let image: ImageData;
    function handleLoad(_event) {
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L_10.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 20; i++) {
            let bird = new L_10.Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }
        for (let i = 0; i < 120; i++) {
            let snowflake = new L_10.Snowflake(2);
            console.log("new flake");
            snowflakeArray.push(snowflake);
        }
        L_10.image = L_10.crc2.getImageData(0, 0, 1200, 700);
        window.setInterval(update, 20);
        function update() {
            console.log("Update");
            L_10.crc2.clearRect(0, 0, L_10.crc2.canvas.width, L_10.crc2.canvas.height);
            console.log(L_10.image);
            L_10.crc2.putImageData(L_10.image, 0, 0);
            for (let i = 0; i < birdArray.length; i++) {
                birdArray[i].draw();
                birdArray[i].move(100);
            }
            for (let i = 0; i < snowflakeArray.length; i++) {
                snowflakeArray[i].draw();
                snowflakeArray[i].move(100);
            }
        }
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Main.js.map