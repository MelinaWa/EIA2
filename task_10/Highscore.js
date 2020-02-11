"use strict";
var L_10;
(function (L_10) {
    window.addEventListener("load", handleLoad);
    let serveradress;
    function handleLoad(_event) {
        document.getElementById("highscorelist").addEventListener("click", highScoreList);
    }
    async function highScoreList(_event) {
        let query = "command=retrieve";
        let response = await fetch(serveradress + "?" + query);
        let responseText = await response.text();
        let highScoreList = document.querySelector("div#highScoreList");
        highScoreList.innerText = responseText;
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=Highscore.js.map