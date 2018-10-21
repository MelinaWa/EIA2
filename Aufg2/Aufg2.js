/* Aufgabe: Aufgabe 2
Name: Melina Wald
Matrikel: 259225
Datum: 19.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe2;
(function (Aufgabe2) {
    function UNO() {
        // Deklaration Funktion (im DOMContentloaded gebraucht) 
        let c0 = {
            name: "Karte0",
            red: 1,
            yellow: 1,
            green: 1,
            blue: 1,
            black: 0,
        };
        let c1 = {
            name: "Karte1",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c2 = {
            name: "Karte2",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c3 = {
            name: "Karte3",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c4 = {
            name: "Karte4",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c5 = {
            name: "Karte5",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c6 = {
            name: "Karte6",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c7 = {
            name: "Karte7",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c8 = {
            name: "Karte8",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c9 = {
            name: "Karte9",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c10 = {
            name: "Ziehe 2",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c11 = {
            name: "Setz aus",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c12 = {
            name: "R.Wechsel",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        };
        let c13 = {
            name: "Ziehe 4",
            red: 0,
            yellow: 0,
            green: 0,
            blue: 0,
            black: 4,
        };
        let c14 = {
            name: "Wunschfarbe",
            red: 0,
            yellow: 0,
            green: 0,
            blue: 0,
            black: 4,
        };
        let cardscomplete = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];
        // Array für alle Karten
        function randomKarte(i) {
            return Math.floor(Math.random() * Math.floor(i)); // automatische Generierung der Karten
        }
        ;
        function placeDiv(c, i, n) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "attr" + n); //div bekommt ID für die Gest
            document.getElementById("attr" + n).innerHTML += i; //Zugriff auf ID (i für Text)
            let s = div.style;
            s.border = "outset black";
            s.borderRadius = 10 + "px";
            s.fontSize = 1 + "em";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = colour;
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = n * 110 + "px";
            s.bottom = 40 + "px";
            if (c == "#000000") {
                s.color = "white";
            }
        }
        let colour = ""; // Farbe s.u.
        let x;
        let input = prompt("Wie viele Karten moechtest du?"); // Abfrage an Spieler
        x = Number(input); // Input (Nummer) wird an x übergeben 
        for (let o = 0; o < x; o++) {
            let u = randomKarte(15); // zufällige Auswahl der Karten 
            let t = randomKarte(5); //Zufallsgenerator für Ermittlung der Farben
            switch (t) {
                case 0:
                    colour = "#ff1111";
                    if (cardscomplete[u].red > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].red--;
                        continue;
                    }
                case 1:
                    colour = "#ffee55";
                    if (cardscomplete[u].yellow > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].yellow--;
                        continue;
                    }
                case 2:
                    colour = "#22aadd";
                    if (cardscomplete[u].blue > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].blue--;
                        continue;
                    }
                case 3:
                    colour = "#11aa11";
                    if (cardscomplete[u].green > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].green--;
                        continue;
                    }
                case 4:
                    colour = "black";
                    if (cardscomplete[u].black > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].black--;
                        continue;
                    }
                    else {
                        o--;
                        continue;
                    }
            }
        }
        function AblageStapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablagestapel");
            document.getElementById("Ablagestapel").innerHTML += "Ablagestapel";
            let s = div.style;
            s.width = 180 + "px";
            s.height = 280 + "px";
            s.top = 30 + "px";
            s.right = 100 + "px";
            s.borderRadius = 5 + "px";
            s.fontSize = 1.5 + "em";
            s.border = "outset black";
            s.color = "black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#aaaacc";
        }
        function Nachziehbereich() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Nachziehbereich");
            document.getElementById("Nachziehbereich").innerHTML += "Nachziehbereich";
            let s = div.style;
            s.width = 180 + "px";
            s.height = 280 + "px";
            s.left = 30 + "px";
            s.top = 30 + "px";
            s.borderRadius = 5 + "px";
            s.fontSize = 1.5 + "em";
            s.border = "outset black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#aaaacc";
        }
        AblageStapel();
        Nachziehbereich();
        //Aufruf der Funktionen
    }
    document.addEventListener("DOMContentLoaded", (UNO));
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufg2.js.map