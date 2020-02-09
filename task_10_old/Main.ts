namespace L_10 {

    window.addEventListener("load", handleLoad);


    export let crc2: CanvasRenderingContext2D;

    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    let throwSnowball: Snowball;
    let throwBirdfood: Birdfood;
    let bird: Bird; //Vielleicht wieder ändern


    function handleLoad(_event: Event): void {
        console.log("starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("keyup", handleClickRight);
        


        for (let i: number = 0; i < 20; i++) {
            bird = new Bird(2);
            // console.log("new bird");
            birdArray.push(bird);
        }

        for (let i: number = 0; i < 120; i++) {
            let snowflake: Snowflake = new Snowflake(1.5);
            // console.log("new flake");
            snowflakeArray.push(snowflake);


        }

        image = crc2.getImageData(0, 0, 1200, 700);
        window.setInterval(update, 20);

        function update(): void {
            // console.log("Update");
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            // console.log (image);
            crc2.putImageData(image, 0, 0);


            for (let i: number = 0; i < birdArray.length; i++) {
                birdArray[i].draw();
                birdArray[i].move(1);
            }

            for (let i: number = 0; i < snowflakeArray.length; i++) {
                snowflakeArray[i].draw();
                snowflakeArray[i].move(1);
            }

            if (throwSnowball) {
                throwSnowball.draw();
            }

            if (throwBirdfood) {
                throwBirdfood.draw();
            }

        }

        function handleClickRight(_event: KeyboardEvent): void {
                    
        
        if (_event.keyCode === 32) {
            console.log("leertaste", _event);
         //   let birdfoodVector: Vector = new Vector(_event.offsetX, _event.offsetY);
          //  throwBirdfood = new Birdfood(4, birdfoodVector);


}


        }


        function handleClick (_event: MouseEvent): void {
            console.log(_event);
            let snowballVector: Vector = new Vector(_event.offsetX, _event.offsetY);
            //offset gibt die Werte relativ zum Dokument zurück (beim Scrollen)
            throwSnowball = new Snowball(6, snowballVector);

            window.setTimeout (getbirdHit, 500, snowballVector); // Parameter übergeben

            //getbirdHit(snowballVector);

        }

        function getbirdHit(_hotspot: Vector): void {

            console.log("Hotspot und BirdArray");
            console.log(_hotspot);
            console.log(birdArray);

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
            birdArray.splice(index, 1);
            if (birdArray.length == 0) {
                location.replace("Endscreen.html");

            }

        }


    }
} 



