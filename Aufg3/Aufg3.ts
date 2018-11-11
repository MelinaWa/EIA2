/* Aufgabe: Aufgabe 3
Name: Melina Wald
Matrikel: 259225
Datum: 11.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace UNO3 {

    interface Card {
        color: string;
        value: string;

    }

    document.addEventListener("DOMContentLoaded", eingeben);
    document.addEventListener("keyup", pressKeyboard);

    let speichern: Card[] = [];

    let colors: string[] = ["red", "green", "blue", "yellow"];
    // Array für alle doppelten Karten (zb. rote 3) 
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Card[] = // Array für alle einzelnen Karten, später sollen hier alle Karten reingepusht werden
        [{ color: "red", value: "0" },
            { color: "blue", value: "0" },
            { color: "green", value: "0" },
            { color: "yellow", value: "0" },
            { color: "black", value: "+4" },
            { color: "black", value: "+4" },
            { color: "black", value: "+4" },
            { color: "black", value: "+4" },
            { color: "black", value: "C" },
            { color: "black", value: "C" },
            { color: "black", value: "C" },
            { color: "black", value: "C" }];

    // Karten Generierung 
    for (let farbe: number = 0; farbe < colors.length; farbe++) {
        for (let wert: number = 0; wert < values.length; wert++) {
            for (let z: number = 0; z < 2; z++) {
                let card: Card = { color: colors[farbe], value: values[wert] };
                cards.push(card);
            }
        }
    }

    console.log(cards);

    let handcards: Card[] = [];

    function eingeben(): void {
        let kartenanzahl: string = prompt("Wie viele Karten?");
        let x: number = parseInt(kartenanzahl);

        random(x);
        displayCards();


        let sortbycolor: HTMLElement = document.getElementById("sortcards");
        sortbycolor.addEventListener("click", sortcards); // button

        let cardtotake: HTMLElement = document.getElementById("Nachziehstapel");
        cardtotake.addEventListener("click", takecard); // Nachziehehen

        /*  let cardtotake: HTMLElement = document.getElementById("Ablagestapel");
          cardtotake.addEventListener("click", takeCard); // Ablegen */
    }

    //random
    function random(x: number): void { // x=Anzahl
        for (let anz: number = x; anz > 0; anz--) { // Anzahl die wir bei prompt eingegeben haben wird 
            // bei jedem Durchlauf um 1 abgezogen 
            let r: number = Math.floor(Math.random() * (cards.length - 1)); // Karte wird aus cards gelöscht
            handcards.push(cards[r]);
            cards.splice(r, 1); // An der Position r wird die nächste Karte abgezogen
        }
    }

    // ablegen      
    function playcard(event: MouseEvent): void {
        document.getElementById("Ablagestapel").innerHTML = "";
        let cardclicked: HTMLElement = <HTMLElement>event.target;
        let index: number = parseInt(cardclicked.id);
        speichern.push(handcards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("Ablagestapel").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayCards();
    }
    //sortieren
    function sortcards(): void {
        console.log(handcards);
        document.getElementById("Cards").innerHTML = "";
        handcards.sort(function(a: Card, b: Card): number {
            if (a.color > b.color) { return 1; }
            if (a.color < b.color) { return -1; }
            if (a.value > b.value) { return 1; }
            if (a.value < b.value) { return -1; }
            return 0;

        });
        console.log(handcards);
        displayCards();
    }
    // nachziehen
    function takecard(): void {
        random(1);
        displayCards();
    }

    function pressKeyboard(event: KeyboardEvent): void {
        if (event.keyCode == 32) // 32 = Leertaste 
        {
            takecard();
        }

    }
    function displayCards(): void {
        document.getElementById("Cards").innerHTML = "";
        for (let h: number = 0; h < handcards.length; h++) { // h = rechne solange bis die Anzahl der Länge des Arrays erreicht ist 
            let div: HTMLElement = document.createElement("div"); // erstelle mir im html ein div
            document.getElementById("Cards").appendChild(div); // Kind erstellen für id Cards 
            div.innerHTML = handcards[h].value; // schreibe mir die Werte der Handkarten in meine divs rein
            let id: string = h.toString(); // gibt Wert zurück
            div.setAttribute("id", id); 
            div.classList.add("Cards");  // Klasse erstellen (für Farben im CSS) 
            div.classList.add(handcards[h].color); // füge den zufällig gewählten Farben der Handkarten die richtige Farbe hinzu 
            div.addEventListener("click", playcard); // Installiere Event Listener auf div 

        }
    }

}
