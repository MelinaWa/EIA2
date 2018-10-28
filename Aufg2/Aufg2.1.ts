/* Aufgabe: Aufgabe 2
Name: Melina Wald
Matrikel: 259225
Datum: 26.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace UNO {
    interface Card {
        color: string;
        value: string;
    }
    let colors: string[] = ["red", "green", "blue", "yellow"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Card[] =
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
    

    for (let anz: number = x; anz > 0; anz--) {
        let r: number = Math.floor(Math.random() * (cards.length - 1));
        handcards.push(cards[r]);
        cards.splice(r, 1);
    }

    for (let h: number = 0; h < handcards.length; h++) {
        let div: HTMLElement = document.createElement("div");
        document.getElementById("Cards").appendChild(div);
        div.innerHTML = handcards[h].value;
        div.classList.add("Cards");
        div.classList.add(handcards[h].color); 
    }

}
    document.addEventListener("DOMContentLoaded", (unokarten));
}