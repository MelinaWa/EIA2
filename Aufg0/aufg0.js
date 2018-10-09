var Aufg0;
(function (Aufg0) {
    function hallo() {
        var i = prompt("Wie heisst du?");
        var node = document.getElementById("cont");
        node.innerHTML += "Hallo ";
        node.innerHTML += i;
        node.innerHTML += ", schoen dich zu sehen.";
        console.log("Hallo", i, ", schoen dich zu sehen.");
    }
    document.addEventListener('DOMContentLoaded', hallo);
})(Aufg0 || (Aufg0 = {}));
//# sourceMappingURL=aufg0.js.map