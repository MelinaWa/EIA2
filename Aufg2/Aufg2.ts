/* Aufgabe: Aufgabe 2
Name: Melina Wald
Matrikel: 259225
Datum: 19.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

namespace Aufgabe2 {

    function UNO() {
        
        // Deklaration Funktion (im DOMContentloaded gebraucht) 

        interface Card { // alle Karten außer 0 gibts zwei mal in jeder Farbe 
            name: string;
            green: number;
            yellow: number;
            blue: number;
            red: number;
            black: number;
        }

        let c0: Card = {
            name: "Karte0",
            red: 1,
            yellow: 1,
            green: 1,
            blue: 1,
            black: 0,
        }

        let c1: Card = {
            name: "Karte1",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c2: Card = {
            name: "Karte2",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c3: Card = {
            name: "Karte3",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c4: Card = {
            name: "Karte4",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c5: Card = {
            name: "Karte5",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c6: Card = {
            name: "Karte6",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c7: Card = {
            name: "Karte7",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c8: Card = {
            name: "Karte8",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c9: Card = {
            name: "Karte9",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c10: Card = {
            name: "Ziehe 2",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c11: Card = {
            name: "Setz aus",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c12: Card = {
            name: "R.Wechsel",
            red: 2,
            yellow: 2,
            green: 2,
            blue: 2,
            black: 0,
        }

        let c13: Card = {
            name: "Ziehe 4",
            red: 0,
            yellow: 0,
            green: 0,
            blue: 0,
            black: 4,
        }
        let c14: Card = {
            name: "Wunschfarbe",
            red: 0,
            yellow: 0,
            green: 0,
            blue: 0,
            black: 4,
        }

        let cardscomplete: Card[] = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];
        // Array für alle Karten

        function randomKarte(i: number) {
            return Math.floor(Math.random() * Math.floor(i)); // automatische Generierung der Karten
        };
       
        let colour: string = ""; // Farbe s.u.

        let x: number;
        let input: string = prompt("Wie viele Karten moechtest du?"); // Abfrage an Spieler
        x = Number(input); // Input (Nummer) wird an x übergeben 

        for (let o: number = 0; o < x; o++) { // Wie viele Karten zum Spielen 
            let u: number = randomKarte(15); // zufällige Auswahl der Karten 
            let t: number = randomKarte(5); //Zufallsgenerator für Ermittlung der Farben

            
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
                    colour = "#11aa11"
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
                        continue
                    }


}
    document.addEventListener("DOMContentLoaded", (UNO)); 
}
    }}*/