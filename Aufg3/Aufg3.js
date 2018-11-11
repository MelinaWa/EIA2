/* Aufgabe: Aufgabe 3
Name: Melina Wald
Matrikel: 259225
Datum: 11.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var UNO3;
(function (UNO3) {
    document.addEventListener("DOMContentLoaded", eingeben);
    document.addEventListener("keyup", pressKeyboard);
    let speichern = [];
    let colors = ["red", "green", "blue", "yellow"];
    // Array f�r alle doppelten Karten (zb. rote 3) 
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "red", value: "0" },
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
    for (let farbe = 0; farbe < colors.length; farbe++) {
        for (let wert = 0; wert < values.length; wert++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[farbe], value: values[wert] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let handcards = [];
    function eingeben() {
        let kartenanzahl = prompt("Wie viele Karten?");
        let x = parseInt(kartenanzahl);
        random(x);
        displayCards();
        let sortbycolor = document.getElementById("sortcards");
        sortbycolor.addEventListener("click", sortcards); // button
        let cardtotake = document.getElementById("Nachziehstapel");
        cardtotake.addEventListener("click", takecard); // Nachziehehen
        /*  let cardtotake: HTMLElement = document.getElementById("Ablagestapel");
          cardtotake.addEventListener("click", takeCard); // Ablegen */
    }
    //random
    function random(x) {
        for (let anz = x; anz > 0; anz--) {
            // bei jedem Durchlauf um 1 abgezogen 
            let r = Math.floor(Math.random() * (cards.length - 1)); // Karte wird aus cards gel�scht
            handcards.push(cards[r]);
            cards.splice(r, 1); // An der Position r wird die n�chste Karte abgezogen
        }
    }
    // ablegen      
    function playcard(event) {
        document.getElementById("Ablagestapel").innerHTML = "";
        let cardclicked = event.target;
        let index = parseInt(cardclicked.id);
        speichern.push(handcards[index]);
        let div = document.createElement("div");
        document.getElementById("Ablagestapel").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayCards();
    }
    //sortieren
    function sortcards() {
        console.log(handcards);
        document.getElementById("Cards").innerHTML = "";
        handcards.sort(function (a, b) {
            if (a.color > b.color) {
                return 1;
            }
            if (a.color < b.color) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });
        console.log(handcards);
        displayCards();
    }
    // nachziehen
    function takecard() {
        random(1);
        displayCards();
    }
    function pressKeyboard(event) {
        if (event.keyCode == 32) {
            takecard();
        }
    }
    function displayCards() {
        document.getElementById("Cards").innerHTML = "";
        for (let h = 0; h < handcards.length; h++) {
            let div = document.createElement("div"); // erstelle mir im html ein div
            document.getElementById("Cards").appendChild(div); // Kind erstellen f�r id Cards 
            div.innerHTML = handcards[h].value; // schreibe mir die Werte der Handkarten in meine divs rein
            let id = h.toString(); // gibt Wert zur�ck
            div.setAttribute("id", id);
            div.classList.add("Cards"); // Klasse erstellen (f�r Farben im CSS) 
            div.classList.add(handcards[h].color); // f�ge den zuf�llig gew�hlten Farben der Handkarten die richtige Farbe hinzu 
            div.addEventListener("click", playcard); // Installiere Event Listener auf div 
        }
    }
})(UNO3 || (UNO3 = {}));
//# sourceMappingURL=Aufg3.js.map