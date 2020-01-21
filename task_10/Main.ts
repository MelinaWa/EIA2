namespace L_10 {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    // export let image: ImageData;

    function handleLoad(_event: Event): void {
        console.log("starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        
        for (let i: number = 0; i < 20; i++) {
            let bird: Bird = new Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }

        for (let i: number = 0; i < 120; i++) {
            let snowflake: Snowflake = new Snowflake(2);
            console.log("new flake");
            snowflakeArray.push(snowflake);

        }
        image = crc2.getImageData (0,0, 1200, 700);
        window.setInterval(update, 20);


        function update(): void {
            console.log("Update");
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            console.log (image);
            crc2.putImageData(image, 0, 0);
            
            
            for (let i: number = 0; i < birdArray.length; i++) {
                birdArray[i].draw();
                birdArray[i].move(100);
            }
            
            for (let i: number = 0; i < snowflakeArray.length; i++) {
                 snowflakeArray[i].draw();
                 snowflakeArray[i].move(100);
            }

      
        }

    }



}