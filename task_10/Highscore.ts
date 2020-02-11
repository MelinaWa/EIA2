namespace L_10 {
    window.addEventListener("load", handleLoad);

    let serveradress: "https://eia2melina.herokuapp.com/";

    function handleLoad(_event: Event): void {
        document.getElementById("highscorelist").addEventListener("click", highScoreList);
    }

    async function highScoreList(_event: Event): Promise<void> {
        let query: string = "command=retrieve";
        let response: Response = await fetch(serveradress + "?" + query);
        let responseText: string = await response.text();

        let highScoreList: HTMLDivElement = <HTMLDivElement>document.querySelector("div#highScoreList");
        highScoreList.innerText = responseText;
    }
}