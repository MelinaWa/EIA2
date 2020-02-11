/* Aufgabe: Aufgabe 2
Name: Melina Wald
Matrikel: 259225
Datum: 26.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

namespace UNO {
    interface Card {
        color: string;
        value: string;
    }
    let colors: string[] = ["red", "green", "blue", "yellow"]; 
    // Array f�r alle doppelten Karten (zb. rote 3) 
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Card[] = // Array f�r alle einzelnen Karten, sp�ter sollen hier alle Karten reingepusht werden
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

    function unokarten (): void {
        let kartenanzahl: string = prompt("Wie viele Karten?");
        let x: number = parseInt(kartenanzahl);
    

    for (let anz: number = x; anz > 0; anz--) { // Anzahl die wir bei prompt eingegeben haben wird 
                                                // bei jedem Durchlauf um 1 abgezogen 
        let r: number = Math.floor(Math.random() * (cards.length - 1)); // Karte wird aus cards gel�scht
        handcards.push(cards[r]); // wird in handcards Array gepusht 
        cards.splice(r, 1); // An der Position r wird die n�chste Karte abgezogen
    }

    for (let h: number = 0; h < handcards.length; h++) { // h = rechne solange bis die Anzahl der L�nge des Arrays erreicht ist 
        let div: HTMLElement = document.createElement("div"); // erstelle mir im html ein div
        document.getElementById("Cards").appendChild(div); // Kind erstellen f�r id Cards 
        div.innerHTML = handcards[h].value; // schreibe mir die Werte der Handkarten in meine divs rein
        div.classList.add("Cards"); // Klasse erstellen (f�r Farben im CSS) 
        div.classList.add(handcards[h].color); // f�ge den zuf�llig gew�hlten Farben der Handkarten die richtige Farbe hinzu 
    }

}
    document.addEventListener("DOMContentLoaded", (unokarten)); 
}*/